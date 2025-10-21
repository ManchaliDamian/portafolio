import { Badge } from "@/components/ui/badge";

const TechStack = () => {
  const technologies = {
    "Lenguajes": ["Java", "JavaScript", "TypeScript"],
    "Frameworks": ["Spring Boot", "Hibernate", "React"],
    "Bases de Datos": ["PostgreSQL", "MongoDB", "Firebase Firestore", "Neo4j"],
    "Herramientas": ["Git", "GitHub", "JUnit", "Mockito", "JDBC", "Gradle"],
    "Otros": ["HTML", "CSS", "SOLID", "TDD", "Patrones de Diseño", "API REST"],
  };

  return (
    <section id="tecnologias" className="py-20 md:py-32 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="mb-4">
              Stack <span className="gradient-text">Tecnológico</span>
            </h2>
            <div className="w-20 h-1 gradient-bg mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Object.entries(technologies).map(([category, techs]) => (
              <div key={category} className="space-y-4">
                <h3 className="text-xl font-semibold text-foreground/90">
                  {category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {techs.map((tech) => (
                    <Badge
                      key={tech}
                      variant="secondary"
                      className="px-3 py-1.5 text-sm hover:bg-primary hover:text-white transition-smooth cursor-default shadow-card"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStack;
