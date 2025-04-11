import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  BookOpen,
  Award,
  Briefcase,
  CheckCircle,
  GraduationCap,
} from "lucide-react";

export default function AHSAcademics() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-muted/50 py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col items-center text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Academic Programs
            </h1>
            <p className="text-xl max-w-3xl mb-8">
              Explore our comprehensive range of Allied Health Sciences programs
              designed to prepare you for a successful career in healthcare.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button>
                Apply Now <ArrowRight size={18} />
              </Button>
              <Button variant="outline">
                Download Prospectus <BookOpen size={18} />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Program - DPT */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-1/2">
              <img
                src="https://placehold.co/600x400"
                alt="Doctor of Physical Therapy Program"
                className="rounded-lg shadow-lg w-full h-auto object-cover"
              />
            </div>
            <div className="md:w-1/2">
              <div className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full font-medium mb-4">
                Flagship Program
              </div>
              <h2 className="text-3xl font-bold mb-4 text-muted-foreground">
                Doctor of Physical Therapy (DPT)
              </h2>
              <p className="text-muted-foreground mb-6">
                DPT is an undergraduate five years degree program for those who
                are interested to pursue a career in the field of health and
                Rehabilitation Sciences. The students with medical background
                can opt for this degree, fulfilling the admission criteria.
              </p>
              <p className="text-muted-foreground mb-6">
                During their stay at HBS College of Rehabilitation sciences, the
                students study various subjects and go through the practical
                training to qualify for the degree of DPT (Doctor of
                Physiotherapy).
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <Award
                    className="text-primary mt-1 flex-shrink-0"
                    size={20}
                  />
                  <p className="text-muted-foreground">
                    <span className="font-semibold">Recognition:</span> The DPT
                    degree is recognized by the HEC and is widely accepted
                    nationally and internationally.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <Briefcase
                    className="text-primary mt-1 flex-shrink-0"
                    size={20}
                  />
                  <p className="text-muted-foreground">
                    <span className="font-semibold">Career Opportunities:</span>{" "}
                    Graduates can fill the increasing demand in retail,
                    hospitals, clinics, and colleges. They can also join
                    government and research organizations.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <GraduationCap
                    className="text-primary mt-1 flex-shrink-0"
                    size={20}
                  />
                  <p className="text-muted-foreground">
                    <span className="font-semibold">Duration:</span> 5 years
                    undergraduate program
                  </p>
                </div>
              </div>

              <Button>
                Learn More About DPT <ArrowRight size={18} />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Other AHS Programs */}
      <section className="py-16 px-4 bg-muted/50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-muted-foreground">
              Other Allied Health Sciences Programs
            </h2>
            <p className="text-muted-foreground max-w-3xl mx-auto">
              Explore our diverse range of Allied Health Sciences programs
              designed to prepare you for various specialized roles in the
              healthcare industry.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Program Card 1 */}
            <div className="bg-background rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all">
              <div className="h-48 bg-primary/10 flex items-center justify-center">
                <img
                  src="https://placehold.co/300x200"
                  alt="Medical Lab Technology"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-muted-foreground">
                  Medical Lab Technology (MLT)
                </h3>
                <p className="text-muted-foreground mb-4">
                  Learn to perform laboratory tests that play a crucial role in
                  the detection, diagnosis, and treatment of disease.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="text-green-500" size={16} />
                    <span className="text-muted-foreground">
                      Hands-on laboratory training
                    </span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="text-green-500" size={16} />
                    <span className="text-muted-foreground">
                      Clinical rotations
                    </span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="text-green-500" size={16} />
                    <span className="text-muted-foreground">
                      Modern lab facilities
                    </span>
                  </li>
                </ul>
                <button className="text-primary hover:text-primary font-medium flex items-center gap-1 transition-all">
                  Program Details <ArrowRight size={16} />
                </button>
              </div>
            </div>

            {/* Program Card 2 */}
            <div className="bg-background rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all">
              <div className="h-48 bg-primary/10 flex items-center justify-center">
                <img
                  src="https://placehold.co/300x200"
                  alt="Dental Technology"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-muted-foreground">
                  Dental Technology
                </h3>
                <p className="text-muted-foreground mb-4">
                  Develop skills in designing and fabricating dental prostheses
                  and appliances to improve patients' oral health.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="text-green-500" size={16} />
                    <span className="text-muted-foreground">
                      Dental laboratory practice
                    </span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="text-green-500" size={16} />
                    <span className="text-muted-foreground">
                      Prosthetics training
                    </span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="text-green-500" size={16} />
                    <span className="text-muted-foreground">
                      Clinical attachments
                    </span>
                  </li>
                </ul>
                <button className="text-primary hover:text-primary font-medium flex items-center gap-1 transition-all">
                  Program Details <ArrowRight size={16} />
                </button>
              </div>
            </div>

            {/* Program Card 3 */}
            <div className="bg-background rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all">
              <div className="h-48 bg-primary/10 flex items-center justify-center">
                <img
                  src="https://placehold.co/300x200"
                  alt="Radiology & Imaging Technology"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-muted-foreground">
                  Radiology & Imaging Technology
                </h3>
                <p className="text-muted-foreground mb-4">
                  Master the techniques of producing diagnostic images using
                  various radiographic equipment.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="text-green-500" size={16} />
                    <span className="text-muted-foreground">
                      Advanced imaging techniques
                    </span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="text-green-500" size={16} />
                    <span className="text-muted-foreground">
                      Radiation safety protocols
                    </span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="text-green-500" size={16} />
                    <span className="text-muted-foreground">
                      Hospital-based training
                    </span>
                  </li>
                </ul>
                <button className="text-primary hover:text-primary font-medium flex items-center gap-1 transition-all">
                  Program Details <ArrowRight size={16} />
                </button>
              </div>
            </div>

            {/* Program Card 4 */}
            <div className="bg-background rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all">
              <div className="h-48 bg-primary/10 flex items-center justify-center">
                <img
                  src="https://placehold.co/300x200"
                  alt="Optometry Technology"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-muted-foreground">
                  Optometry Technology
                </h3>
                <p className="text-muted-foreground mb-4">
                  Learn to examine eyes for vision problems and provide
                  appropriate corrective solutions.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="text-green-500" size={16} />
                    <span className="text-muted-foreground">
                      Vision assessment techniques
                    </span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="text-green-500" size={16} />
                    <span className="text-muted-foreground">
                      Optical dispensing
                    </span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="text-green-500" size={16} />
                    <span className="text-muted-foreground">
                      Clinical practice
                    </span>
                  </li>
                </ul>
                <button className="text-primary hover:text-primary font-medium flex items-center gap-1 transition-all">
                  Program Details <ArrowRight size={16} />
                </button>
              </div>
            </div>

            {/* Program Card 5 */}
            <div className="bg-background rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all">
              <div className="h-48 bg-primary/10 flex items-center justify-center">
                <img
                  src="https://placehold.co/300x200"
                  alt="Anesthesia Technology"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-muted-foreground">
                  Anesthesia Technology
                </h3>
                <p className="text-muted-foreground mb-4">
                  Develop expertise in assisting anesthesiologists in the
                  administration of anesthesia and monitoring patients.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="text-green-500" size={16} />
                    <span className="text-muted-foreground">
                      Anesthesia equipment operation
                    </span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="text-green-500" size={16} />
                    <span className="text-muted-foreground">
                      Patient monitoring techniques
                    </span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="text-green-500" size={16} />
                    <span className="text-muted-foreground">
                      Operating room experience
                    </span>
                  </li>
                </ul>
                <button className="text-primary hover:text-primary font-medium flex items-center gap-1 transition-all">
                  Program Details <ArrowRight size={16} />
                </button>
              </div>
            </div>

            {/* More Programs Card */}
            <div className="bg-primary text-primary-foreground rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all flex flex-col items-center justify-center p-8 text-center">
              <h3 className="text-2xl font-bold mb-4">
                Discover More Programs
              </h3>
              <p className="mb-6">
                Explore additional specialized programs and continuing education
                opportunities at HBS College of Rehabilitation & Allied Health
                Sciences.
              </p>
              <Button variant="outline" className="text-foreground">
                View All Programs <ArrowRight size={18} />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Academic Features */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-muted-foreground">
              Academic Excellence
            </h2>
            <p className="text-muted-foreground max-w-3xl mx-auto">
              Our programs are designed to provide you with the knowledge,
              skills, and practical experience needed to excel in your
              healthcare career.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-primary/5 p-6 rounded-lg">
              <div className="w-12 h-12 bg-primary/15 rounded-full flex items-center justify-center mb-4">
                <GraduationCap className="text-primary" size={24} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-muted-foreground">
                Accredited Programs
              </h3>
              <p className="text-muted-foreground">
                All our programs are recognized by the Higher Education
                Commission (HEC) and relevant professional bodies.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-primary/5 p-6 rounded-lg">
              <div className="w-12 h-12 bg-primary/15 rounded-full flex items-center justify-center mb-4">
                <BookOpen className="text-primary" size={24} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-muted-foreground">
                Comprehensive Curriculum
              </h3>
              <p className="text-muted-foreground">
                Our curriculum combines theoretical knowledge with practical
                skills to prepare you for real-world healthcare challenges.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-primary/5 p-6 rounded-lg">
              <div className="w-12 h-12 bg-primary/15 rounded-full flex items-center justify-center mb-4">
                <Briefcase className="text-primary" size={24} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-muted-foreground">
                Clinical Experience
              </h3>
              <p className="text-muted-foreground">
                Gain hands-on experience at our 500-bed HBS General Hospital and
                affiliated healthcare facilities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-primary text-primary-foreground">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="md:w-2/3">
              <h2 className="text-3xl font-bold mb-4">
                Ready to Start Your Healthcare Career?
              </h2>
              <p className="text-xl mb-0">
                Apply now to join our next intake and take the first step
                towards a rewarding profession in healthcare.
              </p>
            </div>
            <div className="md:w-1/3 flex justify-center md:justify-end">
              <Button variant="outline" className="text-foreground">
                Apply Now
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
