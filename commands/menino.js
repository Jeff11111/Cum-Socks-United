var HornyCounter = require("../counter.js");

module.exports = {
  name: "hornystrike",
  description: "I hate it here.",
  execute(message, args, Discord) {
    HornyCounter.add(1);
    const newEmbed = new Discord.MessageEmbed()
      .setColor("#B12E50")
      .setTitle("Caught you!")
      .setThumbnail('https://media.discordapp.net/attachments/839740718690861096/855295748434690078/unknown.png?width=254&height=214')
      .setDescription(
        `Horniness Counter exceeded! the counter is currently ${HornyCounter["count"]}`
      )
      .setFooter("Oh God!", 'https://cdn.discordapp.com/emojis/681543213990805561.png?v=1');
    message.channel.send(newEmbed);
  },
};
