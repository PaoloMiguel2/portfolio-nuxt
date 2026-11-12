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

      
<div class="aura aura-silver">
<div class="card bg-base-100 w-96 shadow-sm">
  <figure>
    <img
      src="/images/java_cert.png"
      />
  </figure>
  <div class="card-body bg-[#333131]">
    <h2 class="card-title justify-center">Java Certification</h2>
    <div class="card-actions justify-center mt-10">
      <a href="https://www.certiport.com/portal/pages/credentialverification.aspx" target="_blank"><button class="btn btn-primary w-80">Verify</button></a>
    </div>
  </div>
</div>

</div>

<div class="aura aura-silver">
 <div class="card bg-base-100 w-96 shadow-sm">
  <figure>
    <img
      src="/images/word_cert.png"
      />
  </figure>
  <div class="card-body bg-[#333131]">
    <h2 class="card-title justify-center">MS Word Certification</h2>
    <div class="card-actions justify-center mt-10">
      <a href="https://www.certiport.com/portal/pages/credentialverification.aspx" target="_blank"><button class="btn btn-primary w-80">Verify</button></a>
    </div>
  </div>
</div>   
</div>

<div class="aura aura-silver">
    <div class="card bg-base-100 w-96 shadow-sm">
  <figure>
    <img
      src="/images/excel_cert.png"
      />
  </figure>
  <div class="card-body bg-[#333131]">
    <h2 class="card-title justify-center">MS Excel Certification</h2>
    <div class="card-actions justify-center mt-10">
      <a href="https://www.certiport.com/portal/pages/credentialverification.aspx" target="_blank"><button class="btn btn-primary w-80">Verify</button></a>
    </div>
  </div>
</div>
</div>








        <div id="imageModal" class="fixed inset-0 hidden bg-black/80 flex items-center justify-center z-50">
            <img id="modalImg" class="max-w-[90%] max-h-[90%] rounded shadow-lg " >
        </div>

    </div>

    
</template>