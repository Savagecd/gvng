module.exports = (client, message, args) => { //importamos esto en cmd handler
  const Discord = require('discord.js')
  const servernombres = client.guilds.map(g => g.name).join("\n");
  const servernumero = client.guilds.size //obtenemos el número de servidores
  const usernumero = client.users.size //obtenemos el numero de usuarios total
  const embed = new Discord.RichEmbed() //creamos el embed, lo puedes editar a tu gusto
    .setTitle('Estadísticas')
    .setColor('RANDOM')
    .addField('Usuarios', usernumero)
    .addField('Servidores', servernumero)
  .addField('Nombres de los servidors', servernombres)
  .setFooter('Pedido por '+ message.author.tag)
  .setTimestamp()
  message.channel.send(embed)
}
 //si deseas que también aparezca el nombre de los servidores, hacemos un mapeo
//const servernombres = client.guilds.cache.map(g => g.name).join("\n");
//y lo agregamos en un addField del embed