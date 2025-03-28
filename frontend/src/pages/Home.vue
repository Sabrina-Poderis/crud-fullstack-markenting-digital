<template>
  <div class="main_container">
    <h1>Home</h1>
    <div class="buttons_container">
      <button v-if="isLoggedIn" @click="handleDashboard">Dashboard</button>
      <template v-else>
        <button @click="handleLogin">Entrar</button>
        <button @click="handleRegister">Registrar</button>
      </template>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";
import { authService } from "../services/authService";

const router = useRouter();
const isLoggedIn = ref(false);

const checkAuth = () => {
  isLoggedIn.value = authService.isAuthenticated();
};

onMounted(() => {
  checkAuth();
});

const handleLogin = () => {
  router.push("/login");
};

const handleRegister = () => {
  router.push("/register");
};

const handleDashboard = () => {
  router.push("/dashboard");
};
</script>

<style scoped>
.buttons_container {
  display: flex;
  justify-content: center;
  gap: 5px;
}
</style>
