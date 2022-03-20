const mongoose = require("mongoose");

const GallerySchema = new mongoose.Schema(
  {
    photos: {
      type: Array,
    },
  },
  { timestamps: true }
);
// UserSchema.pre("save", function (next) {
//   bcrypt.hash(this.password, 10).then((hash) => {
//     this.password = hash;
//     next();
//   });
// });
module.exports.Gallery = mongoose.model("Gallery", GallerySchema);
