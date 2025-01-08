<script setup>
import { ref, onMounted } from "vue";
import axios from "axios";

const users = ref([]);
const port = process.env.PORT_BACK;

onMounted(async () => {
  try {
    const response = await axios.get(`http://localhost:5051/users`);
    users.value = response.data;
  } catch (error) {
    console.error("Erreur lors de la récupération des utilisateurs:", error);
  }
});
</script>

<template>
  <div>
    <h1>Liste des utilisateurs</h1>
    <ul>
      <li v-for="user in users" :key="user.id">
        {{ user.name }} => {{ user.email }}
      </li>
    </ul>
  </div>
</template>

<style scoped>
/* Ajoutez vos styles ici */
</style>
