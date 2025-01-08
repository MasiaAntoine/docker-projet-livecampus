# Projet Vue.js avec Express.js et MongoDB

Ce projet est une application web utilisant un frontend **Vue.js**, un backend **Express.js**, et une base de données **MongoDB**. Le tout est orchestré avec **Docker** pour une gestion simplifiée des environnements de développement et de production.

---

## Prérequis

Avant de commencer, assurez-vous d'avoir **Docker** et **Docker Compose** installés sur votre machine.
Consultez les liens suivants pour les installer si nécessaire :

- [Installer Docker](https://docs.docker.com/get-docker/)
- [Installer Docker Compose](https://docs.docker.com/compose/install/)

---

## Installation

### 1. Cloner le repository

Clonez ce repository sur votre machine locale :

```bash
git clone https://github.com/MasiaAntoine/docker-projet-livecampus
cd docker-projet-livecampus
```

### 2. Configuration des ports

Si vous modifiez les ports dans le fichier docker-compose.yml, vous devez également ajuster les fichiers suivants :

- Frontend (Vue.js) :
  Si vous changez le port du frontend, mettez à jour l'URL du backend dans frontend/src/App.vue.

- Backend (Express.js) :
  Si vous changez le port du backend, mettez à jour la configuration dans backend/src/app.js.

Cela garantit que les communications entre le frontend et le backend restent fonctionnelles.

### 3. Lancer le projet

Construisez et démarrez les conteneurs Docker :

```bash
docker-compose up --build
```

Une fois les conteneurs démarrés, accédez à l'application dans votre navigateur à l'adresse suivante :
http://localhost:8080

Vous devriez voir la liste des utilisateurs s'afficher.

### 4. Technologies utilisées

- Frontend : Vue.js
- Backend : Express.js
- Base de données : MongoDB
- Orchestration : Docker, Docker Compose

### 5. Auteur

- Antoine Masia
