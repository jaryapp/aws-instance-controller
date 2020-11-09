var AWS = require("aws-sdk");
AWS.config.loadFromPath("./config.json");

var ec2 = new AWS.EC2({ region: "us-east-1" });

// 1. list instance
function getListInstance() {
  return new Promise((resolve, reject) => {
    ec2.describeInstances(function (err, data) {
      if (err) {
        console.log(err, err.stack);
        reject(err);
      } else resolve(data);
    });
  });
}

// 1. list instance
// https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/EC2.html#describeInstances-property
function getListInstance() {
  return new Promise((resolve, reject) => {
    ec2.describeInstances(function (err, data) {
      if (err) {
        console.log(err, err.stack);
        reject(err);
      } else resolve(data);
    });
  });
}

// 2. available zones
// https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/EC2.html#describeAvailabilityZones-property
function getAvailableZones() {
  return new Promise((resolve, reject) => {
    ec2.describeAvailabilityZones(function (err, data) {
      if (err) {
        console.log(err, err.stack);
        reject(err);
      } else resolve(data);
    });
  });
}

// 3. start instance
// https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/EC2.html#startInstances-property
function startInstance(instanceId) {
  return new Promise((resolve, reject) => {
    ec2.startInstances({ InstanceIds: [instanceId] }, function (err, data) {
      if (err) {
        console.log(err, err.stack);
        reject(err);
      } else resolve(data);
    });
  });
}

async function main() {
  let result = await startInstance("i-0542cd4f7f4c527b0");
  console.log(result);
}

main();
