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
                src="/images/about/history.png"
                alt="Hazrat Bari Imam Sarkar Shrine"
                className="object-cover w-full h-full"
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
                  src="/images/about/chairman-profile.png"
                  alt="Dr. Mohammad Riaz Shahbaz Janjua"
                  className="object-contain rounded-lg h-full mx-auto bg-foreground/10 p-2"
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
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container text-center max-w-7xl mx-auto px-4 md:px-0">
          <h2 className="text-3xl font-bold mb-6">
            Join Our Medical Community
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Become part of our mission to nurture ethical, moral and competent
            healthcare professionals
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button variant="" className="border-primary-foreground border">
              Apply Now
            </Button>
            <Button variant="outline" className="text-foreground">
              Contact Us
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
