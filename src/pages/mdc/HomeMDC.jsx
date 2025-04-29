// import { motion } from "framer-motion";
// import {
//   Card,
//   CardContent,
//   CardDescription,
//   CardHeader,
//   CardTitle,
// } from "@/components/ui/card";
// import { Button } from "@/components/ui/button";
// import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
// import { BookOpen, Building, Bus, Home, MapPin, Users } from "lucide-react";
// import { ContactSection, SectionLayout } from "@/components";

// export default function HomeMDC() {
//   return (
//     <div className="min-h-screen bg-background">
//       <AboutSection />
//       <div className="bg-muted">
//         <FacilitiesSection />
//       </div>
//       <LocationSection />
//       <div className="bg-primary/5">
//         <ContactSection />
//       </div>
//     </div>
//   );
// }

// function AboutSection() {
//   return (
//     <SectionLayout
//       name="About Us"
//       title="Excellence in Medical Education"
//       description="HBS Medical & Dental College is committed to providing world-class education in healthcare."
//       className="py-8"
//     >
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
//         <motion.div
//           initial={{ opacity: 0, x: 50 }}
//           whileInView={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.8 }}
//           viewport={{ once: true }}
//           className="relative"
//         >
//           <div className="absolute inset-0 z-0 bg-primary/15 -rotate-6 rounded-lg"></div>
//           <img
//             src="https://placehold.co/600x400"
//             alt="HBS Campus"
//             width={600}
//             height={400}
//             className="rounded-lg shadow-lg object-cover w-full relative"
//           />
//         </motion.div>
//         <motion.div
//           initial={{ opacity: 0, x: -50 }}
//           whileInView={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.8 }}
//           viewport={{ once: true }}
//         >
//           <h3 className="text-2xl font-bold mb-4">
//             State-of-the-Art Facilities
//           </h3>
//           <p className="text-muted-foreground mb-6">
//             Our spacious, purpose-built campus features an earthquake-proof
//             structure with modern amenities including air-conditioning, heating,
//             and backup power. We're committed to providing a comfortable and
//             safe learning environment for all our students.
//           </p>
//           <h3 className="text-2xl font-bold mb-4">Teaching Hospital</h3>
//           <p className="text-muted-foreground mb-6">
//             HBS General Hospital, our 500-bed tertiary care facility, serves as
//             the teaching hospital for the college. It offers a complete range of
//             major specialties, laboratory, and imaging services, staffed by
//             renowned specialists and surgeons.
//           </p>
//           <Button>Explore Our Campus</Button>
//         </motion.div>
//       </div>
//     </SectionLayout>
//   );
// }

// function FacilitiesSection() {
//   return (
//     <SectionLayout
//       name="Our Facilities"
//       title="Comprehensive Learning Environment"
//       description="We provide state-of-the-art facilities to ensure the best educational experience for our students."
//       className="py-8"
//       fluid
//     >
//       <Tabs defaultValue="library" className="w-full">
//         <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 mb-8 h-auto">
//           <TabsTrigger value="library">
//             <BookOpen className="mr-2" /> Library
//           </TabsTrigger>
//           <TabsTrigger value="accommodation">
//             <Home className="mr-2" /> Accommodation
//           </TabsTrigger>
//           <TabsTrigger value="transportation">
//             <Bus className="mr-2" /> Transportation
//           </TabsTrigger>
//           <TabsTrigger value="sports">
//             <Users className="mr-2" /> Sports
//           </TabsTrigger>
//         </TabsList>
//         <TabsContent value="library">
//           <FacilityCard
//             title="Modern Library"
//             description="Our air-conditioned library houses hundreds of latest course and reference books, with a seating capacity of over 150. It features 75 networked computers with broadband internet access, providing access to our E-library with millions of articles and resources."
//             image="https://placehold.co/600x400"
//           />
//         </TabsContent>
//         <TabsContent value="accommodation">
//           <FacilityCard
//             title="Student Accommodation"
//             description="We offer hostel accommodation near the campus for both boys and girls. Our hostels are managed by experienced administrators and feature round-the-clock security and janitorial services to ensure a comfortable and safe living environment."
//             image="https://placehold.co/600x400"
//           />
//         </TabsContent>
//         <TabsContent value="transportation">
//           <FacilityCard
//             title="Transportation Services"
//             description="We provide transportation services through an approved contractor at very reasonable rates, ensuring convenient and safe travel for our students."
//             image="https://placehold.co/600x400"
//           />
//         </TabsContent>
//         <TabsContent value="sports">
//           <FacilityCard
//             title="Sports Facilities"
//             description="The college offers both indoor and outdoor sports facilities. Students can also access additional sports facilities at the nearby Pakistan Sports Complex, promoting a healthy and active lifestyle."
//             image="https://placehold.co/600x400"
//           />
//         </TabsContent>
//       </Tabs>
//     </SectionLayout>
//   );
// }

// function FacilityCard({ title, description, image }) {
//   return (
//     <Card>
//       <CardHeader>
//         <CardTitle>{title}</CardTitle>
//       </CardHeader>
//       <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-6">
//         <img
//           src={image || "/placeholder.svg"}
//           alt={title}
//           width={600}
//           height={400}
//           className="rounded-lg shadow-lg w-full object-cover aspect-video"
//         />
//         <CardDescription className="p-4 md:text-lg">
//           {description}
//         </CardDescription>
//       </CardContent>
//     </Card>
//   );
// }

// function LocationSection() {
//   return (
//     <SectionLayout
//       name="Our Location"
//       title="Centrally Located in Islamabad"
//       description="Easily accessible and conveniently situated near major landmarks."
//       className="py-8"
//     >
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
//         <motion.div
//           initial={{ opacity: 0, x: 50 }}
//           whileInView={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.8 }}
//           viewport={{ once: true }}
//           className="relative"
//         >
//           <div className="absolute inset-0 z-0 bg-primary/15 -rotate-6 rounded-lg"></div>
//           <img
//             src="https://placehold.co/600x400"
//             alt="HBS Location Map"
//             width={600}
//             height={400}
//             className="rounded-lg shadow-lg relative w-full object-cover"
//           />
//         </motion.div>
//         <motion.div
//           initial={{ opacity: 0, x: -50 }}
//           whileInView={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.8 }}
//           viewport={{ once: true }}
//         >
//           <h3 className="text-2xl font-bold mb-4">Prime Location</h3>
//           <p className="text-muted-foreground mb-6">
//             HBS Medical & Dental College is centrally located on Lehtrar Road
//             dual carriageway, near COMSATS University, in Islamabad. Our
//             strategic location ensures easy accessibility for students and
//             faculty.
//           </p>
//           <div className="flex items-center mb-4">
//             <MapPin className="mr-2 text-primary" />
//             <span>Lehtrar Road, Islamabad</span>
//           </div>
//           <div className="flex items-center mb-4">
//             <Building className="mr-2 text-primary" />
//             <span>Near COMSATS University</span>
//           </div>
//           <Button>Get Directions</Button>
//         </motion.div>
//       </div>
//     </SectionLayout>
//   );
// }

import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  CheckCircle,
  ChevronRight,
  Clock,
  FileText,
  GraduationCap,
  Mail,
  MapPin,
  Phone,
  School,
  Star,
  Users,
  Stethoscope,
  SmileIcon as Tooth,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";

export default function HomeMDC() {
  const [activeProgram, setActiveProgram] = useState("mbbs");

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[500px] md:h-[600px] bg-gradient-to-r from-primary/10 to-primary/40 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/placeholder.svg?height=1080&width=1920')] bg-cover bg-center opacity-20"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"></div>
        <div className="container mx-auto px-4 h-full flex flex-col justify-center relative z-10">
          <div className="max-w-3xl">
            <Badge className="rounded bg-primary/20 px-4 py-1.5 text-sm font-medium mb-2">
              Recognized by PM&DC & Affiliated with SZABMU
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              WELCOME TO HBS
              <br />
              <span className="text-foreground/70">
                MEDICAL & DENTAL
                <br />
                COLLEGE
              </span>
            </h1>
            <p className="text-foreground/90 text-lg md:text-xl mb-8 max-w-2xl">
              Shaping the future of healthcare through excellence in medical and
              dental education
            </p>
            <div className="flex flex-wrap gap-4">
              <Button>
                Apply Now <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
              <Button variant="outline">Explore Programs</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Affiliation Bar */}
      <section className="bg-primary/5 border-y border-primary/10">
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center">
              <School className="h-6 w-6 text-primary mr-2" />
              <p className="text-sm md:text-base text-muted-foreground">
                <span className="font-semibold">Affiliated with:</span> Shaheed
                Zulfiqar Ali Bhutto Medical University
              </p>
            </div>
            <div className="h-10 border-l border-muted-foreground hidden md:block"></div>
            <div className="flex items-center">
              <Star className="h-6 w-6 text-primary mr-2" />
              <p className="text-sm md:text-base text-muted-foreground">
                <span className="font-semibold">Recognition:</span> Pakistan
                Medical & Dental Council
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold text-muted-foreground mb-6">
                Shaping the Future of{" "}
                <span className="text-primary">Healthcare</span>
              </h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                HBS Medical & Dental College is a premier institution dedicated
                to providing quality education in the fields of medicine and
                dentistry. Affiliated with Shaheed Zulfiqar Ali Bhutto Medical
                University, Islamabad, we are committed to producing competent
                healthcare professionals who contribute significantly to the
                healthcare sector.
              </p>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Our state-of-the-art facilities, experienced faculty, and
                comprehensive curriculum ensure that our students receive the
                best possible education and training to excel in their careers.
                We focus on developing not just medical knowledge but also
                critical thinking, ethical practice, and communication skills
                essential for modern healthcare professionals.
              </p>
              <Button>Learn More About Our Programs</Button>
            </div>
            <div className="md:w-1/2 max-w-full">
              <div className="relative">
                <div className="absolute -top-6 left-6 w-24 h-24 bg-primary/70 rounded-full z-0"></div>
                <div className="absolute -bottom-6 right-20 w-32 h-32 bg-primary/30 rounded-full z-0"></div>
                <div className="relative z-10 rounded-lg overflow-hidden shadow-xl">
                  <img
                    src="/placeholder.svg?height=800&width=600"
                    alt="Medical students in training"
                    className="w-full h-auto object-cover aspect-[3/2]"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-muted-foreground mb-4">
              Courses We Offer
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We are currently offering the following courses designed to
              prepare students for successful careers in healthcare
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <Button
              variant={activeProgram === "mbbs" ? "default" : "outline"}
              onClick={() => setActiveProgram("mbbs")}
            >
              MBBS
            </Button>
            <Button
              variant={activeProgram === "bds" ? "default" : "outline"}
              onClick={() => setActiveProgram("bds")}
            >
              BDS
            </Button>
          </div>

          {activeProgram === "mbbs" && (
            <Card className="border-primary/20 shadow-md overflow-hidden">
              <CardHeader className="bg-primary/5 border-b border-primary/20">
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="text-2xl text-primary">
                      Bachelor of Medicine and Bachelor of Surgery (MBBS)
                    </CardTitle>
                    <CardDescription className="text-primary">
                      Undergraduate Degree Program
                    </CardDescription>
                  </div>
                  <div className="flex items-center bg-background px-3 py-1 rounded-full border border-primary/20">
                    <Clock className="h-4 w-4 text-primary mr-2" />
                    <span className="text-sm font-medium text-muted-foreground">
                      5 Years Duration
                    </span>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-lg font-semibold text-muted-foreground mb-4">
                      Program Overview
                    </h3>
                    <p className="text-muted-foreground mb-4">
                      Pakistan Medical & Dental Council (PM&DC) regulations and
                      the admitting university (Shaheed Zulfiqar Ali Bhutto
                      Medical University, Islamabad) rules are being implemented
                      in HBS Medical College for new MBBS admissions.
                    </p>
                    <p className="text-muted-foreground mb-4">
                      The MBBS program is designed to produce competent medical
                      professionals with a strong foundation in medical
                      sciences, clinical skills, and ethical practice. Our
                      graduates are well-prepared to serve in various healthcare
                      settings and pursue further specialization.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-muted-foreground mb-4">
                      Eligibility Criteria
                    </h3>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">
                          12 years of education
                        </span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">
                          Intermediate (Pre-Medical) or A-level with at least
                          60% marks
                        </span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">MDCAT</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">
                          Interview (dates to be sent via email to shortlisted
                          candidates)
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="mt-8">
                  <h3 className="text-lg font-semibold text-muted-foreground mb-4">
                    Merit Formula
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    <div className="bg-primary/5 p-4 rounded-lg border border-primary/20">
                      <div className="text-2xl font-bold text-primary mb-1">
                        40%
                      </div>
                      <div className="text-sm text-muted-foreground">
                        Intermediate Science Pre-Medical or Equivalent
                      </div>
                    </div>
                    <div className="bg-primary/5 p-4 rounded-lg border border-primary/20">
                      <div className="text-2xl font-bold text-primary mb-1">
                        10%
                      </div>
                      <div className="text-sm text-muted-foreground">
                        Matric
                      </div>
                    </div>
                    <div className="bg-primary/5 p-4 rounded-lg border border-primary/20">
                      <div className="text-2xl font-bold text-primary mb-1">
                        35%
                      </div>
                      <div className="text-sm text-muted-foreground">MDCAT</div>
                    </div>
                    <div className="bg-primary/5 p-4 rounded-lg border border-primary/20">
                      <div className="text-2xl font-bold text-primary mb-1">
                        15%
                      </div>
                      <div className="text-sm text-muted-foreground">
                        Interview/Viva
                      </div>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground mt-4">
                    The merit lists of successful candidates shall be displayed
                    on College Notice Board and College website.
                  </p>
                </div>
              </CardContent>
              <CardFooter className="bg-primary/10 border-t-2 border-primary flex justify-end">
                <Button>MORE DETAILS</Button>
              </CardFooter>
            </Card>
          )}

          {activeProgram === "bds" && (
            <Card className="border-primary/20 shadow-md overflow-hidden">
              <CardHeader className="bg-primary/5 border-b border-primary/20">
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="text-2xl text-primary">
                      Bachelor of Dental Surgery (BDS)
                    </CardTitle>
                    <CardDescription className="text-primary">
                      Undergraduate Degree Program
                    </CardDescription>
                  </div>
                  <div className="flex items-center bg-background px-3 py-1 rounded-full border border-primary/20">
                    <Clock className="h-4 w-4 text-primary mr-2" />
                    <span className="text-sm font-medium text-muted-foreground">
                      4 Years Duration
                    </span>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-lg font-semibold text-muted-foreground mb-4">
                      Program Overview
                    </h3>
                    <p className="text-muted-foreground mb-4">
                      Pakistan Medical & Dental Council (PM&DC) regulations and
                      the admitting university (Shaheed Zulfiqar Ali Bhutto
                      Medical University, Islamabad) rules are being implemented
                      in HBS Dental College for new BDS admissions.
                    </p>
                    <p className="text-muted-foreground mb-4">
                      The BDS program is designed to produce competent dental
                      professionals with a strong foundation in dental sciences,
                      clinical skills, and ethical practice. Our graduates are
                      well-prepared to serve in various healthcare settings and
                      pursue further specialization.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-muted-foreground mb-4">
                      Eligibility Criteria
                    </h3>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">
                          12 years of education
                        </span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">
                          Intermediate (Pre-Medical) or A-level with at least
                          60% marks
                        </span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">MDCAT</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">
                          Interview (dates to be sent via email to shortlisted
                          candidates)
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="mt-8">
                  <h3 className="text-lg font-semibold text-muted-foreground mb-4">
                    Merit Formula
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    <div className="bg-primary/5 p-4 rounded-lg border border-primary/20">
                      <div className="text-2xl font-bold text-primary mb-1">
                        40%
                      </div>
                      <div className="text-sm text-muted-foreground">
                        Intermediate Science Pre-Medical or Equivalent
                      </div>
                    </div>
                    <div className="bg-primary/5 p-4 rounded-lg border border-primary/20">
                      <div className="text-2xl font-bold text-primary mb-1">
                        10%
                      </div>
                      <div className="text-sm text-muted-foreground">
                        Matric
                      </div>
                    </div>
                    <div className="bg-primary/5 p-4 rounded-lg border border-primary/20">
                      <div className="text-2xl font-bold text-primary mb-1">
                        35%
                      </div>
                      <div className="text-sm text-muted-foreground">MDCAT</div>
                    </div>
                    <div className="bg-primary/5 p-4 rounded-lg border border-primary/20">
                      <div className="text-2xl font-bold text-primary mb-1">
                        15%
                      </div>
                      <div className="text-sm text-muted-foreground">
                        Interview/Viva
                      </div>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground mt-4">
                    The merit lists of successful candidates shall be displayed
                    on College Notice Board and College website.
                  </p>
                </div>
              </CardContent>
              <CardFooter className="bg-primary/10 border-t-2 border-primary flex justify-end">
                <Button>MORE DETAILS</Button>
              </CardFooter>
            </Card>
          )}
        </div>
      </section>

      {/* Quick Links Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-muted-foreground mb-4">
              Find What You Need
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Quick access to important information about our programs and
              services
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="hover:shadow-md transition-shadow">
              <CardContent className="pt-6 flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <GraduationCap className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-muted-foreground mb-2">
                  Find Our Programs
                </h3>
                <p className="text-muted-foreground mb-4">
                  Find out the degree programs offered at HBS
                </p>
                <Button variant="outline" className="w-full">
                  View Programs
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-md transition-shadow">
              <CardContent className="pt-6 flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <FileText className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-muted-foreground mb-2">
                  Admission Policy
                </h3>
                <p className="text-muted-foreground mb-4">
                  Find out the admission policy of MBBS and BDS
                </p>
                <Button variant="outline" className="w-full">
                  View Policy
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-md transition-shadow">
              <CardContent className="pt-6 flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <FileText className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-muted-foreground mb-2">
                  Fee Structure
                </h3>
                <p className="text-muted-foreground mb-4">
                  Find the fee structure for all programs offered at HBS
                </p>
                <Button variant="outline" className="w-full">
                  View Fees
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-md transition-shadow">
              <CardContent className="pt-6 flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <Users className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-muted-foreground mb-2">
                  Student Affairs
                </h3>
                <p className="text-muted-foreground mb-4">
                  Contact our Student Affairs Department for more details
                </p>
                <Button variant="outline" className="w-full">
                  Contact Us
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-muted-foreground mb-4">
              Why Choose HBS Medical & Dental College?
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              With an A+ graded medical education background, we offer quality
              education and prepare our graduates for the upcoming challenges in
              the healthcare system.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="hover:shadow-md transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <Star className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-xl text-muted-foreground">
                  A+ Graded Institution
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  With a background of marvelous achievement of attaining A+
                  grade, we offer quality education in the fields of Medicine
                  and Dentistry.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-md transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-xl text-muted-foreground">
                  Distinguished Faculty
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Our faculty consists of highly qualified professors with
                  extensive clinical and research experience, committed to
                  providing students with essential academic, professional, and
                  personal skills.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-md transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <GraduationCap className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-xl text-muted-foreground">
                  State-of-the-Art Facilities
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Modern laboratories, simulation centers, and clinical training
                  environments provide hands-on experience essential for
                  developing practical skills in medicine and dentistry.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Featured Programs */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-muted-foreground mb-4">
              Our Featured Programs
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Explore our comprehensive range of medical and dental programs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="relative h-48">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-primary/60"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <Stethoscope className="h-12 w-12 text-white mx-auto mb-2" />
                    <h3 className="text-2xl font-bold text-white">MBBS</h3>
                    <p className="text-white/90">
                      Bachelor of Medicine and Bachelor of Surgery
                    </p>
                  </div>
                </div>
              </div>
              <CardContent className="p-6">
                <p className="text-muted-foreground mb-4">
                  Our MBBS program is designed to produce competent medical
                  professionals with a strong foundation in medical sciences,
                  clinical skills, and ethical practice.
                </p>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">
                      5-year program with integrated curriculum
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">
                      Clinical rotations in affiliated hospitals
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">
                      Research opportunities and electives
                    </span>
                  </li>
                </ul>
                <Button className="w-full">
                  Learn More <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>

            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="relative h-48">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-primary/60"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <Tooth className="h-12 w-12 text-white mx-auto mb-2" />
                    <h3 className="text-2xl font-bold text-white">BDS</h3>
                    <p className="text-white/90">Bachelor of Dental Surgery</p>
                  </div>
                </div>
              </div>
              <CardContent className="p-6">
                <p className="text-muted-foreground mb-4">
                  Our BDS program is designed to produce competent dental
                  professionals with a strong foundation in dental sciences,
                  clinical skills, and ethical practice.
                </p>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">
                      4-year program with hands-on training
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">
                      State-of-the-art dental laboratories
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">
                      Clinical practice in dental hospital
                    </span>
                  </li>
                </ul>
                <Button className="w-full">
                  Learn More <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/placeholder.svg?height=500&width=1920')] bg-cover bg-center opacity-10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="md:w-2/3">
              <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
                Ready to Start Your Journey?
              </h2>
              <p className="text-primary-foreground/90 text-lg mb-6">
                Apply now to join HBS Medical & Dental College and take the
                first step towards a rewarding career in healthcare.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button className="bg-primary-foreground text-primary hover:bg-primary-foreground/90">
                  Apply Now
                </Button>
                <Button
                  variant="outline"
                  className="bg-primary border-primary-foreground text-primary-foreground hover:bg-primary/80"
                >
                  Download Prospectus
                </Button>
              </div>
            </div>
            <div className="md:w-1/3 bg-primary-foreground/10 backdrop-blur-sm p-6 rounded-lg border border-primary-foreground/30">
              <h3 className="text-xl font-semibold text-primary-foreground mb-4">
                Important Links
              </h3>
              <ul className="space-y-3">
                <li>
                  <a
                    href="#"
                    className="flex items-center text-primary-foreground/80 hover:text-primary-foreground"
                  >
                    <ChevronRight className="h-4 w-4 mr-2" />
                    <span>Admission Criteria</span>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="flex items-center text-primary-foreground/80 hover:text-primary-foreground"
                  >
                    <ChevronRight className="h-4 w-4 mr-2" />
                    <span>Fee Structure</span>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="flex items-center text-primary-foreground/80 hover:text-primary-foreground"
                  >
                    <ChevronRight className="h-4 w-4 mr-2" />
                    <span>Academic Calendar</span>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="flex items-center text-primary-foreground/80 hover:text-primary-foreground"
                  >
                    <ChevronRight className="h-4 w-4 mr-2" />
                    <span>Campus Facilities</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-muted-foreground mb-4">
              Contact Us
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Have questions? Get in touch with us and we'll be happy to assist
              you.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="hover:shadow-md transition-shadow">
              <CardContent className="pt-6 flex flex-col items-center text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-muted-foreground mb-2">
                  Address
                </h3>
                <p className="text-muted-foreground">
                  Lehtrar Road, Tarlai,
                  <br />
                  Islamabad
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-md transition-shadow">
              <CardContent className="pt-6 flex flex-col items-center text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-muted-foreground mb-2">
                  Phone
                </h3>
                <p className="text-muted-foreground">051-2243323</p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-md transition-shadow">
              <CardContent className="pt-6 flex flex-col items-center text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-muted-foreground mb-2">
                  Email
                </h3>
                <p className="text-muted-foreground">info@hbs.edu.pk</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
