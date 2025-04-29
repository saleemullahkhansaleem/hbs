// import { useState, useEffect } from "react";
// import { motion } from "framer-motion";
// import { SectionLayout } from ".";
// import {
//   Accordion,
//   AccordionContent,
//   AccordionItem,
//   AccordionTrigger,
// } from "@/components/ui/accordion";
// import {
//   Card,
//   CardContent,
//   CardDescription,
//   CardHeader,
//   CardTitle,
//   CardFooter,
// } from "@/components/ui/card";
// import { Input } from "@/components/ui/input";
// import { Button } from "@/components/ui/button";
// import { Badge } from "@/components/ui/badge";
// import {
//   Search,
//   Filter,
//   GraduationCap,
//   Clock,
//   ChevronRight,
// } from "lucide-react";

// export default function CourseFinderSection() {
//   const [searchTerm, setSearchTerm] = useState("");
//   const [selectedCollege, setSelectedCollege] = useState("all");
//   const [filteredCourses, setFilteredCourses] = useState(courses);
//   const [expandedItem, setExpandedItem] = useState(null);

//   // Filter courses based on search term and selected college
//   useEffect(() => {
//     const filtered = courses.filter((course) => {
//       const matchesSearch =
//         course.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
//         course.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
//         course.programs.some((program) =>
//           program.toLowerCase().includes(searchTerm.toLowerCase())
//         );

//       const matchesCollege =
//         selectedCollege === "all" || course.college === selectedCollege;

//       return matchesSearch && matchesCollege;
//     });

//     setFilteredCourses(filtered);
//   }, [searchTerm, selectedCollege]);

//   const colleges = [
//     { id: "all", name: "All Colleges" },
//     { id: "medical", name: "Medical & Dental" },
//     { id: "rehab", name: "Rehabilitation Sciences" },
//     { id: "nursing", name: "Nursing" },
//     { id: "paramedics", name: "Paramedics" },
//     { id: "pharmacy", name: "Pharmacy" },
//   ];

//   return (
//     <SectionLayout
//       name="Course Finder"
//       title="Find Your Program"
//       description="Explore our comprehensive range of programs across medical and allied health sciences to find the perfect fit for your career aspirations."
//       href="/"
//     >
//       <motion.div
//         initial={{ opacity: 0, y: 20 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.8 }}
//         viewport={{ once: true }}
//         className="space-y-6"
//       >
//         {/* Search and Filter Section */}
//         <div className="bg-muted/30 p-6 rounded-lg border border-muted">
//           <div className="flex flex-col md:flex-row gap-4">
//             <div className="flex-1 relative">
//               <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
//               <Input
//                 type="text"
//                 placeholder="Search for programs or courses..."
//                 value={searchTerm}
//                 onChange={(e) => setSearchTerm(e.target.value)}
//                 className="pl-10"
//               />
//             </div>
//             <div className="flex flex-wrap gap-2">
//               {colleges.map((college) => (
//                 <Badge
//                   key={college.id}
//                   variant={
//                     selectedCollege === college.id ? "default" : "outline"
//                   }
//                   className="cursor-pointer"
//                   onClick={() => setSelectedCollege(college.id)}
//                 >
//                   {college.name}
//                 </Badge>
//               ))}
//             </div>
//           </div>
//         </div>

//         {/* Results Count */}
//         <div className="flex items-center justify-between">
//           <p className="text-sm text-muted-foreground">
//             Found {filteredCourses.length} program
//             {filteredCourses.length !== 1 ? "s" : ""}
//           </p>
//           <div className="flex items-center gap-2">
//             <Filter className="h-4 w-4 text-muted-foreground" />
//             <span className="text-sm text-muted-foreground">
//               Filter applied:{" "}
//               {colleges.find((c) => c.id === selectedCollege)?.name}
//             </span>
//           </div>
//         </div>

//         {/* Course List */}
//         {filteredCourses.length > 0 ? (
//           <Accordion
//             type="single"
//             collapsible
//             className="w-full"
//             value={expandedItem}
//             onValueChange={setExpandedItem}
//           >
//             {filteredCourses.map((course, index) => (
//               <AccordionItem
//                 value={`item-${index}`}
//                 key={index}
//                 className="border border-muted rounded-lg mb-4 overflow-hidden"
//               >
//                 <AccordionTrigger className="px-4 py-2 hover:bg-muted/20">
//                   <div className="flex flex-col md:flex-row md:items-center justify-between w-full text-left">
//                     <div className="flex items-center gap-3">
//                       <div className="bg-primary/10 p-2 rounded-full">
//                         <GraduationCap className="h-5 w-5 text-primary" />
//                       </div>
//                       <div>
//                         <h3 className="font-medium">{course.name}</h3>
//                         <p className="text-sm text-muted-foreground hidden md:block">
//                           {course.shortDescription}
//                         </p>
//                       </div>
//                     </div>
//                     <Badge variant="outline" className="mt-2 md:mt-0">
//                       {course.college === "medical"
//                         ? "Medical & Dental"
//                         : course.college === "rehab"
//                         ? "Rehabilitation Sciences"
//                         : course.college === "nursing"
//                         ? "Nursing"
//                         : course.college === "paramedics"
//                         ? "Paramedics"
//                         : "Pharmacy"}
//                     </Badge>
//                   </div>
//                 </AccordionTrigger>
//                 <AccordionContent>
//                   <Card className="border-0 shadow-none">
//                     <CardHeader>
//                       <CardTitle>{course.name}</CardTitle>
//                       <CardDescription>{course.description}</CardDescription>
//                     </CardHeader>
//                     <CardContent className="space-y-4">
//                       <div>
//                         <h4 className="font-medium mb-2">
//                           Available Programs:
//                         </h4>
//                         <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
//                           {course.programs.map((program, idx) => (
//                             <li key={idx} className="flex items-start gap-2">
//                               <div className="bg-primary/10 p-1 rounded-full mt-0.5">
//                                 <ChevronRight className="h-3 w-3 text-primary" />
//                               </div>
//                               <span>{program}</span>
//                             </li>
//                           ))}
//                         </ul>
//                       </div>

//                       {course.duration && (
//                         <div className="flex items-center gap-2 text-sm text-muted-foreground">
//                           <Clock className="h-4 w-4" />
//                           <span>Duration: {course.duration}</span>
//                         </div>
//                       )}

//                       {course.eligibility && (
//                         <div>
//                           <h4 className="font-medium mb-2">Eligibility:</h4>
//                           <p className="text-sm text-muted-foreground">
//                             {course.eligibility}
//                           </p>
//                         </div>
//                       )}
//                     </CardContent>
//                     <CardFooter>
//                       <Button size="sm">
//                         Learn More <ChevronRight className="ml-1 h-4 w-4" />
//                       </Button>
//                     </CardFooter>
//                   </Card>
//                 </AccordionContent>
//               </AccordionItem>
//             ))}
//           </Accordion>
//         ) : (
//           <div className="text-center py-8">
//             <h3 className="text-lg font-medium mb-2">No programs found</h3>
//             <p className="text-muted-foreground">
//               Try adjusting your search or filter criteria
//             </p>
//           </div>
//         )}
//       </motion.div>
//     </SectionLayout>
//   );
// }

// const courses = [
//   {
//     name: "MBBS",
//     college: "medical",
//     shortDescription: "Bachelor of Medicine and Bachelor of Surgery",
//     description:
//       "In accordance with Pakistan Medical & Dental Council (PM&DC) regulations of centralized admission policy through admitting university (Shaheed Zulfiqar Ali Bhutto Medical University, Islamabad).",
//     programs: ["Bachelor of Medicine and Bachelor of Surgery (MBBS)"],
//     duration: "5 Years",
//     eligibility: "Intermediate (Pre-Medical) with at least 60% marks, MDCAT",
//   },
//   {
//     name: "BDS",
//     college: "medical",
//     shortDescription: "Bachelor of Dental Surgery",
//     description:
//       "In accordance with Pakistan Medical & Dental Council (PM&DC) regulations of centralized admission policy through admitting university (Shaheed Zulfiqar Ali Bhutto Medical University, Islamabad).",
//     programs: ["Bachelor of Dental Surgery (BDS)"],
//     duration: "4 Years",
//     eligibility: "Intermediate (Pre-Medical) with at least 60% marks, MDCAT",
//   },
//   {
//     name: "College of Rehabilitation Sciences",
//     college: "rehab",
//     shortDescription: "Physical therapy and allied health programs",
//     description:
//       "Approved by HEC, affiliated with Shaheed Zulfiqar Ali Bhutto Medical University (SZABMU)",
//     programs: [
//       "Doctor of Physiotherapy (DPT)",
//       "BS – Medical Laboratory Technology",
//       "BS – Dental Hygiene Technology",
//       "BS – Radiology & Imaging Technology",
//       "BS – Anaesthesia Technology",
//       "BS – Optometry Technology",
//     ],
//     duration: "4-5 Years depending on program",
//     eligibility: "Intermediate (Pre-Medical) with at least 50% marks",
//   },
//   {
//     name: "College of Nursing",
//     college: "nursing",
//     shortDescription: "Professional nursing education",
//     description: "Under process for approval",
//     programs: ["B.Sc Nursing", "General Nursing", "Assistant Nursing"],
//     duration: "2-4 Years depending on program",
//     eligibility: "Intermediate with Science subjects",
//   },
//   {
//     name: "College of Paramedics",
//     college: "paramedics",
//     shortDescription: "Technical healthcare programs",
//     description: "Approved by FBISE",
//     programs: [
//       "Laboratory Technician",
//       "Radiographer",
//       "Dialysis Technician",
//       "Dental Technician",
//       "Operation Theatre Technician",
//       "Dental Hygiene",
//     ],
//     duration: "2 Years",
//     eligibility: "Matric with Science",
//   },
//   {
//     name: "College of Pharmacy",
//     college: "pharmacy",
//     shortDescription: "Pharmaceutical education",
//     description:
//       "Pharm-D is a five years' undergraduate degree program recognized by the Pharmacy Council of Pakistan and widely accepted nationally and internationally.",
//     programs: ["Pharm-D (Doctor of Pharmacy)"],
//     duration: "5 Years",
//     eligibility: "Intermediate (Pre-Medical) with at least 60% marks",
//   },
// ];

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { SectionLayout } from ".";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Search,
  Filter,
  GraduationCap,
  Clock,
  ChevronRight,
  ChevronLeft,
} from "lucide-react";
import { Link } from "react-router-dom";

export default function CourseFinderSection() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCollege, setSelectedCollege] = useState("all");
  const [filteredCourses, setFilteredCourses] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const coursesPerPage = 6;

  // Filter courses based on search term and selected college
  useEffect(() => {
    const filtered = allCourses.filter((course) => {
      const matchesSearch =
        course.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        course.description.toLowerCase().includes(searchTerm.toLowerCase());

      const matchesCollege =
        selectedCollege === "all" || course.college === selectedCollege;

      return matchesSearch && matchesCollege;
    });

    setFilteredCourses(filtered);
    setCurrentPage(1); // Reset to first page when filters change
  }, [searchTerm, selectedCollege]);

  // Calculate pagination
  const indexOfLastCourse = currentPage * coursesPerPage;
  const indexOfFirstCourse = indexOfLastCourse - coursesPerPage;
  const currentCourses = filteredCourses.slice(
    indexOfFirstCourse,
    indexOfLastCourse
  );
  const totalPages = Math.ceil(filteredCourses.length / coursesPerPage);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  const nextPage = () =>
    setCurrentPage((prev) => Math.min(prev + 1, totalPages));
  const prevPage = () => setCurrentPage((prev) => Math.max(prev - 1, 1));

  const colleges = [
    { id: "all", name: "All Colleges" },
    { id: "medical", name: "Medical & Dental" },
    { id: "rehab", name: "Rehabilitation Sciences" },
    { id: "nursing", name: "Nursing" },
    { id: "paramedics", name: "Paramedics" },
    { id: "pharmacy", name: "Pharmacy" },
  ];

  return (
    <SectionLayout
      name="Course Finder"
      title="Find Your Program"
      description="Explore our comprehensive range of programs across medical and allied health sciences to find the perfect fit for your career aspirations."
      href="/"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="space-y-6"
      >
        {/* Search and Filter Section */}
        <div className="bg-primary/5 p-6">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input
                type="text"
                placeholder="Search for programs or courses..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 rounded-none"
              />
            </div>
            <div className="flex flex-wrap gap-2">
              {colleges.map((college) => (
                <Badge
                  key={college.id}
                  variant={
                    selectedCollege === college.id ? "default" : "outline"
                  }
                  className="cursor-pointer"
                  onClick={() => setSelectedCollege(college.id)}
                >
                  {college.name}
                </Badge>
              ))}
            </div>
          </div>
        </div>

        {/* Results Count */}
        <div className="flex items-center justify-between">
          <p className="text-sm text-muted-foreground">
            Found {filteredCourses.length} course
            {filteredCourses.length !== 1 ? "s" : ""}
          </p>
          <div className="flex items-center gap-2">
            <Filter className="h-4 w-4 text-muted-foreground" />
            <span className="text-sm text-muted-foreground">
              Filter applied:{" "}
              {colleges.find((c) => c.id === selectedCollege)?.name}
            </span>
          </div>
        </div>

        {/* Course Grid */}
        {filteredCourses.length > 0 ? (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {currentCourses.map((course, index) => (
                <Card
                  key={index}
                  className="flex flex-col h-full bg-primary/5 border-none shadow-none rounded-none"
                >
                  <CardHeader className="pb-2">
                    <div className="flex items-start justify-between">
                      <div className="flex items-center gap-3">
                        <div className="bg-primary/10 p-2 rounded-full">
                          <GraduationCap className="h-5 w-5 text-primary" />
                        </div>
                        <Badge variant="outline">
                          {course.college === "medical"
                            ? "Medical & Dental"
                            : course.college === "rehab"
                            ? "Rehabilitation"
                            : course.college === "nursing"
                            ? "Nursing"
                            : course.college === "paramedics"
                            ? "Paramedics"
                            : "Pharmacy"}
                        </Badge>
                      </div>
                    </div>
                    <CardTitle className="mt-3">{course.name}</CardTitle>
                    <CardDescription className="line-clamp-2">
                      {course.shortDescription}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                      <Clock className="h-4 w-4" />
                      <span>Duration: {course.duration}</span>
                    </div>
                    <p className="text-sm text-muted-foreground line-clamp-3">
                      {course.description}
                    </p>
                  </CardContent>
                  <CardFooter className="border-t border-primary/50 justify-end">
                    <Button size="sm" className="" asChild>
                      <Link to={course.href}>
                        Learn More <ChevronRight className="ml-1 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>

            {/* Pagination */}
            {filteredCourses.length > 6 && (
              <div className="flex items-center justify-between mt-8">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={prevPage}
                  disabled={currentPage === 1}
                  className="flex items-center gap-1"
                >
                  <ChevronLeft className="h-4 w-4" /> Previous
                </Button>

                <div className="flex items-center gap-2">
                  {Array.from({ length: totalPages }, (_, i) => (
                    <Button
                      key={i + 1}
                      variant={currentPage === i + 1 ? "default" : "outline"}
                      size="sm"
                      onClick={() => paginate(i + 1)}
                      className="w-8 h-8 p-0"
                    >
                      {i + 1}
                    </Button>
                  ))}
                </div>

                <Button
                  variant="outline"
                  size="sm"
                  onClick={nextPage}
                  disabled={currentPage === totalPages}
                  className="flex items-center gap-1"
                >
                  Next <ChevronRight className="h-4 w-4" />
                </Button>
              </div>
            )}
          </>
        ) : (
          <div className="text-center py-8">
            <h3 className="text-lg font-medium mb-2">No courses found</h3>
            <p className="text-muted-foreground">
              Try adjusting your search or filter criteria
            </p>
          </div>
        )}
      </motion.div>
    </SectionLayout>
  );
}

const allCourses = [
  {
    name: "MBBS",
    college: "medical",
    shortDescription: "Bachelor of Medicine and Bachelor of Surgery",
    description:
      "A 5-year program following PM&DC regulations through Shaheed Zulfiqar Ali Bhutto Medical University, Islamabad.",
    duration: "5 Years",
    eligibility: "Intermediate (Pre-Medical) with at least 60% marks, MDCAT",
    href: "/colleges/mdc",
  },
  {
    name: "BDS",
    college: "medical",
    shortDescription: "Bachelor of Dental Surgery",
    description:
      "A 4-year program following PM&DC regulations through Shaheed Zulfiqar Ali Bhutto Medical University, Islamabad.",
    duration: "4 Years",
    eligibility: "Intermediate (Pre-Medical) with at least 60% marks, MDCAT",
    href: "/colleges/mdc",
  },
  {
    name: "Doctor of Physiotherapy (DPT)",
    college: "rehab",
    shortDescription: "Professional degree in physical therapy",
    description:
      "A comprehensive program to produce physical therapy professionals who will be competent to diagnose and treat movement dysfunctions.",
    duration: "5 Years",
    eligibility: "Intermediate (Pre-Medical) with at least 50% marks",
    href: "/colleges/ahs",
  },
  {
    name: "BS – Medical Laboratory Technology",
    college: "rehab",
    shortDescription: "Bachelor's in laboratory sciences",
    description:
      "Program designed to train professionals in medical laboratory techniques and diagnostics.",
    duration: "4 Years",
    eligibility: "Intermediate (Pre-Medical) with at least 50% marks",
    href: "/colleges/ahs",
  },
  {
    name: "BS – Dental Hygiene Technology",
    college: "rehab",
    shortDescription: "Bachelor's in dental hygiene",
    description:
      "Program focused on preventive oral health services and clinical dental hygiene services.",
    duration: "4 Years",
    eligibility: "Intermediate (Pre-Medical) with at least 50% marks",
    href: "/colleges/ahs",
  },
  {
    name: "BS – Radiology & Imaging Technology",
    college: "rehab",
    shortDescription: "Bachelor's in diagnostic imaging",
    description:
      "Program that prepares students to become radiologic technologists who perform diagnostic imaging examinations.",
    duration: "4 Years",
    eligibility: "Intermediate (Pre-Medical) with at least 50% marks",
    href: "/colleges/ahs",
  },
  {
    name: "BS – Anaesthesia Technology",
    college: "rehab",
    shortDescription: "Bachelor's in anesthesia support",
    description:
      "Program that trains professionals to assist in the administration and monitoring of anesthesia.",
    duration: "4 Years",
    eligibility: "Intermediate (Pre-Medical) with at least 50% marks",
    href: "/colleges/ahs",
  },
  {
    name: "BS – Optometry Technology",
    college: "rehab",
    shortDescription: "Bachelor's in eye care",
    description:
      "Program that prepares students to become primary healthcare professionals who examine, diagnose, treat and manage diseases and disorders of the visual system.",
    duration: "4 Years",
    eligibility: "Intermediate (Pre-Medical) with at least 50% marks",
    href: "/colleges/ahs",
  },
  {
    name: "B.Sc Nursing",
    college: "nursing",
    shortDescription: "Bachelor's degree in nursing science",
    description:
      "A comprehensive program that prepares students for professional nursing practice.",
    duration: "4 Years",
    eligibility: "Intermediate with Science subjects",
    href: "/colleges/nursing",
  },
  {
    name: "General Nursing",
    college: "nursing",
    shortDescription: "Diploma in general nursing",
    description:
      "Program that provides training in basic nursing care across various healthcare settings.",
    duration: "3 Years",
    eligibility: "Intermediate with Science subjects",
    href: "/colleges/nursing",
  },
  {
    name: "Assistant Nursing",
    college: "nursing",
    shortDescription: "Certificate in nursing assistance",
    description:
      "Program that trains individuals to provide basic patient care under the supervision of registered nurses.",
    duration: "2 Years",
    eligibility: "Matric with Science",
    href: "/colleges/nursing",
  },
  {
    name: "Laboratory Technician",
    college: "paramedics",
    shortDescription: "Diploma in laboratory techniques",
    description:
      "Program that trains students to perform laboratory tests to help diagnose, treat, and prevent diseases.",
    duration: "2 Years",
    eligibility: "Matric with Science",
    href: "/colleges/paramedics",
  },
  {
    name: "Radiographer",
    college: "paramedics",
    shortDescription: "Diploma in radiography",
    description:
      "Program that prepares students to use imaging technologies to diagnose and treat patients.",
    duration: "2 Years",
    eligibility: "Matric with Science",
    href: "/colleges/paramedics",
  },
  {
    name: "Dialysis Technician",
    college: "paramedics",
    shortDescription: "Diploma in dialysis technology",
    description:
      "Program that trains students to operate machines that remove waste products from patients' blood when their kidneys are unable to do so.",
    duration: "2 Years",
    eligibility: "Matric with Science",
    href: "/colleges/paramedics",
  },
  {
    name: "Dental Technician",
    college: "paramedics",
    shortDescription: "Diploma in dental technology",
    description:
      "Program that trains students to create dental prosthetics like crowns, bridges, and dentures.",
    duration: "2 Years",
    eligibility: "Matric with Science",
    href: "/colleges/paramedics",
  },
  {
    name: "Operation Theatre Technician",
    college: "paramedics",
    shortDescription: "Diploma in OT assistance",
    description:
      "Program that prepares students to assist surgeons and nurses in the operating room.",
    duration: "2 Years",
    eligibility: "Matric with Science",
    href: "/colleges/paramedics",
  },
  {
    name: "Dental Hygiene",
    college: "paramedics",
    shortDescription: "Diploma in dental hygiene",
    description:
      "Program that trains students in preventive dental care and cleaning procedures.",
    duration: "2 Years",
    eligibility: "Matric with Science",
    href: "/colleges/paramedics",
  },
  {
    name: "Pharm-D (Doctor of Pharmacy)",
    college: "pharmacy",
    shortDescription: "Professional degree in pharmacy",
    description:
      "A five-year undergraduate degree program recognized by the Pharmacy Council of Pakistan and widely accepted nationally and internationally.",
    duration: "5 Years",
    eligibility: "Intermediate (Pre-Medical) with at least 60% marks",
    href: "/colleges/pharmacy",
  },
];
