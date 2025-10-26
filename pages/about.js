import { motion } from "framer-motion";
import Head from "next/head";
import Image from "next/image"; 
import Link from "next/link";
import Layout from "../components/Layout";

// Animations
const slideUp = {
  hidden: { opacity: 0, y: 50 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6, ease: 'easeOut' },
  }),
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: (i = 1) => ({
    opacity: 1,
    scale: 1,
    transition: { delay: i * 0.2, duration: 0.6, ease: 'easeOut' },
  }),
};

export default function AboutUs() {
  const focusAreas = [
    {
      title: 'Immigration',
      description:
        'We provide comprehensive legal support for individuals and businesses navigating immigration processes, visa applications, residency, and citizenship matters.',
    },
    {
      title: 'Corporate & Commercial Law',
      description:
        'Our firm guides businesses through regulatory compliance, M&A transactions, governance, and commercial contracts, ensuring sustainable growth and legal assurance.',
    },
    {
      title: 'Human Rights & Social Justice',
      description:
        'We advocate for individuals facing discrimination, injustice, or human rights violations, ensuring their voices are heard and rights protected.',
    },
    {
      title: 'Real Estate & Construction Law',
      description:
        'We provide legal expertise in property transactions, leasing, development, and land disputes, ensuring compliance and protecting your investments.',
    },
  ];

  return (
    <Layout>
      <div className="bg-gray-50 min-h-screen py-20 px-6">
        <Head>
          <title>Honoredge Legal Practice | About Us</title>
        </Head>

        <div className="max-w-7xl mx-auto space-y-24">

          {/* Hero Section */}
          <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={slideUp}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 font-garamond">
              About Honoredge Legal Practice
            </h1>
            <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto">
              More than a law firm — we are passionate advocates driven by excellence, innovation, and justice.
            </p>
          </motion.section>

          {/* Mission, Vision, Values */}
          <section className="grid md:grid-cols-3 gap-12">
            {[
              {
                title: "Our Mission",
                text: "We are committed to delivering innovative, client-focused legal solutions, grounded in integrity and excellence.",
                image: "/mission.png",
              },
              {
                title: "Our Vision",
                text: "To redefine the legal landscape by empowering individuals and businesses through exceptional advocacy and trusted counsel.",
                image: "/vision.png",
              },
              {
                title: "Our Values",
                text: "Integrity, diligence, excellence, empathy, and innovation are the core principles that guide every aspect of our practice.",
                image: "/values.png",
              }
            ].map((item, i) => (
              <motion.div
                key={item.title}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={scaleIn}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow"
              >
                <div className="h-52 relative">
                  <Image src={item.image} alt={item.title} fill className="object-cover" />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-semibold text-gray-800 mb-3">{item.title}</h3>
                  <p className="text-sm text-gray-600">{item.text}</p>
                </div>
              </motion.div>
            ))}
          </section>

          {/* Focus Areas Section */}
          <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={slideUp}
            className="text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 font-garamond mb-8">
              Our Focus Areas
            </h2>

            <div className="h-72 w-full relative rounded-2xl overflow-hidden shadow-md mb-14">
              <Image src="/focus.png" alt="Our Practice Areas" fill className="object-cover" />
            </div>

            <div className="grid md:grid-cols-2 gap-10">
              {focusAreas.map((area, i) => (
                <motion.div
                  key={area.title}
                  custom={i}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={scaleIn}
                  className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all"
                >
                  <h4 className="text-xl font-bold text-primary-300">{area.title}</h4>
                  <p className="mt-2 text-sm text-gray-700">{area.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.section>

        </div>
      </div>
    </Layout>
  );
}
