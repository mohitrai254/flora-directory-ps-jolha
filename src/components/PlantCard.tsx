import { Link } from "react-router-dom";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

// Import images from assets
const plantImages = import.meta.glob("@/assets/*.jpg", {
  eager: true,
  as: "url",
});

interface PlantCardProps {
  id: number;
  name: string;
  scientificName: string;
  type: string;
  image: string; // image file name should match the name in your assets
}

const PlantCard = ({
  id,
  name,
  scientificName,
  type,
  image,
}: PlantCardProps) => {
  // Function to get image path dynamically
  const getImagePath = (fileName: string): string => {
    const entry = Object.entries(plantImages).find(([path]) =>
      path.endsWith(fileName)
    );
    return entry ? entry[1] : ""; // Return the image URL
  };

  return (
    <Card className="overflow-hidden transition-all hover:shadow-lg">
      <div className="aspect-square overflow-hidden">
        {/* Dynamically load the plant image */}
        <img
          src={getImagePath(image)} // Use dynamic image loading
          alt={name}
          className="h-full w-full object-cover transition-transform hover:scale-105"
        />
      </div>
      <CardContent className="p-4">
        <h3 className="text-xl font-semibold">{name}</h3>
        <p className="text-sm text-muted-foreground italic">{scientificName}</p>
        <div className="mt-2">
          <span className="inline-block bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">
            {type}
          </span>
        </div>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <Link to={`/plant/${name.toLowerCase()}`} className="w-full">
          <Button variant="outline" className="w-full group">
            View Details
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
};

export default PlantCard;
