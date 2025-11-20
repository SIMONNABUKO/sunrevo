<template>
  <section class="section-shell py-20 reveal-on-scroll">
    <div class="glass-panel p-8 space-y-6 md:grid md:grid-cols-[1.1fr_0.9fr] md:gap-8">
      <div class="space-y-6">
        <p class="text-xs uppercase tracking-[0.6em] text-amber-300">Contact</p>
        <h2 class="text-3xl font-semibold text-white">Let us help you bring solar to your site.</h2>
        <p class="text-slate-200 leading-relaxed">
          We respond within a business day. Share your goals or questions and we will match the right engineer to your project.
        </p>
        <div class="space-y-4 text-sm text-slate-200">
          <div v-for="item in contactInfo" :key="item.title" class="flex items-start gap-3">
            <span class="text-amber-300 text-xl"><i :class="item.icon"></i></span>
            <div>
              <p class="font-semibold text-white">{{ item.title }}</p>
              <p class="text-slate-300">{{ item.value }}</p>
            </div>
          </div>
        </div>
      </div>
      <form class="flex flex-col gap-4" @submit.prevent>
        <input type="text" placeholder="Full name" class="contact-input" />
        <input type="email" placeholder="Email address" class="contact-input" />
        <input type="tel" placeholder="Phone number" class="contact-input" />
        <textarea rows="4" placeholder="What would you like to achieve?" class="contact-input"></textarea>
        <button class="btn-accent px-6 py-3 rounded-2xl text-sm uppercase tracking-[0.5em] shadow-lg">Send message</button>
      </form>
    </div>
  </section>
</template>

<script setup>
const contactInfo = [
  { title: 'Call', value: '+254 780 818 238', icon: 'fa-solid fa-phone' },
  { title: 'Email', value: 'info@sunrevo.com', icon: 'fa-solid fa-envelope' },
  { title: 'Office', value: 'MSA Rd, Nairobi', icon: 'fa-solid fa-map-marker-alt' },
];
</script>
