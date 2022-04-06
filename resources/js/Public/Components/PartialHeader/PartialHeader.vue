<template>
  <nav class=" border-gray-200 px-2 sm:px-4 py-2.5 rounded mt-8">
    <div class="container flex flex-wrap justify-between items-center mx-auto">
      <a href="/" class="flex">
        <span class="self-center text-xl font-semibold whitespace-nowrap text-emerald-500">Manuel Ojeda Blog</span>
      </a>
      <MobileButton />
      <div class="hidden w-full md:block md:w-auto ease-out duration-300" id="mobile-menu">
        <MenuList :list-items="listItems" />
      </div>
    </div>
  </nav>
</template>

<script lang="ts" setup>
import MobileButton from "./MobileButton.vue";
import MenuList from "./MenuList.vue";
import LinkItem from '../../Interfaces/LinkItem'

const listItems: Array<LinkItem> = [
  {
    url: '/',
    label: 'Inicio'
  },
  {
    url: '/acerca-de',
    label: 'Acerca de'
  },
  {
    url: '/portfolio',
    label: 'Portfolio'
  }
]
</script>
