<script setup>
import { computed } from 'vue';
import { RouterLink } from 'vue-router';


const Props = defineProps({
  cliente: {
    type: Object,
    required: true
  }
})

const nombreCliente = computed(() => {
  return `${Props.cliente.nombre} ${Props.cliente.apellido}`;
});

const estadoCliente = computed(() => {
  return Props.cliente.estado ? 'Activo' : 'Inactivo';
});
</script>

<template>
    <tr>
        <td class="whitespace-nowrap py-4 pl-4 pr-3 text-sm sm:pl-0">
            <p class="font-medium text-gray-900">{{ nombreCliente }}</p>
            <p class="text-gray-500">{{ cliente.email }}</p>
        </td>
        <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
            <p class="text-gray-900 font-bold">{{ cliente.empresa }}</p>
            <p class="text-gray-600">{{ cliente.puesto }}</p>
        </td>
        <td class="whitespace-nowrap px-3 py-4 text-sm">
            <p class="text-gray-900 font-bold">{{ estadoCliente }}</p>
        </td>
        <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500 ">
            <router-link to="/" class="text-indigo-600 hover:text-indigo-900 mr-5">Editar</router-link>

            <button class="text-red-600 hover:text-red-900">Eliminar</button>
        </td>
    </tr>
</template>


<style scoped>

</style>