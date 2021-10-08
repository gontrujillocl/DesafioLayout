<template>
  <div>
    <v-row class="my-5">
      <v-col align="center">
        <h1>Los Personajes</h1>
      </v-col>
    </v-row>
    <v-row>
      <v-col v-for="(personaje, $index) in personajes" :key="$index" xl="4">
        <v-card class="mx-auto" max-width="250px" tile>
          <v-img :src="personaje.imagen" height="200px" />
          <v-card-title class="justify-center">
            {{ personaje.nombre }}
          </v-card-title>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  computed: {
    personajes() {
      return this.$store.state.personajeList.personajes;
    },
  },
};
</script>
