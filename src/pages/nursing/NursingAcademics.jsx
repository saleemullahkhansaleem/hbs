import {
  BookOpen,
  Award,
  User,
  Clock,
  Calendar,
  CheckCircle,
  ChevronRight,
  Stethoscope,
  HeartPulse,
  GraduationCap,
  BookText,
  Users,
  Building2,
} from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function NursingAcademics() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[40vh] min-h-[300px] w-full overflow-hidden bg-muted/50">
        <div className="container relative h-full flex flex-col items-center justify-center text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-foreground/20 backdrop-blur-sm mb-4">
            <GraduationCap className="h-8 w-8" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-2">Academics</h1>
          <p className="text-xl text-foreground/90 max-w-2xl">
            Excellence in Nursing Education
          </p>
        </div>
      </section>

      {/* Overview */}
      <section className="py-16 px-4">
        <div className="container">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">
                Nursing Education at HBS
              </h2>
              <p className="text-muted-foreground max-w-3xl mx-auto">
                HBS College of Nursing is committed to preparing highly skilled,
                compassionate nursing professionals who will serve as leaders in
                healthcare delivery, education, and research.
              </p>
            </div>

            <Card className="p-8 mb-8">
              <p className="text-muted-foreground mb-6">
                Our nursing programs are designed to equip students with the
                knowledge, skills, and attitudes necessary to provide
                evidence-based, patient-centered care in diverse healthcare
                settings. The curriculum integrates theoretical concepts with
                clinical practice, critical thinking, and ethical
                decision-making.
              </p>

              <p className="text-muted-foreground">
                All programs at HBS College of Nursing are approved by Pakistan
                Nursing & Midwifery Council (PNC) and affiliated with Shaheed
                Zulfiqar Ali Bhutto Medical University (SZABMU), ensuring
                high-quality education that meets national standards and
                produces competent healthcare professionals.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Programs Offered */}
      <section className="py-16 px-4 bg-muted/50">
        <div className="container">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Programs Offered</h2>
              <p className="text-muted-foreground max-w-3xl mx-auto">
                Our comprehensive nursing programs cater to students at various
                stages of their nursing career
              </p>
            </div>

            <Tabs defaultValue="degree" className="w-full">
              <TabsList className="grid w-full grid-cols-2 mb-8">
                <TabsTrigger value="degree">Degree Programs</TabsTrigger>
                <TabsTrigger value="diploma">Diploma Programs</TabsTrigger>
              </TabsList>

              <TabsContent value="degree">
                <div className="grid md:grid-cols-2 gap-6">
                  <ProgramCard
                    title="Bachelor of Science in Nursing (BSN)"
                    duration="4 Years"
                    icon={BookOpen}
                    description="A comprehensive degree program that prepares students for professional nursing practice across healthcare settings."
                    features={[
                      "Theoretical foundation in nursing science",
                      "Clinical rotations in diverse settings",
                      "Research methodology",
                      "Leadership & management skills",
                    ]}
                  />

                  <ProgramCard
                    title="Post-RN BSN"
                    duration="2 Years"
                    icon={Award}
                    description="An advanced program for Registered Nurses to obtain their Bachelor's degree and enhance their professional competencies."
                    features={[
                      "Advanced clinical reasoning",
                      "Evidence-based practice",
                      "Healthcare leadership",
                      "Community health nursing",
                    ]}
                  />
                </div>
              </TabsContent>

              <TabsContent value="diploma">
                <div className="grid md:grid-cols-3 gap-6">
                  <ProgramCard
                    title="Lady Health Visitor (LHV)"
                    duration="2 Years"
                    icon={HeartPulse}
                    description="Training focused on maternal, child health and community healthcare services."
                    features={[
                      "Maternal & child health",
                      "Community healthcare",
                      "Primary health services",
                      "Health promotion",
                    ]}
                    small={true}
                  />

                  <ProgramCard
                    title="Community Midwife (CMW)"
                    duration="18 Months"
                    icon={Users}
                    description="Specialized training in midwifery skills for community-based maternal care."
                    features={[
                      "Antenatal care",
                      "Delivery management",
                      "Postnatal care",
                      "Newborn care",
                    ]}
                    small={true}
                  />

                  <ProgramCard
                    title="Certified Nursing Assistant (CNA)"
                    duration="2 Years"
                    icon={Stethoscope}
                    description="Foundation level training for basic nursing care and assistance."
                    features={[
                      "Basic nursing skills",
                      "Patient care fundamentals",
                      "Healthcare assistance",
                      "Clinical practice",
                    ]}
                    small={true}
                  />
                </div>
              </TabsContent>
            </Tabs>

            <div className="mt-10 text-center">
              <Button variant="outline" className="group">
                Download Complete Program Brochure
                <ChevronRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Curriculum Structure */}
      <section className="py-16 px-4">
        <div className="container">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Curriculum Structure</h2>
              <p className="text-muted-foreground max-w-3xl mx-auto">
                Our curriculum is designed to provide a balanced approach to
                nursing education, combining theoretical knowledge with
                practical skills
              </p>
            </div>

            <Card className="p-8 mb-8">
              <Tabs defaultValue="bsn" className="w-full">
                <TabsList className="grid w-full grid-cols-2 mb-8">
                  <TabsTrigger value="bsn">BSN Curriculum</TabsTrigger>
                  <TabsTrigger value="prn">Post-RN Curriculum</TabsTrigger>
                </TabsList>

                <TabsContent value="bsn">
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h3 className="text-xl font-bold mb-4 flex items-center">
                        <Calendar className="h-5 w-5 mr-2 text-primary" />
                        Program Structure
                      </h3>
                      <ul className="space-y-3">
                        <li className="flex items-start">
                          <div className="h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center mr-2 mt-0.5">
                            <CheckCircle className="h-3 w-3 text-primary" />
                          </div>
                          <p className="text-sm text-muted-foreground">
                            <span className="font-medium">8 Semesters</span>{" "}
                            spread over 4 years
                          </p>
                        </li>
                        <li className="flex items-start">
                          <div className="h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center mr-2 mt-0.5">
                            <CheckCircle className="h-3 w-3 text-primary" />
                          </div>
                          <p className="text-sm text-muted-foreground">
                            <span className="font-medium">Theory Courses:</span>{" "}
                            Classroom-based learning with modern teaching
                            methodologies
                          </p>
                        </li>
                        <li className="flex items-start">
                          <div className="h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center mr-2 mt-0.5">
                            <CheckCircle className="h-3 w-3 text-primary" />
                          </div>
                          <p className="text-sm text-muted-foreground">
                            <span className="font-medium">
                              Laboratory Practice:
                            </span>{" "}
                            Hands-on skills training in state-of-the-art
                            simulation labs
                          </p>
                        </li>
                        <li className="flex items-start">
                          <div className="h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center mr-2 mt-0.5">
                            <CheckCircle className="h-3 w-3 text-primary" />
                          </div>
                          <p className="text-sm text-muted-foreground">
                            <span className="font-medium">
                              Clinical Rotations:
                            </span>{" "}
                            Supervised practice in HBS General Hospital and
                            affiliated healthcare facilities
                          </p>
                        </li>
                        <li className="flex items-start">
                          <div className="h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center mr-2 mt-0.5">
                            <CheckCircle className="h-3 w-3 text-primary" />
                          </div>
                          <p className="text-sm text-muted-foreground">
                            <span className="font-medium">
                              Research Project:
                            </span>{" "}
                            Culminating research experience in the final year
                          </p>
                        </li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-xl font-bold mb-4 flex items-center">
                        <BookText className="h-5 w-5 mr-2 text-primary" />
                        Key Course Areas
                      </h3>
                      <ul className="space-y-3">
                        <li className="flex items-start">
                          <div className="h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center mr-2 mt-0.5">
                            <CheckCircle className="h-3 w-3 text-primary" />
                          </div>
                          <p className="text-sm text-muted-foreground">
                            <span className="font-medium">
                              Foundation Courses:
                            </span>{" "}
                            Anatomy, Physiology, Biochemistry, Microbiology,
                            Psychology
                          </p>
                        </li>
                        <li className="flex items-start">
                          <div className="h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center mr-2 mt-0.5">
                            <CheckCircle className="h-3 w-3 text-primary" />
                          </div>
                          <p className="text-sm text-muted-foreground">
                            <span className="font-medium">Core Nursing:</span>{" "}
                            Fundamentals of Nursing, Medical-Surgical Nursing,
                            Pediatric Nursing, Maternal Health
                          </p>
                        </li>
                        <li className="flex items-start">
                          <div className="h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center mr-2 mt-0.5">
                            <CheckCircle className="h-3 w-3 text-primary" />
                          </div>
                          <p className="text-sm text-muted-foreground">
                            <span className="font-medium">
                              Specialized Areas:
                            </span>{" "}
                            Critical Care, Emergency Nursing, Community Health,
                            Psychiatric Nursing
                          </p>
                        </li>
                        <li className="flex items-start">
                          <div className="h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center mr-2 mt-0.5">
                            <CheckCircle className="h-3 w-3 text-primary" />
                          </div>
                          <p className="text-sm text-muted-foreground">
                            <span className="font-medium">
                              Professional Development:
                            </span>{" "}
                            Nursing Ethics, Leadership, Healthcare Management,
                            Research Methodology
                          </p>
                        </li>
                        <li className="flex items-start">
                          <div className="h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center mr-2 mt-0.5">
                            <CheckCircle className="h-3 w-3 text-primary" />
                          </div>
                          <p className="text-sm text-muted-foreground">
                            <span className="font-medium">Electives:</span>{" "}
                            Specialized nursing fields based on student interest
                          </p>
                        </li>
                      </ul>
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="prn">
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h3 className="text-xl font-bold mb-4 flex items-center">
                        <Calendar className="h-5 w-5 mr-2 text-primary" />
                        Program Structure
                      </h3>
                      <ul className="space-y-3">
                        <li className="flex items-start">
                          <div className="h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center mr-2 mt-0.5">
                            <CheckCircle className="h-3 w-3 text-primary" />
                          </div>
                          <p className="text-sm text-muted-foreground">
                            <span className="font-medium">4 Semesters</span>{" "}
                            spread over 2 years
                          </p>
                        </li>
                        <li className="flex items-start">
                          <div className="h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center mr-2 mt-0.5">
                            <CheckCircle className="h-3 w-3 text-primary" />
                          </div>
                          <p className="text-sm text-muted-foreground">
                            <span className="font-medium">
                              Advanced Theory:
                            </span>{" "}
                            Building on previous nursing knowledge
                          </p>
                        </li>
                        <li className="flex items-start">
                          <div className="h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center mr-2 mt-0.5">
                            <CheckCircle className="h-3 w-3 text-primary" />
                          </div>
                          <p className="text-sm text-muted-foreground">
                            <span className="font-medium">
                              Clinical Practicums:
                            </span>{" "}
                            Advanced clinical experiences in specialized areas
                          </p>
                        </li>
                        <li className="flex items-start">
                          <div className="h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center mr-2 mt-0.5">
                            <CheckCircle className="h-3 w-3 text-primary" />
                          </div>
                          <p className="text-sm text-muted-foreground">
                            <span className="font-medium">
                              Research Project:
                            </span>{" "}
                            Evidence-based practice project in area of
                            specialization
                          </p>
                        </li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-xl font-bold mb-4 flex items-center">
                        <BookText className="h-5 w-5 mr-2 text-primary" />
                        Key Course Areas
                      </h3>
                      <ul className="space-y-3">
                        <li className="flex items-start">
                          <div className="h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center mr-2 mt-0.5">
                            <CheckCircle className="h-3 w-3 text-primary" />
                          </div>
                          <p className="text-sm text-muted-foreground">
                            <span className="font-medium">
                              Advanced Nursing Concepts:
                            </span>{" "}
                            Advanced Health Assessment, Pathophysiology,
                            Pharmacology
                          </p>
                        </li>
                        <li className="flex items-start">
                          <div className="h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center mr-2 mt-0.5">
                            <CheckCircle className="h-3 w-3 text-primary" />
                          </div>
                          <p className="text-sm text-muted-foreground">
                            <span className="font-medium">
                              Professional Development:
                            </span>{" "}
                            Nursing Theories, Healthcare Policy, Ethics in
                            Healthcare
                          </p>
                        </li>
                        <li className="flex items-start">
                          <div className="h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center mr-2 mt-0.5">
                            <CheckCircle className="h-3 w-3 text-primary" />
                          </div>
                          <p className="text-sm text-muted-foreground">
                            <span className="font-medium">Leadership:</span>{" "}
                            Nursing Leadership, Healthcare Management, Quality
                            Improvement
                          </p>
                        </li>
                        <li className="flex items-start">
                          <div className="h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center mr-2 mt-0.5">
                            <CheckCircle className="h-3 w-3 text-primary" />
                          </div>
                          <p className="text-sm text-muted-foreground">
                            <span className="font-medium">Research:</span>{" "}
                            Research Methods, Evidence-Based Practice,
                            Statistics for Healthcare
                          </p>
                        </li>
                        <li className="flex items-start">
                          <div className="h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center mr-2 mt-0.5">
                            <CheckCircle className="h-3 w-3 text-primary" />
                          </div>
                          <p className="text-sm text-muted-foreground">
                            <span className="font-medium">
                              Community Health:
                            </span>{" "}
                            Advanced Community Health Nursing, Health Promotion
                          </p>
                        </li>
                      </ul>
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
            </Card>
          </div>
        </div>
      </section>

      {/* Academic Facilities */}
      <section className="py-16 px-4 bg-muted/50">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold mb-4">Academic Facilities</h2>
            <p className="text-muted-foreground">
              State-of-the-art facilities to support nursing education and
              practical skills development
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="relative overflow-hidden rounded-lg aspect-[4/3] group">
              <img
                src="https://placehold.co/400x300"
                alt="Simulation Lab"
                className="object-cover w-full h-full transition-transform group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2">
                    Simulation Labs
                  </h3>
                  <p className="text-white/80 text-sm">
                    High-fidelity simulation labs for practicing clinical skills
                    in a controlled environment
                  </p>
                </div>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-lg aspect-[4/3] group">
              <img
                src="https://placehold.co/400x300"
                alt="Clinical Training"
                className="object-cover w-full h-full transition-transform group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2">
                    Clinical Facilities
                  </h3>
                  <p className="text-white/80 text-sm">
                    Access to HBS General Hospital and affiliated healthcare
                    institutions for clinical rotations
                  </p>
                </div>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-lg aspect-[4/3] group">
              <img
                src="https://placehold.co/400x300"
                alt="Nursing Library"
                className="object-cover w-full h-full transition-transform group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2">
                    Resource Center
                  </h3>
                  <p className="text-white/80 text-sm">
                    Specialized nursing library with extensive collection of
                    books, journals and digital resources
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mt-8">
            <Card className="p-6 flex flex-col items-center text-center">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Users className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">
                Student Support Services
              </h3>
              <p className="text-muted-foreground">
                Academic advisors, mentoring programs, tutoring services, and
                counseling support to ensure student success throughout the
                program.
              </p>
            </Card>

            <Card className="p-6 flex flex-col items-center text-center">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Building2 className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">Student Housing</h3>
              <p className="text-muted-foreground">
                Safe and comfortable hostel facilities for both male and female
                students with modern amenities and reliable security.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Faculty */}
      <section className="py-16 px-4">
        <div className="container">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Our Faculty</h2>
              <p className="text-muted-foreground max-w-3xl mx-auto">
                Learn from experienced nursing educators and practitioners
                dedicated to excellence in nursing education
              </p>
            </div>

            <Card className="p-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-bold mb-4">Faculty Highlights</h3>
                  <ul className="space-y-4">
                    <li className="flex">
                      <div className="mr-4 mt-1">
                        <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center">
                          <CheckCircle className="h-4 w-4 text-primary" />
                        </div>
                      </div>
                      <p className="text-muted-foreground">
                        <span className="font-medium">Diverse Expertise:</span>{" "}
                        Our faculty members bring expertise from various nursing
                        specialties including medical-surgical, pediatrics,
                        maternal health, psychiatric, and community health
                        nursing.
                      </p>
                    </li>
                    <li className="flex">
                      <div className="mr-4 mt-1">
                        <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center">
                          <CheckCircle className="h-4 w-4 text-primary" />
                        </div>
                      </div>
                      <p className="text-muted-foreground">
                        <span className="font-medium">
                          Advanced Credentials:
                        </span>{" "}
                        Many faculty hold advanced degrees and specialized
                        certifications in their areas of practice.
                      </p>
                    </li>
                    <li className="flex">
                      <div className="mr-4 mt-1">
                        <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center">
                          <CheckCircle className="h-4 w-4 text-primary" />
                        </div>
                      </div>
                      <p className="text-muted-foreground">
                        <span className="font-medium">Clinical Practice:</span>{" "}
                        Faculty maintain active clinical practice to ensure
                        teaching reflects current healthcare trends and
                        practices.
                      </p>
                    </li>
                    <li className="flex">
                      <div className="mr-4 mt-1">
                        <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center">
                          <CheckCircle className="h-4 w-4 text-primary" />
                        </div>
                      </div>
                      <p className="text-muted-foreground">
                        <span className="font-medium">
                          Research Engagement:
                        </span>{" "}
                        Faculty are engaged in nursing research and scholarly
                        activities, contributing to the advancement of nursing
                        knowledge.
                      </p>
                    </li>
                  </ul>
                </div>

                <div className="bg-primary/5 p-6 rounded-lg">
                  <h3 className="text-xl font-bold mb-4">
                    Faculty-Student Ratio
                  </h3>
                  <div className="flex flex-col items-center">
                    <div className="h-24 w-24 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                      <span className="text-3xl font-bold text-primary">
                        1:15
                      </span>
                    </div>
                    <p className="text-center text-muted-foreground">
                      Our low faculty-to-student ratio ensures personalized
                      attention and mentoring throughout your educational
                      journey. This close interaction facilitates deeper
                      learning, timely feedback, and better skill development.
                    </p>
                  </div>

                  <div className="mt-6">
                    <h4 className="font-bold mb-2">Additional Support</h4>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <div className="h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center mr-2 mt-0.5">
                          <CheckCircle className="h-3 w-3 text-primary" />
                        </div>
                        <p className="text-sm text-muted-foreground">
                          Regular office hours for one-on-one consultations
                        </p>
                      </li>
                      <li className="flex items-start">
                        <div className="h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center mr-2 mt-0.5">
                          <CheckCircle className="h-3 w-3 text-primary" />
                        </div>
                        <p className="text-sm text-muted-foreground">
                          Faculty mentorship program pairing students with
                          faculty advisors
                        </p>
                      </li>
                      <li className="flex items-start">
                        <div className="h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center mr-2 mt-0.5">
                          <CheckCircle className="h-3 w-3 text-primary" />
                        </div>
                        <p className="text-sm text-muted-foreground">
                          Dedicated clinical instructors during hospital
                          rotations
                        </p>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="mt-8 text-center">
                <Button variant="outline" className="group">
                  View Faculty Directory
                  <ChevronRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Career Opportunities */}
      <section className="py-16 px-4 bg-muted/50">
        <div className="container">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Career Opportunities</h2>
              <p className="text-muted-foreground max-w-3xl mx-auto">
                A nursing education from HBS opens doors to diverse and
                rewarding career paths in healthcare
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  title: "Hospital Settings",
                  description:
                    "Work in public or private hospitals across various departments including medical-surgical units, emergency departments, intensive care, pediatrics, and more.",
                  icon: HeartPulse,
                },
                {
                  title: "Community Health",
                  description:
                    "Provide essential healthcare services in community clinics, schools, public health departments, and home healthcare settings.",
                  icon: Users,
                },
                {
                  title: "Specialized Care",
                  description:
                    "Pursue specialized roles in areas such as oncology, cardiology, nephrology, maternal health, or mental health nursing.",
                  icon: Stethoscope,
                },
                {
                  title: "Education & Research",
                  description:
                    "Share your knowledge as a nurse educator or contribute to advancing healthcare through nursing research.",
                  icon: BookText,
                },
                {
                  title: "Management",
                  description:
                    "Take on leadership roles such as nurse manager, director of nursing, or healthcare administrator.",
                  icon: User,
                },
                {
                  title: "Global Opportunities",
                  description:
                    "PNC-registered nurses are recognized internationally, offering opportunities to work abroad in various healthcare systems.",
                  icon: GraduationCap,
                },
              ].map((career, index) => (
                <Card
                  key={index}
                  className="p-6 hover:shadow-md transition-shadow"
                >
                  <div className="flex items-center mb-4">
                    <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center mr-3">
                      <career.icon className="h-5 w-5 text-primary" />
                    </div>
                    <h3 className="text-lg font-bold">{career.title}</h3>
                  </div>
                  <p className="text-muted-foreground text-sm">
                    {career.description}
                  </p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Apply Now CTA */}
      <section className="py-16 px-4 bg-primary text-primary-foreground">
        <div className="container">
          <div className="md:flex items-center justify-between">
            <div className="mb-6 md:mb-0">
              <h2 className="text-3xl font-bold mb-2">
                Begin Your Nursing Career with HBS
              </h2>
              <p className="text-primary-foreground/90">
                Applications are now open for the upcoming academic session
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <Button
                variant="default"
                className="bg-primary-foreground text-primary hover:bg-primary-foreground/70"
              >
                Apply Now
              </Button>
              <Button
                variant=""
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

function ProgramCard({
  title,
  duration,
  icon: Icon,
  description,
  features,
  small = false,
}) {
  return (
    <Card
      className={`p-6 hover:shadow-md transition-shadow ${
        small ? "flex flex-col h-full" : ""
      }`}
    >
      <div className="flex items-center mb-4">
        <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center mr-3">
          <Icon className="h-5 w-5 text-primary" />
        </div>
        <div>
          <h3 className="text-lg font-bold">{title}</h3>
          <div className="flex items-center text-primary">
            <Clock className="h-4 w-4 mr-1" />
            <span className="text-sm">{duration}</span>
          </div>
        </div>
      </div>
      <p className="text-muted-foreground mb-4 text-sm">{description}</p>
      <div className="border-t pt-4">
        <p className="font-medium text-sm mb-2">Program Highlights:</p>
        <ul className="space-y-2">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <div className="h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center mr-2 mt-0.5">
                <CheckCircle className="h-3 w-3 text-primary" />
              </div>
              <p className="text-xs text-muted-foreground">{feature}</p>
            </li>
          ))}
        </ul>
      </div>
    </Card>
  );
}
