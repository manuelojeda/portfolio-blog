<template>
  <section class="col-12">
    <div class="table-responsive">
      <table class="table table-striped table-bordered table-hover">
        <thead>
          <tr>
            <th>
              ID
            </th>
            <th>
              Name
            </th>
            <th>
              Color
            </th>
            <th>
              Option
            </th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="(tag, index) in tags"
            :key="index"
          >
            <td>{{ tag.id }}</td>
            <td>{{ tag.name }}</td>
            <td :style="`background-color: ${tag.color};`">{{ tag.color }}</td>
            <td>
              <button class="btn btn-info mx-2" @click="handleEdit(tag)">
                Edit
              </button>
              <button class="btn btn-danger" @click="handleDelete(tag)">
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
