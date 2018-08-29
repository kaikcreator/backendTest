import mongoose, { Schema } from 'mongoose';
import { targetAudianceSchema } from './target_audiance';
import { creativesSchema } from './creatives';
import { insightsSchema } from './insights';

var platformSchema = new Schema({
  status: String,
  totalBudget: { type: Number, alias: 'total_budget' },
  remainingBudget: { type: Number, alias: 'remaining_budget' },
  startDate: { type: Date, alias: 'start_date' },
  endDate: { type: Date, alias: 'end_date' },
  targetAudiance: { type: targetAudianceSchema, alias: 'target_audiance' },
  creatives: creativesSchema,
  insights: insightsSchema
});

export const Platform = mongoose.model('Platform', platformSchema);
export { platformSchema };
