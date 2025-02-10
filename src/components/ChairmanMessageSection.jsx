import { motion } from "framer-motion";
import { SectionLayout } from ".";

export default function ChairmanMessageSection() {
  return (
    <SectionLayout
      name="Chairman’s Message"
      title="Shaping the Future of Healthcare"
      description="At HBS, we empower future healthcare professionals with excellence in education, innovation, and service."
      className="text-center max-w-3xl mx-auto"
    >
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-lg text-muted-foreground"
      >
        It is a matter of great pride and privilege for me that you have applied
        for admission to the MBBS/BDS programme of HBS Medical and Dental
        College. It reminds me of the excitement and exhilaration I felt when I
        applied for my admission so many years ago. I believe that the
        profession you have chosen is for you only if you are a good human being
        full of empathy, love and care for people in pain. My team under my
        leadership will provide you with a holistic learning experience. While
        teaching the new horizons of medicine, we shall aim to polish your
        God-gifted abilities in the domains of knowledge, skill and attitude to
        serve mankind regardless of the patients’ socioeconomic status, gender,
        race or religion. In striving to travel beyond the boundaries of books
        and classrooms through the latest teaching strategy of “integrated
        system”, we have left no stone unturned to ensure that you receive a
        congenial and conducive learning environment. This will Inn Shaa Allah
        equip you the complex and ever changing world of heal delivery in the
        21st century and beyond. May Allah (SWT) with His Fazal and Rehmat of
        Hazrat Mohammad (PBUH) bless us with success in our mission to nurture
        doctors who make great selfless contributions to the service of mankind.
        I wish you a fulfilling and successful, rather joyful learning journey.
      </motion.p>

      <div className="mt-6">
        <h3 className="text-xl font-semibold text-primary">
          Prof. Dr. [Chairman’s Name]
        </h3>
        <p className="text-muted-foreground">Chairman, HBS</p>
      </div>
    </SectionLayout>
  );
}
