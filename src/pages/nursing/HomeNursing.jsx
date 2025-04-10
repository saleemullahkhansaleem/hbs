import { useState } from "react";
import {
  Heart,
  Award,
  BookOpen,
  GraduationCap,
  Users,
  CheckCircle,
  ArrowRight,
  MapPin,
  Phone,
  Mail,
  Clock,
  FileText,
  User,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";

export default function HomeNursing() {
  const [activeTab, setActiveTab] = useState("bsn");

  const programs = [
    {
      id: "bsn",
      title: "BSN (Bachelor of Science in Nursing)",
      duration: "4 Years",
      type: "Degree Program",
      icon: GraduationCap,
      color: "bg-blue-500",
      description:
        "A comprehensive four-year degree program that prepares students for professional nursing practice with a strong foundation in science and healthcare.",
      eligibility: [
        "Matric Science (Physics, Chemistry & Biology as compulsory subjects)",
        "FSc (Pre-Medical) with 50% marks minimum (Physics, Chemistry & Biology as compulsory subjects) OR A Level Certification accompanied by an equivalent certificate from Inter Board Committee of Chairman (IBCC).",
        "Age Limit: 14-35 years",
        "50% marks in SZABMU entry test is prerequisite for admission.",
      ],
    },
    {
      id: "post-rn",
      title: "Post-RN (Bachelor of Science in Nursing)",
      duration: "2 Years",
      type: "Degree Program",
      icon: Award,
      color: "bg-green-500",
      description:
        "A two-year program designed for registered nurses seeking to advance their education and career opportunities with a bachelor's degree.",
      eligibility: [
        "Matric with Science (Physics, Chemistry & Biology as main subjects) as per HEC requirements",
        "Diploma in Nursing (Registered with Pakistan Nursing Council)",
        "Diploma in Midwifery or any Post Basic Specialty for male in lieu of midwifery (Registered with Pakistan Nursing Council)",
        "01 years as RN",
        "Valid registration with Pakistan Nursing Council",
        "NOC is must for those students who are working in Government Sector.",
        "50% marks in SZABMU entry test is prerequisite for admission",
      ],
    },
    {
      id: "lhv",
      title: "LHV (Lady Health Visitors)",
      duration: "2 Years",
      type: "Diploma Program",
      icon: Users,
      color: "bg-purple-500",
      description:
        "A specialized program training health professionals to provide essential maternal and child health services in communities.",
      eligibility: [
        "Applicant must meet one of the following academic level",
        "FSc (Pre-Medical) with 45% marks minimum (Physics, Chemistry & Biology as compulsory subjects)",
        "Matric (Science) with 45 % marks minimum (Physics, Chemistry & Biology as compulsory subjects)",
        "Age Limit: 14-35 years",
      ],
    },
    {
      id: "cmw",
      title: "CMW (Community Midwife)",
      duration: "18 Months",
      type: "Diploma Program",
      icon: Heart,
      color: "bg-pink-500",
      description:
        "A focused program training midwives to provide essential maternal and newborn care services within community settings.",
      eligibility: [
        "Matric (either Art or Science) with 40% marks",
        "Age Limit: 14-40 years",
      ],
    },
    {
      id: "cna",
      title: "CNA (Certified Nursing Assistant)",
      duration: "2 Years",
      type: "Diploma Program",
      icon: FileText,
      color: "bg-amber-500",
      description:
        "A practical program preparing students to provide basic patient care under the supervision of registered nurses.",
      eligibility: [
        "Applicant must meet one of the following academic levels",
        "FSc (Pre-Medical) with 45% marks minimum (Physics, Chemistry & Biology as compulsory subjects)",
        "Matric (Science) with 45 % marks minimum (Physics, Chemistry & Biology as compulsory subjects)",
        "Matric (Arts) with 50% marks, FA with 50% Marks",
        "Age Limit:14-35 years",
      ],
    },
  ];

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative h-[80vh] w-full overflow-hidden bg-muted/50">
        {/* <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/40">
          <img
            src="https://placehold.co/1600x900"
            alt="HBS College of Nursing"
            className="object-cover z-[-1] w-full h-full"
          />
        </div> */}
        <div className="container max-w-7xl mx-auto px-4 relative h-full flex items-center">
          <div className="max-w-3xl space-y-6">
            <Badge className="rounded bg-primary/20 px-4 py-1.5 text-sm font-medium mb-2">
              Approved from Pakistan Nursing & Midwifery Council and SZABMU
            </Badge>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
              HBS College of Nursing
            </h1>
            <p className="text-xl text-foreground/90">
              Shaping compassionate healthcare professionals through excellence
              in nursing education
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

      {/* Vision, Mission, Philosophy Tabs */}
      <section className="py-16">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Tabs defaultValue="vision" className="w-full">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="vision">Vision</TabsTrigger>
                <TabsTrigger value="mission">Mission</TabsTrigger>
                <TabsTrigger value="philosophy">Philosophy</TabsTrigger>
              </TabsList>
              <TabsContent value="vision" className="mt-6">
                <Card>
                  <CardContent className="pt-6">
                    <div className="space-y-4">
                      <h2 className="text-3xl font-bold text-primary">
                        Our Vision
                      </h2>
                      <p className="text-lg text-muted-foreground leading-relaxed">
                        To have locally trained nursing graduates and equip them
                        with knowledge & skills in line with the requirement of
                        modern medicine to serve the humanity with empathy, care
                        & love and transform the environment of their workplace
                        with exemplary behavior & character to raise the status
                        of profession in Pakistan at par with international
                        nursing.
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
                        To educate and train new generation of nurses in such
                        discipline that they enter in the noble profession as
                        paragons of self-esteem, confidence, and sophistication
                        and urge to selflessly serve the mankind.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="philosophy" className="mt-6">
                <Card>
                  <CardContent className="pt-6">
                    <div className="space-y-4">
                      <h2 className="text-3xl font-bold text-primary">
                        Our Philosophy
                      </h2>
                      <p className="text-lg text-muted-foreground leading-relaxed">
                        Nursing is a discipline, a profession, and a service all
                        rolled into one. We believe that the advancement of the
                        nursing profession is contingent on the generation of
                        knowledge through academic inquiry and its dissemination
                        in curricula that prepare students for excellence and
                        leadership in nursing and society. The nurse blends
                        scientific, philosophical, aesthetic, and personal
                        knowledge to form the foundation of practice. The
                        nursing profession delivers essential health care
                        services to individuals, families, and communities.
                        These services promote, maintain, and restore health,
                        alleviate suffering, and formulate health policy. The
                        faculty is committed to fostering an innovative learning
                        environment to prepare students for a complex and
                        ever-changing world. Critical thinking is key skill for
                        all nurses, so we teach it in all our programs.
                        Appropriate government policy of nurses' placement in
                        the community leads to prevention of diseases, services
                        like vaccination and home deliveries at the doorstep
                        results into reduction in hospital load. Hence, it
                        brings the health budget drastically down.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>

      {/* Principal's Message */}
      <section className="py-16 bg-muted/50">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-12 items-center">
            <div className="md:col-span-1">
              <div className="relative h-[300px] w-[300px] mx-auto rounded-full overflow-hidden border-4 border-primary shadow-xl">
                <img
                  src="https://placehold.co/300"
                  alt="Principal Margus Rahim"
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="text-center mt-6">
                <h3 className="text-2xl font-bold">MARGUS RAHIM</h3>
                <p className="text-primary font-medium">
                  Principal, HBS College of Nursing
                </p>
              </div>
            </div>
            <div className="md:col-span-2">
              <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary mb-4">
                Principal's Message
              </div>
              <h2 className="text-3xl font-bold mb-6">Dear Students,</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  As the principal of HBS College of nursing I warmly welcome
                  you to the HBS College of Nursing (HBSCN) which is established
                  in 2022. This college offers both degree programs and Diploma
                  programs. You have taken sound decision to choose this college
                  to pursue nursing programs and diplomas.
                </p>
                <p>
                  Faculty members of HBSCN are highly competent with vast
                  clinical expertise and theoretical knowledge. We believe,
                  learning process is a multifaceted and collaborative approach
                  that is highly dependable on the teacher's philosophy about
                  teaching, students' accountability towards their learning and
                  the conducive learning environment with innovative teaching
                  pedagogies.
                </p>
                <p>
                  HBSCN is affiliated with HBS General Hospital which is ISO
                  Certified 500 bedded tertiary care hospital. This hospital not
                  only committed to provide an opportunity for students to have
                  their clinical practices but also offers employment upon their
                  graduation.
                </p>
                <p>
                  We are committed to prepare competent nurses with sound
                  theoretical knowledge, clinical skills, ethical integrity and
                  urge to serve patients and families in both hospital and
                  community settings.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="py-16">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary mb-4">
              Approved from Pakistan Nursing & Midwifery Council and SZABMU
            </div>
            <h2 className="text-3xl font-bold mb-4">Programs Offered</h2>
            <p className="text-muted-foreground max-w-3xl mx-auto">
              Comprehensive nursing education programs designed to prepare you
              for a successful career in healthcare
            </p>
          </div>

          <div className="grid md:grid-cols-5 gap-4 mb-8">
            {programs.map((program) => (
              <button
                key={program.id}
                onClick={() => setActiveTab(program.id)}
                className={`px-4 py-3 rounded-lg text-center transition-all ${
                  activeTab === program.id
                    ? `${program.color} text-primary-foreground font-medium`
                    : "bg-foreground/15 hover:bg-foreground/10 text-muted-foreground"
                }`}
              >
                <program.icon className="h-6 w-6 mx-auto mb-2" />
                <span className="text-sm">{program.title.split(" ")[0]}</span>
              </button>
            ))}
          </div>

          {programs.map((program) => (
            <div
              key={program.id}
              className={`rounded-lg shadow-lg border overflow-hidden ${
                activeTab === program.id ? "block" : "hidden"
              }`}
            >
              <div className={`h-2 w-full ${program.color}`}></div>
              <div className="p-8">
                <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
                  <div>
                    <h3 className="text-2xl font-bold">{program.title}</h3>
                    <p className="text-muted-foreground">{program.type}</p>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="flex items-center">
                      <Clock className="h-5 w-5 text-primary mr-2" />
                      <span className="font-medium">{program.duration}</span>
                    </div>
                    <Button className={program.color}>
                      Apply Online
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </div>

                <p className="text-lg text-muted-foreground mb-6">
                  {program.description}
                </p>

                <div>
                  <h4 className="text-lg font-semibold mb-4 flex items-center">
                    <FileText className="h-5 w-5 mr-2 text-primary" />
                    Eligibility Criteria
                  </h4>
                  <ul className="space-y-2">
                    {program.eligibility.map((item, index) => (
                      <li key={index} className="flex items-start">
                        <CheckCircle className="h-5 w-5 mr-2 mt-0.5 text-primary flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-muted/50">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              Why Choose HBS College of Nursing?
            </h2>
            <p className="text-muted-foreground max-w-3xl mx-auto">
              We offer a comprehensive nursing education with state-of-the-art
              facilities and experienced faculty
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="pt-6">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Award className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Approved Programs</h3>
                <p className="text-muted-foreground">
                  All our programs are approved by Pakistan Nursing & Midwifery
                  Council and SZABMU, ensuring quality education and recognized
                  qualifications.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="pt-6">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <User className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Expert Faculty</h3>
                <p className="text-muted-foreground">
                  Our faculty members are highly competent with vast clinical
                  expertise and theoretical knowledge in nursing and healthcare.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="pt-6">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <BookOpen className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Clinical Experience</h3>
                <p className="text-muted-foreground">
                  Affiliated with ISO Certified 500-bed HBS General Hospital,
                  providing excellent clinical practice opportunities and
                  potential employment.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-4">
                Begin Your Nursing Journey Today
              </h2>
              <p className="text-primary-foreground/90 mb-8">
                Take the first step toward a rewarding career in nursing by
                applying to HBS College of Nursing.
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
                  Download Prospectus
                </Button>
              </div>
            </div>
            <div className="bg-primary-foreground/10 backdrop-blur-sm p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-6">Our Mission</h3>
              <p className="text-primary-foreground/90 text-lg mb-6">
                To educate and train new generation of nurses in such discipline
                that they enter in the noble profession as paragons of
                self-esteem, confidence, and sophistication and urge to
                selflessly serve the mankind.
              </p>
              <div className="flex items-center">
                <Heart className="h-8 w-8 mr-3 text-primary-foreground/80" />
                <span className="text-xl font-medium">
                  Compassion • Excellence • Integrity
                </span>
              </div>
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
                Have questions about our nursing programs? Reach out to us for
                more information.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="p-6 text-center hover:shadow-md transition-shadow">
                <div className="mx-auto h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">Address</h3>
                <p className="text-muted-foreground">
                  Building 30-A, Street No. 6 Lane No. 10, Hostel City, Park
                  Road, Islamabad
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
                <p className="text-muted-foreground">info.nursing@hbs.edu.pk</p>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
