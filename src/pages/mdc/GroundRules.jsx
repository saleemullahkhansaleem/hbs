import {
  AlertTriangle,
  CheckCircle,
  Clock,
  Ban,
  Users,
  FileText,
  Shirt,
} from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function GroundRules() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-16 bg-muted/50 w-full overflow-hidden">
        <div className="container max-w-7xl mx-auto px-4 relative h-full flex flex-col items-center justify-center text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-foreground/20 backdrop-blur-sm mb-4">
            <FileText className="h-8 w-8" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-2">
            Code of Conduct
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl">
            Ground rules that help maintain a professional and ethical
            environment at HBS Medical & Dental College
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">
                Our Commitment to Excellence
              </h2>
              <p className="text-muted-foreground max-w-3xl mx-auto">
                At HBS Medical & Dental College, we are committed to creating a
                high professional and strong ethical culture to achieve
                excellence in academics
              </p>
            </div>

            <Card className="p-8">
              <div className="flex items-start mb-6">
                <AlertTriangle className="h-6 w-6 text-primary mr-3 mt-1 flex-shrink-0" />
                <p className="text-muted-foreground">
                  The college administration is committed to create a high
                  professional and strong ethical culture to achieve excellence
                  in academics. The college faculty and staff is struggling to
                  build your bright future and seek your active participation
                  for the successful implementation of the following code of
                  conduct:
                </p>
              </div>

              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger className="text-left">
                    <div className="flex items-center">
                      <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center mr-3">
                        <Clock className="h-4 w-4 text-primary" />
                      </div>
                      <span className="font-medium">Punctuality</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="text-muted-foreground pl-9">
                      Punctuality is a key to success of all activities carried
                      out in an academic institution. Therefore, all students
                      are strictly required to reach at campus exactly at 8:00
                      AM. No student in any circumstances will be allowed to
                      enter class after 8:15 AM. Those arriving later then 8:15
                      AM. will be marked absent for that period.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-2">
                  <AccordionTrigger className="text-left">
                    <div className="flex items-center">
                      <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center mr-3">
                        <Ban className="h-4 w-4 text-primary" />
                      </div>
                      <span className="font-medium">Smoke Free Campus</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="text-muted-foreground pl-9">
                      HBS Medical College is a "SMOKE FREE CAMPUS" and smoking
                      is strictly prohibited in the campus premises. A penalty
                      will be imposed on any student found guilty of smoking in
                      the college premises including lawns and parking areas.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-3">
                  <AccordionTrigger className="text-left">
                    <div className="flex items-center">
                      <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center mr-3">
                        <Users className="h-4 w-4 text-primary" />
                      </div>
                      <span className="font-medium">Ethical Conduct</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="text-muted-foreground pl-9">
                      In order to pursue and preserve strong ethical and
                      cultural traditions, the college authorities will take
                      serious action on isolated meetings between boys & girls,
                      objectionable gestures, hand shaking and physical contact
                      with opposite gender. Those involved will be presented
                      before the college disciplinary committee which will
                      recommend appropriate action.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-4">
                  <AccordionTrigger className="text-left">
                    <div className="flex items-center">
                      <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center mr-3">
                        <AlertTriangle className="h-4 w-4 text-primary" />
                      </div>
                      <span className="font-medium">Appropriate Behavior</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="text-muted-foreground pl-9">
                      It is absolutely prohibited to shout, whistle and behave
                      immorally and / or obnoxiously. Appropriate action will be
                      taken in this regard.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-5">
                  <AccordionTrigger className="text-left">
                    <div className="flex items-center">
                      <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center mr-3">
                        <CheckCircle className="h-4 w-4 text-primary" />
                      </div>
                      <span className="font-medium">
                        Respect for Faculty and Staff
                      </span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="text-muted-foreground pl-9">
                      There is a zero tolerance for misbehaving with a teacher
                      or staff member.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-6">
                  <AccordionTrigger className="text-left">
                    <div className="flex items-center">
                      <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center mr-3">
                        <Ban className="h-4 w-4 text-primary" />
                      </div>
                      <span className="font-medium">Political Activities</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="text-muted-foreground pl-9">
                      Promoting sectarianism and partaking in any political
                      activity in any form is strictly prohibited.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-7">
                  <AccordionTrigger className="text-left">
                    <div className="flex items-center">
                      <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center mr-3">
                        <Shirt className="h-4 w-4 text-primary" />
                      </div>
                      <span className="font-medium">Dress Code</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="text-muted-foreground pl-9">
                      It is obligatory for all students to wear neat and tidy
                      college uniform.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-8">
                  <AccordionTrigger className="text-left">
                    <div className="flex items-center">
                      <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center mr-3">
                        <Ban className="h-4 w-4 text-primary" />
                      </div>
                      <span className="font-medium">Accessories</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="text-muted-foreground pl-9">
                      Students are not allowed to wear bangles and colorful
                      jewelry or bands during college hours.
                    </p>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </Card>
          </div>
        </div>
      </section>

      {/* Disciplinary Procedures */}
      <section className="py-16 bg-muted/50">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">
                Disciplinary Procedures
              </h2>
              <p className="text-muted-foreground max-w-3xl mx-auto">
                Understanding the consequences of code of conduct violations
              </p>
            </div>

            <Card className="p-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-bold mb-4">
                    Disciplinary Committee
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    The college has a dedicated Disciplinary Committee that
                    oversees the implementation of the code of conduct and
                    addresses any violations. The committee consists of faculty
                    members and administrative staff who are committed to
                    maintaining a positive and productive academic environment.
                  </p>
                  <p className="text-muted-foreground">
                    The committee follows a fair and transparent process when
                    addressing disciplinary issues, ensuring that all students
                    have the opportunity to present their case before any
                    decisions are made.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold mb-4">
                    Violation Consequences
                  </h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <div className="h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center mr-3 mt-1">
                        <CheckCircle className="h-3 w-3 text-primary" />
                      </div>
                      <p className="text-muted-foreground">
                        <span className="font-medium">Verbal Warning:</span> For
                        minor first-time violations
                      </p>
                    </li>
                    <li className="flex items-start">
                      <div className="h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center mr-3 mt-1">
                        <CheckCircle className="h-3 w-3 text-primary" />
                      </div>
                      <p className="text-muted-foreground">
                        <span className="font-medium">Written Warning:</span>{" "}
                        For repeated minor violations or moderate violations
                      </p>
                    </li>
                    <li className="flex items-start">
                      <div className="h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center mr-3 mt-1">
                        <CheckCircle className="h-3 w-3 text-primary" />
                      </div>
                      <p className="text-muted-foreground">
                        <span className="font-medium">Probation:</span> For
                        serious violations or persistent minor violations
                      </p>
                    </li>
                    <li className="flex items-start">
                      <div className="h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center mr-3 mt-1">
                        <CheckCircle className="h-3 w-3 text-primary" />
                      </div>
                      <p className="text-muted-foreground">
                        <span className="font-medium">Suspension:</span> For
                        major violations or violations during probation
                      </p>
                    </li>
                    <li className="flex items-start">
                      <div className="h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center mr-3 mt-1">
                        <CheckCircle className="h-3 w-3 text-primary" />
                      </div>
                      <p className="text-muted-foreground">
                        <span className="font-medium">Expulsion:</span> For the
                        most serious violations or repeated major violations
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Uniform Guidelines */}
      <section className="py-16">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Uniform Guidelines</h2>
              <p className="text-muted-foreground max-w-3xl mx-auto">
                Detailed information about the college uniform requirements
              </p>
            </div>

            <Card className="p-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-bold mb-4">Male Students</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <div className="h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center mr-3 mt-1">
                        <CheckCircle className="h-3 w-3 text-primary" />
                      </div>
                      <p className="text-muted-foreground">
                        White shirt with college logo
                      </p>
                    </li>
                    <li className="flex items-start">
                      <div className="h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center mr-3 mt-1">
                        <CheckCircle className="h-3 w-3 text-primary" />
                      </div>
                      <p className="text-muted-foreground">
                        Navy blue trousers
                      </p>
                    </li>
                    <li className="flex items-start">
                      <div className="h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center mr-3 mt-1">
                        <CheckCircle className="h-3 w-3 text-primary" />
                      </div>
                      <p className="text-muted-foreground">
                        Navy blue tie with college logo
                      </p>
                    </li>
                    <li className="flex items-start">
                      <div className="h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center mr-3 mt-1">
                        <CheckCircle className="h-3 w-3 text-primary" />
                      </div>
                      <p className="text-muted-foreground">
                        Black formal shoes
                      </p>
                    </li>
                    <li className="flex items-start">
                      <div className="h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center mr-3 mt-1">
                        <CheckCircle className="h-3 w-3 text-primary" />
                      </div>
                      <p className="text-muted-foreground">
                        White lab coat for laboratory sessions
                      </p>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-bold mb-4">Female Students</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <div className="h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center mr-3 mt-1">
                        <CheckCircle className="h-3 w-3 text-primary" />
                      </div>
                      <p className="text-muted-foreground">
                        White shalwar kameez with college logo
                      </p>
                    </li>
                    <li className="flex items-start">
                      <div className="h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center mr-3 mt-1">
                        <CheckCircle className="h-3 w-3 text-primary" />
                      </div>
                      <p className="text-muted-foreground">Navy blue dupatta</p>
                    </li>
                    <li className="flex items-start">
                      <div className="h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center mr-3 mt-1">
                        <CheckCircle className="h-3 w-3 text-primary" />
                      </div>
                      <p className="text-muted-foreground">
                        Black formal shoes
                      </p>
                    </li>
                    <li className="flex items-start">
                      <div className="h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center mr-3 mt-1">
                        <CheckCircle className="h-3 w-3 text-primary" />
                      </div>
                      <p className="text-muted-foreground">
                        White lab coat for laboratory sessions
                      </p>
                    </li>
                    <li className="flex items-start">
                      <div className="h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center mr-3 mt-1">
                        <CheckCircle className="h-3 w-3 text-primary" />
                      </div>
                      <p className="text-muted-foreground">
                        Minimal jewelry and makeup
                      </p>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="mt-8 p-6 bg-muted/50 rounded-lg">
                <h4 className="text-lg font-bold mb-4">Important Notes</h4>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center mr-3 mt-1">
                      <AlertTriangle className="h-3 w-3 text-primary" />
                    </div>
                    <p className="text-muted-foreground">
                      ID cards must be worn visibly at all times while on campus
                    </p>
                  </li>
                  <li className="flex items-start">
                    <div className="h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center mr-3 mt-1">
                      <AlertTriangle className="h-3 w-3 text-primary" />
                    </div>
                    <p className="text-muted-foreground">
                      Uniforms should be clean, pressed, and in good condition
                    </p>
                  </li>
                  <li className="flex items-start">
                    <div className="h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center mr-3 mt-1">
                      <AlertTriangle className="h-3 w-3 text-primary" />
                    </div>
                    <p className="text-muted-foreground">
                      Students not in proper uniform may be denied entry to
                      classes or examinations
                    </p>
                  </li>
                </ul>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Academic Integrity */}
      <section className="py-16 bg-muted/50">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Academic Integrity</h2>
              <p className="text-muted-foreground max-w-3xl mx-auto">
                Our commitment to honesty and ethical conduct in academic
                pursuits
              </p>
            </div>

            <Card className="p-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-bold mb-4">Academic Honesty</h3>
                  <p className="text-muted-foreground mb-4">
                    HBS Medical & Dental College is committed to maintaining the
                    highest standards of academic integrity. Students are
                    expected to complete their academic work honestly and
                    ethically, without engaging in plagiarism, cheating, or
                    other forms of academic dishonesty.
                  </p>
                  <p className="text-muted-foreground">
                    Academic dishonesty undermines the educational process and
                    is taken very seriously by the college administration.
                    Students found engaging in such practices will face
                    disciplinary action.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold mb-4">
                    Prohibited Practices
                  </h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <div className="h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center mr-3 mt-1">
                        <Ban className="h-3 w-3 text-primary" />
                      </div>
                      <p className="text-muted-foreground">
                        <span className="font-medium">Plagiarism:</span> Using
                        someone else's work without proper attribution
                      </p>
                    </li>
                    <li className="flex items-start">
                      <div className="h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center mr-3 mt-1">
                        <Ban className="h-3 w-3 text-primary" />
                      </div>
                      <p className="text-muted-foreground">
                        <span className="font-medium">Cheating:</span> Using
                        unauthorized materials during exams or assignments
                      </p>
                    </li>
                    <li className="flex items-start">
                      <div className="h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center mr-3 mt-1">
                        <Ban className="h-3 w-3 text-primary" />
                      </div>
                      <p className="text-muted-foreground">
                        <span className="font-medium">Fabrication:</span>{" "}
                        Falsifying data or information
                      </p>
                    </li>
                    <li className="flex items-start">
                      <div className="h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center mr-3 mt-1">
                        <Ban className="h-3 w-3 text-primary" />
                      </div>
                      <p className="text-muted-foreground">
                        <span className="font-medium">Collusion:</span>{" "}
                        Unauthorized collaboration on assignments
                      </p>
                    </li>
                    <li className="flex items-start">
                      <div className="h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center mr-3 mt-1">
                        <Ban className="h-3 w-3 text-primary" />
                      </div>
                      <p className="text-muted-foreground">
                        <span className="font-medium">Impersonation:</span>{" "}
                        Having someone else take an exam or complete work on
                        your behalf
                      </p>
                    </li>
                  </ul>
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
                Questions About Our Code of Conduct?
              </h2>
              <p className="text-primary-foreground/70">
                Contact the Student Affairs Department for clarification or
                guidance
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <Button
                size="lg"
                variant="default"
                className="bg-primary-foreground text-primary hover:bg-primary-foreground/70"
              >
                Contact Student Affairs
              </Button>
              <Button
                size="lg"
                variant=""
                className="border-primary-foreground border text-primary-foreground hover:bg-primary-foreground/10"
              >
                Download Full Guidelines
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
