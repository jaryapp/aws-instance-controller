// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { getListInstance } from "../../utils/aws";

export default (req, res) => {
  res.statusCode = 200;
  getListInstance().then((result) => {
    res.json(result);
  });
};
