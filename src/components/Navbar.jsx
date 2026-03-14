import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
const links = [{
  label: "Home",
  href: "#home"
}, {
  label: "About",
  href: "#about"
}, {
  label: "Skills",
  href: "#skills"
}, {
  label: "Projects",
  href: "#projects"
}, {
  label: "Education",
  href: "#education"
}, {
  label: "Contact",
  href: "#contact"
}];
const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return <motion.nav initial={{
    y: -100
  }} animate={{
    y: 0
  }} transition={{
    duration: 0.6,
    ease: "easeOut"
  }} className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "glass-card !rounded-none py-3" : "py-5"}`}>
      <div className="container mx-auto flex items-center justify-between px-6">
        <a href="#home" className="font-display text-xl font-bold gradient-text">
          HJ
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {links.map(link => <motion.a key={link.href} href={link.href} whileHover={{
          y: -2
        }} className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              {link.label}
            </motion.a>)}
        </div>

        {/* Mobile toggle */}
        <button onClick={() => setMobileOpen(!mobileOpen)} className="md:hidden text-foreground">
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && <motion.div initial={{
        opacity: 0,
        height: 0
      }} animate={{
        opacity: 1,
        height: "auto"
      }} exit={{
        opacity: 0,
        height: 0
      }} className="md:hidden glass-card !rounded-none border-t border-border">
            <div className="flex flex-col gap-4 p-6">
              {links.map(link => <a key={link.href} href={link.href} onClick={() => setMobileOpen(false)} className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
                  {link.label}
                </a>)}
            </div>
          </motion.div>}
      </AnimatePresence>
    </motion.nav>;
};
export default Navbar;
