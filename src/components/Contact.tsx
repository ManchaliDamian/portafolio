import { Mail, Github, Linkedin, MapPin } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "dami.manchali.eze@gmail.com",
      link: "mailto:dami.manchali.eze@gmail.com",
    },
    {
      icon: Github,
      label: "GitHub",
      value: "ManchaliDamian",
      link: "https://github.com/ManchaliDamian",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "Damián Manchali",
      link: "https://www.linkedin.com/in/damian-manchali/",
    },
    {
      icon: FaWhatsapp,
      label: "WhatsApp",
      value: "+54 9 11 3140-3328",
      link: "https://wa.me/5491131403328",
    },
  ];

  return (
    <section id="contacto" className="py-20 md:py-32 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="mb-4">
              Trabajemos <span className="gradient-text">Juntos</span>
            </h2>
            <div className="w-20 h-1 gradient-bg mx-auto rounded-full"></div>
            <p className="text-muted-foreground mt-4 text-lg max-w-2xl mx-auto">
              Si estás buscando un desarrollador backend apasionado por la tecnología y con ganas de aportar valor a tu equipo, ¡no dudes en contactarme!
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-6 mb-8">
            {contactInfo.map((item, index) => (
              <Card
                key={index}
                className="p-6 hover:shadow-elegant transition-smooth hover:-translate-y-1 shadow-card"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-primary/10">
                    <item.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm text-muted-foreground mb-1">
                      {item.label}
                    </p>
                    {item.link ? (
                      <a
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-foreground hover:text-primary transition-smooth font-medium"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-foreground font-medium">{item.value}</p>
                    )}
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Button
              size="lg"
              className="gradient-bg text-white hover:opacity-90 transition-smooth shadow-elegant"
              asChild
            >
              <a href="mailto:dami.manchali.eze@gmail.com">
                <Mail className="mr-2" size={20} />
                Enviar un Email
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
