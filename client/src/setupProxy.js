const proxy = require('http-proxy-middleware')
 
module.exports = function(app) {
  app.use(proxy('/api/*', { target: 'https://react-accounting-app.herokuapp.com/' }))
  app.use(proxy('/auth/*', { target: 'https://react-accounting-app.herokuapp.com/' }))
  app.use(proxy('/report/*', { target: 'https://react-accounting-app.herokuapp.com/' }))
}