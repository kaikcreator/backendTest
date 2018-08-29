import mongoose, { Schema } from 'mongoose';

var targetAudianceSchema = new Schema({
  languages: [String],
  genders: [String],
  age: {
    min: Number,
    max: Number
  },
  locations: [String],
  interests: [String],
  keywords: { type: [String], alias: 'KeyWords' }
}, {
  toJSON: {virtuals: false}
});

targetAudianceSchema.virtual('age_range')
  .get(function () { return [this.age.min, this.age.max]; })
  .set(function (value) {
    this.age.min = value[0];
    this.age.max = value[1];
  });

export const TargetAudiance = mongoose.model('TargetAudiance', targetAudianceSchema);
export { targetAudianceSchema };
