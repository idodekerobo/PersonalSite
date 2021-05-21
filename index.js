// =====================================================
// APP REQUIREMENTS
// =====================================================
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
// const nodemailer = require('nodemailer');

// =====================================================
// APP VARIABLES
// =====================================================
const app = express();
const PORT = process.env.PORT || 5000;

// =====================================================
// APP MIDDLEWARE
// =====================================================
// INIT EJS
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// USE BODYPARSER
app.use(bodyParser.urlencoded({ extended: true })); // parse application/x-www-form-urlencoded
app.use(bodyParser.json()); // parse application/json

// SERVING STATIC FILES
app.use('/public',express.static(path.join(__dirname,'/public')));


// =====================================================
// APP ROUTES
// =====================================================
app.get('/', function(req, res) {
    res.render('index');
});

app.get('/about', (req, res) => {
   res.render('about');
});

app.get('/work', (req, res) => {
   res.render('work');
});

app.get('/thoughts', (req, res) => {
   res.render('thoughts');
});

app.get('/contact', (req, res) => {
   res.render('contact');
});

app.get('/afe-mission', (req, res) => {
   res.render('afe-mission');
});

app.get('/afe-privacy-policy', (req, res) => {
   res.render('afe-privacy-policy');
})

app.get('/afe-mission-2', (req, res) => {
   res.render('afe-mission-2');  
})

// OLD CONTACT FORM
// I UNINSTALLED THE NODEMAILER PACKAGE
/*
app.post('/signup', function(req, res) {
    res.send('Thanks for reaching out!');

    const output = "<p>Someone reached out from your website contact form!</p>" + 
    "<li>" + req.body.name + "</li>" + 
    "<li>" + req.body.email + "</li>" + 
    "<li>" + req.body.description + "</li>";

    var transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com', 
        port: 465,
        secure: true,
        auth: {
            type: 'OAuth2',
            user: 'idode.kerobo@gmail.com',
            clientId: '27597703654-mg8ksk4lra76c59i8stlis86ogkf099o.apps.googleusercontent.com',
            clientSecret: 'OPvyto2lehZTOg02-vHb52MW',
            refreshToken: '1//0455wmwRUukqzCgYIARAAGAQSNwF-L9IrsNyETScG2XtwYGc9gcvrphmSSR_mQCO9OzdmJCk4Td4z5-tOeemKNN9KIITESztUQ38',
            accessToken: 'ya29.Il-3B0xM5S56xAGsLYx77dBKAIWXEx6s-kCf02uqgMutGVgybRE6q4EBU9RtANJotx6Ysxi3mcaxB8d21-Dup_F6g2-IGHTrXzMGs_zHgIvJLbswJ9CEqv3zgoROLn0uTA'
        },
        tls: {
            rejectUnauthorized: false
        }
    });

    var mailOptions = {
        from: req.body.email,
        to: 'idode.kerobo@gmail.com',
        subject: req.body.name + ' reached out via Personal Site Contact Form',
        text: 'plain text',
        html: output
    };


    transporter.sendMail(mailOptions, function(err, res) {
        if (err) {
            return console.log(err);
        } else {
            console.log(JSON.stringify(res));
        }
    });
});
*/

// =====================================================
// HAVE APP LISTEN ON SERVER
// =====================================================
app.listen(PORT, function() {
    console.log("App is listening on port: " + PORT + ".")
})