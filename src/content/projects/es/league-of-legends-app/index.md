---
title: "Wiki League of Legends"
description: "Aplicación web reactiva que consume una API con información de League of Legends en español para ofrecer una enciclopedia completa de campeones con gestión de usuarios."
date: "Mar 2022"
tags:
  - React
  - Firebase
  - API REST
  - JavaScript
repoURL: "https://github.com/Nola01/league-of-legends-app"
---

### 🚀 Sobre el proyecto
Esta aplicación es una herramienta indispensable para jugadores de **League of Legends**, diseñada como una "wiki" interactiva. El proyecto destaca por su capacidad de respuesta y por integrar un sistema completo de gestión de datos en tiempo real.

No solo se limita a listar información estática, sino que permite a los usuarios interactuar con el ecosistema de campeones, personalizando su experiencia mediante funciones de persistencia de datos.

### 🛠️ Arquitectura y Tecnologías
Para este desarrollo, el enfoque principal fue la **seguridad** y la **sincronización de datos**:

* **Frontend:** Desarrollado con **React**, utilizando hooks para la gestión de estados y efectos al consumir la API oficial de campeones.
* **Backend & Hosting:** Integración total con **Firebase**. Se utilizó **Firestore** como base de datos NoSQL para almacenar los favoritos y los personajes creados manualmente.
* **Seguridad:** Implementación de **React Router** con lógica de **rutas privadas y públicas**, garantizando que solo los usuarios autenticados accedan a funciones críticas.
* **Autenticación:** Sistema híbrido que permite el acceso mediante **correo electrónico/contraseña** y proveedores externos como **Google Auth**.

### 🔑 Funcionalidades Principales
* **Consumo de API:** Carga dinámica de datos de campeones, incluyendo imágenes y una breve descripción.
* **Personalización:** Sistema de "Favoritos" que permite a cada usuario guardar sus personajes preferidos en su perfil.
* **Gestión de Datos (CRUD):** Capacidad para añadir personajes manualmente, permitiendo al usuario expandir la base de datos localmente.
* **Despliegue Profesional:** Aplicación totalmente funcional desplegada y mantenida en la infraestructura de Firebase.
