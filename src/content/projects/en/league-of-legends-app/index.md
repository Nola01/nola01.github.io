---
title: "League of Legends Wiki"
description: "A reactive web application that consumes the official League of Legends API to offer a comprehensive champion encyclopedia with integrated user management."
date: "Mar 2022"
tags:
  - React
  - Firebase
  - REST API
  - JavaScript
repoURL: "https://github.com/Nola01/league-of-legends-app"
---

### 🚀 About the Project
This application is an essential tool for **League of Legends** players, designed as an interactive wiki. The project stands out for its high responsiveness and the integration of a complete real-time data management system.

Beyond listing static information, it allows users to interact with the champion ecosystem, personalizing their experience through data persistence features.

### 🛠️ Architecture and Technologies
The development process focused on **security** and **data synchronization**:

* **Frontend:** Developed with **React**, utilizing hooks for state management and side effects when consuming the official champion API.
* **Backend & Hosting:** Full integration with **Firebase**. **Firestore** was used as a NoSQL database to store favorites and manually created characters.
* **Security:** Implementation of **React Router** with **private and public route** logic, ensuring that only authenticated users can access critical features.
* **Authentication:** A hybrid system allowing access via **email/password** and external providers such as **Google Auth**.

### 🔑 Key Features
* **API Consumption:** Dynamic loading of champion data, including images and brief descriptions.
* **Personalization:** A "Favorites" system that allows each user to save their preferred characters to their personal profile.
* **Data Management (CRUD):** Ability to add characters manually, enabling users to expand the database locally.
* **Professional Deployment:** A fully functional application deployed and maintained on the Firebase infrastructure.