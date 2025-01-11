import React, { useContext } from "react";
import { CourseContext } from "./App";
import logo from "./assets/logo.png";
import LanguageToggle from "./LanguageToggle";

export default function Header() {
  const { enrolled, language } = useContext(CourseContext);

  return (
    <div className="header">
      <div className="header-left">
        <LanguageToggle />
      </div>
      <div className="header-center">
        <img src={logo} alt="logo" className="logo" />
      </div>
      <div className="header-right">
        <div className="enrollment">
          {language === "en" ? "Classes Enrolled" : "Clases Matriculadas"}:{" "}
          {enrolled.length}
        </div>
      </div>
    </div>
  );
}