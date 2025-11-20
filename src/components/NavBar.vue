<template>
  <nav class="sticky top-0 z-40 border-b border-white/10 bg-white/20 backdrop-blur-xl shadow-lg">
    <div class="section-shell flex items-center justify-between py-4 gap-4">
      <router-link to="/" class="flex items-center gap-3">
        <img src="../assets/sunrevo.jpeg" alt="Sunrevo Logo" class="h-12 w-12 rounded-2xl object-cover ring-2 ring-amber-400" />
        <div class="leading-4">
          <p class="text-sm font-semibold tracking-[0.4em] text-amber-300 uppercase">SunRevo</p>
          <p class="text-xs text-slate-300">Solar Power Company</p>
        </div>
      </router-link>

      <button
        class="lg:hidden text-slate-100 bg-slate-900/70 px-3 py-2 rounded-2xl" 
        :class="{ 'bg-slate-950': isOpen }"
        @click="toggleMenu"
        aria-label="Toggle navigation menu"
      >
        <i :class="isOpen ? 'fa-solid fa-xmark' : 'fa-solid fa-bars'"></i>
      </button>

      <div class="hidden lg:flex lg:items-center lg:gap-8 text-sm text-slate-200 uppercase tracking-[0.3em]">
        <router-link v-for="item in navItems" :key="item.path" :to="item.path" class="transition hover:text-white">{{ item.label }}</router-link>
      </div>

      <router-link to="/inquire" class="hidden lg:flex items-center gap-2 btn-accent px-5 py-2 rounded-full shadow-lg">
        <i class="fa-solid fa-paper-plane"></i>
        <span>Inquire Now</span>
      </router-link>
    </div>

    <transition name="fade">
      <div v-show="isOpen" class="lg:hidden bg-white/90 backdrop-blur-xl border-t border-white/20 shadow-xl">
        <div class="flex flex-col gap-1 p-4 text-sm uppercase tracking-[0.4em]">
          <router-link
            v-for="item in navItems"
            :key="`mobile-${item.path}`"
            :to="item.path"
            class="py-3 px-2 rounded-xl text-slate-900 hover:bg-slate-200"
            @click="closeMenu"
          >
            {{ item.label }}
          </router-link>
          <router-link to="/inquire" class="mt-2 py-3 px-2 rounded-xl text-slate-900 bg-amber-200/80 text-center font-semibold" @click="closeMenu">
            Inquire Now
          </router-link>
        </div>
      </div>
    </transition>
  </nav>
</template>

<script setup>
import { ref } from 'vue';

const navItems = [
  { label: 'Home', path: '/' },
  { label: 'Services', path: '/services' },
  { label: 'Projects', path: '/projects' },
  { label: 'About', path: '/about' },
  { label: 'Contact', path: '/contact' },
];

const isOpen = ref(false);

const toggleMenu = () => {
  isOpen.value = !isOpen.value;
};

const closeMenu = () => {
  isOpen.value = false;
};
</script>
