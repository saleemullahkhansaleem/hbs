import { motion } from "framer-motion";
import { SectionLayout } from ".";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LinkedinIcon, TwitterIcon } from "lucide-react";
import { FaEnvelope, FaLinkedin, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function BoardOfDirectorsSection() {
  return (
    <SectionLayout
      name="Leadership"
      title="Board of Directors"
      description="Meet the visionaries guiding HBS towards excellence in medical education and healthcare."
      className="py-8"
      muted
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {directors.map((director, index) => (
          //   <motion.div
          //     key={index}
          //     initial={{ opacity: 0, y: 20 }}
          //     whileInView={{ opacity: 1, y: 0 }}
          //     transition={{ duration: 0.5, delay: index * 0.1 }}
          //     viewport={{ once: true }}
          //   >
          //     <Card className="overflow-hidden group">
          //       <div className="relative h-64 overflow-hidden">
          //         <img
          //           src={director.image || "/placeholder.svg"}
          //           alt={director.name}
          //           className="transition-transform duration-300 group-hover:scale-110 object-cover"
          //         />
          //         <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          //       </div>
          //       <CardHeader className="relative z-10 -mt-20">
          //         <CardTitle className="text-2xl font-bold text-white">
          //           {director.name}
          //         </CardTitle>
          //       </CardHeader>
          //       <CardContent>
          //         <p className="text-primary font-semibold mb-4">
          //           {director.position}
          //         </p>
          //         <p className="text-muted-foreground">{director.bio}</p>
          //         <div className="mt-4 flex space-x-4">
          //           <a
          //             href={director.linkedin}
          //             target="_blank"
          //             rel="noopener noreferrer"
          //             className="text-muted-foreground hover:text-primary transition-colors"
          //           >
          //             <LinkedinIcon size={20} />
          //           </a>
          //           <a
          //             href={director.twitter}
          //             target="_blank"
          //             rel="noopener noreferrer"
          //             className="text-muted-foreground hover:text-primary transition-colors"
          //           >
          //             <TwitterIcon size={20} />
          //           </a>
          //         </div>
          //       </CardContent>
          //     </Card>
          //   </motion.div>
          <ExpertCard key={director.name} {...director} />
        ))}
      </div>
    </SectionLayout>
  );
}

const directors = [
  {
    name: "Dr. M. Riaz Shahbaz Janjua",
    position: "Chairman / Director",
    image: "/images/user.webp",
    bio: "Dr. Janjua brings decades of medical expertise and visionary leadership to HBS, driving our commitment to excellence in healthcare education.",
    linkedin: "#",
    twitter: "#",
  },
  {
    name: "Raja Sarfraz Akram",
    position: "Director",
    image: "/images/user.webp",
    bio: "With a strong background in administration and healthcare management, Raja Akram ensures HBS operates at the highest standards of efficiency and quality.",
    linkedin: "#",
    twitter: "#",
    mail: "#",
  },
  {
    name: "Shahzad Ali Janjua",
    position: "Director",
    image: "/images/user.webp",
    bio: "Shahzad Ali Janjua's innovative approach to medical education helps keep HBS at the forefront of healthcare training and technology.",
    linkedin: "#",
    twitter: "#",
    mail: "#",
  },
];

export function ExpertCard({
  name,
  position,
  image,
  bio,
  linkedin,
  twitter,
  mail,
}) {
  return (
    <Card className="relative bg-background shadow-none border-none group mt-20">
      <div className="absolute right-16 -top-20 p-3 rounded-b-[2rem] bg-muted">
        <span className="absolute left-full top-20 w-8 h-8 bg-muted rounded-full rounded-tl-none"></span>
        <span className="absolute left-full top-20 w-8 h-8 bg-background rounded-full"></span>
        <span className="absolute right-full top-20 w-8 h-8 bg-muted rounded-full rounded-tr-none"></span>
        <span className="absolute right-full top-20 w-8 h-8 bg-background rounded-full"></span>
        <div className="bg-primary/10 p-2 rounded-3xl">
          <img
            src={image}
            alt={name}
            className="w-32 aspect-square object-cover rounded-2xl"
          />
        </div>
      </div>
      <CardContent className="p-6">
        <h3 className="text-xl font-semibold text-foreground mt-16">{name}</h3>
        <p className="text-primary font-medium text-sm mb-4">{position}</p>
        <p className="text-muted-foreground text-sm mb-14">{bio}</p>
        {/* <div className="mb-14">
          <h4 className="font-semibold mb-2">Areas of Expertise:</h4>
          <div className="flex flex-wrap gap-2">
            {expertise.map((item, index) => (
              <Badge key={index} variant="secondary" className="text-xs">
                {item}
              </Badge>
            ))}
          </div>
        </div> */}
      </CardContent>
      {/* <Badge variant="outline" className="absolute bottom-4 right-4">
        Exp: {experience} Years
      </Badge> */}

      <div className="absolute left-0 bottom-0 pt-3 pr-3 rounded-tr-[2rem] bg-muted">
        <span className="absolute left-full bottom-0 w-8 h-8 bg-muted rounded-full rounded-bl-none"></span>
        <span className="absolute left-full bottom-0 w-8 h-8 bg-background rounded-full"></span>
        <span className="absolute left-0 bottom-full w-8 h-8 bg-muted rounded-full rounded-bl-none"></span>
        <span className="absolute left-0 bottom-full w-8 h-8 bg-background rounded-full"></span>
        <div className="flex justify-center gap-4">
          <Link
            to={linkedin}
            target="_blank"
            className="rounded-full hover:text-primary p-3 bg-primary/10"
          >
            <FaLinkedin className="text-lg" />
          </Link>
          <Link
            to={twitter}
            target="_blank"
            className="rounded-full hover:text-primary p-3 bg-primary/10"
          >
            <FaTwitter className="text-lg" />
          </Link>
          <Link
            to={mail}
            className="rounded-full hover:text-primary p-3 bg-primary/10"
          >
            <FaEnvelope className="text-lg" />
          </Link>
        </div>
      </div>
    </Card>
  );
}
