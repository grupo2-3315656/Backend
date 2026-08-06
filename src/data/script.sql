-- Create and select the database
CREATE DATABASE IF NOT EXISTS todoTasks;
USE todoTasks;

-- 1. Create Users table
DROP TABLE IF EXISTS users;
CREATE TABLE users (
    id VARCHAR(50) PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    date DATETIME(3) NOT NULL
);

-- 2. Create Tasks table
DROP TABLE IF EXISTS tasks;
CREATE TABLE tasks (
    id VARCHAR(50) PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    description TEXT,
    status ENUM('pendiente', 'en-progreso', 'completada') NOT NULL,
    date DATETIME(3) NOT NULL
);

-- 3. Create Assignments table (Junction table with Foreign Keys)
DROP TABLE IF EXISTS assignments;
CREATE TABLE assignments (
    id VARCHAR(50) PRIMARY KEY,
    taskId VARCHAR(50) NOT NULL,
    userId VARCHAR(50) NOT NULL,
    assignedAt DATETIME(3) NOT NULL,
    FOREIGN KEY (taskId) REFERENCES tasks(id),
    FOREIGN KEY (userId) REFERENCES users(id)
);

-- Insert Users data
INSERT INTO users (id, name, email, date) VALUES
('1', 'Ana Torres', 'ana.torres@mail.com', '2026-06-09 14:40:00.000'),
('2', 'Carlos Gómez', 'carlos.gomez@mail.com', '2026-06-09 14:40:15.123'),
('3', 'María López', 'maria.lopez@mail.com', '2026-06-09 14:40:30.456'),
('4', 'Juan Pérez', 'juan.perez@mail.com', '2026-06-09 14:40:45.789'),
('5', 'Laura Martínez', 'laura.martinez@mail.com', '2026-06-09 14:41:00.012'),
('1006789012', 'Pedro Sánchez', 'pedro.sanchez@mail.com', '2026-06-09 14:41:15.345'),
('1007890123', 'Sofía Ramírez', 'sofia.ramirez@mail.com', '2026-06-09 14:41:30.678'),
('1008901234', 'Andrés Morales', 'andres.morales@mail.com', '2026-06-09 14:41:45.901'),
('1009012345', 'Valentina Cruz', 'valentina.cruz@mail.com', '2026-06-09 14:42:00.234'),
('1010123456', 'Diego Herrera', 'diego.herrera@mail.com', '2026-06-09 14:42:15.567');

-- Insert Tasks data
INSERT INTO tasks (id, title, description, status, date) VALUES
('gaAI-1L-q98', 'yo le digo hola', 'ella me dice goodbay\nbaby como tu ya no hay', 'completada', '2026-06-09 14:42:30.890'),
('HTCaa311zZk', 'tarea11', 'talvez', 'en-progreso', '2026-06-09 14:42:45.123'),
('Iphia2JC0DY', 'botones', 'crear un boton', 'en-progreso', '2026-06-09 14:43:00.456'),
('U-gu2OTYZKs', 'hacer tareas de ingles', 'hacer la tarea de ingles', 'pendiente', '2026-06-09 14:43:15.789'),
('0CJDrT19MdE', 'Quo ducimus omnis m', 'Fugit aut voluptate', 'completada', '2026-06-09 14:43:30.012'),
('YvG7HhwSY6o', 'Et ut lorem voluptas', 'Cumque duis ut quis', 'pendiente', '2026-06-09 14:43:45.345'),
('09b89126-08dc-439f-b5ab-e4377ad091be', 'test2', 'test2', 'pendiente', '2026-07-28 12:51:20.279');

-- Insert Assignments data
INSERT INTO assignments (id, taskId, userId, assignedAt) VALUES
('a1b2c3d4-e5f6-7890-abcd-ef1234567890', 'gaAI-1L-q98', '1', '2026-07-18 10:00:00.000'),
('b2c3d4e5-f6a7-8901-bcde-f12345678901', 'gaAI-1L-q98', '2', '2026-07-18 10:01:00.000'),
('c3d4e5f6-a7b8-9012-cdef-123456789012', 'gaAI-1L-q98', '3', '2026-07-18 10:02:00.000'),
('d4e5f6a7-b8c9-0123-def0-234567890123', 'HTCaa311zZk', '4', '2026-07-18 10:03:00.000'),
('e5f6a7b8-c9d0-1234-ef01-345678901234', 'HTCaa311zZk', '5', '2026-07-18 10:04:00.000'),
('f6a7b8c9-d0e1-2345-f012-456789012345', 'Iphia2JC0DY', '3', '2026-07-18 10:05:00.000'),
('11223344-5566-7788-99aa-bbccddeeff00', 'U-gu2OTYZKs', '1', '2026-07-18 10:06:00.000'),
('22334455-6677-8899-aabb-ccddeeff0011', 'U-gu2OTYZKs', '1006789012', '2026-07-18 10:07:00.000'),
('33445566-7788-99aa-bbcc-ddeeff001122', 'YvG7HhwSY6o', '2', '2026-07-18 10:08:00.000'),
('44556677-8899-aabb-ccdd-eeff00112233', 'YvG7HhwSY6o', '4', '2026-07-18 10:09:00.000'),
('55667788-99aa-bbcc-ddee-ff0011223344', 'YvG7HhwSY6o', '1006789012', '2026-07-18 10:10:00.000');

SELECT * FROM users;
SELECT * FROM tasks;
SELECT * FROM assignments;