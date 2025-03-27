import { ChevronRight } from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
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
} from "react-icons/fa";

// {
//   name: "About HBS",
//   href: "#",
//   icon: FaUniversity,
//   subItems: [
//     { name: "The Name", href: "#", icon: FaInfoCircle },
//     { name: "Our Mission & Vision", href: "#", icon: FaClipboardList },
//     { name: "Organizational Structure", href: "#", icon: FaUsers },
//     { name: "Board of Directors", href: "#", icon: FaUserTie },
//     { name: "Vice Chancellor’s Message", href: "#", icon: FaUserMd },
//     { name: "Registrar’s Message", href: "#", icon: FaUserCheck },
//     { name: "Chairman’s Message", href: "#", icon: FaUserMd },
//     { name: "Executive Director’s Message", href: "#", icon: FaUserMd },
//     { name: "Principal’s Message MBBS Section", href: "#", icon: FaUserMd },
//     { name: "Principal’s Message BDS Section", href: "#", icon: FaUserMd },
//   ],
// },
const items = [
  {
    name: "Home",
    href: "/colleges/mdc",
    icon: FaHome,
  },
  {
    name: "Our College",
    href: "#",
    icon: FaGraduationCap,
    subItems: [
      {
        name: "Faculty MBBS Section",
        href: "faculty-mbbs",
        icon: FaUserGraduate,
      },
      {
        name: "Faculty BDS Section",
        href: "faculty-bds",
        icon: FaUserGraduate,
      },
      // { name: "Academics", href: "#", icon: FaBook },
      {
        name: "Positions & Distinctions",
        href: "positions-distinctions",
        icon: FaAward,
      },
      // { name: "Hostel", href: "#", icon: FaHome },
      { name: "Media Gallery", href: "media-gallery", icon: FaNewspaper },
      { name: "DME", href: "dme", icon: FaClipboardCheck },
      // { name: "QEC", href: "#", icon: FaClipboardCheck },
      // { name: "Vacant Seats", href: "#", icon: FaClipboardCheck },
    ],
  },
  // {
  //   name: "Affiliations",
  //   href: "#",
  //   icon: FaUserFriends,
  //   subItems: [
  //     {
  //       name: "PMDC Recognition For MBBS Section",
  //       href: "#",
  //       icon: FaClipboardCheck,
  //     },
  //     {
  //       name: "PMDC Recognition For BDS Section",
  //       href: "#",
  //       icon: FaClipboardCheck,
  //     },
  //     { name: "SZABMU Affiliation For MBBS", href: "#", icon: FaUserMd },
  //     { name: "SZABMU Affiliation For BDS", href: "#", icon: FaUserMd },
  //     {
  //       name: "Federal Govt. Notification for HBS Medical & Dental College (MBBS Section)",
  //       href: "#",
  //       icon: FaClipboardCheck,
  //     },
  //     {
  //       name: "Federal Govt. Notification for HBS Medical & Dental College (BDS Section)",
  //       href: "#",
  //       icon: FaClipboardCheck,
  //     },
  //     {
  //       name: "World Directory of Medical Schools",
  //       href: "#",
  //       icon: FaGraduationCap,
  //     },
  //   ],
  // },
  {
    name: "Admissions",
    href: "admissions",
    icon: FaClipboardList,
    // subItems: [
    //   { name: "MBBS Merit List 2024-25", href: "#", icon: FaClipboardCheck },
    //   { name: "Admission Updates", href: "#", icon: FaNewspaper },
    //   { name: "Admission Policy", href: "#", icon: FaClipboardList },
    //   { name: "Fee Structure", href: "#", icon: FaClipboardList },
    //   { name: "Online Admission", href: "#", icon: FaUserCheck },
    //   { name: "Find our Programs", href: "#", icon: FaBook },
    // ],
  },
  {
    name: "Academics",
    href: "academics",
    icon: FaBook,
    // subItems: [
    //   { name: "Medical Sciences", href: "#", icon: FaHospitalUser },
    //   { name: "Dental Sciences", href: "#", icon: FaHospitalUser },
    //   { name: "College Committees", href: "#", icon: FaUsers },
    // ],
  },
  {
    name: "Students",
    href: "#",
    icon: FaUserGraduate,
    subItems: [
      { name: "Life at HBS", href: "life-at-hbs", icon: FaUserFriends },
      { name: "Ground Rules", href: "ground-rules", icon: FaClipboardList },
      { name: "Student Portal", href: "student-portal", icon: FaUserCheck },
      // { name: "HBS Library", href: "hbs-library", icon: FaBook },
      {
        name: "HEC Digital Library",
        href: "http://www.digitallibrary.edu.pk/hbs-med-college-isb.html",
        icon: FaBook,
      },
      { name: "Timetables", href: "timetables", icon: FaClipboardCheck },
      // { name: "Hostel", href: "hostel", icon: FaHome },
      {
        name: "Student Affairs Deptt.",
        href: "student-affairs",
        icon: FaUserMd,
      },
      {
        name: "Student Facilities",
        href: "student-facilities",
        icon: FaClipboardList,
      },
      { name: "Student Societies", href: "student-societies", icon: FaUsers },
      {
        name: "Sports and Events",
        href: "sports-events-gallery",
        icon: FaUserFriends,
      },
      { name: "HBS Magazine", href: "hbs-magazine", icon: FaNewspaper },
      {
        name: "Policy for Electives 2024",
        href: "policy-for-electives-2024",
        icon: FaClipboardList,
      },
      // { name: "Admission Portal", href: "#", icon: FaUserCheck },
      // { name: "Media Gallery", href: "#", icon: FaNewspaper },
      // { name: "HBS Journal", href: "#", icon: FaNewspaper },
    ],
  },
  // {
  //   name: "Contact Us",
  //   href: "#",
  //   icon: FaUserCheck,
  // },
  // {
  //   name: "Vacant Seats",
  //   href: "#",
  //   icon: FaClipboardCheck,
  //   subItems: [
  //     { name: "Vacant Seats", href: "#", icon: FaClipboardCheck },
  //     { name: "Vacant Seats Policy", href: "#", icon: FaClipboardList },
  //     { name: "Download Transfer Form", href: "#", icon: FaClipboardCheck },
  //     {
  //       name: "Transfer Merit List for MBBS",
  //       href: "#",
  //       icon: FaClipboardCheck,
  //     },
  //     {
  //       name: "Transfer Merit List for BDS",
  //       href: "#",
  //       icon: FaClipboardCheck,
  //     },
  //   ],
  // },
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
