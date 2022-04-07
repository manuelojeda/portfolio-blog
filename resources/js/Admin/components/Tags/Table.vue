<template>
  <section>
    <div>
      <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th class="px-6 py-3">
              ID
            </th>
            <th class="px-6 py-3">
              Name
            </th>
            <th class="px-6 py-3">
              Color
            </th>
            <th class="px-6 py-3">
              Option
            </th>
          </tr>
        </thead>
        <tbody>
          <tr
            class="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
            v-for="(tag, index) in tags"
            :key="index"
          >
            <td class="px-6 py-4 ">{{ tag.id }}</td>
            <td class="px-6 py-4 ">{{ tag.name }}</td>
            <td class="px-6 py-4 text-black" :style="`background-color: ${tag.color};`">{{ tag.color }}</td>
            <td class="px-6 py-4 ">
              <button class="bg-cyan-400 text-black px-4 py-2 mr-2 rounded" @click="handleEdit(tag)">
                Edit
              </button>
              <button class="bg-red-600 text-black px-4 py-2 mr-2 rounded" @click="handleDelete(tag)">
                Delete
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </section>
</template>

<script setup>
const props = defineProps({
  tags: Array
})

const emits = defineEmits([
  'handleEditableTag',
  'handleDeletableTag'
])

function handleEdit (tag) {
  emits('handleEditableTag', tag)
}
function handleDelete (tag) {
  emits('handleDeletableTag', tag)
}
</script>
