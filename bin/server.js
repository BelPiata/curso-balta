const app = require ('../src/app');
const debug = require('debug')('nodestr: server');
const http = require('http');

const port = normalizePort(process.env.PORT || '3000');
app.set('port', port);

const server = http.createServer(app);

server.listen(port);
server.on('error', onError);
server.on('listening', onListening)
console.log('API rodada na porta ' + port);

function normalizePort(val) {
    const port = parseInt(val, 10);

    if (isNaN(port)) {
        return val;
    }
    if (port >= 0){
        return port;
    }
    return false;
}
function onError(erro) {
    if (erro.syscall !== 'listen') {
        throw erro;
    }
    const bind = typeof port === 'string' ?
        'pipi' + port :
        'port' + port
    switch (erro.code) {
        case 'EACCES':
            console.error(bind + 'requires elevated privileges');
            process.exit(1)
            break;
        case 'EADDRINUSE':
            console.error(bind + 'is already in use');
            process.exit(1)
            break;
            defaulte:
            throw error;
    }
}
function onListening () {
    const addr = server.address();
    const bind = typeof addr === 'string'
    ? 'pipe' + addr
    :'port' + addr.port;
    debug ('Listening on' + bind);
}