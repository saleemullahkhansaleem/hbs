import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";

export default function AboutSection() {
  return (
    <section className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-8">
        <div className="max-w-lg">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-base text-primary font-semibold tracking-wide uppercase"
          >
            About HBS
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-foreground sm:text-4xl"
          >
            Healthcare & Biomedical Sciences
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto"
          >
            HBS is dedicated to advancing medical education, research, and
            healthcare services with a commitment to excellence and innovation
            in the field of biomedical sciences.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-6"
          >
            <Button variant="" size="" asChild>
              <Link to="/about-hbs">
                Learn More
              </Link>
            </Button>
          </motion.div>
        </div>

        <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-4">
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: -8 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            className="relative border-t-4 border-primary bg-primary/5 p-6"
          >
            <div className="absolute -inset-2 bg-gradient-to-br from-primary/20 to-primary/5 blur-xl"></div>
            <dt>
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-primary text-white">
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                  />
                </svg>
              </div>
              <p className="mt-4 text-lg leading-6 font-medium text-foreground">
                Excellence in Education
              </p>
            </dt>
            <dd className="mt-2 text-base text-muted-foreground">
              HBS provides top-tier medical and health sciences education,
              shaping future professionals with rigorous training and research
              opportunities.
            </dd>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: -8 }}
            whileInView={{ opacity: 1, y: 8 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            className="relative border-t-4 border-primary bg-primary/5 p-6"
          >
            <div className="absolute -inset-2 bg-gradient-to-br from-primary/20 to-primary/5 blur-xl"></div>
            <dt>
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-primary text-white">
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3"
                  />
                </svg>
              </div>
              <p className="mt-4 text-lg leading-6 font-medium text-foreground">
                Cutting-Edge Research
              </p>
            </dt>
            <dd className="mt-2 text-base text-muted-foreground">
              We are committed to pioneering research in biomedical sciences,
              fostering innovation and scientific advancements in healthcare.
            </dd>
          </motion.div>
        </dl>
      </div>
    </section>
  );
}
