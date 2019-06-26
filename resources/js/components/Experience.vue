<template>
  <div id="experience" class="row">
    <div class="col-12">
      <h1 class="title">Experience</h1>
    </div>

    <div class="col-md-6 mb-3">
      <h2 class="text-center mb-3 animated fadeInUp">Education</h2>

      <div class="experience-card" v-for="(item, index) in education" :key="index">
        <h5 class="title">
          {{
          item.degree
          }}
          <br>
          <span>{{item.school}}</span>
        </h5>
        <span class="fromTo">{{item.from}} to {{item.to}}</span>
        <p class="text-justify">{{item.description}}</p>
      </div>
    </div>

    <div class="col-md-6 mb-3">
      <h3 class="text-center mb-3 animated fadeInUp">Professional</h3>
      <div class="experience-card" v-for="(item, index) in professional" :key="index">
        <h5 class="title">
          {{item.job}}
          <br>
          <span>{{item.at}}</span>
        </h5>
        <span class="fromTo">{{item.from}} to {{item.to}}</span>
        <p class="text-justify">Responsabilities:</p>
        <ul>
          <li v-for="(responsability, key) in item.responsabilities" :key="key">{{responsability}}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "experience",
  data() {
    return {
      education: null,
      professional: null
    };
  },
  created() {
    this.education = educationJson;
    this.professional = professionalJson;
  }
};
</script>