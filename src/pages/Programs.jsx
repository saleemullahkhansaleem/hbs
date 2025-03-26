import {
  Stethoscope,
  SmileIcon as Tooth,
  Activity,
  Pill,
  FlaskRoundIcon as Flask,
  Microscope,
  ChevronRight,
  HeartPulse,
  Syringe,
} from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { SecondaryHeader } from "@/components";

export default function Programs() {
  return (
    <div className="min-h-screen">
      <SecondaryHeader
        title="Our Programs"
        description="Comprehensive healthcare education programs to shape the future of
            medicine"
      />

      {/* Programs Introduction */}
      <section className="py-16">
        <div className="container max-w-7xl mx-auto px-4 md:px-0">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold mb-4">Courses We Offer</h2>
            <p className="text-muted-foreground">
              We are currently offering the following courses designed to
              prepare students for successful careers in healthcare
            </p>
          </div>

          {/* Programs Tabs */}
          <Tabs defaultValue="medical" className="w-full">
            <div className="flex justify-center mb-8">
              <TabsList className="grid grid-cols-3 w-full max-w-md">
                <TabsTrigger value="medical">Medical</TabsTrigger>
                <TabsTrigger value="dental">Dental</TabsTrigger>
                <TabsTrigger value="allied">Allied Health</TabsTrigger>
              </TabsList>
            </div>

            {/* Medical Programs */}
            <TabsContent value="medical" className="space-y-8">
              <Card className="overflow-hidden">
                <div className="md:flex">
                  <div className="md:w-1/3 bg-primary/10 p-8 flex flex-col justify-center items-center text-center">
                    <Stethoscope className="h-16 w-16 text-primary mb-4" />
                    <h3 className="text-2xl font-bold mb-2">MBBS</h3>
                    <p className="text-muted-foreground">
                      Bachelor of Medicine and Bachelor of Surgery
                    </p>
                  </div>
                  <div className="md:w-2/3 p-8">
                    <p className="text-muted-foreground mb-6">
                      In accordance with Pakistan Medical & Dental Council
                      (PM&DC) regulations of centralized admission policy
                      through admitting university (Shaheed Zulfiqar Ali Bhutto
                      Medical University, Islamabad) is being implemented in HBS
                      Medical College for new MBBS admissions.
                    </p>
                    <div className="flex items-center">
                      <Button className="group">
                        MORE DETAILS
                        <ChevronRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>

              <Card className="overflow-hidden">
                <div className="md:flex">
                  <div className="md:w-1/3 bg-primary/10 p-8 flex flex-col justify-center items-center text-center">
                    <Pill className="h-16 w-16 text-primary mb-4" />
                    <h3 className="text-2xl font-bold mb-2">Pharm-D</h3>
                    <p className="text-muted-foreground">Doctor of Pharmacy</p>
                  </div>
                  <div className="md:w-2/3 p-8">
                    <p className="text-muted-foreground mb-6">
                      Pharm-D is a five years' undergraduate degree program for
                      those who are interested to pursue a career in the field
                      of Health and Pharmaceutical Sciences. The degree is
                      recognized by the Pharmacy Council of Pakistan and is
                      widely accepted nationally and internationally.
                    </p>
                    <div className="flex items-center">
                      <Button className="group">
                        MORE DETAILS
                        <ChevronRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>
            </TabsContent>

            {/* Dental Programs */}
            <TabsContent value="dental" className="space-y-8">
              <Card className="overflow-hidden">
                <div className="md:flex">
                  <div className="md:w-1/3 bg-primary/10 p-8 flex flex-col justify-center items-center text-center">
                    <Tooth className="h-16 w-16 text-primary mb-4" />
                    <h3 className="text-2xl font-bold mb-2">BDS</h3>
                    <p className="text-muted-foreground">Bachelor of Dental Surgery</p>
                  </div>
                  <div className="md:w-2/3 p-8">
                    <p className="text-muted-foreground mb-6">
                      In accordance with Pakistan Medical & Dental Council
                      (PM&DC) regulations of centralized admission policy
                      through admitting university (Shaheed Zulfiqar Ali Bhutto
                      Medical University, Islamabad) is being implemented in HBS
                      Medical College for new BDS admissions.
                    </p>
                    <div className="flex items-center">
                      <Button className="group">
                        MORE DETAILS
                        <ChevronRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>

              <Card className="overflow-hidden">
                <div className="md:flex">
                  <div className="md:w-1/3 bg-primary/10 p-8 flex flex-col justify-center items-center text-center">
                    <Tooth className="h-16 w-16 text-primary mb-4" />
                    <h3 className="text-2xl font-bold mb-2">
                      BS – Dental Hygiene
                    </h3>
                    <p className="text-muted-foreground">
                      Bachelor of Science in Dental Hygiene Technology
                    </p>
                  </div>
                  <div className="md:w-2/3 p-8">
                    <p className="text-muted-foreground mb-6">
                      The BS in Dental Hygiene Technology program prepares
                      students for careers in dental hygiene, focusing on
                      preventive oral healthcare and patient education. Approved
                      by HEC and affiliated with Shaheed Zulfiqar Ali Bhutto
                      Medical University (SZABMU).
                    </p>
                    <div className="flex items-center">
                      <Button className="group">
                        MORE DETAILS
                        <ChevronRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>
            </TabsContent>

            {/* Allied Health Programs */}
            <TabsContent value="allied" className="space-y-8">
              <Card className="overflow-hidden">
                <div className="p-8">
                  <div className="flex items-center mb-6">
                    <Activity className="h-8 w-8 text-primary mr-3" />
                    <h3 className="text-2xl font-bold">
                      College of Rehabilitation Sciences
                    </h3>
                  </div>
                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    {[
                      {
                        name: "Doctor of Physiotherapy (DPT)",
                        icon: HeartPulse,
                      },
                      {
                        name: "BS – Medical Laboratory Technology",
                        icon: Flask,
                      },
                      {
                        name: "BS – Radiology & Imaging Technology",
                        icon: Activity,
                      },
                      { name: "BS – Anaesthesia Technology", icon: Syringe },
                      { name: "BS – Optometry Technology", icon: Activity },
                    ].map((program, index) => (
                      <div
                        key={index}
                        className="flex items-center p-4 bg-muted rounded-lg"
                      >
                        <program.icon className="h-6 w-6 text-primary mr-3" />
                        <span className="font-medium">{program.name}</span>
                      </div>
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-6">
                    Approved by HEC, affiliated with Shaheed Zulfiqar Ali Bhutto
                    Medical University (SZABMU)
                  </p>
                  <Button className="group">
                    MORE DETAILS
                    <ChevronRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </div>
              </Card>

              <Card className="overflow-hidden">
                <div className="p-8">
                  <div className="flex items-center mb-6">
                    <HeartPulse className="h-8 w-8 text-primary mr-3" />
                    <h3 className="text-2xl font-bold">College of Nursing</h3>
                  </div>
                  <div className="grid md:grid-cols-3 gap-6 mb-6">
                    {[
                      "B.Sc Nursing",
                      "General Nursing",
                      "Assistant Nursing",
                    ].map((program, index) => (
                      <div
                        key={index}
                        className="flex items-center p-4 bg-muted rounded-lg"
                      >
                        <span className="font-medium">{program}</span>
                      </div>
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-6">
                    B.Sc Nursing, General Nursing, Assistant Nursing (Under
                    process for approval).
                  </p>
                  <Button className="group">
                    MORE DETAILS
                    <ChevronRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </div>
              </Card>

              <Card className="overflow-hidden">
                <div className="p-8">
                  <div className="flex items-center mb-6">
                    <Microscope className="h-8 w-8 text-primary mr-3" />
                    <h3 className="text-2xl font-bold">
                      College of Paramedics
                    </h3>
                  </div>
                  <div className="grid md:grid-cols-3 gap-6 mb-6">
                    {[
                      "Laboratory Technician",
                      "Radiographer",
                      "Dialysis Technician",
                      "Dental Technician",
                      "Operation Theatre Technician",
                      "Dental Hygienic",
                    ].map((program, index) => (
                      <div
                        key={index}
                        className="flex items-center p-4 bg-muted rounded-lg"
                      >
                        <span className="font-medium">{program}</span>
                      </div>
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-6">
                    Approved by Federal Board of Intermediate and Secondary
                    Education (FBISE).
                  </p>
                  <Button className="group">
                    MORE DETAILS
                    <ChevronRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </div>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Program Highlights */}
      <section className="py-16 bg-muted">
        <div className="container max-w-7xl mx-auto px-4 md:px-0">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold mb-4">Program Highlights</h2>
            <p className="text-muted-foreground">
              What makes our healthcare education programs stand out
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Stethoscope,
                title: "Experienced Faculty",
                description:
                  "Learn from highly qualified professors and practitioners with extensive clinical experience",
              },
              {
                icon: Flask,
                title: "State-of-the-Art Facilities",
                description:
                  "Access to modern laboratories, simulation centers, and clinical training environments",
              },
              {
                icon: HeartPulse,
                title: "Clinical Exposure",
                description:
                  "Extensive hands-on training in our affiliated hospitals and healthcare facilities",
              },
              {
                icon: Activity,
                title: "Research Opportunities",
                description:
                  "Engage in meaningful research projects guided by experienced researchers",
              },
              {
                icon: Pill,
                title: "International Standards",
                description:
                  "Curriculum designed to meet both national and international healthcare education standards",
              },
              {
                icon: Microscope,
                title: "Career Development",
                description:
                  "Comprehensive career counseling and placement assistance for graduates",
              },
            ].map((highlight, index) => (
              <Card
                key={index}
                className="p-6 hover:shadow-lg transition-shadow"
              >
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <highlight.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">{highlight.title}</h3>
                <p className="text-muted-foreground">{highlight.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Admission CTA */}
      <section className="py-16 bg-primary text-white">
        <div className="container max-w-7xl mx-auto px-4 md:px-0">
          <div className="md:flex items-center justify-between">
            <div className="mb-6 md:mb-0">
              <h2 className="text-3xl font-bold mb-2">
                Ready to Begin Your Healthcare Journey?
              </h2>
              <p className="text-white/90">
                Applications are now open for the upcoming academic session
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <Button
                size="lg"
                variant="default"
                className="bg-white text-primary hover:bg-white/90"
              >
                Apply Now
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white/10"
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
