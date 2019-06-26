<template>
  <div class="row justify-content-center">
    <div class="col-12">
      <h1>
        Blog
        <small>Index</small>
      </h1>

      <div class="float-right">
        <a href="/admin/create" class="btn btn-primary">Create new blog entry</a>
      </div>
    </div>

    <div class="col-12">
      <b-table id="blogTable" striped responsive :items="blogs" :fields="fields">
        <template slot="options" slot-scope="data">
          <a :href="'/admin/'+data.item.id+'/edit/'" class="btn btn-info btn-outline-info">Edit</a>
        </template>
      </b-table>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    "blogs-props": String
  },
  data() {
    return {
      blogs: [],
      fields: {
        id: {
          label: "Id"
        },
        title: {
          label: "Title"
        },
        options: {
          label: "Options"
        }
      }
    };
  },
  created() {
    this.blogs = JSON.parse(this.blogsProps);
  }
};
</script>

