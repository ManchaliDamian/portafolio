import { Code2, Database, Zap, Users } from "lucide-react";
import { Card } from "@/components/ui/card";

const About = () => {
  const highlights = [
    {
      icon: Code2,
      title: "Clean Code",
      description: "Principios SOLID y patrones de diseño",
    },
    {
      icon: Database,
      title: "Bases de Datos",
      description: "PostgreSQL, MongoDB, Neo4j y Firebase",
    },
    {
      icon: Zap,
      title: "TDD",
      description: "Desarrollo guiado por pruebas",
    },
    {
      icon: Users,
      title: "Trabajo en Equipo",
      description: "Colaboración y comunicación efectiva",
    },
  ];

  return (
    <section id="sobre-mi" className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="mb-4">
              Sobre <span className="gradient-text">mí</span>
            </h2>
            <div className="w-20 h-1 gradient-bg mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div className="space-y-6">
              <p className="text-lg text-foreground/90 leading-relaxed">
                Soy desarrollador backend con experiencia en <strong>Java y Spring Boot</strong>. Me especializo en el diseño e implementación de APIs REST siguiendo buenas prácticas como principios SOLID, TDD y patrones de diseño.
              </p>
              <p className="text-lg text-foreground/90 leading-relaxed">
                Tengo conocimientos sólidos en bases de datos relacionales como <strong>PostgreSQL</strong> y también experiencia con MongoDB, Firebase Firestore y Neo4j.
              </p>
              <p className="text-lg text-foreground/90 leading-relaxed">
                Disfruto resolver problemas técnicos, aprender de forma autodidacta y trabajar en equipo. Me destaco por mi rápida adaptación, responsabilidad y compromiso con cada proyecto.
              </p>
              <p className="text-lg text-foreground/90 leading-relaxed">
                Actualmente sigo formándome en la <strong>Universidad Nacional de Quilmes</strong> y estoy con muchas ganas de seguir creciendo en el mundo del desarrollo de software.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {highlights.map((item, index) => (
                <Card
                  key={index}
                  className="p-6 hover:shadow-elegant transition-smooth hover:-translate-y-1 cursor-default shadow-card"
                >
                  <item.icon className="w-8 h-8 text-primary mb-3" />
                  <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
