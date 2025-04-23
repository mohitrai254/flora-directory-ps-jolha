import { useState } from "react";
import teachers from "@/data/teachers.json";
import students from "@/data/students.json";
// import Navbar from "@/components/Navbar";
import AnimatedBackground from "../components/AnimatedBackground";
import { useIsMobile } from "@/hooks/use-mobile";

type Teacher = {
  name: string;
  designation: string;
  phone: string;
};

type Student = {
  name: string;
  designation: string;
};

type RowData = Teacher | Student;

const tabs = [
  { label: "Teachers", key: "teachers" },
  { label: "Students", key: "students" },
];

const AboutUs = () => {
  const [activeTab, setActiveTab] = useState<"teachers" | "students">(
    "teachers"
  );
  const isTeachers = activeTab === "teachers";
  const data: RowData[] = isTeachers ? teachers : students;
  const isMobile = useIsMobile();

  return (
    <div className="h-full bg-transparent relative overflow-x-hidden">
      <AnimatedBackground />
      {/* <Navbar /> */}
      <div className="container mx-auto max-w-2xl py-12 px-4 animate-fade-in">
        <h2 className="text-3xl font-bold mb-8 text-center text-green-900">
          About Us
        </h2>

        {/* Tabs */}
        <div className="flex justify-center mb-8 gap-3">
          {tabs.map((tab) => (
            <button
              key={tab.key}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-200 hover:scale-105 ${
                activeTab === tab.key
                  ? "bg-green-600 text-white shadow"
                  : "bg-green-100 text-green-800 hover:bg-green-200"
              }`}
              onClick={() => setActiveTab(tab.key as "teachers" | "students")}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="min-w-full shadow border rounded-xl animate-fade-in">
            <thead>
              <tr className="bg-green-50 text-green-900">
                <th className="px-6 py-3 font-semibold text-left">Name</th>
                <th className="px-6 py-3 font-semibold text-left">
                  Designation
                </th>
                {isTeachers && !isMobile && (
                  <th className="px-6 py-3 font-semibold text-left">Phone</th>
                )}
              </tr>
            </thead>
            <tbody>
              {data.map((row, index) => (
                <tr
                  key={row.name}
                  className="odd:bg-white even:bg-green-50 border-b last:border-0 transition hover:bg-green-100 animate-fade-in"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <td className="px-6 py-3">{row.name}</td>
                  <td className="px-6 py-3">{row.designation}</td>
                  {isTeachers && !isMobile && "phone" in row && (
                    <td className="px-6 py-3">{(row as Teacher).phone}</td>
                  )}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
