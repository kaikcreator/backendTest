import http from 'http';
import { env, mongo, port, ip, apiRoot, dbInitialContent } from './config';
import mongoose from './services/mongoose';
import express from './services/express';
import api from './api';
import { importCollectionsFromJSON, clearCollections } from './services/db-utilities';
import path from 'path';

const app = express(apiRoot, api);
const server = http.createServer(app);

mongoose.connect(mongo.uri)
  .then(() => {
    return clearCollections();
  })
  .then(() => {
    importCollectionsFromJSON(path.resolve(__dirname, dbInitialContent));
  });

setImmediate(() => {
  server.listen(port, ip, () => {
    console.log('Express server listening on http://%s:%d, in %s mode', ip, port, env);
  });
});

export default app;
