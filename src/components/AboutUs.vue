<template>
  <section class="section-shell space-y-10 py-20 reveal-on-scroll">
    <div class="glass-panel p-10 space-y-6">
      <p class="text-xs uppercase tracking-[0.6em] text-amber-300">About SunRevo Power</p>
      <h2 class="text-3xl md:text-4xl font-semibold text-white">We are a Kenyan solar team delivering confident energy.</h2>
      <p class="text-slate-200 leading-relaxed">
        Our story began with a focus on solar lighting and has grown into a multidisciplinary solar studio. We blend technical design, premium installations, and empathetic service so every customer feels informed and supported.
      </p>
    </div>
    <div class="grid gap-6 md:grid-cols-2">
      <article
        v-for="value in valuePillars"
        :key="value.title"
        class="glass-panel p-6 space-y-3"
      >
        <h3 class="text-2xl text-white font-semibold">{{ value.title }}</h3>
        <p class="text-sm text-slate-200 leading-relaxed">{{ value.description }}</p>
        <div class="text-xs uppercase tracking-[0.4em] text-amber-300">{{ value.metric }}</div>
      </article>
    </div>
    <div class="glass-panel p-8">
      <h3 class="text-2xl text-white font-semibold mb-4">Journey highlights</h3>
      <div class="grid gap-4 md:grid-cols-3">
        <div v-for="milestone in timeline" :key="milestone.title" class="rounded-2xl border border-white/10 bg-white/5 p-4 text-sm text-slate-200">
          <p class="text-amber-300 text-xs uppercase tracking-[0.4em]">{{ milestone.year }}</p>
          <p class="font-semibold text-white">{{ milestone.title }}</p>
          <p class="leading-snug">{{ milestone.detail }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const valuePillars = [
  {
    title: 'Trusted Expertise',
    description: 'Our engineers are certified, experienced with coastal climates, and routinely trained on safety protocols.',
    metric: '25+ field specialists',
  },
  {
    title: 'Responsible Delivery',
    description: 'We document every installation, run structural analyses, and conduct full client walkthroughs.',
    metric: '100% compliance',
  },
  {
    title: 'Customer Care',
    description: 'Live monitoring, quick-response repairs, and scheduled maintenance keep systems healthy.',
    metric: '24/7 support',
  },
  {
    title: 'Sustainable Growth',
    description: 'Partnerships with suppliers and NGOs ensure accessible solutions for homes and institutions.',
    metric: '20 communities served',
  },
];

const timeline = [
  { year: '2010', title: 'Founding', detail: 'Started as a solar lighting provider in Mombasa, bringing clean tech to homes.' },
  { year: '2015', title: 'Expansion', detail: 'Grew into bespoke rooftop design and commercial microgrids across the coast.' },
  { year: '2022', title: 'Innovation', detail: 'Launched hybrid backup and agricultural pumping offerings with smart telemetry.' },
];
</script>
