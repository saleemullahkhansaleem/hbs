import { BookOpen, Users, Trophy, Building, ChevronRight } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function LifeAtHBSPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-16 bg-muted/50 w-full overflow-hidden">
        <div className="container max-w-7xl mx-auto px-4 relative h-full flex flex-col items-center justify-center text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-foreground/20 backdrop-blur-sm mb-4">
            <Building className="h-8 w-8" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-2">Life at HBS</h1>
          <p className="text-xl text-muted-foreground max-w-2xl">
            Experience a vibrant and enriching academic journey at HBS Medical &
            Dental College
          </p>
        </div>
      </section>

      {/* Campus Overview */}
      <section className="py-16">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Our Campus</h2>
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
                  src="https://placehold.co/600x400"
                  alt="HBS Campus"
                  className="object-cover h-full w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Campus Features */}
      <section className="py-16 bg-muted/50">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Campus Features</h2>
              <p className="text-muted-foreground max-w-3xl mx-auto">
                Our campus is designed to provide an optimal learning
                environment with modern amenities
              </p>
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

      {/* Campus Tour */}
      <section className="py-16">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Campus Tour</h2>
              <p className="text-muted-foreground max-w-3xl mx-auto">
                Take a visual journey through our state-of-the-art facilities
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="relative h-[250px] rounded-lg overflow-hidden group">
                <img
                  src="https://placehold.co/350x250"
                  alt="Main Building"
                  className="object-cover h-full w-full transition-transform group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end">
                  <div className="p-4 w-full">
                    <p className="text-white font-medium">Main Building</p>
                  </div>
                </div>
              </div>

              <div className="relative h-[250px] rounded-lg overflow-hidden group">
                <img
                  src="https://placehold.co/350x250"
                  alt="Lecture Halls"
                  className="object-cover h-full w-full transition-transform group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end">
                  <div className="p-4 w-full">
                    <p className="text-white font-medium">Lecture Halls</p>
                  </div>
                </div>
              </div>

              <div className="relative h-[250px] rounded-lg overflow-hidden group">
                <img
                  src="https://placehold.co/350x250"
                  alt="Laboratories"
                  className="object-cover h-full w-full transition-transform group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end">
                  <div className="p-4 w-full">
                    <p className="text-white font-medium">Laboratories</p>
                  </div>
                </div>
              </div>

              <div className="relative h-[250px] rounded-lg overflow-hidden group">
                <img
                  src="https://placehold.co/350x250"
                  alt="Library"
                  className="object-cover h-full w-full transition-transform group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end">
                  <div className="p-4 w-full">
                    <p className="text-white font-medium">Library</p>
                  </div>
                </div>
              </div>

              <div className="relative h-[250px] rounded-lg overflow-hidden group">
                <img
                  src="https://placehold.co/350x250"
                  alt="Cafeteria"
                  className="object-cover h-full w-full transition-transform group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end">
                  <div className="p-4 w-full">
                    <p className="text-white font-medium">Cafeteria</p>
                  </div>
                </div>
              </div>

              <div className="relative h-[250px] rounded-lg overflow-hidden group">
                <img
                  src="https://placehold.co/350x250"
                  alt="Sports Facilities"
                  className="object-cover h-full w-full transition-transform group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end">
                  <div className="p-4 w-full">
                    <p className="text-white font-medium">Sports Facilities</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center mt-8">
              <Button>Schedule a Campus Visit</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Teaching Hospital */}
      <section className="py-16 bg-muted/50">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="relative h-[400px] rounded-xl overflow-hidden shadow-xl">
                <img
                  src="https://placehold.co/600x400"
                  alt="HBS General Hospital"
                  className="object-cover h-full w-full"
                />
              </div>
              <div>
                <h2 className="text-3xl font-bold mb-6">
                  HBS General Hospital
                </h2>
                <p className="text-muted-foreground mb-6">
                  Our 500-bed tertiary care general hospital serves as the
                  teaching hospital for the college, providing students with
                  hands-on clinical experience under the guidance of experienced
                  healthcare professionals.
                </p>
                <p className="text-muted-foreground mb-6">
                  The hospital offers a complete range of major specialties as
                  well as comprehensive laboratory and imaging services under
                  one roof, creating an ideal environment for medical education
                  and training.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center mr-3 mt-1">
                      <ChevronRight className="h-3 w-3 text-primary" />
                    </div>
                    <p className="text-muted-foreground">
                      500-bed tertiary care facility
                    </p>
                  </li>
                  <li className="flex items-start">
                    <div className="h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center mr-3 mt-1">
                      <ChevronRight className="h-3 w-3 text-primary" />
                    </div>
                    <p className="text-muted-foreground">
                      Renowned specialists and surgeons
                    </p>
                  </li>
                  <li className="flex items-start">
                    <div className="h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center mr-3 mt-1">
                      <ChevronRight className="h-3 w-3 text-primary" />
                    </div>
                    <p className="text-muted-foreground">
                      Comprehensive range of specialties
                    </p>
                  </li>
                  <li className="flex items-start">
                    <div className="h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center mr-3 mt-1">
                      <ChevronRight className="h-3 w-3 text-primary" />
                    </div>
                    <p className="text-muted-foreground">
                      Advanced laboratory and imaging services
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Dental Hospital */}
      <section className="py-16">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">HBS Dental Hospital</h2>
                <p className="text-muted-foreground mb-6">
                  HBS Dental College & HBS Dental Hospital are located in a
                  purpose-built campus adjacent to HBS Medical College. The
                  facility is fully furnished and equipped with the most modern
                  aids and equipment for dental education and practice.
                </p>
                <p className="text-muted-foreground mb-6">
                  Our dental students benefit from hands-on training in a
                  state-of-the-art environment that prepares them for successful
                  careers in dental healthcare.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center mr-3 mt-1">
                      <ChevronRight className="h-3 w-3 text-primary" />
                    </div>
                    <p className="text-muted-foreground">
                      Modern dental operatories
                    </p>
                  </li>
                  <li className="flex items-start">
                    <div className="h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center mr-3 mt-1">
                      <ChevronRight className="h-3 w-3 text-primary" />
                    </div>
                    <p className="text-muted-foreground">
                      Advanced dental equipment
                    </p>
                  </li>
                  <li className="flex items-start">
                    <div className="h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center mr-3 mt-1">
                      <ChevronRight className="h-3 w-3 text-primary" />
                    </div>
                    <p className="text-muted-foreground">
                      Specialized dental laboratories
                    </p>
                  </li>
                  <li className="flex items-start">
                    <div className="h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center mr-3 mt-1">
                      <ChevronRight className="h-3 w-3 text-primary" />
                    </div>
                    <p className="text-muted-foreground">
                      Patient care facilities
                    </p>
                  </li>
                </ul>
              </div>
              <div className="relative h-[400px] rounded-xl overflow-hidden shadow-xl">
                <img
                  src="https://placehold.co/600x400"
                  alt="HBS Dental Hospital"
                  className="object-cover h-full w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="md:flex items-center justify-between">
            <div className="mb-6 md:mb-0">
              <h2 className="text-3xl font-bold mb-2">
                Experience Life at HBS
              </h2>
              <p className="text-primary-foreground/70">
                Schedule a campus tour to see our facilities and learn more
                about student life
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <Button
                size="lg"
                variant="default"
                className="bg-primary-foreground text-primary hover:bg-primary-foreground/70"
              >
                Schedule a Tour
              </Button>
              <Button
                size="lg"
                variant=""
                className="border-primary-foreground border text-primary-foreground hover:bg-primary-foreground/10"
              >
                Contact Admissions
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
