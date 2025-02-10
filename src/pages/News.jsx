import { SecondaryHeader } from "@/components";
import { motion } from "framer-motion";

export default function News() {
  return (
    <>
      <SecondaryHeader
        title="News and Events"
        description="Stay updated with the latest initiatives, success stories, and impactful events from HBS, highlighting our efforts in economic growth, environmental sustainability, and community development."
      />

      <section className="py-16 px-4 md:px-0">
        <div className="max-w-7xl mx-auto">
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            {newsItems.map((news, index) => (
              <NewsCard news={news} index={index} key={index} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export function NewsCard({ news, index }) {
  return (
    <motion.div
      key={news.title}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="relative shadow-lg bg-primary/5 backdrop-blur"
    >
      <img
        src={news.image || "https://placehold.co/600x400"}
        alt={news.title}
        className="w-full object-cover aspect-[3/2]"
      />
      <div className="p-6">
        <p className="-mt-14 z-10 relative text-sm text-primary-foreground font-semibold bg-primary p-4 max-w-max border-4 border-background">
          {news.date}
        </p>
        <h3 className="text-lg leading-6 font-medium text-foreground mt-2">
          {news.title}
        </h3>
        <p className="mt-3 text-base text-muted-foreground">
          {news.description}
        </p>
      </div>
    </motion.div>
  );
}

export const newsItems = [
  {
    title: "Signing Ceremony of MOU Between HBS and GBRSP",
    date: "January 25, 2023",
    description:
      "HBS signed a Memorandum of Understanding (MOU) with GBRSP to collaborate on sustainable development projects in rural areas.",
    image: "images/news/signing-mou.webp",
  },
  {
    title: "Establishment of Stitching Centre for Women Development",
    // date: "August 20, 2024",
    description:
      "HBS established a stitching centre at the Women Development and Computer Literacy Centre in Barakahu, Islamabad, empowering women with vocational skills.",
    image: "images/news/stitching-centre.webp",
  },
  {
    title: "Computer Lab Established at Ahmadi Banda, Karak",
    date: "July 10, 2024",
    description:
      "A new computer lab was set up at Ahmadi Banda, Karak, to enhance digital literacy among students in rural areas.",
    image: "images/news/computer-lab-karak.webp",
  },
  {
    title: "Flood Relief Campaign to Support Affected Communities",
    date: "September 15, 2023",
    description:
      "HBS launched a flood relief campaign to provide essential aid, including food, medical supplies, and shelter, to flood-affected communities.",
    image: "images/news/flood-relief.webp",
  },
  {
    title: "Awareness Campaign Against Dengue Outbreak",
    date: "May 30, 2023",
    description:
      "HBS organized an awareness campaign to educate communities on preventive measures against the dengue outbreak.",
    image: "images/news/dengue-awareness.webp",
  },
  {
    title: "COVID-19 Awareness and Prevention Campaign",
    date: "Feb 2019",
    description:
      "A public awareness campaign was conducted to inform communities about COVID-19 prevention and safety protocols.",
    image: "images/news/covid-awareness.webp",
  },
];
