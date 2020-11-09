var AWS = require('aws-sdk');
AWS.config.loadFromPath('./config.json');

var ec2 = new AWS.EC2({ region: 'us-east-1' });

ec2.describeInstances( function(err, data) {
    console.log("\nIn describe instances:\n");
    if (err) console.log(err, err.stack); // an error occurred
    else     console.log( JSON.stringify(data)); // successful response
    ec2.startInstances({InstanceIds:["i-0542cd4f7f4c527b0"]}, function(err, data) {
        if (err) console.log(err, err.stack); // an error occurred
        else     console.log(data);           // successful response
      });

  });
