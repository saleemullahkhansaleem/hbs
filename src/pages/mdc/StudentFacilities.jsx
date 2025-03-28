import { BookOpen, Home, Bus, Microscope, ChevronRight } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function StudentFacilities() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-16 bg-muted/50 w-full overflow-hidden">
        <div className="container max-w-7xl mx-auto px-4 relative h-full flex flex-col items-center justify-center text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-foreground/20 backdrop-blur-sm mb-4">
            <BookOpen className="h-8 w-8" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-2">
            Student Facilities
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl">
            Comprehensive facilities to support your academic journey and
            enhance your college experience
          </p>
        </div>
      </section>

      {/* Facilities Overview */}
      <section className="py-16">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Our Facilities</h2>
              <p className="text-muted-foreground max-w-3xl mx-auto">
                HBS Medical & Dental College provides a range of facilities to
                ensure a comfortable and productive learning environment for all
                students
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
                        src="https://placehold.co/400x300"
                        alt="HBS Library"
                        className="object-cover w-full h-full"
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
                          src="https://placehold.co/200x150"
                          alt="Hostel Room"
                          className="object-cover w-full h-full"
                        />
                      </div>
                      <div className="relative h-[150px] rounded-lg overflow-hidden">
                        <img
                          src="https://placehold.co/200x150"
                          alt="Hostel Building"
                          className="object-cover w-full h-full"
                        />
                      </div>
                      <div className="relative h-[150px] rounded-lg overflow-hidden">
                        <img
                          src="https://placehold.co/200x150"
                          alt="Hostel Common Area"
                          className="object-cover w-full h-full"
                        />
                      </div>
                      <div className="relative h-[150px] rounded-lg overflow-hidden">
                        <img
                          src="https://placehold.co/200x150"
                          alt="Hostel Dining"
                          className="object-cover w-full h-full"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="mt-8 p-6 bg-muted/50 rounded-lg">
                    <h4 className="text-lg font-bold mb-4">
                      Hostel Facilities
                    </h4>
                    <div className="grid md:grid-cols-3 gap-6">
                      <div className="bg-background p-4 rounded-lg shadow-sm">
                        <h5 className="font-medium mb-2">Accommodation</h5>
                        <ul className="text-sm text-muted-foreground space-y-1">
                          <li>Furnished rooms</li>
                          <li>Study tables and chairs</li>
                          <li>Cupboards and storage</li>
                          <li>Comfortable bedding</li>
                        </ul>
                      </div>
                      <div className="bg-background p-4 rounded-lg shadow-sm">
                        <h5 className="font-medium mb-2">Amenities</h5>
                        <ul className="text-sm text-muted-foreground space-y-1">
                          <li>24/7 electricity with backup</li>
                          <li>Hot and cold water</li>
                          <li>Heating and cooling</li>
                          <li>Wi-Fi connectivity</li>
                        </ul>
                      </div>
                      <div className="bg-background p-4 rounded-lg shadow-sm">
                        <h5 className="font-medium mb-2">Common Areas</h5>
                        <ul className="text-sm text-muted-foreground space-y-1">
                          <li>Common rooms</li>
                          <li>Dining facilities</li>
                          <li>Study areas</li>
                          <li>Recreational spaces</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="mt-8 text-center">
                    <Button>Apply for Hostel Accommodation</Button>
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
                        src="https://placehold.co/400x300"
                        alt="HBS Transportation"
                        className="object-cover w-full h-full"
                      />
                    </div>
                  </div>

                  <div className="mt-8 p-6 bg-muted/50 rounded-lg">
                    <h4 className="text-lg font-bold mb-4">
                      Transportation Routes
                    </h4>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="bg-background p-4 rounded-lg shadow-sm">
                        <h5 className="font-medium mb-2">Morning Routes</h5>
                        <ul className="text-sm text-muted-foreground space-y-1">
                          <li>Route 1: F-Sectors → HBS Campus</li>
                          <li>Route 2: G-Sectors → HBS Campus</li>
                          <li>Route 3: I-Sectors → HBS Campus</li>
                          <li>Route 4: Rawalpindi → HBS Campus</li>
                        </ul>
                      </div>
                      <div className="bg-background p-4 rounded-lg shadow-sm">
                        <h5 className="font-medium mb-2">Evening Routes</h5>
                        <ul className="text-sm text-muted-foreground space-y-1">
                          <li>Route 1: HBS Campus → F-Sectors</li>
                          <li>Route 2: HBS Campus → G-Sectors</li>
                          <li>Route 3: HBS Campus → I-Sectors</li>
                          <li>Route 4: HBS Campus → Rawalpindi</li>
                        </ul>
                      </div>
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
                        src="https://placehold.co/200x150"
                        alt="Biochemistry Lab"
                        className="object-cover w-full h-full"
                      />
                    </div>
                    <div className="relative h-[150px] rounded-lg overflow-hidden">
                      <img
                        src="https://placehold.co/200x150"
                        alt="Histology Lab"
                        className="object-cover w-full h-full"
                      />
                    </div>
                    <div className="relative h-[150px] rounded-lg overflow-hidden">
                      <img
                        src="https://placehold.co/200x150"
                        alt="Pathology Lab"
                        className="object-cover w-full h-full"
                      />
                    </div>
                    <div className="relative h-[150px] rounded-lg overflow-hidden">
                      <img
                        src="https://placehold.co/200x150"
                        alt="Skill Lab"
                        className="object-cover w-full h-full"
                      />
                    </div>
                  </div>

                  <div className="mt-8 p-6 bg-muted/50 rounded-lg">
                    <h4 className="text-lg font-bold mb-4">
                      Lab Access Information
                    </h4>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="bg-background p-4 rounded-lg shadow-sm">
                        <h5 className="font-medium mb-2">Lab Hours</h5>
                        <ul className="text-sm text-muted-foreground space-y-1">
                          <li>Monday - Friday: 8:00 AM - 4:00 PM</li>
                          <li>Saturday: 9:00 AM - 1:00 PM (By appointment)</li>
                          <li>Sunday: Closed</li>
                        </ul>
                      </div>
                      <div className="bg-background p-4 rounded-lg shadow-sm">
                        <h5 className="font-medium mb-2">Access Policy</h5>
                        <ul className="text-sm text-muted-foreground space-y-1">
                          <li>Students must carry ID cards</li>
                          <li>Lab coats required for all sessions</li>
                          <li>Prior booking for research work</li>
                          <li>Faculty supervision for specialized equipment</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>

      {/* Additional Facilities */}
      <section className="py-16 bg-muted/50">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Additional Facilities</h2>
              <p className="text-muted-foreground max-w-3xl mx-auto">
                Beyond the core academic facilities, we offer a range of
                amenities to enhance student life
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="p-6 hover:shadow-lg transition-shadow">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <BookOpen className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3">Study Areas</h3>
                <p className="text-muted-foreground">
                  Quiet, comfortable spaces throughout the campus where students
                  can study individually or in groups.
                </p>
              </Card>

              <Card className="p-6 hover:shadow-lg transition-shadow">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Home className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3">Cafeteria</h3>
                <p className="text-muted-foreground">
                  A spacious cafeteria offering nutritious meals and
                  refreshments at reasonable prices.
                </p>
              </Card>

              <Card className="p-6 hover:shadow-lg transition-shadow">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Bus className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3">Prayer Rooms</h3>
                <p className="text-muted-foreground">
                  Dedicated prayer spaces for male and female students to
                  fulfill their religious obligations.
                </p>
              </Card>
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
                Experience Our Facilities
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
