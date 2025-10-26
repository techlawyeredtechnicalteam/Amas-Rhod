import Layout from "../components/Layout";
import Head from "next/head";
import { client, urlFor } from "../lib/sanity";
import Link from "next/link";
import Image from "next/image";
import { FaUser, FaCalendarAlt, FaComments } from "react-icons/fa";
import dynamic from "next/dynamic";

const BlogDate = dynamic(() => import("../components/BlogDate"), {
	ssr: false,
});

export async function getStaticProps() {
	const query = `*[_type == "post"] | order(publishedAt desc){
    _id,
    title,
    slug,
    publishedAt,
    mainImage {
      asset -> { url }
    },
    body,
    author->{
      name,
      image
    },
    categories[]->{
      title
    }
  }`;

	const posts = await client.fetch(query);

	return {
		props: { posts },
		revalidate: 60,
	};
}

export default function Blog({ posts }) {
	return (
		<Layout>
			<Head>
				<title>Honoredge Legal Practice | Blog</title>
			</Head>
			<div className="max-w-5xl mx-auto px-4 py-8">
				<h1 className="text-3xl font-bold mb-8">Blog Posts</h1>
				<div className="space-y-10">
					{posts.map((post) => (
						<div
							key={post._id}
							className="flex flex-col md:flex-row gap-4 bg-white shadow-md rounded-md p-4">
							{/* Image */}
							{post.mainImage?.asset?.url && (
								<div className="md:w-1/3 w-full">
									<Image
										src={post.mainImage.asset.url}
										alt={post.title}
										width={400}
										height={250}
										className="rounded-md object-cover w-full h-full"
									/>
								</div>
							)}

							{/* Post Content */}
							<div className="md:w-2/3 w-full flex flex-col justify-between">
								<div>
									<Link href={`/blog/${post.slug.current}`}>
										<h2 className="text-2xl font-semibold text-gray-800 hover:text-blue-600">
											{post.title}
										</h2>
									</Link>

									{/* Meta Info */}
									<div className="flex items-center text-sm text-gray-600 mt-2 space-x-4">
										{post.author?.name && (
											<span className="flex items-center space-x-1">
												<FaUser />
												<span>{post.author.name}</span>
											</span>
										)}
										<BlogDate date={post.publishedAt} />
										<span className="flex items-center space-x-1">
											<FaComments />
											<span>0 Comments</span>{" "}
											{/* replace with real comment count if available */}
										</span>
									</div>

									{/* Excerpt */}
									<p className="text-gray-700 mt-3">
										{post.body[0]?.children[0]?.text?.substring(0, 200) ||
											"No preview available"}
										...
									</p>

									{/* Categories */}
									<div className="text-xs text-gray-500 mt-3">
										Categories:{" "}
										{post.categories?.map((cat, index) => (
											<span key={index}>
												{cat.title}
												{index < post.categories.length - 1 ? ", " : ""}
											</span>
										))}
									</div>
								</div>

								{/* Read More Button */}
								<div className="mt-4">
									<Link
										href={`/blog/${post.slug.current}`}
										className="inline-block bg-teal-500 text-white px-4 py-2 rounded hover:bg-teal-600 transition">
										Continue Reading →
									</Link>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</Layout>
	);
}
