// import Navbar from "@/components/Navbar";
import school from "@/data/school.json";
import teachers from "@/data/teachers.json";
import schoolImage from "@/assets/School.jpg";

import AnimatedBackground from "@/components/AnimatedBackground";

const ContactUs = () => {
  return (
    <div className="h-full bg-transparent relative overflow-x-hidden">
      <AnimatedBackground />
      {/* <Navbar /> */}
      <div className="container max-w-3xl mx-auto py-8 sm:py-12 px-4">
        <div className="bg-white rounded-lg shadow-md p-4 sm:p-6 flex flex-col md:flex-row gap-4 sm:gap-6 items-center">
          <img
            src={schoolImage}
            alt="School"
            className="w-full md:w-56 h-40 sm:h-48 object-cover rounded"
          />
          <div className="flex-1">
            <h3 className="text-lg sm:text-xl font-bold mb-2">{school.name}</h3>
            <p className="mb-2 text-sm sm:text-base">
              <span className="font-medium">Principal: </span>
              {school.principal}
            </p>
            {/* <span className="font-medium text-sm sm:text-base">Teachers:</span>
            <ul className="mb-2 ml-6 list-disc text-sm sm:text-base">
              {teachers.map((t) => (
                <li key={t.name}>
                  {t.name}{" "}
                  <span className="text-gray-500">({t.designation})</span>
                </li>
              ))}
            </ul> */}
            <p className="text-sm sm:text-base">
              <span className="font-medium">Address:</span> {school.address}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
