let expres = require('express');
let body_parser = require('body-parser');
let routes = require('./routes/routes');
let app = expres();

app.use(body_parser.json());
app.use(body_parser.urlencoded({extended: true}));

routes(app);

let server = app.listen(8090, function () {
	console.log("App is running on port", server.address().port);
});
