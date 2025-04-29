import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";
import { SectionLayout } from ".";

export default function CollegesSection() {
  return (
    <SectionLayout
      name="Our Colleges"
      title="Excellence in Medical & Allied Health Education"
      description="HBS is dedicated to providing top-tier medical and allied health
            education, equipping students with the knowledge and skills to excel
            in the healthcare sector."
      className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5"
      muted
      fluid
    >
      {collegesName.map((college, index) => (
        <CollegeCard college={college} index={index} key={index} />
      ))}
    </SectionLayout>
  );
}

export function CollegeCard({ college, index }) {
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
        <div className="text-4xl mb-4">{college.icon}</div>
        <h3 className="text-lg font-semibold mb-2">{college.name}</h3>
        <p className="text-muted-foreground mb-8">{college.description}</p>
        <div className="mt-2 flex justify-end gap-4 absolute bottom-4 right-4">
          <Button asChild variant="link" size="">
            <Link to={college.href}>View Detail</Link>
          </Button>
        </div>
      </div>
    </motion.div>
  );
}

export const collegesName = [
  {
    name: "HBS Medical & Dental College",
    description:
      "Providing top-tier medical and dental education with state-of-the-art facilities.",
    icon: "🩺",
    href: "/colleges/mdc",
  },
  {
    name: "HBS College of Pharmacy",
    description:
      "Training future pharmacists with a focus on innovation and patient care.",
    icon: "💊",
    href: "/colleges/pharmacy",
  },
  {
    name: "HBS College of Nursing",
    description:
      "Developing compassionate and skilled nursing professionals for the healthcare industry.",
    icon: "🏥",
    href: "/colleges/nursing",
  },
  {
    name: "HBS College of Rehab & AHS",
    description:
      "Advancing rehabilitation sciences and allied health services for patient well-being.",
    icon: "🦾",
    href: "/colleges/ahs",
  },
  {
    name: "HBS College of Paramedics",
    description:
      "Equipping paramedics with essential skills for emergency and pre-hospital care.",
    icon: "🚑",
    href: "/colleges/paramedics",
  },
];
