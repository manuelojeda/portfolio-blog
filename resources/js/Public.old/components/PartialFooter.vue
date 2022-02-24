<template>
  <footer class="footer mt-auto">
    <section class="container">
      <div class="grid">
        <div class="copyright">
          <p class="mb-0">
            Made by <b>Manuel Ojeda</b> to the 🌐 - © {{ currentYear }} -
            <span>
              Powered with:
              <i class="fab fa-vuejs"></i>
              and
              <i class="fab fa-laravel"></i>
            </span>
          </p>
        </div>
        <div class="social-media">
          <a href="https://dev.to/manuelojeda" class="mx-1" target="_blank" rel="noopener noreferrer">
            <i class="fab fa-dev"></i>
          </a>
          <a href="https://twitter.com/darkjeda" class="mx-1" target="_blank" rel="noopener noreferrer">
            <i class="fab fa-twitter"></i>
          </a>
          <a href="https://www.linkedin.com/in/manuel-alejandro-ojeda-ag%C3%BAndez-618753132/" class="mx-1" target="_blank" rel="noopener noreferrer">
            <i class="fab fa-linkedin"></i>
          </a>
        </div>
      </div>
    </section>
  </footer>
</template>

<script>
export default {
  name: 'PartialFooter',
  props: {
    currentYear: String
  }
}
</script>

<style lang="scss" scoped>
.footer {
  border-top: 2px solid #00c9b6;
  background-color: #f7f7f7;
  width: 100%;
  bottom: 0;
  font-family: 'Barlow', sans-serif;
  display: none;

  @media (min-width: 768px) {
    position: fixed;
    display: block;
  }
}
.grid {
  display: grid;
  padding: 1rem;
  grid-template-columns: 1fr;
  text-align: center;
  align-items: center;

  .social-media {
    display: none;

    a {
      color: #015C83;
    }
  }

  @media (min-width: 768px) {
    grid-template-columns: 1fr 25%;

    .copyright {
      text-align: left;
    }

    .social-media {
      display: block;
      text-align: right;
      font-size: 1.5rem;
    }
  }
}
</style>
