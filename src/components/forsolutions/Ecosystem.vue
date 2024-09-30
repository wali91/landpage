<template>
 <div class="container-fluid pt-5 pb-5">
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-6">
        <img class="ecosystem" src="@/assets/public/ecosystem.png" height="450">
      </div>
      <div class="col-5 text-left introduction">
        <h2 class="title">{{ $t('solution_page.Ecosystem.Title') }}</h2>
        <p>{{ $t('solution_page.Ecosystem.Paragraphone') }}</p>
        <p>{{ $t('solution_page.Ecosystem.Paragraphtwo') }}</p>
        <div class="buttons pt-4">
          <a class="btn" href="#" role="button">{{ $t('solution_page.Ecosystem.Register') }}</a>
          <a class="btn ms-3" @click="toFormpage" role="button">{{ $t('solution_page.Ecosystem.Talk') }}</a>
        </div>
      </div>
    </div>
    <div class="row informations justify-content-center">
      <div class="col-3">
        <img src="@/assets/public/customerengagement.gif" height="100" width="100">
        <h3 class="heading">{{ $t('solution_page.Ecosystem.Pointone') }}</h3>
      </div>
      <div class="col-3">
        <img src="@/assets/public/sale.gif" height="100" width="100">
        <h3 class="heading">{{ $t('solution_page.Ecosystem.Pointtwo') }}</h3>
      </div>
      <div class="col-3">
        <img src="@/assets/public/community.gif" height="100" width="100">
        <h3 class="heading">{{ $t('solution_page.Ecosystem.Pointthree') }}</h3>
      </div>
      <div class="col-3">
        <img src="@/assets/public/insight.gif" height="100" width="100">
        <h3 class="heading">{{ $t('solution_page.Ecosystem.Pointfour') }}</h3>
      </div>

      <div class="w-100"></div>
      <div class="col-3">
        <p>{{ $t('solution_page.Ecosystem.Bodyone') }}</p>
      </div>
      <div class="col-3">
        <p>{{ $t('solution_page.Ecosystem.Bodytwo') }}</p>
      </div>
      <div class="col-3">
        <p>{{ $t('solution_page.Ecosystem.Bodythree') }}</p>
      </div>
      <div class="col-3">
        <p>{{ $t('solution_page.Ecosystem.Bodyfour') }}</p>
      </div>
    </div>
  </div>
 </div>
</template>

<script>
export default {
      /* eslint-disable vue/multi-word-component-names */

  name: 'Ecosystem',
  props: {
   content: String
  },
  data() {
    return {
      language: ''
    }
  },
  methods: {
    toFormpage() {
      this.$router.push(`/${this.language}/formspage`);
    }
  },
  created() {
    this.language=localStorage.getItem('language')
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container-fluid {
  font-family: metrophobic;
}

.heading {
  color:#009C77;
  font-weight:600;
}
.btn {
  background-color:#009C77;
  border:1px solid #007258;
  color:white;
  width:30%;
  border-radius: 60px;
}
img {
  margin-top:5vh;
}
.title {
  color:#009C77;
  font-weight:600;
}
.text-left {
  text-align: left;
}
.introduction {
  margin-top: 8vh;
}
.informations {
  margin-top: 8vh;
  margin-bottom: 5vh;
}
</style>
