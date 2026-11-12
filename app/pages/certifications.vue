<script setup>
import { onMounted } from 'vue'
import { imageView } from '~/assets/script.js';
onMounted(() => {
   imageView()
})
</script>


<template>
 


    <p id="certifications-text" class="text-center text-[50px] relative top-[50px] [text-shadow:_1px_2px_20px_rgba(0,0,0,0.8)]">
        Certifications</p>
    <div id="certifications-container" class="mt-[-100px]">

        <div id="certifications-card" class="java-certif">
        <img class="image-certifications cursor-pointer" src="/images/java_cert.png">
        <a href="https://www.certiport.com/portal/pages/credentialverification.aspx" target="_blank">
            <h1 class="border-[1px] text-center mt-[20px] bg-[rgb(17,17,18)] p-2 hover:bg-[rgba(187,193,199,0.46)]">VERIFY</h1>
        </a>
    </div>

    <div id="certifications-card" class="word-certif">
        <img class="image-certifications cursor-pointer" src="/images/word_cert.png">
        <a href="https://www.certiport.com/portal/pages/credentialverification.aspx" target="_blank">
            <h1 class="border-[1px] text-center mt-[20px] bg-[rgb(17,17,18)] p-2 hover:bg-[rgba(187,193,199,0.46)]">VERIFY</h1>
        </a>
    </div>

    <div id="certifications-card" class="excel-certif">
        <img class="image-certifications cursor-pointer" src="/images/excel_cert.png">
        <a href="https://www.certiport.com/portal/pages/credentialverification.aspx" target="_blank">
            <h1 class="border-[1px] text-center mt-[20px] bg-[rgb(17,17,18)] p-2 hover:bg-[rgba(187,193,199,0.46)]">VERIFY</h1>
        </a>
    </div>


        <div id="imageModal" class="fixed inset-0 hidden bg-black/80 flex items-center justify-center z-50">
            <img id="modalImg" class="max-w-[90%] max-h-[90%] rounded shadow-lg " >
        </div>

    </div>

    
</template>