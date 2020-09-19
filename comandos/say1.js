const { MessageEmbed } = require("discord.js")

module.exports = {
  name: "say",
  run(client, message, args) {
    const say = args.join(" ")
    const fArgs = new MessageEmbed()
    .setColor("RED")
    .setAuthor("Argumentos insuficientes","https://i.pinimg.com/originals/37/17/d4/3717d482c184b0f6f46db5e6b66aa149.png")
    if (!args[0]) return message.channel.send(fArgs)
    
    message.delete({timeout: 200})
   message.channel.send(say)
    
  },
  category: 'Texto'
}