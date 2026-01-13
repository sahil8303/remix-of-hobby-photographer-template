import { motion } from 'framer-motion';
import { 
  Code, 
  Database, 
  Terminal, 
  Server, 
  GitBranch, 
  Braces, 
  FileCode, 
  Cpu,
  Cloud,
  Lock,
  Workflow,
  Binary
} from 'lucide-react';

const floatingIcons = [
  { Icon: Code, x: '10%', y: '20%', size: 40, delay: 0, duration: 6 },
  { Icon: Database, x: '85%', y: '15%', size: 36, delay: 0.5, duration: 7 },
  { Icon: Terminal, x: '15%', y: '70%', size: 44, delay: 1, duration: 5.5 },
  { Icon: Server, x: '80%', y: '65%', size: 38, delay: 1.5, duration: 6.5 },
  { Icon: GitBranch, x: '25%', y: '40%', size: 32, delay: 2, duration: 7.5 },
  { Icon: Braces, x: '75%', y: '40%', size: 42, delay: 0.3, duration: 6 },
  { Icon: FileCode, x: '5%', y: '45%', size: 34, delay: 0.8, duration: 5 },
  { Icon: Cpu, x: '90%', y: '35%', size: 36, delay: 1.2, duration: 6.8 },
  { Icon: Cloud, x: '70%', y: '80%', size: 38, delay: 0.6, duration: 5.8 },
  { Icon: Lock, x: '30%', y: '75%', size: 30, delay: 1.8, duration: 7.2 },
  { Icon: Workflow, x: '60%', y: '20%', size: 34, delay: 2.2, duration: 6.2 },
  { Icon: Binary, x: '45%', y: '85%', size: 32, delay: 0.4, duration: 5.5 },
];

export function FloatingCodeIcons() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {floatingIcons.map((item, index) => (
        <motion.div
          key={index}
          className="absolute"
          style={{ left: item.x, top: item.y }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ 
            opacity: [0.15, 0.3, 0.15],
            scale: [1, 1.1, 1],
            y: [0, -20, 0],
            rotate: [0, 5, -5, 0]
          }}
          transition={{
            duration: item.duration,
            delay: item.delay,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <item.Icon 
            size={item.size} 
            className="text-primary/40 dark:text-primary/30"
            strokeWidth={1.5}
          />
        </motion.div>
      ))}
      
      {/* Floating code snippets */}
      <motion.div
        className="absolute left-[8%] top-[55%] font-mono text-xs text-primary/20 dark:text-primary/15"
        animate={{ 
          opacity: [0.1, 0.25, 0.1],
          y: [0, -15, 0]
        }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      >
        {'{ }'}
      </motion.div>
      
      <motion.div
        className="absolute right-[12%] top-[50%] font-mono text-sm text-cyan-500/20 dark:text-cyan-400/15"
        animate={{ 
          opacity: [0.1, 0.3, 0.1],
          y: [0, -10, 0]
        }}
        transition={{ duration: 6, delay: 1, repeat: Infinity, ease: "easeInOut" }}
      >
        {'</>'}
      </motion.div>
      
      <motion.div
        className="absolute left-[20%] top-[25%] font-mono text-xs text-green-500/20 dark:text-green-400/15"
        animate={{ 
          opacity: [0.1, 0.25, 0.1],
          y: [0, -12, 0]
        }}
        transition={{ duration: 4.5, delay: 0.5, repeat: Infinity, ease: "easeInOut" }}
      >
        npm run dev
      </motion.div>
      
      <motion.div
        className="absolute right-[25%] bottom-[20%] font-mono text-xs text-purple-500/20 dark:text-purple-400/15"
        animate={{ 
          opacity: [0.1, 0.25, 0.1],
          y: [0, -8, 0]
        }}
        transition={{ duration: 5.5, delay: 1.5, repeat: Infinity, ease: "easeInOut" }}
      >
        git push
      </motion.div>

      <motion.div
        className="absolute left-[65%] top-[30%] font-mono text-xs text-orange-500/20 dark:text-orange-400/15"
        animate={{ 
          opacity: [0.1, 0.2, 0.1],
          y: [0, -10, 0]
        }}
        transition={{ duration: 6.5, delay: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        async/await
      </motion.div>
    </div>
  );
}
