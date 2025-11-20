<template>
  <section class="section-shell py-20 reveal-on-scroll">
    <div class="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
      <div class="glass-panel p-8 space-y-6">
        <p class="text-xs uppercase tracking-[0.6em] text-amber-300">Request an inquiry</p>
        <h2 class="text-3xl font-semibold text-white">Tell us about the project you envision.</h2>
        <p class="text-slate-200 leading-relaxed">
          Drop details of your energy needs and we will pair you with an engineer & estimator who can deliver a personalized concept.
        </p>
        <div class="grid gap-4 md:grid-cols-2">
          <div v-for="item in highlightList" :key="item.title" class="rounded-2xl border border-white/10 bg-white/5 p-4">
            <p class="text-sm uppercase tracking-[0.4em] text-amber-200">{{ item.title }}</p>
            <p class="text-xl font-semibold text-white">{{ item.value }}</p>
          </div>
        </div>
      </div>
      <form class="glass-panel p-8 space-y-4" @submit.prevent>
        <input type="text" placeholder="Full name" class="contact-input" />
        <input type="email" placeholder="Work email" class="contact-input" />
        <input type="tel" placeholder="Phone number" class="contact-input" />
        <select class="contact-input">
          <option value="" disabled selected>Select a service</option>
          <option value="residential">Residential solar</option>
          <option value="commercial">Commercial microgrid</option>
          <option value="maintenance">Maintenance / Monitoring</option>
          <option value="other">Other</option>
        </select>
        <textarea rows="4" placeholder="Describe your site or goals" class="contact-input"></textarea>
        <button class="btn-accent px-6 py-3 rounded-2xl text-sm uppercase tracking-[0.5em] shadow-lg">Submit inquiry</button>
      </form>
    </div>
  </section>
</template>

<script setup>
const highlightList = [
  { title: 'response time', value: '24h' },
  { title: 'experienced crew', value: '25+' },
  { title: 'coverage', value: 'Kenya-wide' },
];
</script>
