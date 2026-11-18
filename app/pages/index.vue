<script setup>
const url = useRequestURL()


const title = 'Home | Paolo Miguel Pugeda'
const description = 'Portfolio website of Paolo Miguel Pugeda'


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
  ogImage: `${url.origin}/images/profile-pic.png`,
  ogImageAlt: 'Picture of Paolo Miguel Pugeda',
})
</script> 

<template>
  
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