import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";

const Education = () => {
  return (
    <section id="education" className="section-padding">
      <div className="container mx-auto max-w-2xl px-4">

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold font-display text-center mb-12 md:mb-16"
        >
          <span className="gradient-text">Education</span>
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative"
        >

          {/* Timeline line */}
          <div className="hidden sm:block absolute left-4 md:left-8 top-0 bottom-0 w-0.5 bg-border" />

          {/* ========== IIT Jodhpur ========== */}
          <div className="relative pl-12 md:pl-20 mb-10">
            
            {/* Dot */}
            <div className="hidden sm:flex absolute left-[10px] md:left-[22px] top-2 w-5 h-5 rounded-full gradient-bg items-center justify-center">
              <div className="w-2 h-2 rounded-full bg-primary-foreground" />
            </div>

            <motion.div
              whileHover={{ y: -4 }}
              className="glass-card p-5 md:p-6 hover-lift w-full max-w-full"
            >
              <div className="flex items-start gap-4">
                
                {/* Icon */}
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl gradient-bg flex items-center justify-center shrink-0">
                  <GraduationCap size={20} className="text-primary-foreground" />
                </div>

                {/* Content */}
                <div className="min-w-0">
                  <h3 className="text-base md:text-lg font-bold font-display text-foreground">
                    IIT Jodhpur
                  </h3>
                  <p className="text-sm text-primary font-medium mt-1">
                    BTech Electrical Engineering
                  </p>
                  <p className="text-sm text-muted-foreground mt-2 leading-relaxed">
                    Pursuing a degree with focus on software development,
                    AI/ML, and full-stack web technologies.
                  </p>
                </div>

              </div>
            </motion.div>
          </div>

          {/* ========== Class 12 ========== */}
          <div className="relative pl-12 md:pl-20 mb-10">

            <div className="hidden sm:flex absolute left-[10px] md:left-[22px] top-2 w-5 h-5 rounded-full gradient-bg items-center justify-center">
              <div className="w-2 h-2 rounded-full bg-primary-foreground" />
            </div>

            <motion.div
              whileHover={{ y: -4 }}
              className="glass-card p-5 md:p-6 hover-lift w-full max-w-full"
            >
              <div className="flex items-start gap-4">
                
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl gradient-bg flex items-center justify-center shrink-0">
                  <GraduationCap size={20} className="text-primary-foreground" />
                </div>

                <div className="min-w-0">
                  <h3 className="text-base md:text-lg font-bold font-display text-foreground">
                    Senior Secondary (Class 12)
                  </h3>
                  <p className="text-sm text-primary font-medium mt-1">
                    94.40% | CBSE
                  </p>
                </div>

              </div>
            </motion.div>
          </div>

          {/* ========== Class 10 ========== */}
          <div className="relative pl-12 md:pl-20">

            <div className="hidden sm:flex absolute left-[10px] md:left-[22px] top-2 w-5 h-5 rounded-full gradient-bg items-center justify-center">
              <div className="w-2 h-2 rounded-full bg-primary-foreground" />
            </div>

            <motion.div
              whileHover={{ y: -4 }}
              className="glass-card p-5 md:p-6 hover-lift w-full max-w-full"
            >
              <div className="flex items-start gap-4">
                
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl gradient-bg flex items-center justify-center shrink-0">
                  <GraduationCap size={20} className="text-primary-foreground" />
                </div>

                <div className="min-w-0">
                  <h3 className="text-base md:text-lg font-bold font-display text-foreground">
                    Secondary (Class 10)
                  </h3>
                  <p className="text-sm text-primary font-medium mt-1">
                    98% | CBSE
                  </p>
                </div>

              </div>
            </motion.div>
          </div>

        </motion.div>
      </div>
    </section>
  );
};

export default Education;