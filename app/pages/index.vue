
<script setup>
import { setupNavbar } from '~/assets/script';
import { onMounted } from 'vue'
onMounted(() => {
  setupNavbar()
})
</script>

<template>
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
  <div id="home-container" class="p-8">
    <div id="home-text">
      <p id="name-home" class="text-5xl text-center">I'm Paolo Miguel Pugeda</p>
      <p class="text-[25px] mt-[40px] text-center leading-relaxed">Aspiring Software Developer</p>
    </div>
 
    <div
      id="picture-index"
      class="relative flex w-[350px] h-[350px] shadow-[1px_1px_6px_rgb(18,18,18)] border-[3px] border-white rounded-[10px]"
    >
      <img
        src="/images/profile-pic.png"
        alt="Paolo Miguel Pugeda"
        class="w-[305px] absolute left-1/2 -translate-x-1/2"
      />
    </div>
  </div>
</template>