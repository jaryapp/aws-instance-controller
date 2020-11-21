// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { startInstance } from "../../../utils/aws";

export default (req, res) => {
  res.statusCode = 200;
  startInstance(req.query.instanceId).then((result) => {
    res.json(result);
  });
};
