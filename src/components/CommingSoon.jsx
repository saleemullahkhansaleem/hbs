import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  AlertCircle,
  ArrowRight,
  Calendar,
  Clock,
  Mail,
  Send,
  Share2,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Home,
} from "lucide-react";

/**
 * ComingSoonPage - A dynamic coming soon page component
 *
 * @param {Object} props
 * @param {string} props.title - Main title for the coming soon page
 * @param {string} props.pageName - Name of the page that is coming soon
 * @param {string} props.description - Description text
 * @param {Date} props.launchDate - Expected launch date (optional)
 * @param {string} props.bgImage - Background image URL (optional)
 * @param {string} props.logoUrl - Logo URL (optional)
 * @param {boolean} props.showNewsletter - Whether to show newsletter signup (default: true)
 * @param {boolean} props.showCountdown - Whether to show countdown timer (default: true if launchDate provided)
 * @param {boolean} props.showSocial - Whether to show social media links (default: true)
 * @param {Object} props.socialLinks - Social media links object
 * @param {string} props.returnUrl - URL to return to (default: '/')
 * @param {string} props.accentColor - Primary accent color (default: uses theme primary)
 * @returns {JSX.Element}
 */
export default function ComingSoon({
  title = "Coming Soon",
  pageName = "This Page",
  description = "We're working hard to bring you something amazing. Stay tuned!",
  launchDate,
  bgImage = "/placeholder.svg?height=1080&width=1920",
  logoUrl,
  showNewsletter = true,
  showCountdown = !!launchDate,
  showSocial = true,
  socialLinks = {
    facebook: "https://facebook.com",
    twitter: "https://twitter.com",
    instagram: "https://instagram.com",
    linkedin: "https://linkedin.com",
  },
  returnUrl = "/",
  accentColor,
}) {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  // Calculate time remaining until launch date
  useEffect(() => {
    if (!launchDate || !showCountdown) return;

    const targetDate = new Date(launchDate).getTime();

    const calculateTimeLeft = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, [launchDate, showCountdown]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the email to your backend
    console.log("Notification email submitted:", email);
    setIsSubmitted(true);
    setEmail("");

    // Reset the submitted state after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
    }, 3000);
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const pulseVariants = {
    pulse: {
      scale: [1, 1.05, 1],
      opacity: [0.7, 1, 0.7],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  return (
    <div className="min-h-screen flex flex-col relative overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-primary/90 to-primary/70"></div>
      </div>

      {/* Header */}
      <header className="relative z-10 p-4 md:p-6">
        <div className="container mx-auto flex justify-between items-center">
          {logoUrl ? (
            <img
              src={logoUrl || "/placeholder.svg"}
              alt="Logo"
              className="h-10 md:h-12"
            />
          ) : (
            <div className="text-xl font-bold text-primary-foreground">HBS</div>
          )}
          <Button
            variant=""
            size="sm"
            className=""
            onClick={() => (window.location.href = returnUrl)}
          >
            <Home className="mr-2 h-4 w-4" />
            Return to Home
          </Button>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow flex items-center justify-center relative z-10 px-4 py-12">
        <motion.div
          className="container max-w-4xl"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="text-center mb-8">
            <motion.div variants={itemVariants}>
              <Badge
                className="mb-4 px-3 py-1 text-sm bg-primary-foreground text-primary"
                style={
                  accentColor
                    ? {
                        backgroundColor: accentColor + "20",
                        color: accentColor,
                      }
                    : {}
                }
              >
                <AlertCircle className="mr-1 h-3 w-3" />
                Under Development
              </Badge>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-4"
              style={accentColor ? { color: accentColor } : {}}
            >
              {pageName} is {title}
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-lg md:text-xl text-primary-foreground/80 max-w-2xl mx-auto mb-8"
            >
              {description}
            </motion.p>

            {showCountdown && launchDate && (
              <motion.div variants={itemVariants}>
                <div className="flex flex-wrap justify-center gap-4 mb-8">
                  {Object.entries(timeLeft).map(([unit, value]) => (
                    <Card
                      key={unit}
                      className="w-20 h-20 md:w-24 md:h-24 flex flex-col items-center justify-center bg-background/20 backdrop-blur-sm border-primary/20"
                    >
                      <CardContent className="p-0 flex flex-col items-center justify-center h-full">
                        <span className="text-2xl md:text-3xl font-bold text-primary-foreground">
                          {value}
                        </span>
                        <span className="text-xs text-primary-foreground/70 capitalize">
                          {unit}
                        </span>
                      </CardContent>
                    </Card>
                  ))}
                </div>
                <div className="flex items-center justify-center text-sm text-primary-foreground/70 mb-8">
                  <Calendar className="mr-2 h-4 w-4" />
                  Expected Launch: {new Date(launchDate).toLocaleDateString()}
                </div>
              </motion.div>
            )}

            {showNewsletter && (
              <motion.div variants={itemVariants} className="max-w-md mx-auto">
                <Card className="bg-background/20 backdrop-blur-sm border-primary/20">
                  <CardContent className="pt-6">
                    <h3 className="text-lg font-medium text-primary-foreground mb-2">
                      Get Notified When We Launch
                    </h3>
                    <p className="text-sm text-primary-foreground/70 mb-4">
                      Be the first to know when {pageName} goes live.
                    </p>
                    <form onSubmit={handleSubmit} className="relative">
                      <div className="flex gap-2">
                        <div className="relative flex-grow">
                          <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                          <Input
                            type="email"
                            placeholder="Enter your email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            className="pl-10 bg-background/50 border-primary/20"
                          />
                        </div>
                        <Button
                          type="submit"
                          style={
                            accentColor ? { backgroundColor: accentColor } : {}
                          }
                        >
                          <Send className="mr-2 h-4 w-4" />
                          Notify Me
                        </Button>
                      </div>
                      {isSubmitted && (
                        <motion.p
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="absolute text-sm text-green-500 mt-2"
                        >
                          Thank you! We'll notify you when we launch.
                        </motion.p>
                      )}
                    </form>
                  </CardContent>
                </Card>
              </motion.div>
            )}
          </div>

          {showSocial && (
            <motion.div
              variants={itemVariants}
              className="flex flex-col items-center"
            >
              <p className="text-primary-foreground/70 mb-3 flex items-center">
                <Share2 className="mr-2 h-4 w-4" />
                Follow our progress
              </p>
              <div className="flex space-x-4">
                {socialLinks.facebook && (
                  <a
                    href={socialLinks.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-background/20 p-2 rounded-full hover:bg-background/40 transition-colors"
                  >
                    <Facebook className="h-5 w-5 text-primary-foreground" />
                  </a>
                )}
                {socialLinks.twitter && (
                  <a
                    href={socialLinks.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-background/20 p-2 rounded-full hover:bg-background/40 transition-colors"
                  >
                    <Twitter className="h-5 w-5 text-primary-foreground" />
                  </a>
                )}
                {socialLinks.instagram && (
                  <a
                    href={socialLinks.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-background/20 p-2 rounded-full hover:bg-background/40 transition-colors"
                  >
                    <Instagram className="h-5 w-5 text-primary-foreground" />
                  </a>
                )}
                {socialLinks.linkedin && (
                  <a
                    href={socialLinks.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-background/20 p-2 rounded-full hover:bg-background/40 transition-colors"
                  >
                    <Linkedin className="h-5 w-5 text-primary-foreground" />
                  </a>
                )}
              </div>
            </motion.div>
          )}
        </motion.div>

        {/* Decorative Elements */}
        <motion.div
          className="absolute -bottom-16 -right-16 w-64 h-64 rounded-full bg-primary/20 blur-3xl"
          variants={pulseVariants}
          animate="pulse"
        ></motion.div>
        <motion.div
          className="absolute -top-16 -left-16 w-48 h-48 rounded-full bg-primary/30 blur-3xl"
          variants={pulseVariants}
          animate="pulse"
          style={{ animationDelay: "1s" }}
        ></motion.div>
      </main>

    </div>
  );
}
