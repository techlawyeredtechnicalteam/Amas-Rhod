'use client'

import Head from 'next/head'
import Link from 'next/link'
import { StarIcon } from '@heroicons/react/24/solid';
import Layout from '../components/Layout'
import Image from 'next/image'


import { motion, useAnimation } from 'framer-motion';
import { useEffect, useRef } from 'react';
import { useInView } from 'framer-motion';

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const focusAreas = [
  {
    title: "Entertainment Law",
    description: "Providing comprehensive legal counsel to creatives and entertainment entities in the negotiation, drafting, and enforcement of contracts, intellectual property protection, talent representation, and regulatory compliance across the media and entertainment landscape."
  },
  {
    title: "Real Estate & Construction Law",
    description: "Delivering specialized legal advisory on real property acquisition, development structuring, land use regulation, construction agreements, leasing transactions, and dispute resolution involving land tenure, title, and encumbrances."
  },
  {
    title: "Immigration Law",
    description: "Offering strategic legal representation in immigration matters, including visa procurement, permanent residency, citizenship applications, deportation defense, and compliance with immigration statutes and administrative procedures."
  },
  {
    title: "Property Succession & Estate Planning",
    description: "Facilitating the orderly transfer of wealth through tailored estate planning instruments such as wills, trusts, powers of attorney, and succession schemes, while ensuring compliance with probate laws and asset protection protocols."
  },
  {
    title: "Commercial & Corporate Law",
    description: "Advising corporate entities and entrepreneurs on commercial transactions, shareholder agreements, corporate governance, mergers and acquisitions, regulatory compliance, and legal risk management within the commercial framework."
  },
  {
    title: "Human Rights & Public Interest Law",
    description: "Advocating for the protection and enforcement of fundamental rights and freedoms through litigation, policy advisory, and legal redress in matters involving discrimination, state accountability, and violations of civil and constitutional rights."
  }
];

// Reusable AnimatedCard component
function AnimatedCard({ title, description, delay }) {
  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ delay }}
      className="bg-gray-800 rounded-2xl p-6 border border-gray-700 hover:border-primary-200 hover:shadow-lg transition duration-300 ease-in-out"
    >
      <h4 className="text-xl font-garamond font-semibold text-white mb-2">{title}</h4>
      <p className="text-gray-400 text-sm">{description}</p>
    </motion.div>
  );
}

export default function Home() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true }); // animate only once
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    }
  }, [isInView, controls]);

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 1, ease: 'easeOut' } },
  };


  return (
    <Layout>
      <div className="font-sans text-gray-800">
        <main className="">
          {/* Hero Section */}
          <section className="relative h-screen w-full">
            <Image
              src="/hero.png"
              alt="Honoredge Legal Practice Hero Image"
              fill
              priority
              className="object-cover object-center z-0"
            />
            <div className="absolute inset-0 bg-black bg-opacity-60 z-10 flex flex-col items-center justify-center text-center text-white px-4">
              <h1 className="text-5xl md:text-6xl font-garamond font-bold mb-6 leading-tight">
                Amas & Rhod Law
              </h1>
              <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
                Trusted legal advisors dedicated to protecting your business and personal interests.
              </p>
              <a href="#contact" className="bg-white text-black font-semibold py-3 px-8 rounded-full hover:bg-blue-100 transition duration-300">
                Schedule a Consultation
              </a>
            </div>
          </section>

          {/* About Section */}
          <section id="about" className="py-24 bg-gray-50 px-6">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="flex justify-center">
                <Image src="/logo.png" alt="Honoredge Logo" width={200} height={200} />
              </div>
              <div>
                <h2 className="text-4xl font-garamond font-bold mb-4">About Us</h2>
                <p className="text-lg text-gray-700 leading-relaxed">
                  At Honoredge Legal Practice, we deliver strategic and practical legal services rooted in integrity and excellence.
                  Our team of seasoned attorneys collaborates closely with clients across diverse industries to deliver results.
                </p>
              </div>
            </div>
          </section>

          {/* Why Choose Us */}
          <section className="py-24 bg-primary-100 text-black px-6">
            <div className="max-w-7xl mx-auto text-center">
              <h2 className="text-4xl font-garamond font-bold mb-12">Why Partner With Us?</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {/* Card 1 */}
                <div className="relative rounded-xl overflow-hidden shadow-lg">
                  <Image 
                    src="/buildings.png" 
                    alt="Dispute Resolution" 
                    width={600} 
                    height={256} 
                    className="w-full h-[22rem] object-cover"
                  />
                  <div className="absolute bottom-0 left-0 w-full bg-white/90 backdrop-blur-sm p-4">
                    <h3 className="text-2xl font-semibold font-garamond mb-4">Our Mission</h3>
                    <p className="text-sm text-gray-700 text-center mt-2">
                      To empower clients by providing top-tier legal services that address challenges with confidence, insight, and strategic clarity.
                    </p>
                  </div>
                </div>

                {/* Card 2 */}
                <div className="relative rounded-xl overflow-hidden shadow-lg">
                  <Image 
                    src="/tingey.png" 
                    alt="Corporate & Commercial Law" 
                    width={600} 
                    height={256} 
                    className="w-full h-[22rem] object-cover"
                  />
                  <div className="absolute bottom-0 left-0 w-full bg-white/90 backdrop-blur-sm p-4">
                    <h3 className="text-2xl font-semibold font-garamond mb-4">Our Values</h3>
                    <p className="text-sm text-gray-700 text-center mt-2">
                      Guided by transparency, accountability, and a client-first ethos, we are committed to securing the best outcomes for those we serve.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>


          {/* Practice Areas */}
          <section id="practice-areas" className="bg-gray-900 text-white py-24 px-6 md:px-20">
            <div className="max-w-7xl mx-auto text-center">
              <h2 className="text-4xl font-garamond md:text-5xl font-bold mb-6">
                Our <span className="text-primary-200 italic">Areas of Focus</span>
              </h2>
              <p className="text-gray-400 text-lg mb-16">
                Expertise across key fields to meet your unique legal needs.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
                {focusAreas.map((area, idx) => (
                  <div
                    key={idx}
                    className="bg-gray-800 rounded-lg p-8 hover:bg-gray-700 transition duration-300 shadow-lg"
                  >
                    <h4 className="text-xl font-bold mb-4">{area.title}</h4>
                    <p className="text-gray-300">{area.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Testimonials */}
          <section className="bg-[#e7e3db] py-24 px-6 md:px-16 text-center">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-4xl font-garamond md:text-5xl font-bold mb-6 text-gray-900">Client Testimonials</h2>
              <p className="text-lg text-gray-700 mb-16">
                Hear directly from those we've helped achieve success.
              </p>

              {/* Testimonials Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                {[
                  {
                    name: 'Bukki Aderogba',
                    quote: "Working with Honoredge was seamless. Their dedication and attention to detail were unmatched."
                  },
                  {
                    name: 'Chinedu Godswill',
                    quote: "They listened, strategized, and delivered outstanding results. We couldn’t have asked for better support."
                  },
                  {
                    name: 'Emmanuel Folorunsho',
                    quote: "Professional, responsive, and trustworthy. My case was always handled with utmost care."
                  }
                ].map((testimonial, index) => (
                  <div
                    key={index}
                    className="bg-white p-8 rounded-lg shadow-md flex flex-col justify-between h-full"
                  >
                    <div className="text-4xl text-primary-200 mb-4">“</div>
                    <p className="text-gray-800 text-sm leading-relaxed mb-6">{testimonial.quote}</p>

                    {/* ⭐ Star Rating */}
                    <div className="flex items-center justify-center space-x-1 mb-4" aria-label="5 star rating">
                      {[...Array(5)].map((_, i) => (
                        <StarIcon key={i} className="w-5 h-5 text-yellow-400" />
                      ))}
                    </div>

                    <hr className="border-t border-gray-300 my-4" />
                    <p className="italic text-gray-700">- {testimonial.name}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Call to Action */}
          <section id="contact" className="bg-primary-200 text-white py-24 px-4 text-center">
            <h2 className="text-4xl font-garamond font-bold mb-6">Let's Get Started</h2>
            <p className="mb-8 text-lg max-w-2xl mx-auto">
              Ready to take the next step? Contact us today to discuss how we can support your legal journey.
            </p>
            <a href="mailto:honoredgelp@gmail.com" className="bg-white text-black font-semibold py-3 px-8 rounded-full hover:bg-blue-100 transition duration-300">
              Contact Us
            </a>
          </section>
        </main>
      </div>

    </Layout>
  )
}