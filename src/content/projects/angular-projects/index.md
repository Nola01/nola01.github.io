---
title: "Angular API Lab: Colección de Micro-apps"
description: "Serie de proyectos desarrollados para profundizar en el ecosistema Angular, el uso de RxJS y el consumo eficiente de servicios REST."
date: "May 2022"
tags:
  - Angular
  - TypeScript
  - RxJS
  - API REST
  - Bootstrap
repoURL: ""
---

### 🚀 Sobre el Laboratorio
Este apartado reúne tres desarrollos enfocados en la resolución de problemas comunes en el frontend: la gestión de estados, el filtrado de datos en tiempo real y la comunicación asíncrona con servicios externos. 

A pesar de su sencillez visual, cada aplicación sirvió para consolidar conceptos clave de **Angular** como la inyección de dependencias, la modularización por componentes y el manejo de flujos de datos con **Observables**.

### 🛠️ Proyectos Incluidos

#### 1. Wiki de superhéroes
Enciclopedia interactiva de superhéroes.
* **Foco técnico:** Configuración de un servidor de datos local (**JSON-server**) para simular una base de datos REST. Implementación y testeo de **Auth Guards** para la gestión de acceso a rutas protegidas.
* **Funcionalidad:** Operaciones de consulta sobre un modelo de datos local, búsqueda optimizada y lógica de protección de rutas experimentada durante el desarrollo.
* Puedes consultar el código en el repositorio de [**GitHub**](https://github.com/Nola01/heroes-app)

#### 2. Explorador de países
Herramienta de consulta geográfica basada en una API REST.
* **Foco técnico:** Uso de rutas hijas y paso de parámetros por URL para mostrar información detallada de cada país.
* **Funcionalidad:** Búsqueda por nombre, región, capital y visualización de datos como banderas y población.
* Puedes consultar el código en el repositorio de [**GitHub**](https://github.com/Nola01/countries-app)

#### 3. Búsqueda de gifs
Buscador de animaciones integrado con la API de Giphy.
* **Foco técnico:** Persistencia local mediante *LocalStorage* para mantener el historial de búsquedas del usuario.
* **Funcionalidad:** Galería de imágenes organizada con los resultados de la búsqueda con la implementación de una barra lateral que muestra el historial de búsqueda.
* Puedes consultar el código en el repositorio de [**GitHub**](https://github.com/Nola01/gifs-app)

### 🔑 Competencias Consolidadas
* **RxJS:** Gestión de peticiones HTTP y operadores para transformar flujos de datos.
* **Modularización:** Estructura de carpetas basada en módulos funcionales y compartidos (Shared Modules).
* **Clean Code:** Separación estricta de responsabilidades entre Servicios (lógica) y Componentes (vista).
