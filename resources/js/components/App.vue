<template>
  <div>
    <partial-header></partial-header>
    <partial-home></partial-home>
  </div>
</template>

<script>
export default {
  name: "app",
  created() {
    $(document).ready(function() {
      $("a").on("click", function(event) {
        if (this.hash !== "") {
          event.preventDefault();

          var hash = this.hash;

          $("html, body").animate(
            {
              scrollTop: $(hash).offset().top
            },
            800,
            function() {
              window.location.hash = hash;
            }
          );
        }
      });
    });
  }
};
</script>