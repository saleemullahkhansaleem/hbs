import {
  FaUserGraduate,
  FaBook,
  FaUserFriends,
  FaClipboardList,
  FaUserMd,
  FaUsers,
  FaAward,
  FaHome,
  FaClipboardCheck,
  FaNewspaper,
  FaUserCheck,
} from "react-icons/fa";

export const collegesData = [
  {
    title: "HBS Medical & Dental College",
    name: "MDC",
    logo: "/images/colleges/mdc/logo.png",
    banner: "/images/colleges/mdc/banner.jpg",
    description:
      "HBS Medical & Dental College is a premier institution dedicated to providing quality education in the fields of medicine and dentistry. Our mission is to shape the future of healthcare by nurturing skilled professionals who are committed to excellence and compassionate care.",

    keyword: "HBS MDC, Medical College, Dental College",
    location: "Islamabad, Pakistan",
    established: "2018",
    affiliation: "University of Health Sciences (UHS) Lahore",
    recognition: "Pakistan Medical Commission (PMC)",
    navItems: [
      {
        name: "College",
        group: [
          {
            name: "Home",
            href: "/colleges/mdc",
            icon: FaHome,
          },
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
        ],
      },
      {
        name: "Students",
        group: [
          {
            name: "Students",
            href: "#",
            icon: FaUserGraduate,
            subItems: [
              { name: "Life at HBS", href: "life-at-hbs", icon: FaUserFriends },
              {
                name: "Ground Rules",
                href: "ground-rules",
                icon: FaClipboardList,
              },
              {
                name: "Student Portal",
                href: "student-portal",
                icon: FaUserCheck,
              },
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
              {
                name: "Student Societies",
                href: "student-societies",
                icon: FaUsers,
              },
            ],
          },
          // { name: "HBS Library", href: "hbs-library", icon: FaBook },
          {
            name: "HEC Digital Library",
            href: "http://www.digitallibrary.edu.pk/hbs-med-college-isb.html",
            icon: FaBook,
          },
          { name: "Timetables", href: "timetables", icon: FaClipboardCheck },
          // { name: "Hostel", href: "hostel", icon: FaHome },
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
    ],
  },
  {
    title: "HBS College of Paramedics",
    name: "Paramedics",
    logo: "/images/colleges/paramedics/logo.png",
    banner: "/images/colleges/paramedics/banner.jpg",
    description:
      "HBS College of Paramedics is a premier institution dedicated to providing quality education in the field of paramedics. Our mission is to shape the future of healthcare by nurturing skilled professionals who are committed to excellence and compassionate care.",
    keyword: "HBS Paramedics, Paramedics College",
    location: "Islamabad, Pakistan",
    established: "2018",
    affiliation: "University of Health Sciences (UHS) Lahore",
    recognition: "Pakistan Medical Commission (PMC)",
    navItems: [
      {
        name: "College",
        group: [
          {
            name: "Home",
            href: "/colleges/paramedics",
            icon: FaHome,
          },
          {
            name: "Faculty",
            href: "faculty",
            icon: FaUserGraduate,
          },
          {
            name: "Academics",
            href: "academics",
            icon: FaBook,
          },
          {
            name: "Admissions",
            href: "admissions",
            icon: FaClipboardList,
          },
          {
            name: "Media Gallery",
            href: "media-gallery",
            icon: FaNewspaper,
          },
        ],
      },
    ],
  },
  {
    title: "HBS College of Nursing",
    name: "Nursing",
    logo: "/images/colleges/nursing/logo.png",
    banner: "/images/colleges/nursing/banner.jpg",
    description:
      "HBS College of Nursing is a premier institution dedicated to providing quality education in the field of nursing. Our mission is to shape the future of healthcare by nurturing skilled professionals who are committed to excellence and compassionate care.",

    keyword: "HBS Nursing, Nursing College",
    location: "Islamabad, Pakistan",
    established: "2018",
    affiliation: "University of Health Sciences (UHS) Lahore",
    recognition: "Pakistan Nursing Council (PNC)",
    navItems: [
      {
        name: "College",
        group: [
          {
            name: "Home",
            href: "/colleges/nursing",
            icon: FaHome,
          },
          {
            name: "Faculty",
            href: "faculty",
            icon: FaUserGraduate,
          },
          {
            name: "Academics",
            href: "academics",
            icon: FaBook,
          },
          {
            name: "Admissions",
            href: "admissions",
            icon: FaClipboardList,
          },
          {
            name: "Media Gallery",
            href: "media-gallery",
            icon: FaNewspaper,
          },
        ],
      },
    ],
  },
  {
    title: "HBS College of Pharmacy",
    name: "Pharmacy",
    logo: "/images/colleges/pharmacy/logo.png",
    banner: "/images/colleges/pharmacy/banner.jpg",
    description:
      "HBS College of Pharmacy is a premier institution dedicated to providing quality education in the field of pharmacy. Our mission is to shape the future of healthcare by nurturing skilled professionals who are committed to excellence and compassionate care.",
    keyword: "HBS Pharmacy, Pharmacy College",
    location: "Islamabad, Pakistan",
    established: "2018",
    affiliation: "University of Health Sciences (UHS) Lahore",
    recognition: "Pakistan Medical Commission (PMC)",
    navItems: [
      {
        name: "College",
        group: [
          {
            name: "Home",
            href: "/colleges/pharmacy",
            icon: FaHome,
          },
          {
            name: "Faculty",
            href: "faculty",
            icon: FaUserGraduate,
          },
          {
            name: "Academics",
            href: "academics",
            icon: FaBook,
          },
          {
            name: "Admissions",
            href: "admissions",
            icon: FaClipboardList,
          },
          {
            name: "Media Gallery",
            href: "media-gallery",
            icon: FaNewspaper,
          },
        ],
      },
    ],
  },
  {
    title: "HBS College of Allied Health Sciences",
    name: "AHS",
    logo: "/images/colleges/ahs/logo.png",
    banner: "/images/colleges/ahs/banner.jpg",
    description:
      "HBS College of Allied Health Sciences is a premier institution dedicated to providing quality education in the field of allied health sciences. Our mission is to shape the future of healthcare by nurturing skilled professionals who are committed to excellence and compassionate care.",

    keyword: "HBS AHS, Allied Health Sciences College",
    location: "Islamabad, Pakistan",
    established: "2018",
    affiliation: "University of Health Sciences (UHS) Lahore",
    recognition: "Pakistan Medical Commission (PMC)",
    navItems: [
      {
        name: "College",
        group: [
          {
            name: "Home",
            href: "/colleges/ahs",
            icon: FaHome,
          },
          {
            name: "Faculty",
            href: "faculty",
            icon: FaUserGraduate,
          },
          {
            name: "Academics",
            href: "academics",
            icon: FaBook,
          },
          {
            name: "Admissions",
            href: "admissions",
            icon: FaClipboardList,
          },
          {
            name: "Media Gallery",
            href: "media-gallery",
            icon: FaNewspaper,
          },
        ],
      },
    ],
  },
];
