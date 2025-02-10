import { motion } from "framer-motion";
import { FileText, Eye, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { SecondaryHeader } from "@/components";

const policies = [
  { title: "Financial Policy", file: "financial-policy.pdf" },
  { title: "Gender Policy", file: "gender-policy.pdf" },
  { title: "Governance Policy", file: "governance-policy.pdf" },
  { title: "HSE Policy", file: "hse-policy.pdf" },
  { title: "Human Resource Policy", file: "hr-policy.pdf" },
  { title: "IT, Data Backup Policy", file: "it-data-backup-policy.pdf" },
  { title: "Procurement Policy", file: "procurement-policy.pdf" },
  {
    title: "Program Implementation, M&E Policy",
    file: "program-implementation-me-policy.pdf",
  },
  {
    title: "Standard Operating Procedures",
    file: "standard-operating-procedures.pdf",
  },
];

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

export default function PoliciesPage() {
  const handleRead = (file) => {
    window.open(`/files/policies/${file}`, "_blank");
  };

  const handleDownload = (file) => {
    const link = document.createElement("a");
    link.href = `/files/policies/${file}`;
    link.download = file;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <>
      <SecondaryHeader
        title="HBS Policies"
        description="Access and download our organizational policies and procedures"
      />
      <section className="min-h-screen py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {policies.map((policy, index) => (
              <PolicyCard policy={policy} index={index} key={policy.file} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export function PolicyCard({ policy, index }) {
  return (
    <motion.div
      {...fadeInUp}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="relative"
    >
      <div className="absolute inset-0 z-0 bg-primary/15 -rotate-6"></div>
      <div className="h-full flex flex-col relative bg-muted">
        <CardHeader>
          <CardTitle className="flex items-center">
            <FileText className="mr-2 h-5 w-5 text-primary" />
            {policy.title}
          </CardTitle>
        </CardHeader>
        <CardContent className="flex-grow">
          <div className="aspect-video overflow-hidden">
            <iframe
              src={`/files/policies/${policy.file}`}
              title={policy.title}
              className="w-full h-full"
            />
          </div>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button variant="outline" onClick={() => handleRead(policy.file)}>
            <Eye className="mr-2 h-4 w-4" /> Read
          </Button>
          <Button onClick={() => handleDownload(policy.file)}>
            <Download className="mr-2 h-4 w-4" /> Download
          </Button>
        </CardFooter>
      </div>
    </motion.div>
  );
}
