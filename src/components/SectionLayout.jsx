import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";

export default function SectionLayout({
  children,
  name,
  title,
  description,
  className = "",
  muted = false,
  fluid = false,
  href = null,
  btnText = "learn More",
  bg,
}) {
  return (
    <section className={`py-12 relative ${muted && "bg-muted"}`}>
      {bg && bg}
      <div
        className={`container ${
          !fluid && "max-w-7xl"
        } mx-auto px-4 sm:px-6 lg:px-8 relative`}
      >
        <div className="lg:text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-base text-primary font-semibold tracking-wide uppercase"
          >
            {name}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-foreground sm:text-4xl"
          >
            {title}
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-4 max-w-2xl text-xl text-muted-foreground lg:mx-auto"
          >
            {description}
          </motion.p>
        </div>

        <div className="mt-10">
          <div className={className}>{children}</div>
          {href && (
            <div className="mt-12 text-center">
              <Button asChild variant="secondary" size="lg">
                <Link to={href}>{btnText}</Link>
              </Button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
