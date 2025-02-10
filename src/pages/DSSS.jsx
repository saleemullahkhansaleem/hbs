import { SecondaryHeader } from "@/components";
import { motion } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Book,
  GraduationCap,
  Heart,
  Bus,
  Stethoscope,
  Users,
  CheckCircle,
} from "lucide-react";
import { Link } from "react-router-dom";

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

const additionalInfo = [
  "Focused on providing meaningful education of high quality, completely free of cost.",
  "Committed to breaking the chronic cycle of poverty for generations.",
  "Believes in providing opportunities traditionally reserved for the wealthy and privileged.",
  "Dedicated to all Pakistani children deprived of quality education.",
  "Managed by highly competent professionals from finance and industry backgrounds.",
  "Aims to foster a culture of goodwill and positive change.",
];

export default function DSSSPage() {
  return (
    <>
      <SecondaryHeader
        title="HBS Smart School System (DSSS)"
        description="Empowering underprivileged children through quality education and breaking the cycle of poverty."
      />

      {/* Detailed Information Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <p className="text-lg mb-6">
                HBS (Institutes of Healthcare & Allied Sciences) is a non-profit
                organization that has been focused since its inception on
                providing quality education to children from underserved and
                deprived communities. In partnership with its donors, HBS plans
                to build schools in different regions that have long been devoid
                of quality education facilities.
              </p>
              <p className="text-lg mb-6">
                HBS is committed to the education of all genders, with equal
                representation of girls and boys in classes. One of the main
                objectives of the Schools project is to allow girls from
                targeted areas to have an equal chance to realize their
                aspirations and dreams as their male counterparts.
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                {[
                  "Quality Education",
                  "Gender Equality",
                  "Poverty Alleviation",
                  "Community Development",
                ].map((tag) => (
                  <Badge key={tag} variant="secondary">
                    {tag}
                  </Badge>
                ))}
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-xl mx-auto"
            >
              <img
                src="images/dsss.png"
                alt="HBS Smart School System"
                width={600}
                height={400}
                className="h-full w-full object-cover md:h-full"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Detailed Information Section */}
      <section className="py-8 px-4 sm:px-6 lg:px-8 bg-muted overflow-hidden">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-sm mx-auto"
            >
              <img
                src="images/dsss2.png"
                alt="HBS Smart School System"
                width={600}
                height={400}
                className="h-full w-full object-cover md:h-full"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-muted p-6 rounded-lg"
            >
              <h3 className="text-3xl font-bold mb-6 text-primary">
                Additional Information
              </h3>
              <ul className="space-y-2">
                {additionalInfo.map((info, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-primary mr-2 flex-shrink-0 mt-1" />
                    <span>{info}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8" id="learn-more">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-3xl font-bold text-center mb-12"
          >
            Key Features of HBS Smart School System
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {dsssFeatures.map((feature, index) => (
              <AboutCard {...feature} index={index} key={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Mission and Vision Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted overflow-hidden">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="absolute inset-0 bg-primary/20 translate-x-2 translate-y-2 z-0"></div>
              <div className="relative bg-muted border border-primary/20 p-6">
                <h3 className="text-xl font-semibold mb-4">Our Mission</h3>
                <p className="text-muted-foreground">
                  HBS's mission is to provide high-quality education to children
                  from underprivileged backgrounds, breaking the cycle of
                  poverty and creating opportunities for a better future. We are
                  committed to ensuring that the children enrolled in our
                  schools receive an education that will allow them to choose
                  and aspire to any future career or life goals they may set for
                  themselves.
                </p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative h-full"
            >
              <div className="absolute inset-0 bg-primary/20 translate-x-2 translate-y-2 z-0"></div>
              <div className="relative bg-muted border border-primary/20 p-6 h-full">
                <h3 className="text-xl font-semibold mb-4">Our Vision</h3>
                <p className="text-muted-foreground">
                  HBS envisions a future where every child, regardless of their
                  background, has access to quality education. We believe that
                  through the provision of meaningful education and nurturing,
                  these children will one day become agents for positive and
                  sustainable development for their families, their communities,
                  and their country.
                </p>
              </div>
            </motion.div>
          </div>
          {/* <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-3xl font-bold text-center mb-12"
          >
            Our Mission and Vision
          </motion.h2>
          <Tabs defaultValue="mission" className="max-w-3xl mx-auto">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="mission">Our Mission</TabsTrigger>
              <TabsTrigger value="vision">Our Vision</TabsTrigger>
            </TabsList>
            <TabsContent
              value="mission"
              className="mt-6 p-6 bg-card rounded-lg shadow"
            >
              <h3 className="text-xl font-semibold mb-4">Our Mission</h3>
              <p className="text-muted-foreground">
                HBS's mission is to provide high-quality education to children
                from underprivileged backgrounds, breaking the cycle of poverty
                and creating opportunities for a better future. We are committed
                to ensuring that the children enrolled in our schools receive an
                education that will allow them to choose and aspire to any
                future career or life goals they may set for themselves.
              </p>
            </TabsContent>
            <TabsContent
              value="vision"
              className="mt-6 p-6 bg-card rounded-lg shadow"
            >
              <h3 className="text-xl font-semibold mb-4">Our Vision</h3>
              <p className="text-muted-foreground">
                HBS envisions a future where every child, regardless of their
                background, has access to quality education. We believe that
                through the provision of meaningful education and nurturing,
                these children will one day become agents for positive and
                sustainable development for their families, their communities,
                and their country.
              </p>
            </TabsContent>
          </Tabs> */}
        </div>
      </section>

      {/* Additional Services Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-3xl font-bold text-center mb-12"
          >
            Additional Services
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Winter Warmers",
                icon: <Heart className="w-12 h-12 text-primary" />,
              },
              {
                title: "Free Transportation",
                icon: <Bus className="w-12 h-12 text-primary" />,
              },
              {
                title: "Medical Care",
                icon: <Stethoscope className="w-12 h-12 text-primary" />,
              },
            ].map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="flex justify-center mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-muted-foreground">
                  Provided completely free of cost to all students
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact and Future Goals Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted overflow-hidden">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="lg:text-right"
            >
              <h3 className="text-2xl font-semibold mb-4">Current Impact</h3>
              <ul className="space-y-2">
                <li className="flex items-start lg:flex-row-reverse">
                  <CheckCircle className="w-5 h-5 text-primary mr-2 lg:ml-2 lg:mr-0 flex-shrink-0 mt-1" />
                  <span>Improved literacy rates in targeted communities</span>
                </li>
                <li className="flex items-start lg:flex-row-reverse">
                  <CheckCircle className="w-5 h-5 text-primary mr-2 lg:ml-2 lg:mr-0 flex-shrink-0 mt-1" />
                  <span>Increased school attendance and retention rates</span>
                </li>
                <li className="flex items-start lg:flex-row-reverse">
                  <CheckCircle className="w-5 h-5 text-primary mr-2 lg:ml-2 lg:mr-0 flex-shrink-0 mt-1" />
                  <span>Greater gender equality in education</span>
                </li>
                <li className="flex items-start lg:flex-row-reverse">
                  <CheckCircle className="w-5 h-5 text-primary mr-2 lg:ml-2 lg:mr-0 flex-shrink-0 mt-1" />
                  <span>Enhanced community engagement in education</span>
                </li>
              </ul>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h3 className="text-2xl font-semibold mb-4">Future Goals</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-primary mr-2 flex-shrink-0 mt-1" />
                  <span>
                    Expand DSSS to more underserved areas across Pakistan
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-primary mr-2 flex-shrink-0 mt-1" />
                  <span>Implement advanced technology in classrooms</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-primary mr-2 flex-shrink-0 mt-1" />
                  <span>
                    Develop partnerships with universities for higher education
                    opportunities
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-primary mr-2 flex-shrink-0 mt-1" />
                  <span>
                    Establish vocational training programs for older students
                  </span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-3xl font-bold mb-6"
          >
            Join Us in Making a Difference
          </motion.h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Your support can help us provide quality education and a brighter
            future for underprivileged children across Pakistan.
          </p>
          <div className="flex justify-center space-x-4">
            <Button asChild size="lg" variant="">
              <Link to="/volunteer">Get Innvolved</Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link to="/donate">Donate Now</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}

export function AboutCard({ title, description, icon, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: index * 0.1 }}
      className="relative border-l-4 border-primary bg-primary/5 p-6"
    >
      <div className="absolute -inset-2 bg-gradient-to-br from-primary/20 to-primary/5 blur-xl"></div>
      <dt>
        <div className="flex items-center justify-center h-12 w-12 rounded-md bg-primary text-white">
          {icon}
        </div>
        <p className="mt-4 text-lg leading-6 font-medium text-foreground">
          {title}
        </p>
      </dt>
      <dd className="mt-2 text-base text-muted-foreground">{description}</dd>
    </motion.div>
  );
}
