import { Button } from "@/components/ui/button";
import {
  FaHospital,
  FaFlask,
  FaBook,
  FaUsers,
  FaCoffee,
  FaBus,
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
} from "react-icons/fa";
import { MdMeetingRoom } from "react-icons/md";

export default function AHSLife() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative bg-muted/50">
        {/* <div className="absolute inset-0 bg-black opacity-50"></div> */}
        <div className="container max-w-7xl mx-auto px-4 py-24 relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center">
            LIFE @ HBS COLLEGE OF A&HS
          </h1>
          <p className="text-xl max-w-3xl mx-auto text-center ">
            Experience world-class education in a modern, purpose-built campus
            with state-of-the-art facilities
          </p>
        </div>
      </div>

      {/* Campus Introduction */}
      <section className="py-16">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/2">
              <img
                src="https://placehold.co/600x400"
                alt="HBS College Campus"
                className="rounded-lg shadow-lg w-full h-auto"
              />
            </div>
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold text-primary mb-4">
                Our Campus
              </h2>
              <p className="text-muted-foreground mb-4">
                HBS College of Rehabilitation & Allied Health Sciences is
                centrally located at 30-C, Street No. 6, Lane No. 10, Hostel
                City, Park Road Islamabad. It has a spacious purpose-built 07
                floor campus in an earthquake proof structure with adequate
                arrangements for air-conditioning, heating and backup power.
              </p>
              <div className="flex items-center gap-2 text-primary">
                <FaMapMarkerAlt />
                <span>Centrally located in Islamabad</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Teaching Hospital */}
      <section className="py-16 bg-muted/50">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row-reverse items-center gap-8">
            <div className="md:w-1/2">
              <img
                src="https://placehold.co/600x400"
                alt="HBS General Hospital"
                className="rounded-lg shadow-lg w-full h-auto"
              />
            </div>
            <div className="md:w-1/2">
              <div className="flex items-center gap-3 mb-4">
                <FaHospital className="text-4xl text-primary" />
                <h2 className="text-3xl font-bold text-primary">
                  Teaching Hospital
                </h2>
              </div>
              <p className="text-muted-foreground mb-4">
                Dilemma of Rehabilitation & Allied Health Sciences education in
                Pakistan is that most of the colleges do not have their own
                hospitals and students suffer for their trainings. HBS College
                of Rehabilitation & Allied Health Sciences has its own 500 bed
                tertiary care general hospital (HBS General Hospital) located
                within walking distance of the campus.
              </p>
              <p className="text-muted-foreground mb-4">
                HBS General Hospital serves as the teaching hospital for the
                college. It provides a complete range of major specialities as
                well as laboratory and imaging services under one roof. HBS
                General Hospital has some of the most renowned specialists and
                surgeons on its strength and has acquired a reputation of a
                high-quality hospital.
              </p>
              <div className="bg-primary/5 border-l-4 border-primary p-4 rounded">
                <p className="font-medium text-primary">
                  500-bed tertiary care general hospital within walking distance
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Laboratories */}
      <section className="py-16">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <div className="flex justify-center mb-4">
              <FaFlask className="text-5xl text-primary" />
            </div>
            <h2 className="text-3xl font-bold text-primary mb-4">
              State-of-the-Art Laboratories
            </h2>
            <p className="text-muted-foreground max-w-3xl mx-auto">
              Our laboratories are fully equipped to carry out practical work
              and undertake research. Furthermore, these labs are adaptable,
              reconfigurable and modular, making them ideally suited for
              research in the wide range of fields to understand fundamentals of
              Pharmaceutical knowledge.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                name: "Physiology",
                image: "https://placehold.co/300x200",
              },
              {
                name: "Anatomy Lab and Museum",
                image: "https://placehold.co/300x200",
              },
              {
                name: "Kinesiology & Biomechanics Lab",
                image: "https://placehold.co/300x200",
              },
              {
                name: "Biochemistry Lab",
                image: "https://placehold.co/300x200",
              },
              {
                name: "Medical Physics & Electrotherapy Lab",
                image: "https://placehold.co/300x200",
              },
              {
                name: "Computer Lab",
                image: "https://placehold.co/300x200",
              },
            ].map((lab, index) => (
              <div
                key={index}
                className="bg-background rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105"
              >
                <img
                  src={lab.image || "/placeholder.svg"}
                  alt={lab.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-xl font-semibold text-primary">
                    {lab.name}
                  </h3>
                  <p className="text-muted-foreground mt-2">
                    Fully equipped for practical work and research in{" "}
                    {lab.name.toLowerCase()}.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Classrooms and Auditorium */}
      <section className="py-16 bg-muted/50">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/2">
              <img
                src="https://placehold.co/600x400"
                alt="HBS College Classrooms"
                className="rounded-lg shadow-lg w-full h-auto"
              />
            </div>
            <div className="md:w-1/2">
              <div className="flex items-center gap-3 mb-4">
                <MdMeetingRoom className="text-4xl text-primary" />
                <h2 className="text-3xl font-bold text-primary">
                  Learning Spaces
                </h2>
              </div>
              <p className="text-muted-foreground mb-4">
                HBS College of Rehabilitation & Allied Health Sciences has
                ventilated and peaceful lecture halls with audio visual aids and
                internet. All the rooms have flexible seating arrangements to
                make it more comfortable and inviting.
              </p>
              <p className="text-muted-foreground mb-4">
                Seminar/Conference Room and Auditorium are also available to
                host a workshop, seminar or conference.
              </p>
              <div className="flex flex-wrap gap-3 mt-6">
                <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">
                  Audio Visual Aids
                </span>
                <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">
                  Internet Access
                </span>
                <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">
                  Flexible Seating
                </span>
                <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">
                  Conference Facilities
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Library */}
      <section className="py-16">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row-reverse items-center gap-8">
            <div className="md:w-1/2">
              <img
                src="https://placehold.co/600x400"
                alt="HBS College Library"
                className="rounded-lg shadow-lg w-full h-auto"
              />
            </div>
            <div className="md:w-1/2">
              <div className="flex items-center gap-3 mb-4">
                <FaBook className="text-4xl text-primary" />
                <h2 className="text-3xl font-bold text-primary">Library</h2>
              </div>
              <p className="text-muted-foreground mb-4">
                HBS College of Rehabilitation & Allied Health Sciences has an
                air-conditioned and heated library stocked with 1500+ latest
                course and reference books. It has a vast seating capacity with
                computers and internet access.
              </p>
              <p className="text-muted-foreground mb-4">
                Through these computers, HEC Digital Library as well as HBS
                E-library can be accessed, which contains a digital archive of
                Life Sciences Journals and more than two million articles and
                other informative resources.
              </p>
              <div className="bg-primary/5 border-l-4 border-primary p-4 rounded">
                <p className="font-medium text-primary">
                  Access to HEC Digital Library and HBS E-library with over 2
                  million articles
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Other Facilities */}
      <section className="py-16 bg-muted/50">
        <div className="container max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-primary mb-12 text-center">
            Additional Facilities
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Common Rooms */}
            <div className="bg-primary/5 p-6 rounded-lg shadow-md">
              <div className="flex justify-center mb-4">
                <FaUsers className="text-4xl text-primary" />
              </div>
              <h3 className="text-xl font-bold text-primary mb-3 text-center">
                Common Rooms
              </h3>
              <p className="text-muted-foreground">
                At HBS College of Rehabilitation & Allied Health Sciences has
                well-furnished huge separate common rooms for boys and girls.
                Indoor games like table tennis, carrom boards, ludo and monopoly
                are available in common rooms.
              </p>
            </div>

            {/* Cafeteria */}
            <div className="bg-primary/5 p-6 rounded-lg shadow-md">
              <div className="flex justify-center mb-4">
                <FaCoffee className="text-4xl text-primary" />
              </div>
              <h3 className="text-xl font-bold text-primary mb-3 text-center">
                Cafeteria
              </h3>
              <p className="text-muted-foreground">
                The College has a cafeteria where snacks, drinks and meals are
                available at reasonable prices all day long.
              </p>
            </div>

            {/* Transport */}
            <div className="bg-primary/5 p-6 rounded-lg shadow-md">
              <div className="flex justify-center mb-4">
                <FaBus className="text-4xl text-primary" />
              </div>
              <h3 className="text-xl font-bold text-primary mb-3 text-center">
                Transport Facilities
              </h3>
              <p className="text-muted-foreground">
                MOU is signed with transport company which provides a
                pick-and-drop services to the students and faculty members.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">
            Location and Contact
          </h2>

          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-1/2">
              <div className="bg-primary p-6 rounded-lg h-full">
                <h3 className="text-xl font-bold mb-4">Get in Touch</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <FaMapMarkerAlt className="text-xl mt-1" />
                    <p>
                      Campus address: 30 C, Street No. 6, Lane No. 10, Hostel
                      City, Park Road Islamabad.
                    </p>
                  </div>
                  <div className="flex items-center gap-3">
                    <FaPhone className="text-xl" />
                    <p>051-2321358</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <FaEnvelope className="text-xl" />
                    <p>info.rehab@hbs.edu.pk</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="md:w-1/2">
              <div className="bg-muted-foreground/30 rounded-lg overflow-hidden h-64">
                {/* Placeholder for map - in a real implementation, this would be an actual map */}
                <div className="w-full h-full flex items-center justify-center bg-muted-foreground/30 text-muted-foreground">
                  Interactive Map Would Be Displayed Here
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary/5">
        <div className="container max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-primary mb-6">
            Experience Life at HBS College of A&HS
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
            Join us to experience world-class education with state-of-the-art
            facilities in a conducive learning environment.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button variant="default">Apply Now</Button>
            <Button variant="outline">Schedule a Visit</Button>
          </div>
        </div>
      </section>
    </div>
  );
}
