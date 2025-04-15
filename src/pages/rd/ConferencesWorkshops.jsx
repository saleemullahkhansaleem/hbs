import { SecondaryHeader } from "@/components";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import {
  Calendar,
  MapPin,
  Users,
  Clock,
  ArrowRight,
  Download,
  ChevronRight,
  Filter,
} from "lucide-react";
import { Link } from "react-router-dom";

export default function ConferencesWorkshops() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <SecondaryHeader
        title="Conferences & Workshops"
        description="Fostering knowledge exchange and professional development through
              academic events"
      />

      {/* Featured Conference */}
      <section className="py-16">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="bg-gradient-to-r from-primary/5 to-primary/10 rounded-xl overflow-hidden shadow-md">
            <div className="grid grid-cols-1 lg:grid-cols-3">
              <div className="lg:col-span-1 bg-primary text-primary-foreground p-8 flex flex-col justify-center">
                <div className="mb-4 inline-block bg-primary px-3 py-1 rounded-md text-sm font-medium">
                  Featured Event
                </div>
                <h2 className="text-3xl font-bold mb-4">
                  5th International Conference on Medical Education
                </h2>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-3">
                    <Calendar size={20} />
                    <span>October 15-17, 2023</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPin size={20} />
                    <span>HBS Conference Center, Islamabad</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Users size={20} />
                    <span>Expected Attendees: 500+</span>
                  </div>
                </div>
                <div className="mt-auto">
                  <Button variant="outline" className="text-foreground">
                    Register Now
                  </Button>
                </div>
              </div>
              <div className="lg:col-span-2 p-8">
                <h3 className="text-2xl font-semibold mb-4">
                  Transforming Medical Education: Innovation and Excellence
                </h3>
                <p className="text-muted-foreground mb-6">
                  Join us for the 5th International Conference on Medical
                  Education, bringing together educators, researchers, and
                  healthcare professionals from around the world to discuss the
                  latest innovations, challenges, and best practices in medical
                  education.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div className="bg-background p-4 rounded-lg shadow-sm">
                    <h4 className="font-semibold mb-2">
                      Conference Highlights
                    </h4>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start">
                        <ChevronRight
                          size={18}
                          className="text-primary mt-1 mr-2 flex-shrink-0"
                        />
                        <span>Keynote speeches by international experts</span>
                      </li>
                      <li className="flex items-start">
                        <ChevronRight
                          size={18}
                          className="text-primary mt-1 mr-2 flex-shrink-0"
                        />
                        <span>Interactive workshops and panel discussions</span>
                      </li>
                      <li className="flex items-start">
                        <ChevronRight
                          size={18}
                          className="text-primary mt-1 mr-2 flex-shrink-0"
                        />
                        <span>Research paper presentations</span>
                      </li>
                      <li className="flex items-start">
                        <ChevronRight
                          size={18}
                          className="text-primary mt-1 mr-2 flex-shrink-0"
                        />
                        <span>Networking opportunities</span>
                      </li>
                    </ul>
                  </div>
                  <div className="bg-background p-4 rounded-lg shadow-sm">
                    <h4 className="font-semibold mb-2">Key Themes</h4>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start">
                        <ChevronRight
                          size={18}
                          className="text-primary mt-1 mr-2 flex-shrink-0"
                        />
                        <span>Technology-enhanced learning</span>
                      </li>
                      <li className="flex items-start">
                        <ChevronRight
                          size={18}
                          className="text-primary mt-1 mr-2 flex-shrink-0"
                        />
                        <span>Competency-based medical education</span>
                      </li>
                      <li className="flex items-start">
                        <ChevronRight
                          size={18}
                          className="text-primary mt-1 mr-2 flex-shrink-0"
                        />
                        <span>Assessment strategies</span>
                      </li>
                      <li className="flex items-start">
                        <ChevronRight
                          size={18}
                          className="text-primary mt-1 mr-2 flex-shrink-0"
                        />
                        <span>Faculty development</span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="flex flex-wrap gap-4">
                  <a
                    href="#"
                    className="text-primary font-medium flex items-center gap-1 hover:underline underline-offset-4"
                  >
                    View full program <ChevronRight size={16} />
                  </a>
                  <a
                    href="#"
                    className="text-primary font-medium flex items-center gap-1 hover:underline underline-offset-4"
                  >
                    <Download size={16} /> Download brochure
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-16 bg-muted/50">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="flex flex-wrap gap-4 justify-between items-center mb-8">
            <h2 className="text-3xl font-bold">Upcoming Events</h2>
            <div className="flex items-center gap-2">
              <button className="flex items-center gap-2 px-4 py-2 border rounded-md bg-background text-muted-foreground hover:bg-muted/50">
                <Filter size={16} /> Filter
              </button>
              <select className="px-4 py-2 border rounded-md bg-background text-muted-foreground">
                <option>All Categories</option>
                <option>Conferences</option>
                <option>Workshops</option>
                <option>Seminars</option>
                <option>Webinars</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {upcomingEvents.map((event, index) => (
              <div
                key={index}
                className="bg-background rounded-lg shadow-md overflow-hidden"
              >
                <div className="h-48 bg-muted relative">
                  <img
                    src={`https:placehold.co/500x300`}
                    alt={event.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4 bg-primary text-primary-foreground px-3 py-1 rounded-md text-sm font-medium">
                    {event.type}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3">{event.title}</h3>
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center gap-3 text-muted-foreground">
                      <Calendar size={18} className="text-primary" />
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center gap-3 text-muted-foreground">
                      <MapPin size={18} className="text-primary" />
                      <span>{event.location}</span>
                    </div>
                    <div className="flex items-center gap-3 text-muted-foreground">
                      <Clock size={18} className="text-primary" />
                      <span>{event.duration}</span>
                    </div>
                  </div>
                  <p className="text-muted-foreground mb-6">
                    {event.description}
                  </p>
                  <div className="flex justify-between items-center">
                    <span
                      className={`px-3 py-1 rounded-md text-sm font-medium ${
                        event.registrationStatus === "Open"
                          ? "bg-green-200 text-green-800"
                          : event.registrationStatus === "Closing Soon"
                          ? "bg-yellow-200 text-yellow-800"
                          : "bg-red-200 text-red-800"
                      }`}
                    >
                      {event.registrationStatus}
                    </span>
                    <Link
                      to="#"
                      className="text-primary font-medium hover:underline underline-offset-4"
                    >
                      Learn more
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <a
              href="#"
              className="inline-flex items-center gap-2 text-primary font-medium hover:underline underline-offset-4"
            >
              View all upcoming events <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </section>

      {/* Past Events */}
      <section className="py-16">
        <div className="container max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Past Events</h2>

          <div className="overflow-x-auto">
            <table className="min-w-full bg-background border border-muted">
              <thead>
                <tr className="bg-muted/50">
                  <th className="py-3 px-4 text-left text-muted-foreground font-semibold border-b">
                    Event Name
                  </th>
                  <th className="py-3 px-4 text-left text-muted-foreground font-semibold border-b">
                    Type
                  </th>
                  <th className="py-3 px-4 text-left text-muted-foreground font-semibold border-b">
                    Date
                  </th>
                  <th className="py-3 px-4 text-left text-muted-foreground font-semibold border-b">
                    Location
                  </th>
                  <th className="py-3 px-4 text-left text-muted-foreground font-semibold border-b">
                    Resources
                  </th>
                </tr>
              </thead>
              <tbody>
                {pastEvents.map((event, index) => (
                  <tr
                    key={index}
                    className={
                      index % 2 === 0 ? "bg-background" : "bg-muted/50"
                    }
                  >
                    <td className="py-3 px-4 border-b">{event.name}</td>
                    <td className="py-3 px-4 border-b">
                      <span
                        className={`px-2 py-1 rounded-md text-xs font-medium ${
                          event.type === "Conference"
                            ? "bg-primary/10 text-primary"
                            : event.type === "Workshop"
                            ? "bg-green-200 text-green-800"
                            : event.type === "Seminar"
                            ? "bg-purple-200 text-purple-800"
                            : "bg-gray-200 text-gray-800"
                        }`}
                      >
                        {event.type}
                      </span>
                    </td>
                    <td className="py-3 px-4 border-b">{event.date}</td>
                    <td className="py-3 px-4 border-b">{event.location}</td>
                    <td className="py-3 px-4 border-b">
                      <div className="flex gap-2">
                        {event.resources.photos && (
                          <a
                            href="#"
                            className="text-primary hover:underline underline-offset-4"
                          >
                            Photos
                          </a>
                        )}
                        {event.resources.presentations && (
                          <a
                            href="#"
                            className="text-primary hover:underline underline-offset-4"
                          >
                            Presentations
                          </a>
                        )}
                        {event.resources.proceedings && (
                          <a
                            href="#"
                            className="text-primary hover:underline underline-offset-4"
                          >
                            Proceedings
                          </a>
                        )}
                        {event.resources.videos && (
                          <a
                            href="#"
                            className="text-primary hover:underline underline-offset-4"
                          >
                            Videos
                          </a>
                        )}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-6 flex justify-center">
            <div className="flex items-center gap-2">
              <button className="w-8 h-8 flex items-center justify-center rounded-md border bg-background">
                &lt;
              </button>
              <button className="w-8 h-8 flex items-center justify-center rounded-md border bg-primary text-primary-foreground">
                1
              </button>
              <button className="w-8 h-8 flex items-center justify-center rounded-md border bg-background">
                2
              </button>
              <button className="w-8 h-8 flex items-center justify-center rounded-md border bg-background">
                3
              </button>
              <button className="w-8 h-8 flex items-center justify-center rounded-md border bg-background">
                &gt;
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Propose an Event */}
      <section className="py-16 bg-primary/5">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6">Propose an Event</h2>
              <p className="text-lg text-muted-foreground mb-6">
                HBS welcomes proposals for conferences, workshops, seminars, and
                other academic events that align with our research priorities
                and educational mission. If you have an idea for an event, we'd
                love to hear from you.
              </p>
              <div className="space-y-6">
                <div className="bg-background p-4 rounded-lg shadow-sm">
                  <h3 className="text-xl font-semibold mb-3">
                    Types of Events We Support
                  </h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start">
                      <ChevronRight
                        size={18}
                        className="text-primary mt-1 mr-2 flex-shrink-0"
                      />
                      <div>
                        <span className="font-medium">
                          Academic Conferences:
                        </span>{" "}
                        Large-scale events featuring keynote speakers, paper
                        presentations, and networking opportunities
                      </div>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight
                        size={18}
                        className="text-primary mt-1 mr-2 flex-shrink-0"
                      />
                      <div>
                        <span className="font-medium">Workshops:</span> Hands-on
                        sessions focused on specific skills or techniques
                      </div>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight
                        size={18}
                        className="text-primary mt-1 mr-2 flex-shrink-0"
                      />
                      <div>
                        <span className="font-medium">Seminars:</span> Focused
                        discussions on specialized topics
                      </div>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight
                        size={18}
                        className="text-primary mt-1 mr-2 flex-shrink-0"
                      />
                      <div>
                        <span className="font-medium">Webinars:</span> Online
                        events accessible to a global audience
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="bg-background p-4 rounded-lg shadow-sm">
                  <h3 className="text-xl font-semibold mb-3">
                    Proposal Process
                  </h3>
                  <ol className="space-y-4 text-muted-foreground">
                    <li className="flex items-start">
                      <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-primary font-medium mr-3 flex-shrink-0">
                        1
                      </div>
                      <div>
                        <span className="font-medium">
                          Submit Initial Proposal:
                        </span>{" "}
                        Complete our online form with basic information about
                        your proposed event
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-primary font-medium mr-3 flex-shrink-0">
                        2
                      </div>
                      <div>
                        <span className="font-medium">Review Process:</span> Our
                        events committee will review your proposal and provide
                        feedback
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-primary font-medium mr-3 flex-shrink-0">
                        3
                      </div>
                      <div>
                        <span className="font-medium">Detailed Planning:</span>{" "}
                        If approved, work with our events team to develop a
                        detailed plan and budget
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-primary font-medium mr-3 flex-shrink-0">
                        4
                      </div>
                      <div>
                        <span className="font-medium">Implementation:</span>{" "}
                        Execute the event with support from HBS
                      </div>
                    </li>
                  </ol>
                </div>
              </div>
            </div>
            <div>
              <div className="bg-background p-8 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-6">
                  Event Proposal Form
                </h3>
                <form>
                  <div className="space-y-4">
                    <div>
                      <Label className="block text-sm font-medium text-muted-foreground mb-1">
                        Event Title
                      </Label>
                      <Input
                        type="text"
                        className="w-full"
                        placeholder="Enter event title"
                      />
                    </div>
                    <div>
                      <Label className="block text-sm font-medium text-muted-foreground mb-1">
                        Event Type
                      </Label>
                      <Select>
                        <SelectTrigger className="w-full">
                          <SelectValue placeholder="Select event type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectGroup>
                            <SelectLabel>Select event type</SelectLabel>
                            <SelectItem value="conference">
                              Conference
                            </SelectItem>
                            <SelectItem value="workshop">Workshop</SelectItem>
                            <SelectItem value="seminar">Seminar</SelectItem>
                            <SelectItem value="webinar">Webinar</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectGroup>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label className="block text-sm font-medium text-muted-foreground mb-1">
                          Proposed Date
                        </Label>
                        <Input type="date" className="w-full" />
                      </div>
                      <div>
                        <Label className="block text-sm font-medium text-muted-foreground mb-1">
                          Expected Duration
                        </Label>
                        <Input
                          type="text"
                          className="w-full"
                          placeholder="e.g., 2 days, 4 hours"
                        />
                      </div>
                    </div>
                    <div>
                      <Label className="block text-sm font-medium text-muted-foreground mb-1">
                        Brief Description
                      </Label>
                      <Textarea
                        className="w-full"
                        rows="4"
                        placeholder="Describe your event and its objectives"
                      ></Textarea>
                    </div>
                    <div>
                      <Label className="block text-sm font-medium text-muted-foreground mb-1">
                        Target Audience
                      </Label>
                      <Input
                        type="text"
                        className="w-full"
                        placeholder="e.g., Medical students, Researchers, Clinicians"
                      />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label className="block text-sm font-medium text-muted-foreground mb-1">
                          Your Name
                        </Label>
                        <Input
                          type="text"
                          className="w-full"
                          placeholder="Enter your name"
                        />
                      </div>
                      <div>
                        <Label className="block text-sm font-medium text-muted-foreground mb-1">
                          Email Address
                        </Label>
                        <Input
                          type="email"
                          className="w-full"
                          placeholder="Enter your email address"
                        />
                      </div>
                    </div>
                    <div>
                      <Button type="submit" className="w-full">
                        Submit Proposal
                      </Button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Venue Information */}
      <section className="py-16">
        <div className="container max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Our Venues</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {venues.map((venue, index) => (
              <div
                key={index}
                className="border rounded-lg shadow-md overflow-hidden"
              >
                <div className="h-48 bg-muted">
                  <img
                    src={`https://placehold.co/500x300`}
                    alt={venue.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3">{venue.name}</h3>
                  <p className="text-muted-foreground mb-4">
                    {venue.description}
                  </p>
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center gap-3 text-muted-foreground">
                      <MapPin size={18} className="text-primary" />
                      <span>{venue.location}</span>
                    </div>
                    <div className="flex items-center gap-3 text-muted-foreground">
                      <Users size={18} className="text-primary" />
                      <span>Capacity: {venue.capacity}</span>
                    </div>
                  </div>
                  <a
                    href="#"
                    className="text-primary font-medium flex items-center gap-1 hover:underline underline-offset-4"
                  >
                    View details <ChevronRight size={16} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-16 bg-muted/50">
        <div className="container max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Contact the Events Team</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-3xl mx-auto">
            For inquiries regarding upcoming events, venue bookings, or event
            proposals
          </p>
          <div className="inline-flex flex-col sm:flex-row gap-4 bg-background p-6 rounded-lg shadow-md">
            <div className="px-6 py-3 border-r border-muted">
              <p className="font-semibold">Email</p>
              <p className="text-primary">events@hbs.edu.pk</p>
            </div>
            <div className="px-6 py-3 border-r border-muted">
              <p className="font-semibold">Phone</p>
              <p className="text-primary">+92-51-1234567</p>
            </div>
            <div className="px-6 py-3">
              <p className="font-semibold">Address</p>
              <p className="text-primary">
                HBS Conference Center, Islamabad, Pakistan
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

// Data
const upcomingEvents = [
  {
    type: "Conference",
    title: "5th International Conference on Medical Education",
    date: "October 15-17, 2023",
    location: "HBS Conference Center, Islamabad",
    duration: "3 days",
    description:
      "A global platform for medical educators to share innovations and best practices in medical education.",
    registrationStatus: "Open",
  },
  {
    type: "Workshop",
    title: "Research Methodology Workshop",
    date: "August 25, 2023",
    location: "HBS Research Center",
    duration: "Full day (9 AM - 5 PM)",
    description:
      "Hands-on workshop covering research design, data collection methods, and statistical analysis.",
    registrationStatus: "Closing Soon",
  },
  {
    type: "Seminar",
    title: "Advances in Pharmaceutical Sciences",
    date: "September 10, 2023",
    location: "Pharmacy Department Auditorium",
    duration: "Half day (1 PM - 5 PM)",
    description:
      "Expert talks on recent developments in drug delivery systems and pharmaceutical research.",
    registrationStatus: "Open",
  },
  {
    type: "Webinar",
    title: "Digital Health Innovations",
    date: "July 30, 2023",
    location: "Online (Zoom)",
    duration: "2 hours (3 PM - 5 PM)",
    description:
      "Exploring the intersection of technology and healthcare delivery in the digital age.",
    registrationStatus: "Closed",
  },
  {
    type: "Workshop",
    title: "Clinical Skills Enhancement",
    date: "September 5-6, 2023",
    location: "HBS Simulation Center",
    duration: "2 days",
    description:
      "Practical training in essential clinical skills for healthcare professionals.",
    registrationStatus: "Open",
  },
  {
    type: "Symposium",
    title: "Mental Health in Healthcare Professionals",
    date: "August 18, 2023",
    location: "HBS Main Auditorium",
    duration: "Full day (9 AM - 4 PM)",
    description:
      "Addressing burnout, stress management, and mental wellbeing among healthcare workers.",
    registrationStatus: "Open",
  },
];

const pastEvents = [
  {
    name: "4th International Conference on Medical Education",
    type: "Conference",
    date: "October 12-14, 2022",
    location: "HBS Conference Center",
    resources: {
      photos: true,
      presentations: true,
      proceedings: true,
      videos: true,
    },
  },
  {
    name: "Evidence-Based Medicine Workshop",
    type: "Workshop",
    date: "May 20, 2022",
    location: "HBS Research Center",
    resources: {
      photos: true,
      presentations: true,
      proceedings: false,
      videos: false,
    },
  },
  {
    name: "Healthcare Leadership Symposium",
    type: "Symposium",
    date: "March 15, 2022",
    location: "HBS Main Auditorium",
    resources: {
      photos: true,
      presentations: true,
      proceedings: true,
      videos: false,
    },
  },
  {
    name: "Biostatistics for Medical Research",
    type: "Seminar",
    date: "February 8, 2022",
    location: "Research Department",
    resources: {
      photos: false,
      presentations: true,
      proceedings: false,
      videos: false,
    },
  },
  {
    name: "Innovations in Medical Imaging",
    type: "Workshop",
    date: "November 25, 2021",
    location: "Radiology Department",
    resources: {
      photos: true,
      presentations: true,
      proceedings: false,
      videos: true,
    },
  },
];

const venues = [
  {
    name: "HBS Conference Center",
    description:
      "Our flagship venue featuring state-of-the-art audiovisual equipment, flexible seating arrangements, and full catering services.",
    location: "Main Campus, Islamabad",
    capacity: "500 people",
  },
  {
    name: "Research Center Auditorium",
    description:
      "Modern auditorium ideal for seminars, lectures, and presentations with excellent acoustics and comfortable seating.",
    location: "Research Wing, HBS",
    capacity: "200 people",
  },
  {
    name: "Executive Boardroom",
    description:
      "Elegant meeting space for smaller gatherings, equipped with videoconferencing facilities and interactive displays.",
    location: "Administrative Block, 3rd Floor",
    capacity: "30 people",
  },
  {
    name: "Simulation Center",
    description:
      "Specialized venue for hands-on workshops and training sessions with medical simulation equipment.",
    location: "Clinical Skills Building",
    capacity: "50 people",
  },
  {
    name: "Garden Pavilion",
    description:
      "Open-air venue surrounded by landscaped gardens, perfect for receptions and networking events in pleasant weather.",
    location: "Campus Gardens",
    capacity: "150 people",
  },
  {
    name: "Digital Learning Lab",
    description:
      "High-tech computer lab for technology-focused workshops and training sessions.",
    location: "IT Building, Ground Floor",
    capacity: "40 people",
  },
];
