<template>
  <div class="mb-6 rounded-xl bg-gradient-to-r bg-white bg-gray-900 border border-gray-200 border-gray-700 p-2 sm:p-6 bg-gray-800">
    <nav aria-label="breadcrumb" class="flex">
      <ol class="breadcrumb inline-flex items-center space-x-1 md:space-x-3">
        <li class="breadcrumb-item inline-flex items-center">
          <HomeSvg />
          <a href="/" class="inline-flex items-center text-sm font-medium text-gray-700 hover:text-gray-900 text-gray-400 hover:text-white">Inicio</a>
        </li>
        <li
          class="breadcrumb-item active inline-flex items-center"
          aria-current="page"
        >
          <NextSvg />
          <span class="inline-flex items-center text-sm font-medium">
            {{ blog.title }}
          </span>
        </li>
      </ol>
    </nav>
  </div>
</template>

<script setup>
import HomeSvg from './HomeSvg.vue'
import NextSvg from './NextSvg.vue'

const props = defineProps({
  blog: Object
})
</script>

<style lang="scss" scoped>

</style>