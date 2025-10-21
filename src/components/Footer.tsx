import { Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 border-t border-border">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center gap-2 text-center">
          <p className="text-muted-foreground flex items-center gap-2">
            Diseñado y desarrollado con <Heart className="w-4 h-4 text-red-500 fill-red-500" /> por Damián Manchali
          </p>
          <p className="text-sm text-muted-foreground">
            © {currentYear} Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
