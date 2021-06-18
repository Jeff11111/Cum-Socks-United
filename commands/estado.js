var HornyCounter = require("../counter.js");

module.exports = {
  name: "hornystatus",
  description: "I hate it here.",
  execute(message, args, Discord) {
    const newEmbed = new Discord.MessageEmbed()
      .setColor("#00FF46")
      .setTitle("Horniness Meter")
      .setThumbnail('')
      .setDescription(
        `Horniness Counter stalemate, the counter is currently ${HornyCounter["count"]}`
      )
      .setFooter("Oh Good.", 'https://cdn.discordapp.com/emojis/777175663941255168.png?v=1');
    message.channel.send(newEmbed);
  },
};

//⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄
//⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄.
//⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄
//⠄⠄⠛⢻⣿⣯⣿⣿⣿⣶⣶⣶⣶⣤⣤⣤⣀⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄
//⠄⠄⠄⢨⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄
//⠄⠄⠄⠄⠄⠄⠄⠈⠻⣿⡛⠉⠭⠉⠉⢉⣿⣿⣧⠄⠄⠄⠄⠄⠄⠄⠄⠄
//⠄⠄⠈⠙⠲⣶⠖⠄⠄⢿⣿⠄⠶⣶⣾⣿⣿⣿⣿⣧⠄⠄⠄⠄⠄⠄⠄⠄
//⠄⠄⠄⠄⠄⠈⠄⠄⠄⠺⢿⡗⠄⣹⣿⣿⠿⣟⣿⡏⠄⠄⠄⠄⠄⠄⠄⠄
//⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠤⠤⢾⣿⣿⣿⣦⠘⡿⠄⠄⠄⠄⠄⠄⠄⠄⠄
//⠄⠄⠄⠄⠄⠄⠄⠈⢻⡿⣷⣶⣶⣤⣤⣤⣶⣦⠁⠄⠄⠄⠄⠄⠄⠄⠄⠄
//⠄⠄⠄⠄⠄⠄⠄⠄⣽⣿⣿⣿⣿⣿⣿⣿⣿⡟⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄
//⠄⠄⠄⠄⠄⠄⠄⠄⠘⠿⣿⣿⣿⣿⣿⣿⣿⠃⠄⠄⠄⠄⠄⠄⠄⠄⠄.
//⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠉⠉⠛⠋⠉⠁⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄
