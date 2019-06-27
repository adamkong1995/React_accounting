## React Accounting System

##### This app demonstrate how to use React, Redux, Redux Form and Express.

### To run this app, please follow the steps as below
1. Clone this repository
2. Set the database url in  `/keys.js` 
```
    DATABASE_URL: process.env.DATABASE_URL || 'Add your database url here',
    
    The database url specs: http://docs.sequelizejs.com/manual/dialects.html

    If you are not using PostgreSQL, you need to install the driver for your database.
        # One of the following:
        $ npm install --save pg pg-hstore # Postgres
        $ npm install --save mysql2
        $ npm install --save mariadb
        $ npm install --save sqlite3
        $ npm install --save tedious # Microsoft SQL Server
```
3. Go to '/client/src/setupProxy.js' change 'https://react-accounting-app.herokuapp.com/' to 'http://localhost:5000/'
4. run `npm install` in directories `/` and `/client`
5. Go back to `/` and execute `npm run dev`