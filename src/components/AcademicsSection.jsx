import { motion } from "framer-motion";
import { SectionLayout } from ".";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function AcademicsSection() {
  return (
    <SectionLayout
      name="Academics"
      title="Courses We Offer"
      description="Explore our diverse range of medical and allied health programs designed to shape the future of healthcare professionals."
      className="py-8"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <Accordion type="single" collapsible className="w-full">
          {courses.map((course, index) => (
            <AccordionItem value={`item-${index}`} key={index}>
              <AccordionTrigger>{course.name}</AccordionTrigger>
              <AccordionContent>
                <Card>
                  <CardHeader>
                    <CardTitle>{course.name}</CardTitle>
                    <CardDescription>{course.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="list-disc pl-5 space-y-2">
                      {course.programs.map((program, idx) => (
                        <li key={idx}>{program}</li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </motion.div>
    </SectionLayout>
  );
}

const courses = [
  {
    name: "MBBS & BDS",
    description:
      "In accordance with Pakistan Medical & Dental Council (PM&DC) regulations of centralized admission policy through admitting universities (Shaheed Zulfiqar Ali Bhutto Medical University, Islamabad).",
    programs: ["MBBS", "BDS"],
  },
  {
    name: "College of Rehabilitation Sciences",
    description:
      "Approved by HEC, affiliated with Shaheed Zulfiqar Ali Bhutto Medical University (SZABMU)",
    programs: [
      "Doctor of Physiotherapy (DPT)",
      "BS – Medical Laboratory Technology",
      "BS – Dental Hygiene Technology",
      "BS – Radiology & Imaging Technology",
      "BS – Anaesthesia Technology",
      "BS – Optometry Technology",
    ],
  },
  {
    name: "College of Nursing",
    description: "Under process for approval",
    programs: ["B.Sc Nursing", "General Nursing", "Assistant Nursing"],
  },
  {
    name: "College of Paramedics",
    description: "Approved by FBISE",
    programs: [
      "Laboratory Technician",
      "Radiographer",
      "Dialysis Technician",
      "Dental Technician",
      "Operation Theatre Technician",
      "Dental Hygiene",
    ],
  },
  {
    name: "College of Pharmacy",
    description:
      "Pharm-D is a five years' undergraduate degree program recognized by the Pharmacy Council of Pakistan and widely accepted nationally and internationally.",
    programs: ["Pharm-D (Doctor of Pharmacy)"],
  },
];
