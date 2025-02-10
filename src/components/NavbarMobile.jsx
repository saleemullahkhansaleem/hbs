import { useState } from "react";
import { Menu } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "./ui/collapsible";
import { Button } from "./ui/button";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { featureBtn } from "./Navbar";

export default function NavbarMobile({ navigation = [] }) {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const handleNavigation = (href) => {
    setOpen(false);
    navigate(href);
  };

  return (
    <div className="xl:hidden self-center">
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild>
          <Button variant="ghost" size="icon" className="z-20">
            <Menu />
            <span className="sr-only">Toggle navigation</span>
          </Button>
        </SheetTrigger>
        <SheetContent className="w-64 bg-background p-4 overflow-y-auto xl:hidden">
          <SheetTitle className="mb-2">Menu</SheetTitle>
          <SheetDescription></SheetDescription>
          <hr />
          <div className="flex flex-col gap-2">
            {navigation?.map((category, index) =>
              !category?.subItems ? (
                <NavLink
                  key={index}
                  onClick={() => handleNavigation(category.href)}
                  to={category.href}
                  className={({ isActive }) =>
                    `flex items-center gap-3 rounded py-1 transition-all hover:text-primary w-full ${
                      isActive
                        ? "text-primary bg-primary/10"
                        : "text-foreground"
                    }`
                  }
                >
                  {category.name}
                </NavLink>
              ) : (
                <Collapsible key={index}>
                  <CollapsibleTrigger className="flex items-center gap-3 rounded py-1 w-full transition-all hover:text-primary">
                    {category.name}
                    <span className="ml-auto flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-xl">
                      +
                    </span>
                  </CollapsibleTrigger>
                  <CollapsibleContent className="ml-4 space-y-2">
                    {category?.subItems.map((item, idx) =>
                      item?.subItems ? (
                        <Collapsible key={idx}>
                          <CollapsibleTrigger className="flex items-center gap-3 rounded py-1 w-full transition-all hover:text-primary">
                            {item.name}
                            <span className="ml-auto flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-xl">
                              +
                            </span>
                          </CollapsibleTrigger>
                          <CollapsibleContent className="ml-4 space-y-2">
                            {item?.subItems.map((subItem, subIdx) => (
                              <NavLink
                                key={subIdx}
                                onClick={() => handleNavigation(subItem.href)}
                                to={subItem.href}
                                className={({ isActive }) =>
                                  `flex items-center gap-2 pt-2 hover:text-primary w-full ${
                                    isActive
                                      ? "text-primary bg-primary/10"
                                      : "text-foreground"
                                  }`
                                }
                              >
                                {subItem.name}
                              </NavLink>
                            ))}
                          </CollapsibleContent>
                        </Collapsible>
                      ) : (
                        <NavLink
                          key={idx}
                          onClick={() => handleNavigation(item.href)}
                          to={item.href}
                          className={({ isActive }) =>
                            `flex items-center gap-2 pt-2 hover:text-primary w-full ${
                              isActive
                                ? "text-primary bg-primary/10"
                                : "text-foreground"
                            }`
                          }
                        >
                          {item.name}
                        </NavLink>
                      )
                    )}
                  </CollapsibleContent>
                </Collapsible>
              )
            )}

            {featureBtn && (
              <Button variant="" asChild>
                <Link to={featureBtn.href}>{featureBtn.name}</Link>
              </Button>
            )}
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
}
