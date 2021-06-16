const Discord = require('discord.js');

const client = new Discord.Client();

const prefix = 'h!';

const fs = require('fs');
client.msgs = require ("./HornyCounter.json");
client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
    const command = require(`./commands/${file}`)

    client.commands.set(command.name, command);
}


client.once('ready', () => {
    console.log('Horny Boy Counter is online, God Save Us.');
});

client.on('message', message =>{
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if(command === 'menino'){
        client.commands.get('menino').execute(message, args, Discord);
     } else if (command === 'estado'){
        client.commands.get('estado').execute(message, args, Discord);

    }
    
});

client.login('ODU0MjI4MjYxNzE3Mjc4NzYw.YMg4EA.EU1Q4S1NuPly57KQpHGfSPV4ZlE');

