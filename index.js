const { Client, GatewayIntentBits } = require('discord.js');

const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.MessageContent] });

client.once('ready', () => {
    console.log('Bot online!');
});

client.on('messageCreate', (message) => {
    if (message.content === '!hello') {
        message.reply('Olá, mundo!');
    }
});

client.login(process.env.BOT_TOKEN); // vem do GitHub Secrets, não do .env
