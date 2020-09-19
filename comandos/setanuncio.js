module.exports = async (client, message, args, anuncios) => { 
  const Discord = require('discord.js')
  let anuncio = args.slice(0).join(" ")
  var perms = message.member.hasPermission("MANAGE_GUILD"); 
  let autor = `${message.author}` 
  let canal = client.channels.get('697667442389942272')

  if(!perms) return message.channel.send(`${message.author}`+' **No tienes permisos para hacer esto! Permiso faltante:** ``MANAGE_GUILD``'); 
  if(!anuncio) return message.channel.send(`${message.author}`+' **Debes de escribir un anuncio!**') 
  const embed = new Discord.RichEmbed() 
    .setTitle('Anuncios')
    .setDescription(anuncio)
    .addField('Anuncio por:', `${message.author}`)
    .setColor('#00ff11')
  canal.send(embed);
  message.channel.send(`${message.author}`+' **Listo, ya hice el anuncio! ve a verlo a **'+ canal).then(async(msg) => {
    setTimeout(() => {
      msg.delete();
    }, 5000)
  })
}