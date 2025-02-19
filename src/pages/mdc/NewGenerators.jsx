import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export default function Generators() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="space-y-8"
    >
      <motion.h1
        className="text-3xl md:text-5xl font-bold mb-6 text-primary"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        New Generators
      </motion.h1>

      <Card className="overflow-hidden">
        <CardHeader className="bg-gradient-to-r from-primary/10 to-secondary/10 p-6">
          <CardTitle className="text-2xl font-bold">
            Diesel Generators
          </CardTitle>
        </CardHeader>
        <CardContent className="p-6 space-y-4">
          <p className="text-lg">
            DAMAAN provides standard and customized diesel generators in
            Pakistan. Our diesel generators are ideal for baseload, prime, or
            emergency standby applications. We have multiple generators up to
            1MW in ready stock. Larger ratings can be imported on a priority
            basis from our principals.
          </p>
          <p className="text-lg">
            We only deal in top tier, genuine products with an international
            reputation for reliability and durability. All of our major products
            and components are manufactured either in Europe or North America
            and are directly procured from the Principals. If you are looking to
            install reliable and rugged industrial diesel generators, contact us
            today.
          </p>
        </CardContent>
      </Card>

      <motion.h2
        className="text-3xl font-bold mt-12 mb-6"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        Our Partners of Gas and Diesel Generators
      </motion.h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {partners.map((partner, index) => (
          <motion.div
            key={partner.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 * index }}
          >
            <Card className="h-full flex flex-col justify-center items-center overflow-hidden">
              <img
                src={partner.image}
                alt={`${partner.name} logo`}
                width={150}
                height={75}
                className="w-full aspect-square object-cover"
              />
              <p className="text-center font-medium p-4">{partner.name}</p>
            </Card>
          </motion.div>
        ))}
      </div>

      <Card className="mt-12">
        <CardHeader className="bg-gradient-to-r from-primary/10 to-secondary/10 p-6">
          <CardTitle className="text-2xl font-bold">
            Benefits of Our Partnerships
          </CardTitle>
        </CardHeader>
        <CardContent className="p-6">
          <ul className="list-disc pl-6 space-y-2">
            <li>Priority technical and warranty support</li>
            <li>Quick access to product and spares inventory</li>
            <li>
              Regular product training sessions directly from the manufacturer
              ensuring that our technical and sales teams are fully equipped to
              address all your technical and commercial questions
            </li>
            <li>
              Extended warranty support up to 10,000 hours for selected
              applications
            </li>
          </ul>
        </CardContent>
      </Card>

      <div className="grid md:grid-cols-2 gap-8 mt-12">
        {generators.map((generator, index) => (
          <motion.div
            key={generator.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 * index }}
          >
            <Card className="h-full flex flex-col overflow-hidden">
              <img
                src={generator.imageUrl}
                alt={`${generator.title} image`}
                width={500}
                height={300}
                className="w-full aspect-[3/2] object-cover"
              />
              <CardHeader className="bg-gradient-to-r from-primary/10 to-secondary/10 p-6">
                <CardTitle className="text-xl font-bold">
                  {generator.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6 flex-grow">
                <ul className="list-disc pl-6 space-y-2">
                  {generator.features.map((feature, i) => (
                    <li key={i}>{feature}</li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full" asChild>
                  <Link to="/contact-us">Request a Quote</Link>
                </Button>
              </CardFooter>
            </Card>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

const partners = [
  { name: "Cummins", image: "/partners/cummins.webp" },
  { name: "Ausonia", image: "/partners/ausinia.webp" },
  { name: "Perkins", image: "/partners/perkins.webp" },
  { name: "Yanmar", image: "/partners/yanmar.webp" },
  { name: "Mecc Alte", image: "/partners/mecc-alte.webp" },
  { name: "Stamford", image: "/partners/stamford.webp" },
  { name: "Deep Sea Electronics", image: "/partners/dse.webp" },
];

const generators = [
  {
    title: "Cummins Diesel Generators",
    imageUrl: "/generators/cummins-diesel-generators.webp",
    features: [
      "30KVA – 2500KVA",
      "UK manufacturing",
      "Rugged, Durable, Reliable",
      "2 year warranty",
      "Low fuel consumption",
    ],
  },
  {
    title: "Ausonia Diesel Generators",
    imageUrl: "/generators/ausonia-diesel-generators.webp",
    features: [
      "10KVA – 2000KVA",
      "Italy manufacturing",
      "2 year warranty",
      "Low cost of ownership",
      "Low fuel consumption",
    ],
  },
  {
    title: "Perkins Diesel Generators",
    imageUrl: "/generators/perkins-diesel-generators.webp",
    features: [
      "13KVA – 1500KVA",
      "UK manufacturing",
      "Reliable and robust",
      "Easy to maintain",
      "Extended warranty period",
    ],
  },
  {
    title: "MAN Gas Generators",
    imageUrl: "/generators/man-gas-generators.webp",
    features: [
      "50KW – 500KW",
      "Extremely rugged German construction",
      "Lowest cost of ownership",
      "2 year, unlimited hours warranty period",
      "Low gas consumption",
    ],
  },
];
