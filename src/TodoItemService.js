import axios from 'axios';

const API_BASE_URL = "http://localhost:4575/api/TodoItems";

class TodoItemService {

    getAllTodoItems() {
        return axios.get(API_BASE_URL);
    }
/*
    addToDoItem(todoItemName) {

        let body = {
            name: toDoItemName
        }
        
        axios.post(API_BASE_URL, body)
            .then(response => {

                return response.status;
            })
    }
*/
    deleteTodoItem(todoItemId) {
        return axios.delete(API_BASE_URL + '/' + todoItemId);
    }

    updateTodoItem(todoItem, todoItemId) {
        return axios.put(API_BASE_URL + '/' + todoItemId, todoItem);
    }

    updateTodoItem2(todoItem, todoItemId) {
        return axios.put(API_BASE_URL + '/' + todoItemId, todoItem);
    }


}

export default new TodoItemService()