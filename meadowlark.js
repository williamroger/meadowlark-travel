const express = require('express');
const expressHandlebars = require('express-handlebars');

const handlers = require('./lib/handlers');

const app = express();
const port = process.env.PORT || 3000;

// configura o view engine Handlebars
app.engine('handlebars', expressHandlebars({
  defaultLayout: 'main',
}));

app.set('view engine', 'handlebars');

app.use(express.static(__dirname + '/public'));

app.get("/", handlers.home);

app.get("/about", handlers.about);

// página 404 personalizada
app.use(handlers.notFound);

// página 505 personalizada
app.use(handlers.serverError);

app.listen(port, () => {
  console.log(`Express started on http://localhost:${port}; ` + 'press Crtl-c to terminate...');
});
