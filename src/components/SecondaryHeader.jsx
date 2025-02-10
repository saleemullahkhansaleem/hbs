import { motion } from "framer-motion";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

export default function SecondaryHeader({
  title = "No Title",
  description,
  ...props
}) {
  return (
    <section
      {...props}
      className="relative h-72 bg-gradient-to-b from-primary to-background overflow-hidden"
    >
      <motion.div
        className="absolute inset-0 z-0"
        initial={{ scale: 1.2 }}
        animate={{ scale: 1 }}
        transition={{
          duration: 10,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
        }}
      >
        <img
          src="/images/about/world1.webp"
          alt="HBS Impact"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent"></div>
      </motion.div>
      <div className="relative z-10 h-full flex flex-col justify-center items-center tex text-center px-4">
        <motion.h1 className="text-3xl md:text-5xl font-bold mb-4" {...fadeIn}>
          {title}
        </motion.h1>
        {description && (
          <motion.p
            className="md:text-xl max-w-2xl text-muted-foreground"
            {...fadeIn}
            transition={{ delay: 0.2 }}
          >
            {description}
          </motion.p>
        )}
      </div>
    </section>
  );
}
