// Require the necessary discord.js classes
const { Client, Intents } = require('discord.js');
const { token } = require('./config.json');

// Create a new client instance
const client = new Client({
  intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES]
});

// When the client is ready, run this code (only once)
client.once('ready', () => {
  console.log('Ready');
});

client.on('messageCreate', (message) => {
    const regex = 'addr1[A-z0-9]{10}';
    if (message.content.match(regex)) {
      message.delete();
    }
})

// Login to Discord with your client's token
client.login(token);
