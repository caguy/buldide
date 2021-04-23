const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let UserSchema = new Schema(
  {
    email: {
      type: String,
      required: true,
      immutable: true,
      unique: true,
    },
    emailVerified: Date,
    username: {
      type: String,
      required: [true, "Le nom d'utilisateur est obligatoire"],
      minlength: [
        4,
        "Le nom d'utilisateur doit contenir au moins 4 caractères",
      ],
      maxlength: [10, "Le nom d'utilisateur ne peut pas excéder 30 caractères"],
      trim: true,
      unique: true,
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

UserSchema.statics = {
  updateUserByEmail: async function (email, attributes) {
    return await this.findOneAndUpdate({ email }, attributes, {
      new: true,
      runValidators: true,
    });
  },
};

module.exports = UserSchema;
