<template>
<div class="container-fluid">
  <div class="container">
    <div class="row">
      <div class="col-4">
        <img class="mandiri mt-4" src="@/assets/public/mandiri.png" height="75">
      </div>
      <div class="col-8">
        <h1 class="title mt-5">{{ $t('partner_page.Success.SuccessStory') }}</h1>

      </div>
    </div>
    <div class="row">
      <div class="col-4">
        <img class="mt-5" src="@/assets/public/bank.svg" height="400">
      </div>
      <div class="col-8 text-left mt-5">
        <p>{{ $t('partner_page.Success.Mandiri') }}</p>
        <div class="row justify-content-center">
          <div class="col-3">
            <img src="@/assets/public/conversion.gif" height="100">
            <p><span style="color:#009C77;">{{ $t('partner_page.Success.MandiriNumberOne') }}</span> {{ $t('partner_page.Success.MandiriStatsOne') }}</p>
          </div>
          <div class="col-3">
            <img src="@/assets/public/interest.gif" height="100">
            <p><span style="color:#009C77;">{{ $t('partner_page.Success.MandiriNumberTwo') }}</span> {{ $t('partner_page.Success.MandiriStatsTwo') }}</p>
          </div>
          <div class="col-3">
            <img src="@/assets/public/verification.gif" class="mt-3" height="80">
            <p class="mt-1"><span style="color:#009C77;">{{ $t('partner_page.Success.MandiriNumberThree') }}</span> {{ $t('partner_page.Success.MandiriStatsThree') }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="container">
    <div class="row">
      <div class="col-8">
        <h1 class="title mt-5">{{ $t('partner_page.Success.SuccessStory')}}</h1>

      </div>
      <div class="col-4">
        <img class="mandiri mt-4" src="@/assets/public/kemenkes.png" width="245">
      </div>
    
    </div>
    <div class="row">
      <div class="col-8 text-left mt-5">
        <p>
          {{ $t('partner_page.Success.Kemenkes') }}</p>
        <div class="row justify-content-center">
          <div class="col-3">
            <img src="@/assets/public/conversion.gif" height="100">
            <p><span style="color:#009C77;">{{ $t('partner_page.Success.KemenkesNumberOne') }}</span> {{ $t('partner_page.Success.KemenkesStatsOne') }}</p>
          </div>
          <div class="col-3">
            <img src="@/assets/public/interest.gif" height="100">
            <p><span style="color:#009C77;">{{ $t('partner_page.Success.KemenkesNumberTwo') }}</span> {{ $t('partner_page.Success.KemenkesStatsTwo') }}</p>
          </div>
        
        </div>
      </div>
      <div class="col-4">
        <img class="mt-5" src="@/assets/public/bank.svg" height="400">
      </div>
    </div>
  </div>
  <div class="container">
    <div class="row">
      <div class="col-4">
        <img class="mandiri mt-4" src="@/assets/public/baf.png" height="125">
      </div>
      <div class="col-8">
        <h1 class="title mt-5">{{ $t('partner_page.Success.SuccessStory') }}</h1>

      </div>
    </div>
    <div class="row">
      <div class="col-4">
        <img class="mt-5" src="@/assets/public/bank.svg" height="400">
      </div>
      <div class="col-8 text-left mt-5">
        <p>{{ $t('partner_page.Success.BAF') }}</p>
        <div class="row justify-content-center">
          <div class="col-3">
            <img src="@/assets/public/conversion.gif" height="100">
            <p><span style="color:#009C77;">{{ $t('partner_page.Success.BAFNumberOne') }}</span> {{ $t('partner_page.Success.BAFStatsOne') }}</p>
          </div>
          <div class="col-3">
            <img src="@/assets/public/interest.gif" height="100">
            <p><span style="color:#009C77;">{{ $t('partner_page.Success.BAFNumberTwo') }}</span> {{ $t('partner_page.Success.BAFStatsTwo') }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
 /* eslint-disable vue/multi-word-component-names */
  name: 'Success',
  props: {
   content: String
  }
  
};
</script>

<style scoped>
.container {
  font-family:metrophobic;
  padding-top: 30px;
  margin-bottom: 50px;
}
.title {
  color:#009C77;
  font-weight: 600;
}
.text-left {
  text-align: left;
}
.col-3 {
  text-align: center;
}
span {
  font-weight:600;
}
</style>
