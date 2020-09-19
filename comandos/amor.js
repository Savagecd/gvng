const Discord = require('discord.js');
module.exports = async(client, message, args) => {
    var embed1 = new Discord.RichEmbed()
      .setAuthor("Amor", client.user.avatarURL)
      .setColor("RANDOM")
      .setDescription(
        `**${message.author}** \n \n · Deberas mencionar a 2 personas para calcular el porcentaje de amor`
      )
      .setFooter(message.author.tag, message.author.avatarURL)
      .setTimestamp(message.createdAt);

    let users = message.mentions.users.map(m => m).join(" y ");
    if (!users) return message.channel.send(embed1);

    const random = Math.floor(Math.random() * 100);
    let heard = "";

    if (random < 50) {
      heard =
        "**┊** Hmm, creo que esto no llegara lejos. ¡Podrían ser amigos!...";
    } else if (random < 89) {
      heard = " **┊** ¡Podrían intertarlo!...";
    } else if (random < 101) {
      heard = " **┊** ¡Podrían ser novios/as!";
    }

    const embed = new Discord.RichEmbed()
      .setColor(0x00ae86)
      .setTimestamp()
      .setAuthor("Amor", client.user.avatarURL)
      .setDescription(
        "Calculando el amor de dos personas \n \n" +
          "**┊** " +
          `${users} \n \n` +
          "Porcentaje de Amor: " +
          random +
          "% \n" +
          `\n ${heard}`
      );

    message.channel.send({ embed });
  }