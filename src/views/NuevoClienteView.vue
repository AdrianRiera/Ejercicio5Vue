<script setup>
import { ref, onMounted } from 'vue';
import ClienteService from '@/services/ClienteService.js';
import { useRouter, } from 'vue-router';
import RouterLink from '../components/UI/RouterLink.vue';
import Heading from '../components/UI/Heading.vue';
import { FormKit } from '@formkit/vue';


const router = useRouter();



defineProps({
  titulo: {
    type: String,

  }
});


const handleSubmit = (data) => {
    ClienteService.agregarCliente(data)
        .then(response => {
            console.log('Cliente agregado:', response.data);
            router.push('/');
        })
        .catch(error => {
            console.error('Error al agregar cliente:', error);
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
            <FormKit type="form" submit-label="Agregar Cliente" @submit="handleSubmit">
                <FormKit type="text" name="nombre" label="Nombre"  placeholder="Nombre de Cliente" prefix-icon="avatarMan" />
                <FormKit type="text" name="apellido" label="Apellido"  placeholder="Apellido de Cliente" prefix-icon="avatarMan" />
                <FormKit type="email" name="email" label="Email" placeholder="Email de Cliente" prefix-icon="email"/>
                <FormKit type="number" name="telefono" label="Teléfono" placeholder="Teléfono de Cliente" prefix-icon="telephone"/>
                <FormKit type="text" name="empresa" label="Empresa" placeholder="Empresa de Cliente" prefix-icon="people"/>
                <FormKit type="text" name="puesto" label="Puesto" placeholder="Puesto de Cliente" prefix-icon="people"/>
                <FormKit type="checkbox" name="estado" label="Estado" placeholder="Estado de Cliente" prefix-icon="checkbox"/>



            </FormKit>
            </div>
        </div>

    </div>
</template>

<style>

.formkit-wrapper {

    max-width: 100%;
}

[data-type="submit"] .formkit-input {
    margin-top: 25px;
}
[data-type="submit"] .formkit-input:hover {
    background-color: #4f46e5;
    color: white;
   
}
</style>