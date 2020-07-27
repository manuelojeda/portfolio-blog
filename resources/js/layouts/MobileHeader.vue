<template>
  <div class="container py-4 mobile-header">
    <b-row>
      <b-col cols="12">
        <slider
          :width="300"
          format="push"
          direction="left"
          :opacity="0.15"
          :links="links">
        </slider>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import Slider from '@jeremyhamm/vue-slider'

export default {
  name: 'MobileHeader',
  props: {
    header: Object
  },
  components: {
    Slider
  },
  computed: {
    links () {
      const headerLinks = Object.values(this.header)
      const links = headerLinks.map((link, index) => {
        return {
          id: index + 1,
          text: link.label,
          url: `/#${link.url}`
        }
      })

      links.push({
        id: 5,
        text: 'Blog',
        url: '/Blog'
      })
      links.push({
        id: 6,
        text: 'My CV',
        url: '/en/Manuel-Ojeda-CV.pdf'
      })
      links.push({
        id: 7,
        text: 'Dev.to',
        url: 'https://dev.to/manuelojeda'
      })
      links.push({
        id: 8,
        text: 'Twitter',
        url: 'https://twitter.com/darkjeda'
      })
      links.push({
        id: 9,
        text: 'Linked In',
        url: 'https://www.linkedin.com/in/manuel-alejandro-ojeda-ag%C3%BAndez-618753132/'
      })

      return links
    }
  }
}
</script>
