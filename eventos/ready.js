module.exports = ('ready', (client) => {

 // Enviamos un mensaje de iniciación
 console.log(`Estoy listo!`);

 // Tiempo de inicio
 let today = new Date();
 let date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
 let time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
 // Enviamos un mensaje del timepo de iniciación
 console.log(`Fecha: ${date} - Hora: ${time}`)

 //Cambiar el estado de nuestro bot cada x tiempo
  setInterval(() => {
      // Listamos los mensajes a mostrar en el estado
      let MSGS = [
          `Usa .help`,
          `Neo`,
          `Mi prefix es .`,
          `#NeoOnTop`,
          `Con ${client.users.size} usuarios`,
          `En ${client.guilds.size} servidores`,
          `En ${client.channels.size} canales`
      ];
      
      client.user.setActivity(MSGS[~~(Math.random() * MSGS.length)], {
          type: 'WATCHING'
      })

  }, 10000); // Tiempo de cada cambio en Milisegundos

})
