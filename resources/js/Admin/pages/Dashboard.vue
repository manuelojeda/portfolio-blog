<template>
  <div>
    <admin-layout
      :app-name="appName"
    >
      <section class="container max-w-6xl mx-auto">
        <h1 class="my-4 text-4xl">Welcome to the Administrator mode</h1>

        <PersonalIndex :personal="personal" />
      </section>
    </admin-layout>
  </div>
</template>

<script lang="ts" setup>
import PersonalIndex from '@/Admin/components/Personal/Index.vue'

const props = defineProps({
  appName: String,
  personal: Object
})
</script>
