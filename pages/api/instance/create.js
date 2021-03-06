// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { createInstance } from '../../../utils/aws';

export default (req, res) => {
  res.statusCode = 200;
  createInstance(
    req.query.imageId,
    req.query.securityGroupId,
    req.query.tag,
  ).then((result) => {
    res.json(result);
  });
};
