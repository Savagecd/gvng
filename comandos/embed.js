module.exports = async (client, message, args) => {
const Discord = require('discord.js');
 // Un simple Embed Say para tu bot (v11)

 const texto = args.join(" ").split(" / ");
 const [title, description, footer] = texto;
 if(!title && !description && !footer) return message.channel.send("Ejemplo: embed Titulo / Descripcion / Footer")
  
  
if(title && !description) {
  
  const embed = new Discord.RichEmbed()
  .setTitle(title)
  .setColor("RANDOM")
  
  message.channel.send(embed)
}
  
  if(description && !footer) {
  
  const embed = new Discord.RichEmbed()
  .setTitle(title)
  .setDescription(description)
  .setColor("RANDOM")
  
  message.channel.send(embed)
  }
  
  if(footer) {
  
  const embed = new Discord.RichEmbed()
  .setTitle(title)
  .setDescription(description)
  .setFooter(footer)
  .setColor("RANDOM")
  
  message.channel.send(embed)
    
  }}