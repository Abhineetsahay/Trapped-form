import React from 'react';
import { motion } from 'framer-motion';
import { Domain } from './types';

interface DomainInfoProps {
  domain: Domain;
}

export const DomainInfo: React.FC<DomainInfoProps> = ({ domain }) => {
  return (
    <div className="flex-1 bg-[#9BCFB0] rounded-3xl border-4 border-[#5B8C71] p-8 flex flex-col justify-center shadow-[inset_0_2px_10px_rgba(0,0,0,0.1)] relative overflow-hidden">
      {/* Background Pattern Decoration */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl"></div>
      <div className="absolute bottom-0 left-0 w-24 h-24 bg-[#2C5E43]/5 rounded-full translate-y-1/2 -translate-x-1/2 blur-xl"></div>

      <motion.div
          key={domain.id}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="relative z-10"
      >
          <h2 className="text-5xl font-black text-white mb-6 tracking-wide uppercase drop-shadow-[2px_2px_0px_rgba(44,94,67,0.5)]">
              {domain.name}
          </h2>
          
          <p className="text-[#2C5E43] text-xl font-semibold leading-relaxed mb-8 max-w-lg">
              {domain.description}
          </p>
          
          <div className="space-y-3">
              <h3 className="text-3xl font-black text-white uppercase tracking-wider drop-shadow-sm">TYPE</h3>
              <div className="inline-flex items-center gap-2 bg-[#5B8C71] text-white px-8 py-3 rounded-full text-xl font-bold shadow-lg border-2 border-[#4A7A5F]">
                  <span className="w-3 h-3 rounded-full bg-white animate-pulse"></span>
                  {domain.type}
              </div>
          </div>
      </motion.div>
    </div>
  );
};
