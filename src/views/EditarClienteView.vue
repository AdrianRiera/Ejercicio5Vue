<script setup>
import  {onMounted, reactive, ref} from 'vue';
import ClienteService from '@/services/ClienteService.js';
import { useRouter, useRoute } from 'vue-router';
import RouterLink from '../components/UI/RouterLink.vue';
import Heading from '../components/UI/Heading.vue';
import { FormKit } from '@formkit/vue';


const router = useRouter();
const route = useRoute();

const {id}= route.params;

const formData = reactive({
    nombre: '',
    apellido: '',
    email: '',
    telefono: '',
    empresa: '',
    puesto: '',
    estado: null
});


onMounted(() => {
    if (id) {
        ClienteService.obtenerCliente(id)
            .then(response => {
                Object.assign(formData, response.data);
            })
            .catch(error => {
                console.error('Error al obtener cliente:', error);
            });
    }
});

defineProps({
  titulo: {
    type: String,

  }
});


const handleSubmit = (data) => {
    ClienteService.editarCliente(id, data)
        .then(response => {
            console.log('Cliente editado:', response.data);
            router.push('/');
        })
        .catch(error => {
            console.error('Error al editar cliente:', error);
        });
};
</script>


<template>
    <div>
        <div class=" flex justify-end">
            <RouterLink to='Inicio'>Inicio</RouterLink>
        </div>
        <Heading>{{ titulo }}</Heading>
        <div class="mx-auto mt-10 bg-white shadow">
            <div class="mx-auto md:w-2/3 py-20 px-6">
            
            <FormKit type="form" submit-label="Editar Cliente" @submit="handleSubmit">
                <FormKit type="text" name="nombre" label="Nombre"  placeholder="Nombre de Cliente" prefix-icon="avatarMan" v-model="formData.nombre"/>
                <FormKit type="text" name="apellido" label="Apellido"  placeholder="Apellido de Cliente" prefix-icon="avatarMan" v-model="formData.apellido"/>
                <FormKit type="email" name="email" label="Email" placeholder="Email de Cliente" prefix-icon="email" v-model="formData.email"/>
                <FormKit type="number" name="telefono" label="Teléfono" placeholder="Teléfono de Cliente" prefix-icon="telephone" v-model="formData.telefono"/>
                <FormKit type="text" name="empresa" label="Empresa" placeholder="Empresa de Cliente" prefix-icon="people" v-model="formData.empresa"/>
                <FormKit type="text" name="puesto" label="Puesto" placeholder="Puesto de Cliente" prefix-icon="people" v-model="formData.puesto"/>
                <FormKit type="checkbox" name="estado" label="Estado" placeholder="Estado de Cliente" prefix-icon="checkbox" v-model="formData.estado"/>



            </FormKit>
            </div>
        </div>

    </div>
</template>