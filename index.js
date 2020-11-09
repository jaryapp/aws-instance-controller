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
      }
      else resolve(data);
    });
  });
}

async function main() {
  let list = await getListInstance();
  console.log(list);
}

main();
