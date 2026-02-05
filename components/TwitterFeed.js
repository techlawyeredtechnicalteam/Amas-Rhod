"use client";

import Image from "next/image";
import { useEffect, useState, useCallback } from "react";

export default function TwitterFeed({ username = "amasandrhodlaw" }) {
  const [tweets, setTweets] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Memoize fetchTweets so it can be used in useEffect safely
  const fetchTweets = useCallback(async () => {
    try {
      setLoading(true);
      // We call our unified App Router proxy
      const response = await fetch(`/api/twitter?username=${username}`);

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "Failed to fetch tweets");
      }

      const data = await response.json();
      console.log("Raw response from server:", data);

      // Note: your route.js returns { tweets: [...] }
      setTweets(data.tweets || []);
      setError(null);
    } catch (err) {
      console.error("Error fetching tweets:", err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }, [username]);

  useEffect(() => {
    fetchTweets();
  }, [fetchTweets]);

  const formatDate = (dateString) => {
    if (!dateString) return "";
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric"
    });
  };

  const renderTweetText = (text, entities) => {
    if (!entities || !entities.hashtags) return text;

    let processedText = text;
    // Sort hashtags by start position descending to avoid offset issues during replacement
    const hashtags = [...entities.hashtags].sort((a, b) => b.start - a.start);

    hashtags.forEach((hashtag) => {
      const tag = `#${hashtag.tag}`;
      // Use a simple replacement or a regex
      processedText = processedText
        .split(tag)
        .join(`<span class="text-blue-400 font-medium">${tag}</span>`);
    });

    return <span dangerouslySetInnerHTML={{ __html: processedText }} />;
  };

  if (loading && tweets.length === 0) {
    return (
      <section className="bg-red-800 py-24 px-6">
        <div className="max-w-6xl mx-auto text-center text-white">
          <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-white"></div>
          <p className="mt-4 font-sans tracking-wide">FETCHING FEED...</p>
        </div>
      </section>
    );
  }

  // Graceful error state
  if (error && tweets.length === 0) {
    return (
      <section className="bg-red-800 py-24 px-6 text-white text-center">
        <div className="max-w-2xl mx-auto bg-red-900/40 p-10 rounded-xl border border-white/10">
          <p className="text-xl mb-4">Feed currently unavailable</p>
          <button
            onClick={fetchTweets}
            className="px-6 py-2 bg-white text-red-800 rounded-full font-bold hover:bg-gray-200 transition-all"
          >
            Retry
          </button>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-gray-50 py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl mb-12 font-bold text-gray-900 border-l-4 border-red-700 pl-4">
          Latest Updates
        </h2>

        <div className="grid gap-8">
          {tweets.map((tweet) => (
            <div
              key={tweet.id}
              className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
            >
              <div className="flex items-start space-x-4">
                {/* Profile Image */}
                <div className="relative w-12 h-12 rounded-full overflow-hidden flex-shrink-0 border border-gray-100">
                  <Image
                    src={
                      tweet.author?.profile_image_url || "/placeholder-user.png"
                    }
                    alt={tweet.author?.name || "User"}
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-gray-900 font-bold leading-tight">
                        {tweet.author?.name}
                      </h3>
                      <p className="text-gray-500 text-sm">
                        @{tweet.author?.username}
                      </p>
                    </div>

                    <a
                      href={`https://twitter.com/${tweet.author?.username}/status/${tweet.id}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-black transition-colors"
                    >
                      <svg
                        className="w-5 h-5"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                      </svg>
                    </a>
                  </div>

                  <div className="mt-4 text-gray-800 text-lg leading-relaxed">
                    {renderTweetText(tweet.text, tweet.entities)}
                  </div>

                  <div className="mt-6 flex items-center justify-between pt-4 border-t border-gray-50">
                    <div className="flex items-center space-x-6 text-gray-400">
                      {/* Like Count */}
                      <span className="flex items-center space-x-1 text-sm">
                        <span className="font-medium text-gray-600">
                          {tweet.public_metrics?.like_count || 0}
                        </span>
                        <span>Likes</span>
                      </span>
                      <span className="text-sm">
                        {formatDate(tweet.created_at)}
                      </span>
                    </div>

                    <a
                      href={`https://twitter.com/${tweet.author?.username}/status/${tweet.id}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-red-700 font-bold text-sm hover:underline"
                    >
                      View Thread →
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {tweets.length > 0 && (
          <div className="mt-12 text-center">
            <button
              onClick={fetchTweets}
              disabled={loading}
              className="text-gray-500 hover:text-red-700 font-semibold transition-colors disabled:opacity-50"
            >
              {loading ? "Refreshing..." : "↻ Refresh Feed"}
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
