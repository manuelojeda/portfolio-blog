<template>
  <div class="admin-layout-grid">
    <div class="admin-layout-grid--sidebar">
      <div class="sidebar mt-3">
        <a href="/" class="title">
          <h4 class="text-center text-white">
            {{ appName }} <br/>
            <small>
              Administrator Mode
            </small>
          </h4>
        </a>

        <div class="menu px-4">
          <a href="/admin" class="menu--link">
            Dashboard
          </a>
        </div>
        <div class="menu px-4">
          <a href="/admin/blogs" class="menu--link">
            Blogs
          </a>
        </div>
        <div class="menu px-4">
          <a href="#" class="menu--link" @click="handleLogout">
            Logout
          </a>
        </div>
      </div>
      <form id="logout-form" action="/logout" method="POST" style="display: none;">
      </form>
    </div>
    <div class="admin-layout-grid--content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
// @ts-check
import axios from 'axios'

export default {
  name: 'AdminLayout',
  props: {
    appName: String
  },
  methods: {
    handleLogout () {
      axios.post('/logout')
        .then(() => {
          window.location.href = '/login'
        })
    }
  }
}
</script>

<style lang="scss" scoped>
.admin-layout-grid {
  display: grid;
  grid-template-columns: 250px 1fr;
  height: 100vh;

  .admin-layout-grid--sidebar {
    background-color: #015C83;

    .sidebar {
      position: fixed;
      width: 250px;
    }

    .menu {
      .menu--link {
        padding: .5rem;
        width: 100%;
        display: block;
        color: #FFF;
        transition: all ease .2s;
        border-radius: 7px;

        &:hover {
          background-color: #017BB0;
        }
      }
    }
  }
}
</style>
