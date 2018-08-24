let AWS = require('aws-sdk');
const sns = new AWS.SNS();

exports.handler = function (event, context, callback) {

    console.log(event);
    sns.publish({
        Message: event.name,
        Subject: 'Event',
        MessageAttributes: {},
        MessageStructure: 'String',
        TopicArn: 'arn:aws:sns:us-east-1:480964559519:VDemoTopic'
    }).promise()
        .then(data => {
            // your code goes here
        })
        .catch(err => {
            // error handling goes here
        });


    callback(null, 'Successfully executed');
}