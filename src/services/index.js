'use strict';

const users = require('./users/users.service.js');

const projects = require('./projects/projects.service.js');

const tasks = require('./tasks/tasks.service.js');

module.exports = function() {
  const app = this; // eslint-disable-line no-unused-vars
  app.configure(users);
  app.configure(projects);
  app.configure(tasks);
};
