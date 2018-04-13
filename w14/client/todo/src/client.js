const BASE_URL = 'http://localhost:8000/api';

module.exports = {
   
  getTodos(success){
    fetch(`${BASE_URL}/todos/`)
      .then(response => response.json())
      .then(success)
  },

  createTodo(data, success){
    fetch(`${BASE_URL}/todos/`, {
      'method': 'POST',
      'body': JSON.stringify(data) 
    })
      .then(response => response.json())
      .then(success)
  },


  deleteTodo(id, success){
    fetch(`${BASE_URL}/todos/${id}/`, {
      'method': 'DELETE'
    })
      .then(response => response.json())
      .then(success)
  }

}