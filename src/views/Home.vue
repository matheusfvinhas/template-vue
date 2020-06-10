<template>
  <div>
    <v-row>
      <h1 class="font-weight-medium primary--text">
        Star Wars
      </h1>
    </v-row>

    <v-row class="mt-4">
      <v-col class="pa-0">
        <!-- usar o componente v-autocomplete para fazer a busca -->
        <!-- https://vuetifyjs.com/en/components/autocompletes/#api -->
      </v-col>
    </v-row>

    <v-row class="mt-4">
      <v-col class="pa-0">
        <span>{{ peopleToShow }}</span>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import { people } from '../services'

export default {
  name: 'Home',
  data() {
    return {
      people: {},
      peopleList: []
    }
  },
  computed: {
    peopleToShow() {
      // fazer a busca da pessoa selecionada
      return null
    }
  },
  async mounted() {
    try {
      // utilizar o service de people para buscar as pessoas, usar async await
      this.peopleList = null
    } catch (error) {
      console.log(error)
    }
  }
}
</script>
