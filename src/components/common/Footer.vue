<template>
  <footer class="w-full h-[300px] bg-black z-40 flex flex-col items-center">
    <div class="w-[1300px] flex flex-col">
      <div class="flex flex-wrap justify-end cursor-pointer text-white hover:text-zinc-300">
        <span @click="scrollToTop">
          Trở lại đầu trang
          <n-icon size="16">
            <ChevronUp />
          </n-icon>
        </span>
      </div>
      <div class="mt-4  flex flex-col sm:flex-row justify-center">
        <template v-for="item in renderMenu" :key="item">
          <div class="cursor-pointer mt-1 ml-5 text-white hover:text-zinc-300" @click="selectMenu(item.key)">
            <span class="font-bold text-lg px-5">
              {{ item.label }}
            </span>
          </div>
        </template>
      </div>
      <div class="p-6 space-x-12 flex justify-end items-center">
        <a href="https://www.facebook.com/kind.master.73/" target="_blank">
          <n-icon size="40">
            <LogoFacebook />
          </n-icon>
        </a>
        <a href="https://www.youtube.com/channel/UC2hojR3QEWMrOirGv80RPVw" target="_blank">
          <n-icon size="40">
            <LogoYoutube />
          </n-icon>
        </a>
        <a href="https://www.instagram.com/" target="_blank">
          <n-icon size="40">
            <LogoInstagram />
          </n-icon>
        </a>
        <a href="https://www.linkedin.com/" target="_blank">
          <n-icon size="40">
            <LogoLinkedin />
          </n-icon>
        </a>
      </div>
      <div class="flex items-center space-x-2 justify-center">
        <n-icon>
          <CopyrightRegular class="text-white" />
        </n-icon>
        <span class="text-white">Bản quyền thuộc về Auto Car Dealer 2024.</span>
      </div>
    </div>
  </footer>
</template>
<script setup lang="ts">
import { ChevronUp, LogoFacebook, LogoYoutube, LogoInstagram, LogoLinkedin } from '@vicons/ionicons5'
import { CopyrightRegular } from '@vicons/fa'
import { renderMenu } from '@/components/constants/menu'
import { useHeaderStore } from '@/stores/commonFile'
import router from "@/router";

const commonStore = useHeaderStore();
const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
}
const selectMenu = (key: number) => {
  const item = renderMenu.find((it) => it.key === key)
  if (item) {
    commonStore.setSelectedTab(item.key);
    router.push({path: item.path})
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }
}
</script>
<style scoped>

</style>