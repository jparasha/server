const passport = require('passport');
module.exports = (app) => {
    app.get('/auth/google',
        passport.authenticate('google', {
            scope: ['profile', 'email']
        })
    );
    app.get('/auth/google/callback', passport.authenticate('google'), (req, res) => {
        res.redirect('/surveys');
    });
    app.get('/api/logout', (req, res) => {
        req.logout();
        res.redirect('/');
    });
    app.get('/api/current_user', (req, res) => {
        console.log('"/current_user" called at : '+ Date());
        res.send(req.user);
    });
    // test route
    app.get('/test', (req, res) => {
        console.log('test success!');
        res.send({
            'Running': 'true!'
        });
    });
};