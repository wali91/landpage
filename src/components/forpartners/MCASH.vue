<template>
  <div class="container-fluid">
    <div class="container">
      <div class="row">
        <div class="col-6 mcash">
          <img src="@/assets/public/mcash.jpg" height="400">
        </div>
        <div class="col-6 text-left">
          <h3 class="title">{{ $t('partner_page.MCASH.Title') }}</h3>
          <p>
            {{ $t('partner_page.MCASH.ParagraphOne') }}
          </p>
          <p>
            {{ $t('partner_page.MCASH.ParagraphTwo') }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
 /* eslint-disable vue/multi-word-component-names */
  name: 'MCASH',
  props: {
   content: String
  }
  
};
</script>

<style scoped>
.container {
  font-family: metrophobic;
  padding-top:5vh;
  padding-bottom: 5vh;
  
}
.text-left {
  text-align: left;
}
.title {
  color:#009C77;
  font-weight: 600;
  margin-top: 5vh;
}
</style>
