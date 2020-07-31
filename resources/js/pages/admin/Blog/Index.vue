<template>
  <div>
    <admin-layout
      :app-name="appName"
    >
      <b-container fluid>
        <b-row>
          <b-col cols="12">
            <h1 class="mt-2 mb-4">Blogs <small>Index</small></h1>
          </b-col>
          <b-col cols="12" class="mb-4">
            <div class="float-right">
              <a href="/admin/blogs/create" class="btn btn-primary">
                Create new entry
              </a>
            </div>
          </b-col>
          <b-col cols="12">
            <blogs-table
              :blogs="blogs"
              @emitHandleSetEntryStatus="handleSetEntryStatus"
              @emitHandleDestroyEntry="handleDestroyEntry"
            />
          </b-col>
        </b-row>
      </b-container>
    </admin-layout>
  </div>
</template>

<script>
// @ts-check
import axios from 'axios'
import { askAlert, simpleAlert } from '@/utils/alerts'

import BlogsTable from '@/components/admin/Blog/Table.vue'

export default {
  name: 'AdminDashboard',
  props: {
    appName: String,
    blogs: Array
  },
  components: {
    BlogsTable
  },
  methods: {
    async handleSetEntryStatus (entry) {
      const MSG = entry.publish === 1
        ? 'Do you want to unpublish the entry?'
        : 'Do you want to publish the entry?'

      const result = await askAlert(MSG)

      if (result.isConfirmed) {
        const status = entry.publish !== 1
        this.changeEntryStatus(entry.id, status)
      }
    },
    async changeEntryStatus (id, status) {
      const response = await axios({
        url: '/admin/blogs/setStatus',
        method: 'POST',
        data: {
          id,
          status
        }
      })

      if (response.data.band) {
        simpleAlert(
          response.data.text,
          response.data.icon,
          true
        )
      }
    },
    async handleDestroyEntry (entry) {
      const result = await askAlert('Do you want to destroy this entry?')

      if (result.isConfirmed) {
        const response = await axios({
          url: `/admin/blogs/${entry.id}`,
          method: 'DELETE'
        })

        if (response.data.band) {
          simpleAlert(
            response.data.text,
            response.data.icon,
            true
          )
        }
      }
    }
  }
}
</script>
