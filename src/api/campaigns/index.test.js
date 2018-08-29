import request from 'supertest';
import { apiRoot } from '../../config';
import express from '../../services/express';
import routes from './';
import { Campaign } from '../../models/campaign';

const app = () => express(apiRoot, routes);

let campaigns;

beforeEach(async () => {
  campaigns = await Campaign.create({id: 1});
});

test('GET /campaigns 200', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}`);
  expect(status).toBe(200);
  expect(Array.isArray(body)).toBe(true);
});

test('GET /campaigns/:id 200', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}/${campaigns.id}`);
  expect(status).toBe(200);
  expect(body._id).toEqual(campaigns.id);
});

test('GET /campaigns/:id 404', async () => {
  const { status } = await request(app())
    .get(apiRoot + '/123456789098765432123456');
  expect(status).toBe(404);
});
