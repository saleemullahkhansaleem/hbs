import { motion } from "framer-motion";
import { Copy } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { SecondaryHeader } from "@/components";
import { Link } from "react-router-dom";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

const bankDetails = [
  {
    label: "Account Title",
    value: "Institutes of Healthcare & Allied Sciences",
  },
  { label: "Account Number", value: "5000178626" },
  { label: "Branch Code", value: "50756" },
  { label: "IBAN", value: "PK69SAUD0050755000178626" },
  { label: "Swift", value: "SAUDPKKA" },
  {
    label: "Bank Name & Address",
    value:
      "Silkbank Ltd Emaan Islamic Banking 8C Shahwez Centre F8 Markaz Islamabad Pakistan",
  },
  { label: "Currency", value: "PKR" },
];

export default function Donate() {
  const { toast } = useToast();
  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    toast({
      variant: "primary",
      title: "Copied to clipboard",
      description: "The bank detail has been copied to your clipboard.",
    });
  };

  return (
    <>
      <SecondaryHeader
        title="Donate to HBS"
        description="Your contribution helps us continue our mission of driving economic
            and environmental development."
      />
      <section className="py-16 px-4 md:px-0">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="">
              <h2 className="text-2xl font-bold mb-6 text-primary">
                Donate Through Bank Transfer
              </h2>
              <div className="grid gap-6">
                {bankDetails.map((detail, index) => (
                  <div className="relative">
                    <div className="absolute -inset-2 bg-gradient-to-br from-primary/5 via-primary/10 to-primary/5 blur-xl z-0"></div>
                    <div
                      className="bg-primary/5 relative p-6 border-l-4 border-primary"
                      key={index}
                    >
                      <h2 className="text-lg font-semibold mb-4">
                        {detail.label}
                      </h2>
                      <div className="flex justify-between items-center">
                        <p className="text-base font-medium text-muted-foreground">
                          {detail.value}
                        </p>
                        <Button
                          variant="outline"
                          size="icon"
                          onClick={() => copyToClipboard(detail.value)}
                        >
                          <Copy className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>
      <section className="py-16 px-4 md:px-0 bg-muted">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h3 className="text-2xl font-bold mb-4 text-primary">
              Other Ways to Support
            </h3>
            <p className="text-muted-foreground mb-6">
              If you prefer alternative methods of donation or would like to
              discuss corporate partnerships, please don't hesitate to get in
              touch with us.
            </p>
            <Button size="lg" asChild>
              <Link to="/contact">Contact Us</Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </>
  );
}
