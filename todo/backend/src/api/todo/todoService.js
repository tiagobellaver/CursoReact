const Todo = require('./todo');

Todo.methods(['get', 'post', 'delete']);
Todo.updateOptions({new: true, runValidators: true})

module.exports = Todo;