import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const NursingFaculty = () => {
  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  // Faculty data
  const leadershipFaculty = [
    {
      id: 1,
      name: "Margus Rahim",
      title: "Principal HBS College of Nursing",
      image: "https://placehold.co/300",
    },
  ];

  const seniorFaculty = [
    {
      id: 2,
      name: "Mrs Nusrat Tahira",
      title: "Senior Nursing Lecturer",
      image: "https://placehold.co/300",
    },
    {
      id: 3,
      name: "Mrs Tehmina Naseer-U-Din",
      title: "Senior Nursing Lecturer",
      image: "https://placehold.co/300",
    },
    {
      id: 4,
      name: "Mrs Meher-un-Nisa",
      title: "Senior Nursing Lecturer",
      image: "https://placehold.co/300",
    },
  ];

  const lecturers = [
    {
      id: 5,
      name: "Mrs Saika Didar",
      title: "Nursing Lecturer",
      image: "https://placehold.co/300",
    },
    {
      id: 6,
      name: "Mr AttaUllah",
      title: "Nursing Lecturer",
      image: "https://placehold.co/300",
    },
    {
      id: 7,
      name: "Mr Akramullah",
      title: "Nursing Lecturer",
      image: "https://placehold.co/300",
    },
    {
      id: 8,
      name: "Mr Muhammad Saeed",
      title: "Nursing Lecturer",
      image: "https://placehold.co/300",
    },
    {
      id: 9,
      name: "Mrs Iqra Nisar",
      title: "Nursing Lecturer",
      image: "https://placehold.co/300",
    },
    {
      id: 10,
      name: "Mrs Sana Mushtaq",
      title: "Nursing Lecturer",
      image: "https://placehold.co/300",
    },
  ];

  // Faculty card component
  const FacultyCard = ({ faculty }) => (
    <motion.div
      className="bg-muted/50 rounded-lg shadow-md overflow-hidden transition-all hover:shadow-xl"
      whileHover={{ y: -5 }}
      initial="hidden"
      animate="visible"
      variants={fadeIn}
    >
      <div className="aspect-square overflow-hidden">
        <img
          src={faculty.image || "/placeholder.svg"}
          alt={faculty.name}
          className="w-full h-full object-cover object-center"
        />
      </div>
      <div className="p-4">
        <h3 className="text-xl font-bold">{faculty.name}</h3>
        <p className="text-primary mt-1">{faculty.title}</p>
      </div>
    </motion.div>
  );

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-muted/50 py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Our Nursing Faculty
            </h1>
            <p className="text-xl max-w-3xl">
              Meet the dedicated professionals who are shaping the future of
              nursing education at HBS College of Nursing.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <div className="container mx-auto max-w-6xl px-4 py-12">
        {/* Leadership Section */}
        <section className="mb-16">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <h2 className="text-3xl font-bold mb-8 pb-2 border-b-2 border-primary inline-block">
              Leadership
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {leadershipFaculty.map((faculty) => (
                <div key={faculty.id} className="md:col-span-1">
                  <FacultyCard faculty={faculty} />
                </div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* Senior Faculty Section */}
        <section className="mb-16">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <h2 className="text-3xl font-bold mb-8 pb-2 border-b-2 border-primary inline-block">
              Senior Faculty
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {seniorFaculty.map((faculty) => (
                <FacultyCard key={faculty.id} faculty={faculty} />
              ))}
            </div>
          </motion.div>
        </section>

        {/* Lecturers Section */}
        <section className="mb-16">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <h2 className="text-3xl font-bold mb-8 pb-2 border-b-2 border-primary inline-block">
              Lecturers
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {lecturers.map((faculty) => (
                <FacultyCard key={faculty.id} faculty={faculty} />
              ))}
            </div>
          </motion.div>
        </section>

        {/* Join Our Team CTA */}
        <section className="mt-16">
          <motion.div
            className="bg-primary text-primary-foreground rounded-lg p-8 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <h2 className="text-3xl font-bold mb-4">Join Our Faculty</h2>
            <p className="text-lg mb-6">
              We're always looking for talented nursing educators to join our
              team. If you're passionate about nursing education, we'd love to
              hear from you.
            </p>
            <Button
              variant="default"
              className="bg-primary-foreground text-primary hover:bg-primary-foreground/70"
            >
              View Opportunities
            </Button>
          </motion.div>
        </section>
      </div>
    </div>
  );
};

export default NursingFaculty;
