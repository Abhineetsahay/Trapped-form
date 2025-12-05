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
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4 }}
      className="relative w-full h-full flex items-center justify-center"
    >
       <div className="relative w-full h-full">
           <Image 
             src={domain.image} 
             alt={domain.name}
             fill
             className="object-contain drop-shadow-xl rounded-2xl"
           />
       </div>
    </motion.div>
  );
};
