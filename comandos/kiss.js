module.exports = async (user, message, args) => { 
  const Discord = require('discord.js');
const client = require("nekos.life");
    const neko = new client();
    const userm = message.mentions.users.first();
    if (!userm) return message.reply("Mencione que quieres besar");

    let imagen = await neko.sfw
      .kiss()
      .then(kiss => {
        const embed = new Discord.RichEmbed()
          .setDescription(
            "**" +
              message.author.username +
              "** beso a **" +
              userm.username +
              "**")
          .setImage(kiss.url)
          .setColor("RANDOM");
      
message.channel.send({embed});
      })
      .catch(err => console.error(err));
  }