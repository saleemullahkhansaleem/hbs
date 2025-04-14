import {
  Search,
  Filter,
  Download,
  ExternalLink,
  BookOpen,
  Users,
  ArrowUpRight,
  ChevronRight,
  Calendar,
} from "lucide-react";

export default function ResearchPublications() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-900 to-indigo-800 text-white">
        <div className="absolute inset-0 opacity-20 bg-[url('/placeholder.svg?height=1080&width=1920')] bg-cover bg-center"></div>
        <div className="container mx-auto px-4 py-20 relative z-10">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Research Publications
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              Explore our faculty and student research contributions to the
              global scientific community
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="bg-white text-blue-900 px-6 py-3 rounded-md font-medium flex items-center gap-2 hover:bg-blue-50 transition-colors">
                Browse Publications
              </button>
              <button className="border border-white text-white px-6 py-3 rounded-md font-medium flex items-center gap-2 hover:bg-white/10 transition-colors">
                Submit Your Publication
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="py-8 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-grow relative">
              <input
                type="text"
                placeholder="Search publications by title, author, or keywords"
                className="w-full p-4 pl-12 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <Search
                className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400"
                size={20}
              />
            </div>
            <div className="flex gap-4">
              <div className="relative">
                <select className="appearance-none bg-white border border-gray-300 rounded-lg px-4 py-4 pr-10 focus:outline-none focus:ring-2 focus:ring-blue-500">
                  <option>All Departments</option>
                  <option>Clinical Sciences</option>
                  <option>Basic Sciences</option>
                  <option>Pharmaceutical Sciences</option>
                  <option>Public Health</option>
                  <option>Medical Education</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                  <svg
                    className="fill-current h-4 w-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                  </svg>
                </div>
              </div>
              <div className="relative">
                <select className="appearance-none bg-white border border-gray-300 rounded-lg px-4 py-4 pr-10 focus:outline-none focus:ring-2 focus:ring-blue-500">
                  <option>All Years</option>
                  <option>2023</option>
                  <option>2022</option>
                  <option>2021</option>
                  <option>2020</option>
                  <option>2019</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                  <svg
                    className="fill-current h-4 w-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                  </svg>
                </div>
              </div>
              <button className="flex items-center gap-2 px-4 py-4 border border-gray-300 rounded-lg bg-white text-gray-700 hover:bg-gray-50">
                <Filter size={18} /> More Filters
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Publication Metrics */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {publicationMetrics.map((metric, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md p-6 text-center"
              >
                <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mx-auto mb-4">
                  {metric.icon}
                </div>
                <h3 className="text-4xl font-bold text-blue-900 mb-2">
                  {metric.value}
                </h3>
                <p className="text-gray-600">{metric.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Publications */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Featured Publications
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {featuredPublications.map((publication, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md p-6 border-l-4 border-blue-700"
              >
                <div className="flex justify-between mb-4">
                  <span className="text-sm text-blue-700 font-medium">
                    {publication.journal}
                  </span>
                  <span className="text-sm text-gray-500">
                    {publication.year}
                  </span>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900">
                  {publication.title}
                </h3>
                <p className="text-gray-600 mb-2 italic">
                  {publication.authors}
                </p>
                <p className="text-gray-600 mb-4">{publication.abstract}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {publication.keywords.map((keyword, kidx) => (
                    <span
                      key={kidx}
                      className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm"
                    >
                      {keyword}
                    </span>
                  ))}
                </div>
                <div className="flex flex-wrap gap-4 mt-4">
                  <a
                    href={publication.doi}
                    className="text-blue-700 font-medium flex items-center gap-1 hover:text-blue-800"
                  >
                    <ExternalLink size={16} /> View on Publisher Site
                  </a>
                  <a
                    href="#"
                    className="text-blue-700 font-medium flex items-center gap-1 hover:text-blue-800"
                  >
                    <Download size={16} /> PDF
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Publications */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900">
              Recent Publications
            </h2>
            <div className="flex items-center gap-2">
              <span className="text-gray-600">Sort by:</span>
              <select className="px-3 py-2 border border-gray-300 rounded-md bg-white text-gray-700">
                <option>Most Recent</option>
                <option>Most Cited</option>
                <option>Alphabetical</option>
              </select>
            </div>
          </div>

          <div className="space-y-6">
            {recentPublications.map((publication, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6">
                <div className="flex justify-between mb-2">
                  <span className="text-sm text-blue-700 font-medium">
                    {publication.journal}
                  </span>
                  <span className="text-sm text-gray-500">
                    {publication.date}
                  </span>
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900">
                  {publication.title}
                </h3>
                <p className="text-gray-600 mb-4 italic">
                  {publication.authors}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {publication.tags.map((tag, tidx) => (
                    <span
                      key={tidx}
                      className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex flex-wrap justify-between items-center">
                  <div className="flex gap-4">
                    <a
                      href="#"
                      className="text-blue-700 font-medium flex items-center gap-1 hover:text-blue-800"
                    >
                      Abstract <ChevronRight size={16} />
                    </a>
                    <a
                      href="#"
                      className="text-blue-700 font-medium flex items-center gap-1 hover:text-blue-800"
                    >
                      <Download size={16} /> PDF
                    </a>
                    <a
                      href="#"
                      className="text-blue-700 font-medium flex items-center gap-1 hover:text-blue-800"
                    >
                      <ExternalLink size={16} /> DOI
                    </a>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <span>Citations: {publication.citations}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 flex justify-center">
            <div className="flex items-center gap-2">
              <button className="w-10 h-10 flex items-center justify-center rounded-md border border-gray-300 bg-white">
                &lt;
              </button>
              <button className="w-10 h-10 flex items-center justify-center rounded-md border border-gray-300 bg-blue-700 text-white">
                1
              </button>
              <button className="w-10 h-10 flex items-center justify-center rounded-md border border-gray-300 bg-white">
                2
              </button>
              <button className="w-10 h-10 flex items-center justify-center rounded-md border border-gray-300 bg-white">
                3
              </button>
              <button className="w-10 h-10 flex items-center justify-center rounded-md border border-gray-300 bg-white">
                4
              </button>
              <button className="w-10 h-10 flex items-center justify-center rounded-md border border-gray-300 bg-white">
                5
              </button>
              <button className="w-10 h-10 flex items-center justify-center rounded-md border border-gray-300 bg-white">
                &gt;
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Publication by Department */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Publications by Department
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {departments?.map((department, index) => (
              <a
                key={index}
                href="#"
                className="bg-white rounded-lg shadow-md p-6 border border-gray-200 hover:shadow-lg transition-shadow"
              >
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-xl font-semibold text-gray-900">
                    {department.name}
                  </h3>
                  <ArrowUpRight size={18} className="text-blue-700" />
                </div>
                <p className="text-gray-600 mb-4">{department.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-blue-700 font-medium">
                    {department.publicationCount} Publications
                  </span>
                  <span className="text-gray-500 text-sm">
                    Last updated: {department.lastUpdated}
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Top Researchers */}
      <section className="py-16 bg-blue-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Top Researchers
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {topResearchers.map((researcher, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md overflow-hidden"
              >
                <div className="h-48 bg-gray-200">
                  <img
                    src={`/placeholder.svg?height=300&width=300&text=Researcher+${
                      index + 1
                    }`}
                    alt={researcher.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-1 text-gray-900">
                    {researcher.name}
                  </h3>
                  <p className="text-gray-600 mb-3">{researcher.department}</p>
                  <div className="space-y-2 mb-4">
                    <div className="flex justify-between text-sm">
                      <span>Publications</span>
                      <span className="font-semibold">
                        {researcher.publications}
                      </span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Citations</span>
                      <span className="font-semibold">
                        {researcher.citations}
                      </span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>h-index</span>
                      <span className="font-semibold">{researcher.hIndex}</span>
                    </div>
                  </div>
                  <a
                    href="#"
                    className="text-blue-700 font-medium flex items-center gap-1 hover:text-blue-800"
                  >
                    View profile <ChevronRight size={16} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Publication Resources */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Resources for Researchers
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-blue-50 rounded-lg p-6">
              <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                <BookOpen size={24} className="text-blue-700" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">
                Publication Guidelines
              </h3>
              <p className="text-gray-600 mb-4">
                Learn about our institutional guidelines for research
                publications, authorship criteria, and ethical standards.
              </p>
              <a
                href="#"
                className="text-blue-700 font-medium flex items-center gap-1 hover:text-blue-800"
              >
                View guidelines <ChevronRight size={16} />
              </a>
            </div>
            <div className="bg-blue-50 rounded-lg p-6">
              <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                <Users size={24} className="text-blue-700" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">
                Research Collaboration
              </h3>
              <p className="text-gray-600 mb-4">
                Explore opportunities for research collaboration with other
                departments, institutions, and industry partners.
              </p>
              <a
                href="#"
                className="text-blue-700 font-medium flex items-center gap-1 hover:text-blue-800"
              >
                Learn more <ChevronRight size={16} />
              </a>
            </div>
            <div className="bg-blue-50 rounded-lg p-6">
              <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                <Calendar size={24} className="text-blue-700" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">
                Publication Support
              </h3>
              <p className="text-gray-600 mb-4">
                Access resources for manuscript preparation, statistical
                analysis, and publication fee support.
              </p>
              <a
                href="#"
                className="text-blue-700 font-medium flex items-center gap-1 hover:text-blue-800"
              >
                Access resources <ChevronRight size={16} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Submit Publication */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Have You Published Recently?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Submit your recent publication to be included in our institutional
            repository and featured on our website
          </p>
          <button className="bg-white text-blue-900 px-8 py-3 rounded-md font-medium hover:bg-blue-50 transition-colors">
            Submit Your Publication
          </button>
        </div>
      </section>
    </div>
  );
}

// Data
const publicationMetrics = [
  {
    value: "1,200+",
    label: "Total Publications",
    icon: <BookOpen size={24} className="text-blue-700" />,
  },
  {
    value: "250+",
    label: "Publications in 2023",
    icon: <Calendar size={24} className="text-blue-700" />,
  },
  {
    value: "15,000+",
    label: "Total Citations",
    icon: <Users size={24} className="text-blue-700" />,
  },
  {
    value: "85+",
    label: "International Collaborations",
    icon: <ExternalLink size={24} className="text-blue-700" />,
  },
];

const featuredPublications = [
  {
    title:
      "Novel Therapeutic Approaches in the Management of Type 2 Diabetes Mellitus: A Comprehensive Review",
    authors: "Khan A, Ahmed S, Malik R, Hussain F, Shah Z",
    journal: "Journal of Diabetes Research",
    year: "2023",
    abstract:
      "This comprehensive review examines emerging therapeutic strategies for type 2 diabetes management, focusing on novel drug classes, personalized medicine approaches, and innovative lifestyle interventions that show promise in improving glycemic control and reducing complications.",
    keywords: [
      "Diabetes",
      "Therapeutics",
      "Personalized Medicine",
      "Clinical Research",
    ],
    doi: "https://doi.org/10.1000/xyz123",
  },
  {
    title:
      "Prevalence and Risk Factors of Antimicrobial Resistance in Clinical Isolates: A Single-Center Study from Pakistan",
    authors: "Rahman M, Ali J, Siddiqui T, Nawaz K, Ahmad F",
    journal: "International Journal of Infectious Diseases",
    year: "2022",
    abstract:
      "This study investigates the prevalence and patterns of antimicrobial resistance in clinical isolates from a tertiary care hospital in Pakistan, identifying key risk factors and suggesting strategies for antimicrobial stewardship to address this growing public health concern.",
    keywords: [
      "Antimicrobial Resistance",
      "Infectious Diseases",
      "Public Health",
      "Microbiology",
    ],
    doi: "https://doi.org/10.1000/abc456",
  },
];

const recentPublications = [
  {
    title:
      "Efficacy of Modified Cognitive Behavioral Therapy in Patients with Anxiety Disorders: A Randomized Controlled Trial",
    authors: "Akhtar S, Mahmood T, Raza H, Khan M",
    journal: "Journal of Psychiatric Research",
    date: "June 2023",
    tags: ["Psychiatry", "Clinical Trial", "Mental Health"],
    citations: 8,
  },
];

const departments = [
  {
    name: "Computer Science",
    description: "Research in AI, Machine Learning, and Distributed Systems.",
    publicationCount: 128,
    lastUpdated: "March 2025",
  },
  {
    name: "Physics",
    description:
      "Studies in Quantum Mechanics, Astrophysics, and Thermodynamics.",
    publicationCount: 95,
    lastUpdated: "February 2025",
  },
  {
    name: "Biotechnology",
    description:
      "Focus on genetic engineering, biopharma, and crop innovation.",
    publicationCount: 74,
    lastUpdated: "January 2025",
  },
  {
    name: "Economics",
    description:
      "Economic modeling, development studies, and financial systems.",
    publicationCount: 62,
    lastUpdated: "March 2025",
  },
  {
    name: "Environmental Sciences",
    description:
      "Research on climate change, sustainability, and ecosystem management.",
    publicationCount: 86,
    lastUpdated: "April 2025",
  },
  {
    name: "Psychology",
    description:
      "Behavioral studies, mental health research, and neuropsychology.",
    publicationCount: 55,
    lastUpdated: "February 2025",
  },
];

const topResearchers = [
  {
    name: "Dr. Ayesha Qureshi",
    department: "Computer Science",
    publications: 42,
    citations: 1550,
    hIndex: 18,
  },
  {
    name: "Prof. Omar Siddiqui",
    department: "Physics",
    publications: 39,
    citations: 1324,
    hIndex: 21,
  },
  {
    name: "Dr. Sana Mehmood",
    department: "Biotechnology",
    publications: 34,
    citations: 1187,
    hIndex: 16,
  },
  {
    name: "Dr. Rehan Ahmed",
    department: "Environmental Sciences",
    publications: 27,
    citations: 980,
    hIndex: 14,
  },
  {
    name: "Prof. Maria Khan",
    department: "Psychology",
    publications: 31,
    citations: 1102,
    hIndex: 15,
  },
  {
    name: "Dr. Bilal Hashmi",
    department: "Economics",
    publications: 29,
    citations: 1028,
    hIndex: 13,
  },
  {
    name: "Dr. Zoya Rahman",
    department: "Computer Science",
    publications: 37,
    citations: 1406,
    hIndex: 17,
  },
  {
    name: "Prof. Tariq Jameel",
    department: "Physics",
    publications: 33,
    citations: 1204,
    hIndex: 16,
  },
];
