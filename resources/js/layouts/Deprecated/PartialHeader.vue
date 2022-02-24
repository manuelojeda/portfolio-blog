<template>
  <div id="header">
    <desktop-header :header="header" />
  </div>
</template>

<script setup>
import DesktopHeader from './DesktopHeader'
import { useGlobalStore } from '../stores/store'
import { computed } from 'vue'

const store = useGlobalStore()
const header = computed(() => store.getJson.header)
</script>

<style lang="scss" scoped>
#header {
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 999;
  background-color: #fff;
  border-bottom: 2px solid #00c9b6;
}
</style>
