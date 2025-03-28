<template>
  <div>
    <h1>Lista de Projetos</h1>

    <p v-if="projects.length === 0">Sem projetos cadastrados</p>
    <template v-else>
      <table>
        <thead>
          <tr>
            <th>Nome</th>
            <th>Data</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="project in projects" :key="project.id">
            <td>{{ project.name }}</td>
            <td>{{ formatDate(project.startDate) }} - {{ formatDate(project.endDate) }}</td>
            <td>
              <button @click="editProject(project.id)">Editar</button>
              <button @click="deleteProject(project.id)">Excluir</button>
            </td>
          </tr>
        </tbody>
      </table>
    </template>

    <div class="buttons_container">
      <button @click="goToCreateProject">Novo Projeto</button>
      <button type="button" @click="goBack">Voltar</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, type Ref } from "vue";
import { useRouter } from "vue-router";
import { ProjectsService } from "../../../services/ProjectsService";
import type { Projects } from "../../../ts/types/Project";
import formatDate from "../../../utils/formatDate"

const router = useRouter();
const projects: Ref<Projects[]> = ref([]);

const fetchProjects = async () => {
  try {
    projects.value = await ProjectsService.get();
  } catch (error) {
    console.error("Erro ao buscar projetos", error);
  }
};

const goBack = () => {
  router.back();
};

const goToCreateProject = () => {
  router.push("/projects/new");
};

const editProject = (id: number) => {
  router.push(`/projects/${id}/edit`);
};

const deleteProject = async (id: number) => {
  try {
    await ProjectsService.delete(id);
    await fetchProjects();
  } catch (error) {
    console.error("Erro ao excluir projeto", error);
  }
};

onMounted(fetchProjects);
</script>
