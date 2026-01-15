"use client";
import Image from "next/image";
import Link from "next/link";
import Layout from "../../components/Layout";
// import { focusAreaDetails } from "../../src/data/focusAreaDetails";
import { focusAreas } from "../../src/data/focusArea";

export default function PracticeAreas() {
  // Create slugs from titles
  const getSlug = (title) => {
    return title.toLowerCase().replace(/\s+/g, "-").replace(/[()]/g, "");
  };

  const areaImages = {
    "maritime-law": "/maritime-law.png",
    "entertainment-law": "/entertainment-law.png",
    "immigration-law": "/immigration-law.png",
    "family-law": "/family-law.png",
    "property-law": "/property-law.png",
    "alternative-to-dispute-resolutions": "/adr.png",
    litigation: "/litigation.png"
  };

  return (
    <Layout>
      <div className="font-sans text-gray-800 w-full">
        {/* Hero Section */}
        <section className="relative h-[60vh] w-full">
          <Image
            src="/hero.png"
            alt="Practice Areas"
            fill
            priority
            className="object-cover object-center z-0"
          />
          <div className="absolute inset-0 bg-black bg-opacity-60 z-10 flex flex-col items-center justify-center text-center text-white px-4">
            <h1 className="text-5xl md:text-6xl font-garamond font-bold mb-6 leading-tight">
              Our Practice Areas
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto">
              Comprehensive legal expertise across multiple domains
            </p>
          </div>
        </section>

        {/* Practice Areas Grid */}
        <section className="py-24 px-6 md:px-20 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              {focusAreas.map((area, idx) => {
                const slug = getSlug(area.title);
                return (
                  <Link
                    key={idx}
                    href={`/focus-areas/${slug}`}
                    className="block rounded-lg overflow-hidden shadow-xl group transition duration-300 ease-in-out transform hover:scale-[1.03] hover:shadow-2xl bg-white"
                  >
                    <div className="relative h-56 w-full">
                      <Image
                        src={areaImages[slug] || "/hero.png"}
                        alt={area.title}
                        fill
                        className="object-cover object-center transition duration-500 ease-in-out group-hover:opacity-80"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end justify-start p-6">
                        <h3 className="text-2xl font-garamond font-bold text-white leading-snug">
                          {area.title}
                        </h3>
                      </div>
                    </div>

                    <div className="p-6">
                      <p className="text-gray-700 text-sm leading-relaxed line-clamp-4">
                        {area.description}
                      </p>
                      <div className="mt-4 text-blue-950 font-semibold flex items-center group-hover:translate-x-2 transition-transform">
                        Learn More
                        <svg
                          className="w-4 h-4 ml-2"
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
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-blue-950 text-white py-20 px-6 text-center">
          <h2 className="text-4xl font-garamond font-bold mb-6">
            Need Legal Assistance?
          </h2>
          <p className="mb-8 text-lg max-w-2xl mx-auto text-gray-300">
            Our team is ready to provide expert guidance tailored to your
            specific needs.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-white text-blue-950 font-semibold py-3 px-8 rounded-full hover:bg-gray-100 transition duration-300"
          >
            Contact Us Today
          </Link>
        </section>
      </div>
    </Layout>
  );
}
