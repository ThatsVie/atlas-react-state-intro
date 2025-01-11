import React, { useContext } from "react";
import { CourseContext } from "./App";

export default function ClassSchedule() {
  const { enrolled, drop, language } = useContext(CourseContext);

  return (
    <div className="class-schedule">
      <h1>{language === "en" ? "Class Schedule" : "Horario de Clases"}</h1>
      <table>
        <thead>
          <tr>
            <th>{language === "en" ? "Course Number" : "Número del Curso"}</th>
            <th>{language === "en" ? "Course Name" : "Nombre del Curso"}</th>
            <th>{language === "en" ? "Drop" : "Eliminar"}</th>
          </tr>
        </thead>
        <tbody>
          {enrolled.length > 0 ? (
            enrolled.map((course) => (
              <tr key={course.courseNumber}>
                <td>{course.courseNumber}</td>
                <td>{course.courseName}</td>
                <td>
                  <button onClick={() => drop(course.courseNumber)}>
                    {language === "en" ? "Drop" : "Eliminar"}
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="3">
                {language === "en"
                  ? "No classes enrolled"
                  : "No hay clases matriculadas"}
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}