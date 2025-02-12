import { MdKeyboardArrowDown } from "react-icons/md";
import { Link } from "react-router-dom";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuItem,
} from "./ui/dropdown-menu";

const affiliations = [
  { title: "PMDC Recognition For MBBS Section", href: "/pmdc-mbbs" },
  { title: "PMDC Recognition For BDS Section", href: "/pmdc-bds" },
  { title: "SZABMU Affiliation For MBBS", href: "/szabmu-mbbs" },
  { title: "SZABMU Affiliation For BDS", href: "/szabmu-bds" },
  {
    title: "Federal Govt. Notification for HBS Medical & Dental College (MBBS Section)",
    href: "/govt-notification-mbbs",
  },
  {
    title: "Federal Govt. Notification for HBS Medical & Dental College (BDS Section)",
    href: "/govt-notification-bds",
  },
  { title: "World Directory of Medical Schools", href: "/world-medical-schools" },
  { title: "Accreditation for FCPS", href: "/accreditation-fcps" },
  { title: "Accreditation for MCPS", href: "/accreditation-mcps" },
];

export default function AffiliationsDropdown() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="flex items-center gap-1 text-sm">
        Affiliations <MdKeyboardArrowDown size={16} />
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>HBS Affiliated with</DropdownMenuLabel>
        <DropdownMenuSeparator />
        {affiliations.map((affiliation, index) => (
          <DropdownMenuItem asChild key={index} className="cursor-pointer">
            <Link to={affiliation.href}>{affiliation.title}</Link>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
