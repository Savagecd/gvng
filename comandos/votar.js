  module.exports = async (client, message, args) => { 
   const Discord = require("discord.js");
  message.delete(10);
  let user = message.author;
  let reporte = args.join(' ');
  if(!reporte) return message.channel.send(`:grey_exclamation: | **Envia tu votacion**`)

  const embed = new Discord.RichEmbed()
  .setTitle(':e_mail: | **Votacion Activada**')
  .setDescription('`Votacion Activa (Elimine una ves terminada).`')
  .setDescription(reporte)
  .setColor(0x77AEFF)//Puedes usar ese color o puedes poner .setColor("RANDOM")
  .setFooter('Votacion enviada por '+ message.author.tag)
  
  
  message.channel.send(embed).then(m =>  m.react("✅") + m.react("❌"))

  let canal = client.channels.get("699769362239848613");
  const e = new Discord.RichEmbed()
  .setTitle("Sistema de logeos por votacion")
  .setDescription("Nueva votacion")
  .addField("Se ha activado el sistema y dice", reporte, false)
  
  canal.send(e)
}