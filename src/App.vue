<script setup>
import { ref } from 'vue'
import { RouterView } from 'vue-router'
</script>

<template>
  <header class="bg-slate-800">
    <div class=" mx-auto max-w-6xl py-10">
      <h1 class="text-4xl text-white font-extrabold">Administrador de Clientes</h1>
    </div>
  </header>
  <main class="max-w-6xl mx-auto  mt-10">
    <RouterView />
  </main>
</template>

<style>
.formkit-wrapper {
    max-width: 100%;
}
</style>
