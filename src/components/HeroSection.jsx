import React, { useState, useEffect, useRef } from "react";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";
import { Badge } from "./ui/badge";
import { motion, AnimatePresence } from "framer-motion";
import { FaPause, FaPlay } from "react-icons/fa";

const sliderData = [
  {
    id: 1,
    name: "MBBS Admissions",
    title: "Centralized Admission Through SZABMU, Islamabad",
    description:
      "In accordance with PM&DC regulations, HBS Medical College follows a centralized admission policy for new MBBS students, ensuring transparency and merit-based selection.",
    imageUrl: "/images/courses/mbbs.webp",
    href: "/colleges/mdc/admissions",
  },
  {
    id: 2,
    name: "BDS Admissions",
    title: "Centralized Admission Through SZABMU, Islamabad",
    description:
      "Following PM&DC regulations, HBS Medical College implements a centralized admission policy for new BDS students, providing top-tier dental education.",
    imageUrl: "/images/courses/bds.webp",
    href: "/colleges/mdc/admissions",
  },
  {
    id: 3,
    name: "College of Rehabilitation Sciences",
    title: "Empowering Future Healthcare Professionals",
    description:
      "Offering Doctor of Physiotherapy (DPT), BS in Medical Laboratory Technology, Dental Hygiene, Radiology & Imaging, Anesthesia, and Optometry Technology. Approved by HEC and affiliated with SZABMU.",
    imageUrl: "/images/courses/rehabilitation.webp",
    href: "/colleges/ahs",
  },
  {
    id: 4,
    name: "College of Nursing",
    title: "Shaping Future Nursing Leaders",
    description:
      "Programs include B.Sc Nursing, General Nursing, and Assistant Nursing (under approval process). Committed to producing skilled and compassionate healthcare professionals.",
    imageUrl: "/images/courses/nursing.webp",
    href: "/colleges/nursing",
  },
  {
    id: 5,
    name: "College of Paramedics",
    title: "Specialized Paramedic Training Programs",
    description:
      "Offering diplomas in Laboratory Technology, Radiography, Dialysis, Dental Technology, OT Technology, and Dental Hygiene. Approved by FBISE for professional excellence.",
    imageUrl: "/images/courses/paramedics.webp",
    href: "/colleges/paramedics",
  },
  {
    id: 6,
    name: "College of Pharmacy",
    title: "Pharm-D - Leading the Future of Pharmaceutical Sciences",
    description:
      "A five-year Pharm-D program recognized by the Pharmacy Council of Pakistan, preparing students for diverse careers in healthcare and the pharmaceutical industry.",
    imageUrl: "/images/courses/pharmacy.webp",
    href: "/colleges/pharmacy",
  },
  {
    id: 7,
    name: "AHS BS Programs",
    title:
      "Allied Health Sciences BS Programs for Future Healthcare Professionals",
    description:
      "Explore our Allied Health Sciences BS programs, designed to equip students with essential skills and knowledge in medical technology, physiotherapy, radiology, and more, preparing them for a successful career in healthcare.",
    imageUrl: "/images/courses/ahs-bs-programs.webp",
    href: "/colleges/ahs/academics",
  },
];

const HeroSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isAuto, setIsAuto] = useState(true);
  const intervalRef = useRef(null);

  useEffect(() => {
    if (isPlaying) startAutoSlide();
    return () => stopAutoSlide();
  }, [isPlaying]);

  const startAutoSlide = () => {
    stopAutoSlide();
    setIsPlaying(true);
    intervalRef.current = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % sliderData.length);
    }, 5000);
  };

  const stopAutoSlide = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
      setIsPlaying(false);
    }
  };

  const togglePlayPause = () => {
    setIsPlaying((prev) => !prev);
    setIsAuto((prev) => !prev);
  };

  const selectedSlide = sliderData[currentIndex];

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      id="home"
      className="relative min-h-[calc(100vh-62px)] overflow-hidden bg-background text-foreground p-4 z-10 flex items-center dark"
    >
      <button onClick={togglePlayPause} className="absolute top-4 right-4">
        {isPlaying ? (
          <FaPause
            size={24}
            className="text-foreground opacity-30 hover:opacity-100 hover:scale-110 transition-all duration-150"
            title="Stop Auto Play"
          />
        ) : (
          <FaPlay
            size={24}
            className="text-foreground opacity-30 hover:opacity-100 hover:scale-110 transition-all duration-150"
            title="Start Auto Play"
          />
        )}
      </button>
      <AnimatePresence mode="wait">
        <motion.div
          key={selectedSlide.id}
          initial={{ opacity: 0, scale: 1.2 }}
          animate={{ opacity: 0.2, scale: 1 }}
          exit={{ opacity: 0, scale: 1.1 }}
          transition={{ duration: 0.5 }}
          className="absolute inset-0 -z-10"
        >
          <img
            src={selectedSlide.imageUrl || "./hero-banner.webp"}
            alt="Hero Banner"
            className="w-full h-full object-cover"
          />
        </motion.div>
      </AnimatePresence>
      <div className="container m-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center h-full relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedSlide.id}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.5 }}
            >
              <Badge
                className="mb-8 py-1 uppercase px-4 text-sm text-primary"
                variant="secondary"
              >
                {selectedSlide.name}
              </Badge>
            </motion.div>
          </AnimatePresence>
          <AnimatePresence mode="wait">
            <motion.h1
              key={selectedSlide.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="text-3xl sm:text-4xl font-bold leading-tight text-foreground mb-4"
            >
              {selectedSlide.title}
            </motion.h1>
          </AnimatePresence>
          <AnimatePresence mode="wait">
            <motion.p
              key={selectedSlide.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="sm:text-lg text-muted-foreground mb-8"
            >
              {selectedSlide.description}
            </motion.p>
          </AnimatePresence>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex gap-4"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedSlide.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <Button
                  className="hover:scale-105"
                  variant=""
                  size="lg"
                  asChild
                >
                  <Link to={selectedSlide.href}>Learn More</Link>
                </Button>
              </motion.div>
            </AnimatePresence>
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedSlide.id}
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <Button
                  className="hover:scale-105"
                  variant="outline"
                  size="lg"
                  asChild
                >
                  <Link to="/apply">Apply Online</Link>
                </Button>
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </motion.div>
        <div className="grid grid-cols-3 gap-2 h-auto -rotate-45 max-w-md m-auto">
          {sliderData
            .flatMap((curr, index) =>
              [1, 4].includes(index) ? [curr, null] : [curr]
            )
            .map((slide, index) =>
              slide ? (
                <AnimatePresence key={index} mode="wait">
                  <motion.div
                    key={selectedSlide.id}
                    initial={{ opacity: 0, scale: 0.1, rotate: 180 }}
                    animate={{ opacity: 1, scale: 1, rotate: 0 }}
                    exit={{ opacity: 0, scale: 1.5, rotate: -90 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    className={`flex items-center justify-center w-full aspect-square overflow-hidden border border-border transition duration-300 ${
                      slide.name === selectedSlide.name
                        ? "z-10 scale-105 border-foreground rotate-1 shadow-2xl"
                        : "hover:z-10 hover:scale-105 hover:border-foreground hover:rotate-1 hover:shadow-2xl"
                    } rounded-3xl relative group`}
                  >
                    <div
                      onMouseEnter={stopAutoSlide} // Pause on hover
                      onMouseLeave={() => isAuto && startAutoSlide()} // Resume if playing
                      onClick={(e) => setCurrentIndex(slide.id - 1)}
                      className={`absolute inset-0 flex items-center justify-center cursor-pointer text-sm md:text-xl text-center font-bold z-10 bg-background/50 scale-0 ${
                        slide.name === selectedSlide.name
                          ? "scale-100"
                          : "group-hover:scale-100"
                      } transition-transform duration-300 rounded`}
                    >
                      <p className="rotate-45">{slide.name}</p>
                    </div>

                    <img
                      src={slide.imageUrl || "/placeholder.svg"}
                      alt={`Service Image ${slide.id}`}
                      className="min-w-[150%] h-[150%] aspect-square object-cover rounded-radius shadow-2xl rotate-45"
                    />
                  </motion.div>
                </AnimatePresence>
              ) : (
                <div key={index}></div>
              )
            )}
        </div>
      </div>
    </motion.section>
  );
};

export default HeroSection;
