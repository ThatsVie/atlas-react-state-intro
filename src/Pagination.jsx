import React, { useContext } from "react";
import { CourseContext } from "./App";

export default function Pagination({ page, totalPages, onPrevious, onNext }) {
  const { language } = useContext(CourseContext);

  return (
    <div className="pagination">
      <div className="buttons">
        <button
          className={page === 1 ? "disabled" : ""}
          disabled={page === 1}
          onClick={onPrevious}
        >
          {language === "en" ? "Previous" : "Anterior"}
        </button>
        <button
          className={page === totalPages ? "disabled" : ""}
          disabled={page === totalPages}
          onClick={onNext}
        >
          {language === "en" ? "Next" : "Siguiente"}
        </button>
      </div>
      <p className="page-indicator">
        {language === "en"
          ? `Page ${page} of ${totalPages}`
          : `Página ${page} de ${totalPages}`}
      </p>
    </div>
  );
}