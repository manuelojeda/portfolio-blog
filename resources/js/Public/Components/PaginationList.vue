<template>
  <div class="px-4 py-3 flex items-center justify-center border-gray-200 sm:px-6">
    <div>
        <nav class="relative z-0 inline-flex rounded-md shadow-sm -space-x-px" aria-label="Pagination">
          <a
            href="#"
            aria-current="page"
            class="z-10 bg-emerald-50 border-emerald-500 text-emerald-800 relative inline-flex items-center px-4 py-2 border text-sm font-medium"
            v-for="(link, index) in links"
            :key="index"
            :disabled="!link.url"
            :class="{ 'bg-emerald-600 text-emerald-50' : link.active  }"
            @click="getPaginatedBlogs(link.url)"
          >
            <span v-html="link.label" />
          </a>
        </nav>
      </div>
  </div>
</template>

<script lang="ts" setup>
import Link from "../Interfaces/Link";

const props = defineProps({
  links: Array as () => Array<Link>
})

const emits = defineEmits([
  'getPaginatedBlogs'
])

const getPaginatedBlogs = (url: string) => {
  if (url) {
    emits('getPaginatedBlogs', url)
  }
}
</script>
