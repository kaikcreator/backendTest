import fs from 'fs';
import { Campaign } from '../../models/campaign';
import mongoose from '../mongoose';

export const importCollectionsFromJSON = (filePath) => {
  let rawData = fs.readFileSync(filePath);
  let jsonData = JSON.parse(rawData);

  return Campaign.insertMany(jsonData, function (err) {
    if (err) return console.error('Error importing from json: ', err);
  });
};

export const clearCollections = () => {
  let promise = mongoose.connection.dropCollection('campaigns', function (err) {
    if (err) return console.error('Error; ', err);
  });

  return promise;
};
