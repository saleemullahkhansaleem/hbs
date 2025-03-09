// import { NavLink } from "react-router-dom";
// import { navigation } from "./Navbar";

// export default function SideNav({ pageName = "About" }) {
//   return (
//     <nav
//       className={`bg-primary/5 backdrop-blur-sm text-foreground w-full md:w-60 xl:w-72 flex-shrink-0 transition-all duration-300 ease-in-out hidden md:block`}
//     >
//       <div className="sticky top-16 py-4">
//         <ul className="space-y-2">
//           {navigation
//             .find((item) => item.name === pageName)
//             .subItems.map((item) => (
//               <NavItem key={item.href} href={item.href}>
//                 {item.name}
//               </NavItem>
//             ))}
//         </ul>
//       </div>
//     </nav>
//   );
// }

// function NavItem({ href, children }) {
//   return (
//     <li>
//       <NavLink
//         to={href}
//         className={({ isActive }) =>
//           `block py-2 px-6 hover:bg-primary/10 hover:text-primary transition-colors duration-200 text-sm font-medium border-l-2 ${
//             isActive
//               ? "text-primary border-primary bg-primary/10"
//               : "text-foreground border-transparent"
//           }`
//         }
//       >
//         {children}
//       </NavLink>
//     </li>
//   );
// }

import {
  Calendar,
  ChevronDown,
  ChevronRight,
  Home,
  Inbox,
  Search,
  Settings,
} from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuBadge,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  SidebarRail,
} from "@/components/ui/sidebar";
import { NavLink } from "react-router-dom";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "./ui/collapsible";

// Menu items.
// const items = [
//   {
//     name: "Home",
//     href: "#",
//   },
//   {
//     name: "About HBS",
//     href: "#",
//     subItems: [
//       { name: "The Name", href: "#" },
//       { name: "Our Mission & Vision", href: "#" },
//       { name: "Organizational Structure", href: "#" },
//       { name: "Board of Directors", href: "#" },
//       { name: "Vice Chancellor’s Message", href: "#" },
//       { name: "Registrar’s Message", href: "#" },
//       { name: "Chairman’s Message", href: "#" },
//       { name: "Executive Director’s Message", href: "#" },
//       { name: "Principal’s Message MBBS Section", href: "#" },
//       { name: "Principal’s Message BDS Section", href: "#" },
//     ],
//   },
//   {
//     name: "Our College",
//     href: "#",
//     subItems: [
//       { name: "Faculty MBBS Section", href: "#" },
//       { name: "Faculty BDS Section", href: "#" },
//       { name: "Academics", href: "#" },
//       { name: "Positions & Distinctions", href: "#" },
//       { name: "Hostel", href: "#" },
//       { name: "Media Gallery", href: "#" },
//       { name: "DME", href: "#" },
//       { name: "QEC", href: "#" },
//       { name: "Vacant Seats", href: "#" },
//     ],
//   },
//   {
//     name: "Affiliations",
//     href: "#",
//     subItems: [
//       { name: "PMDC Recognition For MBBS Section", href: "#" },
//       { name: "PMDC Recognition For BDS Section", href: "#" },
//       { name: "SZABMU Affiliation For MBBS", href: "#" },
//       { name: "SZABMU Affiliation For BDS", href: "#" },
//       {
//         name: "Federal Govt. Notification for HBS Medical & Dental College (MBBS Section)",
//         href: "#",
//       },
//       {
//         name: "Federal Govt. Notification for HBS Medical & Dental College (BDS Section)",
//         href: "#",
//       },
//       { name: "World Directory of Medical Schools", href: "#" },
//     ],
//   },
//   {
//     name: "Admissions",
//     href: "#",
//     subItems: [
//       { name: "MBBS Merit List 2024-25", href: "#" },
//       { name: "Admission Updates", href: "#" },
//       { name: "Admission Policy", href: "#" },
//       { name: "Fee Structure", href: "#" },
//       { name: "Online Admission", href: "#" },
//       { name: "Find our Programs", href: "#" },
//     ],
//   },
//   {
//     name: "Academics",
//     href: "#",
//     subItems: [
//       { name: "Medical Sciences", href: "#" },
//       { name: "Dental Sciences", href: "#" },
//       { name: "College Committees", href: "#" },
//     ],
//   },
//   {
//     name: "Students",
//     href: "#",
//     subItems: [
//       { name: "Life at HBS", href: "#" },
//       { name: "Ground Rules", href: "#" },
//       { name: "Student Portal", href: "#" },
//       { name: "Admission Portal", href: "#" },
//       { name: "HBS Library", href: "#" },
//       { name: "HEC Digital Library", href: "#" },
//       { name: "Media Gallery", href: "#" },
//       { name: "Timetables", href: "#" },
//       { name: "HBS Journal", href: "#" },
//       { name: "Hostel", href: "#" },
//       { name: "Student Affairs Deptt.", href: "#" },
//       { name: "Student Facilities", href: "#" },
//       { name: "Student Societies", href: "#" },
//       { name: "Sports and Events", href: "#" },
//       { name: "HBS Magazine", href: "#" },
//       { name: "Policy for Electives 2024", href: "#" },
//     ],
//   },
//   {
//     name: "Contact Us",
//     href: "#",
//   },
//   {
//     name: "Vacant Seats",
//     href: "#",
//     subItems: [
//       { name: "Vacant Seats", href: "#" },
//       { name: "Vacant Seats Policy", href: "#" },
//       { name: "Download Transfer Form", href: "#" },
//       { name: "Transfer Merit List for MBBS", href: "#" },
//       { name: "Transfer Merit List for BDS", href: "#" },
//     ],
//   },
// ];

import {
  FaUniversity,
  FaUserTie,
  FaUserGraduate,
  FaBook,
  FaUserFriends,
  FaInfoCircle,
  FaClipboardList,
  FaHospitalUser,
  FaUserMd,
  FaUsers,
  FaAward,
  FaHome,
  FaGraduationCap,
  FaClipboardCheck,
  FaNewspaper,
  FaUserCheck,
  FaCircle,
} from "react-icons/fa";

const items = [
  {
    name: "Home",
    href: "/colleges/mdc",
    icon: FaHome,
  },
  {
    name: "About HBS",
    href: "#",
    icon: FaUniversity,
    subItems: [
      { name: "The Name", href: "#", icon: FaInfoCircle },
      { name: "Our Mission & Vision", href: "#", icon: FaClipboardList },
      { name: "Organizational Structure", href: "#", icon: FaUsers },
      { name: "Board of Directors", href: "#", icon: FaUserTie },
      { name: "Vice Chancellor’s Message", href: "#", icon: FaUserMd },
      { name: "Registrar’s Message", href: "#", icon: FaUserCheck },
      { name: "Chairman’s Message", href: "#", icon: FaUserMd },
      { name: "Executive Director’s Message", href: "#", icon: FaUserMd },
      { name: "Principal’s Message MBBS Section", href: "#", icon: FaUserMd },
      { name: "Principal’s Message BDS Section", href: "#", icon: FaUserMd },
    ],
  },
  {
    name: "Our College",
    href: "#",
    icon: FaGraduationCap,
    subItems: [
      { name: "Faculty MBBS Section", href: "#", icon: FaUserGraduate },
      { name: "Faculty BDS Section", href: "#", icon: FaUserGraduate },
      { name: "Academics", href: "#", icon: FaBook },
      { name: "Positions & Distinctions", href: "#", icon: FaAward },
      { name: "Hostel", href: "#", icon: FaHome },
      { name: "Media Gallery", href: "#", icon: FaNewspaper },
      { name: "DME", href: "#", icon: FaClipboardCheck },
      { name: "QEC", href: "#", icon: FaClipboardCheck },
      { name: "Vacant Seats", href: "#", icon: FaClipboardCheck },
    ],
  },
  {
    name: "Affiliations",
    href: "#",
    icon: FaUserFriends,
    subItems: [
      {
        name: "PMDC Recognition For MBBS Section",
        href: "#",
        icon: FaClipboardCheck,
      },
      {
        name: "PMDC Recognition For BDS Section",
        href: "#",
        icon: FaClipboardCheck,
      },
      { name: "SZABMU Affiliation For MBBS", href: "#", icon: FaUserMd },
      { name: "SZABMU Affiliation For BDS", href: "#", icon: FaUserMd },
      {
        name: "Federal Govt. Notification for HBS Medical & Dental College (MBBS Section)",
        href: "#",
        icon: FaClipboardCheck,
      },
      {
        name: "Federal Govt. Notification for HBS Medical & Dental College (BDS Section)",
        href: "#",
        icon: FaClipboardCheck,
      },
      {
        name: "World Directory of Medical Schools",
        href: "#",
        icon: FaGraduationCap,
      },
    ],
  },
  {
    name: "Admissions",
    href: "#",
    icon: FaClipboardList,
    subItems: [
      { name: "MBBS Merit List 2024-25", href: "#", icon: FaClipboardCheck },
      { name: "Admission Updates", href: "#", icon: FaNewspaper },
      { name: "Admission Policy", href: "#", icon: FaClipboardList },
      { name: "Fee Structure", href: "#", icon: FaClipboardList },
      { name: "Online Admission", href: "#", icon: FaUserCheck },
      { name: "Find our Programs", href: "#", icon: FaBook },
    ],
  },
  {
    name: "Academics",
    href: "#",
    icon: FaBook,
    subItems: [
      { name: "Medical Sciences", href: "#", icon: FaHospitalUser },
      { name: "Dental Sciences", href: "#", icon: FaHospitalUser },
      { name: "College Committees", href: "#", icon: FaUsers },
    ],
  },
  {
    name: "Students",
    href: "#",
    icon: FaUserGraduate,
    subItems: [
      { name: "Life at HBS", href: "#", icon: FaUserFriends },
      { name: "Ground Rules", href: "#", icon: FaClipboardList },
      { name: "Student Portal", href: "#", icon: FaUserCheck },
      { name: "Admission Portal", href: "#", icon: FaUserCheck },
      { name: "HBS Library", href: "#", icon: FaBook },
      { name: "HEC Digital Library", href: "#", icon: FaBook },
      { name: "Media Gallery", href: "#", icon: FaNewspaper },
      { name: "Timetables", href: "#", icon: FaClipboardCheck },
      { name: "HBS Journal", href: "#", icon: FaNewspaper },
      { name: "Hostel", href: "#", icon: FaHome },
      { name: "Student Affairs Deptt.", href: "#", icon: FaUserMd },
      { name: "Student Facilities", href: "#", icon: FaClipboardList },
      { name: "Student Societies", href: "#", icon: FaUsers },
      { name: "Sports and Events", href: "#", icon: FaUserFriends },
      { name: "HBS Magazine", href: "#", icon: FaNewspaper },
      { name: "Policy for Electives 2024", href: "#", icon: FaClipboardList },
    ],
  },
  {
    name: "Contact Us",
    href: "#",
    icon: FaUserCheck,
  },
  {
    name: "Vacant Seats",
    href: "#",
    icon: FaClipboardCheck,
    subItems: [
      { name: "Vacant Seats", href: "#", icon: FaClipboardCheck },
      { name: "Vacant Seats Policy", href: "#", icon: FaClipboardList },
      { name: "Download Transfer Form", href: "#", icon: FaClipboardCheck },
      {
        name: "Transfer Merit List for MBBS",
        href: "#",
        icon: FaClipboardCheck,
      },
      {
        name: "Transfer Merit List for BDS",
        href: "#",
        icon: FaClipboardCheck,
      },
    ],
  },
];

export default function SideNav() {
  return (
    <Sidebar variant="" collapsible="icon" className="sticky">
      <SidebarContent className="">
        <SidebarGroup>
          {/* <SidebarGroupLabel className="mb-4">
            <FaCircle/> <span>Medical & Dental College</span>
          </SidebarGroupLabel> */}
          <SidebarGroupContent className="mt-12">
            <SidebarMenu>
              {items.map((item) =>
                item.subItems && item.subItems.length > 0 ? (
                  <Collapsible key={item.name} className="group/collapsible">
                    {/* <SidebarMenuItem> */}
                    <CollapsibleTrigger asChild>
                      <SidebarMenuItem>
                        <SidebarMenuButton>
                          {item.icon && <item.icon />}
                          <span>{item.name}</span>
                        </SidebarMenuButton>
                        <SidebarMenuBadge>
                          <ChevronRight
                            size={16}
                            className="transition-transform group-data-[state=open]/collapsible:rotate-90"
                          />
                        </SidebarMenuBadge>
                      </SidebarMenuItem>
                    </CollapsibleTrigger>
                    <CollapsibleContent>
                      <SidebarMenuSub>
                        {item.subItems.map((subItem) => (
                          <SidebarMenuSubItem key={subItem.name}>
                            <SidebarMenuSubButton asChild>
                              <NavLink
                                className={({ isActive }) =>
                                  isActive && "active"
                                }
                                to={subItem.href}
                              >
                                {subItem.icon && <subItem.icon />}
                                <span>{subItem.name}</span>
                              </NavLink>
                            </SidebarMenuSubButton>
                          </SidebarMenuSubItem>
                        ))}
                      </SidebarMenuSub>
                    </CollapsibleContent>
                    {/* </SidebarMenuItem> */}
                  </Collapsible>
                ) : (
                  <SidebarMenuItem key={item.name}>
                    <SidebarMenuButton asChild>
                      <NavLink to={item.href}>
                        {item.icon && <item.icon />}
                        <span>{item.name}</span>
                      </NavLink>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                )
              )}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  );
}
