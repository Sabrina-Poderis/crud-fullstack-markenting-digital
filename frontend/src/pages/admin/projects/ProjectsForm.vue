<template>
  <div class="main_container">
    <h1>{{ isEdit ? "Editar Projeto" : "Novo Projeto" }}</h1>
    <form @submit.prevent="saveProject">
    
      <input v-model="project.name" required placeholder="Nome" />
      <input v-model="project.description" required placeholder="Descrição" />
      <input v-model="project.budget" type="number" required placeholder="Budget" />
      <input v-model="project.startDate" type="date" required placeholder="Data Início" />
      <input v-model="project.endDate" type="date" required placeholder="Data fim" />
      <select v-model="project.clientId" id="clientId" required>
        <option v-for="client in clients" :key="client.id" :value="client.id">
          {{ client.name }}
        </option>
      </select>
      <div class="buttons_container">
        <button type="submit">Salvar</button>
        <button type="button" @click="goBack">Voltar</button>
      </div>
    </form>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, computed, type Ref } from "vue";
import { useRouter, useRoute } from "vue-router";
import { ProjectsService } from "../../../services/ProjectsService";
import type { Clients } from "../../../ts/types/Client";
import { ClientsService } from "../../../services/ClientsService";
import type { Project } from "../../../ts/types/Project";

const router = useRouter();
const route = useRoute();
const clients: Ref<Clients[]> = ref([]);
const project: Ref<Project> = ref({
  name: "",
  description: "",
  budget: 0,
  startDate: new Date(),
  endDate: new Date(),
  clientId: 0,
});

const id = Number(route.params.id);
const isEdit = computed(() => !!route.params.id);

const fetchClients = async () => {
  try {
    clients.value = await ClientsService.get();
  } catch (error) {
    console.error("Erro ao buscar clientes:", error);
  }
};

const fetchProject = async (id: number) => {
  try {
    project.value = await ProjectsService.getOne(id);
  } catch (error) {
    console.error("Erro ao buscar cliente", error);
  }
};

const saveProject = async () => {
  try {
    if (isEdit.value) {
      await ProjectsService.update(id, project.value);
    } else {
      await ProjectsService.create(project.value);
    }
    router.push("/projects");
  } catch (error) {
    console.error("Erro ao salvar projeto", error);
  }
};

const goBack = () => {
  router.back();
};

onMounted(() => {
  fetchClients();
  if (id) fetchProject(id);
});
</script>
