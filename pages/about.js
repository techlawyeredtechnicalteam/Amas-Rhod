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
    transition: { delay: i * 0.15, duration: 0.6, ease: "easeOut" }
  })
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: (i = 1) => ({
    opacity: 1,
    scale: 1,
    transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" }
  })
};

export default function AboutUs() {
  const focusAreas = [
    {
      title: "Corporate law Banking & Insurance",
      description:
        "Habeeb Jimoh & Associates (HJ & A) is a trusted legal advisor to some of the leading investment and commercial banks, as well as other financial institutions and insurance companies operating in Nigeria. Our firm offers comprehensive legal counsel on all aspects of domestic and international banking operations, including secured and unsecured lending, multi-currency transactions, and syndicated lending arrangements. Our deep expertise in banking and finance law, combined with our thorough understanding of regulatory frameworks, allows us to provide our clients with strategic advice that aligns with their business objectives."
    },
    {
      title: "Fintech Practice",
      description:
        "At Habeeb Jimoh & Associates, we are committed to driving innovation and success in the fintech industry through exceptional legal services. Our client-centric approach ensures that we understand your business goals and tailor our services to meet your specific needs. With extensive experience and deep industry knowledge, we are well-equipped to help you navigate the complexities of the fintech landscape and achieve your strategic objectives."
    },
    {
      title: "RegTech and InsurTech",
      description:
        "our RegTech and InsurTech practice is driven by a commitment to innovation and a deep understanding of the legal challenges these industries face. We work closely with our clients to develop legal strategies that ensure compliance while supporting their growth and innovation goals. Whether you are developing new technologies, forming partnerships, or seeking to ensure regulatory compliance, HJA is your trusted partner in these dynamic and evolving sectors."
    },
    {
      title: "Intellectual Property & Data Privacy Law ",
      description:
        "The integration of our extensive background in intellectual property with our proficiency in corporate and commercial law equips us with a unique skill set. This enables us to adeptly guide clients through the complex intellectual property challenges that emerge in commercial transactions."
    },
    {
      title: "Dispute Resolution",
      description:
        "As a cornerstone of our firm, our dispute resolution group is seamlessly integrated with all other practice areas, working collaboratively to address and fulfill our clients’ diverse needs efficiently and effectively."
    },
    {
      title: "Matrimonial Causes",
      description:
        "At HJ & A, we specialize in guiding individuals through the complex and often emotional landscape of matrimonial law and processes. Our team of experienced lawyers are dedicated to providing expert counsel and representation in all aspects of matrimonial matters,."
    },
    {
      title: "Real Estate",
      description:
        "Our real estate and construction team supports clients at every stage of real estate development, from planning and due diligence on land acquisition, to assisting with title perfection, advising on corporate structures and joint development agreements, and ultimately leasing office spaces or residential units to tenants upon completion of construction."
    },
    {
      title: "Immigration",
      description:
        "At Habeeb Jimoh & Associates (HJA), our Immigration Practice is dedicated to offering comprehensive legal services for individuals and businesses navigating the complexities of immigration law in Nigeria. We provide expert guidance on all aspects of immigration, including visa applications, work permits, expatriate quotas, and residency status."
    },
    {
      title: "Labour & Employment",
      description:
        "We ensure that both employers and employees understand and adhere to evolving legal standards, offering support through negotiation, mediation, and litigation. Whether you're managing a workforce or protecting your rights, HJA is your trusted partner for all labor and employment matters."
    },
    {
      title: "Transport & Logistics",
      description:
        "We offer specialized legal services for Nigeria’s transport and logistics companies. In recent years, we have continue to provide expert guidance on regulatory compliance, contract negotiations, and dispute resolution, ensuring that businesses in these industries operate smoothly and efficiently. For transport businesses, we address issues related to contracts, fleet management, and regulatory compliance. In logistics, we assist with supply chain management, warehousing, and customs regulations."
    },
    {
      title: "Environmental Law & Climate Change",
      description:
        "e have work on the complex environmental issues facing businesses today, guiding them through the many regulations that protect Nigeria’s land and water. We make sure our clients meet all the necessary standards set by agencies like NESREA and state bodies; compliance, we know, saves a lot of money and trouble down the road. Our practice now includes the growing area of climate change law, where we help companies understand new carbon reporting rules and access green finance opportunities. "
    }
  ];

  return (
    <Layout>
      <div className="bg-gray-50 min-h-screen py-20 px-6">
        <Head>
          <title> Habeeb Jimoh & Associates | About Us</title>
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
              About Habeeb Jimoh & Associates
            </h1>
            <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto text-justify">
              leading hybrid law firm based in the heart of Lagos, Nigeria,
              renowned for its innovative approach to legal services. We
              leverage cutting-edge technology to provide seamless, efficient,
              and effective legal solutions to our clients, regardless of their
              geographical location. Our team comprises experienced and
              dedicated legal professionals who excel in various practice areas,
              including corporate law, Banking & Insurance law, Fintech,
              RegTech, intellectual property Law, Dispute resolution,
              Matrimonial Causes, Real Estate, Immigration, Environmental Law,
              Labour & Employment, Transport & Logistics, Data Protection and
              beyond. We are committed to setting new standards of excellence in
              the legal industry.
            </p>
          </motion.section>

          {/* Mission, Vision, Values */}
          <section className="grid md:grid-cols-3 gap-12">
            {[
              {
                title: "Our Mission",
                text: "Our mission is to revolutionize legal services by providing top-tier, accessible, and efficient legal solutions through a hybrid platform. We strive to uphold the highest standards of professionalism and integrity, building lasting relationships with our clients through personalized attention and exceptional legal expertise. Our goal is to consistently meet and exceed our clients' evolving needs, ensuring their success and peace of mind.",
                image: "/mission.png"
              },
              {
                title: "Our Vision",
                text: "To redefine the legal landscape by becoming the foremost virtual law firm in Africa, celebrated for our unwavering dedication to innovation, excellence, and unparalleled client satisfaction.",
                image: "/vision.png"
              },
              {
                title: "Our Values",
                text: "Integrity, Innovation, Excellence, Client-centricity, and Collaboration. are the core principles that guide every aspect of our practice.",
                image: "/values.png"
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
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-semibold text-gray-800 mb-3">
                    {item.title}
                  </h3>
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
              <Image
                src="/focus.png"
                alt="Our Practice Areas"
                fill
                className="object-cover"
              />
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
                  <h4 className="text-xl font-bold text-primary-300">
                    {area.title}
                  </h4>
                  <p className="mt-2 text-sm text-gray-700">
                    {area.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.section>
        </div>
      </div>
    </Layout>
  );
}
