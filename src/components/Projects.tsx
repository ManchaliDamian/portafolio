import { ExternalLink, Github } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const Projects = () => {
  const projects = [
    {
      title: "Sistema de Asignaciones de Personas",
      description: "API REST desarrollada en Java con Spring Boot para la gestión inteligente de personas y asignación automática a grupos de trabajo. Incluye validaciones de estado, prevención de asignaciones duplicadas y manejo robusto de excepciones personalizadas.",
      techs: ["Java 17", "Spring Boot", "Spring Data JPA", "PostgreSQL", "Hibernate", "Gradle"],
      github: "https://github.com/ManchaliDamian/asignador-tareas",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=600&fit=crop"
    },
    {
      title: "Sistema de Gestión de Espíritus",
      description: "Proyecto académico desarrollado en Java con Spring Boot, orientado a la creación y gestión de espíritus, médiums y ubicaciones sobrenaturales. Incluye operaciones CRUD y relaciones complejas entre entidades.",
      techs: ["Spring Boot", "PostgreSQL", "MongoDB", "Neo4j", "Firebase"],
      github: "https://github.com/ManchaliDamian/epers-unq",
      image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800&h=600&fit=crop"
    },
    {
      title: "Sistema de Alquileres",
      description: "Proyecto académico desarrollado en Java orientado a la gestión de alquileres. Implementa patrones de diseño como State, Strategy y Observer para gestionar estados de reservas y notificaciones.",
      techs: ["Java", "Patrones de Diseño", "State", "Strategy", "Observer"],
      github: "https://github.com/axlg98/SistAlquileresTemporales-TpFinal",
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=600&fit=crop"
    },
    {
      title: "JournalApp",
      description: "Aplicación de notas basada en React y Firebase que permite a los usuarios registrar y organizar sus pensamientos en una interfaz intuitiva y moderna.",
      techs: ["React", "Redux Toolkit", "React Router", "MaterialUI", "Firebase"],
      github: "https://github.com/ManchaliDamian/journalApp",
      demo: "https://manchalidamian.github.io/journalApp/#/auth/login",
      image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800&h=600&fit=crop"
    },
    {
      title: "GifExpertApp",
      description: "Aplicación web desarrollada con React que permite buscar y visualizar gifs animados mediante la API de Giphy.",
      techs: ["React", "API REST", "JavaScript"],
      github: "https://github.com/ManchaliDamian/GifApp",
      demo: "https://manchalidamian.github.io/GifApp/",
      image: "https://images.unsplash.com/photo-1614680376593-902f74cf0d41?w=800&h=600&fit=crop"
    },
  ];

  return (
    <section id="proyectos" className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="mb-4">
              Proyectos <span className="gradient-text">Destacados</span>
            </h2>
            <div className="w-20 h-1 gradient-bg mx-auto rounded-full"></div>
            <p className="text-muted-foreground mt-4 text-lg max-w-2xl mx-auto">
              Estos son algunos de los proyectos en los que he trabajado, aplicando las mejores prácticas de desarrollo.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card
                key={index}
                className="overflow-hidden hover:shadow-elegant transition-smooth hover:-translate-y-1 shadow-card group"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-smooth group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent"></div>
                </div>
                <CardHeader>
                  <CardTitle className="text-xl">{project.title}</CardTitle>
                  <CardDescription className="text-base leading-relaxed">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.techs.map((tech) => (
                      <Badge
                        key={tech}
                        variant="outline"
                        className="text-xs"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex gap-3">
                    {project.github && (
                      <Button
                        variant="outline"
                        size="sm"
                        className="gap-2"
                        asChild
                      >
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Github size={16} />
                          Código
                        </a>
                      </Button>
                    )}
                    {project.demo && (
                      <Button
                        size="sm"
                        className="gap-2 gradient-bg text-white"
                        asChild
                      >
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <ExternalLink size={16} />
                          Demo
                        </a>
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
