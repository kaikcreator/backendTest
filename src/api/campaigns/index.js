import { Router } from 'express';
import { middleware as query } from 'querymen';
import { index, show } from './controller';

const router = new Router();

/**
 * @api {get} /campaigns Retrieve campaigns
 * @apiName RetrieveCampaigns
 * @apiGroup Campaigns
 * @apiUse listParams
 * @apiSuccess {Object[]} campaigns List of campaigns.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 */
router.get('/',
  query(),
  index);

/**
 * @api {get} /campaigns/:id Retrieve single campaign
 * @apiName RetrieveCampaign
 * @apiGroup Campaigns
 * @apiSuccess {Object} campaign Campaign data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Campaign not found.
 */
router.get('/:id',
  show);

export default router;
