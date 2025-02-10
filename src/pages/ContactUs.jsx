import { contactData } from "./Home";
import { ContactForm, SecondaryHeader } from "@/components";

export default function ContactUs() {
  return (
    <>
      <SecondaryHeader
        title="Get in Touch"
        description="Connect with us to learn more about our initiatives, partnerships, and how you can contribute to creating sustainable change."
      />

      <section className="py-12">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {contactData.map((item, index) => (
              <div key={index} className="text-center relative group">
                <div className="absolute inset-8 bg-gradient-to-br from-primary/0 via-primary/10 to-primary/0 z-0 blur-xl"></div>
                {item.link && (
                  <a href={item.link} className="absolute inset-0"></a>
                )}
                <div className="p-6 bg-primary/5 relative">
                  <item.icon className="mx-auto mb-4 h-12 w-12 text-primary" />
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  {item.link ? (
                    <a
                      href={item.link}
                      className="text-muted-foreground group-hover:underline group-hover:text-primary"
                    >
                      {item.content}
                    </a>
                  ) : (
                    <p className="text-muted-foreground group-hover:text-foreground">
                      {item.content}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Contact Form Section */}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <ContactForm />
            {/* Map Section */}
            <div className="w-full h-full rounded-lg overflow-hidden shadow-md">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d414.85672024980227!2d73.06246714048181!3d33.712732771893755!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38dfbfa2b4a3278d%3A0x34a59e63033052c2!2sAl-Malik%20Centre!5e0!3m2!1sen!2s!4v1738562129709!5m2!1sen!2s"
                width="100%"
                height="100%"
                allowFullScreen=""
                loading="lazy"
                title="Damaan Location"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
