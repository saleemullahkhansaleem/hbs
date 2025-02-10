import { SecondaryHeader } from "@/components";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { FaEnvelope, FaLinkedin, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";

export const teamMembers = [
  {
    name: "Syed Muhammad Hanif Shah",
    title: "Chairman",
    image: "/images/user.webp",
    expertise: [
      "Public Sector",
      "Private Sector",
      "Environmental Protection",
      "Community Development",
    ],
    description:
      "Syed Muhammad Hanif Shah has over 30 years of experience in the public and private sectors, with a focus on poverty alleviation and environmental sustainability.",
    experience: 30,
  },
  {
    name: "Syed Amjad Hussain",
    title: "CEO/Director",
    image: "/images/user.webp",
    expertise: [
      "Climate Change",
      "Water Management",
      "Agriculture",
      "Project Development",
      "Policy Advocacy",
    ],
    description:
      "Syed Amjad Hussain has 15+ years of experience in Climate Change and Environmental Management, having worked with global organizations like the World Bank, UNDP, and UNFCCC.",
    experience: 15,
  },
  {
    name: "Muhammad Junaid Younas Ghori",
    title: "Climate Finance and Investment Specialist",
    image: "/images/user.webp",
    expertise: [
      "Climate Finance",
      "Investment Banking",
      "Chartered Accountant",
      "Project Management",
    ],
    description:
      "Muhammad Junaid Younas Ghori has a strong background in finance and investment with global experience in banking and climate finance, holding certifications from top global institutions.",
    experience: 15,
  },
  {
    name: "Intisar Ahmed",
    title: "Director/Economist and NRM Expert",
    image: "/images/user.webp",
    expertise: [
      "Agri-economics",
      "Community Mobilization",
      "Natural Resource Management",
      "Program Development",
    ],
    description:
      "Intisar Ahmed has over 16 years of experience in leadership, community development, and environmental policy, working with national and international organizations.",
    experience: 16,
  },
  {
    name: "Col (R) Abdur Rauf",
    title: "Director",
    image: "/images/user.webp",
    expertise: [
      "Welfare Initiatives",
      "Community Service",
      "Leadership",
      "Public Policy",
    ],
    description:
      "Col (R) Abdur Rauf has over five decades of experience in leadership roles and is committed to welfare and development projects for marginalized communities.",
    experience: 50,
  },
  {
    name: "Waqas Zafar",
    title: "Manager Information Technology",
    image: "/images/user.webp",
    expertise: [
      "Business Analysis",
      "IT Solutions",
      "Web Development",
      "Mobile Apps",
      "Project Execution",
    ],
    description:
      "Waqas Zafar brings extensive experience in business analysis and IT solutions, specializing in web and mobile development and providing effective business solutions.",
    experience: 10,
  },
  {
    name: "Syed Ehtesham Ahmed Zaide",
    title: "Manager Admin and Finance",
    image: "/images/user.webp",
    expertise: [
      "Business Analysis",
      "Finance Management",
      "Project Planning",
      "Embedded Systems",
    ],
    description:
      "Syed Ehtesham Ahmed Zaide has experience in business analysis, finance management, and embedded systems, with a focus on operational excellence and business solutions.",
    experience: 10,
  },
];
export default function Team() {
  return (
    <>
      <SecondaryHeader
        title="HBS Team"
        description="Our experts in climate change, finance, technology, and project
            development collaborate to drive sustainable solutions."
      />
      <section className="min-h-screen py-16 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 mt-10">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.05 }}
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
        </div>
      </section>
    </>
  );
}
