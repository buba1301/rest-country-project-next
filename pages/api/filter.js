// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { getCountryByRegion } from '../../lib/api';

export default async function handler(req, res) {
  console.log('HANDLER', req);

  const { region } = req.query;

  const data = await getCountryByRegion({ query: region });

  res.status(res.status).send(data);
}
