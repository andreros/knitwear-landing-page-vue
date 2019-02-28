/**
 * file: api.js
 * description: API main file.
 * author: André Rosa
 */

// includes
var express = require('express'), // web framework for creating the API
    cors = require('cors'), // enable CORS requests
    app = express(), // define our express app
    bodyParser = require('body-parser'), // body parsing middleware
    router = express.Router(), // get an instance of the express router
    nodemailer = require('nodemailer'); // send emails

/**************************************************************************************************************************************/
/* Base setup
/**************************************************************************************************************************************/
// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

// configure app to use cors()
// this will let us respond requests from all origins
app.use(cors());

var port = process.env.PORT || 5000; // set our port

// create reusable transporter object using the default SMTP transport
// for this configuration to work you need to activate "Unsafe App Access" in Google Account Panel
var transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false, // true for 465, false for other ports
    requireTLS: true,
    // service: 'gmail',
    auth: {
        user: 'development.pit@gmail.com', // generated ethereal user
        pass: 'YOUR_PASSWORD_HERE' // generated ethereal password
    }
});

/**************************************************************************************************************************************/
/* API routes
/**************************************************************************************************************************************/

// POST Routes
router.route('/message').post(function (req, res) {
    var payload;
    payload = {
        name: req.body.name,
        email: req.body.email,
        message: req.body.message
    }

    // setup e-mail data with unicode symbols
    var mailOptions = {
        from: '"Knitwear Landing Page" <' + req.body.email + '>', // sender address
        to: 'andreros@gmail.com', // list of receivers
        subject: 'Message From ' + req.body.name, // Subject line
        text: req.body.message, // plaintext body
        html: '<b>' + req.body.message + '</b>' // html body
    };

    // send mail with defined transport object
    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log('POST /message: ', error);
			res.json(error);
        }
        console.log('POST /message: ', payload);
        res.json(payload);
    });
});

// test route to make sure everything is working (accessed at GET http://localhost:5000/api/v1)
router.route('/').get(function (req, res) {
    res.json({
        message: 'API v1 up and running!'
    });
});


/**************************************************************************************************************************************/
/* Register API routes
/**************************************************************************************************************************************/

// all of our routes will be prefixed with /api/v1
app.use('/api/v1', router);

/**************************************************************************************************************************************/
/* Start the API (server)
/**************************************************************************************************************************************/

app.listen(port);
console.log('Magic happens on port ' + port);
