# React State Introduction

## Table of Contents
- [Important Files/Folders](#important-filesfolders)
- [Important Commands](#important-commands)
- [Resources](#resources)
  - [What I Read](#what-i-read)
  - [What I Watched](#what-i-watched)
  - [Tools I Used](#tools-i-used)
- [Project Overview](#project-overview)
- [Learning Objectives](#learning-objectives)
- [Task 0: Getting Started](#task-0-getting-started)

---

## Important Files/Folders

- `index.html`: The HTML file that appears when the dev server starts.
- `src`: All JavaScript/JSX code resides in this directory.
- `src/assets`: Static assets such as images loaded through JavaScript files.
- `src/App.jsx`: The main app component for the entire application.

---

## Important Commands

- `npm run dev`: Starts the dev server with Hot Module Reloading on port 5173. File changes are reflected automatically in the browser.
- `npm run lint`: Checks for known linting issues using ESLint.
- `npm run format`: Reformats files automatically using Prettier.

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

## Project Overview

This project provides a hands-on introduction to state management in React. You will build a school course directory capable of:

- Loading courses from an API.
- Supporting search, sorting, and pagination of the course directory.
- Allowing users to enroll in and drop courses.

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
   - Forked the starter code from the provided repository: [https://github.com/atlas-jswank/atlas-react-state-intro](https://github.com/atlas-jswank/atlas-react-state-intro).
   - Cloned the forked repository locally.

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

