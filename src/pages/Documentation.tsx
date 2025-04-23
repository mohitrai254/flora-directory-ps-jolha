// import Navbar from "@/components/Navbar";
import AnimatedBackground from "@/components/AnimatedBackground";

const Documentation = () => {
  return (
    <div className="h-full bg-transparent relative overflow-x-hidden">
      <AnimatedBackground />
      {/* <Navbar /> */}
      <div className="container mx-auto py-8 sm:py-12 px-4 max-w-xl">
        <h2 className="text-3xl font-bold mb-8 text-center text-green-900">
          Documentation
        </h2>
        <div className="flex items-center justify-center">
          <a
            href="https://drive.google.com/file/d/1OxBC585P5Dac2dBK3HCeFx44e4YQ2Qc5/view?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-600 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-md font-medium shadow hover:bg-green-700 transition"
          >
            Flora Directory
          </a>
        </div>
      </div>
    </div>
  );
};

export default Documentation;
