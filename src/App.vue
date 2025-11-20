<template>
  <TelBar />
  <NavBar />
  <main class="page-wrapper">
    <RouterView />
  </main>
  <Footer />
</template>

<script setup>
import { nextTick, onBeforeUnmount, onMounted, watch } from 'vue';
import { useRoute } from 'vue-router';
import router from './router';
import TelBar from './components/TelBar.vue';
import NavBar from './components/NavBar.vue';
import Footer from './components/Footer.vue';

const route = useRoute();
let observer;

const observeSections = async () => {
  await router.isReady();
  await nextTick();
  document.querySelectorAll('.reveal-on-scroll').forEach((section) => {
    observer.observe(section);
    const rect = section.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      section.classList.add('is-visible');
    }
  });
};

onMounted(() => {
  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
        } else {
          entry.target.classList.remove('is-visible');
        }
      });
    },
    { threshold: 0.1, rootMargin: '-120px 0px -40px 0px' }
  );

  observeSections();
});

watch(
  () => route.fullPath,
  () => {
    observer?.disconnect();
    observeSections();
  }
);

onBeforeUnmount(() => {
  observer?.disconnect();
});
</script>
