<template>
  <section class="container" id="nav-scroller" ref="content">
    <Home :personal="home"></Home>
    <AboutComponent :text="about"></AboutComponent>
    <PortfolioComponent :text="portfolio"></PortfolioComponent>
    <ContactComponent :text="contact"></ContactComponent>
  </section>
</template>

<script setup>
import { useGlobalStore } from '@/stores/store';
import { computed } from 'vue';
import Home from '@/Public/components/Home.vue';
import AboutComponent from '@/Public/components/About.vue';
import PortfolioComponent from '@/Public/components/Portfolio.vue';
import ContactComponent from '@/Public/components/Contact.vue';

const props = defineProps({
  personal: Object
})

const store = useGlobalStore()
const home = computed(() => props.personal.data)
const about = computed(() => store.getJson.about)
const portfolio = computed(() => store.getJson.portfolio)
const contact = computed(() => store.getJson.contact)
</script>
