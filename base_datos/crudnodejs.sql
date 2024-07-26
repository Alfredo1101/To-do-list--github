-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 26-07-2024 a las 18:38:33
-- Versión del servidor: 10.4.32-MariaDB
-- Versión de PHP: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `crudnodejs`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `list_tareas`
--

CREATE TABLE `list_tareas` (
  `id` int(11) NOT NULL,
  `fecha` text NOT NULL,
  `tarea` varchar(255) NOT NULL,
  `descripcion` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `list_tareas`
--

INSERT INTO `list_tareas` (`id`, `fecha`, `tarea`, `descripcion`) VALUES
(47, '26/07/2024', 'caminar', 'Sacar ala mascota'),
(49, '25/07/2024', 'Imforme', 'Presentar informe de costos'),
(50, '25/07/2024', 'Leer ', 'Terminar capitulo 4'),
(51, '25/07/2024', 'Estudiar ', 'Javascript, react'),
(52, '25/07/2024', 'estudiar', 'Estudiar node.js'),
(53, '25/07/2024', 'correr', 'Hacer ejercicio en las canchas '),
(54, '25/07/2024', 'estudiar', 'Lógica de programación');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `list_tareas`
--
ALTER TABLE `list_tareas`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `list_tareas`
--
ALTER TABLE `list_tareas`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=55;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
