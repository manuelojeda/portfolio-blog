<template>
  <div>
    <PartialHeader />
    <PartialHome
      :personal="personal"
      class="mb-5"
    ></PartialHome>
    <PartialFooter :current-year="currentYear" />
  </div>
</template>

<script setup>
import PartialFooter from '@/Public/components/PartialFooter.vue'
import PartialHeader from '@/layouts/PartialHeader.vue'
import PartialHome from '@/layouts/PartialHome.vue';

const props = defineProps({
  personal: Object,
  currentYear: Number
})
</script>
