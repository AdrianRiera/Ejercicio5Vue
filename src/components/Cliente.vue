<script setup>
import EditarClienteView from '@/views/EditarClienteView.vue';
import { computed } from 'vue';
import { RouterLink } from 'vue-router';


defineEmits(['actualizar-estado', 'eliminar-cliente']);

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
  return Props.cliente.estado;
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
            
            <button
              class="inline-flex rounded-full px-2 text-xs font-semibold leading-5"
              :class="[estadoCliente ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800']"
              @click="$emit('actualizar-estado', { id: cliente.id, estado: cliente.estado })"
            >
              {{ estadoCliente ? 'Activo' : 'Inactivo' }}
            </button>
        </td>
        <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500 ">
            <router-link :to="{name: 'editar-cliente', params: { id: cliente.id }}" class="text-indigo-600 hover:text-indigo-900 mr-5">Editar</router-link>

            <button class="text-red-600 hover:text-red-900 cursor-pointer"
            @click="$emit('eliminar-cliente', cliente.id)"
            >Eliminar</button>
        </td>
    </tr>
</template>

