import mongoose, { Schema } from 'mongoose';

var creativesSchema = new Schema({
  header: String,
  header_1: String,
  header_2: String,
  description: String,
  url: String,
  image: String
});

export const Creatives = mongoose.model('Creatives', creativesSchema);
export { creativesSchema };
