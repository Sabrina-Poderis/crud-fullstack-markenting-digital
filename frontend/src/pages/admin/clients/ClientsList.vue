<template>
  <div>
    <h1>Lista de Clientes</h1>

    <p v-if="clients.length === 0">Sem clientes cadastrados</p>
    <template v-else>
      <table>
        <thead>
          <tr>
            <th>Nome</th>
            <th>Email</th>
            <th>Telefone</th>
            <th>Empresa</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="client in clients" :key="client.id">
            <td>{{ client.name }}</td>
            <td>{{ client.email }}</td>
            <td>{{ client.phone }}</td>
            <td>{{ client.company }}</td>
            <td>
              <button @click="editClient(client.id)">Editar</button>
              <button @click="deleteClient(client.id)">Excluir</button>
            </td>
          </tr>
        </tbody>
      </table>
    </template>

    <div class="buttons_container">
      <button @click="goToCreateClient">Novo Cliente</button>
      <button type="button" @click="goBack">Voltar</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, type Ref } from "vue";
import { useRouter } from "vue-router";
import { ClientsService } from "../../../services/ClientsService";
import type { Clients } from "../../../ts/types/Client";

const router = useRouter();
const clients: Ref<Clients[]> = ref([]);

const fetchClients = async () => {
  try {
    clients.value = await ClientsService.get();
  } catch (error) {
    console.error("Erro ao buscar clientes", error);
  }
};

const goBack = () => {
  router.push('/dashboard');
};

const goToCreateClient = () => {
  router.push("/clients/new");
};

const editClient = (id: number) => {
  router.push(`/clients/${id}/edit`);
};

const deleteClient = async (id: number) => {
  try {
    await ClientsService.delete(id);
    await fetchClients();
  } catch (error) {
    console.error("Erro ao excluir cliente", error);
  }
};

onMounted(fetchClients);
</script>
