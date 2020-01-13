// ejecutarlo con: node server.js

// var express = require('express');
// var cors = require('cors');
// var app = express();

// var corsOptions = {
//   origin: '*'
// };

// app.use(cors(corsOptions));

// let tasks = [{ title: 'comprar el pan' }, { title: 'tarea 2' }, { title: 'otra mas' }];

// app.get('/status', function(req, res) {
//   res.send('Server is online!');
// });

// app.get('/getTodoTasks', function(req, res) {
//   res.send(tasks);
// });

// app.post('/addTodoTasks', function(req, res) {
//   let task = req.query.task;
//   tasks = [...tasks, { title: task, completed: false }];
//   res.send(tasks);
// });

// app.post('/removeTodoTasks', function(req, res) {
//   let id = parseInt(req.query.id);
//   tasks = tasks.filter((item, j) => id !== j);
//   res.send(tasks);
// });

// app.post('/toggleCompletedTasks', function(req, res) {
//   let id = parseInt(req.query.id);
//   tasks = tasks.map((item, j) => {
//     if (j === id) {
//       item.completed = !item.completed;
//       return item;
//     } else {
//       return item;
//     }
//   });
//   res.send(tasks);
// });

// app.post('/clearCompleteTasks', function(req, res) {
//   tasks = tasks.filter(item => !item.completed);
//   res.send(tasks);
// });

// app.listen(3000, function() {
//   console.log('Example app listening on port 3000!');
// });
