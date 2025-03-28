import {
  Users,
  Phone,
  Mail,
  Building,
  FileText,
  Calendar,
  Clock,
} from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function StudentAffairs() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-16 bg-muted/50 w-full overflow-hidden">
        <div className="container max-w-7xl mx-auto px-4 relative h-full flex flex-col items-center justify-center text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-foreground/20 backdrop-blur-sm mb-4">
            <Users className="h-8 w-8" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-2">
            Student Affairs Department
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl">
            Your first point of contact for all student-related matters and
            support services
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">About Student Affairs</h2>
              <p className="text-muted-foreground max-w-3xl mx-auto">
                The Student Affairs Department is dedicated to enhancing the
                quality of student life and supporting your academic journey
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-muted-foreground mb-6">
                  The Student Affairs Department at HBS Medical & Dental College
                  serves as a bridge between students and the administration,
                  ensuring that students have access to the resources and
                  support they need to succeed academically and personally.
                </p>
                <p className="text-muted-foreground mb-6">
                  Our dedicated team works tirelessly to create a positive and
                  inclusive campus environment where students can thrive. We
                  provide a range of services and support mechanisms to help
                  students navigate their college experience successfully.
                </p>
                <p className="text-muted-foreground">
                  From orientation for new students to graduation ceremonies for
                  outgoing batches, the Student Affairs Department is involved
                  in every aspect of student life at HBS Medical & Dental
                  College.
                </p>
              </div>
              <div className="relative h-[400px] rounded-xl overflow-hidden shadow-xl">
                <img
                  src="https://placehold.co/600x400"
                  alt="Student Affairs Team"
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Services */}
      <section className="py-16 bg-muted/50">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Our Services</h2>
              <p className="text-muted-foreground max-w-3xl mx-auto">
                Comprehensive support services to enhance your academic journey
                and campus life
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <Card className="p-6 hover:shadow-lg transition-shadow">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <FileText className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3">Academic Support</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>Academic advising</li>
                  <li>Study skills workshops</li>
                  <li>Tutoring services</li>
                  <li>Exam preparation support</li>
                  <li>Academic records management</li>
                </ul>
              </Card>

              <Card className="p-6 hover:shadow-lg transition-shadow">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3">Student Welfare</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>Counseling services</li>
                  <li>Health and wellness programs</li>
                  <li>Financial aid guidance</li>
                  <li>Accommodation assistance</li>
                  <li>Conflict resolution</li>
                </ul>
              </Card>

              <Card className="p-6 hover:shadow-lg transition-shadow">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Calendar className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3">
                  Co-curricular Activities
                </h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>Student societies coordination</li>
                  <li>Events and competitions</li>
                  <li>Sports activities</li>
                  <li>Cultural programs</li>
                  <li>Community service initiatives</li>
                </ul>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-muted-foreground max-w-3xl mx-auto">
                Find answers to common questions about student services and
                support
              </p>
            </div>

            <Card className="p-8">
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger className="text-left">
                    How do I request an official transcript?
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="text-muted-foreground">
                      To request an official transcript, you need to fill out
                      the Transcript Request Form available at the Student
                      Affairs Office or downloadable from the student portal.
                      Submit the completed form along with the prescribed fee
                      receipt. Processing typically takes 3-5 working days.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-2">
                  <AccordionTrigger className="text-left">
                    What should I do if I need to take a leave of absence?
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="text-muted-foreground">
                      For a leave of absence, you must submit a formal
                      application to the Student Affairs Department stating the
                      reason and duration of leave. Medical leaves require
                      supporting documentation from a registered medical
                      practitioner. The application will be reviewed by the
                      department and forwarded to the relevant academic
                      committee for approval.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-3">
                  <AccordionTrigger className="text-left">
                    How can I join a student society?
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="text-muted-foreground">
                      To join a student society, you can fill out the society
                      membership form available at the Student Affairs Office or
                      contact the society directly during the membership drive
                      at the beginning of the academic year. Most societies have
                      a nominal membership fee and conduct orientation sessions
                      for new members.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem
                  value="
item-4"
                >
                  <AccordionTrigger className="text-left">
                    What counseling services are available to students?
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="text-muted-foreground">
                      The Student Affairs Department offers confidential
                      counseling services for academic, personal, and emotional
                      concerns. You can schedule an appointment with a counselor
                      by visiting the Student Affairs Office or sending an email
                      to counseling@hbs.edu.pk. All counseling sessions are
                      strictly confidential.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-5">
                  <AccordionTrigger className="text-left">
                    How do I report a grievance or complaint?
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="text-muted-foreground">
                      To report a grievance or complaint, you can fill out the
                      Student Grievance Form available at the Student Affairs
                      Office or submit your complaint via email to
                      studentaffairs@hbs.edu.pk. All complaints are handled
                      confidentially and addressed according to the college's
                      grievance redressal policy.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-6">
                  <AccordionTrigger className="text-left">
                    How can I apply for hostel accommodation?
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="text-muted-foreground">
                      To apply for hostel accommodation, fill out the Hostel
                      Application Form available at the Student Affairs Office.
                      Accommodation is provided on a first-come, first-served
                      basis. The form should be submitted along with the
                      required documents and hostel fee as specified in the
                      application form.
                    </p>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </Card>
          </div>
        </div>
      </section>

      {/* Meet the Team */}
      <section className="py-16 bg-muted/50">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Meet Our Team</h2>
              <p className="text-muted-foreground max-w-3xl mx-auto">
                Dedicated professionals committed to enhancing your college
                experience
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <Card className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative h-[250px]">
                  <img
                    src="https://placehold.co/350x250"
                    alt="Dr. Jamilah Riaz"
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-1">Dr. Jamilah Riaz</h3>
                  <p className="text-primary font-medium mb-2">
                    Director Student Affairs
                  </p>
                  <p className="text-sm text-muted-foreground mb-4">
                    Oversees all student affairs activities and ensures the
                    department's alignment with the college's mission and
                    vision.
                  </p>
                </div>
              </Card>

              <Card className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative h-[250px]">
                  <img
                    src="https://placehold.co/350x250"
                    alt="Mr. Ahmed Khan"
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-1">Mr. Ahmed Khan</h3>
                  <p className="text-primary font-medium mb-2">
                    Student Counselor
                  </p>
                  <p className="text-sm text-muted-foreground mb-4">
                    Provides academic and personal counseling to students,
                    helping them navigate challenges and achieve their goals.
                  </p>
                </div>
              </Card>

              <Card className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative h-[250px]">
                  <img
                    src="https://placehold.co/350x250"
                    alt="Ms. Fatima Ali"
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-1">Ms. Fatima Ali</h3>
                  <p className="text-primary font-medium mb-2">
                    Activities Coordinator
                  </p>
                  <p className="text-sm text-muted-foreground mb-4">
                    Coordinates student societies, events, and extracurricular
                    activities to enhance the campus experience.
                  </p>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
              <p className="text-muted-foreground max-w-3xl mx-auto">
                Reach out to the Student Affairs Department for assistance with
                any student-related matters
              </p>
            </div>

            <Card className="p-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-bold mb-4">Get in Touch</h3>
                  <ul className="space-y-6">
                    <li className="flex items-start">
                      <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center mr-4">
                        <Building className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <p className="font-medium">Office Location</p>
                        <p className="text-muted-foreground">
                          Ground Floor, Main Administrative Block
                        </p>
                      </div>
                    </li>

                    <li className="flex items-start">
                      <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center mr-4">
                        <Mail className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <p className="font-medium">Email</p>
                        <p className="text-muted-foreground">
                          studentaffairs@hbs.edu.pk
                        </p>
                      </div>
                    </li>

                    <li className="flex items-start">
                      <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center mr-4">
                        <Phone className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <p className="font-medium">Phone</p>
                        <p className="text-muted-foreground">
                          +92-51-2243323 Ext. 111
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-bold mb-4">Office Hours</h3>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center mr-4">
                        <Clock className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <p className="font-medium">Regular Hours</p>
                        <p className="text-muted-foreground">
                          Monday - Friday: 9:00 AM - 5:00 PM
                        </p>
                        <p className="text-muted-foreground">
                          Saturday: 9:00 AM - 1:00 PM
                        </p>
                        <p className="text-muted-foreground">Sunday: Closed</p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center mr-4">
                        <Calendar className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <p className="font-medium">Counseling Hours</p>
                        <p className="text-muted-foreground">
                          Monday - Friday: 10:00 AM - 4:00 PM
                        </p>
                        <p className="text-muted-foreground">
                          (By appointment only)
                        </p>
                      </div>
                    </div>
                  </div>

                  <Button className="mt-6 w-full">
                    Schedule an Appointment
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Important Forms */}
      <section className="py-16 bg-muted/50">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Important Forms</h2>
              <p className="text-muted-foreground max-w-3xl mx-auto">
                Download and submit these forms for various student services
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card className="p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-center mb-4">
                  <FileText className="h-6 w-6 text-primary mr-3" />
                  <h3 className="text-lg font-bold">Leave Application</h3>
                </div>
                <p className="text-muted-foreground text-sm mb-4">
                  Use this form to request a leave of absence for medical or
                  personal reasons.
                </p>
                <Button variant="outline" size="sm" className="w-full">
                  Download Form
                </Button>
              </Card>

              <Card className="p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-center mb-4">
                  <FileText className="h-6 w-6 text-primary mr-3" />
                  <h3 className="text-lg font-bold">Transcript Request</h3>
                </div>
                <p className="text-muted-foreground text-sm mb-4">
                  Request official transcripts for applications or
                  record-keeping.
                </p>
                <Button variant="outline" size="sm" className="w-full">
                  Download Form
                </Button>
              </Card>

              <Card className="p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-center mb-4">
                  <FileText className="h-6 w-6 text-primary mr-3" />
                  <h3 className="text-lg font-bold">Hostel Application</h3>
                </div>
                <p className="text-muted-foreground text-sm mb-4">
                  Apply for accommodation in the college hostels.
                </p>
                <Button variant="outline" size="sm" className="w-full">
                  Download Form
                </Button>
              </Card>

              <Card className="p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-center mb-4">
                  <FileText className="h-6 w-6 text-primary mr-3" />
                  <h3 className="text-lg font-bold">Society Registration</h3>
                </div>
                <p className="text-muted-foreground text-sm mb-4">
                  Register for membership in student societies and clubs.
                </p>
                <Button variant="outline" size="sm" className="w-full">
                  Download Form
                </Button>
              </Card>

              <Card className="p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-center mb-4">
                  <FileText className="h-6 w-6 text-primary mr-3" />
                  <h3 className="text-lg font-bold">Grievance Form</h3>
                </div>
                <p className="text-muted-foreground text-sm mb-4">
                  Submit complaints or grievances for resolution.
                </p>
                <Button variant="outline" size="sm" className="w-full">
                  Download Form
                </Button>
              </Card>

              <Card className="p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-center mb-4">
                  <FileText className="h-6 w-6 text-primary mr-3" />
                  <h3 className="text-lg font-bold">Event Proposal</h3>
                </div>
                <p className="text-muted-foreground text-sm mb-4">
                  Propose student events or activities for approval.
                </p>
                <Button variant="outline" size="sm" className="w-full">
                  Download Form
                </Button>
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
              <h2 className="text-3xl font-bold mb-2">Need Assistance?</h2>
              <p className="text-primary-foreground/70">
                Our Student Affairs team is here to help you navigate your
                college journey
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
                Schedule an Appointment
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
