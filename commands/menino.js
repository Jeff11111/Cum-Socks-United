var HornyCounter = require("../counter.js");

module.exports = {
  name: "hornystrike",
  description: "I hate it here.",
  execute(message, args, Discord) {
    HornyCounter.add(1);
    const newEmbed = new Discord.MessageEmbed()
      .setColor("#B12E50")
      .setTitle("Horny: SPOTTED!")
      .setThumbnail('https://cdn.discordapp.com/emojis/845359661300318218.png?v=1')
      .setDescription(
        `Horniness Counter exceeded! the counter is currently ${HornyCounter["count"]}`
      )
      .setFooter("THE SUFFERING OF IT ALL!", 'https://cdn.discordapp.com/emojis/848353013491957812.png?v=1');
    message.channel.send(newEmbed);
  },
};
