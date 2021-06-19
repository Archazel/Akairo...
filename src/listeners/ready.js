const { Listener } = require('discord-akairo');
const { red } = require('chalk');

class ReadyListener extends Listener {
	constructor() {
		super('ready', {
			emitter: 'client',
			event: 'ready',
		});
	}

	exec() {
		console.log(red(`${this.client.user.username} is ready !`));
	}
}

module.exports = ReadyListener;