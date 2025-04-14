import {
  Microscope,
  Activity,
  Eye,
  SmileIcon as Tooth,
  FileImage,
  HeartPulse,
  Pill,
  GraduationCap,
  BookOpen,
  Users,
  Building2,
  ChevronRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export default function ParamedicAcademics() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[40vh] min-h-[300px] w-full overflow-hidden">
        <div className="container max-w-7xl mx-auto px-4 relative h-full flex flex-col items-center justify-center text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-foreground/20 backdrop-blur-sm mb-4">
            <GraduationCap className="h-8 w-8" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-2">
            Academic Programs
          </h1>
          <p className="text-xl text-foreground/90 max-w-2xl">
            HBS College of Paramedics offers comprehensive F.Sc programs in
            various healthcare disciplines
          </p>
        </div>
      </section>

      {/* Affiliation Notice */}
      <section className="py-8 bg-primary/50">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <Card className="p-6 border-l-4 border-primary">
              <div className="flex items-center">
                <Building2 className="h-6 w-6 text-primary mr-3 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-bold mb-1">
                    Institutional Affiliation
                  </h3>
                  <p className="text-muted-foreground">
                    HBS College of Paramedics is affiliated with the Federal
                    Board of Intermediate and Secondary Education, ensuring
                    quality education and nationally recognized certification.
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Programs Overview */}
      <section className="py-16">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold mb-4">Our F.Sc Programs</h2>
            <p className="text-muted-foreground">
              We offer specialized F.Sc programs designed to prepare students
              for successful careers in various healthcare fields. Our
              curriculum combines theoretical knowledge with practical skills to
              ensure graduates are job-ready.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              {
                icon: Microscope,
                title: "Medical Laboratory Technology",
                description:
                  "Learn to perform laboratory tests crucial for disease diagnosis, treatment, and prevention in clinical settings.",
                color: "bg-blue-500",
              },
              {
                icon: Activity,
                title: "Operation Theater Technology",
                description:
                  "Develop skills to assist surgeons by managing equipment and maintaining sterile conditions during surgical procedures.",
                color: "bg-green-500",
              },
              {
                icon: Eye,
                title: "Ophthalmology Technology",
                description:
                  "Gain expertise in assisting ophthalmologists with diagnostic tests and procedures related to eye care.",
                color: "bg-purple-500",
              },
              {
                icon: Tooth,
                title: "Dental Hygiene Technology",
                description:
                  "Learn preventive dental care techniques and assist dentists in maintaining patients' oral health.",
                color: "bg-pink-500",
              },
              {
                icon: FileImage,
                title: "Medical Imaging Technology",
                description:
                  "Master the operation of diagnostic imaging equipment to produce quality images for medical diagnosis.",
                color: "bg-orange-500",
              },
              {
                icon: HeartPulse,
                title: "Physiotherapy Technology",
                description:
                  "Develop skills to assist physiotherapists in providing rehabilitation services to patients with physical disabilities.",
                color: "bg-red-500",
              },
              {
                icon: Pill,
                title: "Dispensing Technology",
                description:
                  "Learn to prepare and dispense medications under the supervision of pharmacists in various healthcare settings.",
                color: "bg-teal-500",
              },
            ].map((program, index) => (
              <div
                key={index}
                className="overflow-hidden hover:shadow-lg transition-shadow "
              >
                <div className={`${program.color} bg-opacity-10 p-6`}>
                  <div className="flex items-center mb-4">
                    <div
                      className={`h-12 min-w-12 rounded-full ${program.color} bg-opacity-20 flex items-center justify-center mr-3`}
                    >
                      <program.icon className={`h-6 w-6`} />
                    </div>
                    <h3 className="text-xl font-bold">F.Sc {program.title}</h3>
                  </div>
                  <p className="text-muted-foreground mb-4">
                    {program.description}
                  </p>
                  <div className="flex justify-end">
                    <Button
                      variant="link"
                      className={`p-0 text-foreground group`}
                    >
                      Learn more{" "}
                      <ChevronRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Program Features */}
      <section className="py-16 bg-muted/50">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold mb-4">Program Features</h2>
            <p className="text-muted-foreground">
              Our F.Sc programs are designed to provide students with
              comprehensive education and practical training
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-background p-6 rounded-lg shadow-sm">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <BookOpen className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">
                Comprehensive Curriculum
              </h3>
              <p className="text-muted-foreground">
                Our curriculum is designed in accordance with Federal Board
                standards, covering both theoretical knowledge and practical
                skills.
              </p>
            </div>

            <div className="bg-background p-6 rounded-lg shadow-sm">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Users className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">Experienced Faculty</h3>
              <p className="text-muted-foreground">
                Learn from experienced healthcare professionals who bring
                real-world expertise to the classroom.
              </p>
            </div>

            <div className="bg-background p-6 rounded-lg shadow-sm">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Building2 className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">
                State-of-the-Art Facilities
              </h3>
              <p className="text-muted-foreground">
                Access to modern laboratories and equipment to enhance practical
                learning and skill development.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Career Opportunities */}
      <section className="py-16">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="md:flex items-start gap-8">
              <div className="md:w-1/2 mb-8 md:mb-0">
                <h2 className="text-3xl font-bold mb-4">
                  Career Opportunities
                </h2>
                <p className="text-muted-foreground mb-6">
                  Graduates of our F.Sc programs have excellent career prospects
                  in various healthcare settings. Our programs prepare students
                  for immediate employment or further education in their chosen
                  field.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center mr-2 mt-0.5">
                      <ChevronRight className="h-3 w-3 text-primary" />
                    </div>
                    <p className="text-muted-foreground">
                      Hospitals and clinics
                    </p>
                  </li>
                  <li className="flex items-start">
                    <div className="h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center mr-2 mt-0.5">
                      <ChevronRight className="h-3 w-3 text-primary" />
                    </div>
                    <p className="text-muted-foreground">Diagnostic centers</p>
                  </li>
                  <li className="flex items-start">
                    <div className="h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center mr-2 mt-0.5">
                      <ChevronRight className="h-3 w-3 text-primary" />
                    </div>
                    <p className="text-muted-foreground">
                      Research institutions
                    </p>
                  </li>
                  <li className="flex items-start">
                    <div className="h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center mr-2 mt-0.5">
                      <ChevronRight className="h-3 w-3 text-primary" />
                    </div>
                    <p className="text-muted-foreground">
                      Pharmaceutical companies
                    </p>
                  </li>
                  <li className="flex items-start">
                    <div className="h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center mr-2 mt-0.5">
                      <ChevronRight className="h-3 w-3 text-primary" />
                    </div>
                    <p className="text-muted-foreground">
                      Public health departments
                    </p>
                  </li>
                </ul>
              </div>
              <div className="md:w-1/2 relative h-[300px] md:h-[400px] rounded-lg overflow-hidden">
                <img
                  src="https://placehold.co/600x400"
                  alt="Career opportunities"
                  className="object-cover w-full h-full"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                  <div className="p-6">
                    <p className="text-primary-foreground/50 text-lg font-medium">
                      Build a rewarding career in the healthcare industry
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Apply Now CTA */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="md:flex items-center justify-between">
            <div className="mb-6 md:mb-0">
              <h2 className="text-3xl font-bold mb-2">
                Ready to Start Your Healthcare Career?
              </h2>
              <p className="text-primary-foreground/90">
                Applications are now open for the upcoming academic session
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
