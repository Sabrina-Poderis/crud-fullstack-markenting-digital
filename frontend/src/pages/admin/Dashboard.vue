<template>
    <div>
      <h2>Dashboard</h2>
      <p>Bem-vindo, {{ user?.name }}!</p>
      <button @click="handleLogout">Sair</button>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref, onMounted } from "vue";
  import { useRouter } from "vue-router";
import { authService } from "../../services/authService";
  
  const router = useRouter();
  const user = ref(authService.getUser());
  
  onMounted(() => {
    if (!user.value) {
      router.push("/login");
    }
  });
  
  const handleLogout = () => {
    authService.logout();
    router.push("/login");
  };
  </script>
  