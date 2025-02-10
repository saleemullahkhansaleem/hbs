import { motion } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Book,
  GraduationCap,
  Heart,
  Bus,
  Stethoscope,
  Users,
} from "lucide-react";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";
import { ProgrammesCard, programs } from "@/pages/Programmes";

const dsssFeatures = [
  {
    icon: <Book className="w-6 h-6" />,
    title: "Quality Education",
    description:
      "Providing high-quality, meaningful education to break the cycle of poverty.",
  },
  {
    icon: <GraduationCap className="w-6 h-6" />,
    title: "Equal Opportunities",
    description:
      "Ensuring equal representation and opportunities for all genders.",
  },
  {
    icon: <Heart className="w-6 h-6" />,
    title: "Additional Services",
    description:
      "Offering winter warmers, transportation, and medical care at no cost.",
  },
  {
    icon: <Bus className="w-6 h-6" />,
    title: "Free Transportation",
    description:
      "Providing free transport to and from school for all students.",
  },
  {
    icon: <Stethoscope className="w-6 h-6" />,
    title: "Medical Care",
    description: "Ensuring students have access to necessary medical care.",
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: "Community Impact",
    description:
      "Nurturing future agents of positive change for their communities.",
  },
];

export default function ProgramsSection() {
  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8 bg-muted">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-base text-primary font-semibold tracking-wide uppercase"
          >
            Long-Term HBS Programmes
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-foreground sm:text-4xl"
          >
            Addressing Basic Rural Issues
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-4 max-w-2xl text-xl text-muted-foreground mx-auto"
          >
            Establishing essential programs at the Union Council level
            nationwide to drive sustainable rural development.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-8"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="">
              <h3 className="text-3xl font-bold mb-4">
                HBS Smart School System (DSSS)
              </h3>
              <div className="text-lg mb-6 text-muted-foreground">
                HBS is committed to providing quality education completely free
                of cost to disadvantaged children from underserved areas. Our
                schools focus on equal gender representation and aim to break
                the cycle of poverty through meaningful education.
              </div>
              <div className="flex flex-wrap items-center gap-2 mb-6 px-4">
                {dsssFeatures.map((feature) => (
                  <Badge key={feature.title} variant="" className="">
                    {feature.title}
                  </Badge>
                ))}
              </div>
              <Tabs defaultValue="mission" className="">
                <TabsList className="rounded-none">
                  <TabsTrigger className="rounded-none" value="mission">
                    Our Mission
                  </TabsTrigger>
                  <TabsTrigger className="rounded-none" value="approach">
                    Our Approach
                  </TabsTrigger>
                  <TabsTrigger className="rounded-none" value="impact">
                    Our Impact
                  </TabsTrigger>
                </TabsList>
                <TabsContent value="mission" className="p-4 bg-muted">
                  <p className="text-muted-foreground">
                    HBS's mission is to provide high-quality education to
                    children from underprivileged backgrounds, breaking the
                    cycle of poverty and creating opportunities for a better
                    future.
                  </p>
                </TabsContent>
                <TabsContent value="approach" className="p-4 bg-muted">
                  <p className="text-muted-foreground">
                    We focus on delivering comprehensive education programs,
                    ensuring equal gender representation, and providing
                    additional services such as transportation and medical care.
                  </p>
                </TabsContent>
                <TabsContent value="impact" className="p-4 bg-muted">
                  <p className="text-muted-foreground">
                    Through our efforts, we've seen improved literacy rates,
                    increased school attendance, and a growing number of
                    students pursuing higher education and better career
                    opportunities.
                  </p>
                </TabsContent>
              </Tabs>
              <div className="mt-6 flex justify-end gap-4">
                <Button asChild variant="outline" size="">
                  <Link to="/dsss">View Detail</Link>
                </Button>
                <Button asChild variant="" size="">
                  <Link to="/friends">Get Involved</Link>
                </Button>
              </div>
            </div>
            <div className="max-w-xl mx-auto">
              <img
                src="images/dsss.png"
                alt="HBS Smart School System"
                width={600}
                height={400}
                className="h-full w-full object-cover md:h-full"
              />
            </div>
          </div>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {programs.slice(1).map((program, index) => (
            <ProgrammesCard program={program} index={index} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
}
