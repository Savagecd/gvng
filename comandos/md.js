module.exports = async (client, message, args) => { 
  const Discord = require('discord.js');
  let perms = message.member.hasPermission('KICK_MEMBERS');
let user = message.mentions.members.first();
let mensaje = args.join(' ')
if (!perms) return message.channel.send('❌ No tienes permisos ❌')
if(!user) return message.channel.send('❌ No has mencionado a nadie ❌') 
if(!mensaje) return message.channel.send('❌ No has escrito el mensaje a enviar ❌') 
  
  user.send(mensaje)
message.channel.send('✅ Mensaje enviado correctamente ✅').then(m => m.delete(10000)
)}                                          