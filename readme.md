## React Accounting System

##### This app demonstrate how to use React, Redux, Redux Form and Express.

### To run this app, please follow the steps as below
1. Clone this repository
2. Create `keys.js` in directory `\` with the parameters as below.
```
module.exports = {
    ENV: 'development',
    PORT: 5000,
    DATABASE_URL: 'Your database url. 
    
    If you are not using PostgreSQL, you need to install the driver for your database.

        # One of the following:
        $ npm install --save pg pg-hstore # Postgres
        $ npm install --save mysql2
        $ npm install --save mariadb
        $ npm install --save sqlite3
        $ npm install --save tedious # Microsoft SQL Server
    ',
    COOKIE_KEY: 'secert'
}
```
3. run `npm install` in directories `\` and `\client`
4. Go back to `\` and execute `npm run dev`