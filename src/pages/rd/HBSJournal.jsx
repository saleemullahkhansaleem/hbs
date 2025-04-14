import {
  ArrowRight,
  BookOpen,
  FileText,
  Calendar,
  Users,
  Search,
  Download,
  ExternalLink,
  ChevronRight,
} from "lucide-react";

export default function HBSJournal() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-900 to-indigo-800 text-white">
        <div className="absolute inset-0 opacity-20 bg-[url('/placeholder.svg?height=1080&width=1920')] bg-cover bg-center"></div>
        <div className="container mx-auto px-4 py-20 relative z-10">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              HBS Journal of Medical Sciences
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              A peer-reviewed journal publishing cutting-edge research in
              healthcare and medical sciences
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="bg-white text-blue-900 px-6 py-3 rounded-md font-medium flex items-center gap-2 hover:bg-blue-50 transition-colors">
                Current Issue <ArrowRight size={18} />
              </button>
              <button className="border border-white text-white px-6 py-3 rounded-md font-medium flex items-center gap-2 hover:bg-white/10 transition-colors">
                Submit Manuscript
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* About the Journal */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                About the Journal
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                The HBS Journal of Medical Sciences is a peer-reviewed,
                open-access journal that publishes original research, reviews,
                case reports, and perspectives across all areas of medicine and
                healthcare. Established in 2010, the journal aims to advance
                scientific knowledge and clinical practice through rigorous
                research and scholarly discourse.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Our journal maintains high standards of scientific integrity and
                follows international publication ethics. All submitted
                manuscripts undergo rigorous peer review by experts in the field
                to ensure quality, originality, and relevance.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                <div className="bg-blue-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-3 text-gray-900">
                    Scope
                  </h3>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start">
                      <ChevronRight
                        size={18}
                        className="text-blue-700 mt-1 mr-2 flex-shrink-0"
                      />
                      <span>Clinical and Basic Medical Sciences</span>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight
                        size={18}
                        className="text-blue-700 mt-1 mr-2 flex-shrink-0"
                      />
                      <span>Pharmaceutical Research</span>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight
                        size={18}
                        className="text-blue-700 mt-1 mr-2 flex-shrink-0"
                      />
                      <span>Public Health and Epidemiology</span>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight
                        size={18}
                        className="text-blue-700 mt-1 mr-2 flex-shrink-0"
                      />
                      <span>Medical Education</span>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight
                        size={18}
                        className="text-blue-700 mt-1 mr-2 flex-shrink-0"
                      />
                      <span>Healthcare Management</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-blue-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-3 text-gray-900">
                    Publication Frequency
                  </h3>
                  <p className="text-gray-600 mb-4">
                    The journal is published quarterly (4 issues per year):
                  </p>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start">
                      <Calendar
                        size={18}
                        className="text-blue-700 mt-1 mr-2 flex-shrink-0"
                      />
                      <span>March (Spring Issue)</span>
                    </li>
                    <li className="flex items-start">
                      <Calendar
                        size={18}
                        className="text-blue-700 mt-1 mr-2 flex-shrink-0"
                      />
                      <span>June (Summer Issue)</span>
                    </li>
                    <li className="flex items-start">
                      <Calendar
                        size={18}
                        className="text-blue-700 mt-1 mr-2 flex-shrink-0"
                      />
                      <span>September (Fall Issue)</span>
                    </li>
                    <li className="flex items-start">
                      <Calendar
                        size={18}
                        className="text-blue-700 mt-1 mr-2 flex-shrink-0"
                      />
                      <span>December (Winter Issue)</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg h-fit">
              <h3 className="text-xl font-semibold mb-4 text-gray-900">
                Journal Metrics
              </h3>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-sm text-gray-600 mb-1">
                    <span>Impact Factor</span>
                    <span className="font-semibold">2.8</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-blue-700 h-2 rounded-full"
                      style={{ width: "56%" }}
                    ></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm text-gray-600 mb-1">
                    <span>Acceptance Rate</span>
                    <span className="font-semibold">32%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-blue-700 h-2 rounded-full"
                      style={{ width: "32%" }}
                    ></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm text-gray-600 mb-1">
                    <span>Review Time (Avg.)</span>
                    <span className="font-semibold">6 weeks</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-blue-700 h-2 rounded-full"
                      style={{ width: "40%" }}
                    ></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm text-gray-600 mb-1">
                    <span>Publication Time (Avg.)</span>
                    <span className="font-semibold">12 weeks</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-blue-700 h-2 rounded-full"
                      style={{ width: "60%" }}
                    ></div>
                  </div>
                </div>
              </div>
              <div className="mt-6 pt-6 border-t border-gray-200">
                <h3 className="text-xl font-semibold mb-4 text-gray-900">
                  Indexing
                </h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center">
                    <ExternalLink size={16} className="text-blue-700 mr-2" />
                    <span>PubMed Central</span>
                  </li>
                  <li className="flex items-center">
                    <ExternalLink size={16} className="text-blue-700 mr-2" />
                    <span>Scopus</span>
                  </li>
                  <li className="flex items-center">
                    <ExternalLink size={16} className="text-blue-700 mr-2" />
                    <span>Web of Science</span>
                  </li>
                  <li className="flex items-center">
                    <ExternalLink size={16} className="text-blue-700 mr-2" />
                    <span>Google Scholar</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Current Issue */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900">Current Issue</h2>
            <div className="flex items-center gap-2">
              <span className="text-gray-600">
                Volume 14, Issue 2, June 2023
              </span>
              <button className="text-blue-700 hover:text-blue-800 flex items-center gap-1">
                <Download size={18} /> Download Full Issue
              </button>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center">
                <BookOpen size={32} className="text-blue-700" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900">
                  From the Editor's Desk
                </h3>
                <p className="text-gray-600">
                  Prof. Dr. Aisha Rahman, Editor-in-Chief
                </p>
              </div>
            </div>
            <p className="text-gray-600 mb-4">
              In this issue, we present a collection of original research
              articles, reviews, and case reports that showcase the breadth and
              depth of medical research being conducted at HBS and our partner
              institutions. The featured studies address pressing healthcare
              challenges and offer innovative solutions that have the potential
              to improve patient care and outcomes.
            </p>
            <a
              href="#"
              className="text-blue-700 font-medium flex items-center gap-1 hover:text-blue-800"
            >
              Read full editorial <ChevronRight size={16} />
            </a>
          </div>

          <div className="space-y-6">
            {currentIssueArticles.map((article, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6">
                <div className="flex justify-between">
                  <span className="text-sm text-blue-700 font-medium">
                    {article.category}
                  </span>
                  <span className="text-sm text-gray-500">
                    Pages: {article.pages}
                  </span>
                </div>
                <h3 className="text-xl font-semibold my-2 text-gray-900">
                  {article.title}
                </h3>
                <p className="text-gray-600 mb-3">{article.authors}</p>
                <p className="text-gray-600 mb-4">{article.abstract}</p>
                <div className="flex flex-wrap gap-4">
                  <a
                    href="#"
                    className="text-blue-700 font-medium flex items-center gap-1 hover:text-blue-800"
                  >
                    Read full article <ChevronRight size={16} />
                  </a>
                  <a
                    href="#"
                    className="text-blue-700 font-medium flex items-center gap-1 hover:text-blue-800"
                  >
                    <Download size={16} /> PDF (1.2 MB)
                  </a>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <a
              href="#"
              className="inline-flex items-center gap-2 text-blue-700 font-medium hover:text-blue-800"
            >
              View all articles in this issue <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </section>

      {/* Archive */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Journal Archive
          </h2>

          <div className="mb-8">
            <div className="relative">
              <input
                type="text"
                placeholder="Search articles by title, author, or keywords"
                className="w-full p-4 pl-12 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <Search
                className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400"
                size={20}
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {archiveYears.map((year, yearIndex) => (
              <div key={yearIndex} className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-4 text-gray-900">
                  {year.year}
                </h3>
                <ul className="space-y-3">
                  {year.issues.map((issue, issueIndex) => (
                    <li key={issueIndex}>
                      <a
                        href="#"
                        className="flex items-center justify-between p-3 bg-white rounded-md hover:bg-blue-50 transition-colors"
                      >
                        <div className="flex items-center gap-3">
                          <Calendar size={18} className="text-blue-700" />
                          <span>{issue.title}</span>
                        </div>
                        <ChevronRight size={18} className="text-blue-700" />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* For Authors */}
      <section className="py-16 bg-blue-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">For Authors</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold mb-4 text-gray-900">
                Submission Guidelines
              </h3>
              <p className="text-gray-600 mb-6">
                We welcome original research, review articles, case reports, and
                perspectives that align with the scope of our journal. Before
                submitting your manuscript, please review our guidelines to
                ensure your submission meets our requirements.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                    <span className="font-semibold text-blue-700">1</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      Prepare Your Manuscript
                    </h4>
                    <p className="text-gray-600">
                      Follow our formatting guidelines and use our manuscript
                      template
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                    <span className="font-semibold text-blue-700">2</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      Online Submission
                    </h4>
                    <p className="text-gray-600">
                      Create an account on our submission portal and upload your
                      files
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                    <span className="font-semibold text-blue-700">3</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Peer Review</h4>
                    <p className="text-gray-600">
                      Your manuscript will undergo rigorous peer review by
                      experts
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                    <span className="font-semibold text-blue-700">4</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Publication</h4>
                    <p className="text-gray-600">
                      Accepted manuscripts will be published in the next
                      available issue after final approval and formatting
                    </p>
                  </div>
                </div>
              </div>
              <div className="mt-6">
                <a
                  href="#"
                  className="text-blue-700 font-medium flex items-center gap-1 hover:text-blue-800"
                >
                  Download author guidelines <Download size={16} />
                </a>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold mb-4 text-gray-900">
                Editorial Process
              </h3>
              <p className="text-gray-600 mb-6">
                Our rigorous editorial process ensures that all published
                articles meet high standards of scientific quality and
                integrity.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-4 p-3 bg-blue-50 rounded-md">
                  <Users size={20} className="text-blue-700" />
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      Editorial Board
                    </h4>
                    <p className="text-sm text-gray-600">
                      Comprised of distinguished experts across medical
                      specialties
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-3 bg-blue-50 rounded-md">
                  <FileText size={20} className="text-blue-700" />
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      Peer Review Policy
                    </h4>
                    <p className="text-sm text-gray-600">
                      Double-blind peer review by at least two independent
                      reviewers
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-3 bg-blue-50 rounded-md">
                  <Calendar size={20} className="text-blue-700" />
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      Publication Timeline
                    </h4>
                    <p className="text-sm text-gray-600">
                      Initial decision within 4 weeks, publication within 3
                      months of acceptance
                    </p>
                  </div>
                </div>
              </div>
              <div className="mt-6">
                <button className="bg-blue-700 text-white px-6 py-3 rounded-md font-medium hover:bg-blue-800 transition-colors">
                  Submit a Manuscript
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Contact the Editorial Office
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-3xl mx-auto">
            For inquiries regarding manuscript submission, review process, or
            general information about the journal
          </p>
          <div className="inline-flex flex-col sm:flex-row gap-4 bg-gray-50 p-6 rounded-lg">
            <div className="px-6 py-3 border-r border-gray-200">
              <p className="font-semibold text-gray-900">Email</p>
              <p className="text-blue-700">journal@hbs.edu.pk</p>
            </div>
            <div className="px-6 py-3 border-r border-gray-200">
              <p className="font-semibold text-gray-900">Phone</p>
              <p className="text-blue-700">+92-51-1234567</p>
            </div>
            <div className="px-6 py-3">
              <p className="font-semibold text-gray-900">Address</p>
              <p className="text-blue-700">
                HBS Research Office, Islamabad, Pakistan
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

// Data
const currentIssueArticles = [
  {
    category: "Original Research",
    title:
      "Prevalence and Risk Factors of Hypertension Among Urban Population in Islamabad, Pakistan",
    authors: "Khan A, Ahmed S, Malik R, Hussain F, Shah Z",
    abstract:
      "This cross-sectional study investigated the prevalence and risk factors of hypertension among 1,200 adults in urban Islamabad. Results showed a prevalence of 32.5%, with significant associations with age, BMI, physical inactivity, and family history.",
    pages: "45-53",
  },
  {
    category: "Review Article",
    title:
      "Emerging Therapeutic Approaches in Type 2 Diabetes Management: A Comprehensive Review",
    authors: "Rahman M, Ali J, Siddiqui T, Nawaz K",
    abstract:
      "This review examines recent advances in pharmacological and non-pharmacological approaches to type 2 diabetes management, with a focus on novel drug classes, personalized medicine, and lifestyle interventions.",
    pages: "54-68",
  },
  {
    category: "Case Report",
    title:
      "Unusual Presentation of Guillain-Barré Syndrome Following COVID-19 Vaccination: A Case Report",
    authors: "Akhtar S, Mahmood T, Raza H",
    abstract:
      "We report a case of a 45-year-old male who developed atypical Guillain-Barré Syndrome two weeks after receiving a COVID-19 vaccine, presenting with facial diplegia and minimal limb weakness without the classic ascending paralysis.",
    pages: "69-73",
  },
];

const archiveYears = [
  {
    year: "2023",
    issues: [
      { title: "Volume 14, Issue 1 (March 2023)" },
      { title: "Volume 14, Issue 2 (June 2023)" },
    ],
  },
  {
    year: "2022",
    issues: [
      { title: "Volume 13, Issue 1 (March 2022)" },
      { title: "Volume 13, Issue 2 (June 2022)" },
      { title: "Volume 13, Issue 3 (September 2022)" },
      { title: "Volume 13, Issue 4 (December 2022)" },
    ],
  },
  {
    year: "2021",
    issues: [
      { title: "Volume 12, Issue 1 (March 2021)" },
      { title: "Volume 12, Issue 2 (June 2021)" },
      { title: "Volume 12, Issue 3 (September 2021)" },
      { title: "Volume 12, Issue 4 (December 2021)" },
    ],
  },
];
