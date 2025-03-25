import { useState } from "react";
import {
  Users,
  Search,
  GraduationCap,
  BookOpen,
  Microscope,
  Pill,
  HeartPulse,
  Stethoscope,
  Brain,
  Eye,
  Bone,
} from "lucide-react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function FacultyMBBS() {
  const [searchTerm, setSearchTerm] = useState("");

  const departments = [
    {
      name: "DEPARTMENT OF ANATOMY",
      icon: Bone,
      faculty: [
        { name: "Dr. Shazia Muazam", designation: "Professor – HOD" },
        { name: "Dr. Samina Anjum Jaffri", designation: "Professor" },
        { name: "Dr. Naseer-ud-din", designation: "Assistant Professor" },
        { name: "Dr. M. Azam Qureshi", designation: "Professor" },
      ],
    },
    {
      name: "DEPARTMENT OF PHYSIOLOGY",
      icon: HeartPulse,
      faculty: [
        { name: "Dr. Khadija Fatima", designation: "Professor" },
        { name: "Dr. Umema Zafar", designation: "Associate Professor" },
        { name: "Dr. Ayesha Shafaqat", designation: "Associate Professor" },
        { name: "Dr. Aysha Mushtaq", designation: "Assistant Professor" },
        { name: "Dr. Naveed Alam", designation: "Assistant Professor" },
      ],
    },
    {
      name: "DEPARTMENT OF BIO-CHEMISTRY",
      icon: Microscope,
      faculty: [
        {
          name: "Dr. Syed Hasnain M. Naqvi",
          designation: "Professor/Associate Dean (Basic Science)",
        },
        { name: "Dr. Seemeen Ghafoor", designation: "Professor" },
        {
          name: "Dr. Syed Irfan Raza",
          designation: "Professor (PHD Biochemistry)",
        },
        { name: "Dr. Roomana Anwar Mirza", designation: "Associate Professor" },
      ],
    },
    {
      name: "DEPARTMENT OF PHARMACOLOGY",
      icon: Pill,
      faculty: [
        { name: "Dr. Abdul Qudoos", designation: "Professor" },
        { name: "Dr. Amanat Ali", designation: "Professor" },
        { name: "Dr. Mehwish Tayyab", designation: "Assistant Professor" },
        { name: "Dr. Muhammad Tahir", designation: "Assistant Professor" },
      ],
    },
    {
      name: "DEPARTMENT OF PATHOLOGY",
      icon: Microscope,
      subDepartments: [
        {
          name: "Department of Histopathology",
          faculty: [
            { name: "Dr. Ashok Kumar", designation: "Professor" },
            { name: "Dr. Ayesha Ali", designation: "Associate Professor" },
          ],
        },
        {
          name: "Department of Microbiology",
          faculty: [{ name: "Dr. Sadia Ikram", designation: "Professor" }],
        },
        {
          name: "Department of Chemical Pathology",
          faculty: [
            { name: "Dr. Sohail Rasheed", designation: "Professor" },
            { name: "Dr. Humera", designation: "Assistant Professor" },
            {
              name: "Dr. Masood Iqbal Satti",
              designation: "Assistant Professor",
            },
          ],
        },
        {
          name: "Department of Hematology",
          faculty: [
            { name: "Brig. (R) Dr. M. Ashraf", designation: "Professor" },
            { name: "Dr. Aqsa Noreen", designation: "Assistant Professor" },
          ],
        },
      ],
    },
    {
      name: "DEPARTMENT OF FORENSIC MEDICINE",
      icon: BookOpen,
      faculty: [
        { name: "Dr. Naveed Ahmed Khan", designation: "Professor" },
        {
          name: "Dr Muhammad Shafay Jalbani",
          designation: "Assistant Professor",
        },
        { name: "Dr. Nazia Yasmin", designation: "Senior Lecturer" },
      ],
    },
    {
      name: "PRINICPAL & DEAN",
      icon: GraduationCap,
      faculty: [
        { name: "Prof. Muhammad Iqbal Memon", designation: "Principal" },
        { name: "Prof. Idrees Anwar", designation: "Dean" },
      ],
    },
    {
      name: "DEPARTMENT OF COMMUNITY MEDICINE",
      icon: Users,
      faculty: [
        { name: "Dr. Abida Sultana", designation: "Professor" },
        { name: "Dr. Maqsood Hayat", designation: "Associate Professor" },
        {
          name: "Lt. Col. (R) Dr. Tauqir Ullah Khan",
          designation: "Associate Professor",
        },
        { name: "Dr. Ahmad Ehsan Rabbani", designation: "Assistant Professor" },
      ],
    },
    {
      name: "DEPARTMENT OF MEDICINE & ALLIED",
      icon: Stethoscope,
      subDepartments: [
        {
          name: "Department of Internal Medicine",
          faculty: [
            {
              name: "Brig. (R) Dr. Waqar Ahmed",
              designation: "Professor",
              qualification: "FCPS",
            },
            { name: "Dr. Iram Shakir Kiani", designation: "Professor" },
            {
              name: "Dr. Farida Tahir",
              designation: "Professor",
              qualification: "FCPS",
            },
            {
              name: "Dr. Ambreen Zahoor",
              designation: "Professor",
              qualification: "FCPS",
            },
            {
              name: "Dr. Hafiz Ud Din",
              designation: "Associate Professor",
              qualification: "MD",
            },
            {
              name: "Dr. Mariam Tariq",
              designation: "Associate Professor",
              qualification: "FCPS",
            },
            { name: "Dr. Zunera Jahanzeb", designation: "Assistant Professor" },
            {
              name: "Dr. Sana Tahir Virk",
              designation: "Assistant Professor",
              qualification: "FCPS",
            },
            {
              name: "Dr. Hina Dilruba Khan",
              designation: "Assistant Professor",
            },
            { name: "Dr. Amjad Khan", designation: "Senior Registrar" },
            { name: "Dr. Muhammad Salman", designation: "Senior Registrar" },
            {
              name: "Dr. Syed Hur Hussain Hamdani",
              designation: "Senior Registrar",
            },
            { name: "Dr. Asad Ali", designation: "Registrar" },
            { name: "Dr. Saadat Hayat Khan Tipu", designation: "Registrar" },
          ],
        },
        {
          name: "Department of Rheumatology",
          faculty: [
            {
              name: "Dr. Tayyaba Khursheed Ahmed",
              designation: "Senior Registrar (Rheumatology)",
            },
          ],
        },
        {
          name: "Department of Cardiology",
          faculty: [
            { name: "Dr. Muhammad Naeem", designation: "Professor" },
            {
              name: "Dr. M. Hasnain Iqbal",
              designation: "Senior Registrar (Cardiology)",
              qualification: "FCPS",
            },
          ],
        },
        {
          name: "Department of Gastro-enterology",
          faculty: [
            {
              name: "Dr. Kazim Abbas Virk",
              designation: "Assistant Professor (Gastro-enterology)",
              qualification: "FCPS",
            },
            { name: "Dr. Ch. Tahir Ali", designation: "Senior Registrar" },
          ],
        },
      ],
    },
    {
      name: "DEPARTMENT OF SURGERY & ALLIED",
      icon: Stethoscope,
      subDepartments: [
        {
          name: "Department of Pediatric Surgery",
          faculty: [
            {
              name: "Dr. M. Zaheer Abbasi",
              designation: "Professor",
              qualification: "FRCS",
            },
          ],
        },
        {
          name: "Department of General Surgery",
          faculty: [
            { name: "Dr. Malik Tariq Nawaz", designation: "Professor" },
            { name: "Dr. Azam Yusuf", designation: "Professor" },
            { name: "Dr. Muhammad Idrees Anwar", designation: "Professor" },
            { name: "Brig. (R) Shabir Hussain", designation: "Professor" },
            {
              name: "Dr. Muhammad Shahbaz Bakht Kiyani",
              designation: "Professor",
            },
            {
              name: "Dr. Malik Irfan Ahmed",
              designation: "Assistant Professor",
              qualification: "FCPS",
            },
            {
              name: "Dr. Asma Bibi",
              designation: "Assistant Professor",
              qualification: "FCPS",
            },
            { name: "Dr. Syed Hasham Ahmed", designation: "Senior Registrar" },
            { name: "Dr. Talha", designation: "Senior Registrar" },
            {
              name: "Dr. Muhammad Adnan Khokhar",
              designation: "Senior Registrar",
            },
            { name: "Dr. Ahad Nayyer", designation: "Senior Registrar" },
          ],
        },
      ],
    },
    {
      name: "DEPARTMENT OF OPHTHALMOLOGY",
      icon: Eye,
      faculty: [
        {
          name: "Dr. Mustafa Abdul Hameed Ismail",
          designation: "Professor",
          qualification: "FCPS",
        },
        {
          name: "Dr. Kanwal Zareen Abbasi",
          designation: "Associate Professor",
          qualification: "FCPS",
        },
        {
          name: "Dr. Afia Matloob Rana",
          designation: "Associate Professor",
          qualification: "FCPS",
        },
        { name: "Dr. Irfan", designation: "Senior Registrar" },
      ],
    },
    {
      name: "DEPARTMENT OF PEDIATRICS",
      icon: Users,
      faculty: [
        {
          name: "Dr. Mahwish Rabia",
          designation: "Professor",
          qualification: "FCPS",
        },
        { name: "Dr. Amena Saba Awan", designation: "Associate Professor" },
        { name: "Dr. Tooba Riaz", designation: "Assistant Professor" },
        { name: "Dr. Samia", designation: "Assistant Professor" },
        { name: "Dr. Aliya Ayub", designation: "Senior Registrar" },
        {
          name: "Dr. Farkhanda Jabeen",
          designation: "Senior Registrar",
          qualification: "FCPS",
        },
      ],
    },
    {
      name: "DEPARTMENT OF RADIOLOGY",
      icon: Brain,
      faculty: [
        {
          name: "Maj. Gen. (R) M. Hamid Akram",
          designation: "Professor",
          qualification: "FCPS",
        },
        {
          name: "Dr. Fauzia Rashid",
          designation: "Assistant Professor",
          qualification: "FCPS",
        },
        { name: "Dr. Hira Khan", designation: "Senior Registrar" },
        {
          name: "Dr. Shahzad Farooq",
          designation: "Registrar",
          qualification: "MBBS",
        },
      ],
    },
  ];

  const filteredDepartments = departments
    .map((dept) => {
      if (dept.subDepartments) {
        return {
          ...dept,
          subDepartments: dept.subDepartments
            .map((subDept) => {
              return {
                ...subDept,
                faculty: subDept.faculty.filter(
                  (faculty) =>
                    faculty.name
                      .toLowerCase()
                      .includes(searchTerm.toLowerCase()) ||
                    faculty.designation
                      .toLowerCase()
                      .includes(searchTerm.toLowerCase())
                ),
              };
            })
            .filter((subDept) => subDept.faculty.length > 0),
        };
      } else {
        return {
          ...dept,
          faculty: dept.faculty.filter(
            (faculty) =>
              faculty.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
              faculty.designation
                .toLowerCase()
                .includes(searchTerm.toLowerCase())
          ),
        };
      }
    })
    .filter(
      (dept) =>
        (dept.subDepartments && dept.subDepartments.length > 0) ||
        (dept.faculty && dept.faculty.length > 0)
    );

  return (
    <div className="min-h-screen ">
      <div className="container mx-auto px-4 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">Faculty MBBS Section</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Meet our distinguished faculty members who are dedicated to
            excellence in medical education and research.
          </p>
        </div>

        {/* Search and Filter */}
        <div className="relative max-w-md mx-auto mb-12">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search className="h-5 w-5" />
          </div>
          <Input
            type="text"
            placeholder="Search faculty by name or designation..."
            className="pl-10"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        {/* Faculty Tabs */}
        <Tabs defaultValue="all" className="w-full">
          <div className="flex justify-center mb-8">
            <TabsList className="grid grid-cols-2 w-full max-w-md">
              <TabsTrigger value="all">All Departments</TabsTrigger>
              <TabsTrigger value="clinical">Clinical Sciences</TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="all" className="space-y-8">
            {filteredDepartments.map((department, index) => (
              <Card key={index} className="overflow-hidden">
                <div className="bg-primary/5 p-4 flex items-center gap-3">
                  {department.icon && (
                    <department.icon className="h-6 w-6 text-primary" />
                  )}
                  <h2 className="text-xl font-semibold text-primary">
                    {department.name}
                  </h2>
                </div>

                <div className="p-4">
                  {department.subDepartments ? (
                    <Accordion type="single" collapsible className="w-full">
                      {department.subDepartments.map((subDept, subIndex) => (
                        <AccordionItem
                          key={subIndex}
                          value={`item-${index}-${subIndex}`}
                        >
                          <AccordionTrigger className="text-lg font-medium">
                            {subDept.name}
                          </AccordionTrigger>
                          <AccordionContent>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4 pt-4">
                              {subDept.faculty.map((member, memberIndex) => (
                                <FacultyCard
                                  key={memberIndex}
                                  faculty={member}
                                />
                              ))}
                            </div>
                          </AccordionContent>
                        </AccordionItem>
                      ))}
                    </Accordion>
                  ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4">
                      {department.faculty.map((member, memberIndex) => (
                        <FacultyCard key={memberIndex} faculty={member} />
                      ))}
                    </div>
                  )}
                </div>
              </Card>
            ))}
          </TabsContent>

          <TabsContent value="clinical" className="space-y-8">
            {filteredDepartments
              .filter(
                (dept) =>
                  dept.name.includes("MEDICINE") ||
                  dept.name.includes("SURGERY") ||
                  dept.name.includes("PEDIATRICS") ||
                  dept.name.includes("OPHTHALMOLOGY") ||
                  dept.name.includes("RADIOLOGY")
              )
              .map((department, index) => (
                <Card key={index} className="overflow-hidden">
                  <div className="bg-primary/5 p-4 flex items-center gap-3">
                    {department.icon && (
                      <department.icon className="h-6 w-6 text-primary" />
                    )}
                    <h2 className="text-xl font-semibold text-primary">
                      {department.name}
                    </h2>
                  </div>

                  <div className="p-4">
                    {department.subDepartments ? (
                      <Accordion type="single" collapsible className="w-full">
                        {department.subDepartments.map((subDept, subIndex) => (
                          <AccordionItem
                            key={subIndex}
                            value={`item-${index}-${subIndex}`}
                          >
                            <AccordionTrigger className="text-lg font-medium">
                              {subDept.name}
                            </AccordionTrigger>
                            <AccordionContent>
                              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4 pt-4">
                                {subDept.faculty.map((member, memberIndex) => (
                                  <FacultyCard
                                    key={memberIndex}
                                    faculty={member}
                                  />
                                ))}
                              </div>
                            </AccordionContent>
                          </AccordionItem>
                        ))}
                      </Accordion>
                    ) : (
                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4">
                        {department.faculty.map((member, memberIndex) => (
                          <FacultyCard key={memberIndex} faculty={member} />
                        ))}
                      </div>
                    )}
                  </div>
                </Card>
              ))}
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}

function FacultyCard({ faculty }) {
  return (
    <div className="rounded-lg shadow-sm borde p-4 hover:shadow-md transition-shadow bg-primary/5">
      <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-3 mx-auto">
        <GraduationCap className="h-8 w-8 text-primary" />
      </div>
      <h3 className="font-semibold text-center mb-1">{faculty.name}</h3>
      <p className="text-sm text-muted-foreground text-center">
        {faculty.designation}
      </p>
      {faculty.qualification && (
        <p className="text-xs text-primary text-center mt-1">
          {faculty.qualification}
        </p>
      )}
    </div>
  );
}
