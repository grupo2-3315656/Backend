# Backend - Gestión de Tareas

API REST para la gestión de tareas, usuarios y asignaciones. Construida con Express.js y MySQL.

## Propósito

Sistema backend que permite administrar tareas (crear, editar, eliminar) y asignarlas a usuarios. Sigue la arquitectura MVC (Model-View-Controller) para mantener el código organizado y escalable.

## Estructura del Proyecto

```
/
├── src/
│   ├── controllers/    # Lógica de negocio
│   ├── models/         # Consultas a la base de datos
│   ├── routes/         # Endpoints de la API
│   ├── data/
│   │   ├── config.js   # Configuración de conexión a MySQL
│   │   └── script.sql  # Script de creación de la BD
│   └── utils/          # Funciones auxiliares
├── package.json
└── README.md
```

## Requisitos

- Node.js (v18 o superior)
- MySQL Server

## Instalación y Ejecución

### 1. Configurar la Base de Datos

Ejecuta el script SQL para crear la base de datos y las tablas:

```bash
mysql -u root -p < src/data/script.sql
```

O ejecútalo manualmente desde tu cliente MySQL favorito (MySQL Workbench, phpMyAdmin, etc.).

### 2. Configurar la Conexión

Edita `src/data/config.js` con tus credenciales de MySQL:

```javascript
export const db = createPool({
    host: "localhost",
    user: "tu_usuario",
    password: "tu_contraseña",
    database: "todoTasks",
});
```

### 3. Instalar Dependencias

```bash
npm install
```

### 4. Ejecutar el Servidor

```bash
npm run dev
```

El servidor iniciará en `http://localhost:3000` (o el puerto configurado).

## Endpoints Disponibles

### Usuarios
| Método | Ruta | Descripción |
|--------|------|-------------|
| GET | /api/users | Obtener todos los usuarios |
| GET | /api/users/:id | Obtener un usuario por ID |
| POST | /api/users | Crear un usuario |
| PUT | /api/users/:id | Actualizar un usuario |
| DELETE | /api/users/:id | Eliminar un usuario |

### Tareas
| Método | Ruta | Descripción |
|--------|------|-------------|
| GET | /api/tasks | Obtener todas las tareas |
| GET | /api/tasks/:id | Obtener una tarea por ID |
| POST | /api/tasks | Crear una tarea |
| PUT | /api/tasks/:id | Actualizar una tarea |
| DELETE | /api/tasks/:id | Eliminar una tarea |

### Asignaciones
| Método | Ruta | Descripción |
|--------|------|-------------|
| GET | /api/assignments | Obtener todas las asignaciones |
| POST | /api/assignments | Asignar tarea a usuario |
| DELETE | /api/assignments/:id | Eliminar una asignación |

## Tecnologías

- **Express.js** - Framework web
- **MySQL2** - Driver de MySQL con soporte Promises
- **Nodemon** - Recarga automática en desarrollo
