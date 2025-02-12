import { Link } from "react-router-dom";
import { Facebook, Linkedin, Twitter } from "lucide-react";
import { MrCard, ThemeToggle } from ".";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

export const footerNavigation = {
  organisation: [
    { name: "About", href: "/about" },
    { name: "Programs", href: "/programs" },
    { name: "Contact Us", href: "/contact" },
    { name: "Career", href: "/career" },
    { name: "QEC", href: "/qec" },
    { name: "Journal", href: "/journal" },
  ],

  quickLinks: [
    { name: "HBS Medical & Dental College", href: "/medical-dental-college" },
    { name: "HBS College of Pharmacy", href: "/college-of-pharmacy" },
    { name: "HBS College of Nursing", href: "/college-of-nursing" },
    { name: "HBS General Hospital", href: "/general-hospital" },
    { name: "HBS Dental Hospital", href: "/dental-hospital" },
    { name: "Apply Online", href: "/apply-online" },
    { name: "Admissions", href: "/admissions" },
  ],

  social: [
    {
      name: "Facebook",
      href: "https://www.facebook.com/hbs",
      icon: Facebook,
    },
    {
      name: "Twitter",
      href: "https://x.com/hbs",
      icon: Twitter,
    },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/company/hbs/",
      icon: Linkedin,
    },
  ],
};

export default function Footer({ darkMode, setDarkMode }) {
  return (
    <footer
      className="bg-orange-950 text-white"
      aria-labelledby="footer-heading"
    >
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="max-w-md">
            <div className="flex items-end gap-4">
              <div className="text-foreground py-1 px-1 text-3xl z-40 relative bg-white border border-primary">
                <Link to="/" className="flex items-end gap-2">
                  <img
                    src="/images/logos/logo.png"
                    alt="logo"
                    height={100}
                    className="w-8 md:w-16 object-cover dark:hidden"
                  />{" "}
                  <img
                    src="/images/logos/logo.png"
                    alt="logo"
                    height={100}
                    className="w-8 md:w-16 object-cover hidden dark:block"
                  />
                </Link>
              </div>
              <h3 className="text-lg font-semibold tracking-wider">
                Institutes of Healthcare & Allied Sciences
              </h3>
            </div>
            <p className="mt-4 text-base text-gray-400">
              HBS is dedicated to advancing medical education, research, and
              healthcare services with a commitment to excellence and innovation
              in the field of biomedical sciences.
            </p>
            <form className="mt-4 sm:flex sm:max-w-md">
              <label htmlFor="email-address" className="sr-only">
                Email address
              </label>
              <Input
                type="email"
                name="email-address"
                id="email-address"
                autoComplete="email"
                required
                className="appearance-none bg-white h-10 border border-transparent text-gray-900 placeholder-gray-500 rounded-none"
                placeholder="Enter your email"
              />
              <div className="mt-3 rounded-md sm:mt-0 sm:ml-3 sm:flex-shrink-0">
                <Button type="submit" className="h-10">
                  Subscribe
                </Button>
              </div>
            </form>
            <div className="flex space-x-6 mt-8">
              {footerNavigation.social.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  target="_blank"
                  className="hover:text-white text-gray-400"
                >
                  <span className="sr-only">{item.name}</span>
                  <item.icon className="h-5 w-5" aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>
          <div className="grid sm:grid-cols-2 gap-8">
            <div className="">
              <h3 className="text-sm font-semibold tracking-wider uppercase">
                Organisation
              </h3>
              <ul role="list" className="mt-4 space-y-2">
                {footerNavigation.organisation.map((item) => (
                  <li key={item.name}>
                    <Link
                      to={item.href}
                      className="text-base hover:text-white text-gray-400"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold tracking-wider uppercase">
                Quick Links
              </h3>
              <ul role="list" className="mt-4 space-y-2">
                {footerNavigation.quickLinks.map((item) => (
                  <li key={item.name}>
                    <Link
                      to={item.href}
                      className="text-base hover:text-white text-gray-400"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="px-4 py-2 container mx-auto border-t border-gray-500 md:flex md:items-center md:justify-between">
        <p className="mt-2 text-sm md:mt-0 text-gray-400">
          &copy; {new Date().getFullYear()} HBS Institutes of Healthcare &
          Allied Sciences. All Rights Reserved.
        </p>
        <div className="mt-2 text-sm text-gray-400 md:mt-0 flex items-center">
          <ThemeToggle setDarkMode={setDarkMode} darkMode={darkMode} />
          <MrCard />
        </div>
      </div>
    </footer>
  );
}
