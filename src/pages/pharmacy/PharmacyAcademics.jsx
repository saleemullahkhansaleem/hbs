const PharmacyAcademics = () => {
  return (
    <div className="min-h-screen bg-muted/50">
      {/* Hero Section */}
      <div className="relative bg-primary text-primary-foreground">
        <div className="absolute inset-0 bg-gradient-to-r from-primary to-primary opacity-90"></div>
        <div className="container mx-auto px-4 py-24 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Academics</h1>
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
              About Our Program
            </h2>
            <p className="text-muted-foreground mb-4">
              HBS College of Pharmacy offers a comprehensive Pharm-D program
              designed to prepare students for successful careers in the
              pharmaceutical industry. Our curriculum combines theoretical
              knowledge with practical experience, ensuring graduates are
              well-equipped to meet the demands of the profession.
            </p>
            <p className="text-muted-foreground mb-4">
              Pharm-D is a five years' undergraduate degree program for those
              who are interested to pursue a career in the field of health and
              Pharmaceutical Sciences. The students with medical background can
              opt for this degree fulfilling the admission criteria.
            </p>
            <p className="text-muted-foreground">
              Pharm-D degree is recognized by the Pharmacy Council of Pakistan
              and is widely accepted nationally and internationally. The
              graduates can fill the increasing demand of retail, hospital,
              warehouse management and industrial pharmacists and they can join
              the government and research organizations.
            </p>
          </section>

          {/* Program Overview */}
          <section className="mb-16">
            <div className="bg-background rounded-lg shadow-md overflow-hidden">
              <div className="bg-primary text-primary-foreground p-6">
                <h2 className="text-2xl font-bold">Program Overview</h2>
              </div>
              <div className="p-6">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-semibold text-primary mb-4">
                      Program Details
                    </h3>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <div className="flex-shrink-0 h-5 w-5 rounded-full bg-primary flex items-center justify-center mt-1">
                          <span className="text-primary-foreground text-xs">✓</span>
                        </div>
                        <span className="ml-3 text-muted-foreground">
                          5-year professional degree program
                        </span>
                      </li>
                      <li className="flex items-start">
                        <div className="flex-shrink-0 h-5 w-5 rounded-full bg-primary flex items-center justify-center mt-1">
                          <span className="text-primary-foreground text-xs">✓</span>
                        </div>
                        <span className="ml-3 text-muted-foreground">
                          10 semesters of coursework
                        </span>
                      </li>
                      <li className="flex items-start">
                        <div className="flex-shrink-0 h-5 w-5 rounded-full bg-primary flex items-center justify-center mt-1">
                          <span className="text-primary-foreground text-xs">✓</span>
                        </div>
                        <span className="ml-3 text-muted-foreground">
                          Recognized by Pharmacy Council of Pakistan
                        </span>
                      </li>
                      <li className="flex items-start">
                        <div className="flex-shrink-0 h-5 w-5 rounded-full bg-primary flex items-center justify-center mt-1">
                          <span className="text-primary-foreground text-xs">✓</span>
                        </div>
                        <span className="ml-3 text-muted-foreground">
                          Clinical rotations at HBS General Hospital
                        </span>
                      </li>
                      <li className="flex items-start">
                        <div className="flex-shrink-0 h-5 w-5 rounded-full bg-primary flex items-center justify-center mt-1">
                          <span className="text-primary-foreground text-xs">✓</span>
                        </div>
                        <span className="ml-3 text-muted-foreground">
                          Research projects in final year
                        </span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-primary mb-4">
                      Learning Outcomes
                    </h3>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <div className="flex-shrink-0 h-5 w-5 rounded-full bg-primary flex items-center justify-center mt-1">
                          <span className="text-primary-foreground text-xs">✓</span>
                        </div>
                        <span className="ml-3 text-muted-foreground">
                          Comprehensive knowledge of pharmaceutical sciences
                        </span>
                      </li>
                      <li className="flex items-start">
                        <div className="flex-shrink-0 h-5 w-5 rounded-full bg-primary flex items-center justify-center mt-1">
                          <span className="text-primary-foreground text-xs">✓</span>
                        </div>
                        <span className="ml-3 text-muted-foreground">
                          Practical skills in drug formulation and dispensing
                        </span>
                      </li>
                      <li className="flex items-start">
                        <div className="flex-shrink-0 h-5 w-5 rounded-full bg-primary flex items-center justify-center mt-1">
                          <span className="text-primary-foreground text-xs">✓</span>
                        </div>
                        <span className="ml-3 text-muted-foreground">
                          Clinical expertise in patient care
                        </span>
                      </li>
                      <li className="flex items-start">
                        <div className="flex-shrink-0 h-5 w-5 rounded-full bg-primary flex items-center justify-center mt-1">
                          <span className="text-primary-foreground text-xs">✓</span>
                        </div>
                        <span className="ml-3 text-muted-foreground">
                          Research and analytical capabilities
                        </span>
                      </li>
                      <li className="flex items-start">
                        <div className="flex-shrink-0 h-5 w-5 rounded-full bg-primary flex items-center justify-center mt-1">
                          <span className="text-primary-foreground text-xs">✓</span>
                        </div>
                        <span className="ml-3 text-muted-foreground">
                          Professional ethics and communication skills
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Curriculum */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-primary mb-6">
              Curriculum Structure
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-background rounded-lg shadow-md p-6">
                <h3 className="text-xl font-semibold text-primary mb-4 border-b pb-2">
                  Years 1-2: Foundation
                </h3>
                <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                  <li>Pharmaceutical Chemistry</li>
                  <li>Human Anatomy & Physiology</li>
                  <li>Biochemistry</li>
                  <li>Pharmaceutics</li>
                  <li>Pharmacognosy</li>
                  <li>Microbiology & Immunology</li>
                  <li>Pharmaceutical Mathematics</li>
                  <li>Pakistan Studies & Islamic Studies</li>
                  <li>English & Communication Skills</li>
                </ul>
              </div>
              <div className="bg-background rounded-lg shadow-md p-6">
                <h3 className="text-xl font-semibold text-primary mb-4 border-b pb-2">
                  Years 3-4: Advanced Studies
                </h3>
                <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                  <li>Pharmacology</li>
                  <li>Medicinal Chemistry</li>
                  <li>Pharmaceutical Quality Management</li>
                  <li>Biopharmaceutics & Pharmacokinetics</li>
                  <li>Pharmaceutical Technology</li>
                  <li>Clinical Pharmacy</li>
                  <li>Hospital Pharmacy</li>
                  <li>Pharmacy Practice</li>
                  <li>Research Methodology & Biostatistics</li>
                </ul>
              </div>
            </div>
            <div className="mt-8 bg-background rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-primary mb-4 border-b pb-2">
                Year 5: Clinical Rotations & Research
              </h3>
              <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                <li>Clinical Rotations in Various Hospital Departments</li>
                <li>Advanced Hospital Pharmacy</li>
                <li>Pharmacy Law & Ethics</li>
                <li>Pharmaceutical Marketing & Management</li>
                <li>Research Project</li>
                <li>Industrial Training</li>
              </ul>
            </div>
          </section>

          {/* Career Opportunities */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-primary mb-6">
              Career Opportunities
            </h2>
            <div className="bg-background rounded-lg shadow-md p-6">
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-primary/5 p-5 rounded-lg">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-primary"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                      />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-primary mb-2">
                    Hospital Pharmacy
                  </h3>
                  <p className="text-muted-foreground">
                    Work in hospital pharmacies managing medication dispensing
                    and patient counseling
                  </p>
                </div>
                <div className="bg-primary/5 p-5 rounded-lg">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-primary"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-primary mb-2">
                    Industrial Pharmacy
                  </h3>
                  <p className="text-muted-foreground">
                    Join pharmaceutical companies in production, quality
                    control, or research roles
                  </p>
                </div>
                <div className="bg-primary/5 p-5 rounded-lg">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-primary"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                      />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-primary mb-2">
                    Retail Pharmacy
                  </h3>
                  <p className="text-muted-foreground">
                    Manage or work in community pharmacies serving the public
                  </p>
                </div>
                <div className="bg-primary/5 p-5 rounded-lg">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-primary"
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
                  <h3 className="text-lg font-semibold text-primary mb-2">
                    Regulatory Affairs
                  </h3>
                  <p className="text-muted-foreground">
                    Work with government agencies regulating pharmaceutical
                    products
                  </p>
                </div>
                <div className="bg-primary/5 p-5 rounded-lg">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-primary"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-primary mb-2">
                    Research & Development
                  </h3>
                  <p className="text-muted-foreground">
                    Pursue research careers in academic or industrial settings
                  </p>
                </div>
                <div className="bg-primary/5 p-5 rounded-lg">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-primary"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-primary mb-2">
                    Clinical Research
                  </h3>
                  <p className="text-muted-foreground">
                    Participate in clinical trials and drug development
                    processes
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Accreditation */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-primary mb-6">
              Accreditation
            </h2>
            <div className="bg-background rounded-lg shadow-md p-6">
              <div className="flex flex-col md:flex-row items-center">
                <div className="md:w-1/4 flex justify-center mb-6 md:mb-0">
                  <div className="w-32 h-32 bg-primary/10 rounded-full flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-16 w-16 text-primary"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                      />
                    </svg>
                  </div>
                </div>
                <div className="md:w-3/4 md:pl-8">
                  <h3 className="text-xl font-semibold text-primary mb-4">
                    Pharmacy Council of Pakistan
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    The Pharm-D program at HBS College of Pharmacy is recognized
                    by the Pharmacy Council of Pakistan and is widely accepted
                    nationally and internationally.
                  </p>
                  <p className="text-muted-foreground">
                    Our program meets all standards and requirements set by the
                    Pharmacy Council of Pakistan, ensuring our graduates receive
                    a recognized qualification that enables them to practice
                    pharmacy professionally across Pakistan and pursue further
                    education or career opportunities abroad.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Contact */}
          <section>
            <div className="bg-primary text-primary-foreground rounded-lg shadow-md p-8">
              <h2 className="text-2xl font-bold mb-4">
                Have Questions About Our Program?
              </h2>
              <p className="mb-6">
                Contact our academic office for more information about the
                Pharm-D program.
              </p>
              <div className="flex flex-col md:flex-row md:items-center space-y-4 md:space-y-0 md:space-x-6">
                <div className="flex items-center">
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
                </div>
                <div className="flex items-center">
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
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PharmacyAcademics;
