import {
  Microscope,
  GraduationCap,
  Coffee,
  Bus,
  Phone,
  Mail,
  MapPin,
  Users,
  Hospital,
  FlaskRoundIcon as Flask,
  Presentation,
  Library,
  Gamepad2,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function PharmacyLife() {
  const facilities = [
    {
      category: "Academic Facilities",
      icon: GraduationCap,
      items: [
        {
          title: "Teaching Hospital",
          description:
            "500-bed tertiary care HBS General Hospital within walking distance of the campus",
          icon: Hospital,
        },
        {
          title: "Laboratories",
          description:
            "Fully equipped labs for practical work and research in pharmaceutical sciences",
          icon: Flask,
        },
        {
          title: "Classrooms",
          description:
            "Ventilated and peaceful lecture halls with audio-visual aids and internet access",
          icon: Presentation,
        },
        {
          title: "Library",
          description:
            "Air-conditioned library with 1500+ books, digital resources, and HEC Digital Library access",
          icon: Library,
        },
      ],
    },
    {
      category: "Student Life",
      icon: Users,
      items: [
        {
          title: "Common Rooms",
          description:
            "Well-furnished separate common rooms for boys and girls with indoor games",
          icon: Gamepad2,
        },
        {
          title: "Cafeteria",
          description:
            "On-campus cafeteria offering snacks, drinks, and meals at reasonable prices",
          icon: Coffee,
        },
        {
          title: "Transport",
          description:
            "Pick-and-drop services for students and faculty through partner transport company",
          icon: Bus,
        },
      ],
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[50vh] w-full overflow-hidden bg-muted/50">
        <div className="container max-w-7xl mx-auto px-4 relative h-full flex items-center">
          <div className="max-w-3xl space-y-4">
            <div className="inline-block rounded-lg bg-foreground/20 backdrop-blur-sm px-4 py-2 text-sm font-medium mb-2">
              Student Experience
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold leading-tight">
              LIFE @ HBS COLLEGE OF PHARMACY
            </h1>
            <p className="text-xl text-foreground/90">
              Experience a vibrant campus life with state-of-the-art facilities
              and a supportive learning environment
            </p>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-16">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary mb-4">
                Campus Overview
              </div>
              <h2 className="text-3xl font-bold mb-6">
                A Modern Campus in the Heart of Islamabad
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  HBS College of Pharmacy is centrally located at 30-B, Street
                  No. 6, Lane No. 10, Hostel City, Park Road Islamabad. It has a
                  spacious purpose-built 07 floor campus in an earthquake-proof
                  structure with adequate arrangements for air-conditioning,
                  heating, and backup power.
                </p>
                <p>
                  Our campus is designed to provide students with a comfortable
                  and conducive environment for learning and personal growth.
                  With modern facilities and resources, we ensure that our
                  students have everything they need to excel in their
                  pharmaceutical education.
                </p>
                <div className="flex items-center mt-6">
                  <Button className="bg-primary">
                    Take a Virtual Tour
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
            <div className="relative h-[400px] rounded-xl overflow-hidden shadow-xl">
              <img
                src="https://placehold.co/600x400"
                alt="HBS College of Pharmacy Campus"
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Teaching Hospital Section */}
      <section className="py-16 bg-muted/50">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary mb-4">
              Our Advantage
            </div>
            <h2 className="text-3xl font-bold mb-4">
              Dedicated Teaching Hospital
            </h2>
            <p className="text-muted-foreground max-w-3xl mx-auto">
              Unlike most pharmacy colleges in Pakistan, HBS College of Pharmacy
              has its own teaching hospital
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative h-[400px] rounded-xl overflow-hidden shadow-xl order-2 md:order-1">
              <img
                src="https://placehold.co/600x400"
                alt="HBS General Hospital"
                className="object-cover w-full h-full"
              />
            </div>
            <div className="order-1 md:order-2">
              <h3 className="text-2xl font-bold mb-4">HBS General Hospital</h3>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  A common dilemma of pharmacy education in Pakistan is that
                  most pharmacy colleges do not have their own hospitals,
                  causing students to struggle with clinical training. HBS
                  College of Pharmacy addresses this challenge by providing
                  access to our own 500-bed tertiary care general hospital.
                </p>
                <p>
                  HBS General Hospital is located within walking distance of the
                  campus and serves as the teaching hospital for the college. It
                  provides a complete range of major specialties as well as
                  laboratory and imaging services under one roof.
                </p>
                <p>
                  The hospital has some of the most renowned specialists and
                  surgeons on its strength and has acquired a reputation as a
                  high-quality healthcare facility. This gives our pharmacy
                  students unparalleled opportunities for clinical exposure and
                  practical training.
                </p>
                <div className="flex items-center mt-6">
                  <Button
                    variant="outline"
                    className="border-primary text-primary hover:bg-primary/5"
                  >
                    Learn More About HBS Hospital
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Facilities Section */}
      <section className="py-16">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary mb-4">
              Campus Facilities
            </div>
            <h2 className="text-3xl font-bold mb-4">World-Class Facilities</h2>
            <p className="text-muted-foreground max-w-3xl mx-auto">
              Explore the range of facilities available to support your academic
              journey and campus life
            </p>
          </div>

          <Tabs defaultValue="Academic Facilities" className="w-full">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-2">
              <TabsTrigger value="Academic Facilities">
                Academic Facilities
              </TabsTrigger>
              <TabsTrigger value="Student Life">Student Life</TabsTrigger>
            </TabsList>

            {facilities.map((category) => (
              <TabsContent
                key={category.category}
                value={category.category}
                className="mt-8"
              >
                <div className="grid md:grid-cols-2 gap-6">
                  {category.items.map((facility, index) => (
                    <Card
                      key={index}
                      className="overflow-hidden shadow-md hover:shadow-lg transition-shadow"
                    >
                      <CardContent className="p-0">
                        <div className="h-2 bg-primary"></div>
                        <div className="p-6">
                          <div className="flex items-start">
                            <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mr-4">
                              <facility.icon className="h-6 w-6 text-primary" />
                            </div>
                            <div>
                              <h3 className="text-xl font-bold mb-2">
                                {facility.title}
                              </h3>
                              <p className="text-muted-foreground">
                                {facility.description}
                              </p>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* Laboratories Section */}
      <section className="py-16 bg-muted/50">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary mb-4">
                Research & Learning
              </div>
              <h2 className="text-3xl font-bold mb-6">
                State-of-the-Art Laboratories
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Our laboratories are fully equipped to carry out practical
                  work and undertake research. These labs are adaptable,
                  reconfigurable, and modular, making them ideally suited for
                  research in a wide range of fields to understand the
                  fundamentals of pharmaceutical knowledge.
                </p>
                <p>
                  Students gain hands-on experience with modern equipment and
                  techniques used in pharmaceutical research and development.
                  Our faculty members provide guidance and mentorship to ensure
                  that students develop the practical skills necessary for their
                  future careers.
                </p>
                <div className="flex flex-wrap gap-4 mt-6">
                  <div className="flex items-center">
                    <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center mr-3">
                      <Microscope className="h-5 w-5 text-primary" />
                    </div>
                    <span className="font-medium">
                      Pharmaceutical Chemistry Lab
                    </span>
                  </div>
                  <div className="flex items-center">
                    <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center mr-3">
                      <Microscope className="h-5 w-5 text-primary" />
                    </div>
                    <span className="font-medium">Pharmaceutics Lab</span>
                  </div>
                  <div className="flex items-center">
                    <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center mr-3">
                      <Microscope className="h-5 w-5 text-primary" />
                    </div>
                    <span className="font-medium">Pharmacology Lab</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative h-[400px] rounded-xl overflow-hidden shadow-xl">
              <img
                src="https://placehold.co/600x400"
                alt="HBS College of Pharmacy Laboratories"
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Library Section */}
      <section className="py-16">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative h-[400px] rounded-xl overflow-hidden shadow-xl order-2 md:order-1">
              <img
                src="https://placehold.co/600x400"
                alt="HBS College of Pharmacy Library"
                className="object-cover w-full h-full"
              />
            </div>
            <div className="order-1 md:order-2">
              <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary mb-4">
                Knowledge Hub
              </div>
              <h2 className="text-3xl font-bold mb-6">
                Modern Library Facilities
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  HBS College of Pharmacy has an air-conditioned and heated
                  library stocked with 1500+ latest course and reference books.
                  It has a vast seating capacity with computers and internet
                  access.
                </p>
                <p>
                  Through these computers, HEC Digital Library as well as HBS
                  E-library can be accessed, which contains a digital archive of
                  Life Sciences Journals and more than two million articles and
                  other informative resources.
                </p>
                <p>
                  Our library provides a quiet and comfortable environment for
                  study and research, with dedicated staff available to assist
                  students in finding the resources they need.
                </p>
                <div className="flex items-center mt-6">
                  <Button
                    variant="outline"
                    className="border-primary text-primary hover:bg-primary/5"
                  >
                    Explore Library Resources
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Classrooms Section */}
      <section className="py-16 bg-muted/50">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary mb-4">
                Learning Spaces
              </div>
              <h2 className="text-3xl font-bold mb-6">
                Modern Classrooms & Conference Facilities
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  HBS College of Pharmacy has ventilated and peaceful lecture
                  halls with audio-visual aids and internet. All the rooms have
                  flexible seating arrangements to make them more comfortable
                  and inviting.
                </p>
                <p>
                  Seminar/Conference Room and Auditorium are also available to
                  host workshops, seminars, or conferences. These spaces are
                  equipped with modern presentation technology and can
                  accommodate various group sizes.
                </p>
                <p>
                  Our classrooms are designed to facilitate interactive learning
                  and collaboration, with technology that supports modern
                  teaching methods and enhances the educational experience.
                </p>
              </div>
            </div>
            <div className="relative h-[400px] rounded-xl overflow-hidden shadow-xl">
              <img
                src="https://placehold.co/600x400"
                alt="HBS College of Pharmacy Classrooms"
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Student Life Section */}
      <section className="py-16">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary mb-4">
              Campus Life
            </div>
            <h2 className="text-3xl font-bold mb-4">
              Student Life & Recreation
            </h2>
            <p className="text-muted-foreground max-w-3xl mx-auto">
              Enjoy a balanced student life with recreational facilities and
              amenities
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <Card className="overflow-hidden shadow-md hover:shadow-lg transition-shadow">
              <div className="relative h-48">
                <img
                  src="https://placehold.co/600x400"
                  alt="Common Rooms"
                  className="object-cover w-full h-full"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">Common Rooms</h3>
                <p className="text-muted-foreground">
                  At HBS College of Pharmacy, we have well-furnished, spacious
                  separate common rooms for boys and girls. Indoor games like
                  table tennis, carrom boards, ludo, and monopoly are available
                  in the common rooms for recreation during breaks.
                </p>
              </CardContent>
            </Card>

            <Card className="overflow-hidden shadow-md hover:shadow-lg transition-shadow">
              <div className="relative h-48">
                <img
                  src="https://placehold.co/400x200"
                  alt="Cafeteria"
                  className="object-cover w-full h-full"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">Cafeteria</h3>
                <p className="text-muted-foreground">
                  The College has a cafeteria where snacks, drinks, and meals
                  are available at reasonable prices all day long. It serves as
                  a social hub where students can relax, socialize, and recharge
                  between classes.
                </p>
              </CardContent>
            </Card>

            <Card className="overflow-hidden shadow-md hover:shadow-lg transition-shadow">
              <div className="relative h-48">
                <img
                  src="https://placehold.co/400x200"
                  alt="Transport"
                  className="object-cover w-full h-full"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">Transport Facilities</h3>
                <p className="text-muted-foreground">
                  An MOU is signed with a transport company which provides
                  pick-and-drop services to the students and faculty members,
                  ensuring convenient and safe transportation to and from the
                  campus.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-muted/50">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary mb-4">
              Get in Touch
            </div>
            <h2 className="text-3xl font-bold mb-4">Contact Information</h2>
            <p className="text-muted-foreground max-w-3xl mx-auto">
              Have questions about life at HBS College of Pharmacy? Reach out to
              us.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card className="border-none shadow-lg overflow-hidden">
              <div className="h-2 w-full bg-primary"></div>
              <CardContent className="p-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-2xl font-bold mb-4">
                      Location & Contact
                    </h3>
                    <ul className="space-y-4">
                      <li className="flex items-start">
                        <MapPin className="h-5 w-5 mr-3 mt-0.5 text-primary" />
                        <span>
                          30 B, Street No. 6, Lane No. 10, Hostel City, Park
                          Road Islamabad
                        </span>
                      </li>
                      <li className="flex items-center">
                        <Phone className="h-5 w-5 mr-3 text-primary" />
                        <span>051-2321358</span>
                      </li>
                      <li className="flex items-center">
                        <Mail className="h-5 w-5 mr-3 text-primary" />
                        <span>info.pharmacy@hbs.edu.pk</span>
                      </li>
                    </ul>
                    <div className="mt-6">
                      <Button className="bg-primary">
                        Contact Us
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                  <div className="relative h-64 rounded-lg overflow-hidden">
                    <img
                      src="https://placehold.co/400x300"
                      alt="HBS College of Pharmacy Map"
                      className="object-cover w-full h-full"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">
              Ready to Join HBS College of Pharmacy?
            </h2>
            <p className="text-primary-foreground/90 mb-8 text-lg">
              Take the first step towards a rewarding career in pharmacy by
              applying today
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button
                variant="default"
                className="bg-primary-foreground text-primary hover:bg-primary-foreground/70"
              >
                Apply Now
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button
                variant=""
                className="border-primary-foreground border text-primary-foreground hover:bg-primary-foreground/10"
              >
                Request Information
              </Button>
              <Button
                variant=""
                className="border-primary-foreground border text-primary-foreground hover:bg-primary-foreground/10"
              >
                Schedule a Visit
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
