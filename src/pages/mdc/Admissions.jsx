import { useState } from "react";
import { FileText, CheckCircle, AlertCircle, Info } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function Admissions() {
  const [activeFeeTab, setActiveFeeTab] = useState("local");

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-16 bg-muted/50 w-full overflow-hidden">
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

      {/* Admission Regulations Notice */}
      <section className="py-8 bg-primary/5">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <Card className="p-6 border-l-4 border-primary">
              <div className="flex items-start">
                <AlertCircle className="h-6 w-6 text-primary mr-3 mt-0.5 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-bold mb-2">
                    ADMISSION REGULATIONS ONLY FOR SESSION 2023-2028
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    These rules, regulations, and timelines can be modified
                    according to any new PM&DC regulations or Federal/Provincial
                    Government policies issued after the announcement of PM&DC
                    Medical and Dental Undergraduate Education (Admissions,
                    Curriculum and Conduct) Policy and Regulations 2023.
                    Candidates must get updated information from the college
                    website{" "}
                    <a
                      href="https://hbsmdc.hbs.edu.pk"
                      className="text-primary hover:underline"
                    >
                      https://hbsmdc.hbs.edu.pk
                    </a>{" "}
                    or the college admission office at the time of applying for
                    the program.
                  </p>
                  <p className="text-muted-foreground text-sm mt-2">
                    HBS Medical & Dental College admission portal for admission
                    in MBBS session 2023-2028 and admission in BDS session
                    2023-2027 will be opened after the announcement of MDCAT
                    results. Candidates can apply at{" "}
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

      {/* Eligibility Criteria */}
      <section className="py-16">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Eligibility Criteria</h2>
              <p className="text-muted-foreground max-w-3xl mx-auto">
                Any candidate seeking admission in HBS Medical and Dental
                College shall be eligible having fulfilled the following
                mandatory criteria
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
                    Have passed the MDCAT examination conducted by the National
                    Medical Authority;
                  </p>
                </li>
                <li className="flex">
                  <div className="mr-4 mt-1">
                    <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center">
                      <CheckCircle className="h-4 w-4 text-primary" />
                    </div>
                  </div>
                  <p className="text-muted-foreground">
                    Having obtained total 60% or more marks (in all subjects
                    cumulatively) or percentage as may be notified by the
                    Pakistan Medical and Dental Council, higher secondary school
                    certificate ("HSSC") or an equivalent 12th grade
                    qualification recognized in Pakistan with equivalence
                    certificate issued by IBCC
                  </p>
                </li>
                <li className="flex">
                  <div className="mr-4 mt-1">
                    <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center">
                      <CheckCircle className="h-4 w-4 text-primary" />
                    </div>
                  </div>
                  <p className="text-muted-foreground">
                    Passed the subjects of biology, chemistry and either physics
                    or mathematics in the examination of the higher secondary
                    school certificate or an equivalent 12th-grade qualification
                    recognized in Pakistan
                  </p>
                </li>
                <li className="flex">
                  <div className="mr-4 mt-1">
                    <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center">
                      <CheckCircle className="h-4 w-4 text-primary" />
                    </div>
                  </div>
                  <p className="text-muted-foreground">
                    Mandatory requirement of MDCAT shall not apply to students
                    seeking admission on foreign quota seats. Foreign quota
                    students shall qualify either MDCAT OR SAT-ll with minimum
                    score of 550 in each subject or a foreign MCAT examination
                    or UCAT examination with 50% marks in the subjects as
                    prescribed in Regulation 3 (c)
                  </p>
                </li>
              </ul>

              <div className="mt-8 grid md:grid-cols-2 gap-6">
                <div className="bg-primary/5 p-6 rounded-lg">
                  <h3 className="text-lg font-bold mb-4">
                    Eligibility Summary
                  </h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <div className="h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center mr-2 mt-0.5">
                        <CheckCircle className="h-3 w-3 text-primary" />
                      </div>
                      <p className="text-sm text-muted-foreground">
                        <span className="font-medium">
                          F.Sc or equivalent exam total marks:
                        </span>{" "}
                        60% or above
                      </p>
                    </li>
                    <li className="flex items-start">
                      <div className="h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center mr-2 mt-0.5">
                        <CheckCircle className="h-3 w-3 text-primary" />
                      </div>
                      <p className="text-sm text-muted-foreground">
                        <span className="font-medium">MDCAT marks:</span> 55% or
                        more for MBBS and 50% or more for BDS
                      </p>
                    </li>
                    <li className="flex items-start">
                      <div className="h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center mr-2 mt-0.5">
                        <CheckCircle className="h-3 w-3 text-primary" />
                      </div>
                      <p className="text-sm text-muted-foreground">
                        <span className="font-medium">
                          Foreign Quota Seats:
                        </span>{" "}
                        SAT-II with a minimum 550 marks in each subject or
                        foreign MCAT exam or UCAT exam with 50% marks
                      </p>
                    </li>
                  </ul>
                </div>

                <div className="bg-primary/5 p-6 rounded-lg">
                  <h3 className="text-lg font-bold mb-4">
                    Merit Formulation Weightage
                  </h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <div className="h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center mr-2 mt-0.5">
                        <CheckCircle className="h-3 w-3 text-primary" />
                      </div>
                      <p className="text-sm text-muted-foreground">
                        <span className="font-medium">
                          MDCAT/SAT/MCAT/UCAT:
                        </span>{" "}
                        50%
                      </p>
                    </li>
                    <li className="flex items-start">
                      <div className="h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center mr-2 mt-0.5">
                        <CheckCircle className="h-3 w-3 text-primary" />
                      </div>
                      <p className="text-sm text-muted-foreground">
                        <span className="font-medium">
                          FSc or equivalent exam:
                        </span>{" "}
                        40%
                      </p>
                    </li>
                    <li className="flex items-start">
                      <div className="h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center mr-2 mt-0.5">
                        <CheckCircle className="h-3 w-3 text-primary" />
                      </div>
                      <p className="text-sm text-muted-foreground">
                        <span className="font-medium">
                          Matric or equivalent exam:
                        </span>{" "}
                        10%
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Admission Procedure */}
      <section className="py-16 bg-muted/50">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Admission Procedure</h2>
              <p className="text-muted-foreground max-w-3xl mx-auto">
                Follow these steps to apply for admission to HBS Medical and
                Dental College
              </p>
            </div>

            <Card className="p-8">
              <Accordion type="single" collapsible className="w-full">
                {[
                  "Candidates shall provide/upload application on the admission portal along with Matric, FSc and MDCAT results and receipt of payment of application processing fee of rupees 2,000/-. Applications without fulfilling these requirements shall not be entertained.",
                  "Incomplete applications, i.e. without filling the mandatory particulars, shall not be entertained.",
                  "Admissions to Medical and Dental programs shall be conducted separately, and each student is required to apply separately to a MBBS and/or BDS program. A student who has not applied to a given program or not paid the application processing fee for that program shall not be entitled to admission to such program.",
                  "Candidates shall get application number/login and password through email. Failure to get this must inquire the reason from the admission office of the college.",
                  "Failure to upload the results within a given time shall not be considered for admission.",
                  "HBSM&DC shall add the percentage score of Matric, FSc, and MDCAT according to the weightage mentioned above and finalize the total aggregate out of 100% to conclude the final merit of the candidates for the purpose of admission in MBBS/BDS classes of HBSM&DC.",
                  "The 1st provisional merit list shall be posted on the college website and college notice board and candidates will be given 3 days to pay the fees and submit necessary documents.",
                  "The 2nd provisional merit list will be posted after the deadline of submission of fees given to selected candidates in 1st provisional merit list, which will consist of candidates from the merit-wise waiting list filling the number of seats vacated by the candidate who did not submit the fees and documents in due time. The process will continue until all the seats are filled.",
                  "Admission shall be confirmed only after paying the fee until the due date already informed to the students by HBS Medical & Dental College in the provisional merit list.",
                  "Candidates failing to submit the fees and documents before the deadline given will lose the right of admission as his/her reserved seat shall be filled with the next candidate in the provisional merit list.",
                  "All candidates are requested to visit the college website on a daily basis for any update.",
                  "In case of two candidates having exactly the same total marks in the final merit list, the candidate having an age older than the other shall be put higher on the merit list.",
                  "A student when accepting admission to HBS Medical & Dental College shall mandatorily disclose to the college if a prior admission has been accepted by him/her to any other college. In such a situation students shall prior to accepting such admission must in writing inform the prior college of cancellation of their acceptance with a copy to the designated email of PM&DC.",
                  "As per PMDC admission regulations 2023, failure by a student to cancel the prior acceptance of admission shall render all admission offers of the student void and the student shall be ineligible for admission.",
                  "After the start of classes if a student seeks to either leave or transfer from the college, his/her fee will be adjusted pro rata to the period spent by the student in the program along with a penalty of 10% of the total annual fee of that course.",
                  "Foreign students shall pay in foreign currency (US Dollars) (Please refer to the fee structure page).",
                ].map((step, index) => (
                  <AccordionItem key={index} value={`item-${index}`}>
                    <AccordionTrigger className="text-left">
                      <div className="flex items-center">
                        <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center mr-3">
                          <span className="text-primary text-sm font-medium">
                            {index + 1}
                          </span>
                        </div>
                        <span className="font-medium">Step {index + 1}</span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent>
                      <p className="text-muted-foreground pl-9">{step}</p>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </Card>
          </div>
        </div>
      </section>

      {/* Fee Structure */}
      <section className="py-16">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Fee Structure</h2>
              <p className="text-muted-foreground max-w-3xl mx-auto">
                Details of annual fee and other charges for MBBS and BDS
                programs
              </p>
            </div>

            <Tabs defaultValue="mbbs" className="w-full">
              <TabsList className="grid w-full grid-cols-2 mb-8">
                <TabsTrigger value="mbbs">MBBS Program</TabsTrigger>
                <TabsTrigger value="bds">BDS Program</TabsTrigger>
              </TabsList>

              <TabsContent value="mbbs">
                <Card className="p-8">
                  <div className="flex justify-center mb-6">
                    <div className="inline-flex rounded-md shadow-sm">
                      <button
                        onClick={() => setActiveFeeTab("local")}
                        className={`px-4 py-2 text-sm font-medium rounded-l-lg ${
                          activeFeeTab === "local"
                            ? "bg-primary text-primary-foreground"
                            : "bg-muted text-muted-foreground hover:bg-muted/50"
                        }`}
                      >
                        Local Students (PKR)
                      </button>
                      <button
                        onClick={() => setActiveFeeTab("foreign")}
                        className={`px-4 py-2 text-sm font-medium rounded-r-lg ${
                          activeFeeTab === "foreign"
                            ? "bg-primary text-primary-foreground"
                            : "bg-muted text-muted-foreground hover:bg-muted/50"
                        }`}
                      >
                        Foreign Students (USD)
                      </button>
                    </div>
                  </div>

                  {activeFeeTab === "local" ? (
                    <div className="overflow-x-auto">
                      <table className="w-full border-collapse">
                        <thead>
                          <tr className="bg-primary/10">
                            <th className="border px-4 py-2 text-left">
                              Particulars - PKR
                            </th>
                            <th className="border px-4 py-2 text-right">
                              2024-2025
                            </th>
                            <th className="border px-4 py-2 text-right">
                              2025-2026
                            </th>
                            <th className="border px-4 py-2 text-right">
                              2026-2027
                            </th>
                            <th className="border px-4 py-2 text-right">
                              2027-2028
                            </th>
                            <th className="border px-4 py-2 text-right">
                              2028-2029
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td className="border px-4 py-2">
                              Annual Tuition Fee
                            </td>
                            <td className="border px-4 py-2 text-right">
                              2,375,750
                            </td>
                            <td className="border px-4 py-2 text-right">
                              2,553,931
                            </td>
                            <td className="border px-4 py-2 text-right">
                              2,745,476
                            </td>
                            <td className="border px-4 py-2 text-right">
                              2,951,387
                            </td>
                            <td className="border px-4 py-2 text-right">
                              3,172,741
                            </td>
                          </tr>
                          <tr className="bg-muted/50">
                            <td className="border px-4 py-2">
                              Admission Fee (One time)
                            </td>
                            <td className="border px-4 py-2 text-right">
                              50,000
                            </td>
                            <td className="border px-4 py-2 text-right">-</td>
                            <td className="border px-4 py-2 text-right">-</td>
                            <td className="border px-4 py-2 text-right">-</td>
                            <td className="border px-4 py-2 text-right">-</td>
                          </tr>
                          <tr className="font-bold bg-primary/5">
                            <td className="border px-4 py-2">
                              Total college Fee Per Annum - PKR
                            </td>
                            <td className="border px-4 py-2 text-right">
                              2,425,750
                            </td>
                            <td className="border px-4 py-2 text-right">
                              2,553,931
                            </td>
                            <td className="border px-4 py-2 text-right">
                              2,745,476
                            </td>
                            <td className="border px-4 py-2 text-right">
                              2,951,387
                            </td>
                            <td className="border px-4 py-2 text-right">
                              3,172,741
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  ) : (
                    <div className="overflow-x-auto">
                      <table className="w-full border-collapse">
                        <thead>
                          <tr className="bg-primary/10">
                            <th className="border px-4 py-2 text-left">
                              Particulars - USD
                            </th>
                            <th className="border px-4 py-2 text-right">
                              2024-2025
                            </th>
                            <th className="border px-4 py-2 text-right">
                              2025-2026
                            </th>
                            <th className="border px-4 py-2 text-right">
                              2026-2027
                            </th>
                            <th className="border px-4 py-2 text-right">
                              2027-2028
                            </th>
                            <th className="border px-4 py-2 text-right">
                              2028-2029
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td className="border px-4 py-2">
                              Annual Tuition Fee
                            </td>
                            <td className="border px-4 py-2 text-right">
                              $14,000.00
                            </td>
                            <td className="border px-4 py-2 text-right">
                              $14,000.00
                            </td>
                            <td className="border px-4 py-2 text-right">
                              $14,000.00
                            </td>
                            <td className="border px-4 py-2 text-right">
                              $14,000.00
                            </td>
                            <td className="border px-4 py-2 text-right">
                              $14,000.00
                            </td>
                          </tr>
                          <tr className="bg-muted/50">
                            <td className="border px-4 py-2">
                              Admission Fee (One time)
                            </td>
                            <td className="border px-4 py-2 text-right">
                              $500.00
                            </td>
                            <td className="border px-4 py-2 text-right">-</td>
                            <td className="border px-4 py-2 text-right">-</td>
                            <td className="border px-4 py-2 text-right">-</td>
                            <td className="border px-4 py-2 text-right">-</td>
                          </tr>
                          <tr>
                            <td className="border px-4 py-2">
                              PM&DC Registration
                            </td>
                            <td className="border px-4 py-2 text-right">
                              $100.00
                            </td>
                            <td className="border px-4 py-2 text-right">-</td>
                            <td className="border px-4 py-2 text-right">-</td>
                            <td className="border px-4 py-2 text-right">-</td>
                            <td className="border px-4 py-2 text-right">-</td>
                          </tr>
                          <tr className="bg-muted/50">
                            <td className="border px-4 py-2">
                              University Registration (One time)
                            </td>
                            <td className="border px-4 py-2 text-right">
                              $100.00
                            </td>
                            <td className="border px-4 py-2 text-right">-</td>
                            <td className="border px-4 py-2 text-right">-</td>
                            <td className="border px-4 py-2 text-right">-</td>
                            <td className="border px-4 py-2 text-right">-</td>
                          </tr>
                          <tr>
                            <td className="border px-4 py-2">
                              Examination charges per attempt
                            </td>
                            <td className="border px-4 py-2 text-right">
                              $90.00
                            </td>
                            <td className="border px-4 py-2 text-right">
                              $90.00
                            </td>
                            <td className="border px-4 py-2 text-right">
                              $90.00
                            </td>
                            <td className="border px-4 py-2 text-right">
                              $90.00
                            </td>
                            <td className="border px-4 py-2 text-right">
                              $90.00
                            </td>
                          </tr>
                          <tr className="font-bold bg-primary/5">
                            <td className="border px-4 py-2">
                              Total Fixed Fee Per Annum - USD
                            </td>
                            <td className="border px-4 py-2 text-right">
                              $14,790.00
                            </td>
                            <td className="border px-4 py-2 text-right">
                              $14,090.00
                            </td>
                            <td className="border px-4 py-2 text-right">
                              $14,090.00
                            </td>
                            <td className="border px-4 py-2 text-right">
                              $14,090.00
                            </td>
                            <td className="border px-4 py-2 text-right">
                              $14,090.00
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  )}

                  <div className="mt-8">
                    <h3 className="text-lg font-bold mb-4">
                      General Terms for all students:
                    </h3>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <div className="h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center mr-2 mt-0.5">
                          <CheckCircle className="h-3 w-3 text-primary" />
                        </div>
                        <p className="text-sm text-muted-foreground">
                          Scholarship shall be given to top 3 candidates in the
                          merit list in the form of rebate in 2nd year fee and
                          to university position holders in the next classes.
                        </p>
                      </li>
                      <li className="flex items-start">
                        <div className="h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center mr-2 mt-0.5">
                          <CheckCircle className="h-3 w-3 text-primary" />
                        </div>
                        <p className="text-sm text-muted-foreground">
                          This is discounted annual fees to be submitted at
                          once. Mark up shall be charged as per regulations @ 4%
                          in case of quarterly installments and 2% in case of bi
                          annual installments.
                        </p>
                      </li>
                      <li className="flex items-start">
                        <div className="h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center mr-2 mt-0.5">
                          <CheckCircle className="h-3 w-3 text-primary" />
                        </div>
                        <p className="text-sm text-muted-foreground">
                          Verification of degrees of matriculation and FSc/IBCC
                          remains the responsibility of the candidate through
                          the students affairs department within the given time
                          by the university.
                        </p>
                      </li>
                      <li className="flex items-start">
                        <div className="h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center mr-2 mt-0.5">
                          <CheckCircle className="h-3 w-3 text-primary" />
                        </div>
                        <p className="text-sm text-muted-foreground">
                          Admission Fee is non-refundable.
                        </p>
                      </li>
                      <li className="flex items-start">
                        <div className="h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center mr-2 mt-0.5">
                          <CheckCircle className="h-3 w-3 text-primary" />
                        </div>
                        <p className="text-sm text-muted-foreground">
                          Optional educational Insurance as per actual.
                        </p>
                      </li>
                      <li className="flex items-start">
                        <div className="h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center mr-2 mt-0.5">
                          <CheckCircle className="h-3 w-3 text-primary" />
                        </div>
                        <p className="text-sm text-muted-foreground">
                          Any additional withholding tax, VAT, sales tax or any
                          other tax, fee or charges if levied by the Government,
                          University, PM&DC or any other regulatory body will be
                          charged separately.
                        </p>
                      </li>
                      <li className="flex items-start">
                        <div className="h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center mr-2 mt-0.5">
                          <CheckCircle className="h-3 w-3 text-primary" />
                        </div>
                        <p className="text-sm text-muted-foreground">
                          Policies mentioned in admission policy shall be
                          applicable to all students.
                        </p>
                      </li>
                      <li className="flex items-start">
                        <div className="h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center mr-2 mt-0.5">
                          <CheckCircle className="h-3 w-3 text-primary" />
                        </div>
                        <p className="text-sm text-muted-foreground">
                          Transportation and separate hostels for boys and girls
                          are available.
                        </p>
                      </li>
                    </ul>
                  </div>
                </Card>
              </TabsContent>

              <TabsContent value="bds">
                <Card className="p-8">
                  <div className="flex justify-center mb-6">
                    <div className="inline-flex rounded-md shadow-sm">
                      <button
                        onClick={() => setActiveFeeTab("local")}
                        className={`px-4 py-2 text-sm font-medium rounded-l-lg ${
                          activeFeeTab === "local"
                            ? "bg-primary text-primary-foreground"
                            : "bg-muted text-muted-foreground hover:bg-muted/50"
                        }`}
                      >
                        Local Students (PKR)
                      </button>
                      <button
                        onClick={() => setActiveFeeTab("foreign")}
                        className={`px-4 py-2 text-sm font-medium rounded-r-lg ${
                          activeFeeTab === "foreign"
                            ? "bg-primary text-primary-foreground"
                            : "bg-muted text-muted-foreground hover:bg-muted/50"
                        }`}
                      >
                        Foreign Students (USD)
                      </button>
                    </div>
                  </div>

                  {activeFeeTab === "local" ? (
                    <div className="overflow-x-auto">
                      <table className="w-full border-collapse">
                        <thead>
                          <tr className="bg-primary/10">
                            <th className="border px-4 py-2 text-left">
                              Particulars - PKR
                            </th>
                            <th className="border px-4 py-2 text-right">
                              2024-2025
                            </th>
                            <th className="border px-4 py-2 text-right">
                              2025-2026
                            </th>
                            <th className="border px-4 py-2 text-right">
                              2026-2027
                            </th>
                            <th className="border px-4 py-2 text-right">
                              2027-2028
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td className="border px-4 py-2">
                              Annual Tuition Fee
                            </td>
                            <td className="border px-4 py-2 text-right">
                              2,246,750
                            </td>
                            <td className="border px-4 py-2 text-right">
                              2,415,256
                            </td>
                            <td className="border px-4 py-2 text-right">
                              2,596,400
                            </td>
                            <td className="border px-4 py-2 text-right">
                              2,791,131
                            </td>
                          </tr>
                          <tr className="bg-muted/50">
                            <td className="border px-4 py-2">
                              Admission Fee (One time)
                            </td>
                            <td className="border px-4 py-2 text-right">
                              50,000
                            </td>
                            <td className="border px-4 py-2 text-right">-</td>
                            <td className="border px-4 py-2 text-right">-</td>
                            <td className="border px-4 py-2 text-right">-</td>
                          </tr>
                          <tr className="font-bold bg-primary/5">
                            <td className="border px-4 py-2">
                              Total college Fee Per Annum - PKR
                            </td>
                            <td className="border px-4 py-2 text-right">
                              2,296,750
                            </td>
                            <td className="border px-4 py-2 text-right">
                              2,415,256
                            </td>
                            <td className="border px-4 py-2 text-right">
                              2,596,400
                            </td>
                            <td className="border px-4 py-2 text-right">
                              2,791,131
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  ) : (
                    <div className="overflow-x-auto">
                      <table className="w-full border-collapse">
                        <thead>
                          <tr className="bg-primary/10">
                            <th className="border px-4 py-2 text-left">
                              Particulars - USD
                            </th>
                            <th className="border px-4 py-2 text-right">
                              2024-2025
                            </th>
                            <th className="border px-4 py-2 text-right">
                              2025-2026
                            </th>
                            <th className="border px-4 py-2 text-right">
                              2026-2027
                            </th>
                            <th className="border px-4 py-2 text-right">
                              2027-2028
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td className="border px-4 py-2">
                              Annual Tuition Fee
                            </td>
                            <td className="border px-4 py-2 text-right">
                              $12,000.00
                            </td>
                            <td className="border px-4 py-2 text-right">
                              $12,000.00
                            </td>
                            <td className="border px-4 py-2 text-right">
                              $12,000.00
                            </td>
                            <td className="border px-4 py-2 text-right">
                              $12,000.00
                            </td>
                          </tr>
                          <tr className="bg-muted/50">
                            <td className="border px-4 py-2">
                              Admission Fee (One time)
                            </td>
                            <td className="border px-4 py-2 text-right">
                              $500.00
                            </td>
                            <td className="border px-4 py-2 text-right">-</td>
                            <td className="border px-4 py-2 text-right">-</td>
                            <td className="border px-4 py-2 text-right">-</td>
                          </tr>
                          <tr>
                            <td className="border px-4 py-2">
                              PM&DC Registration
                            </td>
                            <td className="border px-4 py-2 text-right">
                              $100.00
                            </td>
                            <td className="border px-4 py-2 text-right">-</td>
                            <td className="border px-4 py-2 text-right">-</td>
                            <td className="border px-4 py-2 text-right">-</td>
                          </tr>
                          <tr className="bg-muted/50">
                            <td className="border px-4 py-2">
                              University Registration (One time)
                            </td>
                            <td className="border px-4 py-2 text-right">
                              $100.00
                            </td>
                            <td className="border px-4 py-2 text-right">-</td>
                            <td className="border px-4 py-2 text-right">-</td>
                            <td className="border px-4 py-2 text-right">-</td>
                          </tr>
                          <tr>
                            <td className="border px-4 py-2">
                              Examination charges per attempt
                            </td>
                            <td className="border px-4 py-2 text-right">
                              $90.00
                            </td>
                            <td className="border px-4 py-2 text-right">
                              $90.00
                            </td>
                            <td className="border px-4 py-2 text-right">
                              $90.00
                            </td>
                            <td className="border px-4 py-2 text-right">
                              $90.00
                            </td>
                          </tr>
                          <tr className="font-bold bg-primary/5">
                            <td className="border px-4 py-2">
                              Total Fixed Fee Per Annum - USD
                            </td>
                            <td className="border px-4 py-2 text-right">
                              $12,790.00
                            </td>
                            <td className="border px-4 py-2 text-right">
                              $12,090.00
                            </td>
                            <td className="border px-4 py-2 text-right">
                              $12,090.00
                            </td>
                            <td className="border px-4 py-2 text-right">
                              $12,090.00
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  )}

                  <div className="mt-8">
                    <h3 className="text-lg font-bold mb-4">
                      General Terms for all students:
                    </h3>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <div className="h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center mr-2 mt-0.5">
                          <CheckCircle className="h-3 w-3 text-primary" />
                        </div>
                        <p className="text-sm text-muted-foreground">
                          Scholarship shall be given to top 3 candidates in the
                          merit list in the form of rebate in 2nd year fee and
                          to university position holders in the next classes.
                        </p>
                      </li>
                      <li className="flex items-start">
                        <div className="h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center mr-2 mt-0.5">
                          <CheckCircle className="h-3 w-3 text-primary" />
                        </div>
                        <p className="text-sm text-muted-foreground">
                          This is discounted annual fees to be submitted at
                          once. Mark up shall be charged as per regulations @ 4%
                          in case of quarterly installments and 2% in case of bi
                          annual installments.
                        </p>
                      </li>
                      <li className="flex items-start">
                        <div className="h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center mr-2 mt-0.5">
                          <CheckCircle className="h-3 w-3 text-primary" />
                        </div>
                        <p className="text-sm text-muted-foreground">
                          Verification of degrees of matriculation and FSc/IBCC
                          remains the responsibility of the candidate through
                          the students affairs department within the given time
                          by the university.
                        </p>
                      </li>
                      <li className="flex items-start">
                        <div className="h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center mr-2 mt-0.5">
                          <CheckCircle className="h-3 w-3 text-primary" />
                        </div>
                        <p className="text-sm text-muted-foreground">
                          Admission Fee is non-refundable.
                        </p>
                      </li>
                      <li className="flex items-start">
                        <div className="h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center mr-2 mt-0.5">
                          <CheckCircle className="h-3 w-3 text-primary" />
                        </div>
                        <p className="text-sm text-muted-foreground">
                          Optional educational Insurance as per actual.
                        </p>
                      </li>
                      <li className="flex items-start">
                        <div className="h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center mr-2 mt-0.5">
                          <CheckCircle className="h-3 w-3 text-primary" />
                        </div>
                        <p className="text-sm text-muted-foreground">
                          Any additional withholding tax, VAT, sales tax or any
                          other tax, fee or charges if levied by the Government,
                          University, PM&DC or any other regulatory body will be
                          charged separately.
                        </p>
                      </li>
                      <li className="flex items-start">
                        <div className="h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center mr-2 mt-0.5">
                          <CheckCircle className="h-3 w-3 text-primary" />
                        </div>
                        <p className="text-sm text-muted-foreground">
                          Policies mentioned in admission policy shall be
                          applicable to all students.
                        </p>
                      </li>
                      <li className="flex items-start">
                        <div className="h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center mr-2 mt-0.5">
                          <CheckCircle className="h-3 w-3 text-primary" />
                        </div>
                        <p className="text-sm text-muted-foreground">
                          Transportation and separate hostels for boys and girls
                          are available.
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

      {/* Required Documents */}
      <section className="py-16 bg-muted/50">
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
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-bold mb-4 flex items-center">
                    <FileText className="h-5 w-5 mr-2 text-primary" />
                    For Local Students
                  </h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <div className="h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center mr-2 mt-0.5">
                        <CheckCircle className="h-3 w-3 text-primary" />
                      </div>
                      <p className="text-sm text-muted-foreground">
                        Attested copy of Matriculation Certificate/Equivalent
                      </p>
                    </li>
                    <li className="flex items-start">
                      <div className="h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center mr-2 mt-0.5">
                        <CheckCircle className="h-3 w-3 text-primary" />
                      </div>
                      <p className="text-sm text-muted-foreground">
                        Attested copy of FSc/Equivalent Certificate
                      </p>
                    </li>
                    <li className="flex items-start">
                      <div className="h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center mr-2 mt-0.5">
                        <CheckCircle className="h-3 w-3 text-primary" />
                      </div>
                      <p className="text-sm text-muted-foreground">
                        Attested copy of MDCAT Result Card
                      </p>
                    </li>
                    <li className="flex items-start">
                      <div className="h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center mr-2 mt-0.5">
                        <CheckCircle className="h-3 w-3 text-primary" />
                      </div>
                      <p className="text-sm text-muted-foreground">
                        Attested copy of CNIC/B-Form
                      </p>
                    </li>
                    <li className="flex items-start">
                      <div className="h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center mr-2 mt-0.5">
                        <CheckCircle className="h-3 w-3 text-primary" />
                      </div>
                      <p className="text-sm text-muted-foreground">
                        Recent passport-sized photographs (4)
                      </p>
                    </li>
                    <li className="flex items-start">
                      <div className="h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center mr-2 mt-0.5">
                        <CheckCircle className="h-3 w-3 text-primary" />
                      </div>
                      <p className="text-sm text-muted-foreground">
                        Domicile Certificate
                      </p>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-bold mb-4 flex items-center">
                    <FileText className="h-5 w-5 mr-2 text-primary" />
                    For Foreign Students
                  </h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <div className="h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center mr-2 mt-0.5">
                        <CheckCircle className="h-3 w-3 text-primary" />
                      </div>
                      <p className="text-sm text-muted-foreground">
                        Attested copy of Passport
                      </p>
                    </li>
                    <li className="flex items-start">
                      <div className="h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center mr-2 mt-0.5">
                        <CheckCircle className="h-3 w-3 text-primary" />
                      </div>
                      <p className="text-sm text-muted-foreground">
                        Attested copy of High School Certificate/Equivalent
                      </p>
                    </li>
                    <li className="flex items-start">
                      <div className="h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center mr-2 mt-0.5">
                        <CheckCircle className="h-3 w-3 text-primary" />
                      </div>
                      <p className="text-sm text-muted-foreground">
                        Attested copy of SAT-II/MCAT/UCAT Result
                      </p>
                    </li>
                    <li className="flex items-start">
                      <div className="h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center mr-2 mt-0.5">
                        <CheckCircle className="h-3 w-3 text-primary" />
                      </div>
                      <p className="text-sm text-muted-foreground">
                        IBCC Equivalence Certificate
                      </p>
                    </li>
                    <li className="flex items-start">
                      <div className="h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center mr-2 mt-0.5">
                        <CheckCircle className="h-3 w-3 text-primary" />
                      </div>
                      <p className="text-sm text-muted-foreground">
                        Recent passport-sized photographs (4)
                      </p>
                    </li>
                    <li className="flex items-start">
                      <div className="h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center mr-2 mt-0.5">
                        <CheckCircle className="h-3 w-3 text-primary" />
                      </div>
                      <p className="text-sm text-muted-foreground">
                        No Objection Certificate (NOC) from respective embassy
                      </p>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="mt-8 p-4 bg-primary/5 rounded-lg">
                <div className="flex items-start">
                  <Info className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                  <p className="text-sm text-muted-foreground">
                    <span className="font-medium">Important Note:</span> All
                    documents must be attested by authorized officials. Foreign
                    documents must be attested by the respective embassy and
                    Ministry of Foreign Affairs. Incomplete applications will
                    not be processed.
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Application Timeline */}
      <section className="py-16">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Application Timeline</h2>
              <p className="text-muted-foreground max-w-3xl mx-auto">
                Key dates for the admission process
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
                      title: "Application Portal Opens",
                      description: "After MDCAT results announcement",
                      date: "November 2024",
                    },
                    {
                      title: "Application Deadline",
                      description: "Last date to submit applications",
                      date: "December 2024",
                    },
                    {
                      title: "First Merit List",
                      description: "Announcement of first merit list",
                      date: "December 2024",
                    },
                    {
                      title: "Fee Submission Deadline",
                      description:
                        "Last date to submit fee for first merit list",
                      date: "December 2024",
                    },
                    {
                      title: "Second Merit List",
                      description:
                        "Announcement of second merit list (if seats available)",
                      date: "January 2025",
                    },
                    {
                      title: "Classes Begin",
                      description: "Start of academic session",
                      date: "February 2025",
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
                        <p className="text-muted-foreground mb-1">
                          {step.description}
                        </p>
                        <p className="text-sm text-primary font-medium">
                          {step.date}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-12 p-4 bg-primary/5 rounded-lg">
                <div className="flex items-start">
                  <Info className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                  <p className="text-sm text-muted-foreground">
                    <span className="font-medium">Note:</span> Dates are
                    tentative and subject to change. Please regularly check the
                    college website for updates.
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Apply Now CTA */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="md:flex items-center justify-between">
            <div className="mb-6 md:mb-0">
              <h2 className="text-3xl font-bold mb-2">
                Ready to Begin Your Medical Journey?
              </h2>
              <p className="text-muted-foreground">
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
