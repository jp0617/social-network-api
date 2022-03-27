const express = require("express");

const UserRoutes = require("./src/routes/user.routes");
const cors = require("cors");
const app = express();

app.set("port", 3000);
app.use(express.json());
app.use(cors());

app.use("/", UserRoutes);

app.listen(app.get("port"), () => {
  console.log("listening on port ", app.get("port"));
});
