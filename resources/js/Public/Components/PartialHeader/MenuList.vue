<template>
  <ul class="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
    <li
      v-for="(item, index) in listItems"
      :key="index"
    >
      <a
        :href="item.url"
        class="block py-2 pr-4 pl-3 text-white bg-emerald-700 rounded mb-1 md:bg-transparent md:p-0 hover:text-emerald-400"
        aria-current="page"
      >
        {{ item.label }}
      </a>
    </li>
  </ul>
</template>

<script lang="ts" setup>
import LinkItem from "../../Interfaces/LinkItem";

const props = defineProps({
  listItems: Array as () => Array<LinkItem>
})
</script>
