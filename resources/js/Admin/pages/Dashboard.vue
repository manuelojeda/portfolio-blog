<template>
  <div>
    <admin-layout
      :app-name="appName"
    >
      <b-container fluid>
        <b-row>
          <b-col cols="12">
            <h1 class="mt-2 mb-4">Welcome to the Administrator mode</h1>

            <personal-index :personal="personal" />
          </b-col>
        </b-row>
      </b-container>
    </admin-layout>
  </div>
</template>

<script>
import PersonalIndex from '@/Admin/components/Personal/Index.vue'

export default {
  name: 'AdminDashboard',
  props: {
    appName: String,
    personal: Object
  },
  components: {
    PersonalIndex
  }
}
</script>
