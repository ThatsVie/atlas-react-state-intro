<div align="center">
  
  # React State Introduction

![tech student pug](https://github.com/user-attachments/assets/cbfb3f80-7603-4144-bc70-e19bd5e34586)


**[Deployed Project](https://atlas-react-state-intro-vp.netlify.app/)**

</div>

## Table of Contents
- [Project Overview](#project-overview)
- [Resources](#resources)
  - [What I Read](#what-i-read)
  - [What I Watched](#what-i-watched)
  - [Tools I Used](#tools-i-used)
- [Learning Objectives](#learning-objectives)
- [Task 0: Getting Started](#task-0-getting-started)
- [Task 1: Fetch Data with API](#task-1-fetch-data-with-api)
- [Task 2: Filtering](#task-2-filtering)
- [Task 3: Sorting](#task-3-sorting)
- [Task 4: Pagination](#task-4-pagination)
- [Task 5: Enroll/Drop Course](#task-5-enrolldrop-course)
- [Task 6: Deploy Application](#task-6-deploy-application)
- [Enhancements and Extra Features](#enhancements-and-extra-features)

---

## Project Overview

This project provides a hands-on introduction to state management in React. You will build a school course directory capable of:

- Loading courses from an API.
- Supporting search, sorting, and pagination of the course directory.
- Allowing users to enroll in and drop courses.

**Provided in Curriculum for Reference:** [Live Demo](https://atlas-react-state-intro.netlify.app/)

---

## Resources

### **What I Read**

- **[React State](https://atlas-jswank.github.io/blog/react-state/):** Learn how to store and update state in a React component using hooks.
- **[React Effects](https://atlas-jswank.github.io/blog/react-state-effects/):** Understand effects and fetching data in React using the `useEffect` hook.
- **[React Context](https://atlas-jswank.github.io/blog/react-state-context/):** Pass data from parent to child components without "prop drilling."

### **What I Watched**

- **[React Tutorial for Beginners](https://egghead.io/courses/the-beginner-s-guide-to-react):** Videos 13–28 cover relevant topics for this project.

### **Tools I Used**

- **[React Developer Tools](https://chromewebstore.google.com/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi):** A browser extension to inspect React components easily.

---

## Learning Objectives

- How to manage state in React components.
- React hooks: `useState`, `useEffect`, and `useContext`.
- How to use Context Providers to avoid prop drilling.

---

## Task 0: Getting Started

To kick off this project, I completed the following steps:

### **What I Did**

1. **Forked and Cloned the Repository:**
   - Forked the starter code from [this repository](https://github.com/atlas-jswank/atlas-react-state-intro), created my own repository named atlas-react-state-intro, and cloned it to my local machine. This allowed me to make changes and push updates to my version of the project.

2. **Installed Dependencies:**
   - Navigated to the project directory and ran:
     ```bash
     npm install
     ```

3. **Started the Development Server:**
   - Launched the server using:
     ```bash
     npm run dev
     ```
   - Verified the app was running at [http://localhost:5173](http://localhost:5173).

4. **Explored the Codebase:**
   - Reviewed key files such as `src/App.jsx`, `index.html`, and assets in the `src/assets` folder.

5. **React Developer Tools:**
   - Installed and used the React Developer Tools browser extension to inspect and understand React components and state in the app.

### **Result**
The development environment is set up and ready for further development, with the starter code successfully cloned, configured, and running locally.

---

## Task 1: Fetch Data with API

In this task, I implemented functionality to load data dynamically from an API into the `SchoolCatalog` component.

### **What I Did**

<details>
  <summary>1. Added API Fetch Logic:</summary>

  - In `src/SchoolCatalog.jsx`, I used the `useEffect` hook and the Fetch API to load data from `/api/courses.json` when the component first renders:

    ```javascript
    useEffect(() => {
      fetch('/api/courses.json')
        .then(response => response.json())
        .then(data => setCourses(data))
        .catch(err => console.error('Error fetching data: ', err));
    }, []);
    ```
</details>

<details>
  <summary>2. Stored Data in State:</summary>

  - Created a `courses` state using the `useState` hook to hold the fetched course data:

    ```javascript
    const [courses, setCourses] = useState([]);
    ```
</details>

<details>
  <summary>3. Rendered Data in the Table:</summary>

  - Updated the `SchoolCatalog` table to dynamically generate rows based on the data fetched from the API:

    ```javascript
    <tbody>
      {courses.map((course, index) => (
        <tr key={index}>
          <td>{course.trimester}</td>
          <td>{course.courseNumber}</td>
          <td>{course.courseName}</td>
          <td>{course.semesterCredits}</td>
          <td>{course.totalClockHours}</td>
          <td>
            <button>Enroll</button>
          </td>
        </tr>
      ))}
    </tbody>
    ```
</details>

<details>
  <summary>4. Handled Errors:</summary>

  - Implemented error handling to log any issues during the fetch operation.
</details>

### **Result**

- The `SchoolCatalog` component now dynamically fetches data from `/api/courses.json` and displays it in a table format.
- Each course is rendered as a row in the table.
- The data fetch occurs only once when the component is mounted, thanks to the `useEffect` dependency array.

---

## Task 2: Filtering

In this task, I added functionality to filter the table rows dynamically based on user input in a search field.

### **What I Did**

<details>
  <summary>1. Added Search Input:</summary>

  - Implemented an input field in `src/SchoolCatalog.jsx` to capture the user’s search term:

    ```javascript
    <input
      type="text"
      placeholder="Search"
      value={filter}
      onChange={(e) => setFilter(e.target.value)}
    />
    ```

  - Created a `filter` state using the `useState` hook to store the search input value:

    ```javascript
    const [filter, setFilter] = useState('');
    ```
</details>

<details>
  <summary>2. Filtered Table Rows:</summary>

  - Used the `filter` method on the `courses` array to return only the rows that include the search term in the `courseNumber` or `courseName` columns. Made the search case insensitive:

    ```javascript
    const filteredCourses = courses.filter((course) =>
      course.courseNumber.toLowerCase().includes(filter.toLowerCase()) ||
      course.courseName.toLowerCase().includes(filter.toLowerCase())
    );
    ```

  - Rendered the filtered data dynamically:

    ```javascript
    <tbody>
      {filteredCourses.map((course, index) => (
        <tr key={index}>
          <td>{course.trimester}</td>
          <td>{course.courseNumber}</td>
          <td>{course.courseName}</td>
          <td>{course.semesterCredits}</td>
          <td>{course.totalClockHours}</td>
          <td>
            <button>Enroll</button>
          </td>
        </tr>
      ))}
    </tbody>
    ```
</details>

### **Result**

- The table updates in real time as the user types in the search field.
- Filtering is case insensitive and works for both the `Course Number` and `Course Name` columns.
- No button or additional action is required to apply the filter—the results update automatically.

---

## Task 3: Sorting

In this task, I implemented functionality to allow sorting the table rows by clicking on column headers.

### **What I Did**

<details>
  <summary>1. Tracked Sorting State:</summary>

  - Added `sort` and `direction` states in `src/SchoolCatalog.jsx` to track the column being sorted and the sort direction:

    ```javascript
    const [sort, setSort] = useState(null);
    const [direction, setDirection] = useState('asc');
    ```
</details>

<details>
  <summary>2. Handled Sort Logic:</summary>

  - Created a function to handle sorting logic when a column header is clicked:

    ```javascript
    const handleSort = (col) => {
      const newDirection = sort === col && direction === 'asc' ? 'desc' : 'asc';
      setSort(col);
      setDirection(newDirection);
    };
    ```

  - Used the `sort` method to sort the table rows based on the selected column and direction:

    ```javascript
    const sortedCourses = [...filteredCourses].sort((a, b) => {
      if (sort) {
        const valueA = a[sort];
        const valueB = b[sort];

        if (valueA < valueB) return direction === 'asc' ? -1 : 1;
        if (valueA > valueB) return direction === 'asc' ? 1 : -1;
      }
      return 0;
    });
    ```
</details>

<details>
  <summary>3. Updated Table Headers:</summary>

  - Made the table headers clickable to trigger sorting and dynamically updated their styles based on the sort state:

    ```javascript
    <th
      className={sort === 'trimester' ? 'selected' : ''}
      onClick={() => handleSort('trimester')}
    >
      Trimester
    </th>
    ```
</details>

### **Result**

- The table can now be sorted in ascending or descending order by clicking on column headers.
- Sorting is implemented for the following columns:
  - Trimester
  - Course Number
  - Course Name
  - Semester Credits
  - Total Clock Hours.

---

## Task 4: Pagination

In this task, I implemented pagination to limit the number of rows displayed in the table and allow navigation between pages.

### **What I Did**

<details>
  <summary>1. Created Pagination Component:</summary>

  - Created a reusable `Pagination` component in `src/Pagination.jsx`:

    ```javascript
    export default function Pagination({ page, totalPages, onPrevious, onNext }) {
      return (
        <div className="pagination">
          <div className="buttons">
            <button disabled={page === 1} onClick={onPrevious}>
              Previous
            </button>
            <button disabled={page === totalPages} onClick={onNext}>
              Next
            </button>
          </div>
          <p className="page-indicator">Page {page} of {totalPages}</p>
        </div>
      );
    }
    ```
</details>

<details>
  <summary>2. Integrated Pagination Logic:</summary>

  - In `src/SchoolCatalog.jsx`, I tracked the current page using the `page` state:

    ```javascript
    const [page, setPage] = useState(1);
    const totalPages = Math.ceil(sortedCourses.length / 5);
    ```

  - Limited the rows displayed per page to 5:

    ```javascript
    const currentPage = sortedCourses.slice((page - 1) * 5, page * 5);
    ```

  - Passed the necessary props to the `Pagination` component:

    ```javascript
    <Pagination
      page={page}
      totalPages={totalPages}
      onPrevious={() => setPage(page - 1)}
      onNext={() => setPage(page + 1)}
    />
    ```
</details>

<details>
  <summary>3. Styled Pagination:</summary>

  - Styled the pagination buttons and page indicator for better user experience.
</details>

### **Result**

- Pagination is implemented as a reusable component.
- The table displays 5 rows of data per page.
- Users can navigate between pages using Next and Previous buttons, which are disabled appropriately.

---

## Task 5: Enroll/Drop Course

In this task, I implemented functionality to allow users to enroll in and drop courses, as well as to reflect the current course count in the header.

### **What I Did**

<details>
  <summary>1. Created Context for Course State:</summary>

  - In `App.jsx`, I created the `CourseContext` to manage enrolled courses and the `language` state:
    ```javascript
    const [enrolled, setEnrolled] = useState([]);
    const enroll = (course) => setEnrolled([...enrolled, course]);
    const drop = (courseNumber) => setEnrolled(enrolled.filter(course => course.courseNumber !== courseNumber));
    ```
</details>

<details>
  <summary>2. Enroll in Courses:</summary>

  - Updated `SchoolCatalog.jsx` to allow enrolling in a course. Clicking the "Enroll" button adds the course to the `enrolled` state:
    ```javascript
    <button
      onClick={() => enroll(course)}
      disabled={isEnrolled(course.courseNumber)}
    >
      {isEnrolled(course.courseNumber) ? "Enrolled" : "Enroll"}
    </button>
    ```
</details>

<details>
  <summary>3. Display Enrolled Courses:</summary>

  - Created the `ClassSchedule` component to display all enrolled courses using the `enrolled` state:
    ```javascript
    {enrolled.map((course) => (
      <tr key={course.courseNumber}>
        <td>{course.courseNumber}</td>
        <td>{course.courseName}</td>
        <td>
          <button onClick={() => drop(course.courseNumber)}>Drop</button>
        </td>
      </tr>
    ))}
    ```
</details>

<details>
  <summary>4. Drop Courses:</summary>

  - Added functionality in `ClassSchedule.jsx` to allow dropping a course by clicking the "Drop" button:
    ```javascript
    <button onClick={() => drop(course.courseNumber)}>Drop</button>
    ```
</details>

<details>
  <summary>5. Course Count in Header:</summary>

  - Updated the `Header` component to display the current count of enrolled courses:
    ```javascript
    <div className="enrollment">Classes Enrolled: {enrolled.length}</div>
    ```
</details>

### **Result**

- Users can enroll in courses using the "Enroll" button in the `SchoolCatalog` component.
- Enrolled courses are displayed in the `ClassSchedule` component.
- Users can drop a course using the "Drop" button in the `ClassSchedule` component.
- The total number of enrolled courses is dynamically displayed in the `Header`.

---

### Task 6: Deploy Application

In this task, I deployed the React application to **Netlify** and ensured it was accessible via a live URL.

### **What I Did**

<details>
  <summary>1. Built the Application for Deployment:</summary>

  - Used the following command to create a production build of the app:
    ```bash
    npm run build
    ```
  - This created a `dist` folder containing the optimized production files.
</details>

<details>
  <summary>2. Deployed to Netlify:</summary>

  - Logged into [Netlify](https://www.netlify.com/) and created a new site.
  - Dragged and dropped the contents of the `dist` folder into Netlify's deployment area.
</details>

<details>
  <summary>3. Updated the Site Name:</summary>

  - Changed the site name to the format `atlas-react-state-vp` for better identification.
</details>

<details>
  <summary>4. Verified Deployment:</summary>

  - Confirmed that the app was accessible via the deployed URL.
  - Tested the live application to ensure all features worked as expected.
</details>

### **Result**

- The application is successfully deployed on Netlify.
- It is accessible via the following URL: **[Deployed Application](https://atlas-react-state-intro-vp.netlify.app/)**.
- The app includes all required features, including filtering, sorting, pagination, and enroll/drop functionality.

---

## Enhancements and Extra Features

In addition to completing the curriculum tasks, I implemented the following enhancements and extra features:

### 1. **Responsive Design**
- Ensured the application adapts seamlessly to mobile and tablet devices:
  - Added horizontal scrolling for tables to prevent content squishing on smaller screens.
  - Adjusted font sizes, button dimensions, and padding for better usability on mobile devices.
  - Used CSS media queries to optimize layouts, including stacked elements for smaller screens.

### 2. **Multi-Language Support**
- Introduced a **Language Toggle** component to switch dynamically between English and Spanish.
- Updated all text elements across the application, including:
  - Pagination controls (e.g., "Next" → "Siguiente", "Previous" → "Anterior").
  - Table headers, buttons, and instructional text.

### 3. **Dynamic Button States**
- Enhanced interactivity with dynamic button states:
  - "Enroll" buttons become disabled and display "Enrolled" after a course is added.
  - Clear visual feedback for enabled and disabled buttons, including hover effects.

### 4. **Improved Pagination**
- Added a **Page Number Indicator** to show the current page and total pages (e.g., "Page 1 of 7").
