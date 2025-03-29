import EnterAnimation from "@/components/EnterAnimation";
import SlideAnimation from "@/components/SlideAnimation";
import * as motion from "motion/react-client";

export default function Home() {
  return (
    <div className="flex flex-row flex-wrap w-full p-4 min-h-svh gap-5">
      <motion.div
        style={box}
        animate={{ rotate: 360 }}
        transition={{ duration: 1 }}
      />
      <EnterAnimation />
      <SlideAnimation />
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: [0, 1, 1], y: [-50, 0, 0, 50] }}
        transition={{ duration: 1.5, ease: 'easeOut', delay: 0.75 }}
        className='w-60 h-60 bg-yellow-500 rounded-lg'>
      </motion.div>
      <motion.button whileTap={{ scale: 0.9, rotate: 3 }} className="bg-red-500 w-20 h-10" />
    </div>
  );
}

const box = {
  width: 100,
  height: 100,
  backgroundColor: "#ff0088",
  borderRadius: 5,
}