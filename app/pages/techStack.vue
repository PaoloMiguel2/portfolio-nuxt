<script setup>
const url = useRequestURL()


const title = 'Tech Stack | Paolo Miguel Pugeda'
const description =
  'Technologies and tools used by Paolo Miguel Pugeda in software development and web development'


useHead({
  title,
  link: [{ rel: 'canonical', href: url.href }],
})


useSeoMeta({
  description,
  ogTitle: title,
  ogDescription: description,
  ogType: 'website',
  ogUrl: url.href,
  ogImage: `${url.origin}/images/java-logo.png`,
  ogImageAlt: 'Java Logo',
})
</script> 

<template> 


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