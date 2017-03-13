import app from './app';

async function seed(name, data) {
  console.log(data.length + ' ' + name);
  const service = app.service(name);
  await service.Model.remove({});
  return service.create(data);
}

async function main() {
  const users = await seed('users', [
    {
      email: 'admin@feathersjs.com',
      password: 'secret',
    },
    {
      email: 'user@feathersjs.com',
      password: 'secret',
    },
  ]);

  const projects = await seed('projects', [
    {
      name: 'Project 1',
      owner: users[0],
    },
    {
      name: 'Project 2',
      owner: users[1],
    },
  ]);

  const tasks = await seed('tasks', [
    {
      text: 'Task 1.1',
      complete: true,
      owner: users[0],
      project: projects[0],
    },
    {
      text: 'Task 1.2',
      complete: false,
      owner: users[0],
      project: projects[0],
    },
    {
      text: 'Task 2.1',
      complete: false,
      owner: users[1],
      project: projects[1],
    },
    {
      text: 'Task 2.2',
      complete: false,
      owner: users[1],
      project: projects[1],
    }
  ]);

  console.log("\nSeeds DONE");
  process.exit();
}

main();
