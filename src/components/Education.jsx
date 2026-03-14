import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";
const Education = () => {
  return <section id="education" className="section-padding">
      <div className="container mx-auto max-w-2xl">
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
          <span className="gradient-text">Education</span>
        </motion.h2>

        <motion.div initial={{
        opacity: 0,
        y: 30
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true
      }} transition={{
        duration: 0.6
      }} className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border" />

          {/* Timeline item */}
          <div className="relative pl-20">
            {/* Dot */}
            <div className="absolute left-[22px] top-2 w-5 h-5 rounded-full gradient-bg flex items-center justify-center">
              <div className="w-2 h-2 rounded-full bg-primary-foreground" />
            </div>

            <motion.div whileHover={{
            y: -4
          }} className="glass-card p-6 hover-lift">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl gradient-bg flex items-center justify-center shrink-0">
                  <GraduationCap size={24} className="text-primary-foreground" />
                </div>
                <div>
                  <h3 className="text-lg font-bold font-display text-foreground">
                    IIT Jodhpur
                  </h3>
                  <p className="text-sm text-primary font-medium mt-1">
                    BTech Electrical Engineering
                  </p>
                  <p className="text-sm text-muted-foreground mt-2">
                    Pursuing a degree in Electrical Engineering with a strong
                    focus on software development, AI/ML, and full-stack web
                    technologies.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>;
};
export default Education;
