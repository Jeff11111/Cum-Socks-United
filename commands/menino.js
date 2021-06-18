var HornyCounter = require("../counter.js");

module.exports = {
  name: "hornystrike",
  description: "I hate it here.",
  execute(message, args, Discord) {
    HornyCounter.add(1);
    const newEmbed = new Discord.MessageEmbed()
      .setColor("#B12E50")
      .setTitle("Caught you!")
      .setThumbnail('https://cdn.discordapp.com/attachments/839740718690861096/855294937359843358/unknown.jpg')
      .setDescription(
        `Horniness Counter exceeded! the counter is currently ${HornyCounter["count"]}`
      )
      .setFooter("Oh God!", 'https://cdn.discordapp.com/emojis/681543213990805561.png?v=1');
    message.channel.send(newEmbed);
  },
};
