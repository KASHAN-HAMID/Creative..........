// InViewComponent.tsx
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

export default function InViewComponent() {
  const { ref, inView } = useInView({ triggerOnce: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0 }}
      animate={{ opacity: inView ? 1 : 0 }}
      transition={{ duration: 1 }}
    >
      <h3 className="text-4xl font-bold text-blue-400 mb-6">Our Projects</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Render your project content here */}
      </div>
    </motion.div>
  );
}
