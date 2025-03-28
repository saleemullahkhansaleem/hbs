import { useState } from "react";
import {
  Search,
  SmileIcon as Tooth,
  Award,
  GraduationCap,
  BookOpen,
  Star,
} from "lucide-react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function FacultyBDS() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterRole, setFilterRole] = useState("all");
  const [filterSpecialty, setFilterSpecialty] = useState("all");

  const facultyMembers = [
    {
      name: "Dr. Shazia Rafique Nawabi",
      role: "Principal",
      image: "https://placehold.co/150x150",
      qualifications: [
        "BDS",
        "FCPS (Prosthodontics)",
        "MHPE (UOL-Gold Medal)",
        "Doctorate Medical Education (Italy – Distinction)",
        "PhD Med. Edu (Italy – Scholar)",
      ],
      specialty: "Prosthodontics",
      featured: true,
    },
    {
      name: "Dr. Naveed Bhatti",
      role: "Vice Principal/Professor",
      image: "https://placehold.co/150x150",
      qualifications: ["MS"],
      specialty: "Orthodontics",
    },
    {
      name: "Dr. Arshad Mahmood",
      role: "Dean/Professor",
      qualifications: ["FCPS"],
      specialty: "OMF Surgery",
    },
    {
      name: "Dr. Umair Dastgir Bhatti",
      role: "Professor / Dean Basic Sciences / HOD",
      qualifications: ["BDS", "MSc (UK)"],
      specialty: "Community Dentistry",
    },
    {
      name: "Dr. Farzana Kalsoom",
      role: "Professor",
      qualifications: ["M-Phil"],
      specialty: "Oral Pathology",
    },
    {
      name: "Dr. Muhammad Nadeem",
      role: "Associate Professor /HOD",
      qualifications: ["MSC"],
      specialty: "Periodontology",
    },
    {
      name: "Dr. Saifullah",
      role: "Assistant Professor",
      qualifications: ["M-Phil"],
      specialty: "Biochemistry",
    },
    {
      name: "Dr. Jawaria Bibi",
      role: "Senior Registrar",
      qualifications: [],
      specialty: "Oral & Maxillofacial Surgery",
    },
    {
      name: "Dr. Saira Jawed",
      role: "Associate Professor",
      qualifications: ["M-Phil"],
      specialty: "General",
    },
    {
      name: "Dr. Faiza Amjad",
      role: "Associate Professor",
      qualifications: ["MCPS – PAK"],
      specialty: "General",
    },
    {
      name: "Dr. Arbab Zia ur Rehman",
      role: "Associate Professor",
      qualifications: ["FCPS"],
      specialty: "Oral Biology",
    },
    {
      name: "Dr. Ruhina Ali",
      role: "Assistant Professor",
      qualifications: [],
      specialty: "Community Dentistry",
    },
    {
      name: "Dr. Naveen Farooq",
      role: "Assistant Professor",
      qualifications: ["MPH"],
      specialty: "Community Dentistry",
    },
    {
      name: "Dr. Ayousha Iqbal",
      role: "Assistant Professor",
      qualifications: ["M-Phil"],
      specialty: "Dental Material",
    },
    {
      name: "Dr. Fauzia Aslam",
      role: "Associate Professor",
      qualifications: ["FCPS"],
      specialty: "OMF Surgery",
    },
    {
      name: "Dr. Sara Shami",
      role: "Assistant Professor",
      qualifications: ["FCPS"],
      specialty: "Operative Dentistry",
    },
    {
      name: "Dr. Syed Hassan Jan",
      role: "Assistant Professor",
      qualifications: ["M-Phil"],
      specialty: "Oral",
    },
    {
      name: "Dr. Arooj Khurshid",
      role: "Assistant Professor",
      qualifications: ["M-Phil"],
      specialty: "Pathology",
    },
    {
      name: "Dr. Maria Komil Ghumman",
      role: "Assistant Professor",
      qualifications: ["FCPS"],
      specialty: "Prosthodontics",
    },
    {
      name: "Dr. Manzoor Ahmad",
      role: "Assistant Professor",
      qualifications: [],
      specialty: "General Surgery",
    },
    {
      name: "Dr. Syed M. Abul Hasan",
      role: "Assistant Professor",
      qualifications: ["M-Phil"],
      specialty: "Oral Medicine",
    },
    {
      name: "Dr. Sana Tariq",
      role: "Assistant Professor",
      qualifications: ["FCPS"],
      specialty: "Orthodontics",
    },
    {
      name: "Dr. Shahida Maqbool",
      role: "Assistant Professor",
      qualifications: ["DRCS"],
      specialty: "Oral Medicine",
    },
    {
      name: "Dr. Muhammad Junaid Hashmi",
      role: "Assistant Professor",
      qualifications: ["M-Phil"],
      specialty: "Community Dentistry",
    },
    {
      name: "Dr. Mehwish Hameed",
      role: "Assistant Professor",
      qualifications: ["M-Phil"],
      specialty: "Pharmacology",
    },
    {
      name: "Dr. Sarah Ali",
      role: "Assistant Director/ Assistant Professor",
      qualifications: ["MPH", "MHPE"],
      specialty: "DME",
    },
    {
      name: "Dr. Sumera Ijaz",
      role: "Assistant professor",
      qualifications: ["MCPS"],
      specialty: "Prosthodontics",
    },
    {
      name: "Dr. Abdul Hameed",
      role: "Assistant Professor",
      qualifications: ["MCPS"],
      specialty: "Periodontology",
    },
    {
      name: "Dr. Umar Farooq",
      role: "Assistant professor",
      qualifications: ["MCPS"],
      specialty: "Periodontology",
    },
    {
      name: "Dr. Maryam Zulfiqar",
      role: "Assistant professor",
      qualifications: ["M-Phil"],
      specialty: "Pathology",
    },
    {
      name: "Dr. Amir Shahzad",
      role: "Associate professor",
      qualifications: ["M-Phil"],
      specialty: "Dental Material",
    },
    {
      name: "Dr. Ali Ayub",
      role: "Professor",
      qualifications: ["FCPS"],
      specialty: "Orthodontics",
    },
    {
      name: "Dr. Amara Amjad",
      role: "Assistant professor",
      qualifications: ["M-Phil"],
      specialty: "Pharmacology",
    },
    {
      name: "Dr. Beenish Haider",
      role: "Assistant professor",
      qualifications: [],
      specialty: "Dental Material",
    },
    {
      name: "Dr. Syeda Kinza Asghar",
      role: "Assistant professor",
      qualifications: ["MCPS"],
      specialty: "Periodontics",
    },
    {
      name: "Dr. Hafiz Muhammad Moin Anwer",
      role: "Senior Registrar",
      qualifications: [],
      specialty: "Orofacial Pain",
    },
    {
      name: "Dr. Anam Mirza",
      role: "Senior Registrar",
      qualifications: [],
      specialty: "Operative Dentistry",
    },
    {
      name: "Dr. Saad Shahnawaz Ahmed",
      role: "Senior Registrar",
      qualifications: [],
      specialty: "Operative Dentistry",
    },
  ];

  // Get unique specialties for filter
  const specialties = [
    "all",
    ...new Set(facultyMembers.map((f) => f.specialty)),
  ];

  // Filter faculty based on search and filters
  const filteredFaculty = facultyMembers.filter((faculty) => {
    const matchesSearch =
      faculty.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      faculty.role.toLowerCase().includes(searchTerm.toLowerCase()) ||
      faculty.specialty.toLowerCase().includes(searchTerm.toLowerCase()) ||
      faculty.qualifications.some((q) =>
        q.toLowerCase().includes(searchTerm.toLowerCase())
      );

    const matchesRole =
      filterRole === "all" || faculty.role.includes(filterRole);
    const matchesSpecialty =
      filterSpecialty === "all" || faculty.specialty === filterSpecialty;

    return matchesSearch && matchesRole && matchesSpecialty;
  });

  // Group faculty by role for display
  const leadership = filteredFaculty.filter(
    (f) =>
      f.role.includes("Principal") ||
      f.role.includes("Dean") ||
      f.role.includes("Vice Principal")
  );

  const professors = filteredFaculty.filter(
    (f) =>
      f.role.includes("Professor") &&
      !f.role.includes("Assistant") &&
      !f.role.includes("Associate") &&
      !leadership.includes(f)
  );

  const associateProfessors = filteredFaculty.filter(
    (f) =>
      f.role.includes("Associate Professor") ||
      f.role.includes("Associate professor")
  );

  const assistantProfessors = filteredFaculty.filter(
    (f) =>
      f.role.includes("Assistant Professor") ||
      f.role.includes("Assistant professor")
  );

  const seniorRegistrars = filteredFaculty.filter((f) =>
    f.role.includes("Senior Registrar")
  );

  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            {/* <Tooth className="h-10 w-10 text-primary mr-3" /> */}
            <h1 className="text-4xl font-bold">Faculty BDS Section</h1>
          </div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Meet our distinguished dental faculty members who are dedicated to
            excellence in dental education and practice.
          </p>
        </div>

        {/* Search and Filters */}
        <div className="max-w-5xl mx-auto mb-12">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-grow">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-muted-foreground" />
              </div>
              <Input
                type="text"
                placeholder="Search faculty by name, role, or specialty..."
                className="pl-10"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>

            <div className="flex gap-2">
              <Select value={filterRole} onValueChange={setFilterRole}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Filter by role" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Roles</SelectItem>
                  <SelectItem value="Professor">Professors</SelectItem>
                  <SelectItem value="Associate">
                    Associate Professors
                  </SelectItem>
                  <SelectItem value="Assistant">
                    Assistant Professors
                  </SelectItem>
                  <SelectItem value="Senior Registrar">
                    Senior Registrars
                  </SelectItem>
                </SelectContent>
              </Select>

              <Select
                value={filterSpecialty}
                onValueChange={setFilterSpecialty}
              >
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Filter by specialty" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Specialties</SelectItem>
                  {specialties
                    .filter((s) => s !== "all")
                    .map((specialty, index) => (
                      <SelectItem key={index} value={specialty}>
                        {specialty}
                      </SelectItem>
                    ))}
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>

        {/* Faculty Sections */}
        <div className="space-y-16">
          {/* Leadership Section */}
          {leadership.length > 0 && (
            <FacultySection
              title="Leadership"
              icon={<Award className="h-6 w-6 text-primary" />}
              faculty={leadership}
            />
          )}

          {/* Professors Section */}
          {professors.length > 0 && (
            <FacultySection
              title="Professors"
              icon={<GraduationCap className="h-6 w-6 text-primary" />}
              faculty={professors}
            />
          )}

          {/* Associate Professors Section */}
          {associateProfessors.length > 0 && (
            <FacultySection
              title="Associate Professors"
              icon={<BookOpen className="h-6 w-6 text-primary" />}
              faculty={associateProfessors}
            />
          )}

          {/* Assistant Professors Section */}
          {assistantProfessors.length > 0 && (
            <FacultySection
              title="Assistant Professors"
              icon={<Star className="h-6 w-6 text-primary" />}
              faculty={assistantProfessors}
            />
          )}

          {/* Senior Registrars Section */}
          {seniorRegistrars.length > 0 && (
            <FacultySection
              title="Senior Registrars"
              icon={<Tooth className="h-6 w-6 text-primary" />}
              faculty={seniorRegistrars}
            />
          )}

          {/* No Results */}
          {filteredFaculty.length === 0 && (
            <div className="text-center py-12">
              <p className="text-foreground">
                No faculty members match your search criteria.
              </p>
              <Button
                variant="outline"
                className="mt-4"
                onClick={() => {
                  setSearchTerm("");
                  setFilterRole("all");
                  setFilterSpecialty("all");
                }}
              >
                Clear Filters
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function FacultySection({ title, icon, faculty }) {
  return (
    <section>
      <div className="flex items-center mb-6">
        {icon}
        <h2 className="text-2xl font-bold ml-2">{title}</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-6">
        {faculty.map((member, index) => (
          <FacultyCard key={index} faculty={member} />
        ))}
      </div>
    </section>
  );
}

function FacultyCard({ faculty }) {
  return (
    <Card
      className={`overflow-hidden hover:shadow-lg transition-shadow ${
        faculty.featured ? "border-primary bg-primary/20" : ""
      }`}
    >
      <div className="p-6">
        <div className="flex items-start justify-between mb-3">
          <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center">
            {faculty.image ? (
              <img
                src={faculty.image}
                alt={faculty.name}
                className="w-full aspect-square object-cover rounded-full border border-primary p-1"
              />
            ) : (
              <Tooth className="h-8 w-8 text-primary" />
            )}
          </div>
          <Badge
            variant={faculty.featured ? "default" : "outline"}
            className={faculty.featured ? "bg-primary" : ""}
          >
            {faculty.specialty}
          </Badge>
        </div>

        <h3 className="font-bold text-lg mb-1">{faculty.name}</h3>
        <p className="text-muted-foreground text-sm mb-3">{faculty.role}</p>

        {faculty.qualifications.length > 0 && (
          <div className="mt-3 flex flex-wrap gap-1">
            {faculty.qualifications.map((qualification, index) => (
              <Badge key={index} variant="secondary" className="">
                {qualification}
              </Badge>
            ))}
          </div>
        )}
      </div>
    </Card>
  );
}
