import { Schema, model, models } from "mongoose";

export interface IUser {
  firstName: string;
  lastName: string;
  email: string;
  username: string;
  clerkId: string;
  planId: number;
  creditBalance: number;
  photo: string;
}

const userSchema = new Schema({
  firstName: { type: String, required: true },
  lastName: { type: String },
  email: { type: String, required: true, unique: true},
  username: { type: String, required: true, unique: true },
  clerkId: { type: String, required: true, unique: true },
  planId: { type: Number, default: 1 },
  creditBalance: { type: Number, default: 10 },
  photo: { type: String, required: true },
});

const User = models?.User || model("User", userSchema);

export default User;
