---
title: "UJA Parking - Smart Parking Management"
description: "System designed for intelligent management, monitoring, and reservation of parking spaces on the University of Jaén campus."
date: "Sep 14 2026"
tags:
  - Angular
  - Ionic
  - TypeScript
  - Spring Boot
  - Java
  - MySQL
---

### 🚀 About the Project

This project was developed as a Bachelor's Thesis for the B.E. in Computer Science at the **University of Jaén**, achieving a final grade of **9.5/10 (Outstanding)**.

**UJA Parking** stems from the need to optimize mobility on the university campus, transforming the traditional "blind search" for parking into a digital and efficient model. The system consists of a **centralized backend** and a **cross-platform native mobile application**. 

The system implements Role-Based Access Control (Guest, UJA Community User, and Administrator) and allows users to:
*   Check real-time parking space availability.
*   Make advance reservations with strict transactional control to prevent race conditions (time overlaps).
*   Receive native push notifications on their mobile devices regarding reservation status.
*   Monitor the overall campus status through an administration dashboard.

### 🛠️ Technologies Used

*   **Frontend:** Angular 17+ and Ionic Framework (TypeScript) to compile a single native codebase for iOS, Android, and Web. Integration with Capacitor for native device APIs.
*   **Backend:** Java 21 and Spring Boot, featuring stateless security managed via JSON Web Tokens (JWT) and Spring Security.
*   **Database:** MySQL managed through Spring Data JPA (Hibernate) to ensure referential integrity and transactional isolation.

### 🎥 Demo, Technical Report & Architecture

Below, you can watch the application in action, view the complete technical report, or visit the public repository to explore the architecture diagrams in detail. 

> **Note:** The attached PDF thesis (Memoria) is only available in Spanish, but the architectural documentation in the GitHub repository is fully available in English.

<div style="display: flex; gap: 15px; margin-bottom: 25px; margin-top: 15px; flex-wrap: wrap;">
  <a href="/memoria-uja-parking.pdf" target="_blank" style="padding: 10px 20px; background-color: #007ACC; color: white; text-decoration: none; border-radius: 6px; font-weight: bold; text-align: center;">
    📄 Open PDF Report (ES)
  </a>
  <a href="https://github.com/Nola01/uja-parking-public/tree/main" target="_blank" style="padding: 10px 20px; background-color: #24292e; color: white; text-decoration: none; border-radius: 6px; font-weight: bold; text-align: center;">
    🔧 Architecture on GitHub
  </a>
</div>

<video width="100%" controls style="border-radius: 8px; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
  <source src="/demo_uja.mp4" type="video/mp4">
  Your browser does not support HTML5 video playback.
</video>