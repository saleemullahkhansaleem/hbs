import ComingSoon from "@/components/CommingSoon";

export default function Apply() {
  return (
    <ComingSoon
      title="Opening Soon"
      pageName="Admissions @ HBS"
      description="HBS is preparing to launch its online admissions portal. Soon, aspiring students will be able to apply directly through our website for MBBS and other medical programs. Stay tuned for official announcements, important dates, and application guidelines."
      launchDate="2025-06-01"
      showNewsletter={true}
      showCountdown={true}
      showSocial={true}
      socialLinks={{
        facebook: "https://facebook.com/hbsmedical",
        twitter: "https://twitter.com/hbsmedical",
        instagram: "https://instagram.com/hbsmedical",
        linkedin: "https://linkedin.com/company/hbsmedical",
      }}
      returnUrl="/"
      // accentColor="#0F766E" // Optional: match your site theme
    />
  );
}
