// import { useState } from "react";
// import { motion } from "framer-motion";
// import { SectionLayout } from ".";
// import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
// import {
//   Card,
//   CardContent,
//   CardDescription,
//   CardHeader,
//   CardTitle,
// } from "@/components/ui/card";
// import { Badge } from "@/components/ui/badge";
// import { Calendar, Users, Award, BookOpen } from "lucide-react";

// export default function ConferencesAndWorkshopsSection() {
//   const [activeTab, setActiveTab] = useState("workshop");

//   return (
//     <SectionLayout
//       name="Conferences and Workshops"
//       title="Advancing Medical Knowledge"
//       description="Explore our recent academic events fostering research and collaboration in healthcare."
//       className="py-16"
//     >
//       <Tabs
//         defaultValue="workshop"
//         className="w-full"
//         onValueChange={(value) => setActiveTab(value)}
//       >
//         <TabsList className="grid w-full grid-cols-3 mb-8 h-auto">
//           <TabsTrigger value="workshop" className="text-lg py-2">
//             <BookOpen className="mr-2" /> Research Workshop
//           </TabsTrigger>
//           <TabsTrigger value="symposium" className="text-lg py-2">
//             <Users className="mr-2" /> Research Symposium
//           </TabsTrigger>
//           <TabsTrigger value="competition" className="text-lg py-2">
//             <Award className="mr-2" /> Poster Competition
//           </TabsTrigger>
//         </TabsList>
//         <TabsContent value="workshop">
//           <ResearchWorkshop activeTab={activeTab} />
//         </TabsContent>
//         <TabsContent value="symposium">
//           <ResearchSymposium activeTab={activeTab} />
//         </TabsContent>
//         <TabsContent value="competition">
//           <PosterCompetition activeTab={activeTab} />
//         </TabsContent>
//       </Tabs>
//     </SectionLayout>
//   );
// }

// function ResearchWorkshop({ activeTab }) {
//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 20 }}
//       animate={{ opacity: activeTab === "workshop" ? 1 : 0, y: 0 }}
//       transition={{ duration: 0.5 }}
//     >
//       <Card>
//         <CardHeader>
//           <CardTitle className="text-2xl">
//             Workshop on "Research Methodology"
//           </CardTitle>
//           <CardDescription>
//             <Calendar className="inline-block mr-2" />
//             13th June, 2024 at HBS Medical and Dental College
//           </CardDescription>
//         </CardHeader>
//         <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-6">
//           <div>
//             <img
//               src="/placeholder.svg?height=300&width=500"
//               alt="Research Methodology Workshop"
//               width={500}
//               height={300}
//               className="rounded-lg shadow-lg"
//             />
//           </div>
//           <div>
//             <p className="mb-4">
//               HBS Faculty Development Committee (FDC) in collaboration with the
//               Research Committee arranged this workshop. Dr. Mashaal Sabqat was
//               the facilitator, targeting faculty of basic and clinical sciences.
//             </p>
//             <h4 className="font-semibold mb-2">Learning Outcomes:</h4>
//             <ul className="list-disc pl-5 space-y-2">
//               <li>
//                 Gain proficiency in formulating research questions and
//                 hypotheses
//               </li>
//               <li>Select appropriate research methods for specific queries</li>
//               <li>
//                 Master strategies of literature review and skills of sampling,
//                 data collection, and data analysis
//               </li>
//             </ul>
//           </div>
//         </CardContent>
//       </Card>
//     </motion.div>
//   );
// }

// function ResearchSymposium({ activeTab }) {
//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 20 }}
//       animate={{ opacity: activeTab === "symposium" ? 1 : 0, y: 0 }}
//       transition={{ duration: 0.5 }}
//     >
//       <Card>
//         <CardHeader>
//           <CardTitle className="text-2xl">Research Virtual Symposium</CardTitle>
//           <CardDescription>
//             <Calendar className="inline-block mr-2" />
//             25th May, 2024 at 08:00 PM
//           </CardDescription>
//         </CardHeader>
//         <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-6">
//           <div>
//             <img
//               src="/placeholder.svg?height=300&width=500"
//               alt="Virtual Research Symposium"
//               width={500}
//               height={300}
//               className="rounded-lg shadow-lg"
//             />
//           </div>
//           <div>
//             <p className="mb-4">
//               Organized by HBS Student Research Society (HSRS) in collaboration
//               with SYNCH (Solidarity Among Young Nation for Change) on
//               "Essentials of Medical Research".
//             </p>
//             <h4 className="font-semibold mb-2">Esteemed Speakers:</h4>
//             <ul className="list-disc pl-5 space-y-2">
//               <li>Dr. Syed Haseeb Raza Rizvi</li>
//               <li>Dr. Syed Raza Ali Zaidi</li>
//               <li>Dr. Mehwish Rafique</li>
//               <li>Dr. Zoha Altaf</li>
//             </ul>
//             <h4 className="font-semibold mt-4 mb-2">Key Objectives:</h4>
//             <ul className="list-disc pl-5 space-y-2">
//               <li>Provide a solid foundation in medical research basics</li>
//               <li>
//                 Inspire undergraduate students to pursue research opportunities
//               </li>
//               <li>
//                 Equip students with practical knowledge of research methods
//               </li>
//               <li>
//                 Emphasize the importance of ethical standards in medical
//                 research
//               </li>
//             </ul>
//           </div>
//         </CardContent>
//       </Card>
//     </motion.div>
//   );
// }

// function PosterCompetition({ activeTab }) {
//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 20 }}
//       animate={{ opacity: activeTab === "competition" ? 1 : 0, y: 0 }}
//       transition={{ duration: 0.5 }}
//     >
//       <Card>
//         <CardHeader>
//           <CardTitle className="text-2xl">
//             Research Poster Competition
//           </CardTitle>
//           <CardDescription>
//             <Calendar className="inline-block mr-2" />
//             30th August, 2024 at HBS Medical and Dental College
//           </CardDescription>
//         </CardHeader>
//         <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-6">
//           <div>
//             <img
//               src="/placeholder.svg?height=300&width=500"
//               alt="Research Poster Competition"
//               width={500}
//               height={300}
//               className="rounded-lg shadow-lg"
//             />
//             <div className="mt-4">
//               <h4 className="font-semibold mb-2">Participating Colleges:</h4>
//               <div className="flex flex-wrap gap-2">
//                 <Badge>HBS Medical and Dental College</Badge>
//                 <Badge>Islamabad Medical and Dental College</Badge>
//                 <Badge>Shifa College of Medicine and Dentistry</Badge>
//                 <Badge>Rawal Institute of Health Sciences</Badge>
//               </div>
//             </div>
//           </div>
//           <div>
//             <h4 className="font-semibold mb-2">Key Objectives:</h4>
//             <ul className="list-disc pl-5 space-y-2 mb-4">
//               <li>
//                 Promote original research by providing a platform for students
//               </li>
//               <li>
//                 Facilitate knowledge exchange within the academic community
//               </li>
//               <li>Create networking opportunities for participants</li>
//               <li>Acknowledge outstanding research efforts</li>
//             </ul>
//             <h4 className="font-semibold mb-2">Panel of Esteemed Judges:</h4>
//             <ul className="list-disc pl-5 space-y-2">
//               <li>Prof. Dr. Iqbal Memon</li>
//               <li>Prof. Dr. Anser Maxood</li>
//               <li>Prof. Dr. Idrees Anwar</li>
//             </ul>
//           </div>
//         </CardContent>
//       </Card>
//     </motion.div>
//   );
// }

import { motion } from "framer-motion";
import { SectionLayout } from ".";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Users, Award, BookOpen } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";

export default function ConferencesAndWorkshopsSection() {
  return (
    <SectionLayout
      name="Conferences and Workshops"
      title="Advancing Medical Knowledge"
      description="Explore our recent academic events fostering research and collaboration in healthcare."
      className="py-8"
      bg={
        <img
          src="images/world.webp"
          alt="background image"
          className="absolute inset-0 object-cover opacity-15 w-full h-full z-0"
        />
      }
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <EventCard
          title="Research Methodology Workshop"
          date="13th June, 2024"
          icon={<BookOpen className="w-6 h-6" />}
          images={[
            "/images/conferences/methodology-1.webp",
            "/images/conferences/methodology-2.webp",
            "/images/conferences/methodology-3.webp",
          ]}
          description="Faculty workshop on formulating research questions, creating hypotheses, and selecting appropriate study designs."
        />
        <EventCard
          title="Virtual Research Symposium"
          date="25th May, 2024"
          icon={<Users className="w-6 h-6" />}
          images={[
            "/images/conferences/symposium-1.webp",
            "/images/conferences/symposium-2.webp",
          ]}
          description="Student symposium on 'Essentials of Medical Research' featuring talks by esteemed medical professionals."
        />
        <EventCard
          title="Research Poster Competition"
          date="30th August, 2024"
          icon={<Award className="w-6 h-6" />}
          images={[
            "/images/conferences/competition-1.webp",
            "/images/conferences/competition-2.webp",
            "/images/conferences/competition-3.webp",
          ]}
          description="Inter-collegiate competition showcasing original research by undergraduate medical and dental students."
        />
      </div>
    </SectionLayout>
  );
}

export function EventCard({ title, date, icon, images, description }) {
  return (
    <motion.div
      key={title}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      viewport={{ once: true }}
      className="relative shadow-lg bg-primary/5 backdrop-blur"
    >
      {/* <img
        src={image || "https://placehold.co/600x400"}
        alt={title}
        className="w-full object-cover aspect-[3/2]"
      /> */}
      <Carousel className="w-full mx-auto">
        <CarouselContent>
          {images.map((image, i) => (
            <CarouselItem key={i}>
              <div className="p-">
                <img
                  src={image || "/placeholder.svg"}
                  alt={image}
                  width={300}
                  height={200}
                  className="w-full aspect-video object-cover"
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
      <div className="p-6">
        <p className="-mt-14 z-10 relative text-sm text-primary-foreground font-semibold bg-primary p-4 max-w-max border-4 border-background flex items-center">
          <Calendar className="inline-block mr-2 w-4 h-4" />
          {date}
        </p>
        <h3 className="text-lg leading-6 font-medium text-foreground mt-2 flex justify-between">
          {title}
          <span>{icon}</span>
        </h3>
        <p className="mt-3 text-base text-muted-foreground">{description}</p>
      </div>
    </motion.div>
  );
}
