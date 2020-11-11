var AWS = require("aws-sdk");
const config = require("./config.json");
AWS.config = (config);

var ec2 = new AWS.EC2({ region: "us-east-1" });

// 1. list instance
// https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/EC2.html#describeInstances-property
export function getListInstance() {
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

// 4. available regions
function getAvailableRegions() {
  return new Promise((resolve, reject) => {
    ec2.describeRegions(function (err, data) {
      if (err) {
        console.log(err, err.stack);
        reject(err);
      } else resolve(data);
    });
  });
}

// 5. stop instance
function stopInstance(instanceId) {
  return new Promise((resolve, reject) => {
    ec2.stopInstances({ InstanceIds: [instanceId] }, function (err, data) {
      if (err) {
        console.log(err, err.stack);
        reject(err);
      } else resolve(data);
    });
  });
}

// 6. create instance
function createInstance(ImageId) {
  const option = {
    ImageId,
    InstanceType: "t2.micro",
    MaxCount: 1,
    MinCount: 1,
  };
  return new Promise((resolve, reject) => {
    ec2.runInstances(option, function (err, data) {
      if (err) {
        console.log(err, err.stack);
        reject(err);
      } else resolve(data);
    });
  });
}

// 7. reboot instance
function rebootInstance(instanceId) {
  return new Promise((resolve, reject) => {
    ec2.rebootInstances({ InstanceIds: [instanceId] }, function (err, data) {
      if (err) {
        console.log(err, err.stack);
        reject(err);
      } else resolve(data);
    });
  });
}

// 8. list images
function getListImages() {
  return new Promise((resolve, reject) => {
    ec2.describeImages({ Owners: ["self"] }, function (err, data) {
      if (err) {
        console.log(err, err.stack);
        reject(err);
      } else resolve(data);
    });
  });
}

async function main() {
  let result = await getListImages();
  console.log(result);
}

main();
