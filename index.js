const express = require('express');
const bodyParser = require('body-parser');
const cookieSession = require('cookie-session');
const passport = require('passport');

const sequelize = require('./services/sequelize');
const keys = require('./keys');

require('./models/Account')(sequelize);
require('./models/Record')(sequelize);
require('./models/User')(sequelize);

require('./services/passport');

const app = express();

// Cookie will store user session for 30 days
app.use(
    cookieSession({
        maxAge: 30 * 24 * 60 * 60 * 1000,
        keys: [keys.COOKIE_KEY]
    })
);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(passport.initialize());
app.use(passport.session());

require('./routes/authRoutes')(app);
require('./routes/accountRoutes')(app, sequelize);
require('./routes/recordRoutes')(app, sequelize);
require('./routes/reportRoutes')(app, sequelize);

if (keys.ENV === 'production') {
    app.use(express.static('client/build'))

    const path = require('path');
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
};

app.listen(keys.PORT);