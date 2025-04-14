import {
  FileText,
  AlertCircle,
  Info,
  BookOpen,
  Award,
  Users,
  HeartPulse,
  Stethoscope,
} from "lucide-react";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

function ProgramCard({
  title,
  duration,
  icon: Icon,
  description,
  eligibilityCriteria,
}) {
  return (
    <Card className="p-6">
      <div className="flex items-center mb-4">
        <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary mr-4">
          <Icon className="h-6 w-6" />
        </div>
        <div>
          <h3 className="text-lg font-bold">{title}</h3>
          <p className="text-sm text-muted/500">{duration}</p>
        </div>
      </div>
      <p className="text-muted-foreground mb-4">{description}</p>
      <div>
        <h4 className="text-md font-semibold mb-2">Eligibility Criteria:</h4>
        <ul className="list-disc list-inside text-sm text-slate-600 space-y-1">
          {eligibilityCriteria.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </Card>
  );
}

export default function NursingAdmissions() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[40vh] min-h-[300px] w-full overflow-hidden">
        <div className="container relative h-full flex flex-col items-center justify-center text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-foreground/20 backdrop-blur-sm mb-4">
            <FileText className="h-8 w-8" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-2">Admissions</h1>
          <p className="text-xl text-foreground/90 max-w-2xl">
            Begin your journey toward a rewarding nursing career with HBS
            College of Nursing
          </p>
        </div>
      </section>

      {/* Admission Notice */}
      <section className="py-8 bg-primary/5">
        <div className="container">
          <div className="max-w-5xl mx-auto">
            <Card className="p-6 border-l-4 border-primary">
              <div className="flex items-start">
                <AlertCircle className="h-6 w-6 text-primary mr-3 mt-0.5 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-bold mb-2">
                    ADMISSION NOTICE 2024-25
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    Applications are now being accepted for all nursing programs
                    at HBS College of Nursing for the academic year 2024-25. All
                    programs are approved by Pakistan Nursing & Midwifery
                    Council (PNC) and affiliated with Shaheed Zulfiqar Ali
                    Bhutto Medical University (SZABMU).
                  </p>
                  <p className="text-muted-foreground text-sm mt-2">
                    For the latest updates on admission requirements, deadlines,
                    and procedures, please visit our online admission portal at{" "}
                    <a
                      href="https://admissions.hbs.edu.pk"
                      className="text-primary hover:underline"
                    >
                      https://admissions.hbs.edu.pk
                    </a>
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Programs Overview */}
      <section className="py-16">
        <div className="container">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Programs Offered</h2>
              <p className="text-muted-foreground max-w-3xl mx-auto">
                HBS College of Nursing offers comprehensive nursing education
                programs approved by Pakistan Nursing & Midwifery Council and
                affiliated with SZABMU
              </p>
            </div>

            <Tabs defaultValue="degree" className="w-full">
              <TabsList className="grid w-full grid-cols-2 mb-8">
                <TabsTrigger value="degree">Degree Programs</TabsTrigger>
                <TabsTrigger value="diploma">Diploma Programs</TabsTrigger>
              </TabsList>

              <TabsContent value="degree">
                <div className="space-y-8">
                  <ProgramCard
                    title="Bachelor of Science in Nursing (BSN)"
                    duration="4 Years"
                    icon={BookOpen}
                    description="A comprehensive degree program that prepares students for professional nursing practice across healthcare settings."
                    eligibilityCriteria={[
                      "Matric Science (Physics, Chemistry & Biology as compulsory subjects)",
                      "FSc (Pre-Medical) with 50% marks minimum (Physics, Chemistry & Biology as compulsory subjects) OR A Level Certification accompanied by an equivalent certificate from Inter Board Committee of Chairman (IBCC)",
                      "Age Limit: 14-35 years",
                      "50% marks in SZABMU entry test is prerequisite for admission",
                    ]}
                  />

                  <ProgramCard
                    title="Post-RN BSN"
                    duration="2 Years"
                    icon={Award}
                    description="An advanced program for Registered Nurses to obtain their Bachelor's degree and enhance their professional competencies."
                    eligibilityCriteria={[
                      "Matric with Science (Physics, Chemistry & Biology as main subjects) as per HEC requirements",
                      "Diploma in Nursing (Registered with Pakistan Nursing Council)",
                      "Diploma in Midwifery or any Post Basic Specialty for male in lieu of midwifery (Registered with Pakistan Nursing Council)",
                      "01 years as RN",
                      "Valid registration with Pakistan Nursing Council",
                      "NOC is must for those students who are working in Government Sector",
                      "50% marks in SZABMU entry test is prerequisite for admission",
                    ]}
                  />
                </div>
              </TabsContent>

              <TabsContent value="diploma">
                <div className="space-y-8">
                  <ProgramCard
                    title="Lady Health Visitor (LHV)"
                    duration="2 Years"
                    icon={HeartPulse}
                    description="Training focused on maternal, child health and community healthcare services."
                    eligibilityCriteria={[
                      "FSc (Pre-Medical) with 45% marks minimum (Physics, Chemistry & Biology as compulsory subjects)",
                      "Matric (Science) with 45% marks minimum (Physics, Chemistry & Biology as compulsory subjects)",
                      "Age Limit: 14-35 years",
                    ]}
                  />

                  <ProgramCard
                    title="Community Midwife (CMW)"
                    duration="18 Months"
                    icon={Users}
                    description="Specialized training in midwifery skills for community-based maternal care."
                    eligibilityCriteria={[
                      "Matric (either Art or Science) with 40% marks",
                      "Age Limit: 14-40 years",
                    ]}
                  />

                  <ProgramCard
                    title="Certified Nursing Assistant (CNA)"
                    duration="2 Years"
                    icon={Stethoscope}
                    description="Foundation level training for basic nursing care and assistance."
                    eligibilityCriteria={[
                      "FSc (Pre-Medical) with 45% marks minimum (Physics, Chemistry & Biology as compulsory subjects)",
                      "Matric (Science) with 45% marks minimum (Physics, Chemistry & Biology as compulsory subjects)",
                      "Matric (Arts) with 50% marks, FA with 50% Marks",
                      "Age Limit: 14-35 years",
                    ]}
                  />
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>

      {/* Fee Structure */}
      <section className="py-16 bg-muted/50">
        <div className="container">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Fee Structure</h2>
              <p className="text-muted-foreground max-w-3xl mx-auto">
                Transparent fee structure for all nursing programs at HBS
                College of Nursing
              </p>
            </div>

            <Tabs defaultValue="degree-fee" className="w-full">
              <TabsList className="grid w-full grid-cols-2 mb-8">
                <TabsTrigger value="degree-fee">Degree Programs</TabsTrigger>
                <TabsTrigger value="diploma-fee">Diploma Programs</TabsTrigger>
              </TabsList>

              <TabsContent value="degree-fee">
                <Card className="p-8">
                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse">
                      <thead>
                        <tr className="bg-primary/5">
                          <th className="border px-4 py-2 text-left">
                            Description
                          </th>
                          <th className="border px-4 py-2 text-right">
                            Bachelor of Science in Nursing BSN (4 Years)
                          </th>
                          <th className="border px-4 py-2 text-right">
                            Post Registered Nurse - PRN (2 Years)
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="border px-4 py-2">
                            Application Processing Fee
                          </td>
                          <td className="border px-4 py-2 text-right">
                            1,000/-
                          </td>
                          <td className="border px-4 py-2 text-right">
                            1,000/-
                          </td>
                        </tr>
                        <tr className="bg-muted/50">
                          <td className="border px-4 py-2">
                            Admission Fee (Once)
                          </td>
                          <td className="border px-4 py-2 text-right">
                            30,000/-
                          </td>
                          <td className="border px-4 py-2 text-right">
                            30,000/-
                          </td>
                        </tr>
                        <tr>
                          <td className="border px-4 py-2">
                            Tuition fee (Per semester)
                          </td>
                          <td className="border px-4 py-2 text-right">
                            100,000/-
                          </td>
                          <td className="border px-4 py-2 text-right">
                            100,000/-
                          </td>
                        </tr>
                        <tr className="bg-muted/50">
                          <td className="border px-4 py-2">
                            PNC Pre-Registration Fee
                          </td>
                          <td className="border px-4 py-2 text-right">
                            As per Actual
                          </td>
                          <td className="border px-4 py-2 text-right">
                            As per Actual
                          </td>
                        </tr>
                        <tr>
                          <td className="border px-4 py-2">
                            University Examination Fee
                          </td>
                          <td className="border px-4 py-2 text-right">
                            As per Actual
                          </td>
                          <td className="border px-4 py-2 text-right">
                            As per Actual
                          </td>
                        </tr>
                        <tr className="bg-muted/50">
                          <td className="border px-4 py-2">
                            Examination Fee (Per Attempt)
                          </td>
                          <td className="border px-4 py-2 text-right">
                            As per Actual
                          </td>
                          <td className="border px-4 py-2 text-right">
                            As per Actual
                          </td>
                        </tr>
                        <tr>
                          <td className="border px-4 py-2">
                            University Registration Fee
                          </td>
                          <td className="border px-4 py-2 text-right">
                            As per Actual
                          </td>
                          <td className="border px-4 py-2 text-right">
                            As per Actual
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <div className="mt-6">
                    <h3 className="text-lg font-bold mb-3">Note:</h3>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <div className="h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center mr-2 mt-0.5">
                          <Info className="h-3 w-3 text-primary" />
                        </div>
                        <p className="text-sm text-muted-foreground">
                          Reduction of Rs. 10,000 would be given in 2nd and 3rd
                          semester fee out of admission fee to deserving
                          students.
                        </p>
                      </li>
                      <li className="flex items-start">
                        <div className="h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center mr-2 mt-0.5">
                          <Info className="h-3 w-3 text-primary" />
                        </div>
                        <p className="text-sm text-muted-foreground">
                          There will be an annual increase of 7.5% in tuition
                          fee.
                        </p>
                      </li>
                      <li className="flex items-start">
                        <div className="h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center mr-2 mt-0.5">
                          <Info className="h-3 w-3 text-primary" />
                        </div>
                        <p className="text-sm text-muted-foreground">
                          Any additional withholding tax, VAT, sales tax or any
                          other tax, fee or charges if levied by the Government,
                          University, PNC (Pakistan Nursing Council) or any
                          other regulatory body will be charged separately.
                        </p>
                      </li>
                      <li className="flex items-start">
                        <div className="h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center mr-2 mt-0.5">
                          <Info className="h-3 w-3 text-primary" />
                        </div>
                        <p className="text-sm text-muted-foreground">
                          Policies mentioned in admission policy shall be
                          applicable to all students.
                        </p>
                      </li>
                      <li className="flex items-start">
                        <div className="h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center mr-2 mt-0.5">
                          <Info className="h-3 w-3 text-primary" />
                        </div>
                        <p className="text-sm text-muted-foreground">
                          All newly admitted students must provide medical
                          fitness certificate from HBS General Hospital,
                          Islamabad within 2 weeks on their own expense.
                        </p>
                      </li>
                    </ul>
                  </div>
                </Card>
              </TabsContent>

              <TabsContent value="diploma-fee">
                <Card className="p-8">
                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse">
                      <thead>
                        <tr className="bg-primary/5">
                          <th className="border px-4 py-2 text-left">
                            Description
                          </th>
                          <th className="border px-4 py-2 text-right">
                            Certified Nursing Assistant (CNA)
                          </th>
                          <th className="border px-4 py-2 text-right">
                            Lady Health Visitor (LHV)
                          </th>
                          <th className="border px-4 py-2 text-right">
                            Community Midwife (CMW)
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="border px-4 py-2">
                            Application Processing Fee
                          </td>
                          <td className="border px-4 py-2 text-right">
                            1,000/-
                          </td>
                          <td className="border px-4 py-2 text-right">
                            1,000/-
                          </td>
                          <td className="border px-4 py-2 text-right">
                            1,000/-
                          </td>
                        </tr>
                        <tr className="bg-muted/50">
                          <td className="border px-4 py-2">
                            Admission Fee (Once)
                          </td>
                          <td className="border px-4 py-2 text-right">
                            24,000/-
                          </td>
                          <td className="border px-4 py-2 text-right">
                            24,000/-
                          </td>
                          <td className="border px-4 py-2 text-right">
                            24,000/-
                          </td>
                        </tr>
                        <tr>
                          <td className="border px-4 py-2">
                            Monthly Tuition fee
                          </td>
                          <td className="border px-4 py-2 text-right">
                            5,000/-
                          </td>
                          <td className="border px-4 py-2 text-right">
                            5,000/-
                          </td>
                          <td className="border px-4 py-2 text-right">
                            5,000/-
                          </td>
                        </tr>
                        <tr className="bg-muted/50">
                          <td className="border px-4 py-2">
                            PNC Pre-Registration Fee
                          </td>
                          <td className="border px-4 py-2 text-right">
                            As per Actual
                          </td>
                          <td className="border px-4 py-2 text-right">
                            As per Actual
                          </td>
                          <td className="border px-4 py-2 text-right">
                            As per Actual
                          </td>
                        </tr>
                        <tr>
                          <td className="border px-4 py-2">
                            Nursing Examination Board of Punjab (NEB)
                            Registration Fee (Twice)
                          </td>
                          <td className="border px-4 py-2 text-right">
                            As per Actual
                          </td>
                          <td className="border px-4 py-2 text-right">
                            As per Actual
                          </td>
                          <td className="border px-4 py-2 text-right">
                            As per Actual
                          </td>
                        </tr>
                        <tr className="bg-muted/50">
                          <td className="border px-4 py-2">
                            Examination Fee (Per Attempt)
                          </td>
                          <td className="border px-4 py-2 text-right">
                            As per Actual
                          </td>
                          <td className="border px-4 py-2 text-right">
                            As per Actual
                          </td>
                          <td className="border px-4 py-2 text-right">
                            As per Actual
                          </td>
                        </tr>
                        <tr>
                          <td className="border px-4 py-2">
                            Diploma Fee (Once)
                          </td>
                          <td className="border px-4 py-2 text-right">
                            As per Actual
                          </td>
                          <td className="border px-4 py-2 text-right">
                            As per Actual
                          </td>
                          <td className="border px-4 py-2 text-right">
                            As per Actual
                          </td>
                        </tr>
                        <tr className="bg-muted/50">
                          <td className="border px-4 py-2">
                            Detailed Mark sheet DMC Fee (Twice)
                          </td>
                          <td className="border px-4 py-2 text-right">
                            As per Actual
                          </td>
                          <td className="border px-4 py-2 text-right">
                            As per Actual
                          </td>
                          <td className="border px-4 py-2 text-right">
                            As per Actual
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <div className="mt-6">
                    <h3 className="text-lg font-bold mb-3">Note:</h3>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <div className="h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center mr-2 mt-0.5">
                          <Info className="h-3 w-3 text-primary" />
                        </div>
                        <p className="text-sm text-muted-foreground">
                          Reduction of Rs. 1,000 per month shall be given in 1st
                          12 month tuition fee to deserving students.
                        </p>
                      </li>
                      <li className="flex items-start">
                        <div className="h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center mr-2 mt-0.5">
                          <Info className="h-3 w-3 text-primary" />
                        </div>
                        <p className="text-sm text-muted-foreground">
                          There will be an annual increase of 7.5% in tuition
                          fee.
                        </p>
                      </li>
                      <li className="flex items-start">
                        <div className="h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center mr-2 mt-0.5">
                          <Info className="h-3 w-3 text-primary" />
                        </div>
                        <p className="text-sm text-muted-foreground">
                          Any additional withholding tax, VAT, sales tax or any
                          other tax, fee or charges if levied by the Government,
                          University, PNC (Pakistan Nursing Council) or any
                          other regulatory body will be charged separately.
                        </p>
                      </li>
                      <li className="flex items-start">
                        <div className="h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center mr-2 mt-0.5">
                          <Info className="h-3 w-3 text-primary" />
                        </div>
                        <p className="text-sm text-muted-foreground">
                          Policies mentioned in admission policy shall be
                          applicable to all students.
                        </p>
                      </li>
                      <li className="flex items-start">
                        <div className="h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center mr-2 mt-0.5">
                          <Info className="h-3 w-3 text-primary" />
                        </div>
                        <p className="text-sm text-muted-foreground">
                          All newly admitted students must provide medical
                          fitness certificate from HBS General Hospital,
                          Islamabad within 2 weeks on their own expense.
                        </p>
                      </li>
                    </ul>
                  </div>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>

      {/* Admission Process */}
      <section className="py-16">
        <div className="container">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Admission Process</h2>
              <p className="text-muted-foreground max-w-3xl mx-auto">
                Follow these steps to apply for admission to HBS College of
                Nursing
              </p>
            </div>

            <Card className="p-8">
              <div className="relative">
                {/* Timeline line */}
                <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-primary/20"></div>

                {/* Timeline items */}
                <div className="space-y-12">
                  {[
                    {
                      title: "Online Application",
                      description:
                        "Fill out the online application form at admissions.hbs.edu.pk and pay the application processing fee.",
                    },
                    {
                      title: "Document Submission",
                      description:
                        "Upload all required documents including academic certificates, CNIC/B-form, and photographs.",
                    },
                    {
                      title: "Entry Test",
                      description:
                        "Appear for the SZABMU entry test (for BSN and Post-RN programs) or college assessment (for diploma programs).",
                    },
                    {
                      title: "Interview",
                      description:
                        "Shortlisted candidates will be called for an interview with the admission committee.",
                    },
                    {
                      title: "Merit List Publication",
                      description:
                        "Check the merit list published on the college website and notice board.",
                    },
                    {
                      title: "Fee Submission",
                      description:
                        "Selected candidates must submit their fees by the given deadline to secure their admission.",
                    },
                    {
                      title: "Orientation",
                      description:
                        "Attend the orientation program to familiarize yourself with the college, faculty, and regulations.",
                    },
                  ].map((step, index) => (
                    <div
                      key={index}
                      className={`relative flex items-start ${
                        index % 2 === 0 ? "md:flex-row-reverse" : ""
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
                        <h3 className="text-xl font-bold mb-1">{step.title}</h3>
                        <p className="text-muted-foreground">{step.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
