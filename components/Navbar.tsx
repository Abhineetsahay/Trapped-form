"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import gfgLogo from "@/public/image.png";

const whatsappGroupLink = "https://chat.whatsapp.com/DaeP2oi13EE9kRT5GeCjf1";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "/#home" },
    { name: "Whatsapp", href: whatsappGroupLink },
    { name: "Alumni", href: "https://www.gfgkiit.in/alumni" },
    { name: "Download", href: "/download" },
  ];

  return (
    <nav className="sticky top-0 left-0 right-0 z-50 px-4 py-3">
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-7xl mx-auto bg-black/40 backdrop-blur-xl rounded-full px-6 py-3 flex justify-between items-center border border-white/5 shadow-2xl shadow-blue-900/10"
      >
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <div className="relative w-12 h-12 overflow-hidden">
            <Image
              src={gfgLogo}
              alt="GFG Logo"
              fill
              className="object-contain"
            />
          </div>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-300">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="hover:text-cyan-400 transition-colors duration-300"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Contact Button */}
        <Link href="https://www.instagram.com/gfg_kiit/" target="_blank">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="hidden md:block bg-blue-600 hover:bg-blue-500 text-white px-5 py-2 rounded-full text-xs font-bold shadow-lg shadow-blue-500/20"
          >
            Contact Us
          </motion.button>
        </Link>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-white"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </motion.div>

      {/* Mobile Dropdown */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            className="md:hidden bg-slate-900/90 backdrop-blur-xl border border-white/10 rounded-3xl mt-4 mx-4 p-6 flex flex-col gap-6 shadow-2xl z-50 absolute right-0 left-0"
          >
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="text-lg font-medium text-gray-200 hover:text-cyan-400 border-b border-white/5 pb-2 last:border-0"
              >
                {link.name}
              </Link>
            ))}

            <Link href="https://www.instagram.com/gfg_kiit/" target="_blank" onClick={() => setMenuOpen(false)}>
              <div className="w-full bg-gradient-to-r from-blue-600 to-blue-500 py-3 rounded-xl text-white font-bold text-center shadow-lg shadow-blue-500/20">
                Contact Us
              </div>
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
