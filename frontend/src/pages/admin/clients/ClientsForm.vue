<template>
  <div class="main_container">
    <h1>{{ isEdit ? "Editar Cliente" : "Novo Cliente" }}</h1>
    <form @submit.prevent="saveClient">
      <input v-model="client.name" required placeholder="Nome" />
      <input v-model="client.email" type="email" required placeholder="Email" />
      <input v-model="client.phone" required placeholder="Telefone" />
      <input v-model="client.company" required placeholder="Empresa" />

      <div class="buttons_container">
        <button type="submit">Salvar</button>
        <button type="button" @click="goBack">Voltar</button>
      </div>
      <p v-if="errorMessage" class="error">{{ errorMessage }}</p>
    </form>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, computed, type Ref } from "vue";
import { useRouter, useRoute } from "vue-router";
import { ClientsService } from "../../../services/ClientsService";
import type { Client } from "../../../ts/types/Client";

const router = useRouter();
const route = useRoute();
const client: Ref<Client> = ref({ name: "", email: "", phone: "", company: "" });
const errorMessage = ref("");

const id = Number(route.params.id);
const isEdit = computed(() => !!route.params.id);

const fetchClient = async () => {
  try {
    client.value = await ClientsService.getOne(id);
  } catch (error) {
    console.error("Erro ao buscar cliente", error);
  }
};

const saveClient = async () => {
  try {
    let success = false
    if (isEdit.value) {
      success = await ClientsService.update(id, client.value);
    } else {
      success = await ClientsService.create(client.value);
    }
    if (success) {
      router.push("/clients");
    } else {
      errorMessage.value = "Erro ao salvar cliente";
    }
  } catch (error) {
    console.error("Erro ao salvar cliente", error);
  }
};

const goBack = () => {
  router.push('/clients');
};

onMounted(() => {
  if (isEdit.value) fetchClient();
});
</script>
