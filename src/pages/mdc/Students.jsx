import { useState } from "react";
import {
  BookOpen,
  Trophy,
  FileText,
  Users,
  Microscope,
  GraduationCap,
  Camera,
  Building,
  Phone,
  Mail,
  AlertTriangle,
  ChevronRight,
  Download,
} from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function StudentsPage() {
  const [activeGalleryTab, setActiveGalleryTab] = useState("sports");

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-16 bg-muted/50 w-full overflow-hidden">
        <div className="container max-w-7xl mx-auto px-4 relative h-full flex flex-col items-center justify-center text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-foreground/20 backdrop-blur-sm mb-4">
            <GraduationCap className="h-8 w-8" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-2">Student Life</h1>
          <p className="text-xl text-muted-foreground max-w-2xl">
            Experience a vibrant and enriching academic journey at HBS Medical &
            Dental College
          </p>
        </div>
      </section>

      {/* Life at HBS Section */}
      <section className="py-16">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Life at HBS</h2>
              <p className="text-muted-foreground max-w-3xl mx-auto">
                Discover the exceptional facilities and environment that make
                HBS Medical & Dental College a premier institution for medical
                education
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
              <div>
                <p className="text-muted-foreground mb-6">
                  HBS Medical & Dental College is centrally located on Lehtrar
                  Road dual carriageway, near COMSATS University, in Islamabad.
                  It has a spacious purpose-built campus in an earthquake proof
                  structure with adequate arrangements for air-conditioning,
                  heating and backup power.
                </p>
                <p className="text-muted-foreground mb-6">
                  HBS Medical & Dental College has its own 500 bed tertiary care
                  general hospital (HBS General Hospital) located within walking
                  distance of the campus. HBS General Hospital serves as the
                  teaching hospital for the college. It provides complete range
                  of major specialities as well as laboratory and imaging
                  services under one roof. HBS General Hospital has some of the
                  most renowned specialists and surgeons on its strength and has
                  acquired a reputation of a high-quality hospital.
                </p>
                <p className="text-muted-foreground">
                  HBS Dental College & HBS Dental Hospital are located in a
                  purpose-built campus adjacent to HBS Medical College. It is
                  fully furnished and equipped with the most modern aids &
                  equipment.
                </p>
              </div>
              <div className="relative h-[400px] rounded-xl overflow-hidden shadow-xl">
                <img
                  src="/placeholder.svg?height=400&width=600"
                  alt="HBS Campus"
                  className="object-cover"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="p-6 hover:shadow-lg transition-shadow">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <BookOpen className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3">Modern Facilities</h3>
                <p className="text-muted-foreground">
                  State-of-the-art classrooms, laboratories, and clinical
                  training environments equipped with the latest technology.
                </p>
              </Card>

              <Card className="p-6 hover:shadow-lg transition-shadow">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3">Expert Faculty</h3>
                <p className="text-muted-foreground">
                  Learn from highly qualified professors and practitioners with
                  extensive clinical experience.
                </p>
              </Card>

              <Card className="p-6 hover:shadow-lg transition-shadow">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Trophy className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3">Holistic Development</h3>
                <p className="text-muted-foreground">
                  Opportunities for academic, professional, and personal growth
                  through various extracurricular activities.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Student Facilities Tabs */}
      <section className="py-16 bg-muted/50">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Student Facilities</h2>
              <p className="text-muted-foreground max-w-3xl mx-auto">
                Comprehensive facilities to support your academic journey and
                enhance your college experience
              </p>
            </div>

            <Tabs defaultValue="library" className="w-full">
              <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 mb-8">
                <TabsTrigger value="library">Library</TabsTrigger>
                <TabsTrigger value="accommodation">Accommodation</TabsTrigger>
                <TabsTrigger value="transportation">Transportation</TabsTrigger>
                <TabsTrigger value="labs">Practice Labs</TabsTrigger>
              </TabsList>

              <TabsContent value="library">
                <Card className="p-8">
                  <div className="grid md:grid-cols-2 gap-8 items-center">
                    <div>
                      <h3 className="text-2xl font-bold mb-4">HBS Library</h3>
                      <p className="text-muted-foreground mb-4">
                        The Library of HBS Medical & Dental College came into
                        existence in 2015. The Library is situated at the Main
                        Block of HBS Medical & Dental College. The size of Hall
                        is 110 feet X 50 feet. The staff library and Reading
                        Room measuring 30×25 feet.
                      </p>
                      <ul className="space-y-3">
                        <li className="flex items-start">
                          <div className="h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center mr-3 mt-1">
                            <ChevronRight className="h-3 w-3 text-primary" />
                          </div>
                          <p className="text-muted-foreground">
                            Air-conditioned and heated library stocked with
                            hundreds of latest course and reference books
                          </p>
                        </li>
                        <li className="flex items-start">
                          <div className="h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center mr-3 mt-1">
                            <ChevronRight className="h-3 w-3 text-primary" />
                          </div>
                          <p className="text-muted-foreground">
                            Seating capacity of more than 150 students
                          </p>
                        </li>
                        <li className="flex items-start">
                          <div className="h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center mr-3 mt-1">
                            <ChevronRight className="h-3 w-3 text-primary" />
                          </div>
                          <p className="text-muted-foreground">
                            75 computers in a fully networked environment
                            connected to broadband internet
                          </p>
                        </li>
                        <li className="flex items-start">
                          <div className="h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center mr-3 mt-1">
                            <ChevronRight className="h-3 w-3 text-primary" />
                          </div>
                          <p className="text-muted-foreground">
                            E-library with digital archive of Life Sciences
                            Journals and more than two million articles
                          </p>
                        </li>
                        <li className="flex items-start">
                          <div className="h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center mr-3 mt-1">
                            <ChevronRight className="h-3 w-3 text-primary" />
                          </div>
                          <p className="text-muted-foreground">
                            Operational from 08:00 AM till 04:00 PM
                          </p>
                        </li>
                      </ul>
                    </div>
                    <div className="relative h-[300px] rounded-xl overflow-hidden">
                      <img
                        src="/placeholder.svg?height=300&width=400"
                        alt="HBS Library"
                        className="object-cover"
                      />
                    </div>
                  </div>
                </Card>
              </TabsContent>

              <TabsContent value="accommodation">
                <Card className="p-8">
                  <div className="grid md:grid-cols-2 gap-8 items-center">
                    <div>
                      <h3 className="text-2xl font-bold mb-4">
                        Hostel Accommodation
                      </h3>
                      <p className="text-muted-foreground mb-4">
                        Hostel accommodation is available near college campus on
                        first come first serve basis for boys and girls coming
                        from different parts of the country or abroad. Two girls
                        hostels and one boys hostel are located adjacent to the
                        college.
                      </p>
                      <ul className="space-y-3">
                        <li className="flex items-start">
                          <div className="h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center mr-3 mt-1">
                            <ChevronRight className="h-3 w-3 text-primary" />
                          </div>
                          <p className="text-muted-foreground">
                            Managed by experienced and competent administrators
                          </p>
                        </li>
                        <li className="flex items-start">
                          <div className="h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center mr-3 mt-1">
                            <ChevronRight className="h-3 w-3 text-primary" />
                          </div>
                          <p className="text-muted-foreground">
                            Round the clock security services through guards and
                            CCTV surveillance
                          </p>
                        </li>
                        <li className="flex items-start">
                          <div className="h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center mr-3 mt-1">
                            <ChevronRight className="h-3 w-3 text-primary" />
                          </div>
                          <p className="text-muted-foreground">
                            Janitorial services to ensure clean and hygienic
                            environment
                          </p>
                        </li>
                        <li className="flex items-start">
                          <div className="h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center mr-3 mt-1">
                            <ChevronRight className="h-3 w-3 text-primary" />
                          </div>
                          <p className="text-muted-foreground">
                            Environment conducive to a pleasant learning
                            experience
                          </p>
                        </li>
                      </ul>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="relative h-[150px] rounded-lg overflow-hidden">
                        <img
                          src="/placeholder.svg?height=150&width=200"
                          alt="Hostel Room"
                          className="object-cover"
                        />
                      </div>
                      <div className="relative h-[150px] rounded-lg overflow-hidden">
                        <img
                          src="/placeholder.svg?height=150&width=200"
                          alt="Hostel Building"
                          className="object-cover"
                        />
                      </div>
                      <div className="relative h-[150px] rounded-lg overflow-hidden">
                        <img
                          src="/placeholder.svg?height=150&width=200"
                          alt="Hostel Common Area"
                          className="object-cover"
                        />
                      </div>
                      <div className="relative h-[150px] rounded-lg overflow-hidden">
                        <img
                          src="/placeholder.svg?height=150&width=200"
                          alt="Hostel Dining"
                          className="object-cover"
                        />
                      </div>
                    </div>
                  </div>
                </Card>
              </TabsContent>

              <TabsContent value="transportation">
                <Card className="p-8">
                  <div className="grid md:grid-cols-2 gap-8 items-center">
                    <div>
                      <h3 className="text-2xl font-bold mb-4">
                        Transportation Services
                      </h3>
                      <p className="text-muted-foreground mb-4">
                        Transportation is available through an approved
                        contractor at very reasonable rates. Our transportation
                        service ensures that students can commute safely and
                        conveniently between their residences and the campus.
                      </p>
                      <ul className="space-y-3">
                        <li className="flex items-start">
                          <div className="h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center mr-3 mt-1">
                            <ChevronRight className="h-3 w-3 text-primary" />
                          </div>
                          <p className="text-muted-foreground">
                            Regular shuttle service to and from key locations in
                            Islamabad
                          </p>
                        </li>
                        <li className="flex items-start">
                          <div className="h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center mr-3 mt-1">
                            <ChevronRight className="h-3 w-3 text-primary" />
                          </div>
                          <p className="text-muted-foreground">
                            Well-maintained vehicles with professional drivers
                          </p>
                        </li>
                        <li className="flex items-start">
                          <div className="h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center mr-3 mt-1">
                            <ChevronRight className="h-3 w-3 text-primary" />
                          </div>
                          <p className="text-muted-foreground">
                            Affordable monthly transportation packages
                          </p>
                        </li>
                        <li className="flex items-start">
                          <div className="h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center mr-3 mt-1">
                            <ChevronRight className="h-3 w-3 text-primary" />
                          </div>
                          <p className="text-muted-foreground">
                            Special arrangements for educational trips and
                            clinical rotations
                          </p>
                        </li>
                      </ul>
                      <Button className="mt-6">Transportation Schedule</Button>
                    </div>
                    <div className="relative h-[300px] rounded-xl overflow-hidden">
                      <img
                        src="/placeholder.svg?height=300&width=400"
                        alt="HBS Transportation"
                        className="object-cover"
                      />
                    </div>
                  </div>
                </Card>
              </TabsContent>

              <TabsContent value="labs">
                <Card className="p-8">
                  <h3 className="text-2xl font-bold mb-6">Practice Labs</h3>
                  <p className="text-muted-foreground mb-6">
                    A comprehensive range of laboratories available for students
                    in college to enhance practical learning and research
                    skills.
                  </p>

                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="bg-muted/50 p-4 rounded-lg">
                      <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center mb-3">
                        <Microscope className="h-5 w-5 text-primary" />
                      </div>
                      <h4 className="font-bold mb-2">BIO-CHEMISTRY LAB</h4>
                      <p className="text-sm text-muted-foreground">
                        Fully equipped for biochemical analysis and experiments
                      </p>
                    </div>

                    <div className="bg-muted/50 p-4 rounded-lg">
                      <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center mb-3">
                        <Microscope className="h-5 w-5 text-primary" />
                      </div>
                      <h4 className="font-bold mb-2">HISTOLOGY LAB</h4>
                      <p className="text-sm text-muted-foreground">
                        Advanced microscopy for tissue structure studies
                      </p>
                    </div>

                    <div className="bg-muted/50 p-4 rounded-lg">
                      <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center mb-3">
                        <Microscope className="h-5 w-5 text-primary" />
                      </div>
                      <h4 className="font-bold mb-2">PATHOLOGY LAB</h4>
                      <p className="text-sm text-muted-foreground">
                        Comprehensive facilities for pathological studies
                      </p>
                    </div>

                    <div className="bg-muted/50 p-4 rounded-lg">
                      <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center mb-3">
                        <Microscope className="h-5 w-5 text-primary" />
                      </div>
                      <h4 className="font-bold mb-2">PHARMACOLOGY LAB</h4>
                      <p className="text-sm text-muted-foreground">
                        Modern setup for pharmaceutical studies
                      </p>
                    </div>

                    <div className="bg-muted/50 p-4 rounded-lg">
                      <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center mb-3">
                        <Microscope className="h-5 w-5 text-primary" />
                      </div>
                      <h4 className="font-bold mb-2">PSYCHOLOGY LAB</h4>
                      <p className="text-sm text-muted-foreground">
                        Specialized equipment for psychological assessments
                      </p>
                    </div>

                    <div className="bg-muted/50 p-4 rounded-lg">
                      <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center mb-3">
                        <Microscope className="h-5 w-5 text-primary" />
                      </div>
                      <h4 className="font-bold mb-2">SKILL LAB</h4>
                      <p className="text-sm text-muted-foreground">
                        Simulation-based training for clinical skills
                      </p>
                    </div>

                    <div className="bg-muted/50 p-4 rounded-lg md:col-span-3">
                      <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center mb-3">
                        <Microscope className="h-5 w-5 text-primary" />
                      </div>
                      <h4 className="font-bold mb-2">
                        COMMUNITY MEDICINE MUSEUM
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        Educational displays and resources for community health
                        studies
                      </p>
                    </div>
                  </div>

                  <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="relative h-[150px] rounded-lg overflow-hidden">
                      <img
                        src="/placeholder.svg?height=150&width=200"
                        alt="Biochemistry Lab"
                        className="object-cover"
                      />
                    </div>
                    <div className="relative h-[150px] rounded-lg overflow-hidden">
                      <img
                        src="/placeholder.svg?height=150&width=200"
                        alt="Histology Lab"
                        className="object-cover"
                      />
                    </div>
                    <div className="relative h-[150px] rounded-lg overflow-hidden">
                      <img
                        src="/placeholder.svg?height=150&width=200"
                        alt="Pathology Lab"
                        className="object-cover"
                      />
                    </div>
                    <div className="relative h-[150px] rounded-lg overflow-hidden">
                      <img
                        src="/placeholder.svg?height=150&width=200"
                        alt="Skill Lab"
                        className="object-cover"
                      />
                    </div>
                  </div>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>

      {/* Code of Conduct */}
      <section className="py-16">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Code of Conduct</h2>
              <p className="text-muted-foreground max-w-3xl mx-auto">
                Ground rules that help maintain a professional and ethical
                environment at HBS Medical & Dental College
              </p>
            </div>

            <Card className="p-8">
              <div className="flex items-start mb-6">
                <AlertTriangle className="h-6 w-6 text-primary mr-3 mt-1 flex-shrink-0" />
                <p className="text-muted-foreground">
                  The college administration is committed to create a high
                  professional and strong ethical culture to achieve excellence
                  in academics. The college faculty and staff is struggling to
                  build your bright future and seek your active participation
                  for the successful implementation of the following code of
                  conduct:
                </p>
              </div>

              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger className="text-left">
                    <div className="flex items-center">
                      <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center mr-3">
                        <span className="text-primary text-sm font-medium">
                          1
                        </span>
                      </div>
                      <span className="font-medium">Punctuality</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="text-muted-foreground pl-9">
                      Punctuality is a key to success of all activities carried
                      out in an academic institution. Therefore, all students
                      are strictly required to reach at campus exactly at 8:00
                      AM. No student in any circumstances will be allowed to
                      enter class after 8:15 AM. Those arriving later then 8:15
                      AM. will be marked absent for that period.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-2">
                  <AccordionTrigger className="text-left">
                    <div className="flex items-center">
                      <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center mr-3">
                        <span className="text-primary text-sm font-medium">
                          2
                        </span>
                      </div>
                      <span className="font-medium">Smoke Free Campus</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="text-muted-foreground pl-9">
                      HBS Medical College is a "SMOKE FREE CAMPUS" and smoking
                      is strictly prohibited in the campus premises. A penalty
                      will be imposed on any student found guilty of smoking in
                      the college premises including lawns and parking areas.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-3">
                  <AccordionTrigger className="text-left">
                    <div className="flex items-center">
                      <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center mr-3">
                        <span className="text-primary text-sm font-medium">
                          3
                        </span>
                      </div>
                      <span className="font-medium">Ethical Conduct</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="text-muted-foreground pl-9">
                      In order to pursue and preserve strong ethical and
                      cultural traditions, the college authorities will take
                      serious action on isolated meetings between boys & girls,
                      objectionable gestures, hand shaking and physical contact
                      with opposite gender. Those involved will be presented
                      before the college disciplinary committee which will
                      recommend appropriate action.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-4">
                  <AccordionTrigger className="text-left">
                    <div className="flex items-center">
                      <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center mr-3">
                        <span className="text-primary text-sm font-medium">
                          4
                        </span>
                      </div>
                      <span className="font-medium">Appropriate Behavior</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="text-muted-foreground pl-9">
                      It is absolutely prohibited to shout, whistle and behave
                      immorally and / or obnoxiously. Appropriate action will be
                      taken in this regard.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-5">
                  <AccordionTrigger className="text-left">
                    <div className="flex items-center">
                      <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center mr-3">
                        <span className="text-primary text-sm font-medium">
                          5
                        </span>
                      </div>
                      <span className="font-medium">
                        Respect for Faculty and Staff
                      </span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="text-muted-foreground pl-9">
                      There is a zero tolerance for misbehaving with a teacher
                      or staff member.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-6">
                  <AccordionTrigger className="text-left">
                    <div className="flex items-center">
                      <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center mr-3">
                        <span className="text-primary text-sm font-medium">
                          6
                        </span>
                      </div>
                      <span className="font-medium">Political Activities</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="text-muted-foreground pl-9">
                      Promoting sectarianism and partaking in any political
                      activity in any form is strictly prohibited.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-7">
                  <AccordionTrigger className="text-left">
                    <div className="flex items-center">
                      <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center mr-3">
                        <span className="text-primary text-sm font-medium">
                          7
                        </span>
                      </div>
                      <span className="font-medium">Dress Code</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="text-muted-foreground pl-9">
                      It is obligatory for all students to wear neat and tidy
                      college uniform.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-8">
                  <AccordionTrigger className="text-left">
                    <div className="flex items-center">
                      <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center mr-3">
                        <span className="text-primary text-sm font-medium">
                          8
                        </span>
                      </div>
                      <span className="font-medium">Accessories</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="text-muted-foreground pl-9">
                      Students are not allowed to wear bangles and colorful
                      jewelry or bands during college hours.
                    </p>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </Card>
          </div>
        </div>
      </section>

      {/* Student Societies */}
      <section className="py-16 bg-muted/50">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Student Societies</h2>
              <p className="text-muted-foreground max-w-3xl mx-auto">
                Engage in extracurricular activities through our diverse student
                societies
              </p>
            </div>

            <Card className="p-8">
              <p className="text-muted-foreground mb-8">
                Faculty/Demonstrators and Students in charge of co-curricular
                Societies manage various societies in HBS Medical & Dental
                College to promote extracurricular activities and holistic
                development.
              </p>

              <div className="grid md:grid-cols-3 gap-8">
                <div>
                  <h3 className="text-xl font-bold mb-4 flex items-center">
                    <FileText className="h-5 w-5 text-primary mr-2" />
                    LITERARY SOCIETY
                  </h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <div className="h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center mr-2 mt-0.5">
                        <ChevronRight className="h-3 w-3 text-primary" />
                      </div>
                      <p className="text-muted-foreground">MAGAZINE SOCIETY</p>
                    </li>
                    <li className="flex items-start">
                      <div className="h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center mr-2 mt-0.5">
                        <ChevronRight className="h-3 w-3 text-primary" />
                      </div>
                      <p className="text-muted-foreground">
                        QIRAT/NAAT SOCIETY
                      </p>
                    </li>
                    <li className="flex items-start">
                      <div className="h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center mr-2 mt-0.5">
                        <ChevronRight className="h-3 w-3 text-primary" />
                      </div>
                      <p className="text-muted-foreground">
                        BAIET BAZI SOCIETY
                      </p>
                    </li>
                    <li className="flex items-start">
                      <div className="h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center mr-2 mt-0.5">
                        <ChevronRight className="h-3 w-3 text-primary" />
                      </div>
                      <p className="text-muted-foreground">
                        DRAMA & MUSIC SOCIETY
                      </p>
                    </li>
                    <li className="flex items-start">
                      <div className="h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center mr-2 mt-0.5">
                        <ChevronRight className="h-3 w-3 text-primary" />
                      </div>
                      <p className="text-muted-foreground">DEBATE SOCIETY</p>
                    </li>
                    <li className="flex items-start">
                      <div className="h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center mr-2 mt-0.5">
                        <ChevronRight className="h-3 w-3 text-primary" />
                      </div>
                      <p className="text-muted-foreground">
                        ESSAY & CREATIVE WRITING SOCIETY
                      </p>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-bold mb-4 flex items-center">
                    <Camera className="h-5 w-5 text-primary mr-2" />
                    ARTS & CRAFTS SOCIETY
                  </h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <div className="h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center mr-2 mt-0.5">
                        <ChevronRight className="h-3 w-3 text-primary" />
                      </div>
                      <p className="text-muted-foreground">
                        CALLIGRAPHY SOCIETY
                      </p>
                    </li>
                    <li className="flex items-start">
                      <div className="h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center mr-2 mt-0.5">
                        <ChevronRight className="h-3 w-3 text-primary" />
                      </div>
                      <p className="text-muted-foreground">
                        SKETCHING AND PAINTING SOCIETY
                      </p>
                    </li>
                    <li className="flex items-start">
                      <div className="h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center mr-2 mt-0.5">
                        <ChevronRight className="h-3 w-3 text-primary" />
                      </div>
                      <p className="text-muted-foreground">
                        CRAFT & MODEL-MAKING SOCIETY
                      </p>
                    </li>
                    <li className="flex items-start">
                      <div className="h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center mr-2 mt-0.5">
                        <ChevronRight className="h-3 w-3 text-primary" />
                      </div>
                      <p className="text-muted-foreground">
                        MEDIA/PHOTOGRAPHY/SHORT-CLIPS SOCIETY
                      </p>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-bold mb-4 flex items-center">
                    <Trophy className="h-5 w-5 text-primary mr-2" />
                    SPORTS SOCIETY
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    The college has adequate arrangements for indoor and outdoor
                    sports activities of the students. In addition to the
                    facilities at the campus, students can also access sports
                    facilities at Pakistan Sports Complex.
                  </p>
                  <p className="text-muted-foreground">
                    Our students have participated in sports competitions of
                    various colleges held under the umbrella of Shifa university
                    and have performed exceptionally well, winning in table
                    tennis, e-gaming, and securing positions in futsal.
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Sports and Events Gallery */}
      <section className="py-16">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">
                Sports and Events Gallery
              </h2>
              <p className="text-muted-foreground max-w-3xl mx-auto">
                Explore images from our sports competitions and college events
              </p>
            </div>

            <div className="flex justify-center mb-8">
              <div className="inline-flex rounded-md shadow-sm">
                <button
                  onClick={() => setActiveGalleryTab("sports")}
                  className={`px-4 py-2 text-sm font-medium rounded-l-lg ${
                    activeGalleryTab === "sports"
                      ? "bg-primary text-primary-foreground"
                      : "bg-background text-muted-foreground hover:bg-muted/50"
                  }`}
                >
                  Sports Week
                </button>
                <button
                  onClick={() => setActiveGalleryTab("events")}
                  className={`px-4 py-2 text-sm font-medium ${
                    activeGalleryTab === "events"
                      ? "bg-primary text-primary-foreground"
                      : "bg-background text-muted-foreground hover:bg-muted/50"
                  }`}
                >
                  College Events
                </button>
                <button
                  onClick={() => setActiveGalleryTab("competitions")}
                  className={`px-4 py-2 text-sm font-medium rounded-r-lg ${
                    activeGalleryTab === "competitions"
                      ? "bg-primary text-primary-foreground"
                      : "bg-background text-muted-foreground hover:bg-muted/50"
                  }`}
                >
                  Competitions
                </button>
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {activeGalleryTab === "sports" && (
                <>
                  {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
                    <div
                      key={item}
                      className="relative h-[150px] rounded-lg overflow-hidden"
                    >
                      <img
                        src={`/placeholder.svg?height=150&width=200&text=Sports${item}`}
                        alt={`Sports Image ${item}`}
                        className="object-cover"
                      />
                    </div>
                  ))}
                </>
              )}

              {activeGalleryTab === "events" && (
                <>
                  {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
                    <div
                      key={item}
                      className="relative h-[150px] rounded-lg overflow-hidden"
                    >
                      <img
                        src={`/placeholder.svg?height=150&width=200&text=Event${item}`}
                        alt={`Event Image ${item}`}
                        className="object-cover"
                      />
                    </div>
                  ))}
                </>
              )}

              {activeGalleryTab === "competitions" && (
                <>
                  {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
                    <div
                      key={item}
                      className="relative h-[150px] rounded-lg overflow-hidden"
                    >
                      <img
                        src={`/placeholder.svg?height=150&width=200&text=Competition${item}`}
                        alt={`Competition Image ${item}`}
                        className="object-cover"
                      />
                    </div>
                  ))}
                </>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* HBS Magazine */}
      <section className="py-16 bg-muted/50">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">HBS Magazine</h2>
              <p className="text-muted-foreground max-w-3xl mx-auto">
                Explore our student-led publications showcasing creativity,
                research, and achievements
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <Card className="p-6 hover:shadow-lg transition-shadow">
                <div className="flex flex-col items-center">
                  <div className="relative h-[300px] w-[200px] mb-4">
                    <img
                      src="/placeholder.svg?height=300&width=200&text=Urdu+Magazine"
                      alt="HBS Urdu Magazine"
                      className="object-cover rounded-lg"
                    />
                  </div>
                  <h3 className="text-xl font-bold mb-2">URDU VERSION</h3>
                  <Button className="mt-2" variant="outline">
                    <Download className="mr-2 h-4 w-4" /> Download Magazine
                  </Button>
                </div>
              </Card>

              <Card className="p-6 hover:shadow-lg transition-shadow">
                <div className="flex flex-col items-center">
                  <div className="relative h-[300px] w-[200px] mb-4">
                    <img
                      src="/placeholder.svg?height=300&width=200&text=English+Magazine"
                      alt="HBS English Magazine"
                      className="object-cover rounded-lg"
                    />
                  </div>
                  <h3 className="text-xl font-bold mb-2">ENGLISH VERSION</h3>
                  <Button className="mt-2" variant="outline">
                    <Download className="mr-2 h-4 w-4" /> Download Magazine
                  </Button>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Student Affairs */}
      <section className="py-16">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">
                Student Affairs Department
              </h2>
              <p className="text-muted-foreground max-w-3xl mx-auto">
                Your first point of contact for all student-related matters and
                support services
              </p>
            </div>

            <Card className="p-8">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-bold mb-4">How We Can Help</h3>
                  <p className="text-muted-foreground mb-6">
                    The Student Affairs Department is dedicated to enhancing the
                    quality of student life and supporting your academic
                    journey. We provide a range of services to help you navigate
                    your college experience successfully.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <div className="h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center mr-3 mt-1">
                        <ChevronRight className="h-3 w-3 text-primary" />
                      </div>
                      <p className="text-muted-foreground">
                        Academic advising and support
                      </p>
                    </li>
                    <li className="flex items-start">
                      <div className="h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center mr-3 mt-1">
                        <ChevronRight className="h-3 w-3 text-primary" />
                      </div>
                      <p className="text-muted-foreground">
                        Student welfare and counseling
                      </p>
                    </li>
                    <li className="flex items-start">
                      <div className="h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center mr-3 mt-1">
                        <ChevronRight className="h-3 w-3 text-primary" />
                      </div>
                      <p className="text-muted-foreground">
                        Extracurricular activities coordination
                      </p>
                    </li>
                    <li className="flex items-start">
                      <div className="h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center mr-3 mt-1">
                        <ChevronRight className="h-3 w-3 text-primary" />
                      </div>
                      <p className="text-muted-foreground">
                        Hostel and accommodation assistance
                      </p>
                    </li>
                    <li className="flex items-start">
                      <div className="h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center mr-3 mt-1">
                        <ChevronRight className="h-3 w-3 text-primary" />
                      </div>
                      <p className="text-muted-foreground">
                        Grievance redressal and conflict resolution
                      </p>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-2xl font-bold mb-4">
                    Contact Information
                  </h3>
                  <div className="space-y-6">
                    <div className="flex items-start">
                      <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center mr-4">
                        <Building className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <p className="font-medium">Office Location</p>
                        <p className="text-muted-foreground">
                          Ground Floor, Main Administrative Block
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center mr-4">
                        <Mail className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <p className="font-medium">Email</p>
                        <p className="text-muted-foreground">
                          studentaffairs@hbs.edu.pk
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center mr-4">
                        <Phone className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <p className="font-medium">Phone</p>
                        <p className="text-muted-foreground">
                          +92-51-2243323 Ext. 111
                        </p>
                      </div>
                    </div>

                    <Button className="w-full">Contact Student Affairs</Button>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="md:flex items-center justify-between">
            <div className="mb-6 md:mb-0">
              <h2 className="text-3xl font-bold mb-2">
                Ready to Join Our Community?
              </h2>
              <p className="text-primary-foreground/90">
                Begin your journey towards becoming a healthcare professional at
                HBS
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <Button
                size="lg"
                variant="default"
                className="bg-primary-foreground text-primary hover:bg-primary-foreground/90"
              >
                Apply Now
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-primary-foreground border text-primary-foreground hover:bg-primary-foreground/10"
              >
                Download Prospectus
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
