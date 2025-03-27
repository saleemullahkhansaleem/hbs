import {
  BookOpen,
  Clock,
  Calendar,
  Users,
  CheckCircle,
  GraduationCap,
  ChevronRight,
  Microscope,
  Stethoscope,
  Brain,
  HeartPulse,
  BookText,
} from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function AcademicsPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-16 bg-muted/50 w-full overflow-hidden">
        <div className="container max-w-7xl mx-auto px-4 relative h-full flex flex-col items-center justify-center text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-foreground/20 backdrop-blur-sm mb-4">
            <GraduationCap className="h-8 w-8" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-2">Academics</h1>
          <p className="text-xl text-muted-foreground max-w-2xl">
            Excellence in Medical and Dental Education
          </p>
        </div>
      </section>

      {/* Programs Overview */}
      <section className="py-16">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <Tabs defaultValue="mbbs" className="w-full">
              <TabsList className="grid w-full grid-cols-2 mb-8">
                <TabsTrigger value="mbbs">MBBS</TabsTrigger>
                <TabsTrigger value="bds">BDS</TabsTrigger>
              </TabsList>

              <TabsContent value="mbbs">
                <Card className="p-8">
                  <div className="flex items-center mb-6">
                    <BookOpen className="h-8 w-8 text-primary mr-3" />
                    <h2 className="text-2xl font-bold">
                      Bachelor of Medicine and Bachelor of Surgery (MBBS)
                    </h2>
                  </div>
                  <p className="text-muted-foreground mb-8">
                    Pakistan Medical & Dental Council (PM&DC) regulations and
                    the admitting university (Shaheed Zulfiqar Ali Bhutto
                    Medical University, Islamabad) rules are being implemented
                    in HBS Medical College for new MBBS admissions.
                  </p>

                  <div className="grid md:grid-cols-4 gap-6 mb-8">
                    <InfoCard icon={Clock} title="Duration" content="5 Years" />
                    <InfoCard
                      icon={Calendar}
                      title="Admission Start"
                      content="After MDCAT result"
                    />
                    <InfoCard
                      icon={Users}
                      title="Classes"
                      content="On Campus"
                    />
                    <InfoCard
                      icon={CheckCircle}
                      title="Attendance"
                      content="Full-Time"
                    />
                  </div>

                  <div className="flex flex-wrap gap-4">
                    <Button className="group">
                      View Curriculum
                      <ChevronRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Button>
                    <Button variant="outline" className="group">
                      Download Brochure
                      <ChevronRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </div>
                </Card>
              </TabsContent>

              <TabsContent value="bds">
                <Card className="p-8">
                  <div className="flex items-center mb-6">
                    <BookOpen className="h-8 w-8 text-primary mr-3" />
                    <h2 className="text-2xl font-bold">
                      Bachelor of Dental Surgery (BDS)
                    </h2>
                  </div>
                  <p className="text-muted-foreground mb-8">
                    Pakistan Medical & Dental Council (PM&DC) regulations and
                    the admitting university (Shaheed Zulfiqar Ali Bhutto
                    Medical University, Islamabad) rules are being implemented
                    in HBS Dental College for new BDS admissions.
                  </p>

                  <div className="grid md:grid-cols-4 gap-6 mb-8">
                    <InfoCard icon={Clock} title="Duration" content="4 Years" />
                    <InfoCard
                      icon={Calendar}
                      title="Admission Start"
                      content="After MDCAT result"
                    />
                    <InfoCard
                      icon={Users}
                      title="Classes"
                      content="On Campus"
                    />
                    <InfoCard
                      icon={CheckCircle}
                      title="Attendance"
                      content="Full-Time"
                    />
                  </div>

                  <div className="flex flex-wrap gap-4">
                    <Button className="group">
                      View Curriculum
                      <ChevronRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Button>
                    <Button variant="outline" className="group">
                      Download Brochure
                      <ChevronRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </div>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>

      {/* Academic Departments */}
      <section className="py-16 bg-muted/50">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold mb-4">Academic Departments</h2>
            <p className="text-muted-foreground">
              Our comprehensive departments provide specialized education and
              training in various medical and dental disciplines
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              {
                icon: Microscope,
                title: "Basic Sciences",
                description:
                  "Foundational knowledge in anatomy, physiology, biochemistry, and more",
              },
              {
                icon: Stethoscope,
                title: "Clinical Sciences",
                description:
                  "Practical training in diagnosis, treatment, and patient care",
              },
              {
                icon: Brain,
                title: "Medical Specialties",
                description:
                  "Specialized training in various medical disciplines",
              },
              {
                icon: HeartPulse,
                title: "Surgical Specialties",
                description:
                  "Advanced training in surgical procedures and techniques",
              },
              {
                icon: BookText,
                title: "Dental Sciences",
                description:
                  "Comprehensive education in dental care and oral health",
              },
              {
                icon: Users,
                title: "Community Medicine",
                description: "Focus on public health and preventive medicine",
              },
            ].map((department, index) => (
              <Card
                key={index}
                className="p-6 hover:shadow-md transition-shadow"
              >
                <div className="flex items-center mb-4">
                  <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center mr-3">
                    <department.icon className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="text-lg font-bold">{department.title}</h3>
                </div>
                <p className="text-muted-foreground">
                  {department.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Academic Facilities */}
      <section className="py-16">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold mb-4">Academic Facilities</h2>
            <p className="text-muted-foreground">
              State-of-the-art facilities to support your learning and research
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="relative overflow-hidden rounded-lg aspect-[4/3] group">
              <img
                src="https://placehold.co/300x250"
                alt="Library"
                className="object-cover w-full transition-transform group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2">
                    Modern Library
                  </h3>
                  <p className="text-white/80 text-sm">
                    Extensive collection of medical literature and digital
                    resources
                  </p>
                </div>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-lg aspect-[4/3] group">
              <img
                src="https://placehold.co/300x250"
                alt="Laboratories"
                className="object-cover w-full transition-transform group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2">
                    Advanced Laboratories
                  </h3>
                  <p className="text-white/80 text-sm">
                    Well-equipped labs for practical learning and research
                  </p>
                </div>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-lg aspect-[4/3] group">
              <img
                src="https://placehold.co/300x250"
                alt="Simulation Center"
                className="object-cover w-full transition-transform group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2">
                    Simulation Center
                  </h3>
                  <p className="text-white/80 text-sm">
                    Clinical skills training in realistic simulated environments
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Academic Calendar */}
      <section className="py-16 bg-muted/50">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Academic Calendar</h2>
              <p className="text-muted-foreground">
                Key dates and schedules for the current academic year
              </p>
            </div>

            <Card className="p-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-bold mb-4 flex items-center">
                    <Calendar className="h-5 w-5 mr-2 text-primary" />
                    Fall Semester
                  </h3>
                  <ul className="space-y-4">
                    <li className="flex">
                      <div className="mr-4 mt-1">
                        <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center">
                          <span className="text-primary text-xs font-medium">
                            01
                          </span>
                        </div>
                      </div>
                      <div>
                        <p className="font-medium">Classes Begin</p>
                        <p className="text-sm text-slate-500">
                          September 1, 2024
                        </p>
                      </div>
                    </li>
                    <li className="flex">
                      <div className="mr-4 mt-1">
                        <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center">
                          <span className="text-primary text-xs font-medium">
                            02
                          </span>
                        </div>
                      </div>
                      <div>
                        <p className="font-medium">Mid-term Examinations</p>
                        <p className="text-sm text-slate-500">
                          October 15-22, 2024
                        </p>
                      </div>
                    </li>
                    <li className="flex">
                      <div className="mr-4 mt-1">
                        <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center">
                          <span className="text-primary text-xs font-medium">
                            03
                          </span>
                        </div>
                      </div>
                      <div>
                        <p className="font-medium">Final Examinations</p>
                        <p className="text-sm text-slate-500">
                          December 10-20, 2024
                        </p>
                      </div>
                    </li>
                    <li className="flex">
                      <div className="mr-4 mt-1">
                        <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center">
                          <span className="text-primary text-xs font-medium">
                            04
                          </span>
                        </div>
                      </div>
                      <div>
                        <p className="font-medium">Winter Break</p>
                        <p className="text-sm text-slate-500">
                          December 21, 2024 - January 5, 2025
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-bold mb-4 flex items-center">
                    <Calendar className="h-5 w-5 mr-2 text-primary" />
                    Spring Semester
                  </h3>
                  <ul className="space-y-4">
                    <li className="flex">
                      <div className="mr-4 mt-1">
                        <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center">
                          <span className="text-primary text-xs font-medium">
                            01
                          </span>
                        </div>
                      </div>
                      <div>
                        <p className="font-medium">Classes Begin</p>
                        <p className="text-sm text-slate-500">
                          January 6, 2025
                        </p>
                      </div>
                    </li>
                    <li className="flex">
                      <div className="mr-4 mt-1">
                        <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center">
                          <span className="text-primary text-xs font-medium">
                            02
                          </span>
                        </div>
                      </div>
                      <div>
                        <p className="font-medium">Mid-term Examinations</p>
                        <p className="text-sm text-slate-500">
                          February 20-27, 2025
                        </p>
                      </div>
                    </li>
                    <li className="flex">
                      <div className="mr-4 mt-1">
                        <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center">
                          <span className="text-primary text-xs font-medium">
                            03
                          </span>
                        </div>
                      </div>
                      <div>
                        <p className="font-medium">Final Examinations</p>
                        <p className="text-sm text-slate-500">
                          May 10-20, 2025
                        </p>
                      </div>
                    </li>
                    <li className="flex">
                      <div className="mr-4 mt-1">
                        <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center">
                          <span className="text-primary text-xs font-medium">
                            04
                          </span>
                        </div>
                      </div>
                      <div>
                        <p className="font-medium">Summer Break</p>
                        <p className="text-sm text-slate-500">
                          May 21 - August 31, 2025
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="mt-8 text-center">
                <Button variant="outline" className="group">
                  Download Complete Academic Calendar
                  <ChevronRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Apply Now CTA */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="md:flex items-center justify-between">
            <div className="mb-6 md:mb-0">
              <h2 className="text-3xl font-bold mb-2">
                Ready to Begin Your Medical Journey?
              </h2>
              <p className="text-primary-foreground/70">
                Applications are now open for the upcoming academic session
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <Button
                size="lg"
                variant="default"
                className="bg-primary-foreground text-primary hover:bg-primary-foreground/70"
              >
                Apply Now
              </Button>
              <Button
                size="lg"
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

function InfoCard({ icon: Icon, title, content }) {
  return (
    <Card className="p-4 flex flex-col items-center text-center">
      <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
        <Icon className="h-6 w-6 text-primary" />
      </div>
      <h3 className="font-medium text-slate-500 mb-1">{title}</h3>
      <p className="font-semibold">{content}</p>
    </Card>
  );
}
