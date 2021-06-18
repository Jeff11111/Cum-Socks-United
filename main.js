const fs = require("fs");
const Discord = require("discord.js");

const { prefix, token } = require("./config.json");

var HornyCounter = require('./counter.js');

const client = new Discord.Client();

// Reading .js files from the "commands" folder, to dynamically execute them later.
client.commands = new Discord.Collection();

const commandFiles = fs
  .readdirSync("./commands")
  .filter((file) => file.endsWith(".js"));

for (const file of commandFiles) {
  const command = require(`./commands/${file}`);
  if (command.name) client.commands.set(command.name, command);
}

client.once("ready", () => {
  console.log("Horny Boy Counter is online, God Save Us.");
});

// Let's login, when ready
client.login(token);

client.on("message", (message) => {
  if (!message.content.startsWith(prefix) || message.author.bot) return;

  const args = message.content.slice(prefix.length).trim().split(/ +/);
  const commandName = args.shift().toLowerCase();
  const command = client.commands.get(commandName)

  if (!command)
    return;

  //If there's nothing after the prefix, do nothing.
  if (message.content.slice(prefix.length).trim().length === 0) {
    return;
  }

  //Try to execute the command.
  try {
    command.execute(message, args, Discord);
  } catch (error) {
    console.error(error);
  }
});


process.stdin.resume();//so the program will not close instantly

function exitHandler(exitCode) {
    console.log('Closing...');
    
    let savehornydata = JSON.stringify(HornyCounter);
    fs.writeFileSync('./HornyCounter.json', savehornydata);

    if (exitCode || exitCode === 0) console.log(exitCode);
    process.exit();
}

//do something when app is closing
process.on('exit', exitHandler.bind(null));

//catches ctrl+c event
process.on('SIGINT', exitHandler.bind(null));

// catches "kill pid" (for example: nodemon restart)
process.on('SIGUSR1', exitHandler.bind(null));
process.on('SIGUSR2', exitHandler.bind(null));

//catches uncaught exceptions
process.on('uncaughtException', exitHandler.bind(null));