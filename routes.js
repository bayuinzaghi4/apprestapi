'use strict';

module.exports = (app) => {
    let jsonku  = require('./controler');
    app.route('')
    .get(jsonku.index);

app.route('/tampil')
    .get(jsonku.tampilsemuadata)
}

