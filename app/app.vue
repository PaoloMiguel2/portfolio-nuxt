<script setup>
import { setupNavbar } from '~/assets/script';
import { onMounted } from 'vue'
onMounted(() => {
  setupNavbar()
})
</script>

<template>
  <div>
    <header>
        <NuxtLink to="/"><p>PMP</p></NuxtLink>
        <div class="nav">
        <NuxtLink to="/about"><p>About</p></NuxtLink>
        <NuxtLink to="/techStack"><p>Tech Stack</p></NuxtLink>
        <NuxtLink to="/certifications"><p>Certifications</p></NuxtLink>

        </div>
        <div id="burger" class="hidden text-[30px] text-[#F0F8FF]">☰</div>
    </header>
    <nav class="relative">
        <div id="menu"
           class="hidden fixed left-0 top-[70px] pb-[20px] pt-[20px] w-full z-50   bg-[rgb(17,17,18)] border-y border-black flex justify-center items-end">
            <div class="text-xl flex flex-col gap-12 items-center">
                <a href="about.html">
                    <p>About</p>
                </a>
                <a href="techStack.html">
                    <p>Tech Stack</p>
                </a>
                <a href="certifications.html">
                    <p>Certifications</p>
                </a>
            </div>
        </div>
    </nav>
  <NuxtPage/>
  </div>
</template>
