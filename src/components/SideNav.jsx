import { ChevronRight } from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuBadge,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  SidebarRail,
  useSidebar,
} from "@/components/ui/sidebar";
import { Link, NavLink, useLocation } from "react-router-dom";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "./ui/collapsible";

//   {
//     name: "College",
//     group: [
//       {
//         name: "Home",
//         href: "/colleges/mdc",
//         icon: FaHome,
//       },
//       {
//         name: "Faculty MBBS Section",
//         href: "faculty-mbbs",
//         icon: FaUserGraduate,
//       },
//       {
//         name: "Faculty BDS Section",
//         href: "faculty-bds",
//         icon: FaUserGraduate,
//       },
//       // { name: "Academics", href: "#", icon: FaBook },
//       {
//         name: "Positions & Distinctions",
//         href: "positions-distinctions",
//         icon: FaAward,
//       },
//       // { name: "Hostel", href: "#", icon: FaHome },
//       { name: "Media Gallery", href: "media-gallery", icon: FaNewspaper },
//       { name: "DME", href: "dme", icon: FaClipboardCheck },
//       // { name: "QEC", href: "#", icon: FaClipboardCheck },
//       // { name: "Vacant Seats", href: "#", icon: FaClipboardCheck },
//       {
//         name: "Admissions",
//         href: "admissions",
//         icon: FaClipboardList,
//         // subItems: [
//         //   { name: "MBBS Merit List 2024-25", href: "#", icon: FaClipboardCheck },
//         //   { name: "Admission Updates", href: "#", icon: FaNewspaper },
//         //   { name: "Admission Policy", href: "#", icon: FaClipboardList },
//         //   { name: "Fee Structure", href: "#", icon: FaClipboardList },
//         //   { name: "Online Admission", href: "#", icon: FaUserCheck },
//         //   { name: "Find our Programs", href: "#", icon: FaBook },
//         // ],
//       },
//       {
//         name: "Academics",
//         href: "academics",
//         icon: FaBook,
//         // subItems: [
//         //   { name: "Medical Sciences", href: "#", icon: FaHospitalUser },
//         //   { name: "Dental Sciences", href: "#", icon: FaHospitalUser },
//         //   { name: "College Committees", href: "#", icon: FaUsers },
//         // ],
//       },
//     ],
//   },
//   {
//     name: "Students",
//     group: [
//       {
//         name: "Students",
//         href: "#",
//         icon: FaUserGraduate,
//         subItems: [
//           { name: "Life at HBS", href: "life-at-hbs", icon: FaUserFriends },
//           { name: "Ground Rules", href: "ground-rules", icon: FaClipboardList },
//           { name: "Student Portal", href: "student-portal", icon: FaUserCheck },
//           {
//             name: "Student Affairs Deptt.",
//             href: "student-affairs",
//             icon: FaUserMd,
//           },
//           {
//             name: "Student Facilities",
//             href: "student-facilities",
//             icon: FaClipboardList,
//           },
//           {
//             name: "Student Societies",
//             href: "student-societies",
//             icon: FaUsers,
//           },
//         ],
//       },
//       // { name: "HBS Library", href: "hbs-library", icon: FaBook },
//       {
//         name: "HEC Digital Library",
//         href: "http://www.digitallibrary.edu.pk/hbs-med-college-isb.html",
//         icon: FaBook,
//       },
//       { name: "Timetables", href: "timetables", icon: FaClipboardCheck },
//       // { name: "Hostel", href: "hostel", icon: FaHome },
//       {
//         name: "Sports and Events",
//         href: "sports-events-gallery",
//         icon: FaUserFriends,
//       },
//       { name: "HBS Magazine", href: "hbs-magazine", icon: FaNewspaper },
//       {
//         name: "Policy for Electives 2024",
//         href: "policy-for-electives-2024",
//         icon: FaClipboardList,
//       },
//       // { name: "Admission Portal", href: "#", icon: FaUserCheck },
//       // { name: "Media Gallery", href: "#", icon: FaNewspaper },
//       // { name: "HBS Journal", href: "#", icon: FaNewspaper },
//     ],
//   },
// ];

export default function SideNav({ collegeData }) {
  const location = useLocation();

  const {
    state,
    open,
    setOpen,
    openMobile,
    setOpenMobile,
    isMobile,
    toggleSidebar,
  } = useSidebar();
  return (
    <Sidebar variant="" collapsible="icon" className="bg-background sticky">
      <SidebarHeader>
        <Link
          to="/"
          className="flex items-center gap-2 mt-10"
          title="HBS Medical & Dental College"
        >
          <img
            src={collegeData.logo}
            // src="/images/logos/logo.png"
            alt="logo"
            height={100}
            className="w-10 bg-white rounded-full"
          />
          {state === "expanded" && (
            <h1 className="text-lg font-semibold">HBS {collegeData.name}</h1>
          )}
        </Link>
      </SidebarHeader>
      <SidebarContent className="">
        {collegeData.navItems.map((groupItem) => (
          <SidebarGroup key={groupItem.name}>
            <SidebarGroupLabel className="text-muted-foreground">
              {groupItem.name}
            </SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {groupItem.group.map((item) =>
                  item.subItems && item.subItems.length > 0 ? (
                    <Collapsible key={item.name} className="group/collapsible">
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
                          {item.subItems.map((subItem, index) => (
                            <SidebarMenuSubItem key={subItem.name}>
                              <SidebarMenuSubButton
                                onClick={() => setOpenMobile(false)}
                                className="data-[active=true]:text-primary data-[active=true]:bg-primary/10"
                                isActive={
                                  subItem.href ===
                                  location.pathname.split("/").pop()
                                }
                                asChild
                              >
                                <NavLink to={subItem.href}>
                                  {subItem.icon && <subItem.icon />}
                                  <span>{subItem.name}</span>
                                </NavLink>
                              </SidebarMenuSubButton>
                            </SidebarMenuSubItem>
                          ))}
                        </SidebarMenuSub>
                      </CollapsibleContent>
                    </Collapsible>
                  ) : (
                    <SidebarMenuItem key={item.name}>
                      <SidebarMenuButton
                        asChild
                        className="data-[active=true]:text-primary data-[active=true]:bg-primary/10"
                        onClick={() => setOpenMobile(false)}
                        isActive={
                          item.href === location.pathname.split("/").pop()
                        }
                      >
                        <NavLink to={item.href} title={item.name}>
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
        ))}
      </SidebarContent>
      {/* <SidebarFooter>
        <SidebarMenuButton title="Logout">
          <LogOut />
          Logout
        </SidebarMenuButton>
      </SidebarFooter> */}
      <SidebarRail />
    </Sidebar>
  );
}
