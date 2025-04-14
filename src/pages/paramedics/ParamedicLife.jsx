import {
  Building,
  BookOpen,
  Microscope,
  Users,
  Library,
  Coffee,
  Bus,
  MapPin,
  Phone,
  Mail,
  ChevronRight,
  GraduationCap,
  Monitor,
  Presentation,
  Gamepad2,
  Hospital,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export default function ParamedicLife() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[50vh] min-h-[400px] w-full overflow-hidden bg-muted/50">
        <div className="container relative h-full flex flex-col items-center justify-center text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-foreground/20 backdrop-blur-sm mb-4">
            <GraduationCap className="h-8 w-8" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-2">
            LIFE @ HBS COLLEGE OF PARAMEDICS
          </h1>
          <p className="text-xl text-foreground/90 max-w-2xl">
            Experience world-class education in a modern, purpose-built campus
            with state-of-the-art facilities
          </p>
        </div>
      </section>

      {/* Campus Overview */}
      <section className="py-16 px-4">
        <div className="container">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="relative h-[400px] rounded-xl overflow-hidden shadow-xl">
                <img
                  src="https://placehold.co/600x400"
                  alt="HBS Paramedics Campus"
                  className="object-cover w-full h-full"
                />
              </div>
              <div>
                <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary mb-4">
                  Our Campus
                </div>
                <h2 className="text-3xl font-bold mb-6">
                  Modern Campus Facilities
                </h2>
                <p className="text-muted-foreground mb-6">
                  HBS College of Paramedics is centrally located at 30-B, Street
                  No. 6, Lane No. 10, Hostel City, Park Road Islamabad. It has a
                  spacious purpose-built 07 floor campus in an earthquake proof
                  structure with adequate arrangements for air-conditioning,
                  heating and backup power.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <div className="h-8 w-8 rounded-full bg-primary/20 flex items-center justify-center mr-3">
                      <Building className="h-4 w-4 text-primary" />
                    </div>
                    <p className="text-muted-foreground">
                      7-floor purpose-built campus
                    </p>
                  </div>
                  <div className="flex items-center">
                    <div className="h-8 w-8 rounded-full bg-primary/20 flex items-center justify-center mr-3">
                      <MapPin className="h-4 w-4 text-primary" />
                    </div>
                    <p className="text-muted-foreground">
                      Centrally located in Islamabad
                    </p>
                  </div>
                  <div className="flex items-center">
                    <div className="h-8 w-8 rounded-full bg-primary/20 flex items-center justify-center mr-3">
                      <Monitor className="h-4 w-4 text-primary" />
                    </div>
                    <p className="text-muted-foreground">
                      Modern amenities and facilities
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Teaching Hospital */}
      <section className="py-16 px-4 bg-muted/50">
        <div className="container">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary mb-4">
                  Teaching Hospital
                </div>
                <h2 className="text-3xl font-bold mb-6">
                  HBS General Hospital
                </h2>
                <p className="text-muted-foreground mb-6">
                  Dilemma of education in Pakistan is that most of Paramedics
                  colleges do not have their own hospitals and students suffer
                  for their trainings. HBS College of Paramedics has its own 500
                  bed tertiary care general hospital (HBS General Hospital)
                  located within walking distance of the campus.
                </p>
                <p className="text-muted-foreground mb-6">
                  HBS General Hospital serves as the teaching hospital for the
                  college. It provides complete range of major specialities as
                  well as laboratory and imaging services under one roof. HBS
                  General Hospital has some of the most renowned specialists and
                  surgeons on its strength and has acquired a reputation of a
                  high-quality hospital.
                </p>
                <div className="flex items-center">
                  <div className="h-10 w-10 rounded-full bg-primary/20 flex items-center justify-center mr-3">
                    <Hospital className="h-5 w-5 text-primary" />
                  </div>
                  <p className="text-lg font-medium text-primary">
                    500-bed tertiary care facility
                  </p>
                </div>
              </div>
              <div className="relative h-[400px] rounded-xl overflow-hidden shadow-xl">
                <img
                  src="https://placehold.co/600x400"
                  alt="HBS General Hospital"
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Laboratories */}
      <section className="py-16 px-4">
        <div className="container">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/20 mb-4">
                <Microscope className="h-6 w-6 text-primary" />
              </div>
              <h2 className="text-3xl font-bold mb-4">
                State-of-the-Art Laboratories
              </h2>
              <p className="text-muted-foreground max-w-3xl mx-auto">
                Our laboratories are fully equipped to carry out practical work
                and undertake research. Furthermore, these labs are adaptable,
                reconfigurable and modular, making them ideally suited for
                research in the wide range of fields to understand fundamentals
                of Pharmaceutical knowledge.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  name: "Medical Laboratory",
                  image: "https://placehold.co/300x200",
                  description:
                    "Equipped with modern diagnostic equipment for hands-on training",
                },
                {
                  name: "Operation Theater Lab",
                  image: "https://placehold.co/300x200",
                  description:
                    "Simulated operation theater environment for practical training",
                },
                {
                  name: "Ophthalmology Lab",
                  image: "https://placehold.co/300x200",
                  description:
                    "Specialized equipment for eye examination and treatment procedures",
                },
                {
                  name: "Dental Lab",
                  image: "https://placehold.co/300x200",
                  description:
                    "Modern dental chairs and equipment for dental hygiene training",
                },
                {
                  name: "Imaging Lab",
                  image: "https://placehold.co/300x200",
                  description:
                    "X-ray, ultrasound, and other imaging equipment for practical learning",
                },
                {
                  name: "Computer Lab",
                  image: "https://placehold.co/300x200",
                  description:
                    "Modern computers with specialized software for research and learning",
                },
              ].map((lab, index) => (
                <Card
                  key={index}
                  className="overflow-hidden hover:shadow-lg transition-all duration-300"
                >
                  <div className="relative h-48">
                    <img
                      src={lab.image || "/placeholder.svg"}
                      alt={lab.name}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-bold mb-2">{lab.name}</h3>
                    <p className="text-muted-foreground text-sm">
                      {lab.description}
                    </p>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Classrooms */}
      <section className="py-16 px-4 bg-muted/50">
        <div className="container">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="relative h-[400px] rounded-xl overflow-hidden shadow-xl">
                <img
                  src="https://placehold.co/600x400"
                  alt="HBS Paramedics Classrooms"
                  className="object-cover w-full h-full"
                />
              </div>
              <div>
                <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary mb-4">
                  Learning Spaces
                </div>
                <h2 className="text-3xl font-bold mb-6">
                  Modern Classrooms & Auditorium
                </h2>
                <p className="text-muted-foreground mb-6">
                  HBS College of Paramedics has ventilated and peaceful lecture
                  halls with audio visual aids and internet. All the rooms have
                  flexible seating arrangements to make it more comfortable and
                  inviting. Seminar/Conference Room and Auditorium are also
                  available to host a workshop, seminar or conference.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <div className="h-8 w-8 rounded-full bg-primary/20 flex items-center justify-center mr-3">
                      <BookOpen className="h-4 w-4 text-primary" />
                    </div>
                    <p className="text-muted-foreground">
                      Modern lecture halls with audio-visual aids
                    </p>
                  </div>
                  <div className="flex items-center">
                    <div className="h-8 w-8 rounded-full bg-primary/20 flex items-center justify-center mr-3">
                      <Presentation className="h-4 w-4 text-primary" />
                    </div>
                    <p className="text-muted-foreground">
                      Seminar/Conference rooms for workshops
                    </p>
                  </div>
                  <div className="flex items-center">
                    <div className="h-8 w-8 rounded-full bg-primary/20 flex items-center justify-center mr-3">
                      <Users className="h-4 w-4 text-primary" />
                    </div>
                    <p className="text-muted-foreground">
                      Flexible seating arrangements for comfort
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Library */}
      <section className="py-16 px-4">
        <div className="container">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary mb-4">
                  Knowledge Center
                </div>
                <h2 className="text-3xl font-bold mb-6">
                  Well-Stocked Library
                </h2>
                <p className="text-muted-foreground mb-6">
                  HBS College of Paramedics has an air-conditioned and heated
                  library stocked with 1500+ latest course and reference books.
                  It has a vast seating capacity with computers and internet
                  access.
                </p>
                <p className="text-muted-foreground mb-6">
                  Through these computers, HEC Digital Library as well as HBS
                  E-library can be accessed, which contains a digital archive of
                  Life Sciences Journals and more than two million articles and
                  other informative resources.
                </p>
                <div className="bg-primary/10 p-4 rounded-lg">
                  <div className="flex items-center">
                    <div className="h-10 w-10 rounded-full bg-primary/20 flex items-center justify-center mr-3">
                      <Library className="h-5 w-5 text-primary" />
                    </div>
                    <p className="text-lg font-medium text-primary">
                      Access to over 2 million research articles
                    </p>
                  </div>
                </div>
              </div>
              <div className="relative h-[400px] rounded-xl overflow-hidden shadow-xl">
                <img
                  src="https://placehold.co/600x400"
                  alt="HBS Library"
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Student Facilities */}
      <section className="py-16 px-4 bg-muted/50">
        <div className="container">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Student Facilities</h2>
              <p className="text-muted-foreground max-w-3xl mx-auto">
                We provide a range of facilities to ensure a comfortable and
                enriching experience for our students
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {/* Common Rooms */}
              <Card className="p-6 hover:shadow-lg transition-shadow">
                <div className="h-12 w-12 rounded-full bg-primary/20 flex items-center justify-center mb-4">
                  <Gamepad2 className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3">Common Rooms</h3>
                <p className="text-muted-foreground mb-4">
                  At HBS College of Paramedics, we have well-furnished huge
                  separate common rooms for boys and girls. Indoor games like
                  table tennis, carrom boards, ludo and monopoly are available
                  in common rooms.
                </p>
              </Card>

              {/* Cafeteria */}
              <Card className="p-6 hover:shadow-lg transition-shadow">
                <div className="h-12 w-12 rounded-full bg-primary/20 flex items-center justify-center mb-4">
                  <Coffee className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3">Cafeteria</h3>
                <p className="text-muted-foreground mb-4">
                  The College has a cafeteria where snacks, drinks and meals are
                  available at reasonable prices all day long, providing
                  students with convenient dining options on campus.
                </p>
              </Card>

              {/* Transport */}
              <Card className="p-6 hover:shadow-lg transition-shadow">
                <div className="h-12 w-12 rounded-full bg-primary/20 flex items-center justify-center mb-4">
                  <Bus className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3">Transport Facilities</h3>
                <p className="text-muted-foreground mb-4">
                  MOU is signed with transport company which provides a
                  pick-and-drop services to the students and faculty members,
                  making commuting convenient and reliable.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Student Life Gallery */}
      <section className="py-16 px-4">
        <div className="container">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Student Life Gallery</h2>
              <p className="text-muted-foreground max-w-3xl mx-auto">
                Glimpses of vibrant student life at HBS College of Paramedics
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {[1, 2, 3, 4, 5, 6].map((item) => (
                <div
                  key={item}
                  className="relative h-[200px] rounded-lg overflow-hidden group"
                >
                  <img
                    src="https://placehold.co/300x200"
                    alt={`Student Life ${item}`}
                    className="object-cover w-full h-full transition-transform group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end">
                    <div className="p-4 w-full">
                      <p className="text-white font-medium">Campus Activity</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 px-4 bg-muted/50">
        <div className="container">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Student Testimonials</h2>
              <p className="text-muted-foreground max-w-3xl mx-auto">
                Hear what our students have to say about their experience at HBS
                College of Paramedics
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  name: "Ayesha Khan",
                  program: "F.Sc Medical Laboratory Technology",
                  quote:
                    "The hands-on training at HBS College of Paramedics has been invaluable. The access to the hospital for practical experience gives us an edge over other students.",
                  image: "https://placehold.co/100",
                },
                {
                  name: "Muhammad Ali",
                  program: "F.Sc Operation Theater Technology",
                  quote:
                    "The faculty members are highly experienced and always willing to help. The modern facilities and equipment have prepared me well for my future career.",
                  image: "https://placehold.co/100",
                },
                {
                  name: "Fatima Zahra",
                  program: "F.Sc Dental Hygiene Technology",
                  quote:
                    "I appreciate the balance between theoretical knowledge and practical skills. The college environment is supportive and conducive to learning.",
                  image: "https://placehold.co/100",
                },
                {
                  name: "Hassan Ahmed",
                  program: "F.Sc Medical Imaging Technology",
                  quote:
                    "The opportunity to work with state-of-the-art equipment and learn from experienced professionals has been the highlight of my education at HBS.",
                  image: "https://placehold.co/100",
                },
              ].map((testimonial, index) => (
                <Card key={index} className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="relative h-12 w-12 rounded-full overflow-hidden mr-4">
                      <img
                        src={testimonial.image || "/placeholder.svg"}
                        alt={testimonial.name}
                        className="object-cover w-full h-full"
                      />
                    </div>
                    <div>
                      <h3 className="font-bold">{testimonial.name}</h3>
                      <p className="text-sm text-muted-foreground">
                        {testimonial.program}
                      </p>
                    </div>
                  </div>
                  <p className="text-muted-foreground italic">
                    "{testimonial.quote}"
                  </p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Location and Contact */}
      <section className="py-16 px-4">
        <div className="container">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Location and Contact</h2>
              <p className="text-muted-foreground max-w-3xl mx-auto">
                Visit our campus or get in touch with us for more information
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="relative h-[400px] rounded-xl overflow-hidden">
                <img
                  src="https://placehold.co/600x400"
                  alt="HBS Paramedics Location"
                  className="object-cover w-full h-full"
                />
              </div>
              <div>
                <Card className="p-6 h-full">
                  <h3 className="text-xl font-bold mb-6">
                    Contact Information
                  </h3>
                  <div className="space-y-6">
                    <div className="flex items-start">
                      <div className="h-10 w-10 rounded-full bg-primary/20 flex items-center justify-center mr-4 mt-1">
                        <MapPin className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-bold mb-1">Address</h4>
                        <p className="text-muted-foreground">
                          30 B, Street No. 6, Lane No. 10, Hostel City, Park
                          Road Islamabad
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="h-10 w-10 rounded-full bg-primary/20 flex items-center justify-center mr-4 mt-1">
                        <Phone className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-bold mb-1">Phone</h4>
                        <p className="text-muted-foreground">051-2321357</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="h-10 w-10 rounded-full bg-primary/20 flex items-center justify-center mr-4 mt-1">
                        <Mail className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-bold mb-1">Email</h4>
                        <p className="text-muted-foreground">
                          info.paramedics@hbs.edu.pk
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="mt-8">
                    <Button size="lg" className="w-full">
                      Schedule a Campus Visit
                    </Button>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-primary text-primary-foreground">
        <div className="container">
          <div className="md:flex items-center justify-between">
            <div className="mb-6 md:mb-0">
              <h2 className="text-3xl font-bold mb-2">
                Experience Life at HBS Paramedics
              </h2>
              <p className="text-primary-foreground/90">
                Join us for a world-class education in paramedical sciences
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
