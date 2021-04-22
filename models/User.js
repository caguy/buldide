const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let UserSchema = new Schema(
  {
    email: {
      type: String,
      required: true,
    },
    emailVerified: Date,
    username: {
      type: String,
      required: [true, "Le nom d'utilisateur est obligatoire"],
      minlength: [
        4,
        "Le nom d'utilisateur doit contenir au moins 4 caractères",
      ],
      maxlength: [30, "Le nom d'utilisateur ne peut pas excéder 30 caractères"],
      trim: true,
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

UserSchema.statics = {
  findByEmail: async function (email) {
    return await this.findOne({ email }).exec();
  },
};

module.exports = UserSchema;