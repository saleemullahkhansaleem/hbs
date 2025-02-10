import { motion } from "framer-motion";
import { SecondaryHeader } from "@/components";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const performanceData = [
  {
    title: "Digital Skills Center",
    description: "Crafting Tomorrow's Innovators",
    content:
      "Our Digital Skills Center continues to be a hub where young minds develop essential skills for the 21st-century economy. With access to the internet, laptops, and computers, students from low-income backgrounds are leveraging technology to shape their futures.",
    achievements: [
      "Our first batch is now complete!",
      "We have started two new classes to further empower students.",
    ],
    images: [
      "/images/performance/digital-skills-1.webp",
      "/images/performance/digital-skills-2.webp",
      "/images/performance/digital-skills-3.webp",
      "/images/performance/digital-skills-4.webp",
      "/images/performance/digital-skills-5.webp",
      "/images/performance/digital-skills-6.webp",
      "/images/performance/digital-skills-7.webp",
      "/images/performance/digital-skills-8.webp",
    ],
  },
  {
    title: "Basic Digital Literacy",
    description: "Navigating the Online Landscape",
    content:
      "Our Digital Literacy classes have been instrumental in equipping students with online tools for success. By nurturing small-scale projects and fostering self-learning, we are empowering underprivileged youth to confidently participate in the digital economy.",
    images: [
      "/images/performance/digital-literacy-1.webp",
      "/images/performance/digital-literacy-2.webp",
    ],
  },
  {
    title: "Freelancing & Career Development Workshop",
    description: "Building Pathways",
    content:
      "Our workshops, led by industry consultants and educational specialists, have opened doors for students to explore freelancing and diverse career paths.",
    achievements: [
      "Teaching students how to navigate freelancing platforms.",
      "Instilling a sense of community connection while pursuing career growth.",
    ],
    images: [
      "/images/performance/freelancing-1.webp",
      "/images/performance/freelancing-2.webp",
      "/images/performance/freelancing-3.webp",
      "/images/performance/freelancing-4.webp",
      "/images/performance/freelancing-5.webp",
    ],
  },
  {
    title: "Community Development Workshops",
    description: "Fostering Appreciation",
    content:
      "We are committed to building stronger, more connected communities by helping youth from Katchi Abadis learn about:",
    achievements: [
      "Societal foundations",
      "Ways to contribute positively to their neighborhoods",
    ],
    images: ["/images/performance/community-1.webp"],
  },
  {
    title: "Leadership Workshop",
    description: "Building Inclusive Leaders",
    content:
      "Through our Leadership Workshops, we are fostering confident and empathetic leaders who will drive positive change in their communities.",
    achievements: [
      "Emphasis on unity and inclusivity",
      "Encouraging young individuals to become role models",
    ],
    images: [
      "/images/performance/leadership-1.webp",
      "/images/performance/leadership-2.webp",
    ],
  },
  {
    title: "Green Spaces & Tree Plantation Drive",
    description: "Nurturing the Environment",
    content:
      "HBS's commitment to a greener future is reflected in our Tree Plantation Drive. Youth from low-income communities actively participate in:",
    achievements: [
      "Creating green spaces",
      "Developing a sense of environmental responsibility",
    ],
    images: [
      "/images/performance/green-spaces-1.webp",
      "/images/performance/green-spaces-2.webp",
      "/images/performance/green-spaces-3.webp",
      "/images/performance/green-spaces-4.webp",
      "/images/performance/green-spaces-5.webp",
      "/images/performance/green-spaces-6.webp",
      "/images/performance/green-spaces-7.webp",
      "/images/performance/green-spaces-8.webp",
    ],
  },
  {
    title: "Youth Engagement",
    description: "Advocating for Climate Action",
    content:
      "We participated in GIZ's Youth Action 4 Climate Conference, where our students showcased their creativity through:",
    achievements: [
      "Theater performances led by Abdul Hameed Bukhari, Head of the Skills Development Center.",
      "Harnessing art for climate advocacy.",
    ],
    images: ["/images/performance/youth-engagement-1.webp"],
  },
  {
    title: "Pakistan Expo on Disaster Risk Reduction 2023",
    description: "Building Resilience",
    content:
      "Our participation in this expo has strengthened our network with:",
    achievements: [
      "Government officials",
      "Key stakeholders working toward disaster preparedness",
    ],
    images: [
      "/images/performance/disaster-risk-1.webp",
      "/images/performance/disaster-risk-2.webp",
      "/images/performance/disaster-risk-3.webp",
      "/images/performance/disaster-risk-4.webp",
    ],
  },
  {
    title: "Certificate Distribution Ceremony",
    description: "Celebrating Success",
    content:
      "We recently celebrated a significant milestone with the distribution of completion certificates to our hardworking students.",
    achievements: [
      "Every certificate represents a step toward an empowered future.",
      "The impact of education and skills development is life-changing.",
    ],
    images: [
      "/images/performance/certificate-1.webp",
      "/images/performance/certificate-2.webp",
      "/images/performance/certificate-3.webp",
      "/images/performance/certificate-4.webp",
      "/images/performance/certificate-5.webp",
    ],
  },
];

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

export default function DEEDPerformance() {
  return (
    <>
      <SecondaryHeader
        title="HBS Performance"
        description="Transforming Lives, Communities, and Futures: July - September 2023"
      />
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6"
            initial="initial"
            animate="animate"
            variants={{
              animate: {
                transition: {
                  staggerChildren: 0.1,
                },
              },
            }}
          >
            {performanceData.map((item, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <div className="h-full flex flex-col bg-gradient-to-br from-primary/15 via-primary/15 to-primary/5">
                  <Carousel className="w-full mx-auto">
                    <CarouselContent>
                      {item.images.map((image, i) => (
                        <CarouselItem key={i}>
                          <div className="p-">
                            <img
                              src={image || "/placeholder.svg"}
                              alt={`${item.title} image ${i + 1}`}
                              width={300}
                              height={200}
                              className="w-full aspect-video object-cover"
                            />
                          </div>
                        </CarouselItem>
                      ))}
                    </CarouselContent>
                    <CarouselPrevious />
                    <CarouselNext />
                  </Carousel>
                  <CardHeader>
                    <CardTitle>{item.title}</CardTitle>
                    <CardDescription className="italic text-xs text-primary">
                      {item.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="flex-grow text-sm text-muted-foreground">
                    <p className="mb-4">{item.content}</p>
                    {item.achievements && (
                      <ul className="list-disc pl-5">
                        {item.achievements.map((achievement, i) => (
                          <li key={i}>{achievement}</li>
                        ))}
                      </ul>
                    )}
                  </CardContent>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
      <section className="py-16 bg-muted">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            className="text-3xl font-bold text-center mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Brighter Future for the Youth
          </motion.h2>
          <motion.p
            className="text-lg text-center mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            HBS's holistic approach focuses on:
          </motion.p>
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-4"
            initial="initial"
            animate="animate"
            variants={{
              animate: {
                transition: {
                  staggerChildren: 0.1,
                },
              },
            }}
          >
            {[
              "Education & Skill Development",
              "Community Leadership",
              "Environmental Initiatives",
              "Mentorship & Career Growth",
            ].map((focus, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Badge className="w-full py-2 text-center">{focus}</Badge>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
      <section className="py-16 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2
            className="text-3xl font-bold mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Our Impact
          </motion.h2>
          <motion.p
            className="text-lg mb-8 text-muted-foreground"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            This achievement wouldn't have been possible without the relentless
            efforts of the HBS team, whose dedication to nurturing talent has
            been the backbone of this initiative.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="relative p-4 bg-primary/5"
          >
            <div className="absolute -inset-4 bg-primary/20 z-0 blur-2xl"></div>
            <img
              src="/images/performance/features.webp"
              alt="HBS Team"
              width={800}
              height={400}
              className="rounded-lg shadow-lg relative"
            />
          </motion.div>
        </div>
      </section>
    </>
  );
}
