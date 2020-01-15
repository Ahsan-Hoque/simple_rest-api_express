let faker = require('faker');

let appRoutes = function (app) {
		app.get('/', function (req, res) {
			res.status(200).send("Welcome to our rest api!")
		});

		app.get('/user', function (req, res) {
			let data = ({
				first_name: faker.name.firstName(),
				last_name: faker.name.lastName(),
				username: faker.internet.userName(),
				email: faker.internet.email()
			});
			res.status(200).send(data);
		});

		app.get('/users/:num', function (req, res) {
			let data = [];
			let num = req.params.num;

			if (isFinite(num) && num > 0){
				for (i = 0; i< num; i++){
					data.push({
						first_name: faker.name.firstName(),
						last_name: faker.name.lastName(),
						username: faker.internet.userName(),
						email: faker.internet.email()
					});
				}
				res.status(200).send(data);
			}else{
				res.status(400).send({message: "inValid number supplied"});
			}
		});
};

module.exports = appRoutes;
