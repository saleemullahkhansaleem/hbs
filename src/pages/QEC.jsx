import {
  Award,
  CheckCircle,
  Target,
  BookOpen,
  ClipboardCheck,
  BarChart,
  Shield,
  Users,
} from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { SecondaryHeader } from "@/components";

export default function QECPage() {
  return (
    <div className="min-h-screen">
      <SecondaryHeader
        title="Quality Enhancement Cell"
        description="Ensuring excellence in education through continuous improvement"
      />

      {/* Introduction */}
      <section className="py-16">
        <div className="container text-center max-w-7xl mx-auto px-4 md:px-0">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row gap-8 items-start">
              <div className="md:w-1/4 flex flex-col items-center text-center">
                <div className="w-24 h-24 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Shield className="h-12 w-12 text-primary" />
                </div>
                <h2 className="text-xl font-bold">PATRON IN CHIEF</h2>
              </div>
              <div className="md:w-3/4">
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Quality Enhancement Cell (QEC) was established, in (HBSMC&DC),
                  quality of education, through, a well-structured feedback
                  mechanism. The feedback is obtained from the current and
                  ex-students, faculty and employers. Since, its inception, QEC
                  worked at high pace, created conducive environments to
                  increase acceptability in the faculties towards QEC mechanism.
                </p>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  QEC organized a number of awareness seminars, in the
                  university for the program team members, faculty and senior
                  management on the subject of quality assurance, preparation of
                  self-assessment reports. Director QEC attended a number of
                  national and international events to represent (HBSMC&DC) and
                  to learn and share the good practices with national and
                  international counterparts.
                </p>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Quality Enhancement Cell is a progressive and dynamic
                  organization of (HBSMC&DC) which is moving at a faster pace to
                  achieve distinctions in Quality Circles.
                </p>
                <div className="flex items-center mt-8">
                  <div className="mr-4">
                    <img
                      src="/images/about/chairman-profile.png"
                      alt="Dr. Mohammad Riaz Shehbaz Janjua"
                      width={120}
                      height={120}
                      className="rounded-full aspect-square object-cover object-top border-4 border-primary/10 bg-muted/50"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">
                      Dr. Mohammad Riaz Shehbaz Janjua
                    </h3>
                    <p className="text-primary">Chairman</p>
                    <p className="text-muted-foreground">
                      HBS Medical & Dental College & Hospitals, Islamabad
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Objectives */}
      <section className="py-16 bg-muted">
        <div className="container text-center max-w-7xl mx-auto px-4 md:px-0">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Vision */}
            <Card className="p-8 border-none shadow-lg bg-gradient-to-br from-primary/5 to-primary/10">
              <div className="flex items-center mb-6">
                <Target className="h-8 w-8 text-primary mr-3" />
                <h2 className="text-2xl font-bold">VISION</h2>
              </div>
              <p className="text-lg text-muted-foreground border-l-4 border-primary pl-4 py-2">
                The Quality Enhancement Cell is responsible for promoting public
                confidence that the quality and standards of the award of
                degrees are enhanced and safeguarded.
              </p>
            </Card>

            {/* Quality Policy */}
            <Card className="p-8 border-none shadow-lg bg-gradient-to-br from-primary/5 to-primary/10">
              <div className="flex items-center mb-6">
                <Shield className="h-8 w-8 text-primary mr-3" />
                <h2 className="text-2xl font-bold">QUALITY POLICY</h2>
              </div>
              <p className="text-lg text-muted-foreground border-l-4 border-primary pl-4 py-2">
                "We are committed to making (HBSMC&DC), a center of excellence
                for Quality Education in all Faculties through enabling
                environments, adaptive academic mechanisms, and competent
                faculty, with emphasis on inculcation of Islamic Ethical Values
                and continual improvements".
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Objectives */}
      <section className="py-16">
        <div className="container text-center max-w-7xl mx-auto px-4 md:px-0">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold mb-4">OBJECTIVES</h2>
            <p className="text-muted-foreground">
              The Quality Enhancement Cell strives to achieve the following
              objectives
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              {
                icon: CheckCircle,
                title: "Maintain Standards",
                description:
                  "Maintain and continuously enhance academic standards",
              },
              {
                icon: BookOpen,
                title: "Enhance Learning",
                description:
                  "Enhance student's learning experience and outcomes",
              },
              {
                icon: ClipboardCheck,
                title: "Verify Programs",
                description:
                  "Verify that the existing programs meet their objectives and institutional goals",
              },
              {
                icon: BarChart,
                title: "Provide Feedback",
                description:
                  "Provide feedback for quality assurance of academic programs to the top management and HEC",
              },
              {
                icon: Award,
                title: "Prepare for Review",
                description:
                  "Prepare the academic programs for review by discipline councils",
              },
              {
                icon: Users,
                title: "Stakeholder Engagement",
                description:
                  "Engage with students, faculty, alumni, and employers for continuous improvement",
              },
            ].map((objective, index) => (
              <Card
                key={index}
                className="p-6 hover:shadow-md transition-shadow"
              >
                <div className="flex items-center mb-4">
                  <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center mr-3">
                    <objective.icon className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="text-lg font-bold">{objective.title}</h3>
                </div>
                <p className="text-muted-foreground">{objective.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* QEC Process */}
      <section className="py-16 bg-muted">
        <div className="container text-center max-w-7xl mx-auto px-4 md:px-0">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold mb-4">
              Quality Assurance Process
            </h2>
            <p className="text-muted-foreground">
              Our comprehensive approach to ensuring educational excellence
            </p>
          </div>

          <div className="relative max-w-4xl mx-auto">
            {/* Process Circle */}
            <div className="hidden md:block w-[500px] h-[500px] mx-auto border-4 border-dashed border-primary/30 rounded-full relative">
              {/* Circle nodes */}

              {[0, 60, 120, 180, 240, 300].map((angle, index) => {
                const radians = (angle * Math.PI) / 180;
                const x = 250 + 250 * Math.cos(radians);
                const y = 250 + 250 * Math.sin(radians);

                return (
                  <div
                    key={index}
                    className="absolute w-20 h-20 bg-background rounded-full shadow-lg flex flex-col items-center justify-center transform -translate-x-1/2 -translate-y-1/2 p-2"
                    style={{ left: x, top: y }}
                  >
                    {steps[index].icon}
                    <span className="text-xs mt-1 text-muted-foreground text-center">
                      {steps[index].title}
                    </span>
                  </div>
                );
              })}

              {/* Center */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-primary/10 rounded-full flex items-center justify-center">
                <div className="text-center p-4">
                  <Shield className="h-10 w-10 text-primary mx-auto mb-1" />
                  <p className="text-sm font-bold text-primary">
                    Quality
                    <br />
                    Enhancement
                  </p>
                </div>
              </div>
            </div>

            {/* Mobile Process Steps */}
            <div className="md:hidden space-y-4">
              {[
                { icon: ClipboardCheck, label: "Assessment" },
                { icon: Users, label: "Feedback" },
                { icon: BarChart, label: "Analysis" },
                { icon: Target, label: "Planning" },
                { icon: BookOpen, label: "Implementation" },
                { icon: Award, label: "Evaluation" },
              ].map((step, index) => (
                <Card key={index} className="p-4 flex items-center">
                  <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center mr-3">
                    <step.icon className="h-5 w-5 text-primary" />
                  </div>
                  <p className="font-medium">{step.label}</p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact QEC */}
      <section className="py-16">
        <div className="container text-center max-w-7xl mx-auto px-4 md:px-0">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">
              Contact the Quality Enhancement Cell
            </h2>
            <p className="text-muted-foreground mb-8">
              For inquiries related to quality assurance, feedback, or
              assessment processes
            </p>
            <Card className="p-8 bg-primary/5">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="text-center md:text-left">
                  <h3 className="font-bold text-lg mb-2">QEC Office</h3>
                  <p className="text-muted-foreground mb-1">
                    Room 203, Administration Block
                  </p>
                  <p className="text-muted-foreground mb-1">
                    HBS Medical & Dental College
                  </p>
                  <p className="text-muted-foreground">Islamabad</p>
                </div>
                <div className="text-center md:text-left">
                  <h3 className="font-bold text-lg mb-2">
                    Contact Information
                  </h3>
                  <p className="text-muted-foreground mb-1">
                    Email: qec@hbs.edu.pk
                  </p>
                  <p className="text-muted-foreground mb-1">
                    Phone: +92-51-2243323 Ext. 123
                  </p>
                  <p className="text-muted-foreground">
                    Hours: Monday-Friday, 9:00 AM - 5:00 PM
                  </p>
                </div>
              </div>
              <div className="mt-8">
                <Button className="bg-primary text-white hover:bg-primary/90">
                  Submit Feedback
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}

const steps = [
  {
    icon: <ClipboardCheck className="h-8 w-8 text-primary" />,
    title: "Verify",
  },
  { icon: <Users className="h-8 w-8 text-primary" />, title: "Team" },
  { icon: <BarChart className="h-8 w-8 text-primary" />, title: "Analyze" },
  { icon: <Target className="h-8 w-8 text-primary" />, title: "Focus" },
  { icon: <BookOpen className="h-8 w-8 text-primary" />, title: "Learn" },
  { icon: <Award className="h-8 w-8 text-primary" />, title: "Achieve" },
];
