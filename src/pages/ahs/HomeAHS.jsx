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
  Heart,
  Mail,
  MapPin,
  Phone,
  School,
  Search,
  Star,
  Users,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";

export default function HomeAHS() {
  const [activeProgram, setActiveProgram] = useState("dpt");

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[500px] md:h-[600px] bg-gradient-to-r from-primary/10 to-primary/40 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/placeholder.svg?height=1080&width=1920')] bg-cover bg-center opacity-20"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"></div>
        <div className="container mx-auto px-4 h-full flex flex-col justify-center relative z-10">
          <div className="max-w-3xl">
            <Badge className="rounded bg-primary/20 px-4 py-1.5 text-sm font-medium mb-2">
              Recognized by HEC & Affiliated with SZABMU
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold  mb-4">
              WELCOME TO HBS
              <br />
              <span className="text-foreground/70">
                COLLEGE OF REHAB & ALLIED
                <br />
                HEALTH SCIENCES
              </span>
            </h1>
            <p className="text-foreground/90 text-lg md:text-xl mb-8 max-w-2xl">
              Empowering the next generation of healthcare professionals with
              quality education and practical training
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
                <span className="font-semibold">Recognition:</span> Higher
                Education Commission of Pakistan
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
                The first professional degree in physical therapy endorsed by
                the Higher Education Commission of Pakistan (HEC) comprises of 5
                years (10 semesters), equivalent to 17 years of schooling. The
                degree program will produce physical therapy professionals who
                will be Doctors of Physical Therapy and will be competent to
                diagnose and treat movement dysfunctions due to injuries or
                diseases.
              </p>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Physical Therapists with the DPT degree will be practitioners of
                choice to whom public will have direct access for the diagnosis
                of, interventions for, and prevention of impairments, activity
                limitations, participation restrictions, and environmental
                barriers related to movement, function, and health.
              </p>
              <Button>Learn More About Our Programs</Button>
            </div>
            <div className="md:w-1/2 max-w-full">
              <div className="relative">
                <div className="absolute -top-6 left-6 w-24 h-24 bg-primary/70 rounded-full z-0"></div>
                <div className="absolute -bottom-6 right-20 w-32 h-32 bg-primary/30 rounded-full z-0"></div>
                <div className="relative z-10 rounded-lg overflow-hidden shadow-xl">
                  <img
                    src="https://placehold.co/800x600"
                    alt="Physical therapy session"
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
              Our Programs
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Discover our comprehensive range of programs designed to prepare
              you for a successful career in rehabilitation and allied health
              sciences.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <Button
              variant={activeProgram === "dpt" ? "default" : "outline"}
              onClick={() => setActiveProgram("dpt")}
            >
              Doctor of Physical Therapy
            </Button>
            <Button
              variant={activeProgram === "ahs" ? "default" : "outline"}
              onClick={() => setActiveProgram("ahs")}
            >
              Allied Health Sciences
            </Button>
          </div>

          {activeProgram === "dpt" && (
            <Card className="border-primary/20 shadow-md overflow-hidden">
              <CardHeader className="bg-primary/5 border-b border-primary/20">
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="text-2xl text-primary">
                      Doctor of Physical Therapy (DPT)
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
                      DPT is an undergraduate five years degree program for
                      those who are interested to pursue a career in the field
                      of health sciences. During their stay at HBS College of
                      Rehabilitation sciences, the students study various
                      subjects and go through practical training to qualify for
                      the degree of DPT.
                    </p>
                    <p className="text-muted-foreground mb-4">
                      The DPT degree is recognized by the HEC and is widely
                      accepted nationally and internationally. Graduates can
                      fill positions in hospitals, clinics, rehabilitation
                      centers, and academic institutions.
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
                        <span className="text-muted-foreground">
                          SZABMU Test
                        </span>
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
                      <div className="text-sm text-muted-foreground">
                        SZABMU Test
                      </div>
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
                <Button>Apply Now</Button>
              </CardFooter>
            </Card>
          )}

          {activeProgram === "ahs" && (
            <Card className="border-primary/20 shadow-md">
              <CardHeader className="bg-primary/5 border-b border-primary/20">
                <CardTitle className="text-2xl text-primary">
                  Allied Health Sciences Programs
                </CardTitle>
                <CardDescription className="text-primary">
                  Undergraduate Degree Programs
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                  {[
                    {
                      title: "Medical Lab Technology (MLT)",
                      icon: <Search className="h-6 w-6 text-primary" />,
                    },
                    {
                      title: "Dental Technology",
                      icon: <Heart className="h-6 w-6 text-primary" />,
                    },
                    {
                      title: "Radiology & Imaging Technology",
                      icon: <FileText className="h-6 w-6 text-primary" />,
                    },
                    {
                      title: "Optometry Technology",
                      icon: <Search className="h-6 w-6 text-primary" />,
                    },
                    {
                      title: "Anesthesia Technology",
                      icon: <Heart className="h-6 w-6 text-primary" />,
                    },
                  ].map((program, index) => (
                    <Card
                      key={index}
                      className="hover:shadow-md transition-shadow"
                    >
                      <CardHeader>
                        <div className="">{program.icon}</div>
                      </CardHeader>
                      <CardContent>
                        <h3 className="text-lg font-semibold mb-2">
                          {program.title}
                        </h3>
                        <CardDescription className="text-muted-foreground text-sm">
                          A comprehensive program designed to prepare students
                          for careers in healthcare settings.
                        </CardDescription>
                      </CardContent>
                      <CardFooter className="items-end">
                        <Button variant="outline" size="sm">
                          Learn More
                        </Button>
                      </CardFooter>
                    </Card>
                  ))}
                </div>

                <div className="bg-primary/5 p-6 rounded-lg border border-primary/20 mb-8">
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
                        Intermediate (Pre-Medical) or A-level with at least 50%
                        marks
                      </span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">
                        MDCAT or SZABMU Test
                      </span>
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

                <div>
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
                      <div className="text-sm text-muted-foreground">
                        MDCAT/SZABMU Test
                      </div>
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
                <Button>Apply Now</Button>
              </CardFooter>
            </Card>
          )}
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-muted-foreground mb-4">
              Why Choose HBS College of Rehab & Allied Health Sciences?
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
                  grade, we offer quality education in the field of
                  Rehabilitation and Allied Health Sciences.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-md transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-xl text-muted-foreground">
                  Qualified Faculty
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Our faculty is eminently qualified and committed to providing
                  students with the essential academic, professional, and
                  personal skills required for today's challenging environment.
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
                  We encourage you to visit our magnificent campus, inspect our
                  facilities, talk with staff/faculty, and discover for yourself
                  why HBS should be your first choice.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://placehold.co/1920x500')] bg-cover bg-center opacity-10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="md:w-2/3">
              <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
                Ready to Start Your Journey?
              </h2>
              <p className="text-muted-foreground text-lg mb-6">
                Apply now to join HBS College of Rehabilitation & Allied Health
                Sciences and take the first step towards a rewarding career in
                healthcare.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button className="bg-primary-foreground text-primary hover:bg-primary-foreground/90">
                  Apply Now
                </Button>
                <Button
                  variant="outline"
                  className="bg-primary border-primary-foreground"
                >
                  Download Prospectus
                </Button>
              </div>
            </div>
            <div className="md:w-1/3 bg-primary-foreground/10 backdrop-blur-sm p-6 rounded-lg border border-primary/30">
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
                  30 C, Street No. 6, Lane No. 10,
                  <br />
                  Hostel City, Park Road
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
                <p className="text-muted-foreground">051-2321358</p>
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
                <p className="text-muted-foreground">info.rehab@hbs.edu.pk</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
