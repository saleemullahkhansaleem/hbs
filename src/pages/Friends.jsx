import { motion } from "framer-motion";
import { Download, CreditCard } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { SecondaryHeader } from "@/components";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

const membershipTypes = [
  { type: "Platinum", for: "Companies/Industries", icon: "🏢" },
  { type: "Gold", for: "Individuals", icon: "👤" },
  { type: "Silver", for: "Students", icon: "🎓" },
];

export default function Friends() {
  return (
    <>
      <SecondaryHeader
        title="Friends of HBS"
        description="Join our global network and support HBS's long-term programmes"
      />
      <section className="min-h-screen py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="bg-muted mb-12"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="p-8">
              <h2 className="text-2xl font-bold mb-4 text-primary">
                Become a Friend of HBS
              </h2>
              <p className="text-muted-foreground mb-6">
                We have created a global network of like-minded people to
                advance this cause and support HBS. We assure that your
                participation, be it from Corporate Social Responsibility
                platform or individual contribution will play a pivotal role and
                go a long way in establishing and replicating development models
                at different Union Councils Levels.
              </p>
              <div className="grid md:grid-cols-3 gap-6">
                {membershipTypes.map((membership, index) => (
                  <div key={index} className="relative">
                    <div className="absolute inset-0 bg-primary/10 translate-x-2 translate-y-2 rounded-xl"></div>
                    <Card className="relative">
                      <CardHeader>
                        <CardTitle className="flex items-center">
                          <span className="text-3xl mr-2">
                            {membership.icon}
                          </span>
                          {membership.type}
                        </CardTitle>
                        <CardDescription>{membership.for}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <Button className="w-full">
                          <CreditCard className="mr-2 h-4 w-4" /> Apply Now
                        </Button>
                      </CardContent>
                    </Card>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            className="bg-muted  mb-12"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="p-8">
              <h2 className="text-2xl font-semibold mb-6">Membership Rules</h2>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger>
                    General Rules for Membership
                  </AccordionTrigger>
                  <AccordionContent>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>Fill the Membership Form of designated Category</li>
                      <li>
                        Submit along with a copy of National Identity Card and
                        Two (02) current Passport Size Color Photographs
                      </li>
                      <li>
                        Pay Membership fee in HBS Bank Account No. 5000178626
                        Eman-Islamic Banking, Silk Bank, F-8, Branch, Islamabad,
                        Pakistan
                      </li>
                      <li>Minimum age for becoming a Member is 18 years</li>
                      <li>
                        Individuals must have a valid National Identity Card
                        issued by NADRA
                      </li>
                      <li>
                        Membership cards shall be valid for a period of one year
                        from the date of issuance
                      </li>
                      <li>
                        Renewal of membership can be applied one month prior to
                        the expiry of their membership
                      </li>
                      <li>
                        A HBS Membership Card can be used only for HBS's
                        assigned work
                      </li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger>Membership Termination</AccordionTrigger>
                  <AccordionContent>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>If the Member's conduct is unfair or unjustified</li>
                      <li>
                        If the Member loses interest in the affairs of the HBS
                        and/or his/her activities are found detrimental to the
                        vision, mission and objectives of HBS
                      </li>
                      <li>Nonpayment of Annual Subscription Fee</li>
                      <li>
                        Members may, at any time, resign from membership by
                        writing under his/her hand
                      </li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </motion.div>

          <motion.div
            className="text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Button size="lg">
              <Download className="mr-2 h-4 w-4" /> Download Membership Form
            </Button>
          </motion.div>
        </div>
      </section>
    </>
  );
}
