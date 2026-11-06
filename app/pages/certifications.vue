<script setup>
import { onMounted } from 'vue'
import { setupNavbar } from '~/assets/script.js'
import { imageView } from '~/assets/script.js';
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


    <p id="certifications-text" class="text-center text-[50px] relative top-[50px] [text-shadow:_1px_2px_20px_rgba(0,0,0,0.8)]">
        Certifications</p>
    <div id="certifications-container" class="mt-[-100px]">

        <div id="certifications-card" class="java-certif">
        <img class="image-certifications cursor-pointer" src="/images/java_cert.png" @click="openModal('/images/java_cert.png')">
        <a href="https://www.certiport.com/portal/pages/credentialverification.aspx" target="_blank">
            <h1 class="border-[1px] text-center mt-[20px] bg-[rgb(17,17,18)] p-2 hover:bg-[rgba(187,193,199,0.46)]">VERIFY</h1>
        </a>
    </div>

    <div id="certifications-card" class="word-certif">
        <img class="image-certifications cursor-pointer" src="/images/word_cert.png" @click="openModal('/images/word_cert.png')">
        <a href="https://www.certiport.com/portal/pages/credentialverification.aspx" target="_blank">
            <h1 class="border-[1px] text-center mt-[20px] bg-[rgb(17,17,18)] p-2 hover:bg-[rgba(187,193,199,0.46)]">VERIFY</h1>
        </a>
    </div>

    <div id="certifications-card" class="excel-certif">
        <img class="image-certifications cursor-pointer" src="/images/excel_cert.png" @click="openModal('/images/excel_cert.png')">
        <a href="https://www.certiport.com/portal/pages/credentialverification.aspx" target="_blank">
            <h1 class="border-[1px] text-center mt-[20px] bg-[rgb(17,17,18)] p-2 hover:bg-[rgba(187,193,199,0.46)]">VERIFY</h1>
        </a>
    </div>


        <div id="imageModal" class="fixed inset-0 hidden bg-black/80 flex items-center justify-center z-50">
            <img id="modalImg" class="max-w-[90%] max-h-[90%] rounded shadow-lg " >
        </div>

    </div>

    
</template>