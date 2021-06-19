const { AkairoClient, CommandHandler, InhibitorHandler, ListenerHandler } = require('discord-akairo');
const { Intents } = require('discord.js');
require('dotenv').config();

class ThelClient extends AkairoClient {
	constructor() {
		super({
			ownerID: '484991641090916362',
		}, {
			disableMentions: 'everyone',
			fetchAllMembers: true,
			ws: {
				intents: [Intents.ALL],
			},
			partials: ['MESSAGE', 'CHANNEL', 'REACTION', 'USER', 'GUILD_MEMBER'],
			presence: {
				activity: {
					name: '🎃+help🎃',
					type: 'STREAMING',
					url: 'https://www.twitch.tv/azzazzel00',
					application: {
						id: '723245860426875001',
					},
				},
				status: 'idle',
				afk: false,
			},
		});

		this.commandHandler = new CommandHandler(this, {
			directory: './src/commands',
			allowMention: true,
			automateCategories: true,
			blockBots: true,
			prefix: '+',
			commandUtil: true,
			handleEdits: true,

		});
		this.inhibitorHandler = new InhibitorHandler(this, {
			directory: './inhibitors',
			automateCategories: true,
		});
		this.listenersHandler = new ListenerHandler(this, {
			directory: './src/listeners',
			automateCategories: true,
		});

		// Some shit

	}
	async login(token) {
		this.commandHandler.loadAll();
		this.commandHandler.useInhibitorHandler(this.inhibitorHandler);
		this.inhibitorHandler.loadAll();
		this.listenersHandler.loadAll();
		return super.login(token);
	}
}

module.exports = ThelClient;