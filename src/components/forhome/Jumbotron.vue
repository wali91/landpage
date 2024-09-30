<template>
  <div class="container-fluid">
    <div class="container text-center py-5 ">
    <div class="row">
      <div class="col">
        <img src="@/assets/Wabiz.jpg" alt="Bootstrap" width="90%" height="45%">
        <p>Self-Service Solutions, Seamless Connections</p>
        <div class="text1 mt-5" style="color:#009C77;">
          <h2 class="quote"><strong>  
            {{ $t('home_page.Jumbotron.quote.firstline') }}
            <span style="color:#7A4AFF;">{{ $t('home_page.Jumbotron.quote.secondline') }}</span>
            <span style="color:#7A4AFF;">{{ $t('home_page.Jumbotron.quote.thirdline') }}</span>{{ $t('home_page.Jumbotron.quote.and') }}
            <span style="color:#7A4AFF;">{{ $t('home_page.Jumbotron.quote.fourthline') }}</span>
            {{ $t('home_page.Jumbotron.quote.fifthline') }}
          </strong></h2>
        </div>
      </div>
      <div class="col">
        
      </div>
    </div>
  </div>
  </div>

</template>

<script>
/* eslint-disable vue/multi-word-component-names */
export default {
  name: 'Jumbotron',
  props: {
    content: String
  }
}
/* eslint-enable vue/multi-word-component-names */
</script>

<style scoped>
.container {
  height: 80vh;
}

.quote {
  font-family: Montserrat;
}






</style>
