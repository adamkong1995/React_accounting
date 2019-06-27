const passport = require('passport');

module.exports = app => {
    app.get('/auth/ldap', (req, res) => {
        res.send(`<!DOCTYPE html>
        <html>
            <head>
            </head>
            <body>
                <form method='post' action='/auth/ldap'>
                    <input type='text' name='username' id='username'/>
                    <input type='password' name='password' id='password'/>
                    <button type='submit'>Submit</button>
                </form>
            </body>
        </html>`)
    })

    app.post('/auth/ldap', passport.authenticate('ldapauth', {session:true}), (req, res) => {
        res.json({user: req.user});
    });


    app.get('/api/logout', 
            (req, res, next) => {
                req.logout()
                next();
            }, 
            (req, res) => res.redirect('/'));

    app.get('/api/current_user', (req, res) => {
        res.json({user: req.user});
    });
};