// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { getListSecurityGroups } from '../../../utils/aws';

export default (req, res) => {
  getListSecurityGroups()
    .then((result) => {
      res.statusCode = 200;
      res.json(result);
    })
    .catch((err) => {
      res.statusCode = 400;
      res.json(err);
    });
};
