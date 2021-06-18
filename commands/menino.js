var HornyCounter = require("../counter.js");

module.exports = {
  name: "menino",
  description: "I hate it here.",
  execute(message, args, Discord) {
    const newEmbed = new Discord.MessageEmbed()
      .setColor("#B12E50")
      .setTitle("Caught you!")
      .setDescription(
        `Horniness Counter increased, the counter is currently ${HornyCounter}`
      )
      .setFooter("Oh God!");
    message.channel.send(newEmbed);
    HornyCounter.add(1);
  },
};
