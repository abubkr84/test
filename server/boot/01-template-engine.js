'use strict';

var exphbs = require('express-handlebars');
var handlebars = require('handlebars');
var handlebars_helpers = require('handlebars-helpers')({
  handlebars: handlebars
});

module.exports = function (app, cb) {
  /*
   * The `app` object provides access to a variety of LoopBack resources such as
   * models (e.g. `app.models.YourModelName`) or data sources (e.g.
   * `app.datasources.YourDataSource`). See
   * http://docs.strongloop.com/display/public/LB/Working+with+LoopBack+objects
   * for more info.
   */

  var expressHandlebars = exphbs({
    handlebars: handlebars,
    extname: '.html',
    defaultLayout: 'layout',
    layoutsDir: 'server/views/layouts',
    partialsDir: 'server/views/partials'
  });

  app.engine('html', expressHandlebars);
  app.set('view engine', 'html');
  app.set('views', 'server/views');
  process.nextTick(cb); // Remove if you pass `cb` to an async function yourself
};
