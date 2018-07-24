const restify = require('restify');
const server = restify.createServer();

const game = require('./routes/games');
server.use('/api/games', game);

// server.listen(3000, () => console.log('server running on', server.name, server.url));