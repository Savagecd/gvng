module.exports = async (user, message, args) => { 
  const Discord = require('discord.js');
const client = require("nekos.life");
    const neko = new client();
    const userm = message.mentions.users.first();
    if (!userm) return message.reply("Mencione que quieres hacer cosquillas");

    let imagen = await neko.sfw
      .tickle()
      .then(tickle => {
        const embed = new Discord.RichEmbed()
          .setDescription(
            "**" +
              message.author.username +
              "** le hizo cosquillas a **" +
              userm.username +
              "**")
          .setImage(tickle.url)
          .setColor("RANDOM");
      
message.channel.send({embed});
      })
      .catch(err => console.error(err));
  }