import {
  AboutSection,
  AcademicsSection,
  BoardOfDirectorsSection,
  ChairmanMessageSection,
  CollegesSection,
  ContactSection,
  CoursesSection,
  FocusAreasSection,
  HeroSection,
  NewsSection,
  OurHospitalsSection,
  PerformanceSection,
  ProgramsSection,
  TeamSection,
} from "@/components";
import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";
import { motion } from "framer-motion";

export const contactData = [
  {
    icon: FaPhoneAlt,
    title: "Call Us",
    content: "+92 51 8739888",
    link: "tel:+92518739888",
  },
  {
    icon: FaEnvelope,
    title: "Mail Us",
    content: "info@hbs.edu.pk",
    link: "mailto:info@hbs.edu.pk",
  },
  {
    icon: FaMapMarkerAlt,
    title: "Visit Us",
    content: "Jinnah Avenue, Blue Area, Islamabad.",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <HeroSection />
      <AboutSection />
      <CollegesSection />
      <ChairmanMessageSection />
      <BoardOfDirectorsSection />
      <AcademicsSection />
      <OurHospitalsSection />
      {/* <ProgramsSection />
      <FocusAreasSection />
      <CoursesSection />
      <PerformanceSection />
      <TeamSection />
      <NewsSection /> */}
      <ContactSection />
    </div>
  );
}
