import { SecondaryHeader } from "@/components";
import { Button } from "@/components/ui/button";
import {
  Beaker,
  BookOpen,
  Calendar,
  ChevronRight,
  Clock,
  FileText,
  Filter,
  FlaskConical,
  Lightbulb,
  Microscope,
  Search,
  Users,
  ArrowRight,
  CheckCircle2,
  CircleDot,
  BarChart3,
  Rocket,
  Target,
} from "lucide-react";
import { Link } from "react-router-dom";

export default function ResearchPipeline() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <SecondaryHeader
        title="Research Pipeline"
        description="Discover our ongoing research projects and upcoming initiatives
              shaping the future of healthcare"
      />

      {/* Pipeline Overview */}
      <section className="py-16">
        <div className="container max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">
            Our Research Pipeline
          </h2>
          <p className="text-lg text-muted-foreground max-w-4xl mx-auto text-center mb-12">
            At HBS, we maintain a robust research pipeline that spans from early
            conceptual development to clinical implementation and knowledge
            dissemination. Our structured approach ensures rigorous scientific
            inquiry and meaningful healthcare advancements.
          </p>

          <div className="relative">
            {/* Pipeline Steps - Desktop */}
            <div className="hidden md:block">
              <div className="absolute top-1/2 left-0 right-0 h-2 bg-muted -translate-y-1/2 z-0"></div>
              <div className="grid grid-cols-5 gap-4 relative z-10">
                {pipelineSteps.map((step, index) => (
                  <div key={index} className="flex flex-col items-center">
                    <div
                      className={`w-16 h-16 rounded-full flex items-center justify-center mb-8 ${
                        index === 0
                          ? "bg-primary text-primary-foreground"
                          : index === 1
                          ? "bg-primary text-primary-foreground"
                          : index === 2
                          ? "bg-primary text-primary-foreground"
                          : index === 3
                          ? "bg-primary/70 text-primary-foreground"
                          : "bg-primary/60 text-primary-foreground"
                      }`}
                    >
                      {step.icon}
                    </div>
                    <h3 className="text-lg font-semibold text-center mb-2">
                      {step.title}
                    </h3>
                    <p className="text-sm text-muted-foreground text-center">
                      {step.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Pipeline Steps - Mobile */}
            <div className="md:hidden space-y-6">
              {pipelineSteps.map((step, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div
                    className={`w-12 h-12 rounded-full flex-shrink-0 flex items-center justify-center ${
                      index === 0
                        ? "bg-primary text-primary-foreground"
                        : index === 1
                        ? "bg-primary/90 text-primary-foreground"
                        : index === 2
                        ? "bg-primary/80 text-primary-foreground"
                        : index === 3
                        ? "bg-primary/70 text-primary-foreground"
                        : "bg-primary/60 text-primary-foreground"
                    }`}
                  >
                    {step.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">{step.title}</h3>
                    <p className="text-sm text-muted-foreground">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="py-8 bg-muted/50 border-y">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-grow relative">
              <input
                type="text"
                placeholder="Search research projects by title, investigator, or keywords"
                className="w-full p-4 pl-12 rounded-lg border focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent bg-background"
              />
              <Search
                className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground"
                size={20}
              />
            </div>
            <div className="flex flex-wrap gap-4">
              <div className="relative">
                <select className="appearance-none bg-background border rounded-lg px-4 py-4 pr-10 focus:outline-none focus:ring-2 focus:ring-primary">
                  <option>All Research Areas</option>
                  <option>Clinical Research</option>
                  <option>Basic Sciences</option>
                  <option>Public Health</option>
                  <option>Medical Education</option>
                  <option>Pharmaceutical Sciences</option>
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
                <select className="appearance-none bg-background border rounded-lg px-4 py-4 pr-10 focus:outline-none focus:ring-2 focus:ring-primary">
                  <option>All Phases</option>
                  <option>Conceptual</option>
                  <option>Planning</option>
                  <option>Active</option>
                  <option>Analysis</option>
                  <option>Dissemination</option>
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
              <button className="flex items-center gap-2 px-4 py-4 border rounded-lg bg-background text-muted-foreground hover:bg-muted/50">
                <Filter size={18} /> More Filters
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Active Research Projects */}
      <section className="py-16">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="flex flex-wrap justify-between items-center gap-4 mb-8">
            <h2 className="text-3xl font-bold">Active Research Projects</h2>
            <div className="flex items-center gap-2">
              <span className="text-muted-foreground">Sort by:</span>
              <select className="px-3 py-2 border rounded-md bg-background text-muted-foreground">
                <option>Most Recent</option>
                <option>Research Area</option>
                <option>Phase</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {activeProjects.map((project, index) => (
              <div
                key={index}
                className="bg-background rounded-lg shadow-md overflow-hidden border"
              >
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div
                      className={`px-3 py-1 rounded-full text-sm font-medium ${
                        project.phase === "Active Research"
                          ? "bg-green-200 text-green-800"
                          : project.phase === "Data Analysis"
                          ? "bg-yellow-200 text-yellow-800"
                          : project.phase === "Planning"
                          ? "bg-blue-200 text-primary"
                          : "bg-purple-200 text-purple-800"
                      }`}
                    >
                      {project.phase}
                    </div>
                    <div className="text-sm text-muted/500">
                      Started: {project.startDate}
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold mb-3">
                    {project.title}
                  </h3>
                  <div className="flex items-center gap-2 mb-4">
                    <span className="text-muted-foreground font-medium">
                      Principal Investigator:
                    </span>
                    <span className="text-muted-foreground">
                      {project.investigator}
                    </span>
                  </div>
                  <p className="text-muted-foreground mb-6">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag, tidx) => (
                      <span
                        key={tidx}
                        className="bg-muted/50 text-muted-foreground px-3 py-1 rounded-full text-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex flex-wrap gap-4 justify-between items-center">
                    <div className="flex flex-wrap items-center gap-3">
                      <div className="flex items-center gap-1 text-muted-foreground">
                        <Users size={16} />
                        <span>{project.team} team members</span>
                      </div>
                      <div className="flex items-center gap-1 text-muted-foreground">
                        <Calendar size={16} />
                        <span>
                          Est. completion: {project.estimatedCompletion}
                        </span>
                      </div>
                    </div>
                    <Link
                      to="#"
                      className="text-primary font-medium flex items-center gap-1 hover:underline underline-offset-4"
                    >
                      Project details <ChevronRight size={16} />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Button variant="outline" className="" size="lg">
              Load More Projects <ChevronRight size={18} />
            </Button>
          </div>
        </div>
      </section>

      {/* Research by Stage */}
      <section className="py-16 bg-muted/50">
        <div className="container max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Research by Stage</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {researchStages.map((stage, index) => (
              <div
                key={index}
                className="bg-background rounded-lg shadow-md overflow-hidden"
              >
                <div className="h-2 bg-primary"></div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      {stage.icon}
                    </div>
                    <h3 className="text-xl font-semibold">{stage.title}</h3>
                  </div>
                  <p className="text-muted-foreground mb-6">
                    {stage.description}
                  </p>
                  <div className="space-y-3">
                    {stage.projects.map((project, pidx) => (
                      <div
                        key={pidx}
                        className="flex items-start gap-3 p-3 hover:bg-muted/50 rounded-md"
                      >
                        <CircleDot
                          size={18}
                          className="text-primary mt-1 flex-shrink-0"
                        />
                        <div>
                          <h4 className="font-medium">{project.title}</h4>
                          <p className="text-sm text-muted-foreground">
                            {project.investigator}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="mt-6 pt-4 border-t">
                    <Link
                      to="#"
                      className="text-primary font-medium flex items-center gap-1 hover:underline underline-offset-4"
                    >
                      View all {stage.title.toLowerCase()} projects{" "}
                      <ChevronRight size={16} />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Research Initiative */}
      <section className="py-16">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="bg-gradient-to-r from-primary/5 to-primary/10 rounded-xl overflow-hidden shadow-md">
            <div className="grid grid-cols-1 lg:grid-cols-3">
              <div className="lg:col-span-1 bg-primary text-primary-foreground p-8 flex flex-col justify-center">
                <div className="mb-4 inline-block bg-primary px-3 py-1 rounded-md text-sm font-medium">
                  Featured Initiative
                </div>
                <h2 className="text-3xl font-bold mb-4">
                  Healthcare Innovation Hub
                </h2>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-3">
                    <Calendar size={20} />
                    <span>Launched: January 2023</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Users size={20} />
                    <span>Multidisciplinary Team: 25+ Researchers</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Clock size={20} />
                    <span>5-Year Research Program</span>
                  </div>
                </div>
                <div className="mt-auto">
                  <Button
                    variant="outline"
                    size="lg"
                    className="text-foreground"
                  >
                    Learn More
                  </Button>
                </div>
              </div>
              <div className="lg:col-span-2 p-8">
                <h3 className="text-2xl font-semibold mb-4">
                  Transforming Healthcare Through Technology and Innovation
                </h3>
                <p className="text-muted-foreground mb-6">
                  The Healthcare Innovation Hub is a strategic research
                  initiative that brings together clinicians, engineers, data
                  scientists, and healthcare management experts to develop and
                  implement innovative solutions for pressing healthcare
                  challenges in Pakistan and beyond.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div className="bg-background border-l-2 border-primary p-4 rounded-lg shadow-sm">
                    <h4 className="font-semibold mb-2">Research Focus Areas</h4>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start">
                        <ChevronRight
                          size={18}
                          className="text-primary mt-1 mr-2 flex-shrink-0"
                        />
                        <span>AI-powered diagnostic tools</span>
                      </li>
                      <li className="flex items-start">
                        <ChevronRight
                          size={18}
                          className="text-primary mt-1 mr-2 flex-shrink-0"
                        />
                        <span>Telemedicine for rural healthcare</span>
                      </li>
                      <li className="flex items-start">
                        <ChevronRight
                          size={18}
                          className="text-primary mt-1 mr-2 flex-shrink-0"
                        />
                        <span>Healthcare process optimization</span>
                      </li>
                      <li className="flex items-start">
                        <ChevronRight
                          size={18}
                          className="text-primary mt-1 mr-2 flex-shrink-0"
                        />
                        <span>Medical device innovation</span>
                      </li>
                    </ul>
                  </div>
                  <div className="bg-background border-l-2 border-primary p-4 rounded-lg shadow-sm">
                    <h4 className="font-semibold mb-2">Expected Outcomes</h4>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start">
                        <ChevronRight
                          size={18}
                          className="text-primary mt-1 mr-2 flex-shrink-0"
                        />
                        <span>5+ patentable healthcare innovations</span>
                      </li>
                      <li className="flex items-start">
                        <ChevronRight
                          size={18}
                          className="text-primary mt-1 mr-2 flex-shrink-0"
                        />
                        <span>Implementation in 10+ healthcare facilities</span>
                      </li>
                      <li className="flex items-start">
                        <ChevronRight
                          size={18}
                          className="text-primary mt-1 mr-2 flex-shrink-0"
                        />
                        <span>Training for 200+ healthcare professionals</span>
                      </li>
                      <li className="flex items-start">
                        <ChevronRight
                          size={18}
                          className="text-primary mt-1 mr-2 flex-shrink-0"
                        />
                        <span>20+ high-impact publications</span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="flex flex-wrap gap-4">
                  <Link
                    to="#"
                    className="text-primary font-medium flex items-center gap-1 hover:underline underline-offset-4"
                  >
                    Current projects <ChevronRight size={16} />
                  </Link>
                  <Link
                    to="#"
                    className="text-primary font-medium flex items-center gap-1 hover:underline underline-offset-4"
                  >
                    Collaboration opportunities <ChevronRight size={16} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Research Initiatives */}
      <section className="py-16 bg-muted/50">
        <div className="container max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">
            Upcoming Research Initiatives
          </h2>

          <div className="space-y-6">
            {upcomingInitiatives.map((initiative, index) => (
              <div
                key={index}
                className="bg-background rounded-lg shadow-md p-6"
              >
                <div className="flex flex-col md:flex-row md:items-center gap-6">
                  <div className="md:w-1/4">
                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                      {initiative.icon}
                    </div>
                    <div className="mt-4">
                      <div className="text-sm font-medium text-primary">
                        Expected Launch
                      </div>
                      <div className="">{initiative.launchDate}</div>
                    </div>
                  </div>
                  <div className="md:w-3/4">
                    <h3 className="text-xl font-semibold mb-3">
                      {initiative.title}
                    </h3>
                    <p className="text-muted-foreground mb-4">
                      {initiative.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {initiative.areas.map((area, aidx) => (
                        <span
                          key={aidx}
                          className="bg-primary/5 text-primary px-3 py-1 rounded-full text-sm"
                        >
                          {area}
                        </span>
                      ))}
                    </div>
                    <div className="flex flex-wrap gap-4 items-center justify-between">
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="text-muted-foreground font-medium">
                          Lead Researcher:
                        </span>
                        <span className="text-muted-foreground">
                          {initiative.leadResearcher}
                        </span>
                      </div>
                      <Link
                        to="#"
                        className="text-primary font-medium flex items-center gap-1 hover:underline underline-offset-4"
                      >
                        Learn more <ChevronRight size={16} />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Research Funding */}
      <section className="py-16">
        <div className="container max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Research Funding</h2>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="border rounded-lg shadow-md p-6 mb-6">
                <h3 className="text-xl font-semibold mb-4">Funding Sources</h3>
                <p className="text-muted-foreground mb-6">
                  Our research initiatives are supported by a diverse portfolio
                  of funding sources, including institutional grants, government
                  funding, industry partnerships, and international
                  collaborations.
                </p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {fundingSources.map((source, index) => (
                    <div
                      key={index}
                      className="text-center p-4 bg-muted/50 rounded-lg"
                    >
                      <div className="text-2xl font-bold text-primary mb-1">
                        {source.percentage}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {source.name}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="border rounded-lg shadow-md p-6">
                <h3 className="text-xl font-semibold mb-4">
                  Recent Major Grants
                </h3>
                <div className="space-y-4">
                  {majorGrants.map((grant, index) => (
                    <div
                      key={index}
                      className="border-b pb-4 last:border-0 last:pb-0"
                    >
                      <div className="flex justify-between mb-1">
                        <h4 className="font-medium">{grant.title}</h4>
                        <span className="text-primary font-medium">
                          {grant.amount}
                        </span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">
                          {grant.agency}
                        </span>
                        <span className="text-muted/500">{grant.year}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div>
              <div className="bg-primary/5 rounded-lg shadow-md p-6">
                <h3 className="text-xl font-semibold mb-4">
                  Funding Opportunities
                </h3>
                <div className="space-y-4">
                  {fundingOpportunities.map((opportunity, index) => (
                    <div key={index} className="bg-background p-4 rounded-lg">
                      <h4 className="font-medium mb-2">{opportunity.title}</h4>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                        <Calendar size={16} className="text-primary" />
                        <span>Deadline: {opportunity.deadline}</span>
                      </div>
                      <p className="text-sm text-muted-foreground mb-3">
                        {opportunity.description}
                      </p>
                      <Link
                        to="#"
                        className="text-primary text-sm font-medium flex items-center gap-1 hover:underline underline-offset-4"
                      >
                        View details <ChevronRight size={14} />
                      </Link>
                    </div>
                  ))}
                </div>
                <div className="mt-6 text-center">
                  <Link
                    to="#"
                    className="text-primary font-medium hover:underline underline-offset-4"
                  >
                    View all funding opportunities
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Research Collaboration */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">
                Research Collaboration
              </h2>
              <p className="text-xl text-primary-foreground/70 mb-8">
                We actively seek collaborations with academic institutions,
                healthcare organizations, industry partners, and community
                stakeholders to enhance the impact and reach of our research.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <CheckCircle2
                    size={24}
                    className="text-primary-foreground flex-shrink-0 mt-1"
                  />
                  <div>
                    <h3 className="text-lg font-semibold mb-1">
                      Academic Partnerships
                    </h3>
                    <p className="text-primary-foreground/70">
                      Collaborate with our researchers on joint projects,
                      student exchanges, and shared resources
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2
                    size={24}
                    className="text-primary-foreground flex-shrink-0 mt-1"
                  />
                  <div>
                    <h3 className="text-lg font-semibold mb-1">
                      Industry Collaborations
                    </h3>
                    <p className="text-primary-foreground/70">
                      Partner with us to develop innovative healthcare solutions
                      and translate research into practice
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2
                    size={24}
                    className="text-primary-foreground flex-shrink-0 mt-1"
                  />
                  <div>
                    <h3 className="text-lg font-semibold mb-1">
                      Community Engagement
                    </h3>
                    <p className="text-primary-foreground/70">
                      Work with us on community-based research initiatives that
                      address local healthcare needs
                    </p>
                  </div>
                </div>
              </div>
              <Button size="lg" variant="outline" className="text-foreground">
                Explore Collaboration Opportunities
              </Button>
            </div>
            <div className="grid grid-cols-2 gap-6">
              {collaborationPartners.map((partner, index) => (
                <div
                  key={index}
                  className="bg-background/20 p-6 rounded-lg backdrop-blur-sm"
                >
                  <div className="mb-4 flex items-center">
                    <div className="w-full p-2 bg-background/80 rounded flex items-center justify-center text-primary text-sm sm:text-base font-bold">
                      {partner.name}
                    </div>
                  </div>
                  <p className="text-sm text-primary-foreground/70">
                    {partner.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-16">
        <div className="container max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Contact Research Office</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-3xl mx-auto">
            For inquiries about our research pipeline, collaboration
            opportunities, or funding information
          </p>
          <div className="inline-flex flex-col sm:flex-row gap-4 bg-muted/50 p-6 rounded-lg shadow-md">
            <div className="px-6 py-3 border-r">
              <p className="font-semibold">Email</p>
              <p className="text-primary">research@hbs.edu.pk</p>
            </div>
            <div className="px-6 py-3 border-r">
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
const pipelineSteps = [
  {
    title: "Conceptualization",
    description:
      "Identifying research questions and developing initial concepts",
    icon: <Lightbulb size={24} />,
  },
  {
    title: "Planning",
    description:
      "Designing methodology, securing funding, and assembling research teams",
    icon: <Target size={24} />,
  },
  {
    title: "Active Research",
    description:
      "Conducting experiments, collecting data, and implementing protocols",
    icon: <Microscope size={24} />,
  },
  {
    title: "Analysis",
    description:
      "Processing data, interpreting results, and drawing conclusions",
    icon: <BarChart3 size={24} />,
  },
  {
    title: "Dissemination",
    description: "Publishing findings and translating research into practice",
    icon: <Rocket size={24} />,
  },
];

const activeProjects = [
  {
    title: "Novel Drug Delivery Systems for Targeted Cancer Therapy",
    investigator: "Dr. Aisha Rahman",
    description:
      "This project focuses on developing innovative nanoparticle-based drug delivery systems that can target specific cancer cells while minimizing damage to healthy tissues. The research combines pharmaceutical sciences with oncology to improve treatment efficacy and reduce side effects.",
    phase: "Active Research",
    startDate: "March 2022",
    estimatedCompletion: "Q2 2024",
    team: 8,
    tags: ["Pharmaceutical Sciences", "Oncology", "Nanotechnology"],
  },
  {
    title:
      "Telemedicine Implementation for Rural Healthcare Access in Pakistan",
    investigator: "Dr. Farhan Ahmed",
    description:
      "This research evaluates the effectiveness of a telemedicine program designed to improve healthcare access in underserved rural areas of Pakistan. The study examines clinical outcomes, patient satisfaction, cost-effectiveness, and barriers to implementation.",
    phase: "Data Analysis",
    startDate: "January 2023",
    estimatedCompletion: "Q4 2023",
    team: 12,
    tags: ["Public Health", "Digital Health", "Healthcare Access"],
  },
  {
    title: "Antimicrobial Resistance Patterns in Hospital-Acquired Infections",
    investigator: "Dr. Saima Khan",
    description:
      "This surveillance study tracks the prevalence and patterns of antimicrobial resistance in hospital-acquired infections across multiple healthcare facilities. The research aims to inform antibiotic stewardship programs and infection control policies.",
    phase: "Active Research",
    startDate: "September 2022",
    estimatedCompletion: "Q3 2024",
    team: 15,
    tags: ["Microbiology", "Infectious Diseases", "Public Health"],
  },
  {
    title: "Simulation-Based Medical Education: Impact on Clinical Skills",
    investigator: "Dr. Hassan Ali",
    description:
      "This educational research project evaluates the effectiveness of simulation-based training methods on the development of clinical skills among medical students and residents. The study employs mixed methods to assess both performance metrics and learner experiences.",
    phase: "Planning",
    startDate: "July 2023",
    estimatedCompletion: "Q2 2025",
    team: 6,
    tags: ["Medical Education", "Clinical Skills", "Simulation"],
  },
];

const researchStages = [
  {
    title: "Early Stage Research",
    description:
      "Projects in the conceptualization and planning phases, focusing on research design and methodology development.",
    icon: <Lightbulb size={24} className="text-primary" />,
    projects: [
      {
        title: "AI-Based Diagnostic Tool for Diabetic Retinopathy",
        investigator: "Dr. Naveed Khan",
      },
      {
        title: "Mental Health Outcomes in Healthcare Workers Post-Pandemic",
        investigator: "Dr. Sana Malik",
      },
      {
        title:
          "Genetic Markers for Cardiovascular Disease Risk in South Asian Populations",
        investigator: "Dr. Imran Shah",
      },
    ],
  },
  {
    title: "Active Research",
    description:
      "Ongoing projects currently collecting data, conducting experiments, or implementing interventions.",
    icon: <Microscope size={24} className="text-primary" />,
    projects: [
      {
        title: "Novel Drug Delivery Systems for Targeted Cancer Therapy",
        investigator: "Dr. Aisha Rahman",
      },
      {
        title:
          "Antimicrobial Resistance Patterns in Hospital-Acquired Infections",
        investigator: "Dr. Saima Khan",
      },
      {
        title: "Community-Based Intervention for Diabetes Prevention",
        investigator: "Dr. Yasir Ahmed",
      },
    ],
  },
  {
    title: "Late Stage Research",
    description:
      "Projects in data analysis, manuscript preparation, or knowledge translation phases.",
    icon: <FileText size={24} className="text-primary" />,
    projects: [
      {
        title: "Telemedicine Implementation for Rural Healthcare Access",
        investigator: "Dr. Farhan Ahmed",
      },
      {
        title: "Outcomes of Minimally Invasive Surgical Techniques",
        investigator: "Dr. Zainab Qureshi",
      },
      {
        title: "Effectiveness of Problem-Based Learning in Medical Education",
        investigator: "Dr. Omar Malik",
      },
    ],
  },
];

const upcomingInitiatives = [
  {
    title: "Precision Medicine Initiative for Chronic Diseases",
    description:
      "A comprehensive research program that will integrate genomics, clinical data, and environmental factors to develop personalized prevention and treatment strategies for chronic diseases prevalent in the Pakistani population.",
    launchDate: "Q1 2024",
    leadResearcher: "Dr. Imran Shah",
    areas: ["Genomics", "Chronic Disease", "Personalized Medicine"],
    icon: <FlaskConical size={32} className="text-primary" />,
  },
  {
    title: "One Health Research Network",
    description:
      "An interdisciplinary initiative that will examine the interconnections between human, animal, and environmental health, with a focus on zoonotic diseases, antimicrobial resistance, and climate change impacts on health in Pakistan.",
    launchDate: "Q2 2024",
    leadResearcher: "Dr. Saima Khan",
    areas: ["Public Health", "Infectious Diseases", "Environmental Health"],
    icon: <Beaker size={32} className="text-primary" />,
  },
  {
    title: "Digital Health Innovation Lab",
    description:
      "A dedicated research facility that will develop and evaluate digital health solutions, including mobile health applications, remote monitoring systems, and AI-powered clinical decision support tools for healthcare providers in resource-limited settings.",
    launchDate: "Q3 2024",
    leadResearcher: "Dr. Farhan Ahmed",
    areas: ["Digital Health", "AI", "Healthcare Access"],
    icon: <BookOpen size={32} className="text-primary" />,
  },
];

const fundingSources = [
  { name: "Institutional", percentage: "35%" },
  { name: "Government", percentage: "25%" },
  { name: "Industry", percentage: "20%" },
  { name: "International", percentage: "20%" },
];

const majorGrants = [
  {
    title: "Healthcare Innovation Research Program",
    agency: "Ministry of Health, Pakistan",
    amount: "PKR 25 Million",
    year: "2023",
  },
  {
    title: "Antimicrobial Resistance Surveillance Network",
    agency: "World Health Organization",
    amount: "USD 350,000",
    year: "2022",
  },
  {
    title: "Digital Health Solutions for Rural Communities",
    agency: "Global Health Innovation Fund",
    amount: "USD 500,000",
    year: "2022",
  },
  {
    title: "Cancer Research and Treatment Initiative",
    agency: "Pakistan Medical Research Council",
    amount: "PKR 18 Million",
    year: "2021",
  },
];

const fundingOpportunities = [
  {
    title: "Early Career Researcher Grant",
    deadline: "October 30, 2023",
    description:
      "Funding for junior faculty members to establish independent research programs in priority health areas.",
  },
  {
    title: "Collaborative Research Grant",
    deadline: "December 15, 2023",
    description:
      "Support for interdisciplinary research teams addressing complex healthcare challenges.",
  },
  {
    title: "Innovation Seed Fund",
    deadline: "January 31, 2024",
    description:
      "Funding for proof-of-concept studies and early-stage development of healthcare innovations.",
  },
];

const collaborationPartners = [
  {
    name: "National University",
    description:
      "Joint research programs in public health and clinical sciences",
  },
  {
    name: "Global Health Institute",
    description: "International collaboration on infectious disease research",
  },
  {
    name: "MedTech Innovations",
    description: "Industry partnership for medical device development",
  },
  {
    name: "Community Health Network",
    description: "Community-based participatory research initiatives",
  },
];
