  
module.exports = async (client, message, args) => { 
   
    const Discord = require('discord.js')

if (!message.guild.me.hasPermission("MANAGE_CHANNELS"))
      return message.channel.send("Falta de permisos.").then(m => m.delete(60000)); 
    if (!args.join(" "))
      return message.channel.send(
        "Error ``|`` **Ingrese Una Razon Para Abrir El Ticket** "
      ).then(m => m.delete(60000));
    let everyone = message.guild.roles.find(m => m.name == "@everyone"); 

    let ticketsupport = message.guild.roles.find(
      r => r.name == "Ticket Support"
    ); 
    if (!ticketsupport)
      return message.channel.send(
        "Error ``|`` **Necesita Crear El Rango** ``Ticket Support``"
      ).then(m => m.delete(900000)); 

    let nombrech = message.author.tag
      .replace(/[^a-zA-z0-9 ]/g, "")
      .trim()
      .toLowerCase(); 
    if (message.guild.channels.find(m => m.name.replace(/-/g, " ") == nombrech))
      return message.channel.send("");
   
    let cate = message.guild.channels.find(
      c => c.name == "tickets" && c.type == "category"
    ); 
    if (!cate)
      return await message.guild.createChannel("tickets", {
        type: "category"
      }); 

    return message.guild
      .createChannel(nombrech, {
        type: "text",
        permissionOverwrites: [
          
          {
            id: everyone.id, 
            deny: ["VIEW_CHANNEL", "SEND_MESSAGES"] 
          },
          {
            id: ticketsupport.id, 
            allow: ["VIEW_CHANNEL", , "SEND_MESSAGES"] 
          },
          {
            id: message.author.id,
            allow: ["VIEW_CHANNEL", "SEND_MESSAGES"]
          }
        ],
        parent: cate.id 
      })
      .then(m => {
        message.channel.send(
          ""
        ),
          message.guild.channels
            .find(m => m.name.replace(/-/g, " ") == nombrech)
            .send(
              new Discord.RichEmbed()
                .setTitle(`:notebook: **| Nuevo ticket |** :notebook:`)
                .setDescription(
                  `**Aqui Podras Pedir Pruebas Para Unirte Al Team , Menciona Al Staff Y Te Responderan Lo Mas Rapido Posible**`
                )
                .addField(`Ticket Creado Por:`, message.author)
                .addField(`Razón:`, args.join(" "))
                .setFooter(`Neo Bot | Pruebas`)
          .setColor('RANDOM')
            );
      })
      .catch(e => {
        message.channel.send(`Parece que hubo un error`), console.log(e);
      }); 
  }