module.exports = function () {
	var faker   = require("faker");
	var _  = require("lodash");
	var data = [
		{id: 1, desc: "foo"},
		{id: 2, desc: "bar"}
	];

	var prio = [1,2,3,5,8,13,21];

	faker.locale = "de";

	return {
		objects: _.times(20, function (n) {
			return {
				id: n,
				prio: _.sample(prio),
				project_name: faker.company.companyName(),
				data: _.sample(data)
			}
		})
	}
}
