---
title: "Issue Management API"
description: "Robust REST service developed with Spring Boot for centralized management of citizen alerts and municipal administration."
date: "Dec 15 2025"
tags:
  - Java
  - Spring Boot
  - REST API
  - Hibernate
  - MySQL
repoURL: "https://github.com/Nola01/incidencias-ayuntamiento/tree/main"
---

### 🚀 About the Project
This project consists of the development of the **logical core (Backend)** for a local issue management platform. It was carried out as a **team project involving 3 members**, which allowed for the application of collaborative development methodologies and version control through Git.

The system implements business logic where citizens can register and manage their own report history, while the administration maintains full control over the lifecycle of each incident for efficient management of municipal services.

While basic functions have been implemented to meet the project's goals, there is still room for improvement in several areas.

### 🛠️ Architecture and Technologies
To ensure clean and scalable code, the team followed the **Layered Architecture** pattern:

* **Controllers:** Management of REST endpoints for client interaction.
* **Services:** Implementation of business logic and data validations.
* **Repositories:** Data abstraction using **Spring Data JPA**.
* **Data Model:** Management of `@OneToMany` relationships between users and incidents in a **MySQL** database.

### 🔑 Key Features
* **Team Collaboration:** Coordination of tasks for API design and data structure definition.
* **User Management:** Registration and persistence of citizens with their personal report lists.
* **Administrative Panel:** Full CRUD operations for technical management of each incident by the city council.