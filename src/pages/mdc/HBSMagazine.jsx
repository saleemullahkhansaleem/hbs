import { BookOpen, Download, Globe, FileText } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function HBSMagazine() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-16 bg-muted/50 w-full overflow-hidden">
        <div className="container max-w-7xl mx-auto px-4 relative h-full flex flex-col items-center justify-center text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-foreground/20 backdrop-blur-sm mb-4">
            <BookOpen className="h-8 w-8" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-2">HBS Magazine</h1>
          <p className="text-xl text-muted-foreground max-w-2xl">
            Explore our student-led publications showcasing creativity,
            research, and achievements
          </p>
        </div>
      </section>

      {/* Magazine Overview */}
      <section className="py-16">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">About Our Magazine</h2>
              <p className="text-muted-foreground max-w-3xl mx-auto">
                The HBS Magazine is a platform for students to showcase their
                literary talents, share research findings, and document college
                events and achievements
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <Card className="p-6 hover:shadow-lg transition-shadow">
                <div className="flex flex-col items-center">
                  <div className="relative h-[300px] w-[200px] mb-4">
                    <img
                      src="/placeholder.svg?height=300&width=200&text=Urdu+Magazine"
                      alt="HBS Urdu Magazine"
                      className="object-cover rounded-lg"
                    />
                  </div>
                  <h3 className="text-xl font-bold mb-2">URDU VERSION</h3>
                  <p className="text-muted-foreground text-center mb-4">
                    Our Urdu magazine features poetry, articles, and creative
                    writing in Urdu, celebrating our cultural heritage and
                    literary traditions.
                  </p>
                  <Button className="mt-2" variant="outline">
                    <Download className="mr-2 h-4 w-4" /> Download Magazine
                  </Button>
                </div>
              </Card>

              <Card className="p-6 hover:shadow-lg transition-shadow">
                <div className="flex flex-col items-center">
                  <div className="relative h-[300px] w-[200px] mb-4">
                    <img
                      src="/placeholder.svg?height=300&width=200&text=English+Magazine"
                      alt="HBS English Magazine"
                      className="object-cover rounded-lg"
                    />
                  </div>
                  <h3 className="text-xl font-bold mb-2">ENGLISH VERSION</h3>
                  <p className="text-muted-foreground text-center mb-4">
                    The English edition includes research articles, creative
                    writing, event reports, and interviews with faculty and
                    alumni.
                  </p>
                  <Button className="mt-2" variant="outline">
                    <Download className="mr-2 h-4 w-4" /> Download Magazine
                  </Button>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Magazine Features */}
      <section className="py-16 bg-muted/50">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Magazine Features</h2>
              <p className="text-muted-foreground max-w-3xl mx-auto">
                Discover the diverse content featured in our student
                publications
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <Card className="p-6 hover:shadow-lg transition-shadow">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <FileText className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3">Articles & Essays</h3>
                <p className="text-muted-foreground">
                  Thought-provoking articles and essays on medical topics,
                  student life, and current affairs written by students and
                  faculty.
                </p>
              </Card>

              <Card className="p-6 hover:shadow-lg transition-shadow">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <BookOpen className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3">
                  Poetry & Creative Writing
                </h3>
                <p className="text-muted-foreground">
                  Original poetry, short stories, and creative pieces that
                  showcase the literary talents of our students.
                </p>
              </Card>

              <Card className="p-6 hover:shadow-lg transition-shadow">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Globe className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3">Research Highlights</h3>
                <p className="text-muted-foreground">
                  Summaries of student and faculty research projects,
                  highlighting innovative work in medical and dental fields.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Previous Editions */}
      <section className="py-16">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Previous Editions</h2>
              <p className="text-muted-foreground max-w-3xl mx-auto">
                Browse through our archive of past magazine issues
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[2024, 2023, 2022, 2021].map((year) => (
                <Card
                  key={year}
                  className="overflow-hidden hover:shadow-lg transition-shadow"
                >
                  <div className="relative h-[200px]">
                    <img
                      src={`/placeholder.svg?height=200&width=150&text=Edition+${year}`}
                      alt={`Magazine Edition ${year}`}
                      className="object-cover"
                    />
                  </div>
                  <div className="p-4 text-center">
                    <h3 className="font-bold mb-2">{year} Edition</h3>
                    <Button size="sm" variant="outline" className="w-full">
                      <Download className="mr-2 h-3 w-3" /> Download
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Editorial Team */}
      <section className="py-16 bg-muted/50">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Editorial Team</h2>
              <p className="text-muted-foreground max-w-3xl mx-auto">
                Meet the dedicated students and faculty who bring the HBS
                Magazine to life
              </p>
            </div>

            <Card className="p-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-bold mb-4">Student Editors</h3>
                  <ul className="space-y-4">
                    <li className="flex items-center">
                      <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center mr-4">
                        <span className="text-primary font-medium">AK</span>
                      </div>
                      <div>
                        <p className="font-medium">Ahmad Khan</p>
                        <p className="text-sm text-muted-foreground">
                          Editor-in-Chief
                        </p>
                      </div>
                    </li>
                    <li className="flex items-center">
                      <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center mr-4">
                        <span className="text-primary font-medium">SA</span>
                      </div>
                      <div>
                        <p className="font-medium">Sana Ahmed</p>
                        <p className="text-sm text-muted-foreground">
                          Managing Editor
                        </p>
                      </div>
                    </li>
                    <li className="flex items-center">
                      <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center mr-4">
                        <span className="text-primary font-medium">MH</span>
                      </div>
                      <div>
                        <p className="font-medium">Muhammad Hassan</p>
                        <p className="text-sm text-muted-foreground">
                          Creative Director
                        </p>
                      </div>
                    </li>
                    <li className="flex items-center">
                      <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center mr-4">
                        <span className="text-primary font-medium">FA</span>
                      </div>
                      <div>
                        <p className="font-medium">Fatima Ali</p>
                        <p className="text-sm text-muted-foreground">
                          Content Editor
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-bold mb-4">Faculty Advisors</h3>
                  <ul className="space-y-4">
                    <li className="flex items-center">
                      <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center mr-4">
                        <span className="text-primary font-medium">DR</span>
                      </div>
                      <div>
                        <p className="font-medium">Dr. Rashid Ahmed</p>
                        <p className="text-sm text-muted-foreground">
                          Faculty Advisor
                        </p>
                      </div>
                    </li>
                    <li className="flex items-center">
                      <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center mr-4">
                        <span className="text-primary font-medium">DK</span>
                      </div>
                      <div>
                        <p className="font-medium">Dr. Khadija Fatima</p>
                        <p className="text-sm text-muted-foreground">
                          Editorial Advisor
                        </p>
                      </div>
                    </li>
                    <li className="flex items-center">
                      <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center mr-4">
                        <span className="text-primary font-medium">DS</span>
                      </div>
                      <div>
                        <p className="font-medium">Dr. Saira Jawed</p>
                        <p className="text-sm text-muted-foreground">
                          Content Advisor
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Contribute Section */}
      <section className="py-16">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">
                Contribute to the Magazine
              </h2>
              <p className="text-muted-foreground max-w-3xl mx-auto">
                Share your writing, artwork, or photography in the next edition
                of the HBS Magazine
              </p>
            </div>

            <Card className="p-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-bold mb-4">
                    Submission Guidelines
                  </h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <div className="h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center mr-3 mt-1">
                        <FileText className="h-3 w-3 text-primary" />
                      </div>
                      <p className="text-muted-foreground">
                        <span className="font-medium">Articles:</span> 800-1200
                        words on medical, academic, or general interest topics
                      </p>
                    </li>
                    <li className="flex items-start">
                      <div className="h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center mr-3 mt-1">
                        <FileText className="h-3 w-3 text-primary" />
                      </div>
                      <p className="text-muted-foreground">
                        <span className="font-medium">Poetry:</span> Maximum 3
                        poems per submission
                      </p>
                    </li>
                    <li className="flex items-start">
                      <div className="h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center mr-3 mt-1">
                        <FileText className="h-3 w-3 text-primary" />
                      </div>
                      <p className="text-muted-foreground">
                        <span className="font-medium">Artwork:</span>{" "}
                        High-resolution images (300 DPI minimum)
                      </p>
                    </li>
                    <li className="flex items-start">
                      <div className="h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center mr-3 mt-1">
                        <FileText className="h-3 w-3 text-primary" />
                      </div>
                      <p className="text-muted-foreground">
                        <span className="font-medium">Photography:</span>{" "}
                        High-quality digital images with captions
                      </p>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-bold mb-4">How to Submit</h3>
                  <p className="text-muted-foreground mb-4">
                    Send your submissions to{" "}
                    <span className="text-primary">magazine@hbs.edu.pk</span>{" "}
                    with the subject line "Magazine Submission - [Your Name]".
                  </p>
                  <p className="text-muted-foreground mb-4">
                    Include a brief bio (50-100 words) and your contact
                    information with your submission.
                  </p>
                  <p className="text-muted-foreground">
                    Deadline for the next issue:{" "}
                    <span className="font-medium">September 30, 2025</span>
                  </p>
                  <Button className="mt-6">Submission Guidelines PDF</Button>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Share Your Voice</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join the magazine team or contribute your work to the next edition
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button
              size="lg"
              className="bg-primary-foreground text-primary hover:bg-primary-foreground/70"
            >
              Join the Editorial Team
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white/10"
            >
              Submit Your Work
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
