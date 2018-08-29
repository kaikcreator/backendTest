import { success, notFound } from '../../services/response/';
import { Campaign } from '../../models/campaign';

export const index = ({ querymen: { query, select, cursor } }, res, next) =>
  Campaign.find(query, select, cursor)
    .then(success(res))
    .catch(next);

export const show = ({ params }, res, next) =>
  Campaign.findById(params.id)
    .then(notFound(res))
    .then((campaigns) => campaigns || null)
    .then(success(res))
    .catch(next);
