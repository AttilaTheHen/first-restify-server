/* eslint no-console: off */
const restify = require('restify');
const restifyPlugins = restify.plugins;
const PORT = process.env.PORT || 3000;
const Games = require('./models/game');

const app = restify.createServer();
app.use(restifyPlugins.jsonBodyParser({ mapParams: true }));
app.use(restifyPlugins.queryParser({ mapParams: true }));

app.listen(PORT, () => {
    console.log('server running on port', PORT);
});

app.get('/api/coolgames/', (req, res) => {
    Games.find()
        .then(games => res.json(games));
});

app.get('/api/coolgames/:id', (req, res) => {
    Games.findById(req.params.id)
        .then(game => res.json(game));
});

app.post('/api/coolgames/', (req, res) => {
    Games.create(req.body)
        .then(game => res.json(game));
});

app.put('/api/coolgames/:id', (req, res) => {
    Games.findByIdAndUpdate(req.params.id, req.body)
        .then(game => res.json(game));
});

app.del('/api/coolgames/:id', (req, res) => {
    Games.findByIdAndRemove(req.params.id)
        .then(game => res.json(game));
});

module.exports = app;