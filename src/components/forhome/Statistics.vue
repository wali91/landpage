<template>
  <div class="container-fluid bg-statistic pb-5 pt-5 mb-0">
    <div class="container">
      <div class="row justify-content-center">
      <div class="col-4">
        <img src="reduce.png" width="230" height=240 alt="...">
        <div class="card-body">
          <h5 class="card-title">{{$t('home_page.Statistics.StatsOne')}}</h5>
          <p class="card-text">{{$t('home_page.Statistics.BodyOne')}}</p>
        </div>
      </div>
      <div class="col-4">
        <img src="higherread.png" width="290" height=240 alt="...">
        <div class="card-body">
          <h5 class="card-title">{{$t('home_page.Statistics.StatsTwo')}}</h5>
          <p class="card-text">{{$t('home_page.Statistics.BodyTwo')}}</p>
        </div>
      </div>
      <div class="col-4">
        <img src="channelfor.png"  width="300" height=240 alt="...">
        <div class="card-body">
          <h5 class="card-title">{{$t('home_page.Statistics.StatsThree')}}</h5>
          <p class="card-text third">{{$t('home_page.Statistics.BodyThree')}}</p>
        </div>
      </div>
    </div>
    </div>
    
  
  </div>
</template>

<script>
/* eslint-disable vue/multi-word-component-names */
export default {
  name: 'Statistics',
  props: {
   content: String
  }
}
/* eslint-enable vue/multi-word-component-names */
</script>

<style scoped>
.bg-statistic {
  background-color: #eaeef4;
  font-family: metrophobic;
}
.card-title {
  font-size: 60px;
  color:#00ae8e;
  font-weight:600;
  margin-top: 2vh;
}
p {
  font-size: 20px;
}
</style>
