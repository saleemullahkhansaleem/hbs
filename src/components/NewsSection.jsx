import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { NewsCard, newsItems } from "@/pages/News";

export default function NewsSection() {
  return (
    <section className="py-12 relative bg-background">
      <img
        src="images/world.webp"
        alt="background image"
        className="absolute inset-0 object-cover opacity-15 w-full h-full z-0"
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid sm:grid-cols-2 gap-8">
          <div className="">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-base text-primary font-semibold tracking-wide uppercase"
            >
              Latest News
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-foreground sm:text-4xl"
            >
              Stay Updated with HBS
            </motion.p>
          </div>
          <div className="mt-10 sm:text-end">
            <Button asChild variant="secondary" size="lg">
              <Link to="/news">See All News</Link>
            </Button>
          </div>
        </div>

        <div className="mt-10">
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            {newsItems.slice(0, 3).map((news, index) => (
              <NewsCard news={news} index={index} key={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
