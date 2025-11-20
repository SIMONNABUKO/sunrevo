<template>
  <section class="section-shell space-y-16 pt-20 pb-24 reveal-on-scroll">
    <div class="glass-panel p-8 space-y-6">
      <p class="text-xs uppercase tracking-[0.6em] text-amber-300">What we do</p>
      <h2 class="text-3xl md:text-4xl font-semibold text-white">Comprehensive solar services, end to end.</h2>
      <p class="text-slate-200 leading-relaxed">
        From the first consultation to long-term maintenance, SunRevo Power curates every step with engineering discipline and customer-first communication. We pair premium products with transparent pricing so your investment delivers reliable power for years.
      </p>
      <div class="flex flex-wrap gap-4">
        <router-link to="/inquire" class="btn-accent px-5 py-3 rounded-full shadow-lg flex items-center gap-2">
          <i class="fa-solid fa-lightbulb"></i>
          Request a Quote
        </router-link>
        <router-link to="/contact" class="px-5 py-3 rounded-full border border-white/40 text-sm text-white hover:bg-white/10">Talk to our team</router-link>
      </div>
    </div>

    <div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      <article
        v-for="service in serviceList"
        :key="service.title"
        class="card-panel flex flex-col gap-4 p-6 border border-white/20"
      >
        <div class="flex items-center gap-3">
          <span class="text-2xl text-amber-300"><i :class="service.icon"></i></span>
          <div>
            <p class="text-sm uppercase tracking-[0.4em] text-slate-300">{{ service.focus }}</p>
            <h3 class="text-2xl text-white font-semibold">{{ service.title }}</h3>
          </div>
        </div>
        <p class="text-sm text-slate-200 leading-relaxed">{{ service.description }}</p>
        <ul class="space-y-2 text-slate-200 text-sm">
          <li v-for="point in service.highlights" :key="point">• {{ point }}</li>
        </ul>
      </article>
    </div>

    <div class="glass-panel p-8 space-y-8">
      <div class="flex items-center justify-between">
        <div>
          <p class="text-xs uppercase tracking-[0.6em] text-amber-300">Why SunRevo</p>
          <h2 class="text-3xl font-semibold text-white">The difference is in the details.</h2>
        </div>
        <p class="text-sm uppercase tracking-[0.4em] text-slate-300">Trusted partnerships</p>
      </div>
      <div class="grid gap-6 md:grid-cols-3">
        <article v-for="value in whyChoose" :key="value.title" class="flex flex-col gap-2 rounded-2xl border border-white/10 bg-white/5 p-4">
          <p class="text-xs uppercase tracking-[0.4em] text-amber-200">{{ value.title }}</p>
          <p class="text-sm text-slate-200 leading-relaxed">{{ value.description }}</p>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup>
const serviceList = [
  {
    title: 'Turnkey Installations',
    focus: 'Engineering',
    icon: 'fa-solid fa-screwdriver-wrench',
    description: 'Full solar, storage, and controls integration for homes, rooftops, commercial sites, and agriculture.',
    highlights: ['Site surveys & modeling', 'Quality components', 'Certified installers'],
  },
  {
    title: 'Solar Design & Consultation',
    focus: 'Planning',
    icon: 'fa-solid fa-ruler',
    description: 'Tailored system design based on real usage data, structures, and future growth assumptions.',
    highlights: ['Load analysis', 'Panel layout optimization', 'Permit support'],
  },
  {
    title: 'Maintenance & Monitoring',
    focus: 'Care',
    icon: 'fa-solid fa-heart-pulse',
    description: 'Preventive maintenance, remote diagnostics, and on-call technicians keep yield high.',
    highlights: ['Cleaning & inspections', 'SCADA & analytics', 'Rapid repairs'],
  },
  {
    title: 'Solar Sales & Equipment',
    focus: 'Products',
    icon: 'fa-solid fa-bolt',
    description: 'High-efficiency panels, batteries, inverters, and accessories sourced through trusted global suppliers.',
    highlights: ['Warranty-backed warranties', 'Technical guidance', 'Bulk & retail orders'],
  },
  {
    title: 'Water & Pumping Systems',
    focus: 'Agriculture',
    icon: 'fa-solid fa-water',
    description: 'Pumping, filtration, and drip irrigation tailored for farms and remote sites.',
    highlights: ['Off-grid controls', 'Smart sensors', 'Solar-powered desal'],
  },
  {
    title: 'Power Backup Solutions',
    focus: 'Resilience',
    icon: 'fa-solid fa-server',
    description: 'Hybrid systems that combine the grid with batteries to ride through outage windows.',
    highlights: ['Instant switchover', 'Bespoke control logic', 'Energy storage sizing'],
  },
];

const whyChoose = [
  {
    title: 'People',
    description: 'Our engineers are certified and field-tested, blending safety with modern PV practices.',
  },
  {
    title: 'Process',
    description: 'Structured delivery with progress reports, visual updates, and transparent pricing.',
  },
  {
    title: 'Product',
    description: 'We only work with trusted global brands to ensure longevity, even under coastal conditions.',
  },
];
</script>
