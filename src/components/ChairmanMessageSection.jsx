import { motion } from "framer-motion";
import { SectionLayout } from ".";
import { Button } from "@/components/ui/button";

export default function ChairmanMessageSection() {
  return (
    <SectionLayout
      name="Chairman's Message"
      title="Shaping the Future of Healthcare"
      description="At HBS, we empower future healthcare professionals with excellence in education, innovation, and service."
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="space-y-6 relative mx-auto"
        >
          <div className="absolute -inset-6 bg-primary/15 blur-3xl z-0"></div>
          <img
            src="/images/about/chairman-profile.png"
            alt="Dr. Mohammad Riaz Shahbaz Janjua"
            width={340}
            height={380}
            className="shadow-lg h-[380px] object-cover object-top bg-primary/5 mx-auto p-4 rounded-xl relative"
          />
          <div className="text-center">
            <h3 className="text-2xl font-semibold text-primary">
              Dr. Mohammad Riaz Shahbaz Janjua
            </h3>
            <p className="text-muted-foreground">
              Chairman, HBS
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <blockquote className="text-lg text-muted-foreground italic border-l-4 border-primary pl-4">
            "It is a matter of great pride and privilege for me that you have
            applied for admission to the MBBS/BDS programme of HBS Medical and
            Dental College. It reminds me of the excitement and exhilaration I
            felt when I applied for my admission so many years ago."
          </blockquote>
          <p className="text-muted-foreground">
            I believe that the profession you have chosen is for you only if you
            are a good human being full of empathy, love and care for people in
            pain. My team under my leadership will provide you with a holistic
            learning experience.
          </p>
          <p className="text-muted-foreground">
            While teaching the new horizons of medicine, we shall aim to polish
            your God-gifted abilities in the domains of knowledge, skill and
            attitude to serve mankind regardless of the patients' socioeconomic
            status, gender, race or religion.
          </p>
          <Button variant="outline" className="mt-4">
            Read Full Message
          </Button>
        </motion.div>
      </div>
    </SectionLayout>
  );
}
