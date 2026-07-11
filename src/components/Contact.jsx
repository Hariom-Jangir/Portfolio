import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, Github, Linkedin, CheckCircle, X } from "lucide-react";
import { toast } from "sonner";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [showPopup, setShowPopup] = useState(false);
  const [isSending, setIsSending] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSending(true);

    try {
      const res = await fetch("https://portfolio-c88j.onrender.com/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (data.success) {
        setShowPopup(true);
        setForm({ name: "", email: "", message: "" });
        // auto-close popup after 3 seconds
        setTimeout(() => setShowPopup(false), 3000);
      } else {
        toast.error("Failed to send message");
      }
    } catch (error) {
      console.log(error);
      toast.error("Server error");
    } finally {
      setIsSending(false);
    }
  };

  return (
    <section id="contact" className="section-padding relative">
      <div className="container mx-auto max-w-2xl">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold font-display text-center mb-16"
        >
          Get In <span className="gradient-text">Touch</span>
        </motion.h2>

        <motion.form
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          onSubmit={handleSubmit}
          className="glass-card p-8 space-y-6"
        >
          <div>
            <label className="text-sm font-medium text-foreground mb-2 block">
              Name
            </label>
            <input
              type="text"
              required
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="w-full px-4 py-3 rounded-xl bg-secondary text-foreground text-sm border border-border focus:border-primary focus:outline-none focus:ring-2 focus:ring-ring/20 transition-all"
              placeholder="Your name"
            />
          </div>
          <div>
            <label className="text-sm font-medium text-foreground mb-2 block">
              Email
            </label>
            <input
              type="email"
              required
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="w-full px-4 py-3 rounded-xl bg-secondary text-foreground text-sm border border-border focus:border-primary focus:outline-none focus:ring-2 focus:ring-ring/20 transition-all"
              placeholder="your@email.com"
            />
          </div>
          <div>
            <label className="text-sm font-medium text-foreground mb-2 block">
              Message
            </label>
            <textarea
              required
              rows={5}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="w-full px-4 py-3 rounded-xl bg-secondary text-foreground text-sm border border-border focus:border-primary focus:outline-none focus:ring-2 focus:ring-ring/20 transition-all resize-none"
              placeholder="Your message..."
            />
          </div>
          <motion.button
            whileHover={{ scale: 1.02, y: -2 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            disabled={isSending}
            className="w-full gradient-bg text-primary-foreground py-3.5 rounded-xl font-medium text-sm flex items-center justify-center gap-2 shadow-lg disabled:opacity-60"
          >
            {isSending ? "Sending..." : "Send Message"} <Send size={16} />
          </motion.button>
        </motion.form>

        {/* Social links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="flex justify-center gap-4 mt-8"
        >
          <motion.a
            whileHover={{ scale: 1.1, y: -3 }}
            href="https://github.com/Hariom-Jangir"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 glass-card rounded-xl flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors"
          >
            <Github size={20} />
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.1, y: -3 }}
            href="https://linkedin.com/in/hari-om-jangir-505865313"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 glass-card rounded-xl flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors"
          >
            <Linkedin size={20} />
          </motion.a>
        </motion.div>
      </div>

      {/* Success Popup Modal */}
      <AnimatePresence>
        {showPopup && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm px-4"
            onClick={() => setShowPopup(false)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: 20 }}
              transition={{ type: "spring", damping: 20, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
              className="glass-card p-8 rounded-2xl max-w-sm w-full text-center relative shadow-2xl"
            >
              <button
                onClick={() => setShowPopup(false)}
                className="absolute top-3 right-3 text-muted-foreground hover:text-foreground transition-colors"
              >
                <X size={18} />
              </button>
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.15, type: "spring", stiffness: 200 }}
                className="flex justify-center mb-4"
              >
                <CheckCircle size={56} className="text-green-500" />
              </motion.div>
              <h3 className="text-xl font-bold font-display mb-2">
                Message Sent!
              </h3>
              <p className="text-muted-foreground text-sm">
                Thanks for reaching out. I'll get back to you soon.
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Contact;