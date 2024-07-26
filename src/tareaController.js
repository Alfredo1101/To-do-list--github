import pool from "./db.js";

//Funsion para buscar una tarea
export const buscarTarea = async (query) => {
  try {
    const [rows] = await pool.query(
      "SELECT * FROM list_tareas WHERE tarea LIKE ? OR descripcion LIKE ?",
      [`%${query}%`, `%${query}%`]
    );
    return rows;
  } catch (error) {
    throw { status: 500, message: "Error al buscar la tarea" };
  }
};
// Función para agregar una nueva tarea
export const agregarTarea = async ({ fecha, tarea, descripcion }) => {
  try {
    const sql = "INSERT INTO List_tareas (fecha, tarea, descripcion) VALUES (?, ?, ?)";
    const [result] = await pool.query(sql, [fecha, tarea, descripcion]);
    return result;
  } catch (error) {
    console.error("Error al agregar la tarea:", error);
    throw { status: 500, message: "Error al crear la tarea" };
  }
};


// Función para listar todas las tareas
export const listarTarea = async () => {
  try {
    const [rows] = await pool.query("SELECT * FROM List_tareas");
    return rows;
  } catch (error) {
    console.error("Error al listar las tareas:", error);
    throw { status: 500, message: "Error al obtener las tareas" };
  }
};

// Obtener detalles de una tarea por ID
export const obtenerDetallesTarea = async (id) => {
  try {
    const [rows] = await pool.query(
      "SELECT * FROM list_tareas WHERE id = ?",
      [id]
    );

    if (rows.length === 1) {
      const tarea = rows[0];
      return tarea;
    } else {
      throw { status: 404, message: "Tarea no encontrado" };
    }
  } catch (error) {
    console.error(error);
    throw { status: 500, message: "Error al obtener detalles de la tarea" };
  }
};

//Obtener formualrio para actualizar tarea
export async function obtenerDetallesTareaUpdate(id) {
  try {
    const [rows] = await pool.query(
      "SELECT * FROM list_tareas WHERE id= ?",
      [id]
    );

    if (rows.length === 1) {
      return rows[0];
    } else {
      throw { status: 404, message: "Tarea no encontrado" };
    }
  } catch (error) {
    console.error(error);
    throw { status: 500, message: "Error al obtener detalles de la tarea" };
  }
}

// Actualizar un estudiante por ID
export const actualizarTarea = async (
  id,
  { fecha, tarea, descripcion }
) => {
  try {
    await pool.query(
      "UPDATE list_tareas SET fecha = ?, tarea = ?, descripcion = ? WHERE id = ?",
      [fecha, tarea, descripcion, id]
    );
  } catch (error) {
    throw {
      status: 500,
      message: `Error al actualizar la tarea con ID ${id}`,
    };
  }
};

// Eliminar una tareae por ID
export const eliminarTarea = async (id) => {
  try {
    await pool.query("DELETE FROM list_tareas WHERE id = ?", [id]);
  } catch (error) {
    throw {
      status: 500,
      message: `Error al eliminar la tarea con ID ${id}`,
    };
  }
};
