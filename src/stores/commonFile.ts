import { defineStore } from 'pinia'
import {ref} from "vue";

export const useHeaderStore = defineStore('header', () => {
  const selectedTab = ref(0);
  const getSelectedTab = () => {
    return selectedTab.value
  }
  const setSelectedTab = (tabIndex: number) => {
    selectedTab.value = tabIndex;
    console.log(tabIndex)
  }

  return{
    getSelectedTab,
    setSelectedTab,
  }
})