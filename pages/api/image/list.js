import { getListImages } from "../../../utils/aws";

export default (req, res) => {
  res.statusCode = 200;
  getListImages().then((result) => {
    res.json(result);
  });
};
