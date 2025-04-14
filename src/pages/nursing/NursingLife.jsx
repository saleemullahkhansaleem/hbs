import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import {
  BookOpen,
  Beaker,
  Monitor,
  Building,
  Library,
  Hospital,
  Home,
  Activity,
  Map,
} from "lucide-react";

const NursingLife = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  // Facilities data
  const academicFacilities = [
    {
      id: 1,
      title: "Classrooms",
      description:
        "All classrooms are spacious, air-conditioned and are equipped with all required learning resources: multimedia, rostrums, and whiteboards.",
      icon: <BookOpen className="h-8 w-8 text-primary" />,
    },
    {
      id: 2,
      title: "Skills Lab",
      description:
        "Skills lab is equipped with all resources which are required for nursing skill performance.",
      icon: <Beaker className="h-8 w-8 text-primary" />,
    },
    {
      id: 3,
      title: "Science Lab",
      description:
        "Science lab is equipped with all the required equipment to perform Biochemistry, Microbiology and pathophysiology labs.",
      icon: <Beaker className="h-8 w-8 text-primary" />,
    },
    {
      id: 4,
      title: "Anatomy Museum",
      description:
        "It is equipped with all the relevant anatomical models and charts to understand the anatomy and physiology concepts.",
      icon: <Building className="h-8 w-8 text-primary" />,
    },
    {
      id: 5,
      title: "Computer Lab",
      description:
        "Students are provided 25 functional computers along with internet facility to facilitate their learning.",
      icon: <Monitor className="h-8 w-8 text-primary" />,
    },
  ];

  const libraryFacilities = [
    {
      id: 6,
      title: "Library",
      description:
        "Library is situated within the premises of HBSCN with all relevant nursing reference books and journals. Moreover e-library facility is also available for students to access all relevant nursing PDF books, Articles and journals.",
      icon: <Library className="h-8 w-8 text-primary" />,
    },
    {
      id: 7,
      title: "Central Library",
      description:
        "Students of HBSCN have access to the central library of HBS Medical and Dental College at any time.",
      icon: <Library className="h-8 w-8 text-primary" />,
    },
  ];

  const clinicalFacilities = [
    {
      id: 8,
      title: "Hospital Based Facilities",
      description:
        "Students will have their clinical rotation at HBS General Hospital which has both inpatient and outpatient services of the subspecialties: Emergency, Medical, Surgical, Obs & Gynae, Operating rooms, orthopedic, nephrology, Urology. Moreover, MOU has been signed with PIMS hospital to rotate students for their clinical based on their subject specialty.",
      icon: <Hospital className="h-8 w-8 text-primary" />,
    },
  ];

  const lifestyleFacilities = [
    {
      id: 9,
      title: "Sports and Co-curricular Activities",
      description:
        "Students are facilitated for Indoor and outdoor sports and other co-curricular activities. Moreover, Students are also facilitated to avail sports facilities at Pakistan Sports Complex.",
      icon: <Activity className="h-8 w-8 text-primary" />,
    },
    {
      id: 10,
      title: "Hostel Facility",
      description:
        "Hostel facility is available for students who want to avail it.",
      icon: <Home className="h-8 w-8 text-primary" />,
    },
  ];

  const communityFacilities = {
    id: 11,
    title: "Community Based Facilities",
    description: "Students will have an exposure to:",
    items: [
      "Primary Health Centre (PHC)",
      "Basic Health Unit (BHU)",
      "Rural Health Centre (RHC)",
      "Tehsil Health Quarters (THQ)",
      "District Head Quarters (DHQ)",
      "Walking Survey in Community",
      "Bulk water supply plant",
      "Sewage Treatment Plant",
      "Milk Plant & Dairy Farm",
      "Slaughter House",
      "Non-Government Organization (NGO)",
    ],
    icon: <Map className="h-8 w-8 text-primary" />,
  };

  // Facility card component
  const FacilityCard = ({ facility }) => (
    <motion.div
      className="bg-background shadow-md p-6 hover:shadow-lg transition-shadow"
      variants={itemVariants}
    >
      <div className="mb-4">{facility.icon}</div>
      <h3 className="text-xl font-bold text-foreground mb-2">
        {facility.title}
      </h3>
      <p className="text-muted-foreground">{facility.description}</p>
      {facility.items && (
        <ul className="mt-4 space-y-2">
          {facility.items.map((item, index) => (
            <li key={index} className="flex items-start">
              <span className="text-primary mr-2">•</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      )}
    </motion.div>
  );

  return (
    <div className="bg-muted/50 min-h-screen">
      {/* Hero Section */}
      <section className="bg-primary text-primary-foreground py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Life at HBS College of Nursing
            </h1>
            <p className="text-xl max-w-3xl">
              Experience a supportive learning environment with state-of-the-art
              facilities designed to nurture the next generation of nursing
              professionals.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <div className="container mx-auto max-w-6xl px-4 py-12">
        {/* Introduction */}
        <motion.section
          className="mb-16 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <h2 className="text-3xl font-bold text-foreground mb-4">
            World-Class Facilities
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            At HBS College of Nursing, we provide comprehensive facilities to
            ensure our students receive the best possible education and
            practical training. Our campus is designed to foster both academic
            excellence and personal growth.
          </p>
        </motion.section>

        {/* Academic Facilities */}
        <section className="mb-16">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <h2 className="text-2xl font-bold text-foreground mb-8 pb-2 border-b-2 border-primary inline-block">
              Academic Facilities
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {academicFacilities.map((facility) => (
                <FacilityCard key={facility.id} facility={facility} />
              ))}
            </div>
          </motion.div>
        </section>

        {/* Library Facilities */}
        <section className="mb-16">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <h2 className="text-2xl font-bold text-foreground mb-8 pb-2 border-b-2 border-primary inline-block">
              Library Resources
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {libraryFacilities.map((facility) => (
                <FacilityCard key={facility.id} facility={facility} />
              ))}
            </div>
          </motion.div>
        </section>

        {/* Clinical Facilities */}
        <section className="mb-16">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <h2 className="text-2xl font-bold text-foreground mb-8 pb-2 border-b-2 border-primary inline-block">
              Clinical Training
            </h2>
            <div className="grid grid-cols-1 gap-8">
              {clinicalFacilities.map((facility) => (
                <FacilityCard key={facility.id} facility={facility} />
              ))}
            </div>
          </motion.div>
        </section>

        {/* Lifestyle Facilities */}
        <section className="mb-16">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <h2 className="text-2xl font-bold text-foreground mb-8 pb-2 border-b-2 border-primary inline-block">
              Student Life
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {lifestyleFacilities.map((facility) => (
                <FacilityCard key={facility.id} facility={facility} />
              ))}
            </div>
          </motion.div>
        </section>

        {/* Community Facilities */}
        <section className="mb-16">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <h2 className="text-2xl font-bold text-foreground mb-8 pb-2 border-b-2 border-primary inline-block">
              Community Experience
            </h2>
            <FacilityCard facility={communityFacilities} />
          </motion.div>
        </section>

        {/* Student Testimonials */}
        <section className="my-16">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            <h2 className="text-2xl font-bold text-foreground mb-8 pb-2 border-b-2 border-primary inline-block">
              Student Testimonials
            </h2>
            <div className="bg-muted rounded-lg shadow-md p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="border-l-4 border-primary pl-4">
                  <p className="italic text-muted-foreground mb-4">
                    "The facilities at HBS College of Nursing provided me with
                    everything I needed to excel in my studies. The skills lab
                    in particular gave me confidence before my clinical
                    rotations."
                  </p>
                  <p className="font-bold">- Sarah A., BSN Graduate</p>
                </div>
                <div className="border-l-4 border-primary pl-4">
                  <p className="italic text-muted-foreground mb-4">
                    "Having access to both the nursing library and central
                    medical library was invaluable for my research projects. The
                    faculty support and modern facilities made my learning
                    experience exceptional."
                  </p>
                  <p className="font-bold">- Ahmed K., Current Student</p>
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Virtual Tour CTA */}
        <section className="mt-16">
          <motion.div
            className="bg-primary text-primary-foreground rounded-lg p-8 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
          >
            <h2 className="text-3xl font-bold mb-4">Experience Our Campus</h2>
            <p className="text-lg mb-6">
              Want to see our facilities in person? Schedule a campus tour or
              view our virtual tour online.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button
                variant="default"
                className="bg-primary-foreground text-primary hover:bg-primary-foreground/70"
              >
                Schedule a Visit
              </Button>
              <Button
                variant=""
                className="border-primary-foreground border text-primary-foreground hover:bg-primary-foreground/10"
              >
                Virtual Tour
              </Button>
            </div>
          </motion.div>
        </section>
      </div>
    </div>
  );
};

export default NursingLife;
