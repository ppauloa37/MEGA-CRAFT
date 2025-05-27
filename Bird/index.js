const { Client, GatewayIntentBits } = require('discord.js');

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,   // <-- Este é necessário!
        GatewayIntentBits.MessageContent   // <-- Este permite ler o conteúdo das mensagens
    ]
});

client.once('ready', () => {
    console.log('botonliine');
});

client.on('messageCreate', (message) => {
    if (message.author.bot) return; // Evita que o bot responda a si mesmo

    if (message.content === '!hello') {
        message.reply('Olá, mundo!');
    }
});

client.login(process.env.BOT_TOKEN);
