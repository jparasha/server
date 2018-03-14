const express = require('express');
const app = express();
require('./services/passport');
require('./routes/authRoutes')(app);


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
