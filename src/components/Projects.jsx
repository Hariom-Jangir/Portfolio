import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

const projects = [

{
  title: "Password Manager",
  description:
    "Secure password management application with encryption, user authentication, and cross-platform synchronization.",
  image: "/pass.png",
  github: "https://github.com/Hariom-Jangir/password-manager",
  demo: "#",
  tags: ["React", "MongoDB", "Express"],
},
{
  title: "URL Shortener",
  description:
    "Web application that shortens long URLs and provides analytics for click tracking.",
  image: "/url.png",
  github: "https://github.com/Hariom-Jangir/url-shortener",
  demo: "#",
  tags: ["Next.js", "MongoDB", "React"],
},

{
  title: "Portfolio Website",
  description:
    "Modern developer portfolio with Three.js animated background, smooth animations, and responsive design.",
  image: "/profile.jpeg",
  github: "https://github.com/Hariom-Jangir/portfolio-website",
  demo: "#",
  tags: ["React", "Three.js", "Framer Motion"],
},
];

const ProjectCard = ({ project, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.15, duration: 0.6 }}
    whileHover={{ y: -8, rotateY: 2, rotateX: -2 }}
    className="glass-card overflow-hidden hover-lift group"
    style={{ perspective: "1000px" }}
  >
    <div className="relative overflow-hidden h-48">
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
      />
      <div className="absolute inset-0 gradient-bg opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
    </div>

    <div className="p-6">
      <h3 className="text-lg font-bold font-display text-foreground mb-2">
        {project.title}
      </h3>

      <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
        {project.description}
      </p>

      <div className="flex flex-wrap gap-2 mb-4">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="text-xs px-3 py-1 rounded-full bg-secondary text-secondary-foreground font-medium"
          >
            {tag}
          </span>
        ))}
      </div>

      <div className="flex gap-3">
        <motion.a
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          href={project.github}
          className="flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
        >
          <Github size={16} /> Code
        </motion.a>

        <motion.a
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          href={project.demo}
          className="flex items-center gap-2 text-sm font-medium text-primary hover:text-primary/80 transition-colors"
        >
          <ExternalLink size={16} /> Live Demo
        </motion.a>
      </div>
    </div>
  </motion.div>
);

const Projects = () => {
  return (
    <section id="projects" className="section-padding">
      <div className="container mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold font-display text-center mb-16"
        >
          Featured <span className="gradient-text">Projects</span>
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;