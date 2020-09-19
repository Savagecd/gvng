module.exports = async (user, message, args) => { 
  const Discord = require('discord.js');
const client = require("nekos.life");
    const neko = new client();
    const userm = message.mentions.users.first();
    if (!userm) return message.reply("Mencione que quieres abrazar");

    let imagen = await neko.sfw
      .hug()
      .then(hug => {
        const embed = new Discord.RichEmbed()
          .setDescription(
            "**" +
              message.author.username +
              "** abrazo a **" +
              userm.username +
              "**")
          .setImage(hug.url)
          .setColor("RANDOM");
      
message.channel.send({embed});
      })
      .catch(err => console.error(err));
  }