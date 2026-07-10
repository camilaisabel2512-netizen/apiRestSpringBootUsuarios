const express = require("express");
require("dotenv").config();

const sequelize = require("./config/database");

console.log("HOST:", process.env.DB_HOST);

const authRoutes = require("./routes/authRoutes");
const userRoutes = require("./routes/userRoutes");

const app = express();
app.use(express.json());
app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.get("/", (req, res) => {
  res.json({
    mensaje: "¡API funcionando correctamente!"
  });
});

const PORT = process.env.PORT || 3000;

sequelize
  .sync()
  .then(() => {
    return sequelize.authenticate();
  })
  .then(() => {
    console.log(" Conexión a MySQL exitosa");

    app.listen(PORT, () => {
      console.log(`Servidor ejecutándose en el puerto ${PORT}`);
    });
  })
  .catch((error) => {
    console.error(" Error al conectar con la base de datos:", error);
  });