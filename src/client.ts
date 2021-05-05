import * as net from 'net';

if (process.argv.length !== 3) {
  console.log('Por favor, escriba un comando');
} else {
  const client = net.connect({port: 60300});

  // construir una peticion, json.stringgify
  // escribir la peticion en el socket
  // socket end
  const comando = {
    type: process.argv[2],
    options: `\n`,
  };

  client.write(JSON.stringify(comando));

  client.on('data', (dataJSON) => {
    const message = dataJSON.toString();
    if (message) {
      console.log(message);
    }
  });
}
