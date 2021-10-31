const routes = require('./routes')

const configure = (app) => {
    app.use('/', routes);
}

module.exports = configure