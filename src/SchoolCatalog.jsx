import React, { useState, useEffect, useContext } from "react";
import { CourseContext } from "./App";
import Pagination from "./Pagination";

export default function SchoolCatalog() {
  const [courses, setCourses] = useState([]);
  const [filter, setFilter] = useState("");
  const [sort, setSort] = useState(null);
  const [direction, setDirection] = useState("asc");
  const [page, setPage] = useState(1);
  const { enrolled, enroll, language } = useContext(CourseContext);

  useEffect(() => {
    fetch("/api/courses.json")
      .then((response) => response.json())
      .then((data) => setCourses(data))
      .catch((err) => console.error("Error fetching data: ", err));
  }, []);

  const handleSort = (col) => {
    const newDirection = sort === col && direction === "asc" ? "desc" : "asc";
    setSort(col);
    setDirection(newDirection);
  };

  const filteredCourses = courses.filter(
    (course) =>
      course.courseNumber.toLowerCase().includes(filter.toLowerCase()) ||
      course.courseName.toLowerCase().includes(filter.toLowerCase())
  );

  const sortedCourses = [...filteredCourses].sort((a, b) => {
    if (sort) {
      const valueA = a[sort];
      const valueB = b[sort];

      if (valueA < valueB) return direction === "asc" ? -1 : 1;
      if (valueA > valueB) return direction === "asc" ? 1 : -1;
    }
    return 0;
  });

  const currentPage = sortedCourses.slice((page - 1) * 5, page * 5);
  const totalPages = Math.ceil(sortedCourses.length / 5);

  const isEnrolled = (courseNumber) =>
    enrolled.some((course) => course.courseNumber === courseNumber);

  return (
    <div className="school-catalog">
      <h1>{language === "en" ? "School Catalog" : "Catálogo Escolar"}</h1>
      <input
        type="text"
        placeholder={language === "en" ? "Search" : "Buscar"}
        value={filter}
        onChange={(e) => {
          setFilter(e.target.value);
          setPage(1);
        }}
      />
      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th
                className={sort === "trimester" ? "selected" : ""}
                onClick={() => handleSort("trimester")}
              >
                {language === "en" ? "Trimester" : "Trimestre"}
              </th>
              <th
                className={sort === "courseNumber" ? "selected" : ""}
                onClick={() => handleSort("courseNumber")}
              >
                {language === "en" ? "Course Number" : "Número del Curso"}
              </th>
              <th
                className={sort === "courseName" ? "selected" : ""}
                onClick={() => handleSort("courseName")}
              >
                {language === "en" ? "Course Name" : "Nombre del Curso"}
              </th>
              <th
                className={sort === "semesterCredits" ? "selected" : ""}
                onClick={() => handleSort("semesterCredits")}
              >
                {language === "en" ? "Semester Credits" : "Créditos Semestrales"}
              </th>
              <th
                className={sort === "totalClockHours" ? "selected" : ""}
                onClick={() => handleSort("totalClockHours")}
              >
                {language === "en" ? "Total Clock Hours" : "Horas Totales"}
              </th>
              <th>{language === "en" ? "Enroll" : "Inscríbase"}</th>
            </tr>
          </thead>
          <tbody>
            {currentPage.length > 0 ? (
              currentPage.map((course, index) => (
                <tr key={index}>
                  <td>{course.trimester}</td>
                  <td>{course.courseNumber}</td>
                  <td>{course.courseName}</td>
                  <td>{course.semesterCredits}</td>
                  <td>{course.totalClockHours}</td>
                  <td>
                    <button
                      onClick={() => enroll(course)}
                      disabled={isEnrolled(course.courseNumber)}
                      className={isEnrolled(course.courseNumber) ? "enrolled" : ""}
                    >
                      {isEnrolled(course.courseNumber)
                        ? language === "en"
                          ? "Enrolled"
                          : "Inscrito"
                        : language === "en"
                        ? "Enroll"
                        : "Inscríbase"}
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="6">
                  {language === "en"
                    ? "No courses found"
                    : "No se encontraron cursos"}
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
      <Pagination
        page={page}
        totalPages={totalPages}
        onPrevious={() => setPage(page - 1)}
        onNext={() => setPage(page + 1)}
      />
    </div>
  );
}