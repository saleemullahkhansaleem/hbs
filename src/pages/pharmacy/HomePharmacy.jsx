import { useState } from "react";
import {
  Pill,
  Award,
  GraduationCap,
  FlaskRoundIcon as Flask,
  CheckCircle,
  ArrowRight,
  MapPin,
  Phone,
  Mail,
  Clock,
  User,
  Microscope,
  Beaker,
  Stethoscope,
  Building,
  ChevronRight,
  ExternalLink,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";

export default function HomePharmacy() {
  const [activeTab, setActiveTab] = useState("vision");

  const careerPaths = [
    {
      title: "Community Pharmacy",
      icon: Pill,
      description:
        "Work as an independent or retail chain pharmacist providing counseling to patients on medications.",
      color: "bg-blue-500",
    },
    {
      title: "Hospital Pharmacy",
      icon: Building,
      description:
        "Provide pharmaceutical care in hospital settings, working alongside healthcare professionals.",
      color: "bg-green-500",
    },
    {
      title: "Pharmaceutical Industry",
      icon: Flask,
      description:
        "Engage in research, development, production, and marketing of pharmaceutical products.",
      color: "bg-purple-500",
    },
    {
      title: "Research & Academia",
      icon: Microscope,
      description:
        "Contribute to scientific research and educate the next generation of pharmacists.",
      color: "bg-amber-500",
    },
    {
      title: "Clinical Pharmacy",
      icon: Stethoscope,
      description:
        "Specialize in direct patient care and medication management in clinical settings.",
      color: "bg-red-500",
    },
  ];

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative h-[80vh] w-full overflow-hidden bg-muted/50">
        {/* <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/40">
          <img
            src="/placeholder.svg?height=900&width=1600"
            alt="HBS College of Pharmacy"
            className="object-cover z-[-1] w-full h-full"
          />
        </div> */}
        <div className="container max-w-7xl mx-auto px-4 relative h-full flex items-center">
          <div className="max-w-3xl space-y-6">
            <Badge className="rounded bg-primary/20 px-4 py-1.5 text-sm font-medium mb-2">
              Affiliated with University of Sargodha, Pakistan
            </Badge>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
              WELCOME TO
              <br />
              HBS COLLEGE OF PHARMACY
            </h1>
            <p className="text-xl text-foreground/90">
              Shaping the future of pharmaceutical care through excellence in
              education and research
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <Button size="lg" variant="default">
                Apply Online
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline">
                Explore Programs
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Affiliation & Approval Section */}
      <section className="py-8 border-b border-primary bg-primary/10">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center">
              <Award className="h-8 w-8 text-primary mr-3" />
              <div>
                <p className="text-sm text-muted-foreground">Affiliated with</p>
                <p className="font-semibold">
                  University of Sargodha, Pakistan
                </p>
              </div>
            </div>
            <div className="h-12 w-px bg-muted-foreground hidden md:block"></div>
            <div className="flex items-center">
              <CheckCircle className="h-8 w-8 text-primary mr-3" />
              <div>
                <p className="text-sm text-muted-foreground">NOC Granted by</p>
                <p className="font-semibold">Pharmacy Council of Pakistan</p>
              </div>
            </div>
            <div className="h-12 w-px bg-muted-foreground hidden md:block"></div>
            <div className="flex items-center">
              <GraduationCap className="h-8 w-8 text-primary mr-3" />
              <div>
                <p className="text-sm text-muted-foreground">Offering</p>
                <p className="font-semibold">Pharm-D (5-Year Program)</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision, Mission, Goal Tabs */}
      <section className="py-16">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Tabs defaultValue="vision" className="w-full">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="vision">Vision</TabsTrigger>
                <TabsTrigger value="mission">Mission</TabsTrigger>
                <TabsTrigger value="goal">Goal</TabsTrigger>
              </TabsList>
              <TabsContent value="vision" className="mt-6">
                <Card>
                  <CardContent className="pt-6">
                    <div className="space-y-4">
                      <h2 className="text-3xl font-bold text-primary">
                        Our Vision
                      </h2>
                      <p className="text-lg text-muted-foreground leading-relaxed">
                        To have locally trained pharmacy graduates and equip
                        them with knowledge & skills in line with the
                        requirement of modern medicine to serve the humanity
                        with empathy, care & love and transform the environment
                        of their workplace with exemplary behavior & character
                        to raise the status of profession in Pakistan at par
                        with international standards.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="mission" className="mt-6">
                <Card>
                  <CardContent className="pt-6">
                    <div className="space-y-4">
                      <h2 className="text-3xl font-bold text-primary">
                        Our Mission
                      </h2>
                      <p className="text-lg text-muted-foreground leading-relaxed">
                        To educate and train new generation of pharmacists in
                        such discipline that they enter in the noble profession
                        as paragons of self-esteem, confidence, and
                        sophistication and urge to selflessly serve the mankind.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="goal" className="mt-6">
                <Card>
                  <CardContent className="pt-6">
                    <div className="space-y-4">
                      <h2 className="text-3xl font-bold text-primary">
                        Our Goal
                      </h2>
                      <p className="text-lg text-muted-foreground leading-relaxed">
                        To provide students with a conducive environment for
                        quality education & training and exposing them to
                        enriching experiences, emphasizing in an affectionate
                        way without compromising on ethics and principles and to
                        provide all educational and training resources required.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-16 bg-muted/50">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary mb-4">
                Brief Introduction
              </div>
              <h2 className="text-3xl font-bold mb-6">
                Pharmacy: A Diverse and Rewarding Career
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Choosing a right career path is one of the important decisions
                  in life. Pharmacy is a diverse and rewarding career, with
                  opportunities for patient care, scientific research and
                  innovation. A Pharm-D (Doctor of Pharmacy) degree holder can
                  work as an independent or retail chain community pharmacist
                  and provide counseling to patients on the use of prescription
                  and over-the-counter (OTC) medications.
                </p>
                <p>
                  Pharmacists work in numerous other healthcare environments as
                  well including hospitals, managed care organizations, the
                  pharmaceutical industry, colleges and schools and the federal
                  government. Pharmacists play key leadership roles in all
                  aspects of the healthcare system. Pharmacy is an integral part
                  of heath care system.
                </p>
                <p>
                  A doctor of pharmacy degree makes a person an expert in
                  medicine. Pharmacists are healthcare professionals with
                  specialized education and training who perform various roles
                  to ensure optimal health outcomes for their patients through
                  the quality use of medicines.
                </p>
              </div>
            </div>
            <div className="relative h-[400px] rounded-xl overflow-hidden shadow-xl">
              <img
                src="https://placehold.co/600x400"
                alt="Pharmacy Students at HBS College"
                className="object-cover h-full w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Program Section */}
      <section className="py-16">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary mb-4">
              Programs Offered
            </div>
            <h2 className="text-3xl font-bold mb-4">
              Doctor of Pharmacy (Pharm-D)
            </h2>
            <p className="text-muted-foreground max-w-3xl mx-auto">
              A comprehensive five-year program designed to prepare you for a
              successful career in pharmacy
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card className="border-none shadow-lg overflow-hidden">
              <div className="h-2 w-full bg-primary"></div>
              <CardContent className="p-8">
                <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
                  <div className="flex items-center">
                    <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mr-4">
                      <GraduationCap className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold">Pharm-D</h3>
                      <p className="text-muted-foreground">
                        Doctor of Pharmacy
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-5 w-5 text-primary mr-2" />
                    <span className="font-medium">5 Years Program</span>
                  </div>
                </div>

                <p className="text-lg text-muted-foreground mb-6">
                  Pharm-D is a five years' undergraduate degree program for
                  those who are interested to pursue a career in the field of
                  health and Pharmaceutical Sciences. The students with medical
                  background can opt for this degree fulfilling the admission
                  criteria. During their stay at HBS College of Pharmacy, the
                  students study various subjects and go through the practical
                  training to qualify for the degree of Pharm-D (Doctor of
                  Pharmacy). Pharm-D degree is recognized by the Pharmacy
                  Council of Pakistan and is widely accepted nationally and
                  internationally. The graduates can fill the increasing demand
                  of retail, hospital, warehouse management and industrial
                  pharmacists and they can join the government and research
                  organizations.
                </p>

                <div className="flex flex-wrap gap-4">
                  <Button className="bg-primary">
                    Apply Online
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                  <Button variant="outline">View Admission Criteria</Button>
                  <Button variant="outline">Fee Structure</Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Career Paths Section */}
      <section className="py-16 bg-muted/50">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              Career Paths in Pharmacy
            </h2>
            <p className="text-muted-foreground max-w-3xl mx-auto">
              A Pharm-D degree opens doors to diverse and rewarding career
              opportunities in various healthcare settings
            </p>
          </div>

          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6">
            {careerPaths.map((path, index) => (
              <Card
                key={index}
                className="border-none shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <CardContent className="p-0">
                  <div className={`h-2 ${path.color}`}></div>
                  <div className="p-6">
                    <div
                      className={`h-12 w-12 rounded-full ${path.color} bg-opacity-20 flex items-center justify-center mb-4`}
                    >
                      <path.icon className={`h-6 w-6 text-opacity-100`} />
                    </div>
                    <h3 className="text-xl font-bold mb-2">{path.title}</h3>
                    <p className="text-muted-foreground">{path.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              Why HBS College of Pharmacy?
            </h2>
            <p className="text-muted-foreground max-w-3xl mx-auto">
              Excellence in education, state-of-the-art facilities, and a
              commitment to producing pharmacists of the highest caliber
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-primary/10 p-8 rounded-lg">
              <p className="text-muted-foreground mb-6">
                With a background of marvelous achievement of attaining A+ grade
                awarded by Pakistan Medical Commission, Ministry of NHSR&C,
                Management of HBS Medical and Dental College is pleased to offer
                quality education in field of Pharmacy, Nursing, Rehabilitation
                and Allied Health Sciences. This prospectus will provide you
                with a brief introduction to life at HBS College of Pharmacy,
                courses and program. We encourage you to visit our magnificent
                campus, inspect our facilities, talk to staff/faculty, meet
                members of the faculty and discover for yourselves why HBS
                College of Pharmacy should be your first choice. Our motive is
                to provide professional and high-quality education and prepare
                our graduates for the upcoming challenges in health care system.
              </p>
              <p className="text-muted-foreground">
                Our faculty is eminently qualified, and committed to provide
                students with the essential academic, professional, and personal
                skills required for competing in today's challenging employment
                environment. In addition to teaching and mentoring of students,
                our faculty members prove to be avid consumers as well as
                producers of research, helping students stay current in their
                academic disciplines.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mt-12">
              <div className="bg-primary/5 p-6 rounded-lg">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Award className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">A+ Grade</h3>
                <p className="text-muted-foreground">
                  Awarded by Pakistan Medical Commission for excellence in
                  healthcare education
                </p>
              </div>
              <div className="bg-primary/5 p-6 rounded-lg">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <User className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Qualified Faculty</h3>
                <p className="text-muted-foreground">
                  Experienced educators committed to student success and
                  professional development
                </p>
              </div>
              <div className="bg-primary/5 p-6 rounded-lg">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Beaker className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Modern Facilities</h3>
                <p className="text-muted-foreground">
                  State-of-the-art laboratories and equipment for hands-on
                  practical training
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-4">
                Ready to Begin Your Journey?
              </h2>
              <p className="text-primary-foreground/90 mb-8">
                Take the first step toward a rewarding career in pharmacy by
                applying to HBS College of Pharmacy today.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button
                  size="lg"
                  variant="default"
                  className="bg-primary-foreground text-primary hover:bg-primary-foreground/90"
                >
                  Apply Online
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-primary border-primary-foreground"
                >
                  View Merit List
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-primary border-primary-foreground"
                >
                  Fee Structure
                </Button>
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-4">Important Links</h3>
              <ul className="space-y-4">
                <li>
                  <Link
                    href="#"
                    className="flex items-center text-primary-foreground hover:text-primary-foreground/80 transition-colors group"
                  >
                    <ExternalLink className="h-5 w-5 mr-2" />
                    <span>Merit List</span>
                    <ChevronRight className="ml-auto h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="flex items-center text-primary-foreground hover:text-primary-foreground/80 transition-colors group"
                  >
                    <ExternalLink className="h-5 w-5 mr-2" />
                    <span>Admission Criteria</span>
                    <ChevronRight className="ml-auto h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="flex items-center text-primary-foreground hover:text-primary-foreground/80 transition-colors group"
                  >
                    <ExternalLink className="h-5 w-5 mr-2" />
                    <span>Fee Structure</span>
                    <ChevronRight className="ml-auto h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="flex items-center text-primary-foreground hover:text-primary-foreground/80 transition-colors group"
                  >
                    <ExternalLink className="h-5 w-5 mr-2" />
                    <span>Life @ HBS</span>
                    <ChevronRight className="ml-auto h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
              <p className="text-muted-foreground max-w-3xl mx-auto">
                Have questions? Reach out to us for more information about our
                programs and admission process.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="p-6 text-center hover:shadow-md transition-shadow">
                <div className="mx-auto h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">Address</h3>
                <p className="text-muted-foreground">
                  30 B, Street No. 6, Lane No. 10, Hostel City, Park Road
                  Islamabad
                </p>
              </Card>

              <Card className="p-6 text-center hover:shadow-md transition-shadow">
                <div className="mx-auto h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">Phone</h3>
                <p className="text-muted-foreground">051-2321358</p>
              </Card>

              <Card className="p-6 text-center hover:shadow-md transition-shadow">
                <div className="mx-auto h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">Email</h3>
                <p className="text-muted-foreground">
                  info.pharmacy@hbs.edu.pk
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
