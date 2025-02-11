import { useState } from "react";
import { motion } from "framer-motion";
import { SectionLayout } from ".";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Hospital, Stethoscope, SmileIcon as Tooth } from "lucide-react";

export default function OurHospitalsSection() {
  const [activeTab, setActiveTab] = useState("general");

  return (
    <SectionLayout
      name="Our Hospitals"
      title="World-Class Healthcare Facilities"
      description="Discover our state-of-the-art hospitals providing comprehensive medical and dental care."
      className="py-8"
    >
      <Tabs
        defaultValue="general"
        className="w-full"
        onValueChange={(value) => setActiveTab(value)}
      >
        <TabsList className="grid w-full grid-cols-2 mb-8 h-full">
          <TabsTrigger value="general" className="">
            <Hospital className="mr-2" /> HBS General Hospital
          </TabsTrigger>
          <TabsTrigger value="dental" className="">
            <Tooth className="mr-2" /> HBS Dental Hospital
          </TabsTrigger>
        </TabsList>
        <TabsContent value="general">
          <HBSGeneralHospital activeTab={activeTab} />
        </TabsContent>
        <TabsContent value="dental">
          <HBSDentalHospital activeTab={activeTab} />
        </TabsContent>
      </Tabs>
    </SectionLayout>
  );
}

function HBSGeneralHospital({ activeTab }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: activeTab === "general" ? 1 : 0, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
        <div>
          <img
            src="/images/hbsgh.webp"
            alt="HBS General Hospital"
            width={600}
            height={400}
            className="rounded-lg shadow-lg object-cover aspect-video w-full"
          />
          <p className="mt-4 text-center text-muted-foreground">
            Alipur, Nai Abadi, Islamabad. 2621043.44
          </p>
        </div>
        <div>
          <h3 className="text-2xl font-bold mb-4">
            A 500-bed multi-disciplinary tertiary care teaching hospital
          </h3>
          <p className="text-muted-foreground mb-6">
            HBS General Hospital is equipped with state-of-the-art facilities
            and expert medical professionals, providing comprehensive healthcare
            services across various specialties.
          </p>
          <div className="grid grid-cols-2 gap-4">
            {departments.map((dept, index) => (
              <div key={index} className="relative">
                <div className="absolute -inset-2 z-0 blur-2xl bg-primary/5"></div>
                <div className="bg-primary/5 relative h-full">
                  <CardHeader className="p-4">
                    <CardTitle className="text-lg">{dept.name}</CardTitle>
                  </CardHeader>
                  <CardContent className="p-4 pt-0">
                    <CardDescription>{dept.description}</CardDescription>
                  </CardContent>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function HBSDentalHospital({ activeTab }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: activeTab === "dental" ? 1 : 0, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <img
            src="/images/hbsdh.webp"
            alt="HBS Dental Hospital"
            width={600}
            height={400}
            className="rounded-lg shadow-lg object-cover aspect-video w-full"
          />
          <h3 className="text-2xl font-bold mt-6 mb-4">What We Offer</h3>
          <p className="text-muted-foreground mb-4">
            Experience the joy of a vibrant smile with our comprehensive dental
            care services
          </p>
          <div className="flex flex-wrap gap-2">
            {dentalServices.map((service, index) => (
              <Badge
                key={index}
                variant=""
                className=""
              >
                {service}
              </Badge>
            ))}
          </div>
        </div>
        <div>
          <h3 className="text-2xl font-bold mb-4">Our Departments</h3>
          <p className="text-muted-foreground mb-6">
            Comprehensive Dental Care For Every Need
          </p>
          <div className="space-y-4">
            {dentalDepartments.map((dept, index) => (
              <div key={index} className="bg-primary/5">
                <CardHeader className="p-4">
                  <CardTitle className="text-lg flex items-center">
                    <Stethoscope className="mr-2" size={20} />
                    {dept}
                  </CardTitle>
                </CardHeader>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

const departments = [
  {
    name: "Accident & Emergency",
    description: "24/7 emergency care with 20 beds and quick response unit.",
  },
  {
    name: "General Surgery",
    description: "90 beds with two designated operation theaters.",
  },
  {
    name: "Internal Medicine",
    description: "200 beds for medicine and allied specialties.",
  },
  {
    name: "Cardiology",
    description: "9-bed CCU with cardiac monitors and diagnostic tools.",
  },
  {
    name: "Gynecology / Obstetrics",
    description: "85 beds with exclusive operation theater and delivery rooms.",
  },
  {
    name: "Pediatrics",
    description: "65 beds including PICU, NICU & Nursery.",
  },
];

const dentalServices = [
  "Dental Cleaning",
  "Dental Fillings",
  "Dental Crowns",
  "Root Canal Treatment",
  "Teeth Whitening",
  "Invisible Braces",
  "Orthodontics",
  "Dental Implants",
];

const dentalDepartments = [
  "Prosthodontics",
  "Oral Medicine",
  "Oral & Maxillofacial Surgery",
  "Orthodontics",
  "Periodontology",
  "Community & Preventive Dentistry",
];
