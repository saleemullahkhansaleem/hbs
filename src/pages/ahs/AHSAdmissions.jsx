import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Calendar,
  CheckCircle,
  ClipboardIcon as Clip,
  Download,
  FileText,
  HelpCircle,
  Info,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";

export default function AHSAdmissions() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-muted/50 py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col items-center text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Admissions</h1>
            <p className="text-xl max-w-3xl mb-8">
              Join HBS College of Rehabilitation & Allied Health Sciences and
              embark on a rewarding journey towards becoming a healthcare
              professional.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button>
                Apply Now <ArrowRight size={18} />
              </Button>
              <Button variant="outline">
                Download Prospectus <Download size={18} />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Admission Process */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-muted-foreground">
              Admission Process
            </h2>
            <p className="text-muted-foreground max-w-3xl mx-auto">
              Follow these simple steps to apply for admission to our programs
              at HBS College of Rehabilitation & Allied Health Sciences.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Step 1 */}
            <div className="bg-primary/5 p-6 rounded-lg relative">
              <div className="absolute -top-4 -left-4 w-10 h-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-lg">
                1
              </div>
              <h3 className="text-xl font-bold mb-3 text-muted-foreground mt-4">
                Submit Application
              </h3>
              <p className="text-muted-foreground mb-4">
                Complete the online application form or visit our campus to
                submit your application along with required documents.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <CheckCircle className="text-green-500" size={16} />
                  <span className="text-muted-foreground">
                    Application form
                  </span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="text-green-500" size={16} />
                  <span className="text-muted-foreground">
                    Academic certificates
                  </span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="text-green-500" size={16} />
                  <span className="text-muted-foreground">
                    CNIC/B-Form copy
                  </span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="text-green-500" size={16} />
                  <span className="text-muted-foreground">
                    Passport size photographs
                  </span>
                </li>
              </ul>
            </div>

            {/* Step 2 */}
            <div className="bg-primary/5 p-6 rounded-lg relative">
              <div className="absolute -top-4 -left-4 w-10 h-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-lg">
                2
              </div>
              <h3 className="text-xl font-bold mb-3 text-muted-foreground mt-4">
                Entrance Test & Interview
              </h3>
              <p className="text-muted-foreground mb-4">
                Shortlisted candidates will be invited for the entrance test
                (SZABMU Test) followed by an interview.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <CheckCircle className="text-green-500" size={16} />
                  <span className="text-muted-foreground">
                    SZABMU Test or MDCAT
                  </span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="text-green-500" size={16} />
                  <span className="text-muted-foreground">
                    Personal interview
                  </span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="text-green-500" size={16} />
                  <span className="text-muted-foreground">
                    Document verification
                  </span>
                </li>
              </ul>
            </div>

            {/* Step 3 */}
            <div className="bg-primary/5 p-6 rounded-lg relative">
              <div className="absolute -top-4 -left-4 w-10 h-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-lg">
                3
              </div>
              <h3 className="text-xl font-bold mb-3 text-muted-foreground mt-4">
                Admission & Enrollment
              </h3>
              <p className="text-muted-foreground mb-4">
                Selected candidates will receive an admission offer and must
                complete the enrollment process within the specified timeframe.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <CheckCircle className="text-green-500" size={16} />
                  <span className="text-muted-foreground">Fee payment</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="text-green-500" size={16} />
                  <span className="text-muted-foreground">
                    Medical fitness certificate
                  </span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="text-green-500" size={16} />
                  <span className="text-muted-foreground">
                    Orientation program
                  </span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="text-green-500" size={16} />
                  <span className="text-muted-foreground">
                    Class commencement
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Eligibility Criteria */}
      <section className="py-16 px-4 bg-muted/50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-muted-foreground">
              Eligibility Criteria
            </h2>
            <p className="text-muted-foreground max-w-3xl mx-auto">
              Check if you meet the requirements for our programs before
              applying.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* DPT Eligibility */}
            <div className="bg-background p-8 rounded-lg shadow-md">
              <div className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full font-medium mb-4">
                Doctor of Physical Therapy (DPT)
              </div>
              <h3 className="text-2xl font-bold mb-4 text-muted-foreground">
                Eligibility Requirements
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle
                    className="text-green-500 mt-1 flex-shrink-0"
                    size={18}
                  />
                  <span className="text-muted-foreground">
                    12 years of education (Intermediate Pre-Medical or A-level)
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle
                    className="text-green-500 mt-1 flex-shrink-0"
                    size={18}
                  />
                  <span className="text-muted-foreground">
                    Minimum 60% marks in Intermediate or equivalent examination
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle
                    className="text-green-500 mt-1 flex-shrink-0"
                    size={18}
                  />
                  <span className="text-muted-foreground">SZABMU Test</span>
                </li>
                <li className="flex items-start gap-3">
                  <Info className="text-primary mt-1 flex-shrink-0" size={18} />
                  <span className="text-muted-foreground">
                    <strong>Interview:</strong> Final dates for the interview
                    will be sent via email to shortlisted candidates.
                  </span>
                </li>
              </ul>
            </div>

            {/* Other AHS Programs Eligibility */}
            <div className="bg-background p-8 rounded-lg shadow-md">
              <div className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full font-medium mb-4">
                Other AHS Programs
              </div>
              <h3 className="text-2xl font-bold mb-4 text-muted-foreground">
                Eligibility Requirements
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle
                    className="text-green-500 mt-1 flex-shrink-0"
                    size={18}
                  />
                  <span className="text-muted-foreground">
                    12 years of education (Intermediate Pre-Medical or A-level)
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle
                    className="text-green-500 mt-1 flex-shrink-0"
                    size={18}
                  />
                  <span className="text-muted-foreground">
                    Minimum 50% marks in Intermediate or equivalent examination
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle
                    className="text-green-500 mt-1 flex-shrink-0"
                    size={18}
                  />
                  <span className="text-muted-foreground">
                    MDCAT or SZABMU Test
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Info className="text-primary mt-1 flex-shrink-0" size={18} />
                  <span className="text-muted-foreground">
                    <strong>Interview:</strong> Final dates for the interview
                    will be sent via email to shortlisted candidates.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Merit Formula */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-muted-foreground">
              Merit Formula
            </h2>
            <p className="text-muted-foreground max-w-3xl mx-auto">
              Our transparent merit calculation ensures fair selection of
              candidates based on academic performance and entrance test
              results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* DPT Merit Formula */}
            <div className="bg-primary/5 p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-6 text-muted-foreground">
                Doctor of Physical Therapy (DPT)
              </h3>

              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground font-medium">
                    Intermediate Pre-Medical or Equivalent
                  </span>
                  <div className="w-24 h-24 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xl font-bold">
                    40%
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground font-medium">
                    Matric
                  </span>
                  <div className="w-16 h-16 rounded-full bg-primary/50 text-primary-foreground flex items-center justify-center text-lg font-bold">
                    10%
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground font-medium">
                    SZABMU Test
                  </span>
                  <div className="w-20 h-20 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-lg font-bold">
                    35%
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground font-medium">
                    Interview/Viva
                  </span>
                  <div className="w-16 h-16 rounded-full bg-primary/50 text-primary-foreground flex items-center justify-center text-lg font-bold">
                    15%
                  </div>
                </div>
              </div>

              <div className="mt-8 p-4 bg-primary/10 rounded-md">
                <p className="text-primary flex items-start gap-2">
                  <Info size={18} className="flex-shrink-0 mt-1" />
                  <span>
                    The merit lists of successful candidates shall be displayed
                    on College Notice Board and College website.
                  </span>
                </p>
              </div>
            </div>

            {/* Other AHS Programs Merit Formula */}
            <div className="bg-primary/5 p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-6 text-muted-foreground">
                Other AHS Programs
              </h3>

              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground font-medium">
                    Intermediate Pre-Medical or Equivalent
                  </span>
                  <div className="w-24 h-24 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xl font-bold">
                    40%
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground font-medium">
                    Matric
                  </span>
                  <div className="w-16 h-16 rounded-full bg-primary/50 text-primary-foreground flex items-center justify-center text-lg font-bold">
                    10%
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground font-medium">
                    MDCAT/SZABMU Test
                  </span>
                  <div className="w-20 h-20 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-lg font-bold">
                    35%
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground font-medium">
                    Interview/Viva
                  </span>
                  <div className="w-16 h-16 rounded-full bg-primary/50 text-primary-foreground flex items-center justify-center text-lg font-bold">
                    15%
                  </div>
                </div>
              </div>

              <div className="mt-8 p-4 bg-primary/10 rounded-md">
                <p className="text-primary flex items-start gap-2">
                  <Info size={18} className="flex-shrink-0 mt-1" />
                  <span>
                    The merit lists of successful candidates shall be displayed
                    on College Notice Board and College website.
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Fee Structure */}
      <section className="py-16 px-4 bg-muted/50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-muted-foreground">
              Fee Structure
            </h2>
            <p className="text-muted-foreground max-w-3xl mx-auto">
              Transparent fee structure for all our programs with flexible
              payment options.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* DPT Fee Structure */}
            <div className="bg-background p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold mb-6 text-muted-foreground">
                Doctor of Physical Therapy (DPT)
              </h3>
              <div className="overflow-x-auto">
                <table className="w-full text-left">
                  <thead>
                    <tr className="bg-primary/5">
                      <th className="px-4 py-3 text-muted-foreground font-semibold">
                        Particulars
                      </th>
                      <th className="px-4 py-3 text-muted-foreground font-semibold">
                        Amount (PKR)
                      </th>
                      <th className="px-4 py-3 text-muted-foreground font-semibold">
                        Remarks
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y">
                    <tr>
                      <td className="px-4 py-3">
                        Admission Fee (non refundable)
                      </td>
                      <td className="px-4 py-3 font-medium">15,000/-</td>
                      <td className="px-4 py-3 text-muted-foreground">
                        (Once Only)
                      </td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3">Library Fund</td>
                      <td className="px-4 py-3 font-medium">2,000/-</td>
                      <td className="px-4 py-3 text-muted-foreground">
                        (Once Only)
                      </td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3">Security Deposit</td>
                      <td className="px-4 py-3 font-medium">5,000/-</td>
                      <td className="px-4 py-3 text-muted-foreground">
                        (Once & Refundable)
                      </td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3">University Registration Fee</td>
                      <td className="px-4 py-3 font-medium">As per actual</td>
                      <td className="px-4 py-3 text-muted-foreground"></td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3">University Exam Fee</td>
                      <td className="px-4 py-3 font-medium">As per actual</td>
                      <td className="px-4 py-3 text-muted-foreground"></td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3">Tuition Fee</td>
                      <td className="px-4 py-3 font-medium">70,000/-</td>
                      <td className="px-4 py-3 text-muted-foreground"></td>
                    </tr>
                    <tr className="bg-primary/5">
                      <td className="px-4 py-3 font-bold">
                        Total Fee & Dues 1st Semester
                      </td>
                      <td className="px-4 py-3 font-bold">92,000/-</td>
                      <td className="px-4 py-3 text-muted-foreground"></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Other AHS Programs Fee Structure */}
            <div className="bg-background p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold mb-6 text-muted-foreground">
                Allied Health Sciences Programs
              </h3>
              <div className="overflow-x-auto">
                <table className="w-full text-left">
                  <thead>
                    <tr className="bg-primary/5">
                      <th className="px-4 py-3 text-muted-foreground font-semibold">
                        Particulars
                      </th>
                      <th className="px-4 py-3 text-muted-foreground font-semibold">
                        Amount (PKR)
                      </th>
                      <th className="px-4 py-3 text-muted-foreground font-semibold">
                        Remarks
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y">
                    <tr>
                      <td className="px-4 py-3">Admission Fee</td>
                      <td className="px-4 py-3 font-medium">10,000/-</td>
                      <td className="px-4 py-3 text-muted-foreground">
                        (Once Only)
                      </td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3">Security Deposit</td>
                      <td className="px-4 py-3 font-medium">5,000/-</td>
                      <td className="px-4 py-3 text-muted-foreground">
                        (Once & Refundable)
                      </td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3">University Registration Fee</td>
                      <td className="px-4 py-3 font-medium">As per actual</td>
                      <td className="px-4 py-3 text-muted-foreground"></td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3">University Exam Fee</td>
                      <td className="px-4 py-3 font-medium">As per actual</td>
                      <td className="px-4 py-3 text-muted-foreground"></td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3">Tuition Fee</td>
                      <td className="px-4 py-3 font-medium">60,000/-</td>
                      <td className="px-4 py-3 text-muted-foreground"></td>
                    </tr>
                    <tr className="bg-primary/5">
                      <td className="px-4 py-3 font-bold">
                        Total Fee & Dues 1st Semester
                      </td>
                      <td className="px-4 py-3 font-bold">75,000/-</td>
                      <td className="px-4 py-3 text-muted-foreground"></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Important Notes */}
          <div className="mt-12 bg-background p-8 rounded-lg shadow-md">
            <h3 className="text-2xl font-bold mb-6 text-muted-foreground">
              Important Notes
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Info className="text-primary mt-1 flex-shrink-0" size={20} />
                <p className="text-muted-foreground">
                  Reduction of Rs. 5,000 shall be given in 2nd and 3rd semester
                  out of admission fee to deserving students.
                </p>
              </li>
              <li className="flex items-start gap-3">
                <Info className="text-primary mt-1 flex-shrink-0" size={20} />
                <p className="text-muted-foreground">
                  Sports and co-curricular activities shall be arranged and
                  funded by student council.
                </p>
              </li>
              <li className="flex items-start gap-3">
                <Info className="text-primary mt-1 flex-shrink-0" size={20} />
                <p className="text-muted-foreground">
                  Hostel and transportation available (optional).
                </p>
              </li>
              <li className="flex items-start gap-3">
                <Info className="text-primary mt-1 flex-shrink-0" size={20} />
                <p className="text-muted-foreground">
                  All newly admitted students must provide medical fitness
                  certificate from HBS General Hospital, Islamabad within 2
                  weeks on their own expense.
                </p>
              </li>
              <li className="flex items-start gap-3">
                <Info className="text-primary mt-1 flex-shrink-0" size={20} />
                <p className="text-muted-foreground">
                  This is discounted fees for each semester. 2% interest will be
                  charged for the second instalment to be paid no later nine
                  weeks after the start of classes.
                </p>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Application Timeline */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-muted-foreground">
              Application Timeline
            </h2>
            <p className="text-muted-foreground max-w-3xl mx-auto">
              Mark these important dates to ensure you don't miss any deadlines
              in the admission process.
            </p>
          </div>

          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-primary/20 transform md:translate-x-px"></div>

            {/* Timeline Items */}
            <div className="space-y-12">
              {/* Item 1 */}
              <div className="relative flex flex-col md:flex-row items-center md:justify-between">
                <div className="flex flex-col md:w-5/12 md:text-right md:pr-8">
                  <h3 className="text-xl font-bold text-muted-foreground">
                    Application Submission
                  </h3>
                  <p className="text-muted-foreground">
                    Submit your application form along with all required
                    documents.
                  </p>
                </div>
                <div className="absolute left-4 md:left-1/2 w-8 h-8 bg-primary rounded-full flex items-center justify-center transform -translate-x-4 md:-translate-x-4 z-10">
                  <Calendar className="text-primary-foreground" size={16} />
                </div>
                <div className="flex flex-col md:w-5/12 md:pl-8 mt-4 md:mt-0">
                  <span className="text-primary font-bold">
                    July 1 - August 15, 2023
                  </span>
                </div>
              </div>

              {/* Item 2 */}
              <div className="relative flex flex-col md:flex-row items-center md:justify-between">
                <div className="flex flex-col md:w-5/12 md:text-right md:pr-8">
                  <h3 className="text-xl font-bold text-muted-foreground">
                    Entrance Test
                  </h3>
                  <p className="text-muted-foreground">
                    Appear for the SZABMU Test or submit your MDCAT score.
                  </p>
                </div>
                <div className="absolute left-4 md:left-1/2 w-8 h-8 bg-primary rounded-full flex items-center justify-center transform -translate-x-4 md:-translate-x-4 z-10">
                  <FileText className="text-primary-foreground" size={16} />
                </div>
                <div className="flex flex-col md:w-5/12 md:pl-8 mt-4 md:mt-0">
                  <span className="text-primary font-bold">
                    August 25, 2023
                  </span>
                </div>
              </div>

              {/* Item 3 */}
              <div className="relative flex flex-col md:flex-row items-center md:justify-between">
                <div className="flex flex-col md:w-5/12 md:text-right md:pr-8">
                  <h3 className="text-xl font-bold text-muted-foreground">
                    Interview
                  </h3>
                  <p className="text-muted-foreground">
                    Shortlisted candidates will be called for an interview.
                  </p>
                </div>
                <div className="absolute left-4 md:left-1/2 w-8 h-8 bg-primary rounded-full flex items-center justify-center transform -translate-x-4 md:-translate-x-4 z-10">
                  <HelpCircle className="text-primary-foreground" size={16} />
                </div>
                <div className="flex flex-col md:w-5/12 md:pl-8 mt-4 md:mt-0">
                  <span className="text-primary font-bold">
                    September 5-10, 2023
                  </span>
                </div>
              </div>

              {/* Item 4 */}
              <div className="relative flex flex-col md:flex-row items-center md:justify-between">
                <div className="flex flex-col md:w-5/12 md:text-right md:pr-8">
                  <h3 className="text-xl font-bold text-muted-foreground">
                    Merit List Display
                  </h3>
                  <p className="text-muted-foreground">
                    Final merit list will be displayed on the college notice
                    board and website.
                  </p>
                </div>
                <div className="absolute left-4 md:left-1/2 w-8 h-8 bg-primary rounded-full flex items-center justify-center transform -translate-x-4 md:-translate-x-4 z-10">
                  <Clip className="text-primary-foreground" size={16} />
                </div>
                <div className="flex flex-col md:w-5/12 md:pl-8 mt-4 md:mt-0">
                  <span className="text-primary font-bold">
                    September 15, 2023
                  </span>
                </div>
              </div>

              {/* Item 5 */}
              <div className="relative flex flex-col md:flex-row items-center md:justify-between">
                <div className="flex flex-col md:w-5/12 md:text-right md:pr-8">
                  <h3 className="text-xl font-bold text-muted-foreground">
                    Fee Submission
                  </h3>
                  <p className="text-muted-foreground">
                    Selected candidates must submit their fees to confirm
                    admission.
                  </p>
                </div>
                <div className="absolute left-4 md:left-1/2 w-8 h-8 bg-primary rounded-full flex items-center justify-center transform -translate-x-4  md:-translate-x-4 z-10">
                  <Clip className="text-primary-foreground" size={16} />
                </div>
                <div className="flex flex-col md:w-5/12 md:pl-8 mt-4 md:mt-0">
                  <span className="text-primary font-bold">
                    September 16-25, 2023
                  </span>
                </div>
              </div>

              {/* Item 6 */}
              <div className="relative flex flex-col md:flex-row items-center md:justify-between">
                <div className="flex flex-col md:w-5/12 md:text-right md:pr-8">
                  <h3 className="text-xl font-bold text-muted-foreground">
                    Classes Begin
                  </h3>
                  <p className="text-muted-foreground">
                    Start of academic session for new students.
                  </p>
                </div>
                <div className="absolute left-4 md:left-1/2 w-8 h-8 bg-primary rounded-full flex items-center justify-center transform -translate-x-4 md:-translate-x-4 z-10">
                  <Calendar className="text-primary-foreground" size={16} />
                </div>
                <div className="flex flex-col md:w-5/12 md:pl-8 mt-4 md:mt-0">
                  <span className="text-primary font-bold">
                    October 1, 2023
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact & Location */}
      <section className="py-16 px-4 bg-muted/50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-muted-foreground">
              Contact & Location
            </h2>
            <p className="text-muted-foreground max-w-3xl mx-auto">
              Have questions about admissions? Get in touch with our admissions
              office.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-background p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold mb-6 text-muted-foreground">
                Contact Information
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <MapPin
                    className="text-primary mt-1 flex-shrink-0"
                    size={20}
                  />
                  <div>
                    <p className="font-medium text-muted-foreground">
                      Address:
                    </p>
                    <p className="text-muted-foreground">
                      30 C, Street No. 6, Lane No. 10, Hostel City, Park Road
                      Islamabad.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Phone
                    className="text-primary mt-1 flex-shrink-0"
                    size={20}
                  />
                  <div>
                    <p className="font-medium text-muted-foreground">Phone:</p>
                    <p className="text-muted-foreground">051-2321358</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Mail className="text-primary mt-1 flex-shrink-0" size={20} />
                  <div>
                    <p className="font-medium text-muted-foreground">Email:</p>
                    <p className="text-muted-foreground">
                      info.rehab@hbs.edu.pk
                    </p>
                  </div>
                </li>
              </ul>

              <div className="mt-8">
                <h4 className="text-lg font-bold mb-4 text-muted-foreground">
                  Office Hours
                </h4>
                <ul className="space-y-2">
                  <li className="flex justify-between">
                    <span className="text-muted-foreground">
                      Monday - Friday
                    </span>
                    <span className="font-medium text-muted-foreground">
                      9:00 AM - 5:00 PM
                    </span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-muted-foreground">Saturday</span>
                    <span className="font-medium text-muted-foreground">
                      9:00 AM - 1:00 PM
                    </span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-muted-foreground">Sunday</span>
                    <span className="font-medium text-muted-foreground">
                      Closed
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-muted rounded-lg shadow-md h-80 flex items-center justify-center">
              <div className="text-center">
                <p className="text-muted-foreground mb-2">Map Placeholder</p>
                <p className="text-sm text-muted-foreground/50">
                  (Interactive map would be embedded here)
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-primary text-primary-foreground">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="md:w-2/3">
              <h2 className="text-3xl font-bold mb-4">Ready to Apply?</h2>
              <p className="text-xl mb-0">
                Take the first step towards your healthcare career by applying
                to HBS College of Rehabilitation & Allied Health Sciences today.
              </p>
            </div>
            <div className="md:w-1/3 flex justify-center md:justify-end">
              <Button variant="outline" className="text-foreground">
                Apply Now
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
