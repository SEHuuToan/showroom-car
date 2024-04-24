<template>
  <div class="max-w-full h-[72px] flex flex-col sm:flex-row sm:h-[72px] justify-around bg-white ">
      <router-link to="/">
        <img class="w-[150px] h-[72px]" src="../../assets/images/logo.jpg" />
      </router-link>
    <div class="flex flex-col sm:flex-row sm:h-[72px]">
      <template v-for="item in renderMenu" :key="item">
        <div class="px-5 flex items-center hover:bg-gray-300/80 cursor-pointer"
             @click="selectMenu(item.key)"
        >
        <span class="font-semibold text-neutral-800 text-md">
          {{ item.label }}
        </span>
        </div>
      </template>
    </div>
    <div class="flex items-center ">
        <n-icon size="24" color="black" class="cursor-pointer" @click="searchTaskbar">
          <SearchOutline />
        </n-icon>
    </div>
  </div>
</template>

<script setup lang="ts">

import { onMounted, ref, watch } from 'vue'
import router from '@/router'
import { useRoute } from 'vue-router'
import { useHeaderStore } from '@/stores/commonFile'
import { renderMenu } from '@/components/constants/menu'
import { SearchOutline } from '@vicons/ionicons5'

const commonStore = useHeaderStore()
// const focus = ref<number>(1)

const selectMenu = (key: number) => {
  const item = renderMenu.find((it) => it.key === key)
  if (item) {
    router.push({ path: item.path })
  }
// focus.value = key
}
const searchTaskbar = () => {
  console.log('Hello search Button')
}

const route = useRoute()

watch(commonStore.getSelectedTab, () => {
  focus.value = commonStore.getSelectedTab()
})

onMounted(async () => {
  await router.isReady()
  let res = renderMenu.find(e => e.path === route.path)
  if (res != null) {
    selectMenu(res.key)
  }
})
</script>


<style scoped>

</style>