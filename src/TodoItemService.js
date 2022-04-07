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

    markToDoItemAsDone(toDoItemId) {

        let body = {
            markAsCompleted: true
        }

        axios.put(`${API_BASE_URL}/${toDoItemId}`, body)
            .then(response => {

                const statusCode = response.status;
                console.log(`ToDoItemId:'${toDoItemId}' has been marked as done - Status Code:${statusCode}`);
            })
    }

    markToDoItemAsIncompleted(toDoItemId) {

        let body = {
            markAsCompleted: false
        }

        axios.put(`${API_BASE_URL}/${toDoItemId}`, body)
            .then(response => {

                const statusCode = response.status;
                console.log(`ToDoItemId:'${toDoItemId}' has been marked as done - Status Code:${statusCode}`);
            })
    }


}

export default new TodoItemService()