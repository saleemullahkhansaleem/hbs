import { motion } from "framer-motion";
import { SecondaryHeader } from "@/components";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import { PolicyCard } from "./Policies";

export const coursesData = [
  {
    name: "Web Development",
    description:
      "Learn the fundamentals of web development and create responsive websites.",
    category: "Technology",
    icon: "💻",
  },
  {
    name: "Android Application Development",
    description:
      "Develop mobile applications for Android devices using modern technologies.",
    category: "Technology",
    icon: "📱",
  },
  {
    name: "Coreldraw",
    description: "Master the art of graphic design using CorelDRAW software.",
    category: "Design",
    icon: "🎨",
  },
  {
    name: "Real Estate Marketing",
    description:
      "Learn effective marketing strategies for the real estate industry.",
    category: "Marketing",
    icon: "🏡",
  },
  {
    name: "Social Media Marketing",
    description:
      "Harness the power of social media platforms for business growth.",
    category: "Marketing",
    icon: "📢",
  },
];

const eligibilityCriteria = [
  "Age 18 to 30 years",
  "Minimum Educational Qualification: Matric",
  "Karak, Kohat, and Hangu districts Domicile holders will be given preference",
];

const requiredDocuments = [
  "Recent passport size photographs (2 copies)",
  "Educational certificates (photocopy) 2 sets",
  "Identity card (2 photocopies)",
];
const docs = [
  { title: "Advertisement", file: "advertisement.pdf" },
  { title: "Admission form", file: "admission-form.pdf" },
];

export default function FreeCourses() {
  return (
    <>
      <SecondaryHeader
        title="HBS Free Courses"
        description="Explore our free short courses designed to empower individuals with essential skills and knowledge for personal and professional growth."
      />
      <section className="px-4 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
            initial="initial"
            animate="animate"
            viewport={{ once: true }}
            variants={{
              animate: {
                transition: {
                  staggerChildren: 0.1,
                },
              },
            }}
          >
            {coursesData.map((course, index) => (
              <CoursesCard data={course} index={index} key={index} />
            ))}
          </motion.div>
        </div>
      </section>

      <section className="px-4 py-16 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className=""
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-3xl font-bold text-center mb-12"
            >
              Courses Information
            </motion.h2>
            <div className="grid md:grid-cols-3 gap-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                viewport={{ once: true }}
                className="relative border-l-4 border-primary bg-primary/5 p-6"
              >
                <div className="absolute -inset-2 bg-gradient-to-br from-primary/15 to-primary/5 blur-xl z-0"></div>
                <dt className="relative">
                  <p className="mt-4 text-lg leading-6 font-medium text-foreground">
                    Eligibility Criteria
                  </p>
                </dt>
                <dd className="text-base relative">
                  <ul className="mt-2 list-disc pl-5 space-y-2 text-muted-foreground">
                    {eligibilityCriteria.map((criteria, index) => (
                      <li key={index}>{criteria}</li>
                    ))}
                  </ul>
                </dd>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                viewport={{ once: true }}
                className="relative border-l-4 border-primary bg-primary/5 p-6"
              >
                <div className="absolute -inset-2 bg-gradient-to-br from-primary/15 to-primary/5 blur-xl z-0"></div>
                <dt className="relative">
                  <p className="mt-4 text-lg leading-6 font-medium text-foreground">
                    Required Documents
                  </p>
                </dt>
                <dd className="mt-2 text-base relative text-muted-foreground">
                  <ul className="list-disc pl-5 space-y-2">
                    {requiredDocuments.map((document, index) => (
                      <li key={index}>{document}</li>
                    ))}
                  </ul>
                </dd>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                viewport={{ once: true }}
                className="relative border-l-4 border-primary bg-primary/5 p-6"
              >
                <div className="absolute -inset-2 bg-gradient-to-br from-primary/15 to-primary/5 blur-xl z-0"></div>
                <dt className="relative">
                  <p className="mt-4 text-lg leading-6 font-medium text-foreground">
                    Other Details
                  </p>
                </dt>
                <dd className="mt-2 text-base relative text-muted-foreground">
                  <p>
                    <strong>Course Duration:</strong> 3 months
                  </p>
                  <p>
                    <strong>Location:</strong> Islamabad
                  </p>
                  <p>
                    <strong>For more detail:</strong>{" "}
                    <Button variant="link" asChild>
                      <Link to="/contact">
                        Contact Us <ExternalLink />
                      </Link>
                    </Button>
                  </p>
                </dd>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="px-4 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className=""
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-3xl font-bold text-center mb-16"
            >
              Advertisement and Admission Form
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
              {docs.map((doc, index) => (
                <PolicyCard policy={doc} index={index} key={doc.file} />
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}

export function CoursesCard({ data, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.1 * (index + 1) }}
      viewport={{ once: true }}
      className="text- relative group"
    >
      <div className="absolute inset-8 bg-gradient-to-br from-primary/0 via-primary/10 to-primary/0 z-0 blur-xl"></div>
      <div className="p-6 bg-primary/5 relative">
        <div className="flex items-center justify-center w-12 h-12 bg-primar text-4xl mb-4">
          {data.icon}
        </div>

        <h3 className="text-xl font-semibold mb-1">{data.name}</h3>
        {data.category && (
          <div
            variant="secondary"
            className="italic absolute top-4 right-4 text-primary text-xs"
          >
            {data.category}
          </div>
        )}
        <p className="text-muted-foreground group-hover:text-foreground mt-2">
          {data.description}
        </p>
      </div>
    </motion.div>
  );
}
