import mongoose, { Schema } from 'mongoose';

var insightsSchema = new Schema({
  impressions: Number,
  clicks: Number,
  websiteVisits: { type: Number, alias: 'website_visits' },
  nanosScore: { type: Number, alias: 'nanos_score' },
  costPerClick: { type: Number, alias: 'cost_per_click' },
  clickThroughRate: { type: Number, alias: 'click_through_rate' },
  advancedKpi_1: { type: Number, alias: 'advanced_kpi_1' },
  advancedKpi_2: { type: Number, alias: 'advanced_kpi_2' }
});

export const Insights = mongoose.model('Insights', insightsSchema);
export { insightsSchema };
