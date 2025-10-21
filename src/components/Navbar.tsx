import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-smooth ${
        isScrolled
          ? "bg-background/80 backdrop-blur-lg border-b border-border shadow-card"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <a
            href="#"
            className="text-xl font-bold gradient-text hover:opacity-80 transition-smooth"
          >
            DM
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection("sobre-mi")}
              className="text-foreground/80 hover:text-foreground transition-smooth"
            >
              Sobre mí
            </button>
            <button
              onClick={() => scrollToSection("tecnologias")}
              className="text-foreground/80 hover:text-foreground transition-smooth"
            >
              Tecnologías
            </button>
            <button
              onClick={() => scrollToSection("proyectos")}
              className="text-foreground/80 hover:text-foreground transition-smooth"
            >
              Proyectos
            </button>
            <Button
              onClick={() => scrollToSection("contacto")}
              className="gradient-bg text-white hover:opacity-90 transition-smooth"
            >
              Contacto
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-border bg-background/95 backdrop-blur-lg">
            <div className="flex flex-col gap-4">
              <button
                onClick={() => scrollToSection("sobre-mi")}
                className="text-left text-foreground/80 hover:text-foreground transition-smooth py-2"
              >
                Sobre mí
              </button>
              <button
                onClick={() => scrollToSection("tecnologias")}
                className="text-left text-foreground/80 hover:text-foreground transition-smooth py-2"
              >
                Tecnologías
              </button>
              <button
                onClick={() => scrollToSection("proyectos")}
                className="text-left text-foreground/80 hover:text-foreground transition-smooth py-2"
              >
                Proyectos
              </button>
              <Button
                onClick={() => scrollToSection("contacto")}
                className="gradient-bg text-white hover:opacity-90 transition-smooth w-full"
              >
                Contacto
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
