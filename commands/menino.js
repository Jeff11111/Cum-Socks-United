var HornyCounter = require("../counter.js");

module.exports = {
  name: "hornystrike",
  description: "I hate it here.",
  execute(message, args, Discord) {
    HornyCounter.add(1);
    const newEmbed = new Discord.MessageEmbed()
      .setColor("#B12E50")
      .setTitle("Caught you!")
      .setDescription(
        `Horniness Counter increased, the counter is currently ${HornyCounter["count"]}`
      )
      .setFooter("Oh God!");
    message.channel.send(newEmbed);
  },
};
