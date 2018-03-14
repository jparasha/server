const express = require('express');
const moongoose = require('mongoose');
const app = express();
const keys = require('./config/keys');
require('./services/passport');
require('./routes/authRoutes')(app);

moongoose.connect(keys.mongoURI);








app.get('/test', (req, res) => {
    console.log('test');
    res.send({
        'What': 'Yay!'
    });
});


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log("Server running on: " + PORT);
});
