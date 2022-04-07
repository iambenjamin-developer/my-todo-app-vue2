import axios from 'axios';

const API_BASE_URL = "http://localhost:4575/api/TodoItems";

class TodoItemService {

    getAllTodoItems() {
        return axios.get(API_BASE_URL);
    }

    createTodoItem(todoItem) {
        return axios.post(API_BASE_URL, todoItem);
    }

    getTodoItemById(todoItemId) {
        return axios.get(API_BASE_URL + '/' + todoItemId);
    }

    updateTodoItem(todoItem, todoItemId) {
        return axios.put(API_BASE_URL + '/' + todoItemId, todoItem);
    }

    deleteTodoItem(todoItemId) {
        return axios.delete(API_BASE_URL + '/' + todoItemId);
    }
}

export default new TodoItemService()