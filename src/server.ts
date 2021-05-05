import * as net from 'net';
import {spawn} from 'child_process';

net.createServer((connection) => {
  console.log('A client has connected.');

  // connection.write(`Connexion establecida con el cliente.\n`);
  // el servidor recibe la peticion, comprueba barra n en data evento
  // emitir evento y peticion request


  connection.on('data', (dataJSON) => {
    connection.write(`hola`);

    const comando = JSON.parse(dataJSON.toString());
    console.log(comando.type);

    connection.emit('request', comando.type);
  });

  connection.on('request', (tipo) => {
    const comando = spawn(tipo);
    // comando.stdout.pipe(process.stdout);
    connection.write('buenos dias');

    let output = '';
    comando.stdout.on('data', (piece) => output += piece);

    comando.on('close', () => {
      connection.write(output);
      connection.end();
    });
  });

  connection.on('end', () => {
    console.log('Ya he terminado de procesar los datos');
  });

  connection.on('close', () => {
    console.log('A client has disconnected.');
  });
}).listen(60300, () => {
  console.log('Waiting for clients to connect.');
});
