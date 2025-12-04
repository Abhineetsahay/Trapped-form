import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Domain } from './types';

interface DomainMainCardProps {
  domain: Domain;
}

export const DomainMainCard: React.FC<DomainMainCardProps> = ({ domain }) => {
  return (
    <motion.div 
      key={domain.id}
      initial={{ opacity: 0, scale: 0.9, rotateY: -10 }}
      animate={{ opacity: 1, scale: 1, rotateY: 0 }}
      transition={{ duration: 0.4, type: "spring" }}
      className="relative w-full aspect-3/4 max-w-md bg-white rounded-3xl border-8 border-[#539547] shadow-2xl overflow-hidden flex flex-col"
    >
      {/* Card Header / Number */}
      <div className="absolute top-4 left-4 z-10">
        <div className="w-16 h-16 rounded-full bg-[#A8D5BA] border-4 border-[#5B8C71] flex items-center justify-center text-[#2C5E43] font-black text-sm shadow-md">
          No. {domain.id}
        </div>
      </div>
      
      {/* Image Area */}
      <div className="flex-1 relative bg-gray-50 m-4 rounded-2xl overflow-hidden border-2 border-gray-100 flex items-center justify-center">
         <div className="relative w-3/4 h-3/4">
           <Image 
             src={domain.image} 
             alt={domain.name}
             fill
             className="object-contain drop-shadow-xl"
           />
         </div>
      </div>
      
      {/* Card Footer Name */}
      <div className="bg-[#8FC1A3] p-4 text-center border-t-4 border-[#5B8C71]">
              <h3 className="text-white font-black text-2xl tracking-widest drop-shadow-sm">{domain.name}</h3>
      </div>
    </motion.div>
  );
};
