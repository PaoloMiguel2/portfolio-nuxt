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

     <p class="text-center text-[50px] relative top-[50px] [text-shadow:_1px_2px_20px_rgba(0,0,0,0.8)]">About</p>

    <p class="border-[rgb(91,87,87)] mb-[] bg-[rgb(52,52,54)] shadow-[1px_1px_6px_rgb(18,18,18)] relative top-[80px] mx-auto w-[90%] sm:w-[80%] md:w-[60%] lg:w-[50%] text-[18px] sm:text-[23px] md:text-[22px] lg:text-[25px] text-justify border-2  p-4 sm:p-6 md:p-10 rounded-[20px]">
        I’m passionate about technology and curious about how software shapes everyday experiences. I enjoy playing video games, which sparked my interest
         in how applications and systems are built behind the scenes. Exploring code, experimenting with designs, and learning new tools have become hobbies that continuously push me to improve my skills. I like solving 
         problems and finding creative ways to turn ideas into working solutions. Every project I work on is an opportunity to grow and better understand the world of development.

<br><br>Professionally, I aspire to become a software developer and eventually a software engineer who builds reliable, efficient, and user-friendly applications. 
I hope to work on projects that challenge me while allowing me to contribute meaningful solutions. My goal is to keep learning, improving, and creating software 
that makes a positive impact.</p>


</template>