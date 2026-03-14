import { motion } from "framer-motion";
const skills = [{
  name: "HTML",
  logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
}, {
  name: "CSS",
  logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
}, {
  name: "JavaScript",
  logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
}, {
  name: "React",
  logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
}, {
  name: "Next.js",
  logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg"
}, {
  name: "Node.js",
  logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
}, {
  name: "Express.js",
  logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg"
}, {
  name: "MongoDB",
  logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg"
}, {
  name: "Python",
  logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"
}, {
  name: "C",
  logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg"
}, {
  name: "C++",
  logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg"
}];
const Skills = () => {
  return <section id="skills" className="section-padding">
      <div className="container mx-auto max-w-4xl">
        <motion.h2 initial={{
        opacity: 0,
        y: 30
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true
      }} transition={{
        duration: 0.4
      }} className="text-3xl md:text-4xl font-bold font-display text-center mb-16">
          My <span className="gradient-text">Skills</span>
        </motion.h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {skills.map((skill, i) => <motion.div key={skill.name} initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          delay: i * 0.08,
          duration: 0.5
        }} whileHover={{
          scale: 1.10,
          backgroundColor: "rgba(0,0,0,0.15)",
          boxShadow: "0 15px 50px hsl(var(--glass-shadow))",
          transition: {
            duration: 0.25
          }
        }} className="glass-card flex flex-col items-center justify-center p-6 rounded-2xl cursor-pointer">
              <img src={skill.logo} alt={`${skill.name} logo`} loading="lazy" className="w-16 h-16 md:w-20 md:h-20 object-contain mb-4" />
              <span className="text-sm font-medium text-foreground">{skill.name}</span>
            </motion.div>)}
        </div>
      </div>
    </section>;
};
export default Skills;
