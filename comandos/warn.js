module.exports = async(client, message, args) => { 
  const Discord = require('discord.js');
  let permiso = message.member.hasPermission("MANAGE_MESSAGES");
  
  let db = require("megadb")
let wdb = new db.crearDB("wdb") //mega db, le vomit es un npm
const usuario = message.mentions.members.first();
let razon = args.slice(1).join(' ')
if(!permiso) return message.channel.send('**No puedes usar este comando ❌ **')
if(!usuario) return message.channel.send('**Menciona a un usuario ❗️**') 
if(!razon) return message.channel.send('**Especifica una razón ❗️**') 
if(!wdb.tiene(`${message.guild.id}.${usuario.id}`)){ 

wdb.establecer(`${message.guild.id}.${usuario.id}`, 0) 
}
wdb.sumar(`${message.guild.id}.${usuario.id}`, 1) 
const cantidad = await wdb.obtener(`${message.guild.id}.${usuario.id}`) 

const embed = new Discord.RichEmbed()
.setDescription(`**El usuario fue advertido ✅**`)
.setColor('RANDOM')
message.channel.send(embed)
  const embed2 = new Discord.RichEmbed()
  .setThumbnail(message.guild.iconURL)
  .setTitle('Acabas de recibir una advertencia en **' + message.guild.name + "**")
  .addField('Razón',`${razon}`,false)
  .addField('Por', `${message.author}`,false)
  .setColor('RED')
  message.guild.member(usuario).send(embed2)

}