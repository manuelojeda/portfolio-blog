<template>
  <div>
    <admin-layout
      :app-name="appName"
    >
      <section class="container-fluid">
        <div class="row">
          <div class="col-12">
            <h1 class="mt-2 mb-4">Welcome to the Administrator mode</h1>

            <PersonalIndex :personal="personal" />
          </div>
        </div>
      </section>
    </admin-layout>
  </div>
</template>

<script setup>
import PersonalIndex from '@/Admin/components/Personal/Index.vue'

const props = defineProps({
  appName: String,
  personal: Object
})
</script>
