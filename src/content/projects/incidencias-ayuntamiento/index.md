---
title: "API de Gestión de Incidencias"
description: "Servicio REST robusto desarrollado con Spring Boot para la gestión centralizada de avisos ciudadanos y administración municipal."
date: "Dec 15 2025"
tags:
  - Java
  - Spring Boot
  - API REST
  - Hibernate
  - MySQL
repoURL: "https://github.com/Nola01/incidencias-ayuntamiento/tree/main"
---

### 🚀 Sobre el proyecto
Este proyecto consiste en el desarrollo del **núcleo lógico (Backend)** para una plataforma de gestión de incidencias locales. Fue realizado como un **proyecto en equipo compuesto por 3 personas**, lo que permitió aplicar metodologías de desarrollo colaborativo y control de versiones mediante Git.

El sistema implementa una lógica de negocio donde los ciudadanos pueden registrarse y gestionar su historial de avisos, mientras que la administración posee el control total sobre el ciclo de vida de cada incidencia para una gestión eficiente de los servicios municipales.

A pesar de que se han implementado las funciones básicas para cumplir el propósito del proyecto, aún hay margen de mejora en varios aspectos.

### 🛠️ Arquitectura y Tecnologías
Para garantizar un código limpio y escalable, el equipo siguió el patrón de **Arquitectura en Capas**:

* **Controladores (Controllers):** Gestión de endpoints REST para la interacción con el cliente.
* **Servicios (Services):** Implementación de la lógica de negocio y validaciones.
* **Repositorios (Repositories):** Abstracción de datos con **Spring Data JPA**.
* **Modelo de Datos:** Gestión de relaciones `@OneToMany` entre usuarios e incidencias en una base de datos **MySQL**.

### 🔑 Funcionalidades Principales
* **Colaboración en Equipo:** Coordinación de tareas para el diseño de la API y la estructura de datos.
* **Gestión de Usuarios:** Registro y persistencia de ciudadanos con sus listas personales de reportes.
* **Panel Administrativo:** Operaciones CRUD completas para la gestión técnica de cada incidencia por parte del ayuntamiento.
