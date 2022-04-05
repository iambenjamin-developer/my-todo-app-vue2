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
                <th>Name</th>
                <th>Calories</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item in desserts" :key="item.name">
                <td>{{ item.name }}</td>
                <td>{{ item.calories }}</td>
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
  name: 'HelloWorld',

  data: () => ({
    desserts: [
      {
        name: 'Frozen Yogurt',
        calories: 159,
      },
      {
        name: 'Ice cream sandwich',
        calories: 237,
      },
      {
        name: 'Eclair',
        calories: 262,
      },
      {
        name: 'Cupcake',
        calories: 305,
      },
      {
        name: 'Gingerbread',
        calories: 356,
      },
      {
        name: 'Jelly bean',
        calories: 375,
      },
      {
        name: 'Lollipop',
        calories: 392,
      },
      {
        name: 'Honeycomb',
        calories: 408,
      },
      {
        name: 'Donut',
        calories: 452,
      },
      {
        name: 'KitKat',
        calories: 518,
      },
    ],
  }),
}
</script>
