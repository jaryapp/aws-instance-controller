import { CostExplorer } from 'aws-sdk';
import { setConfig } from '../../../utils/aws';

export default function handler(req, res) {
  if (req.method === 'POST') {
    setConfig(req.body.config);
    res.statusCode = 200;
    res.json({});
  }
}
