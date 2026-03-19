import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Github, Linkedin } from "lucide-react";
import { toast } from "sonner";
const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: ""
  });
  
const handleSubmit = async (e) => {
  e.preventDefault();
  console.log("Submitting...");

  try {
    const res = await fetch("https://portfolio-c88j.onrender.com/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    });

    console.log("Response received");

    const data = await res.json();

    if (data.success) {
      toast.success("Message sent successfully!");
      setForm({ name: "", email: "", message: "" });
    } else {
      toast.error("Failed to send message");
    }
  } catch (error) {
    console.log(error);
    toast.error("Server error");
  }
};

  return <section id="contact" className="section-padding">
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
          Get In <span className="gradient-text">Touch</span>
        </motion.h2>

        <motion.form initial={{
        opacity: 0,
        y: 30
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true
      }} transition={{
        duration: 0.6
      }} onSubmit={handleSubmit} className="glass-card p-8 space-y-6">
          <div>
            <label className="text-sm font-medium text-foreground mb-2 block">
              Name
            </label>
            <input type="text" required value={form.name} onChange={e => setForm({
            ...form,
            name: e.target.value
          })} className="w-full px-4 py-3 rounded-xl bg-secondary text-foreground text-sm border border-border focus:border-primary focus:outline-none focus:ring-2 focus:ring-ring/20 transition-all" placeholder="Your name" />
          </div>
          <div>
            <label className="text-sm font-medium text-foreground mb-2 block">
              Email
            </label>
            <input type="email" required value={form.email} onChange={e => setForm({
            ...form,
            email: e.target.value
          })} className="w-full px-4 py-3 rounded-xl bg-secondary text-foreground text-sm border border-border focus:border-primary focus:outline-none focus:ring-2 focus:ring-ring/20 transition-all" placeholder="your@email.com" />
          </div>
          <div>
            <label className="text-sm font-medium text-foreground mb-2 block">
              Message
            </label>
            <textarea required rows={5} value={form.message} onChange={e => setForm({
            ...form,
            message: e.target.value
          })} className="w-full px-4 py-3 rounded-xl bg-secondary text-foreground text-sm border border-border focus:border-primary focus:outline-none focus:ring-2 focus:ring-ring/20 transition-all resize-none" placeholder="Your message..." />
          </div>
          <motion.button whileHover={{
          scale: 1.02,
          y: -2
        }} whileTap={{
          scale: 0.98
        }} type="submit" className="w-full gradient-bg text-primary-foreground py-3.5 rounded-xl font-medium text-sm flex items-center justify-center gap-2 shadow-lg">
            Send Message <Send size={16} />
          </motion.button>
        </motion.form>

        {/* Social links */}
        <motion.div initial={{
        opacity: 0,
        y: 20
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true
      }} transition={{
        delay: 0.3,
        duration: 0.5
      }} className="flex justify-center gap-4 mt-8">
          <motion.a whileHover={{
          scale: 1.1,
          y: -3
        }} href="https://github.com/Hariom-Jangir" target="_blank" rel="noopener noreferrer" className="w-12 h-12 glass-card rounded-xl flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors">
            <Github size={20} />
          </motion.a>
          <motion.a whileHover={{
          scale: 1.1,
          y: -3
        }} href="https://linkedin.com/in/hari-om-jangir-505865313" target="_blank" rel="noopener noreferrer" className="w-12 h-12 glass-card rounded-xl flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors">
            <Linkedin size={20} />
          </motion.a>
        </motion.div>
      </div>
    </section>;
};
export default Contact;
