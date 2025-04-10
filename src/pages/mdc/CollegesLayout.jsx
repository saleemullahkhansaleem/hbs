import { Outlet } from "react-router-dom";
import { SecondaryHeader, SideNav } from "@/components";
import { Helmet } from "react-helmet-async";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { collegesData } from "@/data";

export default function CollegesLayout({ pageName }) {
  const collegeData = collegesData.find((item) => item.name === pageName) || {};
  return (
    <>
      <Helmet>
        <title>{collegeData.title}</title>
        <meta name="description" content={collegeData.description} />
        <meta name="keywords" content={collegeData?.keyword} />

        <meta property="og:title" content={collegeData.title} />
        <meta property="og:description" content={collegeData.description} />
      </Helmet>

      {/* <SecondaryHeader
        title={collegeData.title}
        description={collegeData.description}
      /> */}
      <div className="relative">
        <SidebarProvider className="">
          <SideNav collegeData={collegeData} />
          <main className="flex-grow relative">
            <SidebarTrigger className="m-4 absolute top-0 left-0 z-20" />
            <Outlet />
          </main>
        </SidebarProvider>
      </div>
    </>
  );
}
