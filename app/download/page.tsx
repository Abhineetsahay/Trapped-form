"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import background from "@/public/trapped-bg.png"; // Assuming same background
import { Download, Terminal, CheckCircle2 } from "lucide-react";
import Navbar from "@/components/Navbar";

// Configuration
const DOWNLOAD_LINK = "#"; // EDIT THIS: Replace with your actual Mediafire/Drive link

interface InstallationStep {
  title: string;
  description: string;
  image?: string;
}

// Installation Steps Data
const installationSteps: InstallationStep[] = [
  {
    title: "Download",
    description: "Click the download button on the webpage, followed by download button on the Mediafire page to start downloading the game archive.",
    image: "/install-steps/step-0.png"
  },
  {
    title: "Navigate to the Downloaded Files",
    description: "Go to your Downloads Folder or wherever you have downloaded the trapped_game.7z file.",
    image: "/install-steps/step-1.jpeg"
  },
  {
    title: "Extract the Files",
    description: "Right Click on the file and click \"Extract All\".",
    image: "/install-steps/step-2.jpeg"
  },
  {
    title: "Extract Archive",
    description: "From the Extract Archive Dialog box, leave the default options, and click the Extract button.",
    image: "/install-steps/step-3.jpeg"
  },
  {
    title: "Find the extracted Folder",
    description: "Navigate to the folder that you just extracted with the name \"trapped_game\".",
    image: "/install-steps/step-4.jpeg"
  },
  {
    title: "Find and Double Click the executable",
    description: "Open the \"trapped_game\" folder until you see \"Trapped_2.0.exe\". Double click and run it. All the best!",
    image: "/install-steps/step5.jpeg"
  }
];

const DownloadPage = () => {
  return (
    <div className="min-h-screen relative overflow-x-hidden font-sans text-white selection:bg-cyan-500 selection:text-black">
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
      <div className="relative z-10 w-full flex flex-col min-h-screen">
        <Navbar />

        <main className="flex-grow flex flex-col items-center pt-10 pb-20 px-4">
          <div className="w-full max-w-4xl mx-auto flex flex-col gap-16">
            
            {/* 1. Download Section */}
            <section className="flex flex-col items-center text-center gap-8 py-10">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="space-y-4"
              >
                <h1 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-600 drop-shadow-sm">
                  Download & Play
                </h1>
                <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto">
                  Ready to challenge your wits? Download the game client and start your escape.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="w-full max-w-md"
              >
                <a 
                  href={DOWNLOAD_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative block w-full"
                >
                  <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
                  <button className="relative w-full py-6 px-8 bg-slate-900 ring-1 ring-white/10 rounded-2xl leading-none flex items-center justify-center space-x-6 hover:bg-slate-800 transition-all duration-200">
                    <Download className="w-8 h-8 text-cyan-400 group-hover:scale-110 transition-transform" />
                    <div className="flex flex-col items-start gap-1">
                      <span className="text-xl font-bold text-gray-100 group-hover:text-white">Download Game Client</span>
                      <span className="text-xs text-slate-400 font-mono">v1.0.0 • Windows </span>
                    </div>
                  </button>
                </a>
              </motion.div>
            </section>

            {/* 2. Installation Guide Section */}
            <section className="bg-black/30 backdrop-blur-md rounded-3xl border border-white/5 p-8 md:p-12 shadow-2xl">
              <div className="flex items-center gap-4 mb-10 border-b border-white/5 pb-6">
                <div className="p-3 bg-blue-900/30 rounded-xl">
                    <Terminal className="w-6 h-6 text-blue-400" />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-100">Installation Guide</h2>
              </div>

              <div className="space-y-8">
                {installationSteps.map((step, index) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="relative pl-8 md:pl-0"
                  >
                    {/* Connecting Line */}
                    {index !== installationSteps.length - 1 && (
                      <div className="absolute left-[19px] md:left-[27px] top-12 bottom-[-32px] w-0.5 bg-gradient-to-b from-blue-500/30 to-transparent md:block hidden"></div>
                    )}
                    
                    <div className="flex flex-col md:flex-row gap-6 md:items-start">
                      {/* Step Number Bubble */}
                      <div className="absolute left-0 top-0 md:static flex-shrink-0 w-10 h-10 md:w-14 md:h-14 rounded-full bg-slate-800 border border-white/10 flex items-center justify-center shadow-lg z-10">
                        <span className="font-mono text-cyan-400 font-bold text-sm md:text-lg">{index + 1}</span>
                      </div>

                      {/* Content */}
                      <div className="flex-1 bg-white/5 hover:bg-white/10 transition-colors rounded-2xl p-6 border border-white/5">
                        <h3 className="text-xl font-semibold text-white mb-2 flex items-center gap-2">
                            {step.title}
                            {index === installationSteps.length - 1 && <CheckCircle2 className="w-5 h-5 text-green-400" />}
                        </h3>
                        <p className="text-gray-400 leading-relaxed text-sm md:text-base">
                          {step.description}
                        </p>
                        
                            {step.image && (
                                <div className="mt-4 rounded-lg overflow-hidden border border-white/10">
                                    <Image src={step.image} alt={step.title} width={600} height={300} className="w-full" />
                                </div>
                            )}
                       
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </section>

          </div>
        </main>
      </div>
    </div>
  );
};

export default DownloadPage;
