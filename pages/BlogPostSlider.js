"use client";
import Link from "next/link";
import Image from "next/image";

export default function BlogPostGrid({
  posts = [],
  showAll = false,
  maxPosts = 3
}) {
  if (!posts || posts.length === 0) {
    return (
      <section className="bg-gray-50 py-20 px-6 text-center">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-garamond md:text-5xl font-bold mb-12 text-gray-800">
            Latest Insights
          </h2>
          <p className="text-gray-600">No blog posts available.</p>
        </div>
      </section>
    );
  }

  // Show all posts if showAll is true, otherwise limit to maxPosts
  const postsToShow = showAll ? posts : posts.slice(0, maxPosts);

  return (
    <section className="bg-gray-50 py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-garamond md:text-5xl font-bold mb-12 text-gray-800 text-center">
          Latest Insights
        </h2>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {postsToShow.map((post, index) => (
            <Link
              key={post._id || index}
              href={`/blog/${post.slug?.current || "#"}`}
              className="group"
            >
              <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300 h-full flex flex-col">
                {/* Image or Gradient Background */}
                {post.mainImage?.asset?.url ? (
                  <div className="relative h-64 w-full">
                    <Image
                      src={post.mainImage.asset.url}
                      alt={post.title || "Blog post"}
                      fill
                      className="object-cover object-center group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                ) : (
                  <div className="h-64 w-full bg-gradient-to-br from-blue-950 to-blue-800 flex items-center justify-center">
                    <div className="text-white text-center p-6">
                      <h3 className="text-2xl font-garamond font-bold">
                        {post.title || "Untitled Post"}
                      </h3>
                    </div>
                  </div>
                )}

                {/* Content */}
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-2xl font-garamond font-bold mb-3 text-gray-800 group-hover:text-blue-950 transition-colors">
                    {post.title || "Untitled Post"}
                  </h3>

                  <p className="text-gray-600 mb-4 flex-1 line-clamp-3">
                    {post.body?.[0]?.children?.[0]?.text?.substring(0, 120) ||
                      "Click to read more about this post..."}
                    ...
                  </p>

                  {/* Read More Link */}
                  <div className="flex items-center text-blue-950 font-semibold group-hover:text-blue-800">
                    Read More
                    <svg
                      className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* View All Button - Only show on landing page when there are more posts */}
        {!showAll && posts.length > maxPosts && (
          <div className="text-center mt-12">
            <Link
              href="/blog"
              className="inline-block bg-blue-950 text-white font-semibold py-3 px-8 rounded-full hover:bg-blue-900 transition duration-300"
            >
              View All Posts
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
