import {
  ArrowRight,
  BookOpen,
  FileText,
  Globe,
  Microscope,
  Award,
  Calendar,
  Users,
  ChevronRight,
} from "lucide-react";

export default function RD() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-900 to-indigo-800 text-white">
        <div className="absolute inset-0 opacity-20 bg-[url('/placeholder.svg?height=1080&width=1920')] bg-cover bg-center"></div>
        <div className="container mx-auto px-4 py-24 relative z-10">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Research & Development
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              Advancing healthcare through innovative research, collaboration,
              and knowledge dissemination
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="bg-white text-blue-900 px-6 py-3 rounded-md font-medium flex items-center gap-2 hover:bg-blue-50 transition-colors">
                Explore Research <ArrowRight size={18} />
              </button>
              <button className="border border-white text-white px-6 py-3 rounded-md font-medium flex items-center gap-2 hover:bg-white/10 transition-colors">
                Collaborate With Us
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Research Areas */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Our Research Focus Areas
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              HBS is committed to advancing healthcare through multidisciplinary
              research across various domains
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {researchAreas.map((area, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
              >
                <div className="w-14 h-14 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                  {area.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900">
                  {area.title}
                </h3>
                <p className="text-gray-600 mb-4">{area.description}</p>
                <a
                  href="#"
                  className="text-blue-700 font-medium flex items-center gap-1 hover:text-blue-800"
                >
                  Learn more <ChevronRight size={16} />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Research Metrics */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {metrics.map((metric, index) => (
              <div key={index} className="text-center">
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

      {/* Research Resources */}
      <section className="py-16 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Research Resources
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Explore our comprehensive research ecosystem designed to support
              innovation and excellence
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {resources.map((resource, index) => (
              <a
                key={index}
                href={resource.link}
                className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col md:flex-row hover:shadow-lg transition-shadow"
              >
                <div className="md:w-1/3 bg-blue-800 text-white p-6 flex flex-col justify-center items-center text-center">
                  <div className="mb-3">{resource.icon}</div>
                  <h3 className="text-xl font-semibold">{resource.title}</h3>
                </div>
                <div className="md:w-2/3 p-6">
                  <p className="text-gray-600 mb-4">{resource.description}</p>
                  <div className="flex items-center text-blue-700 font-medium">
                    Explore <ArrowRight size={16} className="ml-2" />
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Latest Research News */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900">
              Latest Research News
            </h2>
            <a
              href="#"
              className="text-blue-700 font-medium flex items-center gap-1 hover:text-blue-800"
            >
              View all news <ArrowRight size={16} />
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {researchNews.map((news, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md overflow-hidden"
              >
                <div className="h-48 bg-gray-200">
                  <img
                    src={`/placeholder.svg?height=300&width=500&text=Research+Image+${
                      index + 1
                    }`}
                    alt={news.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="text-sm text-gray-500 mb-2">{news.date}</div>
                  <h3 className="text-xl font-semibold mb-3 text-gray-900">
                    {news.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{news.excerpt}</p>
                  <a
                    href="#"
                    className="text-blue-700 font-medium flex items-center gap-1 hover:text-blue-800"
                  >
                    Read more <ChevronRight size={16} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Interested in Collaborating?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            We welcome research partnerships with academic institutions,
            healthcare organizations, and industry leaders
          </p>
          <button className="bg-white text-blue-900 px-8 py-3 rounded-md font-medium hover:bg-blue-50 transition-colors">
            Contact Research Office
          </button>
        </div>
      </section>
    </div>
  );
}

// Data
const researchAreas = [
  {
    title: "Clinical Research",
    description:
      "Advancing patient care through clinical trials and evidence-based practice research across multiple specialties.",
    icon: <Microscope size={24} className="text-blue-700" />,
  },
  {
    title: "Pharmaceutical Sciences",
    description:
      "Developing innovative drug delivery systems and investigating novel therapeutic compounds.",
    icon: <FileText size={24} className="text-blue-700" />,
  },
  {
    title: "Medical Education",
    description:
      "Researching effective teaching methodologies and curriculum development for healthcare professionals.",
    icon: <BookOpen size={24} className="text-blue-700" />,
  },
  {
    title: "Public Health",
    description:
      "Addressing community health challenges through epidemiological studies and health policy research.",
    icon: <Globe size={24} className="text-blue-700" />,
  },
  {
    title: "Biomedical Engineering",
    description:
      "Creating innovative medical devices and technologies to improve patient outcomes and healthcare delivery.",
    icon: <Award size={24} className="text-blue-700" />,
  },
  {
    title: "Interdisciplinary Research",
    description:
      "Fostering collaboration across disciplines to tackle complex healthcare challenges with innovative approaches.",
    icon: <Users size={24} className="text-blue-700" />,
  },
];

const metrics = [
  {
    value: "200+",
    label: "Research Publications",
    icon: <FileText size={24} className="text-blue-700" />,
  },
  {
    value: "50+",
    label: "Ongoing Research Projects",
    icon: <Microscope size={24} className="text-blue-700" />,
  },
  {
    value: "25+",
    label: "Research Partnerships",
    icon: <Users size={24} className="text-blue-700" />,
  },
  {
    value: "15+",
    label: "Annual Conferences",
    icon: <Calendar size={24} className="text-blue-700" />,
  },
];

const resources = [
  {
    title: "HBS Journal",
    description:
      "Our peer-reviewed journal publishing original research, reviews, and case studies across healthcare disciplines.",
    icon: <BookOpen size={32} className="text-white" />,
    link: "/hbs-journal",
  },
  {
    title: "Conferences & Workshops",
    description:
      "Regular academic events bringing together researchers, clinicians, and industry experts to share knowledge.",
    icon: <Calendar size={32} className="text-white" />,
    link: "/conferences-workshops",
  },
  {
    title: "Research Publications",
    description:
      "Browse our database of faculty and student research publications in national and international journals.",
    icon: <FileText size={32} className="text-white" />,
    link: "/research-publications",
  },
  {
    title: "Research Pipeline",
    description:
      "Explore our ongoing research projects and upcoming initiatives across various healthcare domains.",
    icon: <Microscope size={32} className="text-white" />,
    link: "/research-pipeline",
  },
];

const researchNews = [
  {
    title: "HBS Researchers Develop Novel Drug Delivery System",
    excerpt:
      "A team of researchers from the Department of Pharmaceutical Sciences has developed a groundbreaking drug delivery system that enhances therapeutic efficacy.",
    date: "June 15, 2023",
  },
  {
    title: "International Research Collaboration Announced",
    excerpt:
      "HBS has entered into a strategic research partnership with leading international universities to address global healthcare challenges.",
    date: "May 28, 2023",
  },
  {
    title: "Faculty Member Receives Prestigious Research Grant",
    excerpt:
      "Dr. Ahmed Khan from the Department of Clinical Sciences has been awarded a significant grant for his innovative research on cardiovascular diseases.",
    date: "April 10, 2023",
  },
];
