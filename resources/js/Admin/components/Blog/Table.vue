<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-12 col-md-6 mb-3">
        <div class="float-left">
          <div class="input-group my-2">
            <div class="input-group-prepend">
              <div class="input-group-text mr-2">Search</div>
            </div>
            <input
              type="text"
              class="form-control"
              :value="filter"
              @input="$emit('update:filter', $event.target.value)"
              @keyup.enter="handlePageChanged(1)"
            >
            <button
              class="btn btn-primary"
              @click="handlePageChanged(1)"
            >
              Buscar
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
  <section class="table-responsive">
    <table class="table table-striped table-bordered table-hover">
      <thead>
        <tr>
          <th
            v-for="(field, index) in fields"
            :index="index"
          >
            {{ field.label }}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="(blog, index) in blogs"
          :index="index"
        >
          <td>{{ blog.title }}</td>
          <td>
            <span v-if="blog.publish === 1">
              Active
            </span>
            <span v-else>
              Inactive
            </span>
          </td>
          <td>{{ blog.created_at }}</td>
          <td>{{ blog.published_at }}</td>
          <td>
            <a
              :href="`/admin/blogs/${blog.id}/edit`"
              class="btn btn-info my-2"
            >
              Edit
            </a>
            <button
              class="btn m-2"
              :class="{ 'btn-warning': blog.publish === 1, 'btn-success': blog.publish === 0 }"
              @click="handleSetEntryStatus(blog)"
            >
              <span v-if="blog.publish === 1">
                Unpublish
              </span>
              <span v-else>
                Publish
              </span>
            </button>
            <button
              class="btn btn-danger my-2"
              @click="handleDestroyEntry(blog)"
            >
              Destroy
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </section>

  <nav>
    <ul class="pagination justify-content-center">
      <li class="page-item" :class="currentPage === 1 ? 'disabled' : null">
        <a class="page-link" href="#" @click="handlePageChanged(currentPage - 1)">Previous</a>
      </li>
      <li
        class="page-item" 
        v-for="(item, index) in lastPage"
        :index="index"
        :class="checkIfActive(index + 1)"
      >
        <a class="page-link" href="#" @click="handlePageChanged(index + 1)">{{ index + 1 }}</a>
      </li>
      <li class="page-item" :class="currentPage === lastPage ? 'disabled' : null">
        <a class="page-link" href="#" @click="handlePageChanged(currentPage + 1)">Next</a>
      </li>
    </ul>
  </nav>
</template>

<script setup>
import { ref } from 'vue';

const props = defineProps({
  blogs: Array,
  currentPage: Number,
  lastPage: Number,
  filter: String
})

const emits = defineEmits([
  'emitHandleSetEntryStatus',
  'emitHandleDestroyEntry',
  'emitHandlePageChanged',
  'update:filter'
])

const fields = [
  {
    label: 'Title',
    key: 'title'
  },
  {
    label: 'Status',
    key: 'status'
  },
  {
    label: 'Created at',
    key: 'created_at'
  },
  {
    label: 'Published at',
    key: 'published_at'
  },
  {
    label: 'Opciones',
    key: 'opciones'
  }
]

function handleSetEntryStatus (entry) {
  emits('emitHandleSetEntryStatus', entry)
}

function handleDestroyEntry (entry) {
  emits('emitHandleDestroyEntry', entry)
}

function handlePageChanged(page) {
  emits('emitHandlePageChanged', page)
}

function checkIfActive(page) {
  return page === props.currentPage ? 'active' : null
}
</script>
