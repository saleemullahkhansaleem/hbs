import { SecondaryHeader } from "@/components";
import { motion } from "framer-motion";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

export default function About() {
  return (
    <>
      <SecondaryHeader
        title="About HBS"
        description="Empowering communities through sustainable economic growth and environmental development, fostering a brighter future for all."
      />

      {/* Mission and Vision */}
      <section className="py-16 px-4 md:px-0">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              className="relative bg-primary/5"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="absolute -inset-4 bg-gradient-to-br from-primary/5 via-primary/15 to-primary/10 blur-2xl"></div>
              <div className="relative">
                <img
                  src="/images/about/about-bg.webp"
                  alt="Our Vision"
                  className="object-cover h-64 w-full"
                />
                <div className="p-6 border-t-4 border-primary">
                  <h2 className="text-3xl font-bold mb-4 text-primary">
                    Our Vision
                  </h2>
                  <p className="text-muted-foreground">
                    A clean, green and well protected environment supporting a
                    sustainable society and economy.
                  </p>
                </div>
              </div>
            </motion.div>
            <motion.div
              className="bg-primary/5 relative"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="absolute -inset-4 bg-gradient-to-br from-primary/5 via-primary/15 to-primary/10 blur-2xl"></div>
              <div className="relative">
                <img
                  src="/images/about/image.webp"
                  alt="Our Mission"
                  className="object-cover h-64 w-full"
                />
                <div className="p-6 border-t-4 border-primary">
                  <h2 className="text-3xl font-bold mb-4 text-primary">
                    Our Mission
                  </h2>
                  <p className="text-muted-foreground">
                    To alleviate poverty and improve the living standards of the
                    people through economic and social development, sustainable
                    livelihood, advocacy, local support organization, school &
                    health management committees, and to promote equitable,
                    sustainable and integrated economic development by
                    protecting and improving the environment as a valuable asset
                    for the people of Pakistan.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About HBS */}
      <section className="py-16 bg-gradient-to-br from-muted via-primary/15 to-primary/5">
        <div className="max-w-4xl mx-auto px-4 md:px-0">
          <motion.h2
            className="text-3xl font-bold mb-8 text-center text-primary"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Who We Are
          </motion.h2>
          <motion.div
            className=""
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="text-muted-foreground mb-4">
              Institutes of Healthcare & Allied Sciences (HBS) has been
              established under Section 42 of the Companies Ordinance 1984, as
              an NGO based in Islamabad with a mandate to work throughout
              Pakistan.
            </p>
            <p className="text-muted-foreground mb-4">
              Our primary objective is to alleviate poverty and improve the
              living standards of people through economic and social
              development, sustainable livelihoods, advocacy, local support
              organization, and school & health management committees.
            </p>
            <p className="text-muted-foreground">
              We aim to play a positive role in reducing poverty and
              inequalities in Pakistan through social and economic measures,
              irrespective of class, color, creed, or ethnicity. HBS strongly
              believes in transparency and bringing corporate culture to the
              non-profit sector.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Aims and Objectives */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 md:px-0">
          <motion.h2
            className="text-3xl font-bold mb-16 text-center text-primary"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Aims and Objectives
          </motion.h2>
          <div className="grid md:grid-cols-2 gap-12">
            {[
              {
                title: "Reducing Poverty",
                description:
                  "To play a positive role in reducing poverty through social and economic measures in the country irrespective of class, color, creed or ethnicity.",
                image: "/images/about/reducing-poverty.webp",
              },
              {
                title: "Rural Development",
                description:
                  "To solve basic rural issues at union council level by establishing 'Friends of Pakistan Forum' with the help and support at Individual/Organizational level and collaboration by National/International Donors.",
                image: "/images/about/rural-development.webp",
              },
              {
                title: "Community Support",
                description:
                  "To help communities through motivation, provision of primary health care services, basic education and vocational training at their doorsteps.",
                image: "/images/about/community-support.webp",
              },
              {
                title: "Awareness and Practices",
                description:
                  "To create awareness in the community regarding sanitation, hygienic health and best environmental practices through income-generation activities.",
                image: "/images/about/awareness-practices.webp",
              },
            ].map((objective, index) => (
              <motion.div
                key={index}
                className="relative"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="absolute inset-0 z-0 bg-primary/15 -rotate-6"></div>
                <div className="bg-muted relative h-full">
                  <img
                    src={objective.image || "/placeholder.svg"}
                    alt={objective.title}
                    className="object-cover w-full h-60"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2 text-primary relative">
                      <div className="absolute -inset-4 bg-gradient-to-br from-primary/15 via-primary/20 to-primary/5 blur-2xl"></div>
                      {objective.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {objective.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Organizational Structure */}
      <section className="py-16 bg-muted">
        <div className="max-w-4xl mx-auto px-4 md:px-0">
          <motion.h2
            className="text-3xl font-bold mb-8 text-center text-primary"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Organizational Structure
          </motion.h2>
          <motion.div
            className="bg-primary/10 relative p-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <img
              src="/images/about/chart.webp"
              alt="HBS Organizational Structure"
              width={800}
              height={400}
              className="w-full h-auto object-contain rounded-lg bg-white"
            />
          </motion.div>
        </div>
      </section>
    </>
  );
}
