<template>
    <div class="main-content">
      <h2>Cadastro</h2>
      <input v-model="name" type="text" placeholder="Nome" />
      <input v-model="email" type="email" placeholder="Email" />
      <input v-model="password" type="password" placeholder="Senha" />
      <button @click="handleRegister">Registrar</button>
      <p v-if="errorMessage" class="error">{{ errorMessage }}</p>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref } from "vue";
  import { useRouter } from "vue-router";
import { authService } from "../../services/authService";

  
  const router = useRouter();
  const name = ref("");
  const email = ref("");
  const password = ref("");
  const errorMessage = ref("");
  
  const handleRegister = async () => {
    const success = await authService.register({
        name: name.value,
        email: email.value,
        password: password.value
    });
    if (success) {
      router.push("/dashboard");
    } else {
      errorMessage.value = "Erro ao registrar";
    }
  };
  </script>
  