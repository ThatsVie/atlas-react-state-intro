import React, { useContext } from "react";
import { CourseContext } from "./App";

export default function LanguageToggle() {
  const { language, setLanguage } = useContext(CourseContext);

  const toggleLanguage = () => {
    setLanguage(language === "en" ? "es" : "en");
  };

  return (
    <button className="language-toggle" onClick={toggleLanguage}>
      {language === "en" ? "Español" : "English"}
    </button>
  );
}