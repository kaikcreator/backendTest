import mongoose, { Schema } from 'mongoose';
import { platformSchema } from './platform';

let campaignSchema = new Schema({
  _id: Number,
  name: String,
  goal: String,
  totalBudget: { type: Number, alias: 'total_budget' },
  status: String,
  platforms: {
    type: Map,
    of: platformSchema
  }
});

campaignSchema.virtual('id')
  .get(function () {
    return this._id;
  })
  .set(function (id) {
    this._id = id;
  });

export const Campaign = mongoose.model('Campaign', campaignSchema);
export { campaignSchema };
