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

      <div class="float-right">
        <div class="input-group mb-2">
          <div class="input-group-prepend">
            <div class="input-group-text mr-2">Search</div>
          </div>
          <input type="text" class="form-control" v-model="filtering">
        </div>
      </div>
    </div>

    <div class="col-12">
      <b-table
        id="blogTable"
        striped
        responsive
        :items="blogs"
        :fields="fields"
        show-empty
        :perPage="perPage"
        :currentPage="currentPage"
        :filter="filtering"
      >
        <template slot="options" slot-scope="data">
          <a :href="'/admin/'+data.item.id+'/edit/'" class="btn btn-info btn-outline-info">Edit</a>
          <a
            href="#"
            class="btn btn-success btn-outline-success"
            v-if="data.item.publish === 0"
            @click="setState(true, data.item)"
          >Publish</a>
          <a
            href="#"
            class="btn btn-warning btn-outline-warning"
            @click="setState(false, data.item)"
            v-else
          >Unpublish</a>
          <a
            href="#"
            @click="deleteEntry(data.item)"
            class="btn btn-danger btn-outline-danger"
          >Delete</a>
        </template>
      </b-table>
    </div>
    <div class="col-12">
      <div class="float-right">
        <b-pagination
          v-model="currentPage"
          :total-rows="blogs.length"
          :per-page="perPage"
          aria-controls="blogTable"
        ></b-pagination>
      </div>
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
      },
      perPage: 10,
      currentPage: 1,
      filtering: ""
    };
  },
  created() {
    this.blogs = JSON.parse(this.blogsProps);
  },
  methods: {
    setState(band, blog) {
      let text = "Do you want to publish this entry?";
      if (!band) {
        text = "Do you want to unpublish this entry?";
      }
      this.$swal({
        text,
        type: "question",
        showCancelButton: true,
        confirmButtonText: "Yes",
        cancelButtonText: "No"
      }).then(result => {
        if (result.value) {
          const data = {
            id: blog.id,
            band
          };

          const method = "POST";
          const url = "/admin/setState";

          this.$http({
            url,
            method,
            data
          }).then(response => {
            this.$swal({
              type: response.data.type,
              text: response.data.message,
              allowOutsideClick: false,
              allowEscapeKey: false
            }).then(() => {
              if (response.data.band) {
                window.location.reload();
              }
            });
          });
        }
      });
    },
    deleteEntry(blog) {
      this.$swal({
        text: "Are you sure to erase this entry? There is not turn back",
        type: "warning",
        showCancelButton: true,
        confirmButtonText: "Yes",
        cancelButtonText: "No"
      }).then(result => {
        if (result.value) {
          const method = "DELETE";
          const url = "/admin/" + blog.id;

          this.$http({
            url,
            method
          }).then(response => {
            this.$swal({
              type: response.data.type,
              text: response.data.message,
              allowOutsideClick: false,
              allowEscapeKey: false
            }).then(() => {
              if (response.data.band) {
                window.location.reload();
              }
            });
          });
        }
      });
    }
  }
};
</script>

<style scoped>
select {
  padding: 2px 10px;
  -webkit-appearance: menulist;
}
</style>

