import { Outlet } from "react-router-dom";
import { SecondaryHeader, SideNav } from "@/components";
import { Helmet } from "react-helmet-async";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";

const metadata = {
  title: "HBS Medical & Dental College",
  description: "Shaping the Future of Healthcare",
};

export default function CollegesLayout() {
  return (
    <>
      <Helmet>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content="" />

        <meta property="og:title" content={metadata.title} />
        <meta property="og:description" content={metadata.description} />
      </Helmet>

      <SecondaryHeader
        title={metadata.title}
        description={metadata.description}
      />
      <div className="relative">
        <SidebarProvider className="">
          <SideNav pageName="Our Colleges" />
          <main className="flex-grow">
            <SidebarTrigger className="m-4" />
            <Outlet />
          </main>
        </SidebarProvider>
      </div>
    </>
  );
}
