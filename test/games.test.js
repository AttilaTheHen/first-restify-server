const mongo = require('../lib/mongodb');
const { assert } = require('chai');
// const request = require('./request');
const request = require('../lib/app');

function save(game) {
    return request
        .post(game)
        .send(game)
        .then(({ body }) => body);
}

let device = {
    name: 'Device 6',
    genre: 'Interactive Fiction'
};

let persona = {
    name: 'Persona 5',
    genre: 'Action'
};

let deviceGame;
let personaGame;

describe('Cool Games API', () => {
    beforeEach(() => {
        return mongo.then(db => {
            return db.collection('coolgames').remove();
        });
    });

    beforeEach(() => {
        return save(device)
            .then(data => deviceGame = data);
    });

    beforeEach(() => {
        return save(persona)
            .then(data => personaGame = data);
    });

    it('saves a game', () => {
        assert.isOk(deviceGame._id);
        assert.isOk(personaGame._id);
    });
});