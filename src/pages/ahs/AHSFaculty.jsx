import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function AHSFaculty() {
  const facultyMembers = [
    {
      id: 1,
      name: "Dr. Taimoor Hassan",
      position: "Principal",
      qualifications: "DPT, M.Phil, PhD Rehabilitation Sciences",
      experience: "6 years of experience",
      image: "https://placehold.co/300",
    },
    {
      id: 2,
      name: "Dr. Asif Iqbal Khan",
      position: "Assistant Professor",
      qualifications: "PhD Microbiology",
      experience: "2 years University experience",
      image: "https://placehold.co/300",
    },
    {
      id: 3,
      name: "Dr. Shehzeena Ashraf",
      position: "Lecturer DPT and AHS",
      qualifications: "MS Neurophysical therapy",
      experience:
        "1 year experience in teaching and 3 years' experience in clinical",
      image: "https://placehold.co/300",
    },
    {
      id: 4,
      name: "Imtiaz Hussain",
      position: "Lecturer Pakistan Studies",
      qualifications:
        "Master in Pakistan Studies, Master in Political Science, Dars-e-nizami",
      experience: "",
      image: "https://placehold.co/300",
    },
    {
      id: 5,
      name: "Dr. Mariam Jamshaid",
      position: "Lecturer and Demonstrator DPT and AHS",
      qualifications: "Doctor of physical therapy",
      experience: "3 years clinical experience/1 year teaching experience",
      image: "https://placehold.co/300",
    },
    {
      id: 6,
      name: "Ms. Maria Qibtia",
      position: "Visiting Lecturer English",
      qualifications: "MS English literature, MA – TEFL, AIOU, M. Ed",
      experience: "2.5 years of experience",
      image: "https://placehold.co/300",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="bg-muted/50 py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Faculty Members
          </h1>
          <p className="text-xl max-w-3xl">
            Meet our distinguished faculty at HBS College of Rehabilitation &
            Allied Health Sciences, dedicated to excellence in education and
            research.
          </p>
        </div>
      </div>

      {/* Faculty Directory */}
      <div className="container mx-auto max-w-6xl py-16 px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {facultyMembers.map((faculty) => (
            <FacultyCard key={faculty.id} faculty={faculty} />
          ))}
        </div>
      </div>

      {/* Join Our Team CTA */}
      <div className="bg-muted/50 py-16 px-4">
        <div className="container mx-auto max-w-6xl text-center">
          <h2 className="text-3xl font-bold mb-6">
            Join Our Distinguished Faculty
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-3xl mx-auto">
            We're always looking for talented educators and researchers to join
            our team. If you're passionate about shaping the future of
            healthcare professionals, we'd love to hear from you.
          </p>
          <Button>View Career Opportunities</Button>
        </div>
      </div>
    </div>
  );
}

function FacultyCard({ faculty }) {
  return (
    <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg">
      <div className="relative">
        <div className="bg-gradient-to-b from-transparent to-primary absolute inset-0 opacity-0 hover:opacity-70 transition-opacity duration-300 flex items-end justify-center p-4">
          <Button variant="outline">View Profile</Button>
        </div>
        <img
          src={faculty.image || "/placeholder.svg"}
          alt={`${faculty.name} - ${faculty.position}`}
          className="w-full h-64 object-cover object-center"
        />
      </div>
      <CardContent className="p-6">
        <h3 className="text-xl font-bold text-primary">{faculty.name}</h3>
        <h4 className="text-lg font-semibold text-muted-foreground mb-2">
          {faculty.position}
        </h4>
        <div className="mb-3">
          <p className="text-sm font-medium mb-1">Qualifications</p>
          <p className="text-muted-foreground">{faculty.qualifications}</p>
        </div>
        {faculty.experience && (
          <div>
            <p className="text-sm font-medium mb-1">Experience</p>
            <p className="text-muted-foreground">{faculty.experience}</p>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
