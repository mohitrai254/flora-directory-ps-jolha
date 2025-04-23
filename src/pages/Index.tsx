import { useState, useEffect } from "react";
import PlantCard from "@/components/PlantCard";
import plantsData from "@/data/plants.json";
// import Navbar from "@/components/Navbar";
import AnimatedBackground from "@/components/AnimatedBackground";

interface Plant {
  id: number;
  name: string;
  scientificName: string;
  type: string;
  details: string;
  image: string;
}

const Index = () => {
  const [plants, setPlants] = useState<Plant[]>([]);

  useEffect(() => {
    setPlants(plantsData);
  }, []);

  return (
    <div className="min-h-screen bg-transparent relative overflow-x-hidden">
      <AnimatedBackground />
      {/* <Navbar /> */}
      <div className="container mx-auto px-4 py-8 md:py-12">
        <header className="mb-8 md:mb-12 text-center animate-fade-in">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 md:mb-4 text-green-900 px-2">
            List of Plant Species Present in School
          </h1>
          <p className="text-green-700 max-w-2xl mx-auto animate-fade-in delay-200 px-4 text-sm sm:text-base">
            Explore our collection of medicinal, ornamental, and culturally
            significant plants that grow in our school ground.
          </p>
        </header>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {plants.map((plant, index) => (
            <div
              key={plant.id}
              className={`transform transition-all duration-300 hover:scale-105 animate-fade-in`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <PlantCard
                id={plant.id}
                name={plant.name}
                scientificName={plant.scientificName}
                type={plant.type}
                image={plant.image}
              />
            </div>
          ))}
        </div>
      </div>

      <footer className="bg-green-50 py-4 md:py-6 mt-8 md:mt-12 animate-fade-in">
        <div className="container mx-auto px-4 text-center text-green-800 text-sm sm:text-base">
          <p>© {new Date().getFullYear()} School Plant Species Directory</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
