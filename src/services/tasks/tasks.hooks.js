'use strict';

const { authenticate } = require('feathers-authentication').hooks;
const restrictToOwner = require('../../hooks/restrictToOwner');
const setOwner = require('../../hooks/setOwner');

module.exports = {
  before: {
    all: [ authenticate('jwt'), restrictToOwner() ],
    find: [],
    get: [],
    create: [ setOwner() ],
    update: [],
    patch: [],
    remove: []
  },

  after: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  },

  error: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  }
};
