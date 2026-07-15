# API REST de Usuarios

## Descripción

Este proyecto consiste en una API REST desarrollada con **Node.js**, **Express**, **Sequelize** y **MySQL**. Permite registrar usuarios, iniciar sesión mediante autenticación con JWT y realizar operaciones CRUD protegidas.

## Tecnologías utilizadas

* Node.js
* Express
* Sequelize
* MySQL
* JWT (JSON Web Token)
* bcrypt
* dotenv

## Instalación

1. Clonar el repositorio.
2. Instalar las dependencias:

```bash
npm install
```

3. Crear un archivo `.env` con las credenciales de la base de datos:

```
DB_HOST=
DB_PORT=
DB_NAME=
DB_USER=
DB_PASSWORD=
JWT_SECRET=
```

4. Ejecutar la aplicación:

```bash
npm run dev
```

La API se ejecutará en:

```
http://localhost:3000
```

## Endpoints

### Autenticación

* **POST** `/api/auth/register` → Registrar un usuario.
* **POST** `/api/auth/login` → Iniciar sesión y obtener un token JWT.

### Usuarios (requieren autenticación)

* **GET** `/api/users/profile` → Obtener el perfil del usuario autenticado.
* **PUT** `/api/users/profile` → Actualizar los datos del usuario.
* **DELETE** `/api/users/profile` → Eliminar el usuario autenticado.

## Autor

Camila Ruiz














