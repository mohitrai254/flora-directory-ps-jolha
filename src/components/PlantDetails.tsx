import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import plantsData from "@/data/plants.json";

// Import images from assets
const plantImages = import.meta.glob("@/assets/*.jpg", {
  eager: true,
  as: "url",
});

interface Plant {
  id: number;
  name: string;
  scientificName: string;
  type: string;
  details: string;
  image: string;
}

const PlantDetails = () => {
  const { plantName } = useParams<{ plantName: string }>();
  const [plant, setPlant] = useState<Plant | null>(null);

  // Get image path dynamically from the assets folder
  const getImagePath = (fileName: string): string => {
    const entry = Object.entries(plantImages).find(([path]) =>
      path.endsWith(fileName)
    );
    return entry ? entry[1] : ""; // Return the image URL
  };

  useEffect(() => {
    if (plantName) {
      const foundPlant = plantsData.find(
        (p) => p.name.toLowerCase() === plantName.toLowerCase()
      );
      setPlant(foundPlant || null);
    }
  }, [plantName]);

  if (!plant) {
    return (
      <div className="container mx-auto px-4 mt-16 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Plant Not Found</h2>
          <p className="mb-8">
            Sorry, we couldn't find information about this plant.
          </p>
          <Link to="/">
            <Button>
              <ArrowLeft className="mr-2 h-4 w-4" /> Back to Home
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 h-full">
      <Link
        to="/"
        className="inline-flex items-center mb-6 text-green-700 hover:text-green-900"
      >
        <ArrowLeft className="mr-2 h-4 w-4" /> Back to All Plants
      </Link>

      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="md:flex">
          <div className="md:w-1/2">
            {/* Use the dynamic image path */}
            <img
              src={getImagePath(plant.image)}
              alt={plant.name}
              className="h-full w-full object-cover"
            />
          </div>
          <div className="p-6 md:w-1/2">
            <h1 className="text-3xl font-bold mb-2">{plant.name}</h1>
            <h2 className="text-xl text-gray-600 italic mb-4">
              {plant.scientificName}
            </h2>

            <div className="mb-6">
              <span className="inline-block bg-green-100 text-green-800 text-sm px-3 py-1 rounded-full">
                {plant.type}
              </span>
            </div>

            <div className="prose max-w-none">
              <h3 className="text-xl font-semibold mb-2">Details</h3>
              <p className="leading-relaxed text-gray-700">{plant.details}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlantDetails;
