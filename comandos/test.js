module.exports = async (client, message, args) => { 
  const Discord = require('discord.js');
  
	message.delete() //Si quieres lo dejas así o se lo quitas
   let user = message.mentions.users.first() || message.author
      let img = message.mentions.users.first() //usamos el img para las menciones
      if (!img) {
		//Podeis cambiar el embed a tu gusto en (color - footer)
		//Si no se menciona a alguien mandará tu avatar
          const embed = new Discord.RichEmbed()
          .setDescription(`[Descargar Avatar](${user.avatarURL})`)
          .setImage(`${message.author.avatarURL}`)
          .setColor(0x66b3ff)
          .setFooter(`Avatar de ${message.author.username}#${message.author.discriminator}`);
          message.channel.send({ embed });

      } else if (img.avatarURL === null) { //Si el usuario no tiene avatar

          message.channel.sendMessage("El usuario ("+ img.username +") no tiene avatar!");//El bot enviara este mensaje

      } else { //Usamos las menciones Para pedir el avatar de alguien
		//Podeis cambiar el embed a tu gusto en (color - footer)
          const embed = new Discord.RichEmbed()
          .setDescription(`[Descargar Avatar](${user.avatarURL})`)
          .setImage(`${img.avatarURL}`)
          .setColor(0x66b3ff)
          .setFooter(`Avatar de ${img.username}#${img.discriminator}, Pedido por ${message.author.username}`);
          message.channel.send({ embed });

      };

  }