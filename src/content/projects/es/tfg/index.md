---
title: "UJA Parking - Gestión Inteligente de Estacionamiento"
description: "Sistema diseñado para la gestión inteligente, monitorización y reserva de estacionamiento en el campus de la Universidad de Jaén."
date: "Sep 14 2026"
tags:
  - Angular
  - Ionic
  - TypeScript
  - Spring Boot
  - Java
  - MySQL
---

### 🚀 Sobre el Proyecto

Este proyecto ha sido desarrollado como Trabajo Fin de Grado (TFG) en Ingeniería Informática en la **Universidad de Jaén**, obteniendo una calificación final de **9,5 (Sobresaliente)**.

**UJA Parking** nace de la necesidad de optimizar la movilidad en el campus universitario, transformando la tradicional búsqueda de aparcamiento "a ciegas" en un modelo digital y eficiente. El sistema está compuesto por un **backend centralizado** y una **aplicación móvil nativa multiplataforma**. 

El sistema implementa un control de acceso basado en roles (Invitado, Usuario de la Comunidad UJA y Administrador) y permite:
*   Consultar la disponibilidad de plazas de aparcamiento en tiempo real.
*   Realizar reservas anticipadas con un estricto control transaccional para evitar condiciones de carrera (solapamientos).
*   Recibir notificaciones nativas push en el dispositivo móvil sobre el estado de las reservas.
*   Monitorizar el estado global del campus mediante un dashboard de administración.

### 🛠️ Tecnologías Utilizadas

*   **Frontend:** Angular 17+ e Ionic Framework (TypeScript) para compilar una única base de código nativa en iOS, Android y Web. Integración con Capacitor para APIs nativas del dispositivo.
*   **Backend:** Java 21 y Spring Boot, con seguridad gestionada mediante JSON Web Tokens (JWT) y Spring Security.
*   **Base de Datos:** MySQL gestionado a través de Spring Data JPA (Hibernate) para asegurar la integridad referencial y el aislamiento transaccional.

### 🎥 Demostración, Memoria y Arquitectura

A continuación, puedes ver el funcionamiento real de la aplicación, visualizar la memoria técnica completa o visitar el repositorio público para explorar los diagramas de arquitectura en detalle:

<div style="display: flex; gap: 15px; margin-bottom: 25px; margin-top: 15px; flex-wrap: wrap;">
  <a href="/memoria-uja-parking.pdf" target="_blank" style="padding: 10px 20px; background-color: #007ACC; color: white; text-decoration: none; border-radius: 6px; font-weight: bold; text-align: center;">
    📄 Abrir Memoria PDF
  </a>
  <a href="https://github.com/Nola01/uja-parking-public/tree/main" target="_blank" style="padding: 10px 20px; background-color: #24292e; color: white; text-decoration: none; border-radius: 6px; font-weight: bold; text-align: center;">
    🔧 Arquitectura en GitHub
  </a>
</div>

<video width="100%" controls style="border-radius: 8px; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
  <source src="/demo-uja.mp4" type="video/mp4">
  Tu navegador no soporta la reproducción de vídeos HTML5. Puedes ver la demostración descargando la memoria.
</video>