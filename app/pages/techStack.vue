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

    <p class="text-center text-[50px] relative top-[50px] [text-shadow:_1px_2px_20px_rgba(0,0,0,0.8)]">Tech Stack</p>
    
    <div id="container-techstack">
        <div class="border-[3px] border-[rgb(91,87,87)] bg-[rgb(52,52,54)] h-[350px] w-[300px] relative rounded-[10px] m-[30px] shadow-[1px_1px_6px_rgb(18,18,18)] transition duration-[700ms] ease-in-out hover:scale-125"
            id="techStack-c">
            <img id="image-techStack" src="/images/c_logo.png">
            <p>C</p>
        </div>

        <div class="border-[3px] border-[rgb(91,87,87)]  bg-[rgb(52,52,54)] h-[350px] w-[300px] relative rounded-[10px] m-[30px] shadow-[1px_1px_6px_rgb(18,18,18)] transition duration-[700ms] ease-in-out hover:scale-125"
            id="techStack-c">
            <img id="image-techStack" src="/images/postgre_Log.png">
            <p>PostgreSQL</p>
        </div>

        <div class="border-[3px] border-[rgb(91,87,87)] bg-[rgb(52,52,54)] h-[350px] w-[300px] relative rounded-[10px] m-[30px] shadow-[1px_1px_6px_rgb(18,18,18)] transition duration-[700ms] ease-in-out hover:scale-125"
            id="techStack-c">
            <img id="image-techStack" src="/images/java-logo.png">
            <p>Java</p>
        </div>

        <div class="border-[3px] border-[rgb(91,87,87)] bg-[rgb(52,52,54)] h-[350px] w-[300px] relative rounded-[10px] m-[30px] shadow-[1px_1px_6px_rgb(18,18,18)] transition duration-[700ms] ease-in-out hover:scale-125"
            id="techStack-c">
            <img id="image-techStack" src="/images/html-logo.png">
            <p>HTML</p>
        </div>

        <div class="border-[3px] border-[rgb(91,87,87)] bg-[rgb(52,52,54)] h-[350px] w-[300px] relative rounded-[10px] m-[30px] shadow-[1px_1px_6px_rgb(18,18,18)] transition duration-[700ms] ease-in-out hover:scale-125"
            id="techStack-c">
            <img id="image-techStack" src="/images/css-logo.png">
            <p>CSS</p>
        </div>

        <div class="border-[3px] border-[rgb(91,87,87)] bg-[rgb(52,52,54)] h-[350px] w-[300px] relative rounded-[10px] m-[30px] shadow-[1px_1px_6px_rgb(18,18,18)] transition duration-[700ms] ease-in-out hover:scale-125"
            id="techStack-c">
            <img id="image-techStack" src="/images/js-logo.webp">
            <p>JavaScript</p>
        </div>

         <div class="border-[3px] border-[rgb(91,87,87)] bg-[rgb(52,52,54)] h-[350px] w-[300px] relative rounded-[10px] m-[30px] shadow-[1px_1px_6px_rgb(18,18,18)] transition duration-[700ms] ease-in-out hover:scale-125"
            id="techStack-c">
            <img id="image-techStack" src="/images/vscode-logo.png">
            <p>VS Code</p>
        </div>

         <div class="border-[3px] border-[rgb(91,87,87)] bg-[rgb(52,52,54)] h-[350px] w-[300px] relative rounded-[10px] m-[30px] shadow-[1px_1px_6px_rgb(18,18,18)] transition duration-[700ms] ease-in-out hover:scale-125"
            id="techStack-c">
            <img id="image-techStack" src="/images/git-logo.png">
            <p>Git</p>
        </div>

         <div class="border-[3px] border-[rgb(91,87,87)] bg-[rgb(52,52,54)] h-[350px] w-[300px] relative rounded-[10px] m-[30px] shadow-[1px_1px_6px_rgb(18,18,18)] transition duration-[700ms] ease-in-out hover:scale-125"
            id="techStack-c">
            <img id="image-techStack" src="/images/github-logo.png">
            <p>GitHub</p>
        </div>

    </div>
</template>