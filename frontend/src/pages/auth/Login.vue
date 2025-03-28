<template>
  <div class="main_container">
    <h2>Login</h2>
    <input v-model="email" type="email" placeholder="Email" />
    <input v-model="password" type="password" placeholder="Senha" />
    <button class="button_login" @click="handleLogin">Entrar</button>
    <p v-if="errorMessage" class="error">{{ errorMessage }}</p>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useRouter } from "vue-router";
import { authService } from "../../services/authService";

const router = useRouter();
const email = ref("");
const password = ref("");
const errorMessage = ref("");

const handleLogin = async () => {
  const success = await authService.login({
    email: email.value,
    password: password.value,
  });

  if (success) {
    router.push("/dashboard");
  } else {
    errorMessage.value = "Credenciais inválidas";
  }
};
</script>

<style scoped>
.button_login {
  margin-top: 10px;
}
</style>
