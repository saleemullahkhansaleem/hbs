import { SecondaryHeader } from "@/components";
import { Button } from "@/components/ui/button";
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
    <div className="min-h-screen">
      {/* Hero Section */}
      <SecondaryHeader
        title="HBS Journal of Medical Sciences"
        description="A peer-reviewed journal publishing cutting-edge research in
              healthcare and medical sciences"
      />

      {/* About the Journal */}
      <section className="py-16">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold mb-6">About the Journal</h2>
              <p className="text-lg text-muted-foreground mb-6">
                The HBS Journal of Medical Sciences is a peer-reviewed,
                open-access journal that publishes original research, reviews,
                case reports, and perspectives across all areas of medicine and
                healthcare. Established in 2010, the journal aims to advance
                scientific knowledge and clinical practice through rigorous
                research and scholarly discourse.
              </p>
              <p className="text-lg text-muted-foreground mb-6">
                Our journal maintains high standards of scientific integrity and
                follows international publication ethics. All submitted
                manuscripts undergo rigorous peer review by experts in the field
                to ensure quality, originality, and relevance.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                <div className="bg-primary/5 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-3">Scope</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start">
                      <ChevronRight
                        size={18}
                        className="text-primary mt-1 mr-2 flex-shrink-0"
                      />
                      <span>Clinical and Basic Medical Sciences</span>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight
                        size={18}
                        className="text-primary mt-1 mr-2 flex-shrink-0"
                      />
                      <span>Pharmaceutical Research</span>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight
                        size={18}
                        className="text-primary mt-1 mr-2 flex-shrink-0"
                      />
                      <span>Public Health and Epidemiology</span>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight
                        size={18}
                        className="text-primary mt-1 mr-2 flex-shrink-0"
                      />
                      <span>Medical Education</span>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight
                        size={18}
                        className="text-primary mt-1 mr-2 flex-shrink-0"
                      />
                      <span>Healthcare Management</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-primary/5 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-3">
                    Publication Frequency
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    The journal is published quarterly (4 issues per year):
                  </p>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start">
                      <Calendar
                        size={18}
                        className="text-primary mt-1 mr-2 flex-shrink-0"
                      />
                      <span>March (Spring Issue)</span>
                    </li>
                    <li className="flex items-start">
                      <Calendar
                        size={18}
                        className="text-primary mt-1 mr-2 flex-shrink-0"
                      />
                      <span>June (Summer Issue)</span>
                    </li>
                    <li className="flex items-start">
                      <Calendar
                        size={18}
                        className="text-primary mt-1 mr-2 flex-shrink-0"
                      />
                      <span>September (Fall Issue)</span>
                    </li>
                    <li className="flex items-start">
                      <Calendar
                        size={18}
                        className="text-primary mt-1 mr-2 flex-shrink-0"
                      />
                      <span>December (Winter Issue)</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="bg-muted/50 p-6 rounded-lg h-fit">
              <h3 className="text-xl font-semibold mb-4">Journal Metrics</h3>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-sm text-muted-foreground mb-1">
                    <span>Impact Factor</span>
                    <span className="font-semibold">2.8</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div
                      className="bg-primary h-2 rounded-full"
                      style={{ width: "56%" }}
                    ></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm text-muted-foreground mb-1">
                    <span>Acceptance Rate</span>
                    <span className="font-semibold">32%</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div
                      className="bg-primary h-2 rounded-full"
                      style={{ width: "32%" }}
                    ></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm text-muted-foreground mb-1">
                    <span>Review Time (Avg.)</span>
                    <span className="font-semibold">6 weeks</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div
                      className="bg-primary h-2 rounded-full"
                      style={{ width: "40%" }}
                    ></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm text-muted-foreground mb-1">
                    <span>Publication Time (Avg.)</span>
                    <span className="font-semibold">12 weeks</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div
                      className="bg-primary h-2 rounded-full"
                      style={{ width: "60%" }}
                    ></div>
                  </div>
                </div>
              </div>
              <div className="mt-6 pt-6 border-t border-muted">
                <h3 className="text-xl font-semibold mb-4">Indexing</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-center">
                    <ExternalLink size={16} className="text-primary mr-2" />
                    <span>PubMed Central</span>
                  </li>
                  <li className="flex items-center">
                    <ExternalLink size={16} className="text-primary mr-2" />
                    <span>Scopus</span>
                  </li>
                  <li className="flex items-center">
                    <ExternalLink size={16} className="text-primary mr-2" />
                    <span>Web of Science</span>
                  </li>
                  <li className="flex items-center">
                    <ExternalLink size={16} className="text-primary mr-2" />
                    <span>Google Scholar</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Current Issue */}
      <section className="py-16 bg-muted/50">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold">Current Issue</h2>
            <div className="flex items-center gap-2">
              <span className="text-muted-foreground">
                Volume 14, Issue 2, June 2023
              </span>
              <button className="text-primary hover:underline underline-offset-4 flex items-center gap-1">
                <Download size={18} /> Download Full Issue
              </button>
            </div>
          </div>

          <div className="bg-background rounded-lg shadow-md p-6 mb-8">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center">
                <BookOpen size={32} className="text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-semibold">
                  From the Editor's Desk
                </h3>
                <p className="text-muted-foreground">
                  Prof. Dr. Aisha Rahman, Editor-in-Chief
                </p>
              </div>
            </div>
            <p className="text-muted-foreground mb-4">
              In this issue, we present a collection of original research
              articles, reviews, and case reports that showcase the breadth and
              depth of medical research being conducted at HBS and our partner
              institutions. The featured studies address pressing healthcare
              challenges and offer innovative solutions that have the potential
              to improve patient care and outcomes.
            </p>
            <a
              href="#"
              className="text-primary font-medium flex items-center gap-1 hover:underline underline-offset-4"
            >
              Read full editorial <ChevronRight size={16} />
            </a>
          </div>

          <div className="space-y-6">
            {currentIssueArticles.map((article, index) => (
              <div
                key={index}
                className="bg-background rounded-lg shadow-md p-6"
              >
                <div className="flex justify-between">
                  <span className="text-sm text-primary font-medium">
                    {article.category}
                  </span>
                  <span className="text-sm text-foreground/40">
                    Pages: {article.pages}
                  </span>
                </div>
                <h3 className="text-xl font-semibold my-2">{article.title}</h3>
                <p className="text-muted-foreground mb-3">{article.authors}</p>
                <p className="text-muted-foreground mb-4">{article.abstract}</p>
                <div className="flex flex-wrap gap-4">
                  <a
                    href="#"
                    className="text-primary font-medium flex items-center gap-1 hover:underline underline-offset-4"
                  >
                    Read full article <ChevronRight size={16} />
                  </a>
                  <a
                    href="#"
                    className="text-primary font-medium flex items-center gap-1 hover:underline underline-offset-4"
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
              className="inline-flex items-center gap-2 text-primary font-medium hover:underline underline-offset-4"
            >
              View all articles in this issue <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </section>

      {/* Archive */}
      <section className="py-16">
        <div className="container max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Journal Archive</h2>

          <div className="mb-8">
            <div className="relative">
              <input
                type="text"
                placeholder="Search articles by title, author, or keywords"
                className="w-full px-4 py-2 pl-12 rounded-lg border focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent bg-background"
              />
              <Search
                className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground"
                size={20}
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {archiveYears.map((year, yearIndex) => (
              <div key={yearIndex} className="bg-muted/50 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-4">{year.year}</h3>
                <ul className="space-y-3">
                  {year.issues.map((issue, issueIndex) => (
                    <li key={issueIndex}>
                      <a
                        href="#"
                        className="flex items-center justify-between p-3 bg-background rounded-md hover:bg-primary/5 transition-colors"
                      >
                        <div className="flex items-center gap-3">
                          <Calendar size={18} className="text-primary" />
                          <span>{issue.title}</span>
                        </div>
                        <ChevronRight size={18} className="text-primary" />
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
      <section className="py-16 bg-muted/50">
        <div className="container max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">For Authors</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-background rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold mb-4">
                Submission Guidelines
              </h3>
              <p className="text-muted-foreground mb-6">
                We welcome original research, review articles, case reports, and
                perspectives that align with the scope of our journal. Before
                submitting your manuscript, please review our guidelines to
                ensure your submission meets our requirements.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <span className="font-semibold text-primary">1</span>
                  </div>
                  <div>
                    <h4 className="font-semibold">Prepare Your Manuscript</h4>
                    <p className="text-muted-foreground">
                      Follow our formatting guidelines and use our manuscript
                      template
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <span className="font-semibold text-primary">2</span>
                  </div>
                  <div>
                    <h4 className="font-semibold">Online Submission</h4>
                    <p className="text-muted-foreground">
                      Create an account on our submission portal and upload your
                      files
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <span className="font-semibold text-primary">3</span>
                  </div>
                  <div>
                    <h4 className="font-semibold">Peer Review</h4>
                    <p className="text-muted-foreground">
                      Your manuscript will undergo rigorous peer review by
                      experts
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <span className="font-semibold text-primary">4</span>
                  </div>
                  <div>
                    <h4 className="font-semibold">Publication</h4>
                    <p className="text-muted-foreground">
                      Accepted manuscripts will be published in the next
                      available issue after final approval and formatting
                    </p>
                  </div>
                </div>
              </div>
              <div className="mt-6">
                <a
                  href="#"
                  className="text-primary font-medium flex items-center gap-1 hover:underline underline-offset-4"
                >
                  Download author guidelines <Download size={16} />
                </a>
              </div>
            </div>

            <div className="bg-background rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold mb-4">Editorial Process</h3>
              <p className="text-muted-foreground mb-6">
                Our rigorous editorial process ensures that all published
                articles meet high standards of scientific quality and
                integrity.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-4 p-3 bg-primary/5 rounded-md">
                  <Users size={20} className="text-primary" />
                  <div>
                    <h4 className="font-semibold">Editorial Board</h4>
                    <p className="text-sm text-muted-foreground">
                      Comprised of distinguished experts across medical
                      specialties
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-3 bg-primary/5 rounded-md">
                  <FileText size={20} className="text-primary" />
                  <div>
                    <h4 className="font-semibold">Peer Review Policy</h4>
                    <p className="text-sm text-muted-foreground">
                      Double-blind peer review by at least two independent
                      reviewers
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-3 bg-primary/5 rounded-md">
                  <Calendar size={20} className="text-primary" />
                  <div>
                    <h4 className="font-semibold">Publication Timeline</h4>
                    <p className="text-sm text-muted-foreground">
                      Initial decision within 4 weeks, publication within 3
                      months of acceptance
                    </p>
                  </div>
                </div>
              </div>
              <div className="mt-6">
                <Button className="">Submit a Manuscript</Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-16">
        <div className="container max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Contact the Editorial Office
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-3xl mx-auto">
            For inquiries regarding manuscript submission, review process, or
            general information about the journal
          </p>
          <div className="inline-flex flex-col sm:flex-row gap-4 bg-muted/50 p-6 rounded-lg">
            <div className="px-6 py-3 border-r border-muted">
              <p className="font-semibold">Email</p>
              <p className="text-primary">journal@hbs.edu.pk</p>
            </div>
            <div className="px-6 py-3 border-r border-muted">
              <p className="font-semibold">Phone</p>
              <p className="text-primary">+92-51-1234567</p>
            </div>
            <div className="px-6 py-3">
              <p className="font-semibold">Address</p>
              <p className="text-primary">
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
