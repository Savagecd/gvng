module.exports = async (client, message, args) => {
  const Discord = require('discord.js');


let permiso = message.member.hasPermission("BAN_MEMBERS");
if(!permiso) return message.channel.send("Este comando requiere el permiso 'Banear Miembro'.")

let user = args[0]
if(!user) return message.reply(" Ingrese una ID del usuario baneado.")

if(user === message.author.id) return message.reply(" Obviamente tu ID no está baneada.")

if (message.guild.members.get(user)) return message.channel.send("Esta ID no esta beneada aqui.")

message.guild.unban(user, 2);
message.channel.send(`Se ha removido la sanción al usuario: **<@${user}>**`)

}

exports.help = {
  name: 'unban'
}
