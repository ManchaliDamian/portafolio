import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const scrollToProjects = () => {
    const element = document.getElementById("proyectos");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,hsl(217,91%,60%,0.08),transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,hsl(199,89%,48%,0.08),transparent_50%)]"></div>
      
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-6 animate-fade-in">
            <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
              Desarrollador Backend
            </span>
          </div>
          
          <h1 className="mb-6 animate-fade-in-delay-1">
            Hola, soy <span className="gradient-text">Damián Manchali</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto animate-fade-in-delay-2 leading-relaxed">
            Especializado en el diseño e implementación de <span className="text-foreground font-medium">APIs REST</span> con <span className="text-foreground font-medium">Java y Spring Boot</span>, siguiendo buenas prácticas y principios SOLID.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 animate-fade-in-delay-3">
            <Button
              onClick={scrollToProjects}
              size="lg"
              className="gradient-bg text-white hover:opacity-90 transition-smooth shadow-elegant"
            >
              Ver Proyectos
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-2 hover:bg-secondary transition-smooth"
              onClick={() => {
                const element = document.getElementById("contacto");
                if (element) element.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Contáctame
            </Button>
          </div>

          <div className="flex items-center justify-center gap-6 animate-fade-in-delay-4">
            <a
              href="https://github.com/ManchaliDamian"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-smooth hover:scale-110"
            >
              <Github size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/damian-manchali-59a0b9257/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-smooth hover:scale-110"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="mailto:damianmanchali@gmail.com"
              className="text-muted-foreground hover:text-foreground transition-smooth hover:scale-110"
            >
              <Mail size={24} />
            </a>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <ArrowDown className="text-muted-foreground" size={24} />
        </div>
      </div>
    </section>
  );
};

export default Hero;
