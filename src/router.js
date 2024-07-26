import express from "express";

import {
  agregarTarea,
  listarTarea,
  eliminarTarea,
  actualizarTarea,
  obtenerDetallesTarea,
  obtenerDetallesTareaUpdate,
  buscarTarea,
} from "./tareaController.js";

const router = express.Router();

router.get("/Crud-Completo-con-NodeJS-Express-y-MySQL", async (req, res) => {
  try {
    const tareas = await listarTarea();
    res.render("pages/tareas", { tareas });
  } catch (error) {
    const { status, message } = error;
    res.status(status || 500).json({ error: message });
  }
});
// Ruta para agregar una nueva tarea
router.post("/list_tareas", async (req, res) => {
  const { fecha, tarea, descripcion } = req.body;
  try {
    await agregarTarea({ fecha, tarea, descripcion });
    res.redirect("/Crud-Completo-con-NodeJS-Express-y-MySQL");
  } catch (error) {
    const { status, message } = error;
    res.status(status || 500).json({ error: message });
  }
});

// Registrar una  nueva tarea
router.post("/tareas", async (req, res) => {
  const { fecha, tarea, descripcion } = req.body;

  try {
    await agregarTarea({ fecha, tarea, descripcion });
    res.redirect("/");
  } catch (error) {
    const { status, message } = error;
    res.status(status || 500).json({ error: message });
  }
});




// Mostrar formulario para actualizar una tarea
router.get('/formulario-actualizar-tarea/:id', async (req, res) => {
  const tareaId = req.params.id;

  try {
    const tarea = await obtenerDetallesTareaUpdate(tareaId);

    res.render("pages/update_tarea", { tarea });
  } catch (error) {
    const { status, message } = error;
    res.status(status || 500).json({ error: message });
  }
});

//ruta para buscar tarea
router.get("/buscar_tarea", async (req, res) => {
  const query = req.query.query;
  try {
    const tareas = await buscarTarea(query);
    res.render("pages/tareas", { tareas });
  } catch (error) {
    const { status, message } = error;
    res.status(status || 500).json({ error: message });
  }
});


// Ruta para actualizar una tarea por ID
router.post("/actualizar-tarea/:id", async (req, res) => {
  const { fecha, tarea, descripcion } = req.body;
  const id = req.params.id;

  try {
    await actualizarTarea(id, {
      fecha,
      tarea,
      descripcion,
    });

    res.redirect("/Crud-Completo-con-NodeJS-Express-y-MySQL");
  } catch (error) {
    const { status, message } = error;
    res.status(status || 500).json({ error: message });
  }
});

// Ruta para borrar una tarea por ID
router.post("/borrar-tarea/:id", async (req, res) => {
  const id = req.params.id;
  try {
    await eliminarTarea(id);
    res.redirect("/Crud-Completo-con-NodeJS-Express-y-MySQL");
  } catch (error) {
    const { status, message } = error;
    res.status(status || 500).json({ error: message });
  }
});

export default router;
