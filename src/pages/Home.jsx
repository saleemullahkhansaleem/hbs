import {
  AboutSection,
  AcademicsSection,
  BoardOfDirectorsSection,
  ChairmanMessageSection,
  CollegesSection,
  ConferencesAndWorkshopsSection,
  ContactSection,
  HeroSection,
  OurHospitalsSection,
} from "@/components";
import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";

export const contactData = [
  {
    icon: FaPhoneAlt,
    title: "Call Us",
    content: "+92 (51) 2243322",
    link: "tel:+92512243322",
  },
  {
    icon: FaEnvelope,
    title: "Mail Us",
    content: "Info@hbs.edu.pk",
    link: "mailto:Info@hbs.edu.pk",
  },
  {
    icon: FaMapMarkerAlt,
    title: "Visit Us",
    content: "Lehtarar Road, Near Taramri Chowk, Islamabad, Pakistan.",
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
      <ConferencesAndWorkshopsSection />
      <OurHospitalsSection />
      <ContactSection />
    </div>
  );
}
