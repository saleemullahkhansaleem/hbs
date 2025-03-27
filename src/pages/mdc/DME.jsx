import {
  BookOpen,
  Users,
  FileText,
  Award,
  Microscope,
  ChevronRight,
  Mail,
  Phone,
} from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function DME() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-16 bg-muted w-full overflow-hidden">
        <div className="container max-w-7xl mx-auto px-4 relative h-full flex flex-col items-center justify-center text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-foreground/20 backdrop-blur-sm mb-4">
            <BookOpen className="h-8 w-8" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-2">
            Department of Medical & Dental Education
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl">
            Excellence in Medical Education, Research, and Innovation
          </p>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-16">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-6">
                DEPARTMENT OF MEDICAL & DENTAL EDUCATION AND RESEARCH
              </h2>
              <div className="w-20 h-1 bg-primary mx-auto mb-8"></div>
            </div>

            <div className="prose prose-lg max-w-none text-muted-foreground">
              <p>
                Department of Medical & Dental Education at HBS Medical & Dental
                College aim to create a dynamic, conducive & quality education
                environment, evolving with value added technology and current
                educational practices. Since its establishment in 2017, it has
                rendered valuable services to create a center fostering
                excellence in teaching, learning, and evaluation for both
                faculty & students in the institution. It plays a dynamic role
                in creating professionals who can address societal needs to the
                best of their ability.
              </p>
              <p>
                The Department of Medical & Dental Education operates through
                Curriculum Development Committee, Program Evaluation &
                Assessment Committee, Research & Development Committee, Faculty
                Development Committee, Mentoring and many more.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Committees Section */}
      <section className="py-16 bg-muted/50">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Our Committees</h2>
              <p className="text-muted-foreground max-w-3xl mx-auto">
                The DME operates through various committees to ensure excellence
                in medical and dental education
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <Card className="p-6 hover:shadow-lg transition-shadow">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <FileText className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3">
                  Curriculum Development
                </h3>
                <p className="text-muted-foreground mb-4">
                  Facilitates in curriculum planning, implementation, evaluation
                  and revision in order to ensure achievement of educational
                  outcomes.
                </p>
              </Card>

              <Card className="p-6 hover:shadow-lg transition-shadow">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Award className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3">
                  Program Evaluation & Assessment
                </h3>
                <p className="text-muted-foreground mb-4">
                  Maintains quality by means of program evaluation through
                  effective feedbacks and implements various assessment methods
                  including MCQ training, OSPE/OSCE.
                </p>
              </Card>

              <Card className="p-6 hover:shadow-lg transition-shadow">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Microscope className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3">
                  Research & Development
                </h3>
                <p className="text-muted-foreground mb-4">
                  Promotes research culture among faculty and students, focusing
                  on critical thinking and innovation in medical and dental
                  education.
                </p>
              </Card>

              <Card className="p-6 hover:shadow-lg transition-shadow">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3">Faculty Development</h3>
                <p className="text-muted-foreground mb-4">
                  Organizes seminars, symposia, workshops and meetings to train
                  faculty in implementing curricula and innovative teaching
                  methodologies.
                </p>
              </Card>
            </div>

            <div className="mt-12 bg-background p-8 rounded-lg border">
              <h3 className="text-xl font-bold mb-4">Key Functions</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center mr-3 mt-1">
                    <ChevronRight className="h-3 w-3 text-primary" />
                  </div>
                  <p className="text-muted-foreground">
                    Training of the faculty to implement curricula, by
                    facilitating continuously educational activities in the form
                    of seminars, symposia, workshops and meetings.
                  </p>
                </li>
                <li className="flex items-start">
                  <div className="h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center mr-3 mt-1">
                    <ChevronRight className="h-3 w-3 text-primary" />
                  </div>
                  <p className="text-muted-foreground">
                    Training of the medical and dental students to have
                    leadership skills, develop critical thinking, focus on
                    research, learning of professionalism and ethics.
                  </p>
                </li>
                <li className="flex items-start">
                  <div className="h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center mr-3 mt-1">
                    <ChevronRight className="h-3 w-3 text-primary" />
                  </div>
                  <p className="text-muted-foreground">
                    Provision of educational and career counseling services for
                    students through mentoring program.
                  </p>
                </li>
                <li className="flex items-start">
                  <div className="h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center mr-3 mt-1">
                    <ChevronRight className="h-3 w-3 text-primary" />
                  </div>
                  <p className="text-muted-foreground">
                    Facilitate in planning, implementation and evaluation of
                    innovative teaching, learning and assessment methodologies.
                  </p>
                </li>
              </ul>
              <p className="mt-6 text-muted-foreground">
                DME targets to meet the evolving educational needs of the health
                professionals by developing a pool of trained faculty members
                conversant with changes in curriculum practices,
                learner-centered approaches, and structured assessment process.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Members Section */}
      <section className="py-16">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">OUR TEAM MEMBERS</h2>
              <p className="text-muted-foreground max-w-3xl mx-auto">
                Meet our dedicated team of professionals committed to excellence
                in medical and dental education
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Director */}
              <Card className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-square relative">
                  <img
                    src="https://placehold.co/400"
                    alt="DR. JAMILAH RIAZ JANJUA"
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-1">
                    DR. JAMILAH RIAZ JANJUA
                  </h3>
                  <p className="text-primary font-medium mb-2">Director DME</p>
                  <p className="text-sm text-muted-foreground mb-4">
                    MBBS (Pb), DGO (Ireland), MHPE (PK)
                  </p>
                </div>
              </Card>

              {/* Assistant Director */}
              <Card className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-square relative">
                  <img
                    src="https://placehold.co/400"
                    alt="DR. SARAH ALI"
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-1">DR. SARAH ALI</h3>
                  <p className="text-primary font-medium mb-2">
                    Assistant Director DME
                  </p>
                  <p className="text-sm text-muted-foreground mb-4">
                    BDS, MHP, MHPE
                  </p>
                </div>
              </Card>

              {/* Assistant Professor */}
              <Card className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-square relative">
                  <img
                    src="https://placehold.co/400"
                    alt="Dr. ANBREEN AZIZ"
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-1">Dr. ANBREEN AZIZ</h3>
                  <p className="text-primary font-medium mb-2">
                    Assistant Professor / Assistant Director
                  </p>
                  <p className="text-sm text-muted-foreground mb-4">
                    BDS, MHPE
                  </p>
                </div>
              </Card>

              {/* Research Officer 1 */}
              <Card className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-square relative">
                  <img
                    src="https://placehold.co/400"
                    alt="DR. SAQIB KHAN"
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-1">DR. SAQIB KHAN</h3>
                  <p className="text-primary font-medium mb-2">
                    RESEARCH OFFICER
                  </p>
                  <p className="text-sm text-muted-foreground mb-4">
                    Pharm-D, Ph.D (Pharmacy)
                  </p>
                </div>
              </Card>

              {/* Research Officer 2 */}
              <Card className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-square relative">
                  <img
                    src="https://placehold.co/400"
                    alt="DR. FARHAN"
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-1">DR. FARHAN</h3>
                  <p className="text-primary font-medium mb-2">
                    RESEARCH OFFICER
                  </p>
                  <p className="text-sm text-muted-foreground mb-4">
                    Ph.D. Microbiology (China), M.Phil. Microbiology (PK)
                  </p>
                </div>
              </Card>

              {/* Demonstrator 1 */}
              <Card className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-square relative">
                  <img
                    src="https://placehold.co/400"
                    alt="DR. SYED TEHSEEN HAIDER"
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-1">
                    DR. SYED TEHSEEN HAIDER
                  </h3>
                  <p className="text-primary font-medium mb-2">DEMONSTRATOR</p>
                  <p className="text-sm text-muted-foreground mb-4">MBBS</p>
                </div>
              </Card>

              {/* Demonstrator 2 */}
              <Card className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-square relative">
                  <img
                    src="https://placehold.co/400"
                    alt="DR. SAJEEL SAEED"
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-1">DR. SAJEEL SAEED</h3>
                  <p className="text-primary font-medium mb-2">DEMONSTRATOR</p>
                  <p className="text-sm text-muted-foreground mb-4">MBBS</p>
                </div>
              </Card>

              {/* Demonstrator 3 */}
              <Card className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-square relative">
                  <img
                    src="https://placehold.co/400"
                    alt="Dr. ILSA NAEEM"
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-1">Dr. ILSA NAEEM</h3>
                  <p className="text-primary font-medium mb-2">DEMONSTRATOR</p>
                  <p className="text-sm text-muted-foreground mb-4">BDS</p>
                </div>
              </Card>

              {/* Demonstrator 4 */}
              <Card className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-square relative">
                  <img
                    src="https://placehold.co/400"
                    alt="Dr. SAMAN SULTAN"
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-1">Dr. SAMAN SULTAN</h3>
                  <p className="text-primary font-medium mb-2">DEMONSTRATOR</p>
                  <p className="text-sm text-muted-foreground mb-4">BDS</p>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-muted/50">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">
                Contact the Department
              </h2>
              <p className="text-muted-foreground max-w-3xl mx-auto">
                For inquiries related to medical education, research
                opportunities, or faculty development
              </p>
            </div>

            <Card className="p-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-bold mb-4">Get in Touch</h3>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center mr-4">
                        <Mail className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <p className="font-medium">Email</p>
                        <p className="text-muted-foreground">dme@hbs.edu.pk</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center mr-4">
                        <Phone className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <p className="font-medium">Phone</p>
                        <p className="text-muted-foreground">
                          +92-51-2243323 Ext. 145
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-bold mb-4">Office Hours</h3>
                  <p className="text-muted-foreground mb-4">
                    Our department is open Monday through Friday from 9:00 AM to
                    5:00 PM. Faculty members are available for consultation by
                    appointment.
                  </p>
                  <Button className="mt-2">Schedule a Meeting</Button>
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
                Join Our Educational Initiatives
              </h2>
              <p className="text-primary-foreground/90">
                Participate in workshops, seminars, and research opportunities
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <Button
                size="lg"
                variant="default"
                className="bg-primary-foreground text-primary hover:bg-primary-foreground/90"
              >
                Upcoming Workshops
              </Button>
              <Button
                size="lg"
                variant=""
                className="border-primary-foreground border text-primary-foreground hover:bg-primary-foreground/10"
              >
                Research Opportunities
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
