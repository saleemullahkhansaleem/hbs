import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { SecondaryHeader } from "@/components";
import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";

export const programs = [
  {
    name: "DEED Smart School System (DSSS)",
    description:
      "Providing free, quality education to underprivileged children.",
    icon: "🏫",
    href: "/dsss",
  },
  {
    name: "DEED Basic Health Facility (DBHF)",
    description: "Offering essential healthcare services to rural communities.",
    icon: "🏥",
  },
  {
    name: "DEED Training and Vocational Centers (DTVC)",
    description:
      "Empowering individuals with skills for economic independence.",
    icon: "🛠️",
  },
  {
    name: "DEED Skill Development Centers (DSDC)",
    description:
      "Enhancing practical job skills for better employment opportunities.",
    icon: "💼",
  },
  {
    name: "DEED Clean Drinking Water Initiative (DCDWI)",
    description:
      "Ensuring access to safe and clean drinking water in rural areas.",
    icon: "💧",
  },
];

export const focusAreas = [
  {
    name: "Education and Training",
    description: "Promoting quality education and lifelong learning.",
    icon: "🎓",
  },
  {
    name: "Health & Sanitation",
    description: "Improving community health and well-being.",
    icon: "🏥",
  },
  {
    name: "Environment & Climate Change Impact Assessment",
    description: "Assessing environmental and climate impacts.",
    icon: "🌿",
  },
  {
    name: "Gender Equality, Youth and Women Empowerment",
    description: "Promoting gender equality and youth empowerment.",
    icon: "🚺",
  },
  {
    name: "Children with Disabilities and Special Needs",
    description: "Empowering children with disabilities for inclusion.",
    icon: "♿",
  },
  {
    name: "Disaster risk reduction and climate change",
    description: "Reducing risks from disasters and climate change.",
    icon: "🌍",
  },
  {
    name: "Agriculture & Immigration System Design",
    description: "Innovating sustainable agriculture and migration systems.",
    icon: "🌾",
  },
  {
    name: "Any other Area which directly or indirectly in line with HBS Vision and Mission",
    description: "Supporting areas aligned with HBS's mission.",
    icon: "🎯",
  },
  {
    name: "Capacity Building and Awareness Raising",
    description: "Enhancing skills and raising social awareness.",
    icon: "📢",
  },
  {
    name: "Child Protection",
    description: "Ensuring the safety and rights of children.",
    icon: "🛡️",
  },
  {
    name: "Corona Pandemic(Covid-19)",
    description: "Supporting communities during COVID-19.",
    icon: "🦠",
  },
  {
    name: "Crises and Conflicts Resolution",
    description: "Promoting peace and resolving conflicts.",
    icon: "🤝",
  },
  {
    name: "Culture and Heritage Preservation in Pakistan",
    description: "Safeguarding Pakistan’s cultural heritage.",
    icon: "🏛️",
  },
  {
    name: "HBS Training and Vocational Centers",
    description: "Providing skill-based training for employment.",
    icon: "🛠️",
  },
  {
    name: "Democracy, Human Rights and Governance",
    description: "Advocating for democracy and human rights.",
    icon: "🗳️",
  },
  {
    name: "Environment and Natural Resource Management",
    description: "Managing natural resources sustainably.",
    icon: "🌳",
  },
  {
    name: "Financial And Technical Analysis",
    description: "Providing expert financial and technical insights.",
    icon: "📊",
  },
  {
    name: "Humanitarian preparedness and response",
    description: "Preparing for and responding to humanitarian needs.",
    icon: "🚨",
  },
  {
    name: "Information Technology Innovation for Resource use management",
    description: "Leveraging IT for efficient resource management.",
    icon: "💻",
  },
  {
    name: "Infrastructure and Technology Development",
    description: "Building resilient infrastructure and technology.",
    icon: "🏗️",
  },
  {
    name: "Monitoring, Evaluation and Research",
    description: "Tracking progress through research and evaluation.",
    icon: "🔍",
  },
  {
    name: "Policy & Strategy Formulation",
    description: "Developing effective policies and strategies.",
    icon: "📋",
  },
  {
    name: "Project Design & Development",
    description: "Designing and developing impactful projects.",
    icon: "📈",
  },
  {
    name: "Rural Development",
    description: "Advancing socio-economic growth in rural areas.",
    icon: "🏡",
  },
  {
    name: "Social Audit",
    description: "Ensuring accountability through social audits.",
    icon: "✅",
  },
  {
    name: "Water and Sanitation",
    description: "Providing access to clean water and sanitation.",
    icon: "🚰",
  },
];

export default function Programmes() {
  return (
    <>
      <SecondaryHeader
        title="HBS Programme and Focus Areas"
        description="Addressing basic rural issues and focusing on key areas for
              economic and environmental development"
      />
      <section className="min-h-screen py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.section
            className="mb-16"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl text-center font-bold mb-4 text-primary">
              Long Term HBS Programme
            </h2>
            <p className="max-w-3xl mx-auto text-center text-muted-foreground mb-8">
              To address basic Rural issues by establishing the following at
              Union Council Level in the country with the help and support for
              this cause at Individual/Organizational level and collaboration by
              National/International Donors
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {programs.map((program, index) => (
                <ProgrammesCard program={program} index={index} key={index} />
              ))}
            </div>
          </motion.section>

          <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-4 text-primary text-center">
              HBS Focus Areas
            </h2>
            <p className="max-w-3xl mx-auto text-center text-muted-foreground mb-8">
              HBS focus areas for Project development and Implementation to
              eradicate poverty, economic and environmental development in the
              country are as below:
            </p>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {focusAreas.map((area, index) => (
                <FocusAreasCard area={area} index={index} key={area.name} />
              ))}
            </div>
          </motion.section>
        </div>
      </section>
    </>
  );
}

export function ProgrammesCard({ program, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2 * (index + 1) }}
      viewport={{ once: true }}
      className="relative"
    >
      <div className="absolute inset-0 z-0 bg-primary/15 -rotate-6"></div>
      <div className="h-full relative p-6 border bg-background">
        <div className="absolute top-6 left-6 bg-primary/30 w-12 h-12 blur-xl"></div>
        <div className="text-4xl mb-4">{program.icon}</div>
        <h3 className="text-lg font-semibold mb-2">{program.name}</h3>
        <p className="text-muted-foreground">{program.description}</p>
        <div className="mt-6 flex justify-end gap-4">
          <Button asChild variant="link" size="">
            <Link to="/friends">Get Involved</Link>
          </Button>
          {program.href && (
            <Button asChild variant="secondary" size="">
              <Link to={program.href}>View Detail</Link>
            </Button>
          )}
        </div>
      </div>
    </motion.div>
  );
}

export function FocusAreasCard({ area, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2 * (index + 1) }}
      viewport={{ once: true }}
      className="mt-8 mr-3 relative"
    >
      <div className="absolute inset-0 bg-primary/10 translate-x-3 translate-y-3"></div>
      <div className="flow-root bg-background px-6 pb-8 relative h-full">
        <div className="-mt-6">
          <div className="relative">
            <div className="absolute -inset-2 bg-gradient-to-r from-primary/20 to-primary/5 blur-xl -z-10"></div>
            <span className="inline-flex items-center justify-center p-3 bg-primary rounded-md shadow-lg text-4xl">
              {area.icon}
            </span>
          </div>
          <h3 className="mt-6 text-lg font-semibold text-foreground tracking-tight">
            {area.name}
          </h3>
          {area.category && (
            <Badge variant="secondary" className="absolute right-4 top-4">
              {area.category}
            </Badge>
          )}
          <p className="mt-2 text-base text-muted-foreground">
            {area.description}
          </p>
        </div>
      </div>
    </motion.div>
  );
}
