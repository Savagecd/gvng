module.exports = async (client, message, args) => { 
  const Discord = require('discord.js');
const marsnpm = require("marsnpm"); //instalamos marsnpm obiamente

let author = message.author.username;
    let user = message.mentions.users.first();
    let url = await marsnpm.bored(); //aqui se pone el tipo de reaccion que sera
    const embed = new Discord.RichEmbed()
      .setTitle(`${author} esta cansado`)
    .setColor("RANDOM")
    .setFooter("Que mal :(")
    .setTimestamp()
      .setImage(url);
       
    message.channel.send(embed);
  }
