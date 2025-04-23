import PlantDetails from "@/components/PlantDetails";
import AnimatedBackground from "@/components/AnimatedBackground";
// import Navbar from "@/components/Navbar";

const PlantDetailsPage = () => {
  return (
    <div className="min-h-screen bg-transparent relative overflow-x-hidden">
      <AnimatedBackground />
      {/* <Navbar /> */}
      <div className="pt-4 pb-12 sm:pt-8 sm:pb-16 px-4">
        <PlantDetails />
      </div>
      {/* <footer className="bg-white py-4 sm:py-6 mt-auto">
        <div className="container mx-auto px-4 text-center text-gray-600 text-sm sm:text-base">
          <p>© {new Date().getFullYear()} School Plant Species Directory</p>
        </div>
      </footer> */}
    </div>
  );
};

export default PlantDetailsPage;
