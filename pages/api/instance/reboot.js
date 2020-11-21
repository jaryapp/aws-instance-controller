// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { rebootInstance } from "../../../utils/aws";

export default (req, res) => {
  res.statusCode = 200;
  rebootInstance(req.query.instanceId).then((result) => {
    res.json(result);
  });
};
