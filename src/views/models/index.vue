<template>
  <div class="flex flex-col w-full h-[1600px] bg-white">
    <div class="flex justify-center sticky top-0">
      <div class="w-full sm:w-[95%] h-[66px] flex bg-black cursor-pointer" @click="toggleCollapse">
            <span class="px-14 text-white flex items-center font-semibold text-xl">
              Mở bộ lọc
              <n-icon size="22" class="pl-3 ">
                <ChevronForward />
              </n-icon>
            </span>
      </div>
    </div>
    <div class="flex justify-center sticky top-16">
      <div v-if="collapseItem" class="bg-black w-full sm:w-[95%] h-[60px]">
        <Filter />
      </div>
    </div>

  </div>
</template>
<script setup lang="ts">
import { ChevronForward } from '@vicons/ionicons5'
import Filter from './filter/Filter.vue'
import { ref } from 'vue'

const collapseItem = ref<boolean>(false)

const toggleCollapse = () => {
  collapseItem.value = !collapseItem.value
}

</script>

<style scoped>
</style>