import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: [true, "Email is required"],
    unique: true,
  },
  password: {
    type: String,
    required: false,
  },
  project: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "project",
    },
  ],
  time: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "time",
    },
  ],
});

// const userModel = userConnection.model('user', userSchema)

const userModel = mongoose.model("users", userSchema);
export default userModel;
