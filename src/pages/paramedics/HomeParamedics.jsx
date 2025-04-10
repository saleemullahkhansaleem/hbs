import { useState } from "react";
import {
  Microscope,
  Stethoscope,
  Eye,
  Smile,
  Camera,
  Activity,
  Pill,
  ChevronRight,
  MapPin,
  Phone,
  Mail,
  ExternalLink,
  CheckCircle,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";

export default function HomeParamedics() {
  const [activeTab, setActiveTab] = useState("vision");

  const programs = [
    {
      title: "F.Sc Medical Laboratory Technology",
      icon: Microscope,
      description:
        "Learn to perform laboratory tests crucial for disease diagnosis, treatment, and prevention.",
      color: "bg-blue-500",
    },
    {
      title: "F.Sc Operation Theater Technology",
      icon: Stethoscope,
      description:
        "Gain skills to assist surgeons and manage equipment during surgical procedures.",
      color: "bg-green-500",
    },
    {
      title: "F.Sc Ophthalmology Technology",
      icon: Eye,
      description:
        "Specialize in eye care technology and assist ophthalmologists in diagnosing and treating eye disorders.",
      color: "bg-amber-500",
    },
    {
      title: "F.Sc Dental Hygiene Technology",
      icon: Smile,
      description:
        "Learn preventive dental care techniques and assist dentists in maintaining oral health.",
      color: "bg-purple-500",
    },
    {
      title: "F.Sc Medical Imaging Technology",
      icon: Camera,
      description:
        "Master the operation of imaging equipment to create diagnostic images for medical analysis.",
      color: "bg-red-500",
    },
    {
      title: "F.Sc Physiotherapy Technology",
      icon: Activity,
      description:
        "Develop skills to assist in physical rehabilitation and therapy for patients recovering from injuries.",
      color: "bg-indigo-500",
    },
    {
      title: "F.Sc Dispensing Technology",
      icon: Pill,
      description:
        "Learn pharmaceutical dispensing techniques and medication management under pharmacist supervision.",
      color: "bg-teal-500",
    },
  ];

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative h-[80vh] w-full overflow-hidden bg-muted/50">
        {/* <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/40">
          <img
            src="https://placehold.co/1920x1080"
            alt="HBS College of Paramedics"
            className="object-cover z-[-1] w-full h-full"
          />
        </div> */}
        <div className="container max-w-7xl mx-auto px-4 relative h-full flex items-center">
          <div className="max-w-5xl space-y-6">
            <Badge className="rounded bg-primary/20 px-4 py-1.5 text-sm font-medium mb-2">
              Affiliated with Federal Board of Intermediate and Secondary
              Education
            </Badge>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
              WELCOME TO
              <br />
              HBS COLLEGE OF PARAMEDICS
            </h1>
            <p className="text-xl text-foreground/90">
              Empowering the next generation of healthcare professionals with
              quality education and practical skills
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <Button size="lg" variant="default" className="">
                Apply Online
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline" className="">
                Explore Programs
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Vision, Mission, Goal Tabs */}
      <section className="py-16">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-wrap mb-8 border-b">
              <button
                onClick={() => setActiveTab("vision")}
                className={`px-6 py-3 font-medium text-lg ${
                  activeTab === "vision"
                    ? "border-b-2 border-primary text-primary"
                    : "text-muted-foreground hover:text-primary"
                }`}
              >
                Vision
              </button>
              <button
                onClick={() => setActiveTab("mission")}
                className={`px-6 py-3 font-medium text-lg ${
                  activeTab === "mission"
                    ? "border-b-2 border-primary text-primary"
                    : "text-muted-foreground hover:text-primary"
                }`}
              >
                Mission
              </button>
              <button
                onClick={() => setActiveTab("goal")}
                className={`px-6 py-3 font-medium text-lg ${
                  activeTab === "goal"
                    ? "border-b-2 border-primary text-primary"
                    : "text-muted-foreground hover:text-primary"
                }`}
              >
                Goal
              </button>
            </div>

            <div className="bg-muted p-8 rounded-lg">
              {activeTab === "vision" && (
                <div className="space-y-4">
                  <h2 className="text-3xl font-bold text-primary">
                    Our Vision
                  </h2>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    To have locally trained F.Sc Students and equip them with
                    knowledge & skills in line with the requirement of modern
                    medicine to serve the humanity with empathy, care & love and
                    transform the environment of their workplace with exemplary
                    behavior & character to raise the status of healthcare
                    profession in Pakistan at par with international standards.
                  </p>
                </div>
              )}

              {activeTab === "mission" && (
                <div className="space-y-4">
                  <h2 className="text-3xl font-bold text-primary">
                    Our Mission
                  </h2>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    To educate and train a new generation of F.Sc (Paramedics)
                    in such discipline that they enter the noble profession as
                    paragons of self-esteem, confidence, and sophistication and
                    urge to selflessly serve the mankind.
                  </p>
                </div>
              )}

              {activeTab === "goal" && (
                <div className="space-y-4">
                  <h2 className="text-3xl font-bold text-primary">Our Goal</h2>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    To provide students with a conducive environment for quality
                    education & training and exposing them to enriching
                    experiences, emphasizing in an affectionate way without
                    compromising on ethics and principles and to provide all
                    educational and training resources required.
                  </p>
                </div>
              )}
            </div>
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
                Advancing Healthcare Through Education
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  In the realm of healthcare, scientific advancements have paved
                  the way for revolutionary breakthroughs that have
                  significantly improved the quality of life for millions
                  worldwide. At the heart of these innovations lies the field of
                  F.Sc Medical Technologies, where the convergence of science,
                  technology, and medicine promises to redefine the very fabric
                  of healthcare as we know it.
                </p>
                <p>
                  As we stand on the cusp of a new era in healthcare, the demand
                  for skilled professionals well-versed in F.Sc Medical
                  Technologies are rapidly escalating. These courses serve as a
                  comprehensive guide that equips aspiring students with the
                  necessary knowledge and expertise to embark on a journey into
                  this fascinating and ever-evolving discipline.
                </p>
              </div>
            </div>
            <div className="relative h-[400px] rounded-xl overflow-hidden shadow-xl">
              <img
                src="https://placehold.co/600x400"
                alt="Students at HBS College of Paramedics"
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              Why HBS College of Paramedics?
            </h2>
            <p className="text-muted-foreground max-w-3xl mx-auto">
              Excellence in education, state-of-the-art facilities, and a
              commitment to producing healthcare professionals of the highest
              caliber.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-muted p-8 rounded-lg">
              <p className="text-muted-foreground mb-6">
                With a background of marvelous achievement of attaining A+ grade
                awarded by Pakistan Medical Commission, Ministry of NHSR&C,
                Management of HBS institute of healthcare and allied health
                sciences is pleased to offer quality education in field of F.S.c
                Medical Technologies. This prospectus will provide you with a
                brief introduction to life at HBS College of Paramedics, courses
                and program. We encourage you to visit our magnificent campus,
                inspect our facilities, talk to staff/faculty, meet members of
                the faculty and discover for yourselves why HBS College of
                Paramedics should be your first choice. Our motive is to provide
                professional and high-quality education and prepare our
                graduates for the upcoming challenges in health care system.
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
                  <CheckCircle className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">A+ Grade</h3>
                <p className="text-muted-foreground">
                  Awarded by Pakistan Medical Commission for excellence in
                  healthcare education
                </p>
              </div>
              <div className="bg-primary/5 p-6 rounded-lg">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <CheckCircle className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Qualified Faculty</h3>
                <p className="text-muted-foreground">
                  Experienced educators committed to student success and
                  professional development
                </p>
              </div>
              <div className="bg-primary/5 p-6 rounded-lg">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <CheckCircle className="h-6 w-6 text-primary" />
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

      {/* Programs Section */}
      <section className="py-16 bg-muted/50">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary mb-4">
              FBISE Affiliated
            </div>
            <h2 className="text-3xl font-bold mb-4">Our Programs</h2>
            <p className="text-muted-foreground max-w-3xl mx-auto">
              Comprehensive F.Sc Medical Technology programs designed to prepare
              you for a successful career in healthcare
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {programs.map((program, index) => (
              <Card
                key={index}
                className="overflow-hidden hover:shadow-lg transition-all duration-300 group"
              >
                <CardContent className="p-0">
                  <div className={`h-2 ${program.color}`}></div>
                  <div className="p-6">
                    <div
                      className={`h-12 w-12 rounded-full ${program.color} bg-opacity-20 flex items-center justify-center mb-4`}
                    >
                      <program.icon
                        className={`h-6 w-6 text-opacity-100`}
                      />
                    </div>
                    <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                      {program.title}
                    </h3>
                    <p className="text-muted-foreground mb-4">
                      {program.description}
                    </p>
                    <Button variant="outline" className="group">
                      Learn More
                      <ChevronRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
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
                Take the first step toward a rewarding career in healthcare by
                applying to HBS College of Paramedics today.
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
                  Admission Criteria
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
            <div className="bg-primary-foreground/10 backdrop-blur-sm p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-4">Important Links</h3>
              <ul className="space-y-4">
                <li>
                  <Link
                    to="#"
                    className="flex items-center text-primary-foreground hover:text-primary-foreground/80 transition-colors group"
                  >
                    <ExternalLink className="h-5 w-5 mr-2" />
                    <span>Apply Online</span>
                    <ChevronRight className="ml-auto h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </li>
                <li>
                  <Link
                    to="#"
                    className="flex items-center text-primary-foreground hover:text-primary-foreground/80 transition-colors group"
                  >
                    <ExternalLink className="h-5 w-5 mr-2" />
                    <span>Admission Criteria</span>
                    <ChevronRight className="ml-auto h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </li>
                <li>
                  <Link
                    to="#"
                    className="flex items-center text-primary-foreground hover:text-primary-foreground/80 transition-colors group"
                  >
                    <ExternalLink className="h-5 w-5 mr-2" />
                    <span>Fee Structure</span>
                    <ChevronRight className="ml-auto h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </li>
                <li>
                  <Link
                    to="#"
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
                <p className="text-muted-foreground">051-2321357</p>
              </Card>

              <Card className="p-6 text-center hover:shadow-md transition-shadow">
                <div className="mx-auto h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">Email</h3>
                <p className="text-muted-foreground">
                  info.paramedics@hbs.edu.pk
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
