const User = require("../models/User");

const getUser = async (req, res) => {
  try {
    const usuario = await User.findByPk(req.user.id, {
      attributes: {
        exclude: ["password"]
      }
    });

    res.json(usuario);

  } catch (error) {
    res.status(500).json({
      mensaje: "Error al obtener usuario",
      error: error.message
    });
  }
};


const updateUser = async (req, res) => {
  try {
    const { name, email } = req.body;

    await User.update(
      {
        name,
        email
      },
      {
        where: {
          id: req.user.id
        }
      }
    );

    res.json({
      mensaje: "Usuario actualizado correctamente"
    });

  } catch (error) {
    res.status(500).json({
      mensaje: "Error al actualizar usuario",
      error: error.message
    });
  }
};


const deleteUser = async (req, res) => {
  try {
    await User.destroy({
      where: {
        id: req.user.id
      }
    });

    res.json({
      mensaje: "Usuario eliminado correctamente"
    });

  } catch (error) {
    res.status(500).json({
      mensaje: "Error al eliminar usuario",
      error: error.message
    });
  }
};


module.exports = {
  getUser,
  updateUser,
  deleteUser
};