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
    title: "Maritime law",
    description:
      "Maritime law covers a wide range of activities, including the carriage of goods and passengers by sea, marine insurance, ship registration, and maritime safety. It ensures the smooth operation of maritime activities, protects the rights and interests of parties involved, and regulates conduct on the high seas and inland waterways"
  },
  {
    title: "Entertainment law",
    description:
      "Entertainment Law refers to the body of legal principles and regulations that govern the creation, production, distribution, and commercial exploitation of creative works in the entertainment industry. It provides legal protection for the rights and interests of individuals and businesses involved in music, film, television, theatre, sports, fashion, and digital media. In essence, Entertainment Law ensures that creativity and commerce coexist under clear legal frameworks that recognize ownership, reward talent, and minimize disputes"
  },
  {
    title: "Immigration Law",
    description:
      "Immigration law regulates the entry, residence, employment, and exit ofpersons into and out of a country. It governs how foreign nationals are admitted, their legal status while in the country, and the rights, duties, and procedures applicable to both individuals and corporate entities that employ or host them. The objective of immigration law is to ensure lawful migration, national security, and compliance with visa and work permit regulations"
  },
  {
    title: "Family law",
    description:
      "Family law governs legal relationships within the family unit, addressing rights, duties, and obligations that arise between spouses, parents, and children. It also regulates marriage, divorce, maintenance, custody, inheritance, and protection from domestic abuse or violence. The goal of family law is to promote fairness, protect vulnerable members of the family, and preserve the welfare of children and dependants"
  },
  {
    title: "Property law",
    description:
      "Property Law is the branch of law that governs the ownership, use, transfer, and management of land and other immovable property. It defines the legal relationships between individuals and entities regarding real estate,whether as owners, tenants, lessors, lessees, or occupiers. In simple terms, Property Law ensures that all transactions relating to land and buildings are carried out lawfully, rights are properly transferred, and interests are adequately protecte.d It provides the legal framework for buying, selling, leasing, developing, or mortgaging property in Nigeria"
  },
  {
    title: "Alternative to Dispute Resolutions",
    description:
      "Alternative Dispute Resolution (ADR) refers to methods of settling disputes outside the traditional court system. It includes processes such as mediation, negotiation, arbitration, and conciliation, where parties work collaboratively,often with the help of a neutral third party, to reach a fair, binding, or non-binding agreement."
  },
  {
    title: "Litigation ",
    description:
      "Litigation refers to the process of resolving disputes through the court system. It is a formal legal mechanism where parties bring their cases before a judge or tribunal for determination. Litigation may be civil (involving private disputes such as contracts, property, or family matters) or criminal (involving offences prosecuted by the state against individuals or entities)"
  }
  ];

  return (
    <Layout>
      <div className="bg-gray-50 min-h-screen py-20 px-6">
        <Head>
          <title>Amas & Rhod Law | About Us</title>
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
              About Amas & Rhod Law
            </h1>
            <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto text-justify">
              Established in May 2022, in Lagos State Nigeria, Amas & Rhod Law
              is a modern legal practice focused on delivering practical and
              accessible legal solutions across maritime, entertainment, family,
              property and immigration law. We have advised and represented
              clients ranging from truckers and logistics operators, transport
              unions, to creatives within the entertainment industry and
              property owners, handling contract reviews, regulatory compliance,
              negotiations, ADR, and dispute prevention. Known for our
              professionalism, proactiveness, in time responsiveness, and
              affordability, we remain committed to protecting our clients&apos;
              interests with clarity and efficiency.
              {/* Law in action. Protection in motion; Our Lawyers are working! */}
            </p>
          </motion.section>

          {/* Mission, Vision, Values */}
          <section className="grid md:grid-cols-3 gap-12">
            {[
              {
                title: "Our Mission",
                text: "To empower clients with practical and top-tier legal solutions, delivered with confidence, insight, and strategic clarity. We are committed to protecting our clients’ interests, preventing disputes, and providing decisive representation across every legal challenge.",
                image: "/mission.png"
              },
              {
                title: "Our Vision",
                text: "To redefine the legal landscape by empowering individuals and businesses through exceptional advocacy and trusted counsel.",
                image: "/vision.png"
              },
              {
                title: "Our Values",
                text: "Integrity, diligence, excellence, empathy, and innovation are the core principles that guide every aspect of our practice.",
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
