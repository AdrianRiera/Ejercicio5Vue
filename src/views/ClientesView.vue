<script setup>
import { ref, onMounted, computed } from 'vue'
import ClienteService from '@/services/ClienteService.js'
import Heading from '@/components/UI/Heading.vue'
import RouterLink from '../components/UI/RouterLink.vue'
import Cliente from '../components/Cliente.vue'

// Props
defineProps({
  titulo: {
    type: String,
  },
})

// Estado
const clientes = ref([])

// Obtener clientes al montar el componente
onMounted(() => {
  ClienteService.obtenerClientes()
    .then(response => {
      clientes.value = response.data
    })
    .catch(error => {
      console.error('Error al obtener clientes:', error)
    })
})

// Computado para saber si hay clientes
const existenClientes = computed(() => clientes.value.length > 0)
</script>


<template>
    <div>
        <div class=" flex justify-end">
            <RouterLink to="agregar-cliente" >Agregar Cliente

            </RouterLink>
        </div>
        <Heading>{{ titulo }}</Heading>
        <div v-if="existenClientes" class="flow-root mx-auto  mt-10 p-5 bg-white shadow">
            <div class="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div class="min-w-full py-2 align-middle sm:px-6 lg:px-8">
                    <table class="min-w-full divide-y divide-gray-300">
                        <thead>
                        <tr>
                            <th scope="col" class="p-2 text-left text-sm font-extrabold text-gray-600">Nombre</th>
                            <th scope="col" class="p-2 text-left text-sm font-extrabold text-gray-600">Empresa</th>
                            <th scope="col" class="p-2 text-left text-sm font-extrabold text-gray-600">Estado</th>
                            <th scope="col" class="p-2 text-left text-sm font-extrabold text-gray-600">Acciones</th>
                        </tr>
                        </thead>
                        <tbody class="divide-y divide-gray-200 bg-white">
                        <Cliente v-for="cliente in clientes" :key="cliente.id"  :cliente="cliente">
                       
                        </Cliente>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
        <p v-else class="text-center mt-10">No hay clientes</p>

    </div>
</template>

