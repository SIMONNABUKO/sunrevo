<template>
  <section
    class="relative overflow-hidden reveal-on-scroll"
  >
    <div
      class="hero-glow absolute inset-0 opacity-60"
      :style="{ backgroundImage: `linear-gradient(120deg, rgba(251, 146, 60, 0.5), rgba(59, 130, 246, 0.2)), url(${heroImage})`, backgroundSize: 'cover' }"
    ></div>
    <div class="relative section-shell flex flex-col-reverse gap-10 lg:flex-row items-center min-h-[70vh] py-16">
      <div class="w-full lg:w-1/2 space-y-6">
        <p class="text-xs uppercase tracking-[0.6em] text-amber-300">Kenya's Trusted Solar Partner</p>
        <h1 class="text-4xl md:text-5xl lg:text-6xl font-semibold text-white leading-tight">
          Clean energy that keeps your lights on and your costs down.
        </h1>
        <p class="text-slate-200 text-lg md:text-xl leading-relaxed">
          SunRevo Solar Power designs intelligent photovoltaic systems for homes, businesses, and industrial complexes with premium products, engineering expertise, and hands-on service across Kenya.
        </p>
        <div class="flex flex-wrap items-center gap-4">
          <router-link to="/inquire" class="btn-accent px-6 py-3 rounded-full shadow-xl flex items-center gap-2">
            <i class="fa-solid fa-paper-plane"></i>
            <span>Book a Consultation</span>
          </router-link>
          <router-link to="/projects" class="text-white border border-white/40 px-6 py-3 rounded-full text-sm tracking-wide hover:border-white">
            Explore Projects
          </router-link>
        </div>
        <div class="grid grid-cols-2 gap-4 pt-4">
          <article
            v-for="stat in heroStats"
            :key="stat.label"
            class="p-4 bg-white/10 rounded-2xl border border-white/10"
          >
            <p class="text-3xl font-bold text-white">{{ stat.value }}</p>
            <p class="text-sm text-slate-200">{{ stat.label }}</p>
          </article>
        </div>
      </div>
      <div class="w-full lg:w-1/2 grid gap-4 md:grid-cols-2">
        <article v-for="highlight in heroHighlights" :key="highlight.title" class="card-panel p-5 flex flex-col gap-3 bg-white/10 text-slate-100 border-white/20">
          <div class="flex items-center gap-3">
            <span class="text-2xl text-amber-300"><i :class="highlight.icon"></i></span>
            <h3 class="text-lg font-semibold">{{ highlight.title }}</h3>
          </div>
          <p class="text-sm text-slate-300 leading-relaxed">{{ highlight.description }}</p>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup>
import heroImage from '../assets/hero2.jpg';

const heroStats = [
  { value: '120+', label: 'Projects delivered' },
  { value: '98%', label: 'Client satisfaction' },
  { value: '25+', label: 'Years of combined experience' },
  { value: '24/7', label: 'Support coverage' },
];

const heroHighlights = [
  {
    title: 'Hybrid Systems',
    icon: 'fa-solid fa-bolt',
    description: 'Seamlessly blend solar with batteries to stay powered through outages.',
  },
  {
    title: 'Smart Monitoring',
    icon: 'fa-solid fa-signal',
    description: 'Track energy generation, storage, and consumption from your phone.',
  },
  {
    title: 'Design Studio',
    icon: 'fa-solid fa-lightbulb',
    description: 'Tailored layouts, structural analysis, and energy audits for each site.',
  },
  {
    title: 'Aftercare Care',
    icon: 'fa-solid fa-handshake',
    description: 'Maintenance, warranty, and rapid-response support teams at the ready.',
  },
];
</script>
