<template>
  <v-container>
    <v-row class="text-center">
      <v-col cols="12">
        <h1>To Do Items</h1>
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
                <th>IsCompleted</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="toDoItem in result" :key="toDoItem.id">
                <td>{{ toDoItem.id }}</td>
                <td>{{ toDoItem.name }}</td>
                <td>{{ toDoItem.isCompleted }}</td>
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

export default {
  data: () => ({
    result: null
  }),
  created() {
    apiBackend.get('/TodoItems')
      .then((result) => {

        this.result = result.data;

      })
  }
};
</script>
