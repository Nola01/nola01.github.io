---
title: "Read it! - Gestión de Lectura Educativa"
description: "Plataforma móvil Fullstack para la gestión digital de itinerarios de lectura y seguimiento académico en centros educativos."
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

Este proyecto cuenta con dos reposotorios:
* [Repositorio "Read it!" — Frontend](https://github.com/Nola01/read_it_app_-front-)
* [Repositorio "Read it!" — Backend](https://github.com/Nola01/read_it_app_-back-)

### 🚀 Sobre el Proyecto
**'Read it!'** fue mi proyecto final del Ciclo Formativo de Grado Superior en **Desarrollo de Aplicaciones Multiplataforma (DAM)**. El objetivo fue digitalizar la gestión de las lecturas obligatorias en centros educativos, facilitando la interacción entre profesores y alumnos.

La aplicación permite a los docentes asignar libros mediante **itinerarios personalizados**, mientras que los alumnos disponen de un entorno intuitivo para consultar sus tareas, fechas límite y detalles de los libros asignados.

### 🛠️ Arquitectura y Tecnologías
El proyecto destaca por su robustez técnica y el uso de un ecosistema basado íntegramente en **JavaScript**:

* **Frontend (Móvil):** Desarrollado con **React Native**, permitiendo una experiencia nativa tanto en iOS como en Android. Se implementó una navegación compleja mediante *Stack Navigation* y componentes avanzados como calendarios expansibles y selectores de imágenes.
* **Backend (API REST):** Construido con **Node.js** y **Express**, gestionando la lógica de negocio y la comunicación con la base de datos de forma eficiente.
* **Base de Datos:** Uso de **MySQL** para el modelo relacional, gestionado mediante el constructor de consultas **Knex.js** para mayor seguridad y legibilidad del código.
* **DevOps:** Contenedorización del backend mediante **Docker** para asegurar la portabilidad y facilidad de despliegue.

### 🔑 Funcionalidades Principales
* **Sistema de Roles:** Acceso diferenciado para **Profesores** (CRUD completo de libros e itinerarios) y **Alumnos** (visualización de itinerarios y calendario de entregas).
* **Seguridad:** Autenticación de usuarios mediante **JWT (JSON Web Tokens)** y protección de rutas.
* **Interacción Avanzada:** Integración de la cámara y galería del dispositivo para la gestión de imágenes mediante *Image Picker*.
* **Feedback de Usuario:** Implementación de validación de formularios y notificaciones visuales (*Toasts*) para mejorar la experiencia de uso.
