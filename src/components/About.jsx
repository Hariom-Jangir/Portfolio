import { motion } from "framer-motion";
import { Code, Brain, Zap } from "lucide-react";

const highlights = [{
  icon: Code,
  title: "Full-Stack Dev",
  desc: "MERN stack expertise"
}, {
  icon: Brain,
  title: "AI / ML",
  desc: "Deep learning & computer vision"
}, {
  icon: Zap,
  title: "Fast Learner",
  desc: "Always exploring new tech"
}];
const About = () => {
  return <section id="about" className="section-padding">
      <div className="container mx-auto">
        <motion.h2 initial={{
        opacity: 0,
        y: 30
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true
      }} transition={{
        duration: 0.6
      }} className="text-3xl md:text-4xl font-bold font-display text-center mb-16">
          About <span className="gradient-text">Me</span>
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <motion.div initial={{
          opacity: 0,
          x: -50
        }} whileInView={{
          opacity: 1,
          x: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.7
        }} className="flex justify-center">
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-2xl overflow-hidden glass-card p-1.5">
                <img src="profile.jpeg" alt="Hariom Jangir" className="w-full h-full object-cover rounded-xl " />
              </div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 gradient-bg rounded-2xl opacity-20 animate-float" />
            </div>
          </motion.div>

          {/* Text */}
          <motion.div initial={{
          opacity: 0,
          x: 50
        }} whileInView={{
          opacity: 1,
          x: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.7
        }}>
            <p className="text-muted-foreground leading-relaxed mb-6">
              I'm a BTech Electrical Engineering student at{" "}
              <span className="text-foreground font-medium">IIT Jodhpur</span>,
              passionate about building modern web applications and exploring
              the possibilities of AI and Machine Learning. I specialize in the
              MERN stack and love creating elegant, performant solutions.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              From full-stack web development to deep learning projects, I enjoy
              tackling complex problems and turning ideas into reality. I'm
              always eager to learn new technologies and contribute to
              innovative projects.
            </p>

            <div className="grid grid-cols-3 gap-4">
              {highlights.map((item, i) => <motion.div key={item.title} initial={{
              opacity: 0,
              y: 20
            }} whileInView={{
              opacity: 1,
              y: 0
            }} viewport={{
              once: true
            }} transition={{
              delay: i * 0.15,
              duration: 0.5
            }} className="glass-card p-4 text-center hover-lift">
                  <item.icon size={24} className="mx-auto mb-2 text-primary" />
                  <p className="text-xs font-semibold text-foreground">{item.title}</p>
                  <p className="text-xs text-muted-foreground mt-1">{item.desc}</p>
                </motion.div>)}
            </div>
          </motion.div>
        </div>
      </div>
    </section>;
};
export default About;
