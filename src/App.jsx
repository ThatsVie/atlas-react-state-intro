import { createContext, useState } from "react";
import SchoolCatalog from "./SchoolCatalog";
import Header from "./Header";
import ClassSchedule from "./ClassSchedule";

export const CourseContext = createContext();

export default function App() {
  const [enrolled, setEnrolled] = useState([]);
  const [language, setLanguage] = useState("en");
  const [error, setError] = useState("");

  const enroll = (course) => {
    if (enrolled.find((c) => c.courseNumber === course.courseNumber)) {
      setError(
        language === "en"
          ? "Already enrolled in this course."
          : "Ya está inscrito en este curso."
      );
      return;
    }
    setError(""); // clear error if no issue
    setEnrolled([...enrolled, course]);
  };

  const drop = (courseNumber) => {
    setError(""); // clear error when dropping course
    setEnrolled(
      enrolled.filter((course) => course.courseNumber !== courseNumber)
    );
  };

  return (
    <CourseContext.Provider
      value={{ enrolled, enroll, drop, language, setLanguage, error }}
    >
      <Header />
      <SchoolCatalog />
      <ClassSchedule />
    </CourseContext.Provider>
  );
}