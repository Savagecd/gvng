module.exports = async(client, message, args) => {
    const Discord = require('discord.js')
    const math = require("math-expression-evaluator"); 


    const embed = new Discord.RichEmbed()
  .setColor(`RANDOM`);
  
  if (!args[0]) {
    embed.setFooter("Por favor ingrese una `expresion`.");
    return await message.channel.send(embed); // Devuelve un mensaje si es que ejecuta el comando sin nada
  }
  let resultado;
  try {
    resultado = math.eval(args.join(" ")); // El Args toma el calculo
  } catch (e) {
    resultado = "error: Entrada Invalida"; // Cuando es incorrecta
  }
  embed.addField("Entrada:", `\`\`\`js\n${args.join(" ")}\`\`\``, false) // Te da el calculo
  .setTitle("📊 Calculadora")
  .addField("Salida", `\`\`\`js\n${resultado}\`\`\``, false);
  await message.channel.send(embed);
}; 
    