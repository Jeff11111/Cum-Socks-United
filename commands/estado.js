module.exports = {
    name: 'estado',
    description: "I hate it here.",
    execute(message, args, Discord) {
        const newEmbed = new Discord.MessageEmbed()
        .setColor('#B12E50')
        .setTitle('Horniness Meter')
        .setDescription(`Horniness Counter stalemate, the counter is currently ${HornyCounter}`)
        .setFooter('Oh Good.')

        message.channel.send(newEmbed);
    }

}