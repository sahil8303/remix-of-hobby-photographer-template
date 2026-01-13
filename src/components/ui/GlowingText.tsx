import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface GlowingTextProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

export function GlowingText({ children, className = '', delay = 0 }: GlowingTextProps) {
  return (
    <motion.span
      className={`relative inline-block ${className}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay, ease: "easeOut" }}
    >
      <motion.span
        className="absolute inset-0 blur-2xl bg-gradient-to-r from-purple-500 via-cyan-500 to-purple-500 opacity-50"
        animate={{
          backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "linear"
        }}
        style={{ backgroundSize: '200% 200%' }}
      />
      <span className="relative">{children}</span>
    </motion.span>
  );
}

interface TypewriterTextProps {
  text: string;
  className?: string;
  delay?: number;
}

export function TypewriterText({ text, className = '', delay = 0 }: TypewriterTextProps) {
  const characters = text.split('');
  
  return (
    <motion.span className={className}>
      {characters.map((char, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 0.03,
            delay: delay + index * 0.05,
            ease: "easeOut"
          }}
        >
          {char}
        </motion.span>
      ))}
      <motion.span
        className="inline-block w-0.5 h-6 bg-cyan-400 ml-1"
        animate={{ opacity: [1, 0, 1] }}
        transition={{ duration: 0.8, repeat: Infinity }}
      />
    </motion.span>
  );
}

interface GradientTextProps {
  children: ReactNode;
  className?: string;
}

export function GradientText({ children, className = '' }: GradientTextProps) {
  return (
    <motion.span
      className={`bg-gradient-to-r from-purple-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent bg-[length:200%_auto] ${className}`}
      animate={{
        backgroundPosition: ['0% center', '200% center'],
      }}
      transition={{
        duration: 3,
        repeat: Infinity,
        ease: "linear"
      }}
    >
      {children}
    </motion.span>
  );
}
