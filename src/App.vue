<template>
  <TelBar/>
  <NavBar/>
  <RouterView/>
  <Footer/>
</template>

<script setup>
import TelBar from './components/TelBar.vue';
import NavBar from './components/NavBar.vue';
import Footer from './components/Footer.vue';
</script>