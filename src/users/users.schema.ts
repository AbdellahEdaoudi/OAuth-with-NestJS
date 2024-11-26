import * as mongoose from 'mongoose';

export const UsersSchema = new mongoose.Schema({
  userId: { type: String, required: true },
  email: { type: String, required: true },
  name: { type: String, required: true },
  photo: { type: String, required: true },
});
