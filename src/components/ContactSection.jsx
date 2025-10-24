import { Linkedin, Mail } from "lucide-react";

export const ContactSection = () => {
  return (
    <section id="contact" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Get In <span className="text-primary">Touch</span>{" "}
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Have a project in mind? Feel free to reach out!
        </p>

        <div className="grid grid-cols-1 gap-12">
          <div className="space-y-8 w-full max-w-md mx-auto">
            <h3 className="text-2xl font-semibold mb-6 text-center">
              Contact Information
            </h3>

            <div className="w-full rounded-2xl border border-border divide-y divide-border overflow-hidden">
              {/* Email */}
              <div className="flex items-center gap-3 p-4">
                <span className="w-9 h-9 rounded-full bg-primary/10 grid place-items-center">
                  <Mail className="h-5 w-5 text-primary" />
                </span>
                <div className="flex-1">
                  <div className="text-sm text-muted-foreground">Email</div>
                  <a
                    href="mailto:dylanm2270@gmail.com"
                    className="font-medium hover:text-primary transition-colors"
                  >
                    dylanm2270@gmail.com
                  </a>
                </div>
              </div>

              {/* LinkedIn */}
              <div className="flex items-center gap-3 p-4">
                <span className="w-9 h-9 rounded-full bg-primary/10 grid place-items-center">
                  <Linkedin className="h-5 w-5 text-primary" />
                </span>
                <div className="flex-1">
                  <div className="text-sm text-muted-foreground">LinkedIn</div>
                  <a
                    href="https://www.linkedin.com/in/dylan-mcclellan-a88885293/"
                    target="_blank"
                    rel="noreferrer"
                    className="font-medium hover:text-primary transition-colors"
                  >
                    Dylan McClellan
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
