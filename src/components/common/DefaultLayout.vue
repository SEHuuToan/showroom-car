<template>
  <div class="w-full flex  ">
    <div class="flex-1 flex flex-col items-center">
      <div class="top-0 w-full">
        <Header />
      </div>
      <div class="container">
        <router-view />
      </div>
      <div class="w-full bg-black pt-6">
        <Footer />
      </div>
    </div>
  </div>

</template>
<script setup lang="ts">
import Header from "./Header.vue";
import Footer from "./Footer.vue";
</script>
