const express = require('express');
const moongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');
const keys = require('./config/keys');
require('./models/User');
require('./services/passport');
const app = express();
app.use(
    cookieSession({
        maxAge: 15 * 24 * 60 * 60 * 1000,
        keys: [keys.cookieKey]
    })
);
app.use(passport.initialize());
app.use(passport.session());
require('./routes/authRoutes')(app);

if (process.env.NODE_ENV === "production"){
    require('./client/build');

    const path = require ('path');
    app.get('*', (req, res) =>{
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html' ));
    } );
}
moongoose.connect(keys.mongoURI);
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log("Server running on: " + PORT);
});