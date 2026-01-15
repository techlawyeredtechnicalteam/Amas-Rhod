"use client";
import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";
import Layout from "../../components/Layout";
import { focusAreaDetails } from "../../src/data/focusAreaDetails";

export default function FocusAreaDetail() {
  const router = useRouter();
  const { slug } = router.query;

  if (!slug || !focusAreaDetails[slug]) {
    return (
      <Layout>
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">Practice Area Not Found</h1>
            <Link
              href="/practice-areas"
              className="text-blue-950 hover:underline"
            >
              Return to Practice Areas
            </Link>
          </div>
        </div>
      </Layout>
    );
  }

  const area = focusAreaDetails[slug];

  return (
    <Layout>
      <div className="font-sans text-gray-800 w-full">
        {/* Hero Section */}
        <section className="relative h-[60vh] w-full">
          <Image
            src={area.mainImage}
            alt={area.title}
            fill
            priority
            className="object-cover object-center z-0"
          />
          <div className="absolute inset-0 bg-black bg-opacity-60 z-10 flex flex-col items-center justify-center text-center text-white px-4">
            <h1 className="text-5xl md:text-6xl font-garamond font-bold mb-6 leading-tight">
              {area.title}
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto">
              {area.intro}
            </p>
          </div>
        </section>

        {/* Breadcrumb */}
        <div className="bg-gray-50 py-4 px-6 md:px-20">
          <div className="max-w-7xl mx-auto">
            <nav className="flex text-sm text-gray-600">
              <Link href="/" className="hover:text-blue-950">
                Home
              </Link>
              <span className="mx-2">/</span>
              <Link href="/focus-areas" className="hover:text-blue-950">
                focus Areas
              </Link>
              <span className="mx-2">/</span>
              <span className="text-blue-950 font-semibold">{area.title}</span>
            </nav>
          </div>
        </div>

        {/* Content Sections */}
        <section className="py-16 px-6 md:px-20 bg-white">
          <div className="max-w-5xl mx-auto">
            {area.sections.map((section, idx) => (
              <div key={idx} className="mb-16">
                <h2 className="text-3xl font-garamond font-bold mb-6 text-blue-950">
                  {section.heading}
                </h2>

                {section.content && (
                  <div className="prose prose-lg max-w-none mb-8">
                    {section.content.split("\n").map((paragraph, pIdx) => {
                      if (
                        paragraph.trim().startsWith("**") &&
                        paragraph.trim().endsWith("**")
                      ) {
                        return (
                          <h4
                            key={pIdx}
                            className="font-bold text-xl mt-6 mb-3"
                          >
                            {paragraph.replace(/\*\*/g, "")}
                          </h4>
                        );
                      }
                      if (paragraph.trim().startsWith("*")) {
                        return (
                          <li key={pIdx} className="ml-6 mb-2">
                            {paragraph.replace(/^\*\s*/, "")}
                          </li>
                        );
                      }
                      if (paragraph.trim()) {
                        return (
                          <p
                            key={pIdx}
                            className="mb-4 text-gray-700 leading-relaxed"
                          >
                            {paragraph.trim()}
                          </p>
                        );
                      }
                      return null;
                    })}
                  </div>
                )}

                {section.isList && section.listItems && (
                  <ul className="space-y-3">
                    {section.listItems.map((item, itemIdx) => (
                      <li key={itemIdx} className="flex items-start">
                        <span className="text-blue-950 mr-3 mt-1">•</span>
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                )}

                {section.subSections && (
                  <div className="space-y-6">
                    {section.subSections.map((subSection, subIdx) => (
                      <div key={subIdx} className="bg-gray-50 rounded-lg p-6">
                        <h3 className="text-xl font-semibold mb-3 text-blue-950">
                          {subSection.title}
                        </h3>
                        <p className="text-gray-700 leading-relaxed">
                          {subSection.details}
                        </p>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-blue-950 text-white py-20 px-6 text-center">
          <h2 className="text-4xl font-garamond font-bold mb-6">
            Need Expert Guidance in {area.title}?
          </h2>
          <p className="mb-8 text-lg max-w-2xl mx-auto text-gray-300">
            Our experienced team is ready to help you navigate your legal
            challenges.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-block bg-white text-blue-950 font-semibold py-3 px-8 rounded-full hover:bg-gray-100 transition duration-300"
            >
              Contact Us
            </Link>
            <Link
              href="/focus-areas"
              className="inline-block bg-transparent border-2 border-white text-white font-semibold py-3 px-8 rounded-full hover:bg-white hover:text-blue-950 transition duration-300"
            >
              View All Practice Areas
            </Link>
          </div>
        </section>
      </div>
    </Layout>
  );
}

// "use client";

// import { useRouter } from "next/router";
// import { focusAreaDetails } from "../../src/data/focusAreaDetails";
// import Link from "next/link";
// import Header from "../../components/Header";

// const getFocusAreaBySlug = (slug) => {
//   return focusAreaDetails[slug];
// };

// export default function FocusAreaDetailPage({ areaDetail }) {
//   const router = useRouter();

//   if (router.isFallback || !areaDetail) {
//     return (
//       <div className="flex justify-center items-center h-screen text-gray-800">
//         <p>Loading or Focus Area not found...</p>
//       </div>
//     );
//   }

//   return (
//     <>
//       <Header />
//       <div className="bg-gray-50 py-24 px-6 md:px-12">
//         <div className="max-w-4xl mx-auto">
//           {/* Back Link */}
//           <Link
//             href="/"
//             className="inline-flex items-center text-blue-950 hover:text-blue-700 transition duration-300 mb-8"
//           >
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               fill="none"
//               viewBox="0 0 24 24"
//               strokeWidth={1.5}
//               stroke="currentColor"
//               className="w-5 h-5 mr-2"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
//               />
//             </svg>
//             Back to All Areas
//           </Link>

//           {/* Main Title Section */}
//           <header className="mb-12">
//             <h1 className="text-5xl font-garamond font-bold text-blue-950 mb-4">
//               {areaDetail.title}
//             </h1>
//             <p className="text-xl text-gray-600">
//               {areaDetail.intro}{" "}
//               {/* Using the 'intro' for the initial description */}
//             </p>
//           </header>

//           <hr className="mb-12 border-t border-gray-300" />

//           {/* Detailed Content Structure */}
//           {areaDetail.sections.map((section, index) => (
//             <div
//               key={index}
//               className="mb-10 p-6 bg-white rounded-lg shadow-md"
//             >
//               <h2 className="text-3xl font-garamond font-semibold text-gray-800 mb-4 border-b pb-2">
//                 {section.heading}
//               </h2>

//               {/* 1. Standard Content (Paragraphs) */}
//               {section.content && (
//                 <p className="text-lg text-gray-700 leading-relaxed whitespace-pre-wrap">
//                   {section.content}
//                 </p>
//               )}

//               {/* 2. List Items (for Legal Framework, Clients) */}
//               {section.isList && (
//                 <ul className="list-disc list-inside space-y-2 text-lg text-gray-700 ml-4">
//                   {section.listItems.map((item, i) => (
//                     <li key={i}>{item}</li>
//                   ))}
//                 </ul>
//               )}

//               {/* 3. Sub-Sections (e.g., specific contract types under "Areas Covered") */}
//               {section.subSections && (
//                 <div className="mt-6 space-y-4">
//                   {section.subSections.map((sub, j) => (
//                     <div key={j} className="border-l-4 border-blue-950 pl-4">
//                       <h4 className="text-xl font-medium text-gray-800">
//                         {sub.title}
//                       </h4>
//                       <p className="text-base text-gray-600 mt-1">
//                         {sub.details}
//                       </p>
//                     </div>
//                   ))}
//                 </div>
//               )}
//             </div>
//           ))}

//           {/* Contact CTA at the bottom */}
//           <div className="mt-16 text-center bg-blue-100 p-8 rounded-lg">
//             <h3 className="text-2xl font-garamond font-bold text-blue-950 mb-4">
//               Need Specific Advice?
//             </h3>
//             <p className="text-gray-700 mb-6">
//               Contact us today for a consultation on your {areaDetail.title}{" "}
//               matter.
//             </p>
//             <Link
//               href="/contact"
//               className="bg-blue-950 text-white font-semibold py-3 px-8 rounded-full hover:bg-blue-700 transition duration-300"
//             >
//               Schedule Consultation
//             </Link>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// export async function getStaticPaths() {
//   const slugs = Object.keys(focusAreaDetails);
//   const paths = slugs.map((slug) => ({
//     params: { slug }
//   }));

//   return { paths, fallback: false };
// }

// export async function getStaticProps({ params }) {
//   const areaDetail = getFocusAreaBySlug(params.slug);

//   if (!areaDetail) {
//     return { notFound: true };
//   }

//   return {
//     props: {
//       areaDetail
//     }
//   };
// }
