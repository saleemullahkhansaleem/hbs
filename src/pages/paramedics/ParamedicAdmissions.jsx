import {
  FileText,
  CheckCircle,
  AlertCircle,
  Info,
  Calendar,
  Users,
  GraduationCap,
} from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function ParamedicAdmissions() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[40vh] min-h-[300px] w-full overflow-hidden bg-muted/50">
        <div className="container max-w-7xl mx-auto px-4 relative h-full flex flex-col items-center justify-center text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-foreground/20 backdrop-blur-sm mb-4">
            <FileText className="h-8 w-8" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-2">Admissions</h1>
          <p className="text-xl text-foreground/90 max-w-2xl">
            Your journey to becoming a healthcare professional starts here
          </p>
        </div>
      </section>

      {/* Admission Process */}
      <section className="py-16">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Admission Process</h2>
              <p className="text-muted-foreground max-w-3xl mx-auto">
                Follow these simple steps to apply for admission to HBS College
                of Paramedics
              </p>
            </div>

            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-primary/20"></div>

              {/* Timeline items */}
              <div className="space-y-12">
                {[
                  {
                    title: "Purchase Prospectus",
                    description:
                      "Obtain the admission form and prospectus from the college admission office or download it from the website.",
                    icon: FileText,
                  },
                  {
                    title: "Submit Application",
                    description:
                      "Complete the application form and submit it along with required documents and application fee.",
                    icon: CheckCircle,
                  },
                  {
                    title: "Document Verification",
                    description:
                      "Your academic documents will be verified by the admission committee.",
                    icon: AlertCircle,
                  },
                  {
                    title: "Merit List",
                    description:
                      "Selected candidates will be notified through the merit list displayed on the college notice board and website.",
                    icon: Users,
                  },
                  {
                    title: "Fee Submission",
                    description:
                      "Successful candidates must submit the required fees within the specified deadline to secure their admission.",
                    icon: Calendar,
                  },
                  {
                    title: "Orientation & Classes",
                    description:
                      "Attend the orientation program and begin your academic journey at HBS College of Paramedics.",
                    icon: GraduationCap,
                  },
                ].map((step, index) => (
                  <div
                    key={index}
                    className={`relative flex items-start ${
                      index % 2 === 1 ? "md:flex-row-reverse" : ""
                    }`}
                  >
                    <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-primary-foreground absolute left-0 md:left-1/2 transform md:-translate-x-1/2">
                      {index + 1}
                    </div>
                    <div
                      className={`ml-12 md:ml-0 md:w-1/2 ${
                        index % 2 === 0 ? "md:pr-12 text-right" : "md:pl-12"
                      }`}
                    >
                      <div
                        className={`flex items-center mb-2 justify-start ${
                          index % 2 === 1
                            ? "md:justify-start"
                            : "md:justify-end"
                        }`}
                      >
                        <step.icon
                          className={`h-5 w-5 text-primary ${
                            index % 2 === 0 ? "md:order-2 md:ml-2" : "mr-2"
                          }`}
                        />
                        <h3 className="text-xl font-bold">{step.title}</h3>
                      </div>
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

      {/* Eligibility Criteria */}
      <section className="py-16 bg-muted/50">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Eligibility Criteria</h2>
              <p className="text-muted-foreground max-w-3xl mx-auto">
                To be eligible for admission to HBS College of Paramedics,
                candidates must meet the following criteria
              </p>
            </div>

            <Card className="p-8">
              <div className="flex items-center mb-6">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mr-4">
                  <CheckCircle className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">Academic Requirements</h3>
                  <p className="text-muted-foreground">
                    Matric with science subjects (45% or more)
                  </p>
                </div>
              </div>

              <div className="bg-primary/5 p-6 rounded-lg mt-8">
                <div className="flex items-start">
                  <Info className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold mb-2">Important Notes</h4>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <div className="h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center mr-2 mt-0.5">
                          <CheckCircle className="h-3 w-3 text-primary" />
                        </div>
                        <p className="text-sm text-muted-foreground">
                          Candidates must have studied science subjects in
                          Matric.
                        </p>
                      </li>
                      <li className="flex items-start">
                        <div className="h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center mr-2 mt-0.5">
                          <CheckCircle className="h-3 w-3 text-primary" />
                        </div>
                        <p className="text-sm text-muted-foreground">
                          Original documents must be presented at the time of
                          admission.
                        </p>
                      </li>
                      <li className="flex items-start">
                        <div className="h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center mr-2 mt-0.5">
                          <CheckCircle className="h-3 w-3 text-primary" />
                        </div>
                        <p className="text-sm text-muted-foreground">
                          Admission is subject to availability of seats and
                          merit.
                        </p>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Required Documents */}
      <section className="py-16">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Required Documents</h2>
              <p className="text-muted-foreground max-w-3xl mx-auto">
                Please prepare the following documents for your admission
                application
              </p>
            </div>

            <Card className="p-8">
              <ul className="space-y-4">
                <li className="flex">
                  <div className="mr-4 mt-1">
                    <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center">
                      <CheckCircle className="h-4 w-4 text-primary" />
                    </div>
                  </div>
                  <p className="text-muted-foreground">
                    Completed application form
                  </p>
                </li>
                <li className="flex">
                  <div className="mr-4 mt-1">
                    <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center">
                      <CheckCircle className="h-4 w-4 text-primary" />
                    </div>
                  </div>
                  <p className="text-muted-foreground">
                    Attested copy of Matric certificate and marks sheet
                  </p>
                </li>
                <li className="flex">
                  <div className="mr-4 mt-1">
                    <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center">
                      <CheckCircle className="h-4 w-4 text-primary" />
                    </div>
                  </div>
                  <p className="text-muted-foreground">
                    Attested copy of CNIC/B-Form
                  </p>
                </li>
                <li className="flex">
                  <div className="mr-4 mt-1">
                    <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center">
                      <CheckCircle className="h-4 w-4 text-primary" />
                    </div>
                  </div>
                  <p className="text-muted-foreground">
                    Four recent passport-sized photographs
                  </p>
                </li>
                <li className="flex">
                  <div className="mr-4 mt-1">
                    <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center">
                      <CheckCircle className="h-4 w-4 text-primary" />
                    </div>
                  </div>
                  <p className="text-muted-foreground">
                    Character certificate from the last attended institution
                  </p>
                </li>
                <li className="flex">
                  <div className="mr-4 mt-1">
                    <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center">
                      <CheckCircle className="h-4 w-4 text-primary" />
                    </div>
                  </div>
                  <p className="text-muted-foreground">Domicile certificate</p>
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* Fee Structure */}
      <section className="py-16 bg-muted/50">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Fee Structure</h2>
              <p className="text-muted-foreground max-w-3xl mx-auto">
                Fee structure for the first year of paramedical programs
              </p>
            </div>

            <Card className="p-8">
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-primary/5">
                      <th className="border px-4 py-2 text-left">
                        Particulars
                      </th>
                      <th className="border px-4 py-2 text-right">
                        Amount (PKR)
                      </th>
                      <th className="border px-4 py-2 text-left">Remarks</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border px-4 py-2">
                        Prospectus/Admission Form
                      </td>
                      <td className="border px-4 py-2 text-right">1,000</td>
                      <td className="border px-4 py-2">(Once Only)</td>
                    </tr>
                    <tr className="bg-muted/50">
                      <td className="border px-4 py-2">Admission</td>
                      <td className="border px-4 py-2 text-right">8,000</td>
                      <td className="border px-4 py-2">(Once Only)</td>
                    </tr>
                    <tr>
                      <td className="border px-4 py-2">Tuition Fee/Month</td>
                      <td className="border px-4 py-2 text-right">5,000</td>
                      <td className="border px-4 py-2">
                        (Only for session 2023-2024)
                      </td>
                    </tr>
                    <tr className="bg-muted/50">
                      <td className="border px-4 py-2">Security Deposit</td>
                      <td className="border px-4 py-2 text-right">10,000</td>
                      <td className="border px-4 py-2">
                        (Once Only, Refundable)
                      </td>
                    </tr>
                    <tr>
                      <td className="border px-4 py-2">
                        College Examination Fee/Year
                      </td>
                      <td className="border px-4 py-2 text-right">7,000</td>
                      <td className="border px-4 py-2"></td>
                    </tr>
                    <tr className="font-bold bg-primary/5">
                      <td className="border px-4 py-2">
                        TOTAL FEE AT THE TIME OF ADMISSION
                      </td>
                      <td className="border px-4 py-2 text-right">31,000</td>
                      <td className="border px-4 py-2"></td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="mt-8">
                <h3 className="text-lg font-bold mb-4">
                  Additional Information:
                </h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <div className="h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center mr-2 mt-0.5">
                      <Info className="h-3 w-3 text-primary" />
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Board Registration fee as per actual
                    </p>
                  </li>
                  <li className="flex items-start">
                    <div className="h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center mr-2 mt-0.5">
                      <Info className="h-3 w-3 text-primary" />
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Examination fees as per actual
                    </p>
                  </li>
                  <li className="flex items-start">
                    <div className="h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center mr-2 mt-0.5">
                      <Info className="h-3 w-3 text-primary" />
                    </div>
                    <p className="text-sm text-muted-foreground">
                      All newly admitted students must provide medical fitness
                      certificate from HBS General Hospital, Islamabad within 2
                      weeks on their own expense.
                    </p>
                  </li>
                </ul>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-muted-foreground max-w-3xl mx-auto">
                Find answers to common questions about admissions at HBS College
                of Paramedics
              </p>
            </div>

            <Card className="p-8">
              <Accordion type="single" collapsible className="w-full">
                {[
                  {
                    question:
                      "When do admissions open for paramedical programs?",
                    answer:
                      "Admissions typically open after the announcement of Matric results. Please check our website or contact the admission office for exact dates.",
                  },
                  {
                    question: "Is there an age limit for admission?",
                    answer:
                      "Yes, candidates should be between 16-25 years of age at the time of admission.",
                  },
                  {
                    question: "Are hostel facilities available?",
                    answer:
                      "Yes, separate hostel facilities for boys and girls are available on a first-come, first-served basis.",
                  },
                  {
                    question: "Is transportation facility available?",
                    answer:
                      "Yes, the college provides transportation facilities from various points in Islamabad and Rawalpindi.",
                  },
                  {
                    question: "What is the duration of paramedical programs?",
                    answer:
                      "The duration of F.Sc paramedical programs is 2 years (4 semesters).",
                  },
                  {
                    question: "Can I apply for multiple programs?",
                    answer:
                      "Yes, you can apply for multiple programs by indicating your preferences in the application form.",
                  },
                ].map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`}>
                    <AccordionTrigger className="text-left">
                      <span className="font-medium">{faq.question}</span>
                    </AccordionTrigger>
                    <AccordionContent>
                      <p className="text-muted-foreground">{faq.answer}</p>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-muted/50">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Contact Information</h2>
              <p className="text-muted-foreground max-w-3xl mx-auto">
                For more information about admissions, please contact us
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <Card className="p-6">
                <h3 className="text-xl font-bold mb-4">Admission Office</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center mr-2 mt-0.5">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-3 w-3 text-primary"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                    </div>
                    <p className="text-muted-foreground">
                      HBS College of Paramedics, Sector H-9/4, Islamabad
                    </p>
                  </li>
                  <li className="flex items-start">
                    <div className="h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center mr-2 mt-0.5">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-3 w-3 text-primary"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                        />
                      </svg>
                    </div>
                    <p className="text-muted-foreground">+92-51-9123456</p>
                  </li>
                  <li className="flex items-start">
                    <div className="h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center mr-2 mt-0.5">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-3 w-3 text-primary"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                    </div>
                    <p className="text-muted-foreground">
                      admissions@hbsparamedics.edu.pk
                    </p>
                  </li>
                  <li className="flex items-start">
                    <div className="h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center mr-2 mt-0.5">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-3 w-3 text-primary"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </div>
                    <p className="text-muted-foreground">
                      Monday to Friday: 9:00 AM - 4:00 PM
                    </p>
                  </li>
                </ul>
              </Card>

              <div className="relative h-[300px] rounded-lg overflow-hidden">
                <img
                  src="/placeholder.svg?height=300&width=600"
                  alt="HBS College of Paramedics Location"
                  className="object-cover w-full h-full"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                  <div className="p-6">
                    <p className="text-white text-lg font-medium">
                      Visit us at our campus in Islamabad
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
                Ready to Begin Your Healthcare Career?
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
