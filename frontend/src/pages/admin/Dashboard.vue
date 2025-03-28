<template>
  <div>
    <h2>Dashboard</h2>
    <p>Bem-vindo, {{ user?.name }}!</p>

    <div class="buttons_container">
      <button @click="handleClients">Clientes</button>
      <button @click="handleProjects">Projetos</button>
      <button @click="handleLogout">Sair</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";
import { UserService } from "../../services/UserService";

const router = useRouter();
const user = ref(UserService.getUser());

onMounted(() => {
  if (!user.value) {
    router.push("/login");
  }
});

const handleClients = () => {
  router.push("/clients");
};

const handleProjects = () => {
  router.push("/projects");
};

const handleLogout = () => {
  UserService.logout();
  router.push("/login");
};
</script>
