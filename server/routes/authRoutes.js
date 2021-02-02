const passport = require('passport');

module.exports = app => {
    app.get('/auth/google', 
    passport.authenticate('google', {
        accessType: 'offline',
        prompt: 'consent',
        scope: ['profile', 'email']
    })
    );

    app.get('/failed', (req, res) => res.send('failed google redirect'))
    app.get('/success', (req, res) => res.send('success redirect'))

    app.get('/auth/google/callback', passport.authenticate('google', {failureRedirect: '/failed'}),
    (req, res) => {
        res.redirect('/success');
    });

    app.get('/logout', (req, res) => {
        //Automatically added to req by passport
        req.logout();
        res.redirect('/');
    });
}
