const PharmacyAdmissions = () => {
  return (
    <div className="min-h-screen bg-muted/50">
      {/* Hero Section */}
      <div className="relative bg-primary text-primary-foreground">
        <div className="absolute inset-0 bg-gradient-to-r from-primary to-primary opacity-90"></div>
        <div className="container mx-auto px-4 py-24 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Admissions</h1>
            <p className="text-xl md:text-2xl">HBS College of Pharmacy</p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-5xl mx-auto">
          {/* Introduction */}
          <section className="mb-16 bg-background rounded-lg shadow-md p-8">
            <h2 className="text-3xl font-bold text-primary mb-6 border-b pb-3">
              Admission Process
            </h2>
            <p className="text-muted-foreground mb-6">
              HBS College of Pharmacy welcomes applications from qualified
              students who are passionate about pursuing a career in pharmacy.
              Our admission process is designed to select candidates who
              demonstrate academic excellence and a commitment to the field of
              pharmaceutical sciences.
            </p>

            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="bg-primary/5 p-6 rounded-lg text-center">
                <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold">1</span>
                </div>
                <h3 className="font-semibold text-primary mb-2">Application</h3>
                <p className="text-muted-foreground">
                  Submit your application form with all required documents
                </p>
              </div>
              <div className="bg-primary/5 p-6 rounded-lg text-center">
                <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold">2</span>
                </div>
                <h3 className="font-semibold text-primary mb-2">Evaluation</h3>
                <p className="text-muted-foreground">
                  Applications are evaluated based on academic merit
                </p>
              </div>
              <div className="bg-primary/5 p-6 rounded-lg text-center">
                <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold">3</span>
                </div>
                <h3 className="font-semibold text-primary mb-2">Admission</h3>
                <p className="text-muted-foreground">
                  Selected candidates receive admission offers
                </p>
              </div>
            </div>
          </section>

          {/* Eligibility & Requirements */}
          <section className="mb-16">
            <div className="bg-background rounded-lg shadow-md overflow-hidden">
              <div className="bg-primary text-primary-foreground p-6">
                <h2 className="text-2xl font-bold">
                  Eligibility & Requirements
                </h2>
              </div>
              <div className="p-6">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-semibold text-primary mb-4">
                      Eligibility Criteria
                    </h3>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <div className="flex-shrink-0 h-5 w-5 rounded-full bg-primary flex items-center justify-center mt-1">
                          <span className="text-primary-foreground text-xs">
                            ✓
                          </span>
                        </div>
                        <span className="ml-3 text-muted-foreground">
                          Minimum 60% marks in F.Sc (Pre-Medical) or equivalent
                          qualification
                        </span>
                      </li>
                      <li className="flex items-start">
                        <div className="flex-shrink-0 h-5 w-5 rounded-full bg-primary flex items-center justify-center mt-1">
                          <span className="text-primary-foreground text-xs">
                            ✓
                          </span>
                        </div>
                        <span className="ml-3 text-muted-foreground">
                          Passing score in the college entrance test
                        </span>
                      </li>
                      <li className="flex items-start">
                        <div className="flex-shrink-0 h-5 w-5 rounded-full bg-primary flex items-center justify-center mt-1">
                          <span className="text-primary-foreground text-xs">
                            ✓
                          </span>
                        </div>
                        <span className="ml-3 text-muted-foreground">
                          Interview performance
                        </span>
                      </li>
                      <li className="flex items-start">
                        <div className="flex-shrink-0 h-5 w-5 rounded-full bg-primary flex items-center justify-center mt-1">
                          <span className="text-primary-foreground text-xs">
                            ✓
                          </span>
                        </div>
                        <span className="ml-3 text-muted-foreground">
                          Medical fitness
                        </span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-primary mb-4">
                      Required Documents
                    </h3>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <div className="flex-shrink-0 h-5 w-5 rounded-full bg-primary flex items-center justify-center mt-1">
                          <span className="text-primary-foreground text-xs">
                            ✓
                          </span>
                        </div>
                        <span className="ml-3 text-muted-foreground">
                          Completed application form
                        </span>
                      </li>
                      <li className="flex items-start">
                        <div className="flex-shrink-0 h-5 w-5 rounded-full bg-primary flex items-center justify-center mt-1">
                          <span className="text-primary-foreground text-xs">
                            ✓
                          </span>
                        </div>
                        <span className="ml-3 text-muted-foreground">
                          Attested copies of academic certificates and
                          transcripts
                        </span>
                      </li>
                      <li className="flex items-start">
                        <div className="flex-shrink-0 h-5 w-5 rounded-full bg-primary flex items-center justify-center mt-1">
                          <span className="text-primary-foreground text-xs">
                            ✓
                          </span>
                        </div>
                        <span className="ml-3 text-muted-foreground">
                          Copy of CNIC/B-Form
                        </span>
                      </li>
                      <li className="flex items-start">
                        <div className="flex-shrink-0 h-5 w-5 rounded-full bg-primary flex items-center justify-center mt-1">
                          <span className="text-primary-foreground text-xs">
                            ✓
                          </span>
                        </div>
                        <span className="ml-3 text-muted-foreground">
                          Four recent passport-sized photographs
                        </span>
                      </li>
                      <li className="flex items-start">
                        <div className="flex-shrink-0 h-5 w-5 rounded-full bg-primary flex items-center justify-center mt-1">
                          <span className="text-primary-foreground text-xs">
                            ✓
                          </span>
                        </div>
                        <span className="ml-3 text-muted-foreground">
                          Character certificate from last attended institution
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Fee Structure */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-primary mb-6">
              Fee Structure
            </h2>

            {/* First Semester Fee */}
            <div className="bg-background rounded-lg shadow-md p-6 mb-8">
              <h3 className="text-2xl font-semibold text-primary mb-4 border-b pb-2">
                Fee Structure for First Semester
              </h3>
              <div className="overflow-x-auto">
                <table className="min-w-full bg-background border">
                  <thead>
                    <tr className="bg-primary/5">
                      <th className="py-3 px-4 text-left font-semibold text-primary border-b">
                        PARTICULARS
                      </th>
                      <th className="py-3 px-4 text-left font-semibold text-primary border-b">
                        AMOUNT (PKR)
                      </th>
                      <th className="py-3 px-4 text-left font-semibold text-primary border-b">
                        REMARKS
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y">
                    <tr>
                      <td className="py-3 px-4 text-muted-foreground border-b">
                        Admission Fee
                      </td>
                      <td className="py-3 px-4 text-muted-foreground border-b">
                        30,000
                      </td>
                      <td className="py-3 px-4 text-muted-foreground border-b">
                        (Once Only)
                      </td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 text-muted-foreground border-b">
                        Pharmacy Council of Pakistan Registration Fee and Photo
                        ID
                      </td>
                      <td className="py-3 px-4 text-muted-foreground border-b">
                        2,000
                      </td>
                      <td className="py-3 px-4 text-muted-foreground border-b">
                        (Once Only)
                      </td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 text-muted-foreground border-b">
                        Security Deposit
                      </td>
                      <td className="py-3 px-4 text-muted-foreground border-b">
                        10,000
                      </td>
                      <td className="py-3 px-4 text-muted-foreground border-b">
                        (Once Only)
                      </td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 text-muted-foreground border-b">
                        University Affiliation Fee
                      </td>
                      <td className="py-3 px-4 text-muted-foreground border-b">
                        10,000
                      </td>
                      <td className="py-3 px-4 text-muted-foreground border-b"></td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 text-muted-foreground border-b">
                        Examination Fee
                      </td>
                      <td className="py-3 px-4 text-muted-foreground border-b">
                        10,000
                      </td>
                      <td className="py-3 px-4 text-muted-foreground border-b"></td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 text-muted-foreground border-b">
                        Tuition Fee
                      </td>
                      <td className="py-3 px-4 text-muted-foreground border-b">
                        90,000
                      </td>
                      <td className="py-3 px-4 text-muted-foreground border-b"></td>
                    </tr>
                    <tr className="bg-primary/5">
                      <td className="py-3 px-4 font-semibold text-primary">
                        Total 1st Semester Fee
                      </td>
                      <td className="py-3 px-4 font-semibold text-primary">
                        142,000
                      </td>
                      <td className="py-3 px-4 font-semibold text-primary"></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Second Semester Fee */}
            <div className="bg-background rounded-lg shadow-md p-6 mb-8">
              <h3 className="text-2xl font-semibold text-primary mb-4 border-b pb-2">
                Fee Structure for Second Semester
              </h3>
              <div className="overflow-x-auto">
                <table className="min-w-full bg-background border">
                  <thead>
                    <tr className="bg-primary/5">
                      <th className="py-3 px-4 text-left font-semibold text-primary border-b">
                        PARTICULARS
                      </th>
                      <th className="py-3 px-4 text-left font-semibold text-primary border-b">
                        AMOUNT (PKR)
                      </th>
                      <th className="py-3 px-4 text-left font-semibold text-primary border-b">
                        REMARKS
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y">
                    <tr>
                      <td className="py-3 px-4 text-muted-foreground border-b">
                        University Affiliation Fee
                      </td>
                      <td className="py-3 px-4 text-muted-foreground border-b">
                        10,000
                      </td>
                      <td className="py-3 px-4 text-muted-foreground border-b"></td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 text-muted-foreground border-b">
                        Examination Fee
                      </td>
                      <td className="py-3 px-4 text-muted-foreground border-b">
                        10,000
                      </td>
                      <td className="py-3 px-4 text-muted-foreground border-b"></td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 text-muted-foreground border-b">
                        Tuition Fee
                      </td>
                      <td className="py-3 px-4 text-muted-foreground border-b">
                        80,000
                      </td>
                      <td className="py-3 px-4 text-muted-foreground border-b"></td>
                    </tr>
                    <tr className="bg-primary/5">
                      <td className="py-3 px-4 font-semibold text-primary">
                        Total 2nd Semester Fee
                      </td>
                      <td className="py-3 px-4 font-semibold text-primary">
                        100,000
                      </td>
                      <td className="py-3 px-4 font-semibold text-primary"></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Notes */}
            <div className="bg-background rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-primary mb-4 border-b pb-2">
                Important Notes:
              </h3>
              <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                <li>
                  All newly admitted students must provide medical fitness
                  certificate from HBS General Hospital, Islamabad within 2
                  weeks on their own expense.
                </li>
                <li>
                  Rs. 10,000 fee reduction shall be given in second and third
                  semester, out of the mentioned admission fee to deserving
                  students.
                </li>
                <li>
                  The average fee per semester from 4th to 10th semester shall
                  be Rs 110,000.
                </li>
                <li>Fee shall be increased at the rate of 7% per annum.</li>
              </ul>
            </div>
          </section>

          {/* Scholarship Policy */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-primary mb-6">
              Scholarship Policy
            </h2>
            <div className="bg-background rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-primary mb-4 border-b pb-2">
                Merit-Based Scholarships
              </h3>
              <p className="text-muted-foreground mb-4">
                The merit scholarships shall be offered to the students based on
                F.Sc marks, as per policy below:
              </p>
              <div className="overflow-x-auto">
                <table className="min-w-full bg-background border">
                  <thead>
                    <tr className="bg-primary/5">
                      <th className="py-3 px-4 text-left font-semibold text-primary border-b">
                        F.Sc MARKS
                      </th>
                      <th className="py-3 px-4 text-left font-semibold text-primary border-b">
                        OFFERED SCHOLARSHIP
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y">
                    <tr>
                      <td className="py-3 px-4 text-muted-foreground border-b">
                        90% and above
                      </td>
                      <td className="py-3 px-4 text-muted-foreground border-b">
                        20% of the Tuition Fee
                      </td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 text-muted-foreground border-b">
                        86-90%
                      </td>
                      <td className="py-3 px-4 text-muted-foreground border-b">
                        15% of the Tuition Fee
                      </td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 text-muted-foreground border-b">
                        81-85%
                      </td>
                      <td className="py-3 px-4 text-muted-foreground border-b">
                        10% of the Tuition Fee
                      </td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 text-muted-foreground border-b">
                        70-80%
                      </td>
                      <td className="py-3 px-4 text-muted-foreground border-b">
                        5% of the Tuition Fee
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </section>

          {/* Application Timeline */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-primary mb-6">
              Application Timeline
            </h2>
            <div className="bg-background rounded-lg shadow-md p-6">
              <div className="relative">
                <div className="absolute left-4 inset-y-0 w-0.5 bg-primary/20"></div>
                <div className="space-y-8 relative">
                  <div className="flex">
                    <div className="flex-shrink-0 w-8 h-8 bg-primary rounded-full flex items-center justify-center z-10 mr-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 text-primary-foreground"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-primary">
                        Application Submission
                      </h3>
                      <p className="text-muted-foreground">July - August</p>
                    </div>
                  </div>
                  <div className="flex">
                    <div className="flex-shrink-0 w-8 h-8 bg-primary rounded-full flex items-center justify-center z-10 mr-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 text-primary-foreground"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                        />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-primary">
                        Entrance Test
                      </h3>
                      <p className="text-muted-foreground">August</p>
                    </div>
                  </div>
                  <div className="flex">
                    <div className="flex-shrink-0 w-8 h-8 bg-primary rounded-full flex items-center justify-center z-10 mr-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 text-primary-foreground"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-primary">
                        Interviews
                      </h3>
                      <p className="text-muted-foreground">
                        Late August - Early September
                      </p>
                    </div>
                  </div>
                  <div className="flex">
                    <div className="flex-shrink-0 w-8 h-8 bg-primary rounded-full flex items-center justify-center z-10 mr-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 text-primary-foreground"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-primary">
                        Admission Offers
                      </h3>
                      <p className="text-muted-foreground">September</p>
                    </div>
                  </div>
                  <div className="flex">
                    <div className="flex-shrink-0 w-8 h-8 bg-primary rounded-full flex items-center justify-center z-10 mr-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 text-primary-foreground"
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
                    <div>
                      <h3 className="text-lg font-semibold text-primary">
                        Classes Begin
                      </h3>
                      <p className="text-muted-foreground">October</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Contact */}
          <section>
            <div className="bg-primary text-primary-foreground rounded-lg shadow-md p-8">
              <h2 className="text-2xl font-bold mb-4">
                Contact Admissions Office
              </h2>
              <p className="mb-6">
                For more information about admissions, please contact our
                admissions office.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-xl font-semibold mb-4">
                    Contact Information
                  </h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 mr-2 mt-0.5"
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
                      <span>
                        30 B, Street No. 6, Lane No. 10, Hostel City, Park Road
                        Islamabad
                      </span>
                    </li>
                    <li className="flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 mr-2"
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
                      <span>051-2321358</span>
                    </li>
                    <li className="flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 mr-2"
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
                      <span>info.pharmacy@hbs.edu.pk</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-4">Office Hours</h3>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 mr-2"
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
                      <span>Monday to Friday: 9:00 AM - 5:00 PM</span>
                    </li>
                    <li className="flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 mr-2"
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
                      <span>Saturday: 9:00 AM - 1:00 PM</span>
                    </li>
                    <li className="flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 mr-2"
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
                      <span>Sunday: Closed</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PharmacyAdmissions;
