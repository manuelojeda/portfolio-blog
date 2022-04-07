<template>
  <div class="input-group my-2">
    <input
      type="text"
      class="border border-black rounded-l"
      :value="filter"
      @input="$emit('update:filter', $event.target.value)"
      @keyup.enter="handlePageChanged(1)"
    >
    <button
      class="bg-blue-500 text-white px-5"
      @click="handlePageChanged(1)"
    >
      Buscar
    </button>
  </div>

  <section
    class="shadow-md sm:rounded-lg"
  >
    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
      <thead
        class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400"
      >
        <tr>
          <th
            class="px-6 py-3"
            v-for="(field, index) in fields"
            :index="index"
          >
            {{ field.label }}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr
          class="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
          v-for="(blog, index) in blogs"
          :index="index"
        >
          <td class="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">{{ blog.title }}</td>
          <td class="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
            <span v-if="blog.publish === 1" class="bg-green-500 text-white px-4 py-2 rounded">
              Active
            </span>
            <span v-else class="bg-red-700 text-white px-4 py-2 rounded">
              Inactive
            </span>
          </td>
          <td class="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">{{ blog.created_at }}</td>
          <td class="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">{{ blog.published_at }}</td>
          <td class="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
            <a
              :href="`/admin/blogs/${blog.id}/edit`"
              class="bg-cyan-300 text-white py-2 px-4 rounded mr-2"
            >
              Edit
            </a>
            <button
              class="py-2 px-4 rounded mr-2 text-white"
              :class="{ 'bg-yellow-500': blog.publish === 1, 'bg-green-500': blog.publish === 0 }"
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
              class="bg-red-700 text-white py-2 px-4 rounded mr-2"
              @click="handleDestroyEntry(blog)"
            >
              Destroy
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </section>
</template>

<script setup>
const props = defineProps({
  blogs: Array,
  currentPage: Number,
  filter: String,
  links: Array
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
