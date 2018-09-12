import request from 'supertest';
import { apiRoot } from '../../config';
import express from '../../services/express';
import routes from './';
import { Campaign } from '../../models/campaign';
import {compareFullCampaign, testCampaign} from '../../../test/utils';

const app = () => express(apiRoot, routes, 'static/folder');

let campaigns;

beforeEach(async () => {
  campaigns = await Campaign.create({id: 1}, testCampaign);
});

test('GET /campaigns 200', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}`);
  expect(status).toBe(200);
  expect(Array.isArray(body)).toBe(true);
  expect(body.length).toBe(2);
  // test empty campaign
  const campaign1 = body.find(item => item._id === 1);
  expect(campaign1).toBeDefined();
  expect(campaign1._id).toEqual(1);
  // test full campaign
  const campaign2 = body.find(item => item._id === testCampaign.id);
  expect(campaign2).toBeDefined();
  compareFullCampaign(campaign2);
});

test('GET /campaigns/:id 200', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}/${campaigns[1].id}`);
  expect(status).toBe(200);
  // expect the body to equal the full test campaign
  compareFullCampaign(body);
});

test('GET /campaigns/:id 404', async () => {
  const { status } = await request(app())
    .get(apiRoot + '/123456789098765432123456');
  expect(status).toBe(404);
});
