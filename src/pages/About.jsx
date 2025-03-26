// import { SecondaryHeader } from "@/components";
// import { motion } from "framer-motion";

// const fadeIn = {
//   initial: { opacity: 0, y: 20 },
//   animate: { opacity: 1, y: 0 },
//   transition: { duration: 0.6 },
// };

// export default function About() {
//   return (
//     <>
//       <SecondaryHeader
//         title="About HBS"
//         description="Empowering communities through sustainable economic growth and environmental development, fostering a brighter future for all."
//       />

//       {/* Mission and Vision */}
//       <section className="py-16 px-4 md:px-0">
//         <div className="max-w-6xl mx-auto">
//           <div className="grid md:grid-cols-2 gap-12">
//             <motion.div
//               className="relative bg-primary/5"
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6 }}
//             >
//               <div className="absolute -inset-4 bg-gradient-to-br from-primary/5 via-primary/15 to-primary/10 blur-2xl"></div>
//               <div className="relative">
//                 <img
//                   src="/images/about/about-bg.webp"
//                   alt="Our Vision"
//                   className="object-cover h-64 w-full"
//                 />
//                 <div className="p-6 border-t-4 border-primary">
//                   <h2 className="text-3xl font-bold mb-4 text-primary">
//                     Our Vision
//                   </h2>
//                   <p className="text-muted-foreground">
//                     A clean, green and well protected environment supporting a
//                     sustainable society and economy.
//                   </p>
//                 </div>
//               </div>
//             </motion.div>
//             <motion.div
//               className="bg-primary/5 relative"
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6, delay: 0.2 }}
//             >
//               <div className="absolute -inset-4 bg-gradient-to-br from-primary/5 via-primary/15 to-primary/10 blur-2xl"></div>
//               <div className="relative">
//                 <img
//                   src="/images/about/image.webp"
//                   alt="Our Mission"
//                   className="object-cover h-64 w-full"
//                 />
//                 <div className="p-6 border-t-4 border-primary">
//                   <h2 className="text-3xl font-bold mb-4 text-primary">
//                     Our Mission
//                   </h2>
//                   <p className="text-muted-foreground">
//                     To alleviate poverty and improve the living standards of the
//                     people through economic and social development, sustainable
//                     livelihood, advocacy, local support organization, school &
//                     health management committees, and to promote equitable,
//                     sustainable and integrated economic development by
//                     protecting and improving the environment as a valuable asset
//                     for the people of Pakistan.
//                   </p>
//                 </div>
//               </div>
//             </motion.div>
//           </div>
//         </div>
//       </section>

//       {/* About HBS */}
//       <section className="py-16 bg-gradient-to-br from-muted via-primary/15 to-primary/5">
//         <div className="max-w-4xl mx-auto px-4 md:px-0">
//           <motion.h2
//             className="text-3xl font-bold mb-8 text-center text-primary"
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6 }}
//           >
//             Who We Are
//           </motion.h2>
//           <motion.div
//             className=""
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6, delay: 0.2 }}
//           >
//             <p className="text-muted-foreground mb-4">
//               Institutes of Healthcare & Allied Sciences (HBS) has been
//               established under Section 42 of the Companies Ordinance 1984, as
//               an NGO based in Islamabad with a mandate to work throughout
//               Pakistan.
//             </p>
//             <p className="text-muted-foreground mb-4">
//               Our primary objective is to alleviate poverty and improve the
//               living standards of people through economic and social
//               development, sustainable livelihoods, advocacy, local support
//               organization, and school & health management committees.
//             </p>
//             <p className="text-muted-foreground">
//               We aim to play a positive role in reducing poverty and
//               inequalities in Pakistan through social and economic measures,
//               irrespective of class, color, creed, or ethnicity. HBS strongly
//               believes in transparency and bringing corporate culture to the
//               non-profit sector.
//             </p>
//           </motion.div>
//         </div>
//       </section>

//       {/* Aims and Objectives */}
//       <section className="py-16">
//         <div className="max-w-6xl mx-auto px-4 md:px-0">
//           <motion.h2
//             className="text-3xl font-bold mb-16 text-center text-primary"
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6 }}
//           >
//             Aims and Objectives
//           </motion.h2>
//           <div className="grid md:grid-cols-2 gap-12">
//             {[
//               {
//                 title: "Reducing Poverty",
//                 description:
//                   "To play a positive role in reducing poverty through social and economic measures in the country irrespective of class, color, creed or ethnicity.",
//                 image: "/images/about/reducing-poverty.webp",
//               },
//               {
//                 title: "Rural Development",
//                 description:
//                   "To solve basic rural issues at union council level by establishing 'Friends of Pakistan Forum' with the help and support at Individual/Organizational level and collaboration by National/International Donors.",
//                 image: "/images/about/rural-development.webp",
//               },
//               {
//                 title: "Community Support",
//                 description:
//                   "To help communities through motivation, provision of primary health care services, basic education and vocational training at their doorsteps.",
//                 image: "/images/about/community-support.webp",
//               },
//               {
//                 title: "Awareness and Practices",
//                 description:
//                   "To create awareness in the community regarding sanitation, hygienic health and best environmental practices through income-generation activities.",
//                 image: "/images/about/awareness-practices.webp",
//               },
//             ].map((objective, index) => (
//               <motion.div
//                 key={index}
//                 className="relative"
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.5, delay: index * 0.1 }}
//               >
//                 <div className="absolute inset-0 z-0 bg-primary/15 -rotate-6"></div>
//                 <div className="bg-muted relative h-full">
//                   <img
//                     src={objective.image || "/placeholder.svg"}
//                     alt={objective.title}
//                     className="object-cover w-full h-60"
//                   />
//                   <div className="p-6">
//                     <h3 className="text-xl font-semibold mb-2 text-primary relative">
//                       <div className="absolute -inset-4 bg-gradient-to-br from-primary/15 via-primary/20 to-primary/5 blur-2xl"></div>
//                       {objective.title}
//                     </h3>
//                     <p className="text-muted-foreground">
//                       {objective.description}
//                     </p>
//                   </div>
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Organizational Structure */}
//       <section className="py-16 bg-muted">
//         <div className="max-w-4xl mx-auto px-4 md:px-0">
//           <motion.h2
//             className="text-3xl font-bold mb-8 text-center text-primary"
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6 }}
//           >
//             Organizational Structure
//           </motion.h2>
//           <motion.div
//             className="bg-primary/10 relative p-8"
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6, delay: 0.2 }}
//           >
//             <img
//               src="/images/about/chart.webp"
//               alt="HBS Organizational Structure"
//               width={800}
//               height={400}
//               className="w-full h-auto object-contain rounded-lg bg-white"
//             />
//           </motion.div>
//         </div>
//       </section>
//     </>
//   );
// }

import {
  Heart,
  BookOpen,
  Star,
  Users,
  Award,
  Sparkles,
  MessageCircle,
} from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { SecondaryHeader } from "@/components";

export default function About() {
  return (
    <div className="min-h-screen ">
      {/* Hero Section */}
      <SecondaryHeader
        title="About HBS"
        description="Excellence in Healthcare Education & Service"
      />

      {/* The Name Section */}
      <section className="py-16">
        <div className="container max-w-7xl mx-auto px-4 md:px-0">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary mb-4">
                Our Heritage
              </div>
              <h2 className="text-3xl font-bold mb-6">The Name</h2>
              <h3 className="text-xl font-semibold mb-4">
                Hazrat Bari Imam Sarkar
              </h3>
              <p className="text-muted-foreground mb-4">
                HBS stands for 'Hazrat Bari Imam Sarkar', the patron saint of
                Islamabad and Potohar region.
              </p>
              <p className="text-muted-foreground mb-4">
                Shah Abdul Latif Kazmi R.A., or 'Hazrat Bari Imam Sarkar' as he
                is popularly known, was a great sufi saint of 17th Century AD.
                It was the result of his efforts that Islam spread in this
                region. He has a huge following in the sub-continent. Even after
                the passing of four hundred years, his message of love for
                humanity and its welfare resonates deeply with people
                everywhere.
              </p>
              <p className="text-muted-foreground">
                The name reflects the lifelong devotion and attachment of the
                board of directors of HBS Associates PVT LTD to Ghous Pak and
                Sufia-e-Karam in general and Hazrat Shah Abdul Latif Kazmi R.A.
                in particular.
              </p>
            </div>
            <div className="relative h-[400px] rounded-xl overflow-hidden shadow-xl">
              <img
                src="https://placehold.co/600x400"
                alt="Hazrat Bari Imam Sarkar Shrine"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-16 bg-muted">
        <div className="container max-w-7xl mx-auto px-4 md:px-0">
          <div className="grid md:grid-cols-2 gap-12">
            <Card className="p-8 border-none shadow-lg bg-gradient-to-br from-primary/5 to-primary/10">
              <div className="flex items-center mb-6">
                <Star className="h-8 w-8 text-primary mr-3" />
                <h2 className="text-2xl font-bold">OUR MISSION</h2>
              </div>
              <p className="text-lg italic text-muted-foreground border-l-4 border-primary pl-4 py-2">
                "To produce community doctors & researchers with scientific
                knowledge, competence and ability to manage patients with ethics
                and professionalism."
              </p>
            </Card>

            <Card className="p-8 border-none shadow-lg bg-gradient-to-br from-primary/5 to-primary/10">
              <div className="flex items-center mb-6">
                <Sparkles className="h-8 w-8 text-primary mr-3" />
                <h2 className="text-2xl font-bold">OUR VISION</h2>
              </div>
              <p className="text-lg italic text-muted-foreground border-l-4 border-primary pl-4 py-2">
                "To improve the health and social well being of the community by
                nurturing ethical, moral and competent healthcare professionals
                at par with international standards."
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Learning Outcomes Section */}
      <section className="py-16">
        <div className="container max-w-7xl mx-auto px-4 md:px-0">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold mb-4">LEARNING OUTCOMES</h2>
            <p className="text-muted-foreground">
              In accordance with the spirit and teachings of Hazrat Bari Sarkar
              the objectives of our institute will be to create a doctor with
              the following qualities.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {[
              {
                title: "Momin",
                icon: Heart,
                description:
                  "An Allah fearing Muslim who is well aware of the Ethical boundaries of Islam.",
              },
              {
                title: "Mualij",
                icon: BookOpen,
                description:
                  "Can apply the basic principles of scientific knowledge to provide care to sick and ailing patients. Also does research to become a better healer.",
              },
              {
                title: "Ahsan",
                icon: Star,
                description:
                  "Motivated to achieve excellence in his education and profession, and do everything to the highest standards. He is a lifelong learner and perfectionist who has insight into his own strengths and weaknesses.",
              },
              {
                title: "Mohsin",
                icon: Heart,
                description:
                  "Is beneficent and goes beyond his duty to provide care and services to patients and the community. Has empathy and the ability to treat people with respect.",
              },
              {
                title: "Sabir",
                icon: Award,
                description:
                  "Has resilience and the ability to deal with difficult situations and uncertainty. Makes use of emotional intelligence and critical thinking abilities.",
              },
              {
                title: "Adil",
                icon: Users,
                description:
                  "Prioritizes justice in all walks of life, and is ethical in his dealings with everyone. He respects diversity and inclusion, and provides care to patients from all backgrounds and cultures.",
              },
              {
                title: "Ikhlaq e Husna",
                icon: MessageCircle,
                description:
                  "Acts with kindness and makes patients feel at ease. Always asks courteous questions, and listens carefully in return. Has good communication with patients and their relatives.",
              },
            ].map((value, index) => (
              <Card
                key={index}
                className="p-6 hover:shadow-md transition-shadow rounded-none bg-muted"
              >
                <div className="flex items-center mb-4">
                  <div className="h-10 w-10 rounded-full bg-primary/20 flex items-center justify-center mr-3">
                    <value.icon className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold">{value.title}</h3>
                </div>
                <p className="text-muted-foreground">{value.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="py-16 bg-muted">
        <div className="container max-w-7xl mx-auto px-4 md:px-0">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Leadership</h2>
            <p className="text-muted-foreground">
              Meet the visionary leaders guiding HBS Medical and Dental College
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Chairman's Message */}
            <Card className="overflow-hidden">
              <div className="aspect-[3/2] p-6 relative">
                <img
                  src="/images/user.webp"
                  alt="Dr. Mohammad Riaz Shahbaz Janjua"
                  className="object-contain rounded-lg h-full mx-auto"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-1">
                  DR. MOHAMMAD RIAZ SHAHBAZ JANJUA
                </h3>
                <p className="text-primary font-medium mb-4">CHAIRMAN</p>
                <div className="border-l-4 border-primary pl-4 py-2 mb-4 italic text-muted-foreground">
                  'We cannot always build the future for our youth, but we can
                  build our youth for the future' – Franklin D. Roosevelt
                </div>
                <p className="text-muted-foreground mb-4">
                  It is a matter of great pride and privilege for me that you
                  have applied for admission to the MBBS/BDS programme of HBS
                  Medical and Dental College. It reminds me of the excitement
                  and exhilaration I felt when I applied for my admission so
                  many years ago.
                </p>
                <p className="text-muted-foreground mb-4">
                  I believe that the profession you have chosen is for you only
                  if you are a good human being full of empathy, love and care
                  for people in pain. My team under my leadership will provide
                  you with a holistic learning experience.
                </p>
                <Button variant="outline" className="mt-2">
                  Read Full Message
                </Button>
              </div>
            </Card>

            {/* Executive Director's Message */}
            <Card className="overflow-hidden">
              <div className="aspect-[3/2] p-6 relative">
                <img
                  src="/images/user.webp"
                  alt="Dr. Mohammad Riaz Shahbaz Janjua"
                  className="object-contain rounded-lg h-full mx-auto"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-1">DR. JAMILAH RIAZ</h3>
                <p className="text-primary font-medium mb-4">
                  EXECUTIVE DIRECTOR ADMIN & STUDENT AFFAIRS
                </p>
                <p className="text-muted-foreground mb-4">
                  I am extremely excited about our journey ahead, where we shall
                  be completely dedicated to ensuring that you become doctors
                  par excellence, who move forward in life to make their
                  parents, institute, and nation proud.
                </p>
                <p className="text-muted-foreground mb-4">
                  The career you have chosen for yourselves is rightly called
                  the noblest of professions, where on a daily basis you will be
                  striving to make others feel better, and for them to have a
                  better quality of life.
                </p>
                <Button variant="outline" className="mt-2">
                  Read Full Message
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Board of Directors Section */}
      <section className="py-16">
        <div className="container max-w-7xl mx-auto px-4 md:px-0">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold mb-4">
              Board of Directors/Trustees
            </h2>
            <p className="text-muted-foreground">
              The visionary leaders guiding our institution
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                name: "Dr. M. Riaz Shahbaz Janjua",
                role: "Chairman / Director",
                image: "/images/user.webp",
              },
              {
                name: "Raja Sarfraz Akram",
                role: "Director",
                image: "/images/user.webp",
              },
              {
                name: "Shahzad Ali Janjua",
                role: "Director",
                image: "/images/user.webp",
              },
            ].map((director, index) => (
              <Card
                key={index}
                className="overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="aspect-square relative">
                  <img
                    src={director.image || "/placeholder.svg"}
                    alt={director.name}
                    className="object-cover w-full"
                  />
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-xl font-bold mb-1">{director.name}</h3>
                  <p className="text-muted-foreground">{director.role}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-white">
        <div className="container text-center max-w-7xl mx-auto px-4 md:px-0">
          <h2 className="text-3xl font-bold mb-6">
            Join Our Medical Community
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Become part of our mission to nurture ethical, moral and competent
            healthcare professionals
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button variant="secondary" className="">
              Apply Now
            </Button>
            <Button variant="" className="border-white border">
              Contact Us
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
