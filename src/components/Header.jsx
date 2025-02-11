import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import { ThemeToggle } from ".";
import { footerNavigation } from "./Footer";
import { Button } from "./ui/button";

const Header = ({ setDarkMode, darkMode }) => {
  return (
    <>
      <div className="w-full px-4 bg-primary h-2 md:h-8 relative">
        <div className="container mx-auto flex justify-between">
          <div className="relative h-full w-40">
            <div className="text-foreground py-2 px-1 text-3xl z-40 absolute top-0 bg-white border border-primary">
              <Link to="/" className="flex items-end gap-2 w-full">
                <img
                  src="/images/logos/logo.png"
                  alt="logo"
                  height={100}
                  className="h-10 md:h-20 dark:hidden"
                />{" "}
                <img
                  src="/images/logos/logo.png"
                  alt="logo"
                  height={100}
                  className="h-10 md:h-20 hidden dark:block"
                />
              </Link>
            </div>
          </div>
          <Navbar />
        </div>
      </div>
      <header className="text-foreground sticky top-0 z-30 bg-background/70 backdrop-blur">
        <div className="container mx-auto flex justify-between px-4">
          <div className="w-16 md:w-1"></div>
          <Navbar />
          <ThemeToggle setDarkMode={setDarkMode} darkMode={darkMode} />
          <div className="flex items-center space-x-6">
            {footerNavigation.social.map((item) => (
              <a
                key={item.name}
                href={item.href}
                title={item.name}
                target="_blank"
                className="text-muted-foreground hover:text-foreground"
              >
                <span className="sr-only">{item.name}</span>
                <item.icon className="h-4 w-4" aria-hidden="true" />
              </a>
            ))}
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
