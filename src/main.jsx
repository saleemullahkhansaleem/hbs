import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Layout.jsx";
import "@fontsource/poppins";
import {
  About,
  Academics,
  Admissions,
  AHSAcademics,
  AHSAdmissions,
  AHSFaculty,
  AHSLife,
  AHSMediaGallery,
  Careers,
  CollegesLayout,
  ConferencesWorkshops,
  ContactUs,
  DME,
  FacultyBDS,
  FacultyMBBS,
  GroundRules,
  HBSJournal,
  HBSMagazine,
  Home,
  HomeAHS,
  HomeMDC,
  HomeNursing,
  HomeParamedics,
  HomePharmacy,
  LifeAtHBS,
  MediaGallery,
  News,
  NotFound,
  NursingAcademics,
  NursingAdmissions,
  NursingFaculty,
  NursingLife,
  NursingMediaGallery,
  ParamedicAcademics,
  ParamedicAdmissions,
  ParamedicFaculty,
  ParamedicLife,
  ParamedicMediaGallery,
  PharmacyAcademics,
  PharmacyAdmissions,
  PharmacyFaculty,
  PharmacyLife,
  PharmacyMediaGallery,
  PositionsDistinctions,
  Programs,
  QEC,
  RD,
  ResearchPipeline,
  ResearchPublications,
  SportsEventsGallery,
  StudentAffairs,
  StudentFacilities,
  StudentSocieties,
  Team,
  Timetables,
} from "./pages";
import { Provider } from "react-redux";
import store from "./redux/store";
import { HelmetProvider } from "react-helmet-async";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "colleges/mdc",
        element: <CollegesLayout pageName="MDC" />,
        children: [
          {
            path: "",
            element: <HomeMDC />,
          },
          {
            path: "faculty-mbbs",
            element: <FacultyMBBS />,
          },
          {
            path: "faculty-bds",
            element: <FacultyBDS />,
          },
          {
            path: "academics",
            element: <Academics />,
          },
          {
            path: "admissions",
            element: <Admissions />,
          },
          {
            path: "positions-distinctions",
            element: <PositionsDistinctions />,
          },
          {
            path: "media-gallery",
            element: <MediaGallery />,
          },
          {
            path: "dme",
            element: <DME />,
          },
          {
            path: "life-at-hbs",
            element: <LifeAtHBS />,
          },
          {
            path: "student-facilities",
            element: <StudentFacilities />,
          },
          {
            path: "ground-rules",
            element: <GroundRules />,
          },
          {
            path: "student-societies",
            element: <StudentSocieties />,
          },
          {
            path: "sports-events-gallery",
            element: <SportsEventsGallery />,
          },
          {
            path: "hbs-magazine",
            element: <HBSMagazine />,
          },
          {
            path: "student-affairs",
            element: <StudentAffairs />,
          },
          {
            path: "timetables",
            element: <Timetables />,
          },
          {
            path: "*",
            element: <NotFound />,
          },
        ],
      },
      {
        path: "colleges/paramedics",
        element: <CollegesLayout pageName="Paramedics" />,
        children: [
          {
            path: "",
            element: <HomeParamedics />,
          },
          {
            path: "academics",
            element: <ParamedicAcademics />,
          },
          {
            path: "admissions",
            element: <ParamedicAdmissions />,
          },
          {
            path: "faculty",
            element: <ParamedicFaculty />,
          },
          {
            path: "life",
            element: <ParamedicLife />,
          },
          {
            path: "media-gallery",
            element: <ParamedicMediaGallery />,
          },
          {
            path: "*",
            element: <NotFound />,
          },
        ],
      },
      {
        path: "colleges/nursing",
        element: <CollegesLayout pageName="Nursing" />,
        children: [
          {
            path: "",
            element: <HomeNursing />,
          },
          {
            path: "academics",
            element: <NursingAcademics />,
          },
          {
            path: "admissions",
            element: <NursingAdmissions />,
          },
          {
            path: "faculty",
            element: <NursingFaculty />,
          },
          {
            path: "life",
            element: <NursingLife />,
          },
          {
            path: "media-gallery",
            element: <NursingMediaGallery />,
          },
          {
            path: "*",
            element: <NotFound />,
          },
        ],
      },
      {
        path: "colleges/pharmacy",
        element: <CollegesLayout pageName="Pharmacy" />,
        children: [
          {
            path: "",
            element: <HomePharmacy />,
          },
          {
            path: "academics",
            element: <PharmacyAcademics />,
          },
          {
            path: "admissions",
            element: <PharmacyAdmissions />,
          },
          {
            path: "faculty",
            element: <PharmacyFaculty />,
          },
          {
            path: "life",
            element: <PharmacyLife />,
          },
          {
            path: "media-gallery",
            element: <PharmacyMediaGallery />,
          },
          {
            path: "*",
            element: <NotFound />,
          },
        ],
      },
      {
        path: "colleges/ahs",
        element: <CollegesLayout pageName="AHS" />,
        children: [
          {
            path: "",
            element: <HomeAHS />,
          },
          {
            path: "ahs-life",
            element: <AHSLife />,
          },
          {
            path: "faculty",
            element: <AHSFaculty />,
          },
          {
            path: "academics",
            element: <AHSAcademics />,
          },
          {
            path: "admissions",
            element: <AHSAdmissions />,
          },
          {
            path: "media-gallery",
            element: <AHSMediaGallery />,
          },
          {
            path: "*",
            element: <NotFound />,
          },
        ],
      },
      {
        path: "rd",
        // element: <RD />,
        children: [
          {
            path: "research-and-development",
            element: <RD />,
          },
          {
            path: "hbs-journal",
            element: <HBSJournal />,
          },
          {
            path: "conference-workshops",
            element: <ConferencesWorkshops />,
          },
          {
            path: "research-publications",
            element: <ResearchPublications />,
          },
          {
            path: "research-pipeline",
            element: <ResearchPipeline />,
          },
        ],
      },
      {
        path: "programs",
        element: <Programs />,
      },
      {
        path: "news",
        element: <News />,
      },
      {
        path: "team",
        element: <Team />,
      },
      {
        path: "careers",
        element: <Careers />,
      },
      {
        path: "qec",
        element: <QEC />,
      },
      {
        path: "contact",
        element: <ContactUs />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <HelmetProvider>
        <RouterProvider router={router} />
      </HelmetProvider>
    </Provider>
  </StrictMode>
);
