import { SecondaryHeader } from "@/components";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
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
    <div className="min-h-screen">
      {/* Hero Section */}
      <SecondaryHeader
        title="Research Publications"
        description="Explore our faculty and student research contributions to the
              global scientific community"
      />

      {/* Search and Filter */}
      <section className="py-8 bg-background border-b">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-grow relative">
              <Input
                type="text"
                placeholder="Search publications by title, author, or keywords"
                className="w-full h-full px-4 pl-12"
              />
              <Search
                className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground"
                size={20}
              />
            </div>
            <div className="flex flex-wrap gap-4">
              <div className="relative">
                <select className="appearance-none bg-background border rounded-md px-4 py-2 pr-10 focus:outline-none focus:ring-2 focus:ring-primary">
                  <option>All Departments</option>
                  <option>Clinical Sciences</option>
                  <option>Basic Sciences</option>
                  <option>Pharmaceutical Sciences</option>
                  <option>Public Health</option>
                  <option>Medical Education</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-muted-foreground">
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
                <select className="appearance-none bg-background border rounded-md px-4 py-2 pr-10 focus:outline-none focus:ring-2 focus:ring-primary">
                  <option>All Years</option>
                  <option>2023</option>
                  <option>2022</option>
                  <option>2021</option>
                  <option>2020</option>
                  <option>2019</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-muted-foreground">
                  <svg
                    className="fill-current h-4 w-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                  </svg>
                </div>
              </div>
              <button className="flex items-center gap-2 px-4 py-0 border rounded-md bg-background text-muted-foreground hover:bg-muted/50">
                <Filter size={18} /> More Filters
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Publication Metrics */}
      <section className="py-12 bg-muted/50">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {publicationMetrics.map((metric, index) => (
              <div
                key={index}
                className="bg-background rounded-lg shadow-md p-6 text-center"
              >
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  {metric.icon}
                </div>
                <h3 className="text-4xl font-bold text-primary mb-2">
                  {metric.value}
                </h3>
                <p className="text-muted-foreground">{metric.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Publications */}
      <section className="py-16 bg-background">
        <div className="container max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Featured Publications</h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {featuredPublications.map((publication, index) => (
              <div
                key={index}
                className="bg-muted/40 rounded-lg shadow-md p-6 border-l-4 border-primary"
              >
                <div className="flex justify-between mb-4">
                  <span className="text-sm text-primary font-medium">
                    {publication.journal}
                  </span>
                  <span className="text-sm text-foreground/40">
                    {publication.year}
                  </span>
                </div>
                <h3 className="text-xl font-semibold mb-3">
                  {publication.title}
                </h3>
                <p className="text-muted-foreground mb-2 italic">
                  {publication.authors}
                </p>
                <p className="text-muted-foreground mb-4">
                  {publication.abstract}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {publication.keywords.map((keyword, kidx) => (
                    <span
                      key={kidx}
                      className="bg-primary/5 text-primary px-3 py-1 rounded-full text-sm"
                    >
                      {keyword}
                    </span>
                  ))}
                </div>
                <div className="flex flex-wrap gap-4 mt-4">
                  <a
                    href={publication.doi}
                    className="text-primary font-medium flex items-center gap-1 hover:underline underline-offset-4"
                  >
                    <ExternalLink size={16} /> View on Publisher Site
                  </a>
                  <a
                    href="#"
                    className="text-primary font-medium flex items-center gap-1 hover:underline underline-offset-4"
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
      <section className="py-16 bg-muted/50">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold">Recent Publications</h2>
            <div className="flex items-center gap-2">
              <span className="text-muted-foreground">Sort by:</span>
              <select className="px-3 py-2 border rounded-md bg-background text-muted-foreground">
                <option>Most Recent</option>
                <option>Most Cited</option>
                <option>Alphabetical</option>
              </select>
            </div>
          </div>

          <div className="space-y-6">
            {recentPublications.map((publication, index) => (
              <div
                key={index}
                className="bg-background rounded-lg shadow-md p-6"
              >
                <div className="flex justify-between mb-2">
                  <span className="text-sm text-primary font-medium">
                    {publication.journal}
                  </span>
                  <span className="text-sm text-muted/500">
                    {publication.date}
                  </span>
                </div>
                <h3 className="text-xl font-semibold mb-2">
                  {publication.title}
                </h3>
                <p className="text-muted-foreground mb-4 italic">
                  {publication.authors}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {publication.tags.map((tag, tidx) => (
                    <span
                      key={tidx}
                      className="bg-muted/50 text-muted-foreground px-3 py-1 rounded-full text-xs"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex flex-wrap justify-between items-center">
                  <div className="flex gap-4">
                    <a
                      href="#"
                      className="text-primary font-medium flex items-center gap-1 hover:underline underline-offset-4"
                    >
                      Abstract <ChevronRight size={16} />
                    </a>
                    <a
                      href="#"
                      className="text-primary font-medium flex items-center gap-1 hover:underline underline-offset-4"
                    >
                      <Download size={16} /> PDF
                    </a>
                    <a
                      href="#"
                      className="text-primary font-medium flex items-center gap-1 hover:underline underline-offset-4"
                    >
                      <ExternalLink size={16} /> DOI
                    </a>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <span>Citations: {publication.citations}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 flex justify-center">
            <div className="flex items-center gap-2">
              <button className="w-10 h-10 flex items-center justify-center rounded-md border bg-background">
                &lt;
              </button>
              <button className="w-10 h-10 flex items-center justify-center rounded-md border bg-primary text-primary-foreground">
                1
              </button>
              <button className="w-10 h-10 flex items-center justify-center rounded-md border bg-background">
                2
              </button>
              <button className="w-10 h-10 flex items-center justify-center rounded-md border bg-background">
                3
              </button>
              <button className="w-10 h-10 flex items-center justify-center rounded-md border bg-background">
                4
              </button>
              <button className="w-10 h-10 flex items-center justify-center rounded-md border bg-background">
                5
              </button>
              <button className="w-10 h-10 flex items-center justify-center rounded-md border bg-background">
                &gt;
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Publication by Department */}
      <section className="py-16 bg-background">
        <div className="container max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">
            Publications by Department
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {departments?.map((department, index) => (
              <a
                key={index}
                href="#"
                className="bg-background rounded-lg shadow-md p-6 border border-muted hover:shadow-lg transition-shadow"
              >
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-xl font-semibold">{department.name}</h3>
                  <ArrowUpRight size={18} className="text-primary" />
                </div>
                <p className="text-muted-foreground mb-4">
                  {department.description}
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-primary font-medium">
                    {department.publicationCount} Publications
                  </span>
                  <span className="text-muted/500 text-sm">
                    Last updated: {department.lastUpdated}
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Top Researchers */}
      <section className="py-16 bg-muted/50">
        <div className="container max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Top Researchers</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {topResearchers.map((researcher, index) => (
              <div
                key={index}
                className="bg-background rounded-lg shadow-md overflow-hidden"
              >
                <div className="aspect-square bg-muted">
                  <img
                    src={`/images/user.webp`}
                    alt={researcher.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-1">
                    {researcher.name}
                  </h3>
                  <p className="text-muted-foreground mb-3">
                    {researcher.department}
                  </p>
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
                    className="text-primary font-medium flex items-center gap-1 hover:underline underline-offset-4"
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
      <section className="py-16 bg-background">
        <div className="container max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Resources for Researchers</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-primary/5 rounded-lg p-6">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <BookOpen size={24} className="text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">
                Publication Guidelines
              </h3>
              <p className="text-muted-foreground mb-4">
                Learn about our institutional guidelines for research
                publications, authorship criteria, and ethical standards.
              </p>
              <a
                href="#"
                className="text-primary font-medium flex items-center gap-1 hover:underline underline-offset-4"
              >
                View guidelines <ChevronRight size={16} />
              </a>
            </div>
            <div className="bg-primary/5 rounded-lg p-6">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Users size={24} className="text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">
                Research Collaboration
              </h3>
              <p className="text-muted-foreground mb-4">
                Explore opportunities for research collaboration with other
                departments, institutions, and industry partners.
              </p>
              <a
                href="#"
                className="text-primary font-medium flex items-center gap-1 hover:underline underline-offset-4"
              >
                Learn more <ChevronRight size={16} />
              </a>
            </div>
            <div className="bg-primary/5 rounded-lg p-6">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Calendar size={24} className="text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">
                Publication Support
              </h3>
              <p className="text-muted-foreground mb-4">
                Access resources for manuscript preparation, statistical
                analysis, and publication fee support.
              </p>
              <a
                href="#"
                className="text-primary font-medium flex items-center gap-1 hover:underline underline-offset-4"
              >
                Access resources <ChevronRight size={16} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Submit Publication */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Have You Published Recently?
          </h2>
          <p className="text-xl text-primary-foreground/70 mb-8 max-w-3xl mx-auto">
            Submit your recent publication to be included in our institutional
            repository and featured on our website
          </p>
          <Button size="lg" variant="outline" className="text-foreground">
            Submit Your Publication
          </Button>
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
    icon: <BookOpen size={24} className="text-primary" />,
  },
  {
    value: "250+",
    label: "Publications in 2023",
    icon: <Calendar size={24} className="text-primary" />,
  },
  {
    value: "15,000+",
    label: "Total Citations",
    icon: <Users size={24} className="text-primary" />,
  },
  {
    value: "85+",
    label: "International Collaborations",
    icon: <ExternalLink size={24} className="text-primary" />,
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
