"use client";

import { useState } from "react";
import {
  FileText,
  Camera,
  Trophy,
  Music,
  BookOpen,
  Pencil,
  Users,
  Palette,
  ChevronRight,
} from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function StudentSocietiesPage() {
  const [activeTab, setActiveTab] = useState("literary");

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-16 bg-muted/50 w-full overflow-hidden">
        <div className="container max-w-7xl mx-auto px-4 relative h-full flex flex-col items-center justify-center text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-foreground/20 backdrop-blur-sm mb-4">
            <Users className="h-8 w-8" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-2">
            Student Societies
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl">
            Engage in extracurricular activities through our diverse student
            societies
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Explore Our Societies</h2>
              <p className="text-muted-foreground max-w-3xl mx-auto">
                Faculty/Demonstrators and Students in charge of co-curricular
                Societies manage various societies in HBS Medical & Dental
                College to promote extracurricular activities and holistic
                development
              </p>
            </div>

            <Tabs
              defaultValue="literary"
              className="w-full"
              onValueChange={setActiveTab}
            >
              <TabsList className="grid w-full grid-cols-3 mb-8">
                <TabsTrigger value="literary">Literary Society</TabsTrigger>
                <TabsTrigger value="arts">Arts & Crafts Society</TabsTrigger>
                <TabsTrigger value="sports">Sports Society</TabsTrigger>
              </TabsList>

              <TabsContent value="literary">
                <Card className="p-8">
                  <div className="flex items-center mb-6">
                    <FileText className="h-8 w-8 text-primary mr-3" />
                    <h3 className="text-2xl font-bold">Literary Society</h3>
                  </div>

                  <p className="text-muted-foreground mb-8">
                    The Literary Society at HBS Medical & Dental College aims to
                    nurture the literary talents of students and provide
                    platforms for expression, debate, and creative writing.
                    Through various clubs and activities, students can develop
                    their communication skills, critical thinking, and artistic
                    expression.
                  </p>

                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div className="bg-muted/50 p-6 rounded-lg">
                      <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                        <BookOpen className="h-6 w-6 text-primary" />
                      </div>
                      <h4 className="text-lg font-bold mb-2">
                        Magazine Society
                      </h4>
                      <p className="text-muted-foreground text-sm mb-4">
                        Publishes the college magazine showcasing student
                        articles, poetry, and creative work in both English and
                        Urdu.
                      </p>
                      <Button variant="outline" size="sm" className="w-full">
                        Join Society
                      </Button>
                    </div>

                    <div className="bg-muted/50 p-6 rounded-lg">
                      <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                        <Music className="h-6 w-6 text-primary" />
                      </div>
                      <h4 className="text-lg font-bold mb-2">
                        Qirat/Naat Society
                      </h4>
                      <p className="text-muted-foreground text-sm mb-4">
                        Organizes events for recitation of the Holy Quran and
                        Naats, promoting spiritual growth.
                      </p>
                      <Button variant="outline" size="sm" className="w-full">
                        Join Society
                      </Button>
                    </div>

                    <div className="bg-muted/50 p-6 rounded-lg">
                      <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                        <Music className="h-6 w-6 text-primary" />
                      </div>
                      <h4 className="text-lg font-bold mb-2">
                        Baiet Bazi Society
                      </h4>
                      <p className="text-muted-foreground text-sm mb-4">
                        Promotes the traditional art of Baiet Bazi, enhancing
                        literary appreciation and quick thinking.
                      </p>
                      <Button variant="outline" size="sm" className="w-full">
                        Join Society
                      </Button>
                    </div>

                    <div className="bg-muted/50 p-6 rounded-lg">
                      <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                        <Music className="h-6 w-6 text-primary" />
                      </div>
                      <h4 className="text-lg font-bold mb-2">
                        Drama & Music Society
                      </h4>
                      <p className="text-muted-foreground text-sm mb-4">
                        Organizes theatrical performances and musical events to
                        showcase student talents.
                      </p>
                      <Button variant="outline" size="sm" className="w-full">
                        Join Society
                      </Button>
                    </div>

                    <div className="bg-muted/50 p-6 rounded-lg">
                      <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                        <Users className="h-6 w-6 text-primary" />
                      </div>
                      <h4 className="text-lg font-bold mb-2">Debate Society</h4>
                      <p className="text-muted-foreground text-sm mb-4">
                        Hosts debates and public speaking competitions to
                        develop communication and argumentation skills.
                      </p>
                      <Button variant="outline" size="sm" className="w-full">
                        Join Society
                      </Button>
                    </div>

                    <div className="bg-muted/50 p-6 rounded-lg">
                      <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                        <Pencil className="h-6 w-6 text-primary" />
                      </div>
                      <h4 className="text-lg font-bold mb-2">
                        Essay & Creative Writing Society
                      </h4>
                      <p className="text-muted-foreground text-sm mb-4">
                        Encourages students to express themselves through
                        essays, short stories, and poetry.
                      </p>
                      <Button variant="outline" size="sm" className="w-full">
                        Join Society
                      </Button>
                    </div>
                  </div>

                  <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="relative h-[150px] rounded-lg overflow-hidden">
                      <img
                        src="/placeholder.svg?height=150&width=200&text=Debate+Competition"
                        alt="Debate Competition"
                        className="object-cover"
                      />
                    </div>
                    <div className="relative h-[150px] rounded-lg overflow-hidden">
                      <img
                        src="/placeholder.svg?height=150&width=200&text=Magazine+Launch"
                        alt="Magazine Launch"
                        className="object-cover"
                      />
                    </div>
                    <div className="relative h-[150px] rounded-lg overflow-hidden">
                      <img
                        src="/placeholder.svg?height=150&width=200&text=Drama+Performance"
                        alt="Drama Performance"
                        className="object-cover"
                      />
                    </div>
                    <div className="relative h-[150px] rounded-lg overflow-hidden">
                      <img
                        src="/placeholder.svg?height=150&width=200&text=Writing+Workshop"
                        alt="Writing Workshop"
                        className="object-cover"
                      />
                    </div>
                  </div>
                </Card>
              </TabsContent>

              <TabsContent value="arts">
                <Card className="p-8">
                  <div className="flex items-center mb-6">
                    <Camera className="h-8 w-8 text-primary mr-3" />
                    <h3 className="text-2xl font-bold">
                      Arts & Crafts Society
                    </h3>
                  </div>

                  <p className="text-muted-foreground mb-8">
                    The Arts & Crafts Society provides students with
                    opportunities to explore their artistic talents and develop
                    creative skills. Through various clubs and activities,
                    students can express themselves visually and contribute to
                    the aesthetic environment of the college.
                  </p>

                  <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6">
                    <div className="bg-muted/50 p-6 rounded-lg">
                      <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                        <Pencil className="h-6 w-6 text-primary" />
                      </div>
                      <h4 className="text-lg font-bold mb-2">
                        Calligraphy Society
                      </h4>
                      <p className="text-muted-foreground text-sm mb-4">
                        Promotes the art of beautiful handwriting in various
                        scripts, with a focus on Arabic and English calligraphy.
                      </p>
                      <Button variant="outline" size="sm" className="w-full">
                        Join Society
                      </Button>
                    </div>

                    <div className="bg-muted/50 p-6 rounded-lg">
                      <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                        <Palette className="h-6 w-6 text-primary" />
                      </div>
                      <h4 className="text-lg font-bold mb-2">
                        Sketching and Painting Society
                      </h4>
                      <p className="text-muted-foreground text-sm mb-4">
                        Provides a platform for students to develop their
                        drawing and painting skills through workshops and
                        exhibitions.
                      </p>
                      <Button variant="outline" size="sm" className="w-full">
                        Join Society
                      </Button>
                    </div>

                    <div className="bg-muted/50 p-6 rounded-lg">
                      <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                        <Palette className="h-6 w-6 text-primary" />
                      </div>
                      <h4 className="text-lg font-bold mb-2">
                        Craft & Model-Making Society
                      </h4>
                      <p className="text-muted-foreground text-sm mb-4">
                        Focuses on creating handcrafted items and anatomical
                        models, combining creativity with medical education.
                      </p>
                      <Button variant="outline" size="sm" className="w-full">
                        Join Society
                      </Button>
                    </div>

                    <div className="bg-muted/50 p-6 rounded-lg">
                      <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                        <Camera className="h-6 w-6 text-primary" />
                      </div>
                      <h4 className="text-lg font-bold mb-2">
                        Media/Photography/Short-Clips Society
                      </h4>
                      <p className="text-muted-foreground text-sm mb-4">
                        Captures college events and creates visual content for
                        various platforms, developing skills in photography and
                        videography.
                      </p>
                      <Button variant="outline" size="sm" className="w-full">
                        Join Society
                      </Button>
                    </div>
                  </div>

                  <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="relative h-[150px] rounded-lg overflow-hidden">
                      <img
                        src="/placeholder.svg?height=150&width=200&text=Calligraphy+Exhibition"
                        alt="Calligraphy Exhibition"
                        className="object-cover"
                      />
                    </div>
                    <div className="relative h-[150px] rounded-lg overflow-hidden">
                      <img
                        src="/placeholder.svg?height=150&width=200&text=Painting+Workshop"
                        alt="Painting Workshop"
                        className="object-cover"
                      />
                    </div>
                    <div className="relative h-[150px] rounded-lg overflow-hidden">
                      <img
                        src="/placeholder.svg?height=150&width=200&text=Model+Making"
                        alt="Model Making"
                        className="object-cover"
                      />
                    </div>
                    <div className="relative h-[150px] rounded-lg overflow-hidden">
                      <img
                        src="/placeholder.svg?height=150&width=200&text=Photography+Exhibition"
                        alt="Photography Exhibition"
                        className="object-cover"
                      />
                    </div>
                  </div>
                </Card>
              </TabsContent>

              <TabsContent value="sports">
                <Card className="p-8">
                  <div className="flex items-center mb-6">
                    <Trophy className="h-8 w-8 text-primary mr-3" />
                    <h3 className="text-2xl font-bold">Sports Society</h3>
                  </div>

                  <p className="text-muted-foreground mb-8">
                    The Sports Society promotes physical fitness, teamwork, and
                    healthy competition among students. The college has adequate
                    arrangements for indoor and outdoor sports activities. In
                    addition to the facilities at the campus, students can also
                    access sports facilities at Pakistan Sports Complex.
                  </p>

                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h4 className="text-lg font-bold mb-4">Indoor Sports</h4>
                      <ul className="space-y-3">
                        <li className="flex items-start">
                          <div className="h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center mr-3 mt-1">
                            <ChevronRight className="h-3 w-3 text-primary" />
                          </div>
                          <p className="text-muted-foreground">Table Tennis</p>
                        </li>
                        <li className="flex items-start">
                          <div className="h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center mr-3 mt-1">
                            <ChevronRight className="h-3 w-3 text-primary" />
                          </div>
                          <p className="text-muted-foreground">Badminton</p>
                        </li>
                        <li className="flex items-start">
                          <div className="h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center mr-3 mt-1">
                            <ChevronRight className="h-3 w-3 text-primary" />
                          </div>
                          <p className="text-muted-foreground">Chess</p>
                        </li>
                        <li className="flex items-start">
                          <div className="h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center mr-3 mt-1">
                            <ChevronRight className="h-3 w-3 text-primary" />
                          </div>
                          <p className="text-muted-foreground">Carrom Board</p>
                        </li>
                        <li className="flex items-start">
                          <div className="h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center mr-3 mt-1">
                            <ChevronRight className="h-3 w-3 text-primary" />
                          </div>
                          <p className="text-muted-foreground">E-gaming</p>
                        </li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-lg font-bold mb-4">Outdoor Sports</h4>
                      <ul className="space-y-3">
                        <li className="flex items-start">
                          <div className="h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center mr-3 mt-1">
                            <ChevronRight className="h-3 w-3 text-primary" />
                          </div>
                          <p className="text-muted-foreground">Cricket</p>
                        </li>
                        <li className="flex items-start">
                          <div className="h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center mr-3 mt-1">
                            <ChevronRight className="h-3 w-3 text-primary" />
                          </div>
                          <p className="text-muted-foreground">Football</p>
                        </li>
                        <li className="flex items-start">
                          <div className="h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center mr-3 mt-1">
                            <ChevronRight className="h-3 w-3 text-primary" />
                          </div>
                          <p className="text-muted-foreground">Volleyball</p>
                        </li>
                        <li className="flex items-start">
                          <div className="h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center mr-3 mt-1">
                            <ChevronRight className="h-3 w-3 text-primary" />
                          </div>
                          <p className="text-muted-foreground">Basketball</p>
                        </li>
                        <li className="flex items-start">
                          <div className="h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center mr-3 mt-1">
                            <ChevronRight className="h-3 w-3 text-primary" />
                          </div>
                          <p className="text-muted-foreground">Athletics</p>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="mt-8 p-6 bg-muted/50 rounded-lg">
                    <h4 className="text-lg font-bold mb-4">
                      Recent Achievements
                    </h4>
                    <p className="text-muted-foreground mb-4">
                      Our students participated in sports competitions of
                      various colleges held under the umbrella of Shifa
                      university and have performed exceptionally well.
                    </p>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <div className="h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center mr-3 mt-1">
                          <Trophy className="h-3 w-3 text-primary" />
                        </div>
                        <p className="text-muted-foreground">
                          <span className="font-medium">
                            Table Tennis (boys single):
                          </span>{" "}
                          Winner as well as runner ups
                        </p>
                      </li>
                      <li className="flex items-start">
                        <div className="h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center mr-3 mt-1">
                          <Trophy className="h-3 w-3 text-primary" />
                        </div>
                        <p className="text-muted-foreground">
                          <span className="font-medium">
                            Table-tennis (boys double):
                          </span>{" "}
                          Winner
                        </p>
                      </li>
                      <li className="flex items-start">
                        <div className="h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center mr-3 mt-1">
                          <Trophy className="h-3 w-3 text-primary" />
                        </div>
                        <p className="text-muted-foreground">
                          <span className="font-medium">Futsal:</span> 3rd
                          position
                        </p>
                      </li>
                      <li className="flex items-start">
                        <div className="h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center mr-3 mt-1">
                          <Trophy className="h-3 w-3 text-primary" />
                        </div>
                        <p className="text-muted-foreground">
                          <span className="font-medium">E-gaming:</span> 2nd
                          position
                        </p>
                      </li>
                    </ul>
                  </div>

                  <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="relative h-[150px] rounded-lg overflow-hidden">
                      <img
                        src="/placeholder.svg?height=150&width=200&text=Cricket+Match"
                        alt="Cricket Match"
                        className="object-cover"
                      />
                    </div>
                    <div className="relative h-[150px] rounded-lg overflow-hidden">
                      <img
                        src="/placeholder.svg?height=150&width=200&text=Football+Team"
                        alt="Football Team"
                        className="object-cover"
                      />
                    </div>
                    <div className="relative h-[150px] rounded-lg overflow-hidden">
                      <img
                        src="/placeholder.svg?height=150&width=200&text=Table+Tennis"
                        alt="Table Tennis"
                        className="object-cover"
                      />
                    </div>
                    <div className="relative h-[150px] rounded-lg overflow-hidden">
                      <img
                        src="/placeholder.svg?height=150&width=200&text=Sports+Day"
                        alt="Sports Day"
                        className="object-cover"
                      />
                    </div>
                  </div>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>

      {/* Society Events */}
      <section className="py-16 bg-muted/50">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">
                Upcoming Society Events
              </h2>
              <p className="text-muted-foreground max-w-3xl mx-auto">
                Join us for these exciting events organized by our student
                societies
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <Card className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative h-[200px]">
                  <img
                    src="/placeholder.svg?height=200&width=400&text=Literary+Festival"
                    alt="Literary Festival"
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">
                    Annual Literary Festival
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    A week-long celebration of literature featuring debates,
                    poetry recitations, and creative writing competitions.
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-primary font-medium">
                      May 15-20, 2025
                    </span>
                    <Button variant="outline" size="sm">
                      Learn More
                    </Button>
                  </div>
                </div>
              </Card>

              <Card className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative h-[200px]">
                  <img
                    src="/placeholder.svg?height=200&width=400&text=Art+Exhibition"
                    alt="Art Exhibition"
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">
                    Student Art Exhibition
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    Showcasing the artistic talents of our students through
                    paintings, sketches, calligraphy, and photography.
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-primary font-medium">
                      June 10-12, 2025
                    </span>
                    <Button variant="outline" size="sm">
                      Learn More
                    </Button>
                  </div>
                </div>
              </Card>

              <Card className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative h-[200px]">
                  <img
                    src="/placeholder.svg?height=200&width=400&text=Sports+Tournament"
                    alt="Sports Tournament"
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">
                    Inter-College Sports Tournament
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    Competitive sports events featuring cricket, football, table
                    tennis, and more against other medical colleges.
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-primary font-medium">
                      July 5-15, 2025
                    </span>
                    <Button variant="outline" size="sm">
                      Learn More
                    </Button>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* How to Join */}
      <section className="py-16">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">How to Join a Society</h2>
              <p className="text-muted-foreground max-w-3xl mx-auto">
                Becoming a member of a student society is easy and open to all
                students
              </p>
            </div>

            <Card className="p-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-bold mb-4">Membership Process</h3>
                  <ul className="space-y-4">
                    <li className="flex">
                      <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center mr-4 mt-0.5 flex-shrink-0">
                        <span className="text-primary font-medium">1</span>
                      </div>
                      <p className="text-muted-foreground">
                        <span className="font-medium">Express Interest:</span>{" "}
                        Fill out the society membership form available at the
                        Student Affairs Office or online through the student
                        portal.
                      </p>
                    </li>
                    <li className="flex">
                      <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center mr-4 mt-0.5 flex-shrink-0">
                        <span className="text-primary font-medium">2</span>
                      </div>
                      <p className="text-muted-foreground">
                        <span className="font-medium">Attend Orientation:</span>{" "}
                        Participate in the society orientation session to learn
                        about activities, expectations, and opportunities.
                      </p>
                    </li>
                    <li className="flex">
                      <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center mr-4 mt-0.5 flex-shrink-0">
                        <span className="text-primary font-medium">3</span>
                      </div>
                      <p className="text-muted-foreground">
                        <span className="font-medium">Pay Membership Fee:</span>{" "}
                        Some societies may require a nominal membership fee to
                        cover activity costs.
                      </p>
                    </li>
                    <li className="flex">
                      <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center mr-4 mt-0.5 flex-shrink-0">
                        <span className="text-primary font-medium">4</span>
                      </div>
                      <p className="text-muted-foreground">
                        <span className="font-medium">Get Involved:</span>{" "}
                        Actively participate in society meetings, events, and
                        activities.
                      </p>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-bold mb-4">
                    Leadership Opportunities
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    Each society has various leadership positions that students
                    can apply for, including:
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <div className="h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center mr-3 mt-1">
                        <ChevronRight className="h-3 w-3 text-primary" />
                      </div>
                      <p className="text-muted-foreground">
                        <span className="font-medium">President:</span> Oversees
                        all society activities and represents the society
                      </p>
                    </li>
                    <li className="flex items-start">
                      <div className="h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center mr-3 mt-1">
                        <ChevronRight className="h-3 w-3 text-primary" />
                      </div>
                      <p className="text-muted-foreground">
                        <span className="font-medium">Vice President:</span>{" "}
                        Assists the president and manages specific projects
                      </p>
                    </li>
                    <li className="flex items-start">
                      <div className="h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center mr-3 mt-1">
                        <ChevronRight className="h-3 w-3 text-primary" />
                      </div>
                      <p className="text-muted-foreground">
                        <span className="font-medium">Secretary:</span> Handles
                        communication and record-keeping
                      </p>
                    </li>
                    <li className="flex items-start">
                      <div className="h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center mr-3 mt-1">
                        <ChevronRight className="h-3 w-3 text-primary" />
                      </div>
                      <p className="text-muted-foreground">
                        <span className="font-medium">Treasurer:</span> Manages
                        society finances and budget
                      </p>
                    </li>
                    <li className="flex items-start">
                      <div className="h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center mr-3 mt-1">
                        <ChevronRight className="h-3 w-3 text-primary" />
                      </div>
                      <p className="text-muted-foreground">
                        <span className="font-medium">Event Coordinator:</span>{" "}
                        Plans and organizes society events
                      </p>
                    </li>
                  </ul>
                  <p className="text-muted-foreground mt-4">
                    Elections for society leadership positions are held annually
                    at the beginning of the academic year.
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="md:flex items-center justify-between">
            <div className="mb-6 md:mb-0">
              <h2 className="text-3xl font-bold mb-2">
                Ready to Get Involved?
              </h2>
              <p className="text-primary-foreground/70">
                Join a society today and enhance your college experience
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <Button
                size="lg"
                variant="default"
                className="bg-primary-foreground text-primary hover:bg-primary-foreground/70"
              >
                Join a Society
              </Button>
              <Button
                size="lg"
                variant=""
                className="border-primary-foreground border text-primary-foreground hover:bg-primary-foreground/10"
              >
                Contact Student Affairs
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
