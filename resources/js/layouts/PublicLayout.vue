<template>
  <section class="main-container">
    <PartialHeader />
    <slot />
    <PartialFooter />
  </section>
</template>

<script setup>
import PartialHeader from '../Public/Components/PartialHeader/PartialHeader.vue'
import PartialFooter from '../Public/Components/PartialFooter.vue'

</script>
