import {
  Users,
  Award,
  CheckCircle,
  Search,
  Mail,
  Phone,
  MapPin,
  ChevronRight,
} from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { SecondaryHeader } from "@/components";
import { Badge } from "@/components/ui/badge";

export default function Careers() {
  return (
    <div className="min-h-screen ">
      <SecondaryHeader
        title="Join Our Team"
        description="We are always looking out for skilled employees to help us deliver exceptional healthcare"
      />

      {/* Main Content */}
      <section className="py-16 ">
        <div className="container max-w-7xl mx-auto px-4 md:px-0">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary mb-4">
                Careers at HBS
              </div>
              <h2 className="text-3xl font-bold mb-6">
                Join Our Healthcare Mission
              </h2>
              <p className="text-muted-foreground mb-4">
                The Talent Acquisition division of the Office of Human Resources
                hires qualified candidates to fill positions which contribute to
                the overall strategic success of HBS. Hiring staff "for fit"
                makes significant contributions to HBS's overall mission.
              </p>
              <p className="text-muted-foreground mb-4">
                HBS is committed to selection and hiring procedures that are
                fair, consistent, and in compliance with all applicable laws and
                regulations. To this end, the HBS supports a carefully planned
                and articulated hiring policy to be followed by all entities.
              </p>
              <p className="text-muted-foreground mb-4">
                Persons interested in applying for positions must do so by the
                closing date on the position announcement.
              </p>
              <div className="p-4 bg-muted border-l-4 border-primary rounded mt-6">
                <p className="text-muted-foreground text-sm">
                  HBS does not discriminate on the basis of race, color,
                  national and ethnic origin, sex, marital status, religion, or
                  disability. Inquiries regarding provisions for persons with
                  disabilities, equal employment opportunity and Title should be
                  directed to the Human Resources Officer at{" "}
                  <a
                    href="mailto:hr.inq@hbs.edu.pk"
                    className="text-primary hover:underline"
                  >
                    hr.inq@hbs.edu.pk
                  </a>
                  .
                </p>
              </div>
            </div>
            <div className="relative h-[400px] rounded-xl overflow-hidden shadow-xl">
              <img
                src="/images/careers.webp"
                alt="Healthcare professionals at HBS"
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why Join Us */}
      <section className="py-16 bg-muted">
        <div className="container max-w-7xl mx-auto px-4 md:px-0">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold mb-4">Why Join HBS?</h2>
            <p className="text-muted-foreground">
              Discover the benefits of building your career with us
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: Award,
                title: "Professional Growth",
                description:
                  "Continuous learning opportunities and career advancement pathways for all staff",
              },
              {
                icon: Users,
                title: "Collaborative Environment",
                description:
                  "Work alongside dedicated professionals in a supportive team atmosphere",
              },
              {
                icon: CheckCircle,
                title: "Competitive Benefits",
                description:
                  "Comprehensive benefits package including healthcare, retirement plans, and more",
              },
            ].map((benefit, index) => (
              <Card
                key={index}
                className="p-6 hover:shadow-lg transition-shadow rounded-none border-none"
              >
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <benefit.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
                <p className="text-muted-foreground">{benefit.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Current Openings */}
      <section className="py-16 ">
        <div className="container max-w-7xl mx-auto px-4 md:px-0">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold mb-4">Current Openings</h2>
            <p className="text-muted-foreground">
              Explore our available positions and find your perfect role
            </p>
          </div>

          <div className="max-w-md mx-auto mb-8">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Search positions..."
                className="pl-10"
              />
            </div>
          </div>

          <Tabs defaultValue="medical" className="w-full">
            <div className="flex justify-center mb-8">
              <TabsList className="grid grid-cols-4 w-full max-w-2xl">
                <TabsTrigger value="medical">Medical</TabsTrigger>
                <TabsTrigger value="nursing">Nursing</TabsTrigger>
                <TabsTrigger value="admin">Administrative</TabsTrigger>
                <TabsTrigger value="support">Support</TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="medical" className="space-y-4">
              {[
                {
                  title: "Consultant Cardiologist",
                  department: "Cardiology Department",
                  type: "Full-time",
                  location: "HBS General Hospital, Islamabad",
                },
                {
                  title: "General Physician",
                  department: "Internal Medicine",
                  type: "Full-time",
                  location: "HBS General Hospital, Islamabad",
                },
                {
                  title: "Dental Surgeon",
                  department: "Dental Department",
                  type: "Full-time",
                  location: "HBS Dental Hospital, Islamabad",
                },
              ].map((job, index) => (
                <JobCard key={index} job={job} />
              ))}
            </TabsContent>

            <TabsContent value="nursing" className="space-y-4">
              {[
                {
                  title: "Head Nurse",
                  department: "Intensive Care Unit",
                  type: "Full-time",
                  location: "HBS General Hospital, Islamabad",
                },
                {
                  title: "Staff Nurse",
                  department: "Emergency Department",
                  type: "Full-time",
                  location: "HBS General Hospital, Islamabad",
                },
              ].map((job, index) => (
                <JobCard key={index} job={job} />
              ))}
            </TabsContent>

            <TabsContent value="admin" className="space-y-4">
              {[
                {
                  title: "Administrative Assistant",
                  department: "Office of the Dean",
                  type: "Full-time",
                  location: "HBS Medical College, Islamabad",
                },
                {
                  title: "HR Coordinator",
                  department: "Human Resources",
                  type: "Full-time",
                  location: "HBS Administrative Block, Islamabad",
                },
              ].map((job, index) => (
                <JobCard key={index} job={job} />
              ))}
            </TabsContent>

            <TabsContent value="support" className="space-y-4">
              {[
                {
                  title: "Laboratory Technician",
                  department: "Pathology Department",
                  type: "Full-time",
                  location: "HBS General Hospital, Islamabad",
                },
                {
                  title: "IT Support Specialist",
                  department: "Information Technology",
                  type: "Full-time",
                  location: "HBS Medical College, Islamabad",
                },
              ].map((job, index) => (
                <JobCard key={index} job={job} />
              ))}
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Application Process */}
      <section className="py-16 bg-muted">
        <div className="container max-w-7xl mx-auto px-4 md:px-0">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold mb-4">Application Process</h2>
            <p className="text-muted-foreground">
              Follow these steps to join our team
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-primary/20"></div>

              {/* Timeline items */}
              <div className="space-y-12">
                {[
                  {
                    title: "Find a Position",
                    description:
                      "Browse our current openings and find a role that matches your skills and interests.",
                  },
                  {
                    title: "Submit Application",
                    description:
                      "Complete the online application form and upload your resume and cover letter.",
                  },
                  {
                    title: "Initial Screening",
                    description:
                      "Our HR team will review your application and contact qualified candidates for initial interviews.",
                  },
                  {
                    title: "Interview Process",
                    description:
                      "Selected candidates will participate in interviews with the hiring department and team members.",
                  },
                  {
                    title: "Offer & Onboarding",
                    description:
                      "Successful candidates will receive an offer letter and begin the onboarding process.",
                  },
                ].map((step, index) => (
                  <div
                    key={index}
                    className={`relative flex items-start ${
                      index % 2 === 1 ? "md:flex-row-reverse" : ""
                    }`}
                  >
                    <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-white absolute left-0 md:left-1/2 transform md:-translate-x-1/2">
                      {index + 1}
                    </div>
                    <div
                      className={`ml-12 md:ml-0 md:w-1/2 ${
                        index % 2 === 0 ? "md:pr-12 text-right" : "md:pl-12"
                      }`}
                    >
                      <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                      <p className="text-muted-foreground">
                        {step.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Apply Now CTA */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container text-center max-w-7xl mx-auto px-4 md:px-0">
          <h2 className="text-3xl font-bold mb-6">Ready to Join Our Team?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Take the first step towards a rewarding career at HBS
          </p>
          <Button className="text-foreground" variant="outline">
            APPLY NOW
          </Button>
        </div>
      </section>

      {/* Contact HR */}
      <section className="py-16 ">
        <div className="container max-w-7xl mx-auto px-4 md:px-0">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">
                Contact Human Resources
              </h2>
              <p className="text-muted-foreground">
                Have questions about our hiring process or available positions?
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <Card className="p-6 text-center">
                <div className="mx-auto h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">Email</h3>
                <p className="text-muted-foreground">hr.inq@hbs.edu.pk</p>
              </Card>

              <Card className="p-6 text-center">
                <div className="mx-auto h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">Phone</h3>
                <p className="text-muted-foreground">+92-51-2243323</p>
              </Card>

              <Card className="p-6 text-center">
                <div className="mx-auto h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">Office</h3>
                <p className="text-muted-foreground">
                  HR Department, HBS Medical College, Lehtrar Road, Tarlai,
                  Islamabad
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function JobCard({ job }) {
  return (
    <Card className="p-6 hover:shadow-md transition-shadow">
      <div className="flex flex-wrap justify-between items-start gap-4">
        <div>
          <h3 className="text-xl font-bold mb-1">{job.title}</h3>
          <p className="text-muted-foreground mb-2">{job.department}</p>
          <div className="flex flex-wrap gap-2 mb-2">
            <Badge className="" variant="secondary">
              {job.type}
            </Badge>
            <Badge variant="outline" className="text-muted-foreground">
              {job.location}
            </Badge>
          </div>
        </div>
        <Button className="group">
          View Details
          <ChevronRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
        </Button>
      </div>
    </Card>
  );
}
