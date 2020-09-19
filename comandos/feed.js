module.exports = async (user, message, args) => { 
  const Discord = require('discord.js');
const client = require("nekos.life");
    const neko = new client();
    const userm = message.mentions.users.first();
    if (!userm) return message.reply("Mencione que quieres alimentar");

    let imagen = await neko.sfw
      .feed()
      .then(feed => {
        const embed = new Discord.RichEmbed()
          .setDescription(
            "**" +
              message.author.username +
              "** alimento a **" +
              userm.username +
              "**")
          .setImage(feed.url)
          .setColor("RANDOM");
      
message.channel.send({embed});
      })
      .catch(err => console.error(err));
  }