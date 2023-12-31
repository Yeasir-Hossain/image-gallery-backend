import { Schema, model } from 'mongoose';

const schema = new Schema({
  sid: { type: String },
  visitedTime: { type: Date },
  rating: { type: Number },
  review: { type: String }
}, { timestamps: true });

schema.methods.toJSON = function () {
  const obj = this.toObject();
  delete obj.__v;
  delete obj.createdAt;
  delete obj.updatedAt;
  return JSON.parse(JSON.stringify(obj).replace(/_id/g, 'id'));
};

export default model('User', schema);