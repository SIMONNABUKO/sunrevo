<template>
  <footer class="bg-slate-950 text-slate-200">
    <div class="section-shell grid gap-6 py-12 lg:grid-cols-3">
      <div class="space-y-3">
        <div class="flex items-center gap-3">
          <img src="../assets/sunrevo.jpeg" alt="Logo" class="h-12 w-12 rounded-2xl object-cover" />
          <div>
            <p class="text-sm uppercase tracking-[0.4em] text-amber-300">SunRevo</p>
            <p class="text-xs text-slate-400">Solar Power Company</p>
          </div>
        </div>
        <p class="text-sm text-slate-300 leading-relaxed">
          Affordable, reliable solar and storage solutions for Kenyan homes, farms, and businesses with 24/7 support.
        </p>
        <div class="flex items-center gap-3 text-xl text-amber-300">
          <a href="https://facebook.com" target="_blank" rel="noreferrer"><i class="fab fa-facebook"></i></a>
          <a href="https://instagram.com" target="_blank" rel="noreferrer"><i class="fab fa-instagram"></i></a>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer"><i class="fab fa-linkedin"></i></a>
        </div>
      </div>
      <div>
        <p class="text-sm uppercase tracking-[0.4em] text-amber-300">Navigation</p>
        <ul class="mt-4 space-y-2 text-sm text-slate-300">
          <li><router-link to="/" class="hover:text-white">Home</router-link></li>
          <li><router-link to="/services" class="hover:text-white">Services</router-link></li>
          <li><router-link to="/projects" class="hover:text-white">Projects</router-link></li>
          <li><router-link to="/about" class="hover:text-white">About</router-link></li>
          <li><router-link to="/contact" class="hover:text-white">Contact</router-link></li>
        </ul>
      </div>
      <div>
        <p class="text-sm uppercase tracking-[0.4em] text-amber-300">Contact</p>
        <div class="mt-4 space-y-2 text-sm text-slate-300">
          <p>MSA Rd, Nairobi • Kenya</p>
          <p>+254 780 818 238</p>
          <p>info@sunrevo.com</p>
        </div>
      </div>
    </div>
    <div class="border-t border-white/10 bg-slate-900 text-center py-4 text-xs text-slate-400">
      © {{ new Date().getFullYear() }} SunRevo Power. All rights reserved.
    </div>
  </footer>
</template>

<script setup>

</script>
