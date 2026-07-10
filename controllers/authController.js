const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/User");

const register = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const existeUsuario = await User.findOne({
      where: { email }
    });

    if (existeUsuario) {
      return res.status(400).json({
        mensaje: "El email ya está registrado"
      });
    }

    const passwordEncriptada = await bcrypt.hash(password, 10);

    const usuario = await User.create({
      name,
      email,
      password: passwordEncriptada
    });

    res.status(201).json({
      mensaje: "Usuario creado correctamente",
      usuario
    });

  } catch (error) {
    res.status(500).json({
      mensaje: "Error al registrar usuario",
      error: error.message
    });
  }
};


const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const usuario = await User.findOne({
      where: { email }
    });

    if (!usuario) {
      return res.status(404).json({
        mensaje: "Usuario no encontrado"
      });
    }

    const passwordCorrecta = await bcrypt.compare(
      password,
      usuario.password
    );

    if (!passwordCorrecta) {
      return res.status(401).json({
        mensaje: "Contraseña incorrecta"
      });
    }

    const token = jwt.sign(
      { id: usuario.id },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );

    res.json({
      mensaje: "Login correcto",
      token
    });

  } catch (error) {
    res.status(500).json({
      mensaje: "Error al iniciar sesión",
      error: error.message
    });
  }
};


module.exports = {
  register,
  login
};