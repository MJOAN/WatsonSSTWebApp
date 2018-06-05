require('dotenv');

const bodyParser = require('body-parser');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');
const secure = require('express-secure-only');
const speechToText = require('./../services/service-manager').get('watson-speech-to-text');
const watson = require('watson-developer-cloud');


module.exports = function(app) {
  
  const authService = new watson.AuthorizationV1(speechToText.getCredentials());

  app.enable('trust proxy');  
  app.use(bodyParser.json());
  
  // Only loaded when running in Bluemix
  if (process.env.VCAP_APPLICATION) {
    app.use(secure());
    app.use(helmet());
  }

  
  // Get token using your credentials
  app.get('/api/token', function(req, res) {
    authService.getToken(function(err, token) {
      if (err) {
        const error = {
          code: err.code || 500,
          error: err.error || err.message,
        };
        return res.status(error.code).json(error);
      } else {
        res.send(token);
      }
    });
  });

}
