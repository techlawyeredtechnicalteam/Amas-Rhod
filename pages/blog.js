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

      {/* Disclaimer Banner */}
      <div style={{
        background: "#fefce8",
        borderLeft: "4px solid #ca8a04",
        padding: "14px 24px",
        margin: "24px auto",
        maxWidth: "900px",
        borderRadius: "6px",
        fontSize: "0.875rem",
        color: "#78350f",
        lineHeight: "1.6",
      }}>
        <strong>Disclaimer:</strong> Articles published on this site are for educational and
        insights purposes <strong>ONLY</strong> and should not be construed as legal advice.
        For legal advice and guidance regarding your situation, please{" "}
        
          href="/contact"
          style={{ color: "#92400e", textDecoration: "underline", fontWeight: 600 }}
        >
          book an appointment
        </a>.
      </div>

      <BlogPostGrid posts={posts} showAll={true} />
    </Layout>
  );
}