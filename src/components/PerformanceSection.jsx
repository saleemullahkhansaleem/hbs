"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  Users,
  BookOpen,
  TreeDeciduous,
  Award,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Link } from "react-router-dom";

const performanceData = [
  {
    title: "Digital Skills Center",
    description: "Empowering youth with 21st-century skills",
    icon: <BookOpen className="h-8 w-8 text-primary" />,
    stat: "500+",
    statDescription: "Students trained",
  },
  {
    title: "Community Development",
    description: "Building stronger, connected communities",
    icon: <Users className="h-8 w-8 text-primary" />,
    stat: "20+",
    statDescription: "Workshops conducted",
  },
  {
    title: "Environmental Initiatives",
    description: "Creating a greener future",
    icon: <TreeDeciduous className="h-8 w-8 text-primary" />,
    stat: "5000+",
    statDescription: "Trees planted",
  },
  {
    title: "Youth Leadership",
    description: "Fostering tomorrow's leaders",
    icon: <Award className="h-8 w-8 text-primary" />,
    stat: "100+",
    statDescription: "Youth leaders trained",
  },
];

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

export default function Performance() {
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-base text-primary font-semibold tracking-wide uppercase"
          >
            Newsletter (July - Sep 2023)
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-foreground sm:text-4xl"
          >
            HBS Performance
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-4 max-w-2xl text-xl text-muted-foreground lg:mx-auto"
          >
            Transforming lives, communities, and futures through our impactful
            initiatives.
          </motion.p>
        </div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-10 mb-12"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
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
              <div className="h-full flex flex-col bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/10">
                <CardHeader>
                  <div className="mb-2">{item.icon}</div>
                  <CardTitle>{item.title}</CardTitle>
                  <CardDescription>{item.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow flex items-center justify-center">
                  <div className="text-center">
                    <p className="text-4xl font-bold text-primary">
                      {item.stat}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {item.statDescription}
                    </p>
                  </div>
                </CardContent>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div>
            <h3 className="text-2xl font-bold mb-4">Our Impact</h3>
            <p className="text-muted-foreground mb-6">
              HBS's holistic approach focuses on education, community
              leadership, environmental initiatives, and career growth. Our
              dedicated team's efforts have been instrumental in nurturing
              talent and driving positive change.
            </p>
            <ul className="space-y-2 mb-6">
              <li className="flex items-center">
                <ArrowRight className="mr-2 h-4 w-4 text-primary" />
                <span>Improved literacy rates in targeted communities</span>
              </li>
              <li className="flex items-center">
                <ArrowRight className="mr-2 h-4 w-4 text-primary" />
                <span>Increased environmental awareness and action</span>
              </li>
              <li className="flex items-center">
                <ArrowRight className="mr-2 h-4 w-4 text-primary" />
                <span>Enhanced career prospects for underprivileged youth</span>
              </li>
            </ul>
            <Button asChild>
              <Link to="/performance">View Detailed Performance</Link>
            </Button>
          </div>
          <div className="relative h-[400px] p-4 bg-primary/5">
            <div className="absolute -inset-4 bg-primary/20 z-0 blur-2xl"></div>
            <img
              src="/images/performance/features.webp"
              alt="HBS Impact"
              className="rounded-lg object-cover w-full h-full relative"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
