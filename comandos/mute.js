module.exports = async (client, message, args) => { 
  const Discord = require('discord.js');
      let tomute =
      message.mentions.members.first() || message.guild.members.get(args[0]);
    const nofind = new Discord.RichEmbed()
    const nomute = new Discord.RichEmbed()
    let muterole = message.guild.roles.find(`name`, "Silenciado");
    if (!muterole) {
      try {
        muterole = await message.guild.createRole({
          name: "Silenciado",
          color: "#00000",
          permissions: []
        });
        message.guild.channels.forEach(async (channel, id) => {
          await channel.overwritePermission(muterole, {
            SEND_MESSAGES: false,
            ADD_REACTIONS: false
          });
        });
      } catch (e) {
        console.log(e.stack);
      }
    }

    let userm = message.mentions.members.first();
    let tienepermiso = message.guild.member(message.author).permissions.has('MANAGE_MESSAGES')
    let mencionado = message.mentions.users.first();
    let razon = args.slice(1).join(' ');
if(!tienepermiso) return message.channel.send('**No tienes permisos para usar este comando**')
if(!mencionado) return message.reply('**No ha mencionando a ningún miembro.**');
//Verificamos el rol;
let rolemute = message.guild.roles.find(m => m.name == "Silenciado")
userm.addRole(rolemute.id)
  message.channel.send(new Discord.RichEmbed()
                       .setDescription(`**${mencionado.username}**, **fue muteado del servidor| Razón: ${razon}**`)
                       .setColor('RANDOM'))
}