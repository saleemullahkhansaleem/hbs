import { motion } from "framer-motion";
import { FaEnvelope, FaLinkedin, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { teamMembers } from "@/pages/Team";

export default function TeamSection() {
  return (
    <section className="py-16 bg-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-base text-primary font-semibold tracking-wide uppercase"
          >
            Meet Our Leadership
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-foreground sm:text-4xl"
          >
            Driving Innovation & Sustainability
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-4 max-w-2xl text-xl text-muted-foreground lg:mx-auto"
          >
            Our experts in climate change, finance, technology, and project
            development collaborate to drive sustainable solutions.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 mt-10">
          {teamMembers.slice(0, 3).map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="relative ml-4"
            >
              <div className="flex items-center gap-4">
                <img
                  src={member.image || "/placeholder.svg"}
                  alt={member.name}
                  className="w-32 aspect-square object-cover -translate-x-4 border-8 border-background rounded-md"
                />
                <div className="flex justify-end gap-2 mt-4">
                  <Link
                    to="#"
                    target="_blank"
                    className="rounded-full hover:text-primary p-3 bg-background border-4 border-muted hover:-translate-y-1"
                  >
                    <FaLinkedin className="text-lg" />
                  </Link>
                  <Link
                    to="#"
                    target="_blank"
                    className="rounded-full hover:text-primary p-3 bg-background border-4 border-muted hover:-translate-y-1"
                  >
                    <FaTwitter className="text-lg" />
                  </Link>
                  <Link
                    to="#"
                    className="rounded-full hover:text-primary p-3 bg-background border-4 border-muted hover:-translate-y-1"
                  >
                    <FaEnvelope className="text-lg" />
                  </Link>
                </div>
              </div>
              <div className="p-6 pt-4 -mt-14 bg-background rounded-md">
                <div className="z-10 relative pl-2">
                  <Badge variant="secondary" className="mb-6">
                    Exp: {member.experience} Years
                  </Badge>
                </div>
                <h3 className="text-lg font-semibold mb-2">{member.name}</h3>
                <p className="text-sm text-primary mb-2">{member.title}</p>
                <p className="text-muted-foreground text-sm mb-4">
                  {member.description}
                </p>
                <div className="">
                  <h4 className="font-semibold mb-2">Areas of Expertise:</h4>
                  <div className="flex flex-wrap gap-2">
                    {member.expertise.map((item, index) => (
                      <Badge
                        key={index}
                        variant="secondary"
                        className="text-xs"
                      >
                        {item}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        <div className="mt-8 text-center">
          <Button asChild variant="" size="lg">
            <Link to="/team">View More</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
