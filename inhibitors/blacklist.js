const { Inhibitor } = require('discord-akairo');

class BlacklistInhibitor extends Inhibitor {
	constructor() {
		super('blacklist', {
			reason: 'blacklist',
			type: 'all',
		});
	}

	exec(message) {
		const blacklist = ['660250798864859167'];
		return blacklist.includes(message.author.id);
	}
}

module.exports = BlacklistInhibitor;