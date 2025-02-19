import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BookOpen, Building, Bus, Home, MapPin, Users } from "lucide-react";
import { ContactSection, SectionLayout } from "@/components";

export default function HomeMDC() {
  return (
    <div className="min-h-screen bg-background">
      {/* <HeroSection /> */}
      <AboutSection />
      <div className="bg-secondary/20">
        <FacilitiesSection />
      </div>
      <LocationSection />
      <div className="bg-primary/5">
        <ContactSection />
      </div>
    </div>
  );
}

function HeroSection() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <img
        src="/placeholder.svg?height=1080&width=1920"
        alt="HBS Medical & Dental College"
        className="absolute z-0 object-cover"
      />
      <div className="absolute inset-0 bg-black/50 z-10" />
      <div className="relative z-20 text-center text-white">
        <motion.h1
          className="text-5xl md:text-7xl font-bold mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          HBS Medical & Dental College
        </motion.h1>
        <motion.p
          className="text-xl md:text-2xl mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Shaping the Future of Healthcare
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <Button size="lg" className="mr-4">
            Apply Now
          </Button>
          <Button size="lg" variant="outline">
            Learn More
          </Button>
        </motion.div>
      </div>
    </section>
  );
}

function AboutSection() {
  return (
    <SectionLayout
      name="About Us"
      title="Excellence in Medical Education"
      description="HBS Medical & Dental College is committed to providing world-class education in healthcare."
      className="py-8"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="absolute inset-0 z-0 bg-primary/15 -rotate-6 rounded-lg"></div>
          <img
            src="https://placehold.co/600x400"
            alt="HBS Campus"
            width={600}
            height={400}
            className="rounded-lg shadow-lg object-cover w-full relative"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold mb-4">
            State-of-the-Art Facilities
          </h3>
          <p className="text-muted-foreground mb-6">
            Our spacious, purpose-built campus features an earthquake-proof
            structure with modern amenities including air-conditioning, heating,
            and backup power. We're committed to providing a comfortable and
            safe learning environment for all our students.
          </p>
          <h3 className="text-2xl font-bold mb-4">Teaching Hospital</h3>
          <p className="text-muted-foreground mb-6">
            HBS General Hospital, our 500-bed tertiary care facility, serves as
            the teaching hospital for the college. It offers a complete range of
            major specialties, laboratory, and imaging services, staffed by
            renowned specialists and surgeons.
          </p>
          <Button>Explore Our Campus</Button>
        </motion.div>
      </div>
    </SectionLayout>
  );
}

function FacilitiesSection() {
  return (
    <SectionLayout
      name="Our Facilities"
      title="Comprehensive Learning Environment"
      description="We provide state-of-the-art facilities to ensure the best educational experience for our students."
      className="py-16"
      fluid
    >
      <Tabs defaultValue="library" className="w-full">
        <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 mb-8 h-auto">
          <TabsTrigger value="library">
            <BookOpen className="mr-2" /> Library
          </TabsTrigger>
          <TabsTrigger value="accommodation">
            <Home className="mr-2" /> Accommodation
          </TabsTrigger>
          <TabsTrigger value="transportation">
            <Bus className="mr-2" /> Transportation
          </TabsTrigger>
          <TabsTrigger value="sports">
            <Users className="mr-2" /> Sports
          </TabsTrigger>
        </TabsList>
        <TabsContent value="library">
          <FacilityCard
            title="Modern Library"
            description="Our air-conditioned library houses hundreds of latest course and reference books, with a seating capacity of over 150. It features 75 networked computers with broadband internet access, providing access to our E-library with millions of articles and resources."
            image="https://placehold.co/600x400"
          />
        </TabsContent>
        <TabsContent value="accommodation">
          <FacilityCard
            title="Student Accommodation"
            description="We offer hostel accommodation near the campus for both boys and girls. Our hostels are managed by experienced administrators and feature round-the-clock security and janitorial services to ensure a comfortable and safe living environment."
            image="https://placehold.co/600x400"
          />
        </TabsContent>
        <TabsContent value="transportation">
          <FacilityCard
            title="Transportation Services"
            description="We provide transportation services through an approved contractor at very reasonable rates, ensuring convenient and safe travel for our students."
            image="https://placehold.co/600x400"
          />
        </TabsContent>
        <TabsContent value="sports">
          <FacilityCard
            title="Sports Facilities"
            description="The college offers both indoor and outdoor sports facilities. Students can also access additional sports facilities at the nearby Pakistan Sports Complex, promoting a healthy and active lifestyle."
            image="https://placehold.co/600x400"
          />
        </TabsContent>
      </Tabs>
    </SectionLayout>
  );
}

function FacilityCard({ title, description, image }) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <img
          src={image || "/placeholder.svg"}
          alt={title}
          width={600}
          height={400}
          className="rounded-lg shadow-lg w-full object-cover aspect-video"
        />
        <CardDescription className="p-4 md:text-lg">
          {description}
        </CardDescription>
      </CardContent>
    </Card>
  );
}

function LocationSection() {
  return (
    <SectionLayout
      name="Our Location"
      title="Centrally Located in Islamabad"
      description="Easily accessible and conveniently situated near major landmarks."
      className="py-8"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="absolute inset-0 z-0 bg-primary/15 -rotate-6 rounded-lg"></div>
          <img
            src="https://placehold.co/600x400"
            alt="HBS Location Map"
            width={600}
            height={400}
            className="rounded-lg shadow-lg relative w-full object-cover"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold mb-4">Prime Location</h3>
          <p className="text-muted-foreground mb-6">
            HBS Medical & Dental College is centrally located on Lehtrar Road
            dual carriageway, near COMSATS University, in Islamabad. Our
            strategic location ensures easy accessibility for students and
            faculty.
          </p>
          <div className="flex items-center mb-4">
            <MapPin className="mr-2 text-primary" />
            <span>Lehtrar Road, Islamabad</span>
          </div>
          <div className="flex items-center mb-4">
            <Building className="mr-2 text-primary" />
            <span>Near COMSATS University</span>
          </div>
          <Button>Get Directions</Button>
        </motion.div>
      </div>
    </SectionLayout>
  );
}
