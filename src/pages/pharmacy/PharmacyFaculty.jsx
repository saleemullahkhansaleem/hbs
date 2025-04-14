const PharmacyFaculty = () => {
  return (
    <div className="min-h-screen bg-muted/50">
      {/* Hero Section */}
      <div className="relative bg-primary text-primary-foreground">
        <div className="absolute inset-0 bg-gradient-to-r from-primary to-primary opacity-90"></div>
        <div className="container mx-auto px-4 py-24 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Faculty</h1>
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
              Meet Our Faculty
            </h2>
            <p className="text-muted-foreground mb-4">
              HBS College of Pharmacy is proud to have a team of highly
              qualified and experienced faculty members who are dedicated to
              providing quality education and mentorship to our students. Our
              faculty brings together expertise from various specializations
              within pharmaceutical sciences.
            </p>
          </section>

          {/* Leadership */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-primary mb-6">
              Leadership
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-background rounded-lg shadow-md overflow-hidden">
                <div className="p-6">
                  <div className="flex flex-col md:flex-row">
                    <div className="md:w-1/3 mb-4 md:mb-0 flex justify-center">
                      <div className="w-40 h-40 bg-primary/10 rounded-full overflow-hidden flex items-center justify-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-20 w-20 text-primary"
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
                    </div>
                    <div className="md:w-2/3 md:pl-6">
                      <h3 className="text-xl font-semibold text-primary mb-1">
                        Dr. Ismail Khan
                      </h3>
                      <p className="text-primary font-medium mb-3">
                        Principal / Professor
                      </p>
                      <div className="mb-3">
                        <span className="inline-block bg-primary/10 text-primary text-xs px-2 py-1 rounded-full mr-2 mb-2">
                          PhD. Pharmaceutics
                        </span>
                        <span className="inline-block bg-primary/10 text-primary text-xs px-2 py-1 rounded-full mr-2 mb-2">
                          Pharm-D
                        </span>
                      </div>
                      <p className="text-muted-foreground mb-3">17 Years experience</p>
                      <p className="text-muted-foreground">
                        Dr. Ismail Khan leads our institution with extensive
                        experience in pharmaceutical education and research.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-background rounded-lg shadow-md overflow-hidden">
                <div className="p-6">
                  <div className="flex flex-col md:flex-row">
                    <div className="md:w-1/3 mb-4 md:mb-0 flex justify-center">
                      <div className="w-40 h-40 bg-primary/10 rounded-full overflow-hidden flex items-center justify-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-20 w-20 text-primary"
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
                    </div>
                    <div className="md:w-2/3 md:pl-6">
                      <h3 className="text-xl font-semibold text-primary mb-1">
                        Dr. Sohail Mohammad
                      </h3>
                      <p className="text-primary font-medium mb-3">
                        Project Director / Associate Professor
                      </p>
                      <div className="mb-3">
                        <span className="inline-block bg-primary/10 text-primary text-xs px-2 py-1 rounded-full mr-2 mb-2">
                          PhD. Pharmaceutics (Scholar)
                        </span>
                        <span className="inline-block bg-primary/10 text-primary text-xs px-2 py-1 rounded-full mr-2 mb-2">
                          M.Phil. Pharmaceutics
                        </span>
                        <span className="inline-block bg-primary/10 text-primary text-xs px-2 py-1 rounded-full mr-2 mb-2">
                          B. Pharmacy
                        </span>
                      </div>
                      <p className="text-muted-foreground mb-3">22 Years experience</p>
                      <p className="text-muted-foreground">
                        Dr. Sohail Mohammad oversees project development and
                        implementation with his extensive industry experience.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Assistant Professors */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-primary mb-6">
              Assistant Professors
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-background rounded-lg shadow-md overflow-hidden">
                <div className="p-6">
                  <div className="flex flex-col md:flex-row">
                    <div className="md:w-1/3 mb-4 md:mb-0 flex justify-center">
                      <div className="w-32 h-32 bg-primary/10 rounded-full overflow-hidden flex items-center justify-center">
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
                            d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                          />
                        </svg>
                      </div>
                    </div>
                    <div className="md:w-2/3 md:pl-6">
                      <h3 className="text-xl font-semibold text-primary mb-1">
                        Dr. Muhammad Ahsan Khan
                      </h3>
                      <p className="text-primary font-medium mb-3">
                        Assistant Professor
                      </p>
                      <div className="mb-3">
                        <span className="inline-block bg-primary/10 text-primary text-xs px-2 py-1 rounded-full mr-2 mb-2">
                          PhD. Pharmaceutics
                        </span>
                        <span className="inline-block bg-primary/10 text-primary text-xs px-2 py-1 rounded-full mr-2 mb-2">
                          MS Pharmaceutics
                        </span>
                        <span className="inline-block bg-primary/10 text-primary text-xs px-2 py-1 rounded-full mr-2 mb-2">
                          Pharm-D
                        </span>
                      </div>
                      <p className="text-muted-foreground mb-3">06 Years experience</p>
                      <p className="text-muted-foreground">
                        Dr. Muhammad Ahsan Khan specializes in pharmaceutical
                        formulation and drug delivery systems.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-background rounded-lg shadow-md overflow-hidden">
                <div className="p-6">
                  <div className="flex flex-col md:flex-row">
                    <div className="md:w-1/3 mb-4 md:mb-0 flex justify-center">
                      <div className="w-32 h-32 bg-primary/10 rounded-full overflow-hidden flex items-center justify-center">
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
                            d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                          />
                        </svg>
                      </div>
                    </div>
                    <div className="md:w-2/3 md:pl-6">
                      <h3 className="text-xl font-semibold text-primary mb-1">
                        Dr. Mariana Sakhi
                      </h3>
                      <p className="text-primary font-medium mb-3">
                        Assistant Professor (On Extended maternity leave)
                      </p>
                      <div className="mb-3">
                        <span className="inline-block bg-primary/10 text-primary text-xs px-2 py-1 rounded-full mr-2 mb-2">
                          PhD. Pharmaceutics
                        </span>
                        <span className="inline-block bg-primary/10 text-primary text-xs px-2 py-1 rounded-full mr-2 mb-2">
                          M.Phil. Pharmaceutics
                        </span>
                        <span className="inline-block bg-primary/10 text-primary text-xs px-2 py-1 rounded-full mr-2 mb-2">
                          Pharm-D
                        </span>
                      </div>
                      <p className="text-muted-foreground mb-3">04 Years experience</p>
                      <p className="text-muted-foreground">
                        Dr. Mariana Sakhi focuses on pharmaceutical research and
                        development.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Lecturers */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-primary mb-6">Lecturers</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-background rounded-lg shadow-md overflow-hidden">
                <div className="p-4">
                  <div className="flex flex-col items-center">
                    <div className="w-24 h-24 bg-primary/10 rounded-full overflow-hidden flex items-center justify-center mb-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-12 w-12 text-primary"
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
                    <h3 className="text-lg font-semibold text-primary mb-1">
                      Dr. Aneela Tahir
                    </h3>
                    <p className="text-primary font-medium mb-2">Lecturer</p>
                    <div className="mb-2 text-center">
                      <span className="inline-block bg-primary/10 text-primary text-xs px-2 py-1 rounded-full mr-1 mb-1">
                        MPhil Pharmaceutical Chemistry
                      </span>
                      <span className="inline-block bg-primary/10 text-primary text-xs px-2 py-1 rounded-full mr-1 mb-1">
                        Pharm-D
                      </span>
                    </div>
                    <p className="text-muted-foreground text-sm">11 Years experience</p>
                  </div>
                </div>
              </div>

              <div className="bg-background rounded-lg shadow-md overflow-hidden">
                <div className="p-4">
                  <div className="flex flex-col items-center">
                    <div className="w-24 h-24 bg-primary/10 rounded-full overflow-hidden flex items-center justify-center mb-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-12 w-12 text-primary"
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
                    <h3 className="text-lg font-semibold text-primary mb-1">
                      Dr. Muniba Pervaiz
                    </h3>
                    <p className="text-primary font-medium mb-2">Lecturer</p>
                    <div className="mb-2 text-center">
                      <span className="inline-block bg-primary/10 text-primary text-xs px-2 py-1 rounded-full mr-1 mb-1">
                        MPhil Pharmaceutics
                      </span>
                      <span className="inline-block bg-primary/10 text-primary text-xs px-2 py-1 rounded-full mr-1 mb-1">
                        Pharm-D
                      </span>
                    </div>
                    <p className="text-muted-foreground text-sm">06 Years experience</p>
                  </div>
                </div>
              </div>

              <div className="bg-background rounded-lg shadow-md overflow-hidden">
                <div className="p-4">
                  <div className="flex flex-col items-center">
                    <div className="w-24 h-24 bg-primary/10 rounded-full overflow-hidden flex items-center justify-center mb-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-12 w-12 text-primary"
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
                    <h3 className="text-lg font-semibold text-primary mb-1">
                      Dr. Ayesha Umar
                    </h3>
                    <p className="text-primary font-medium mb-2">Lecturer</p>
                    <div className="mb-2 text-center">
                      <span className="inline-block bg-primary/10 text-primary text-xs px-2 py-1 rounded-full mr-1 mb-1">
                        PhD Scholar
                      </span>
                      <span className="inline-block bg-primary/10 text-primary text-xs px-2 py-1 rounded-full mr-1 mb-1">
                        M.Phil. Pharmaceutics
                      </span>
                      <span className="inline-block bg-primary/10 text-primary text-xs px-2 py-1 rounded-full mr-1 mb-1">
                        Pharm-D
                      </span>
                    </div>
                    <p className="text-muted-foreground text-sm">03 Years experience</p>
                  </div>
                </div>
              </div>

              <div className="bg-background rounded-lg shadow-md overflow-hidden">
                <div className="p-4">
                  <div className="flex flex-col items-center">
                    <div className="w-24 h-24 bg-primary/10 rounded-full overflow-hidden flex items-center justify-center mb-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-12 w-12 text-primary"
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
                    <h3 className="text-lg font-semibold text-primary mb-1">
                      Dr. Najia Shabbir
                    </h3>
                    <p className="text-primary font-medium mb-2">Lecturer</p>
                    <div className="mb-2 text-center">
                      <span className="inline-block bg-primary/10 text-primary text-xs px-2 py-1 rounded-full mr-1 mb-1">
                        MPhil Pharmacology
                      </span>
                      <span className="inline-block bg-primary/10 text-primary text-xs px-2 py-1 rounded-full mr-1 mb-1">
                        Pharm-D
                      </span>
                    </div>
                    <p className="text-muted-foreground text-sm">05 Years experience</p>
                  </div>
                </div>
              </div>

              <div className="bg-background rounded-lg shadow-md overflow-hidden">
                <div className="p-4">
                  <div className="flex flex-col items-center">
                    <div className="w-24 h-24 bg-primary/10 rounded-full overflow-hidden flex items-center justify-center mb-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-12 w-12 text-primary"
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
                    <h3 className="text-lg font-semibold text-primary mb-1">
                      Dr. Saqib Khan
                    </h3>
                    <p className="text-primary font-medium mb-2">Lecturer</p>
                    <div className="mb-2 text-center">
                      <span className="inline-block bg-primary/10 text-primary text-xs px-2 py-1 rounded-full mr-1 mb-1">
                        MS Pharmaceutical Chemistry
                      </span>
                      <span className="inline-block bg-primary/10 text-primary text-xs px-2 py-1 rounded-full mr-1 mb-1">
                        Pharm-D
                      </span>
                    </div>
                    <p className="text-muted-foreground text-sm">01 Years experience</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Demonstrators */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-primary mb-6">
              Demonstrators
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-background rounded-lg shadow-md overflow-hidden">
                <div className="p-4">
                  <div className="flex flex-col items-center">
                    <div className="w-24 h-24 bg-primary/10 rounded-full overflow-hidden flex items-center justify-center mb-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-12 w-12 text-primary"
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
                    <h3 className="text-lg font-semibold text-primary mb-1">
                      Dr. Muhammad Moin
                    </h3>
                    <p className="text-primary font-medium mb-2">
                      Demonstrator
                    </p>
                    <div className="mb-2 text-center">
                      <span className="inline-block bg-primary/10 text-primary text-xs px-2 py-1 rounded-full mr-1 mb-1">
                        Pharm-D
                      </span>
                    </div>
                    <p className="text-muted-foreground text-sm">01 Year experience</p>
                  </div>
                </div>
              </div>

              <div className="bg-background rounded-lg shadow-md overflow-hidden">
                <div className="p-4">
                  <div className="flex flex-col items-center">
                    <div className="w-24 h-24 bg-primary/10 rounded-full overflow-hidden flex items-center justify-center mb-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-12 w-12 text-primary"
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
                    <h3 className="text-lg font-semibold text-primary mb-1">
                      Dr. Muhammad Yasir Ghaffar
                    </h3>
                    <p className="text-primary font-medium mb-2">
                      Demonstrator
                    </p>
                    <div className="mb-2 text-center">
                      <span className="inline-block bg-primary/10 text-primary text-xs px-2 py-1 rounded-full mr-1 mb-1">
                        Pharm-D
                      </span>
                    </div>
                    <p className="text-muted-foreground text-sm">01 Years experience</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Contact */}
          <section>
            <div className="bg-primary text-primary-foreground rounded-lg shadow-md p-8">
              <h2 className="text-2xl font-bold mb-4">
                Contact Faculty Office
              </h2>
              <p className="mb-6">
                For appointments or inquiries with our faculty members, please
                contact the faculty office.
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

export default PharmacyFaculty;
