---
title: "Read it! - Educational Reading Management"
description: "Fullstack mobile platform for the digital management of reading itineraries and academic tracking in educational centers."
date: "Jun 15 2022"
tags:
  - React Native
  - NodeJS
  - Express
  - MySQL
  - Docker
  - JavaScript
repoURL: ""
---

This project features two repositories:
* [ "Read it!" Repository — Frontend](https://github.com/Nola01/read_it_app_-front-)
* [ "Read it!" Repository — Backend](https://github.com/Nola01/read_it_app_-back-)

### 🚀 About the Project
**'Read it!'** was my final project for the Higher Vocational Training Degree in **Cross-Platform Application Development (DAM)**. The objective was to digitize the management of mandatory readings in educational centers, facilitating seamless interaction between teachers and students.

The application allows teachers to assign books through **personalized itineraries**, while students have an intuitive environment to check their tasks, deadlines, and details of their assigned readings.

### 🛠️ Architecture and Technologies
The project stands out for its technical robustness and the use of an ecosystem entirely based on **JavaScript**:

* **Frontend (Mobile):** Developed with **React Native**, enabling a native experience on both iOS and Android. Complex navigation was implemented using *Stack Navigation* and advanced components such as expandable calendars and image pickers.
* **Backend (REST API):** Built with **Node.js** and **Express**, efficiently managing business logic and database communication.
* **Database:** Utilizes **MySQL** for the relational model, managed through the **Knex.js** query builder for enhanced security and code readability.
* **DevOps:** Backend containerization using **Docker** to ensure portability and ease of deployment.

### 🔑 Key Features
* **Role-Based System:** Differentiated access for **Teachers** (full CRUD for books and itineraries) and **Students** (visualization of itineraries and submission calendars).
* **Security:** User authentication via **JWT (JSON Web Tokens)** and route protection.
* **Advanced Interaction:** Integration of the device's camera and gallery for image management through *Image Picker*.
* **User Feedback:** Implementation of form validation and visual notifications (*Toasts*) to enhance the overall user experience.