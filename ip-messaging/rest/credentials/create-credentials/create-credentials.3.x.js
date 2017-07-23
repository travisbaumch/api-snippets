const accountSid = 'ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';
const authToken = 'your_auth_token';
const Twilio = require('twilio').Twilio;

const client = new Twilio(accountSid, authToken);

client.chat.credentials
  .create({
    type: 'gcm',
    apiKey: '1234',
    friendlyName: 'My credential',
  })
  .then(response => {
    console.log(response);
  })
  .catch(error => {
    console.log(error);
  });
