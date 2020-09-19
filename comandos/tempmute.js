module.exports = async (client, message, args) => { 
   const Discord = require('discord.js');
const ms = require("ms")
let mencionado = message.mentions.users.first();
   let tienepermiso = message.guild.member(message.author).hasPermission('MANAGE_MESSAGES');
  if(!tienepermiso) return message.channel.send(new Discord.RichEmbed()
  .setDescription(
        "No requieres de los permisos necesarios 🚫!"
      )
      .setColor('RANDOM')
       .setTimestamp())
  

    let tomute =
      message.mentions.members.first() || message.guild.members.get(args[0]);
    const nofind = new Discord.RichEmbed()
      .setDescription(
        "No has mencionado a un usuario 💤"
      )
      .setColor("RANDOM")
    .setTimestamp();
   if (!tomute) return message.reply(nofind);
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
    let razon = args.slice(2).join(" ") || "Razón no definida";

    const reason = new Discord.RichEmbed()
      .setDescription("No has escrito una razón")
      .setColor("RANDOM")
    .setTimestamp();
    if (!razon) return message.channel.send(reason);

    const mutetiempo = new Discord.RichEmbed()
      .setDescription(
        "No especificaste el tiempo | Formato: (1s (Segundo) | 1h (Hora) / 1d (Dia))"
      )
      .setColor("RANDOM")
    .setTimestamp();
    let mutetime = args[1];
    if (!mutetime) return message.reply(mutetiempo);
    await tomute.addRole(muterole.id); 
    const muteadoxd = new Discord.RichEmbed()
      .setTitle("Nuevo Muteo!")
      .addField(`Usuario`, `**${tomute}**`)
      .setColor("RANDOM")
      .addField(`Muteado por`, `**${message.author.username}**`)
      .addField(`Tiempo`, `**${mutetime}**`)
      .addField(`Tiempo en ms`, `**${ms(mutetime)}**`)
      .addField("Razón", `**${razon}**`)
    .setTimestamp();
    message.reply(muteadoxd);
    //nada v:
    setTimeout(function() {
      tomute.removeRole(muterole.id);
      message.channel.send(new Discord.RichEmbed()
                           .setTitle("Usuario Desmuteado!")
                           .setDescription(`<@${tomute.id}> **a sido desmuteado!**`)
                           .addField(`Muteado por`, `**${message.author.username}**`)
                           .addField(`Estaba muteado por`, `**${mutetime}**`)
                           .addField("Razón", `**${razon}**`)
                           .setColor('RANDOM')
                          .setTimestamp());
    }, ms(mutetime));
  }