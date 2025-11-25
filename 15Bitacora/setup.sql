-- Script para crear la estructura de la base de datos y agregar datos de ejemplo
-- Ejecuta este archivo en MySQL

-- Crear tabla equipos si no existe
CREATE TABLE IF NOT EXISTS equipos (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nombre VARCHAR(100) NOT NULL UNIQUE,
  fecha_creacion TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Crear tabla bitacora si no existe
CREATE TABLE IF NOT EXISTS bitacora (
  id INT AUTO_INCREMENT PRIMARY KEY,
  id_disp INT NOT NULL,
  fecha_programada DATETIME,
  fecha_ejecucion DATETIME,
  tarea_realizada VARCHAR(255),
  tecnico_responsable VARCHAR(100),
  horas_equipo DECIMAL(10, 2),
  estado_despues_servicio VARCHAR(255),
  fecha_creacion TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (id_disp) REFERENCES equipos(id) ON DELETE CASCADE
);

-- Crear tabla lubricacion si no existe
CREATE TABLE IF NOT EXISTS lubricacion (
  id INT AUTO_INCREMENT PRIMARY KEY,
  id_disp INT NOT NULL,
  tipo_lubricante VARCHAR(100),
  fecha_cambio DATE,
  cantidad_utilizada DECIMAL(10, 2),
  muestra_analisis VARCHAR(255),
  resultados_analisis VARCHAR(255),
  proximo_cambio DATE,
  fecha_creacion TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (id_disp) REFERENCES equipos(id) ON DELETE CASCADE
);

-- Insertar dispositivos electrónicos de ejemplo
INSERT INTO equipos (nombre) VALUES
('Bomba Centrífuga'),
('Compresor de Aire'),
('Motor Eléctrico 3HP'),
('Turbina Hidráulica'),
('Generador Diesel'),
('Transformador 50kVA'),
('Ventilador Industrial'),
('Bomba Sumergible'),
('Grúa Overhead'),
('Horno Eléctrico');

-- Insertar algunos registros de bitácora de ejemplo
INSERT INTO bitacora (id_disp, fecha_programada, tarea_realizada, tecnico_responsable) VALUES
(1, NOW(), 'Revisión general y lubricación', 'Juan Pérez'),
(2, NOW(), 'Cambio de filtros y aceite', 'Carlos López'),
(3, NOW(), 'Inspección de bobinas', 'Ana García');

-- Insertar algunos registros de lubricación de ejemplo
INSERT INTO lubricacion (id_disp, tipo_lubricante, fecha_cambio, cantidad_utilizada) VALUES
(1, 'Aceite SAE 40', NOW(), 5.5),
(2, 'Aceite Sintético 10W40', NOW(), 3.2),
(3, 'Grasa NLGI 2', NOW(), 1.8);
