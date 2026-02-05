import { NextResponse } from "next/server";

let cachedTweets = null;
let lastFetch = 0;
const CACHE_TIME = 15 * 60 * 1000;

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const username = searchParams.get("username") || "amasandrhodlaw";
  const bearerToken = process.env.TWITTER_BEARER_TOKEN;
  const now = Date.now();

  if (cachedTweets && now - lastFetch < CACHE_TIME) {
    return NextResponse.json({ tweets: cachedTweets, source: "cache" });
  }

  if (!bearerToken) {
    return NextResponse.json(
      { error: "Server Configuration Error: Token Missing" },
      { status: 500 }
    );
  }

  try {
    // 1. Fetch User Data
    const userRes = await fetch(
      `https://api.twitter.com/2/users/by/username/${username}?user.fields=profile_image_url`,
      {
        headers: { Authorization: `Bearer ${bearerToken}` }
      }
    );

    const userData = await userRes.json();

    // Check if Twitter returned an error (like Invalid Token or 429)
    if (!userRes.ok) {
      return NextResponse.json(
        {
          error: userData.detail || userData.title || "Twitter API Error",
          status: userRes.status
        },
        { status: userRes.status }
      );
    }

    if (!userData.data?.id) {
      return NextResponse.json(
        { error: "Twitter user not found" },
        { status: 404 }
      );
    }

    const userId = userData.data.id;

    // 2. Fetch Tweets
    const tweetsRes = await fetch(
      `https://api.twitter.com/2/users/${userId}/tweets?max_results=5&tweet.fields=created_at,public_metrics,entities&expansions=author_id&user.fields=name,username,profile_image_url`,
      {
        headers: { Authorization: `Bearer ${bearerToken}` }
      }
    );

    const tweetsData = await tweetsRes.json();

    if (!tweetsRes.ok) {
      throw new Error(tweetsData.detail || "Failed to fetch tweets");
    }

    // 3. Safe Formatting
    const author = tweetsData.includes?.users?.[0] || userData.data;

    // Use optional chaining (?.) and default to empty array
    const formattedTweets = (tweetsData.data || [])
      .slice(0, 3)
      .map((tweet) => ({
        id: tweet.id,
        text: tweet.text,
        created_at: tweet.created_at,
        public_metrics: tweet.public_metrics,
        entities: tweet.entities,
        author: {
          name: author?.name || "User",
          username: author?.username || username,
          profile_image_url: author?.profile_image_url || ""
        }
      }));

    cachedTweets = formattedTweets;
    lastFetch = now;

    return NextResponse.json({ tweets: formattedTweets, source: "api" });
  } catch (error) {
    console.error("CRITICAL PROXY ERROR:", error.message);
    return NextResponse.json(
      {
        error: "Twitter API logic failed",
        details: error.message
      },
      { status: 500 }
    );
  }
}
