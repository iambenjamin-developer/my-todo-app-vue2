<template>
  <v-container>
    <v-row class="text-center">
      <v-col cols="12">
        <h1>To Do Items</h1>

        <v-form ref="form" v-model="valid" lazy-validation>
          <v-text-field v-model="newToDoItem" :counter="10" :rules="nameRules" label="To Do Item" required></v-text-field>

          <v-btn color="primary" class="mr-6" v-on:click="addToDoItem(newToDoItem)">Add</v-btn>
        </v-form>
      </v-col>
    </v-row>
    <v-row class="text-left">
      <v-col cols="12">
        <v-simple-table dark>
          <template v-slot:default>
            <thead>
              <tr>
                <th>Id</th>
                <th>Name</th>
                <th>State</th>
                <th>Delete</th>
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


const apiBackend = axios.create({
  baseURL: 'https://localhost:44305/api'
})

/*
apiBackend.get('/TodoItems')
  .then(response => {

    const todoItems = response.data;
    console.log("Respuesta del Get All...")
    console.log(todoItems)
  })

const body = {
  name: 'Sandia'
}

apiBackend.post('/TodoItems', body)
  .then(response => {

    const respuesta = response.data;
    console.log("Respuesta del post...")
    console.log(respuesta)
  })

const myId = 1003;
apiBackend.delete(`/TodoItems/${myId}`)
  .then(response => {

    console.log("Respuesta del DELETE...")
    console.log(response)
  })

*/
export default {
  data: () => ({
    result: null
  }),
  methods: {
    addToDoItem(name) {

      alert(`addToDoItem: ${name}`)
    },
    deleteToDoItemById(toDoItemId) {

      alert(`deleteToDoItemById: ${toDoItemId}`)
    },
    markToDoItemAsIncompleted(toDoItemId) {
      alert(`markToDoItemAsIncompleted: ${toDoItemId}`)
    },
    markToDoItemAsDone(toDoItemId) {
      alert(`markToDoItemAsDone: ${toDoItemId}`)
    }
  },

  created() {
    apiBackend.get('/TodoItems')
      .then((result) => {

        this.result = result.data;

      })
  }
};
</script>
