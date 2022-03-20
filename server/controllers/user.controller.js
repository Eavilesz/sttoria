const { response, request } = require("express");
const { User } = require("../models/user.model");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const { Gallery } = require("../models/gallery.model");

module.exports.findAllUsers = (request, response) => {
  User.find()
    .then((allUsers) => response.json({ user: allUsers }))
    .catch((err) =>
      response.json({ message: "Something went wrong", error: err })
    );
};

module.exports.login = (request, response) => {
  User.findOne({ email: request.body.email })
    .then((user) => {
      if (user === null) {
        console.log("no user");
        response.json({
          msg: "Combinación de usuario y contraseña incorrecta!",
        });
      } else {
        bcrypt
          .compare(request.body.password, user.password)
          .then((passwordIsValid) => {
            console.log(passwordIsValid);
            if (passwordIsValid) {
              const secret = "mysecret";
              const newJWT = jwt.sign(
                {
                  _id: user._id,
                },
                secret
              );
              response
                .cookie("usertoken", newJWT, secret, {
                  httpOnly: true,
                })
                .json({ msg: "Bienvenido!" });
            } else {
              response.json({
                msg: "Combinación de usuario y contraseña incorrecta!",
              });
            }
          })
          .catch((err) =>
            response.json({
              msg: "Combinación de usuario y contraseña incorrecta!",
            })
          );
      }
    })
    .catch((err) => response.json(err));
};

module.exports.getUser = (request, response) => {
  User.findOne({ _id: request.params.id })
    .then((user) => response.json(user))
    .catch((err) => response.json(err));
};

module.exports.createUser = (request, response) => {
  const { email, password } = request.body;
  User.create({
    email,
    password,
  })
    .then((user) => response.json(user))
    .catch((err) => response.status(400).json(err));
};

module.exports.updateUser = (request, response) => {
  User.findOneAndUpdate({ _id: request.params.id }, request.body, {
    new: true,
    runValidators: true, //Esto enciende las validaciones en la edicion de un documento
  })
    .then((updateUser) => response.json(updateUser))
    .catch((err) => response.status(400).json(err));
};

module.exports.deleteUser = (request, response) => {
  User.deleteOne({ _id: request.params.id })
    .then((deleteConfirmation) => response.json(deleteConfirmation))
    .catch((err) => response.json(err));
};

module.exports.createGallery = (request, response) => {
  const { photos } = request.body;
  Gallery.create({
    photos,
  })
    .then((gallery) => response.json(gallery))
    .catch((err) => response.status(400).json(err));
};

module.exports.findAllGalleries = (request, response) => {
  Gallery.find()
    .then((gallery) => response.json({ gallery: gallery }))
    .catch((err) =>
      response.json({ message: "Something went wrong", error: err })
    );
};

module.exports.updateGallery = (request, response) => {
  Gallery.findOneAndUpdate({ _id: request.params.id }, request.body, {
    new: true,
    // runValidators: true, //Esto enciende las validaciones en la edicion de un documento
  })
    .then((updateUser) => response.json(updateUser))
    .catch((err) => response.status(400).json(err));
};
