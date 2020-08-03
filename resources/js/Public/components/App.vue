<template>
  <div>
    <partial-header></partial-header>
    <partial-home
      :personal="personal"
      class="mb-5"
    ></partial-home>
    <PartialFooter />
  </div>
</template>

<script>
import PartialFooter from '@/Public/components/PartialFooter.vue'

export default {
  name: 'app',
  props: {
    personal: Object
  },
  components: {
    PartialFooter
  }
}
</script>
