import { motion } from "framer-motion";
import { ArrowDown, Send } from "lucide-react";
const Hero = () => {
  return <section id="home" className="relative min-h-screen flex items-center justify-center section-padding">
      <div className="container mx-auto text-center">
        <motion.div initial={{
        opacity: 0,
        y: 40
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.8,
        ease: "easeOut"
      }}>
          <motion.p initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          delay: 0.2,
          duration: 0.6
        }} className="text-sm md:text-base font-medium tracking-widest uppercase text-muted-foreground mb-4">
            Hello, I'm
          </motion.p>

          <motion.h1 initial={{
          opacity: 0,
          scale: 0.9
        }} animate={{
          opacity: 1,
          scale: 1
        }} transition={{
          delay: 0.3,
          duration: 0.7,
          ease: "easeOut"
        }} className="text-5xl md:text-7xl lg:text-8xl font-bold font-display mb-6">
            <span className="gradient-text">Hariom Jangir</span>
          </motion.h1>

          <motion.p initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          delay: 0.5,
          duration: 0.6
        }} className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-4">
            MERN Stack Developer | AI/ML Enthusiast
          </motion.p>

          <motion.p initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          delay: 0.6,
          duration: 0.6
        }} className="text-base text-muted-foreground max-w-xl mx-auto mb-10">
            Crafting modern web applications and exploring the frontiers of
            artificial intelligence. BTech student at IIT Jodhpur.
          </motion.p>

          <motion.div initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          delay: 0.8,
          duration: 0.6
        }} className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.a whileHover={{
            scale: 1.05,
            y: -2
          }} whileTap={{
            scale: 0.98
          }} href="#projects" className="gradient-bg text-primary-foreground px-8 py-3.5 rounded-xl font-medium text-sm inline-flex items-center justify-center gap-2 shadow-lg">
              View Projects <ArrowDown size={16} />
            </motion.a>
            <motion.a whileHover={{
            scale: 1.05,
            y: -2
          }} whileTap={{
            scale: 0.98
          }} href="#contact" className="glass-card px-8 py-3.5 rounded-xl font-medium text-sm text-foreground inline-flex items-center justify-center gap-2">
              Contact Me <Send size={16} />
            </motion.a>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div animate={{
      y: [0, 10, 0]
    }} transition={{
      repeat: Infinity,
      duration: 2
    }} className="absolute bottom-10 left-1/2 -translate-x-1/2">
        <ArrowDown size={20} className="text-muted-foreground" />
      </motion.div>
    </section>;
};
export default Hero;
