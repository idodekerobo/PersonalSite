// =====================================================
// APP REQUIREMENTS
// =====================================================
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');

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

// SERVING STATIC FILES
app.use('/public',express.static(path.join(__dirname,'/public')));

// =====================================================
// APP ROUTES
// =====================================================
app.get('/', function(req, res) {
    // res.send("hi");
    res.render('index');
});

app.post('/signup', function(req, res) {
    res.send('thanks for reaching out');
});

// =====================================================
// HAVE APP LISTEN ON A SERVER
// =====================================================
app.listen(PORT, function() {
    console.log("App is listening on port: " + PORT + ".")
})