"use client";

import { useRouter } from "next/router";
import { focusAreaDetails } from "../../src/data/focusAreaDetails";
import Link from "next/link";
import Header from "../../components/Header";

const getFocusAreaBySlug = (slug) => {
  return focusAreaDetails[slug];
};

export default function FocusAreaDetailPage({ areaDetail }) {
  const router = useRouter();

  if (router.isFallback || !areaDetail) {
    return (
      <div className="flex justify-center items-center h-screen text-gray-800">
        <p>Loading or Focus Area not found...</p>
      </div>
    );
  }

  return (
    <>
      <Header />
      <div className="bg-gray-50 py-24 px-6 md:px-12">
        <div className="max-w-4xl mx-auto">
          {/* Back Link */}
          <Link
            href="/"
            className="inline-flex items-center text-blue-950 hover:text-blue-700 transition duration-300 mb-8"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-5 h-5 mr-2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
              />
            </svg>
            Back to All Areas
          </Link>

          {/* Main Title Section */}
          <header className="mb-12">
            <h1 className="text-5xl font-garamond font-bold text-blue-950 mb-4">
              {areaDetail.title}
            </h1>
            <p className="text-xl text-gray-600">
              {areaDetail.intro}{" "}
              {/* Using the 'intro' for the initial description */}
            </p>
          </header>

          <hr className="mb-12 border-t border-gray-300" />

          {/* Detailed Content Structure */}
          {areaDetail.sections.map((section, index) => (
            <div
              key={index}
              className="mb-10 p-6 bg-white rounded-lg shadow-md"
            >
              <h2 className="text-3xl font-garamond font-semibold text-gray-800 mb-4 border-b pb-2">
                {section.heading}
              </h2>

              {/* 1. Standard Content (Paragraphs) */}
              {section.content && (
                <p className="text-lg text-gray-700 leading-relaxed whitespace-pre-wrap">
                  {section.content}
                </p>
              )}

              {/* 2. List Items (for Legal Framework, Clients) */}
              {section.isList && (
                <ul className="list-disc list-inside space-y-2 text-lg text-gray-700 ml-4">
                  {section.listItems.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              )}

              {/* 3. Sub-Sections (e.g., specific contract types under "Areas Covered") */}
              {section.subSections && (
                <div className="mt-6 space-y-4">
                  {section.subSections.map((sub, j) => (
                    <div key={j} className="border-l-4 border-blue-950 pl-4">
                      <h4 className="text-xl font-medium text-gray-800">
                        {sub.title}
                      </h4>
                      <p className="text-base text-gray-600 mt-1">
                        {sub.details}
                      </p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}

          {/* Contact CTA at the bottom */}
          <div className="mt-16 text-center bg-blue-100 p-8 rounded-lg">
            <h3 className="text-2xl font-garamond font-bold text-blue-950 mb-4">
              Need Specific Advice?
            </h3>
            <p className="text-gray-700 mb-6">
              Contact us today for a consultation on your {areaDetail.title}{" "}
              matter.
            </p>
            <Link
              href="/contact"
              className="bg-blue-950 text-white font-semibold py-3 px-8 rounded-full hover:bg-blue-700 transition duration-300"
            >
              Schedule Consultation
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export async function getStaticPaths() {
  const slugs = Object.keys(focusAreaDetails);
  const paths = slugs.map((slug) => ({
    params: { slug }
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const areaDetail = getFocusAreaBySlug(params.slug);

  if (!areaDetail) {
    return { notFound: true };
  }

  return {
    props: {
      areaDetail
    }
  };
}
