module.exports = async(client, message, args, color) => { 
  const Discord = require('discord.js');
    var server = message.guild; 
    let guild = message.guild; 
    let verifLevels = [
        "Ningúno",
        "Bajo",
        "Medio",
        "(â¯°â¡°ï¼â¯ï¸µ  â»ââ»",
        "â»ââ»ãã½(à² çà² )ãå½¡â»ââ»"
      ],
      region = {
        europe: "Europa :flag_eu:",
        brazil: "Brasil :flag_br: ",
        hongkong: "Hong Kong :flag_hk:",
        japan: "Japón :flag_jp:",
        russia: "Rusia :flag_ru:",
        singapore: "Singapur :flag_sg:",
        southafrica: "Sudáfrica :flag_za:",
        sydney: "Sydney :flag_au:",
        "us-central": "Central US :flag_us:",
        "us-east": "Este US :flag_us:",
        "us-south": "Sur US :flag_us:",
        "us-west": "Oeste US :flag_us:",
        "vip-us-east": "VIP US Este :flag_us:",
        "eu-central": "Europa Central :flag_eu:",
        "eu-west": "Europa Oeste :flag_eu:",
        london: "London :flag_gb:",
        amsterdam: "Amsterdam :flag_nl:",
        india: "India :flag_in:"
      };
   let estadouser = {
   "online":"🟢", 
   "idle":"🟡",
   "dnd":"🔴",
   "invisible":"⚪"
 } 

    const embed = new Discord.RichEmbed()
      .setThumbnail(server.iconURL)
      .setAuthor(server.name, server.iconURL)
      .setDescription(`Servidor creado el **${guild.createdAt.toDateString().split(" ")[2]}/${guild.createdAt.toDateString().split(" ")[1]}/${guild.createdAt.toDateString().split(" ")[3]}**`)
      .addField("**Dueño del Servidor**","**" +server.owner.user.username +"#" +server.owner.user.discriminator +"**",true)
      .addField("**ID**", "**" + server.id + "**",true)
      .addField(`**Region**`, `**${region[guild.region]}**`,true)
      .addField(`**Nivel de verificación**`,`**${verifLevels[guild.verificationLevel]}**`,true)
      .addField("**Miembros**", "**" + server.memberCount + "**",true)
      .addField("**Canales**", "**" + message.guild.channels.size + "**",true)
      .addField("**Bots**:","**" + guild.members.filter(member => member.user.bot).size + "**",true)
      .addField("**Roles**:", "**" + server.roles.size + "**",true)
      .addField("**Emojis**", "**" + message.guild.emojis.size + "**",true)
      .addField("**Estados de miembros**", "**"+message.guild.members.filter(o => o.presence.status === 'online').size+ "** Online 🟢\n   **"+message.guild.members.filter(i => i.presence.status === 'idle').size+"** Members 🟡\n**"+message.guild.members.filter(dnd => dnd.presence.status === 'dnd').size+"** No molestar 🔴\n**"+message.guild.members.filter(o => o.presence.status === 'offline').size+"** Invisible ⚪ \n")   
      .setColor('RANDOM')
      .setFooter("Solicitado por "+message.author.username+"", message.author.avatarURL)
      .setTimestamp();

    message.channel.send({ embed });
}