const passport = require('passport');
const LdapStrategy = require('passport-ldapauth').Strategy;
const sequelize = require('./sequelize');
const Users = sequelize.models.users;

passport.serializeUser((user, done) => {
    done(null, user);
});

passport.deserializeUser((user, done) => {
    Users.findOne({where: {dn: user.dn}})
        .then(user => {
            done(null, user);
        });
});

passport.use(new LdapStrategy({
        server: {
            url: '',
            bindDN: '',
            bindCredentials: '',
            searchBase: '',
            searchFilter: ''
        }
    }, 
    async (user, done) => {
        let existingUser = await Users.findOne({where: {dn: user.dn}});

        if (existingUser) {
            existingUser = updateUserInfo(existingUser, user);
            existingUser.save();

            return done(null, existingUser);
        };
        
        let newUser = await new Users({name: user.name });
        newUser = updateUserInfo(newUser, user);
        newUser.save();
        done(null, newUser);
    })
);

// Update user info to database everytime they login
const updateUserInfo = (user, data) => {
    user.display_name = data.displayName;
    user.dn = data.dn;
    user.email = data.mail;

    switch (typeof(data.memberOf)) {
        case 'object':
            user.member_of = data.memberOf.join('|');
            break;
        case 'string':
            user.member_of = data.memberOf;
            break;
    };
    return user;
};