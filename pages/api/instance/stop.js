// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { stopInstance } from "../../../utils/aws";

export default (req, res) => {
  res.statusCode = 200;
  stopInstance(req.query.instanceId).then((result) => {
    res.json(result);
  });
};
