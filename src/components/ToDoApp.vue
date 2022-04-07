<template>
  <v-container>
    <v-row class="text-center">
      <v-col cols="12">
        <v-img :src="require('../assets/logo.svg')" class="my-3" contain height="30" />
        <v-form ref="form" v-model="valid" lazy-validation>
          <v-text-field
            @keydown.enter="addToDoItem(toDoItemName)"
            v-model="toDoItemName"
            label="To Do Item"
            required
          ></v-text-field>

          <v-btn color="primary" class="mr-6" v-on:click="addToDoItem(toDoItemName)">
            Add
            <v-icon dark right>mdi-plus</v-icon>
          </v-btn>
        </v-form>
      </v-col>
    </v-row>
    <v-row class="text-left">
      <v-col cols="12">
        <v-simple-table>
          <template v-slot:default>
            <thead>
              <tr>
                <th>
                  <strong>ID</strong>
                </th>
                <th>
                  <strong>NAME</strong>
                </th>
                <th>
                  <strong>STATE</strong>
                </th>
                <th>
                  <strong>DELETE</strong>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="toDoItem in result" :key="toDoItem.id">
                <td>{{ toDoItem.id }}</td>
                <td>{{ toDoItem.name }}</td>
                <td>
                  <v-btn
                    v-if="toDoItem.isCompleted"
                    v-on:click="markToDoItemAsIncompleted(toDoItem.id)"
                    class="ma-2"
                    color="green"
                    dark
                  >
                    Done
                    <v-icon dark right>mdi-checkbox-marked-circle</v-icon>
                  </v-btn>

                  <v-btn
                    v-else
                    v-on:click="markToDoItemAsDone(toDoItem.id)"
                    class="ma-2"
                    color="warning"
                    dark
                  >
                    Incompleted
                    <v-icon dark right>mdi-minus-circle</v-icon>
                  </v-btn>
                </td>

                <td>
                  <v-btn
                    v-on:click="deleteToDoItemById(toDoItem.id)"
                    class="mx-2"
                    fab
                    dark
                    small
                    color="red"
                  >
                    <v-icon dark>mdi-delete</v-icon>
                  </v-btn>
                </td>
              </tr>
            </tbody>
          </template>
        </v-simple-table>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import axios from "axios"
import TodoItemService from "@/TodoItemService";

const apiBackend = axios.create({
  baseURL: 'http://localhost:4575/api'
})

const refreshTable = () => {

  window.location.reload();

}


export default {
  data: () => ({
    result: null
  }),
  methods: {
    addToDoItem(toDoItemName) {
      let body = {
        name: toDoItemName
      }
      apiBackend.post('/TodoItems', body)
        .then(response => {

          const statusCode = response.status;
          console.log(`New ToDoItem:'${toDoItemName}' has been added - Status Code:${statusCode}`);
          refreshTable()

        })
    },
    deleteToDoItemById(toDoItemId) {

      apiBackend.delete(`/TodoItems/${toDoItemId}`)
        .then(response => {

          const statusCode = response.status;
          console.log(`ToDoItemId:'${toDoItemId}' has been deleted - Status Code:${statusCode}`);
          refreshTable()

        })
    },
    markToDoItemAsIncompleted(toDoItemId) {

      TodoItemService.markToDoItemAsIncompleted(toDoItemId);

      refreshTable();
    },
    markToDoItemAsDone(toDoItemId) {

      TodoItemService.markToDoItemAsDone(toDoItemId);

      refreshTable();

    }
  },

  created() {
    TodoItemService.getAllTodoItems()
      .then((result) => {

        this.result = result.data;
      })
  }
};
</script>
