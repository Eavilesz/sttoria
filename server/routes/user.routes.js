const { authenticate } = require("../config/jwt.config");
const UserController = require("../controllers/user.controller");

module.exports = function (app) {
  app.put("/api/user/:id", UserController.updateUser);
  app.delete("/api/user/:id", UserController.deleteUser);

  app.put("/api/gallery/:id", UserController.updateGallery);
  app.get("/api/all-galleries", UserController.findAllGalleries);
  app.post("/api/gallery", UserController.createGallery);
  app.post("/api/register", UserController.createUser);
  app.post("/api/login", UserController.login);
  app.get("/api/all-users", authenticate, UserController.findAllUsers);
};
