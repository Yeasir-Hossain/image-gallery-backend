import { Schema, model } from 'mongoose';

const schema = new Schema({
  path: { type: String },
  user: { type: Schema.Types.ObjectId, ref: 'User' },
}, { timestamps: true });

schema.methods.toJSON = function () {
  const obj = this.toObject();
  delete obj.__v;
  delete obj.createdAt;
  delete obj.updatedAt;
  return JSON.parse(JSON.stringify(obj).replace(/_id/g, 'id'));
};

export default model('Image', schema);