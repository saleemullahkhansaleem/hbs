import { motion } from "framer-motion";
import { contactData } from "@/pages/Home";
import { ContactForm } from ".";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";

export default function ContactSection() {
  return (
    <section className="bg-background py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
          <div className="">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-base text-primary font-semibold tracking-wide uppercase"
            >
              Get in Touch
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-foreground sm:text-4xl"
            >
              We’d Love to Hear from You!
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="mt-4 max-w-2xl text-xl text-muted-foreground mx-auto"
            >
              Have questions or need assistance? Reach out to us and our team
              will get back to you as soon as possible.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
              className="mt-6 flex justify-start gap-4"
            >
              <Button asChild variant="outline" size="">
                <Link to="/donate">Donate</Link>
              </Button>
              <Button asChild variant="secondary" size="">
                <Link to="/friends">Get Involved</Link>
              </Button>
              <Button asChild variant="" size="">
                <Link to="/contact">Send Message</Link>
              </Button>
            </motion.div>
          </div>

          <motion.div
            className="mt-4 text-base text-muted-foreground  space-y-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.2,
                },
              },
            }}
          >
            {contactData.map((item, index) => (
              <motion.div
                key={index}
                className="relative group flex items-center gap-4"
                viewport={{ once: true }}
                variants={{
                  hidden: { opacity: 0, x: 20 },
                  visible: { opacity: 1, x: 0 },
                }}
              >
                {item.link && (
                  <a href={item.link} className="absolute inset-0"></a>
                )}
                <div className="w-12 h-12 rounded-full flex items-center justify-center bg-primary/15">
                  <item.icon className="h-4 w-4 text-primary" />
                </div>
                <div className="flex-1 text-start">
                  <h3 className="font-semibold">{item.title}</h3>
                  {item.link ? (
                    <a
                      href={item.link}
                      className="text-muted-foreground text-sm group-hover:underline group-hover:text-primary"
                    >
                      {item.content}
                    </a>
                  ) : (
                    <p className="text-muted-foreground text-sm group-hover:text-foreground">
                      {item.content}
                    </p>
                  )}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
