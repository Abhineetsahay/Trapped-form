"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import background from "@/public/trapped-bg.png";
import GalleryCarousel from "@/components/GalleryCarousel";
import InfoPanel from "@/components/InfoPanel";
import Navbar from "@/components/Navbar";

const whatsappGroupLink="https://chat.whatsapp.com/DaeP2oi13EE9kRT5GeCjf1"

const Home = () => {
  return (
    <div
      className="min-h-screen relative overflow-x-hidden font-sans text-white selection:bg-cyan-500 selection:text-black"
      id="home"
    >
            {/* Background */}
      <div className="fixed inset-0 -z-10">
        <Image
          src={background}
          alt="Background"
          fill
          priority
          placeholder="blur"
          className="object-cover brightness-75"
        />
      </div>

      {/* Content Wrapper */}
      <div className="relative z-10 w-full">
        {/* NAVBAR */}
        <Navbar />

        {/* MAIN CONTENT */}
      <main className="flex flex-col items-center min-h-screen relative w-full pt-28 pb-20">
        <div className="w-full max-w-7xl mx-auto px-4 flex flex-col items-center justify-center gap-12">
          {/* HERO IMAGE */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0, filter: "blur(10px)" }}
            animate={{ scale: 1, opacity: 1, filter: "blur(0px)" }}
            transition={{ duration: 1, delay: 0.2, type: "spring" }}
            className="relative w-full max-w-3xl aspect-[16/9] md:aspect-[21/9] -mb-10 sm:mb-0"
          >
            <Image
              src="/trapped-title.png"
              alt="Trapped 2.0"
              fill
              className="object-contain drop-shadow-[0_0_80px_rgba(56,189,248,0.4)]"
              priority
            />
          </motion.div>

          {/* TEXT BLOCK WITH ANIMATION */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center max-w-4xl z-10 flex flex-col items-center gap-8 md:gap-12"
          >
            {/* Description Text */}
            <div className="space-y-6">
              <p className="text-lg md:text-2xl leading-relaxed font-light text-gray-100 max-w-3xl mx-auto drop-shadow-lg">
                Gather your friends for the best escape room event of KIIT. Calling
                all problem solvers, logic leaders, and those who want to have a
                good time. <br className="hidden md:block" />
                <span className="text-cyan-400 font-normal">
                  Brought to you by the Game Development Domain of GFG KIIT.
                </span>
              </p>

              {/* Event Date Badge */}
              <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-blue-900/40 border border-blue-500/30 backdrop-blur-md">
                <span className="text-blue-300 font-semibold uppercase tracking-wider text-sm">
                  Event Date
                </span>
                <div className="w-px h-4 bg-blue-500/30"></div>
                <span className="text-white font-medium">21st February (Saturday)</span>
              </div>
            </div>

            {/* Action Buttons Container */}
            <div className="flex flex-col md:flex-row gap-6 w-full justify-center items-center flex-wrap">
              {/* Register Button (Primary) */}
              <Link href="/registration" className="w-full max-w-xs md:order-2">
                <motion.button
                  whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(59, 130, 246, 0.5)" }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-4 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white text-xl font-bold tracking-wide shadow-xl shadow-blue-900/20 border border-white/10 transition-all"
                >
                  Register Now
                </motion.button>
              </Link>

              {/* Download Button */}
              <Link href="/download" className="w-full max-w-xs md:order-3">
                 <motion.button
                  whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(168, 85, 247, 0.5)" }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-4 rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white text-xl font-bold tracking-wide shadow-xl shadow-purple-900/20 border border-white/10 transition-all"
                >
                  Download Game
                </motion.button>
              </Link>

              {/* WhatsApp Button (Secondary) */}
              <motion.div className="relative w-full max-w-xs md:order-1 flex flex-col items-center">
                <motion.a
                  href={whatsappGroupLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.02, backgroundColor: "rgba(30, 41, 59, 0.8)" }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full flex items-center justify-center gap-2 py-4 rounded-xl bg-slate-900/60 hover:bg-slate-800/80 backdrop-blur-md border border-slate-700 text-blue-200 font-semibold text-base transition-colors"
                >
                  <span>Join WhatsApp Group</span>
                </motion.a>
              </motion.div>
            </div>
          </motion.div>
        </div>

        <InfoPanel />

        <GalleryCarousel />
      </main>
      </div>  
    </div>
  );
};

export default Home;
