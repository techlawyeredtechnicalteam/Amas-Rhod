import Head from "next/head";
import Layout from "../components/Layout";
import { getStaticProps } from "../src/services/BlogStaticProps";
import BlogPostGrid from "./BlogPostSlider";
export { getStaticProps };

export default function Blog({ posts }) {
  return (
    <Layout>
      <Head>
        <title>Amas & Rhod Law | Blog</title>
      </Head>

   

      <BlogPostGrid posts={posts} showAll={true} />
    </Layout>
  );
}
