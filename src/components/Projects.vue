<template>
  <section class="section-shell space-y-10 py-20 reveal-on-scroll">
    <div class="glass-panel p-8 space-y-3">
      <p class="text-xs uppercase tracking-[0.6em] text-amber-300">Case studies</p>
      <h2 class="text-3xl md:text-4xl font-semibold text-white">Deployments across Kenya</h2>
      <p class="text-slate-200 leading-relaxed">
        We work on residential rooftops, commercial campuses, and industrial microgrids. Every project includes monitoring, reporting, and handover documentation.
      </p>
    </div>
    <div class="grid gap-6 md:grid-cols-2">
      <article v-for="project in projectList" :key="project.title" class="card-panel flex flex-col overflow-hidden rounded-3xl border border-white/20 bg-white/5">
        <div class="relative h-60">
          <img :src="project.image" :alt="project.title" class="h-full w-full object-cover" />
          <div class="absolute bottom-4 left-4 bg-black/60 px-4 py-2 rounded-2xl text-xs uppercase tracking-[0.4em] text-white">{{ project.scale }}</div>
        </div>
        <div class="p-6 space-y-3">
          <div class="flex items-center justify-between text-sm text-slate-300">
            <span>{{ project.location }}</span>
            <span>{{ project.year }}</span>
          </div>
          <h3 class="text-2xl text-white font-semibold">{{ project.title }}</h3>
          <p class="text-sm text-slate-200 leading-relaxed">{{ project.summary }}</p>
          <div class="flex flex-wrap gap-3 text-xs uppercase tracking-[0.4em] text-amber-200">
            <span v-for="tag in project.tags" :key="tag" class="rounded-full border border-white/30 px-3 py-1">{{ tag }}</span>
          </div>
        </div>
      </article>
    </div>
  </section>
</template>

<script setup>
const projectList = [
  {
    title: 'Kongowea Distribution Hub',
    location: 'Mombasa',
    year: '2024',
    scale: 'Industrial',
    summary: 'A 60kW solar array powering loading bays, offices, and cold storage with automated monitoring.',
    tags: ['Solar + Storage', 'Remote Monitoring', 'Grid-tie'],
    image: new URL('../assets/ourservices4.jpg', import.meta.url).href,
  },
  {
    title: 'Kilifi Coastal Villas',
    location: 'Kilifi',
    year: '2023',
    scale: 'Hospitality',
    summary: 'Complete hybrid system with scenic panels, automatic battery backup, and smart controls.',
    tags: ['Hybrid', 'Luxury', 'Battery Bank'],
    image: new URL('../assets/ourservices2.png', import.meta.url).href,
  },
  {
    title: 'Kwale Irrigation Farm',
    location: 'Kwale',
    year: '2022',
    scale: 'Agriculture',
    summary: 'Solar-powered pumping system with telemetry to keep water flowing through the dry season.',
    tags: ['Off-grid', 'Pumps', 'Telemetry'],
    image: new URL('../assets/ourservices3.png', import.meta.url).href,
  },
  {
    title: 'Nairobi Tech Campus',
    location: 'Nairobi',
    year: '2024',
    scale: 'Commercial',
    summary: 'Distributed PV with rooftop trackers serving office towers and EV charging stations.',
    tags: ['Commercial PV', 'Trackers', 'EV Ready'],
    image: new URL('../assets/installation.jpg', import.meta.url).href,
  },
];
</script>
