<template>
  <div>

    <div class="block">
      <div class="row">
        <div class="col-12 col-md-6 mb-3">
          <div class="float-left">
            Showing
            <select v-model="perPage">
              <option value="5">5</option>
              <option value="10">10</option>
              <option value="25">25</option>
              <option value="50">50</option>
            </select>
            entries
          </div>
        </div>

        <div class="col-12 col-md-6 mb-3">
          <div class="float-right">
            <div class="input-group mb-2">
              <div class="input-group-prepend">
                <div class="input-group-text mr-2">Search</div>
              </div>
              <input type="text" class="form-control" v-model="filter">
            </div>
          </div>
        </div>
      </div>
    </div>

    <b-table
      id="blog-table"
      striped
      bordered
      hover
      responsive
      :items="blogs"
      :fields="fields"
      :per-page="perPage"
      :current-page="currentPage"
      :filter="filter"
      show-empty
    >
      <template v-slot:cell(status)="blog">
        <span v-if="blog.item.publish === 1">
          Activo
        </span>
        <span v-else>
          Inativo
        </span>
      </template>
      <template v-slot:cell(opciones)="blog">
        <a
          :href="`/admin/blogs/${blog.item.id}/edit`"
          class="btn btn-info"
        >
          Edit
        </a>
        <button
          class="btn"
          :class="{ 'btn-warning': blog.item.publish === 1, 'btn-success': blog.item.publish === 0 }"
          @click="handleSetEntryStatus(blog.item)"
        >
          <span v-if="blog.item.publish === 1">
            Unpublish
          </span>
          <span v-else>
            Publish
          </span>
        </button>
        <button
          class="btn btn-danger"
          @click="handleDestroyEntry(blog.item)"
        >
          Destroy
        </button>
      </template>
    </b-table>

    <div class="block">
      <b-pagination
        align="right"
        v-model="currentPage"
        :total-rows="blogs.length"
        :per-page="perPage"
        aria-controls="blog-table"
      ></b-pagination>
    </div>
  </div>
</template>

<script>
// @ts-check
export default {
  name: 'AdminBlogTable',
  props: {
    blogs: Array
  },
  data () {
    return {
      fields: [
        {
          label: 'Title',
          key: 'title'
        },
        {
          label: 'Estado',
          key: 'status'
        },
        {
          label: 'Opciones',
          key: 'opciones'
        }
      ],
      currentPage: 1,
      perPage: 5,
      filter: null
    }
  },
  methods: {
    handleSetEntryStatus (entry) {
      this.$emit('emitHandleSetEntryStatus', entry)
    },
    handleDestroyEntry (entry) {
      this.$emit('emitHandleDestroyEntry', entry)
    }
  }
}
</script>
