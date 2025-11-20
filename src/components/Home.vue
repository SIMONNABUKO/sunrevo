<template>
  <Hero />
  <section class="section-shell space-y-20 pb-20 pt-16 reveal-on-scroll">
    <div class="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
      <div class="glass-panel p-8 space-y-6">
        <p class="text-sm uppercase tracking-[0.6em] text-amber-300">About SunRevo</p>
        <h2 class="text-3xl md:text-4xl font-semibold text-white leading-tight">
          We design, install, and care for solar energy systems that power modern Kenyan lives.
        </h2>
        <p class="text-slate-200 leading-relaxed">
          SunRevo Solar Power launched as a lighting-focused team and has grown into one of Mombasa's most trusted renewable energy partners. From residential rooftops to industrial microgrids, we balance affordability with innovation so every project lowers costs and carbon footprints.
        </p>
        <div class="grid gap-4 sm:grid-cols-3">
          <article v-for="stat in homeStats" :key="stat.label" class="p-4 bg-white/5 rounded-2xl border border-white/10">
            <p class="text-2xl font-bold text-white">{{ stat.value }}</p>
            <p class="text-xs uppercase tracking-[0.4em] text-slate-300">{{ stat.label }}</p>
          </article>
        </div>
      </div>
      <div class="glass-panel p-6 space-y-6">
        <h3 class="text-2xl font-semibold text-white">What we offer</h3>
        <div class="space-y-4">
          <article
            v-for="item in capabilityTiles"
            :key="item.title"
            class="flex items-start gap-4 rounded-2xl border border-white/10 bg-white/5 p-4"
          >
            <span class="text-2xl text-amber-300"><i :class="item.icon"></i></span>
            <div>
              <p class="font-semibold text-white">{{ item.title }}</p>
              <p class="text-sm text-slate-300 leading-relaxed">{{ item.description }}</p>
            </div>
          </article>
        </div>
      </div>
    </div>

    <div>
      <div class="flex items-center justify-between mb-6">
        <div>
          <p class="text-xs uppercase tracking-[0.6em] text-amber-300">Solutions</p>
          <h3 class="text-3xl font-semibold text-white">Tailored packages</h3>
        </div>
        <router-link to="/services" class="text-amber-200 hover:text-white text-sm tracking-[0.4em] uppercase">View Services</router-link>
      </div>
      <div class="grid gap-6 lg:grid-cols-3 md:grid-cols-2">
        <article
          v-for="(service, index) in serviceHighlights"
          :key="service.title"
          class="card-panel p-6 space-y-4 border border-white/20"
        >
          <div class="flex items-center justify-between text-sm uppercase tracking-[0.5em] text-amber-300">
            <span>{{ service.category }}</span>
            <span class="text-xs">{{ service.duration }}</span>
          </div>
          <h4 class="text-xl text-white font-semibold">{{ service.title }}</h4>
          <p class="text-sm text-slate-200 leading-relaxed">{{ service.description }}</p>
          <div class="flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-amber-200">
            <i class="fa-solid fa-circle"></i>
            <span>{{ service.detail }}</span>
          </div>
        </article>
      </div>
    </div>

    <div class="space-y-8">
      <div class="flex items-center justify-between">
        <div>
          <p class="text-xs uppercase tracking-[0.6em] text-amber-300">Projects</p>
          <h3 class="text-3xl font-semibold text-white">Recent deployments</h3>
        </div>
        <router-link to="/projects" class="text-sm uppercase tracking-[0.4em] text-slate-200 hover:text-white">See all</router-link>
      </div>
      <div class="grid gap-6 md:grid-cols-2">
        <article v-for="project in projectGallery" :key="project.title" class="flex flex-col overflow-hidden rounded-3xl border border-white/20 bg-white/5 shadow-2xl">
          <img :src="project.image" :alt="project.title" class="h-56 w-full object-cover" />
          <div class="p-6 space-y-3">
            <div class="flex items-center justify-between text-sm text-slate-300">
              <span>{{ project.location }}</span>
              <span>{{ project.size }}</span>
            </div>
            <h4 class="text-2xl text-white font-semibold">{{ project.title }}</h4>
            <p class="text-sm text-slate-200 leading-relaxed">{{ project.summary }}</p>
          </div>
        </article>
      </div>
    </div>

    <div class="cta-band flex flex-col gap-4 rounded-3xl border border-white/20 bg-gradient-to-r from-slate-900/60 to-slate-800/60 p-8 text-center shadow-2xl">
      <p class="text-sm uppercase tracking-[0.6em] text-amber-300">Ready to switch</p>
      <h3 class="text-3xl font-semibold text-white">Schedule a site survey and start saving today.</h3>
      <div class="flex flex-wrap items-center justify-center gap-4">
        <router-link class="btn-accent px-6 py-3 rounded-full shadow-xl" to="/inquire">Start a Quote</router-link>
        <router-link class="px-6 py-3 rounded-full border border-white/30 text-sm text-white hover:text-white" to="/contact">Talk to a Specialist</router-link>
      </div>
    </div>
  </section>
</template>

<script setup>
import Hero from './Hero.vue';

const homeStats = [
  { value: '25+', label: 'Expert technicians' },
  { value: '100+kWh', label: 'Daily energy delivery' },
  { value: '40', label: 'Cities served' },
];

const capabilityTiles = [
  {
    title: 'Residential solar',
    description: 'Rooftop and backyard setups designed for family homes and estates with smart storage.',
    icon: 'fa-solid fa-house-chimney',
  },
  {
    title: 'Commercial microgrids',
    description: 'Reliable solar + battery arrays for schools, hotels, and manufacturing with remote monitoring.',
    icon: 'fa-solid fa-building',
  },
  {
    title: 'Water & irrigation',
    description: 'Solar-powered pumping and filtration tailored for farms and estates to reduce diesel usage.',
    icon: 'fa-solid fa-water',
  },
];

const serviceHighlights = [
  {
    title: 'Complete solar installation',
    description: 'We coordinate engineering, procurement, and installation so every component fits seamlessly.',
    category: 'DELIVERY',
    duration: '2-6 weeks',
    detail: 'Panels • Inverters • Mounting',
  },
  {
    title: 'Design review + optimization',
    description: 'Optimized layouts, structural checks, and sun-path analysis ensure maximum yield.',
    category: 'DESIGN',
    duration: '1-2 weeks',
    detail: 'Shadow analysis • Elevations',
  },
  {
    title: 'Maintenance & performance',
    description: 'Routine servicing, remote monitoring, and responsive technicians keep systems healthy.',
    category: 'CARE',
    duration: 'Ongoing',
    detail: 'Cleaning • Diagnostics • Repairs',
  },
];

const projectGallery = [
  {
    title: 'Kilifi Resort Microgrid',
    location: 'Kilifi / 12kW',
    size: 'Hybrid + Storage',
    summary: 'A solar + battery array powering villas and spa services while cutting costs 70%.',
    image: new URL('../assets/ourservices4.jpg', import.meta.url).href,
  },
  {
    title: 'Mombasa Industrial Park',
    location: 'Mombasa / 48kW',
    size: 'Commercial plant',
    summary: 'High-output panels paired with monitoring for the factory line and offices.',
    image: new URL('../assets/ourservices2.png', import.meta.url).href,
  },
  {
    title: 'Rural Water Pump',
    location: 'Kwale / 8kW',
    size: 'Autonomous pump',
    summary: 'Off-grid irrigation system with intelligent controls and remote alerts.',
    image: new URL('../assets/ourservices3.png', import.meta.url).href,
  },
];
</script>
