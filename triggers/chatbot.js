const fetch = require("node-fetch");

const { api_endpoint } = process.env;

module.exports = {
	keywords: ["ainft"],
	prefixes: ["yeoreum"],
	suffixes: ["?"],

	/**
	 * @description Executes when it is triggered by trigger handler.
	 * @param {Object} message The Message Object of the trigger.
	 * @param {String[]} args The Message Content of the received message seperated by spaces (' ') in an array
	 */

	async execute(message, args) {
		console.log('Request: ', message.toString());

		const responseBody = await fetch(api_endpoint + '?message=' + encodeURIComponent(message.toString()));
		const responseText = await responseBody.text();

		console.log('Response: ', responseText);
		message.reply({
			content: responseText,
		});
	},
};
