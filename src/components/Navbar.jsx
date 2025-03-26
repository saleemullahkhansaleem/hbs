import { MdKeyboardArrowDown, MdKeyboardArrowRight } from "react-icons/md";
import { Link, NavLink } from "react-router-dom";
import { NavbarMobile } from ".";
import { Button } from "./ui/button";

export const navigation = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "About HBS",
    href: "/about",
    // subItems: [
    //   { name: "The Name", href: "/about-hbs/the-name" },
    //   {
    //     name: "Organizational Structure",
    //     href: "/about-hbs/organizational-structure",
    //   },
    //   { name: "Board of Directors", href: "/about-hbs/board-of-directors" },
    //   { name: "Chairman’s Message", href: "/about-hbs/chairman-message" },
    //   {
    //     name: "Executive Director’s Message",
    //     href: "/about-hbs/executive-director-message",
    //   },
    // ],
  },
  {
    name: "Our Colleges",
    href: "/colleges",
    subItems: [
      {
        name: "HBS Medical & Dental College",
        href: "/colleges/mdc",
      },
      {
        name: "HBS College of Paramedics",
        href: "/colleges/paramedics",
      },
      {
        name: "HBS College of Nursing",
        href: "/colleges/nursing",
      },
      {
        name: "HBS College of Pharmacy",
        href: "/colleges/pharmacy",
      },
      {
        name: "HBS College of Rehabilitation & Allied Health Sciences",
        href: "/colleges/rehabilitation-ahs",
      },
    ],
  },
  {
    name: "Our Hospitals",
    href: "/our-hospitals",
    subItems: [
      {
        name: "HBS General Hospital",
        href: "/our-hospitals/hbs-general-hospital",
      },
      {
        name: "HBS Dental Hospital",
        href: "/our-hospitals/hbs-dental-hospital",
      },
    ],
  },
  {
    name: "Our Programs",
    href: "/programs",
  },
  {
    name: "Research and Development",
    href: "/research-and-development",
    subItems: [
      {
        name: "Conference and Workshops",
        href: "/research-and-development/conference-workshops",
      },
      {
        name: "Research Publications",
        href: "/research-and-development/research-publications",
      },
      {
        name: "Research Pipeline",
        href: "/research-and-development/research-pipeline",
      },
      { name: "HBS Journal", href: "/research-and-development/hbs-journal" },
    ],
  },
  {
    name: "Contact Us",
    href: "/contact",
  },
];

export const featureBtn = {
  name: "Apply Online",
  href: "/apply-online",
};

export default function Navbar() {
  return (
    <>
      <NavbarMobile navigation={navigation} />
      <div className="hidden xl:flex pl-4">
        {navigation.map((item, index) => (
          <div className="group relative" key={index}>
            <NavLink
              className={({ isActive }) =>
                `cursor-pointer px-4 py-3 h-full flex items-center hover:text-primary border-b-2 text-nowrap ${
                  isActive
                    ? "text-primary border-primary bg-primary/10"
                    : "text-foreground border-transparent"
                }`
              }
              onClick={(e) => {
                item?.subItems && e.preventDefault();
              }}
              to={item.href}
            >
              <div className="flex items-center gap-1 text-sm">
                {item.name}{" "}
                {item?.subItems && <MdKeyboardArrowDown size={16} />}
              </div>
            </NavLink>
            {item?.subItems && (
              <div
                className={`absolute top-full ${
                  index === navigation.length - 1 ? "right-0" : "left-0"
                } p-2 hidden group-hover:flex flex-col bg-background shadow-lg text-nowrap min-w-60 rounded-b`}
              >
                {item?.subItems?.map((subItem, ind) => (
                  <div className="relative group/sub" key={ind}>
                    <NavLink
                      to={subItem.href}
                      className={({ isActive }) =>
                        `px-4 py-2 hover:bg-accent text-sm rounded flex items-center justify-between ${
                          isActive
                            ? "text-primary bg-accent"
                            : "text-foreground"
                        }`
                      }
                    >
                      {subItem.name}{" "}
                      {subItem?.subItems && <MdKeyboardArrowRight size={20} />}
                    </NavLink>
                    {subItem?.subItems && (
                      <div
                        className={`absolute right-full p-2 top-0 hidden group-hover/sub:flex flex-col bg-background shadow-lg text-nowrap min-w-48 rounded`}
                      >
                        {subItem?.subItems?.map((sub, i) => (
                          <NavLink
                            className={({ isActive }) =>
                              `cursor-pointer px-4 py-2 hover:bg-accent text-sm rounded ${
                                isActive
                                  ? "text-primary bg-accent"
                                  : "text-foreground"
                              }`
                            }
                            key={i}
                            to={sub.href}
                          >
                            {sub.name}
                          </NavLink>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
        {featureBtn && (
          <div className="flex items-center pl-2">
            <Button variant="" asChild>
              <Link to={featureBtn.href}>{featureBtn.name}</Link>
            </Button>
          </div>
        )}
      </div>
    </>
  );
}
