import EnterAnimation from "@/components/EnterAnimation";
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
    </div>
  );
}

const box = {
  width: 100,
  height: 100,
  backgroundColor: "#ff0088",
  borderRadius: 5,
}