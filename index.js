const express = require('express');
const moongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');
const bodyParser = require('body-parser');
const keys = require('./config/keys');
require('./models/User');
require('./services/passport');
const app = express();
app.use(bodyParser.json());
app.use(
    cookieSession({
        maxAge: 15 * 24 * 60 * 60 * 1000,
        keys: [keys.cookieKey]
    })
);
app.use(passport.initialize());
app.use(passport.session());
require('./routes/authRoutes')(app);
require('./routes/billingRoutes')(app);

if (process.env.NODE_ENV === "production"){
    const path = require ('path');
    const fs = require('fs');
    console.log('Getting  client/build---',path.resolve(__dirname));//
    if (fs.existsSync(__dirname, 'client')) { 
        console.log('client exists');
      } 
    if (fs.existsSync(__dirname, 'client', 'build')) { 
        console.log('build exists');
      } 
    if (fs.existsSync(__dirname, 'client', 'build', 'index.html')) { 
        console.log('index exists');
      } 
    require(path.resolve(__dirname, 'client', 'build'));
    console.log('Got Build');

    
    app.get('*', (req, res) =>{
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html' ));
    } );
}
moongoose.connect(keys.mongoURI);
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log("Server running on: " + PORT);
});