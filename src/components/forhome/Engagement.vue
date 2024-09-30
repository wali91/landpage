<template>
<div class="container-fluid">
  <div class="container">
    <h1 class="title">{{ $t('home_page.Engagement.Heading') }}</h1>
        <div class="row">
            <!-- Big Column on the Left -->
            <!-- Small Columns on the Right -->
            <div class="col-lg-6">
                <div class="row">
                    <div class="col-md-6 box first  mb-4">
                        <img src="sound.gif" height="70">
                        <h4 class="heading">{{ $t('home_page.Engagement.TitleOne') }}</h4>
                        <p>{{ $t('home_page.Engagement.BodyOne') }}</p>
                    </div>
                    <div class="col-md-6 box first mb-4">
                      <img src="notification.gif" height="70">
                        <h4 class="heading">{{ $t('home_page.Engagement.TitleTwo') }}</h4>
                        <p>{{ $t('home_page.Engagement.BodyTwo') }}</p>
                    </div>
                    <div class="col-md-6 box mb-4">
                      <img src="promotion.gif" height="70">

                        <h4 class="heading">{{ $t('home_page.Engagement.TitleThree') }}</h4>
                        <p>{{ $t('home_page.Engagement.BodyThree') }}</p>
                    </div>
                    <div class="col-md-6 box ">
                      <img src="password.gif" height="70">

                        <h4 class="heading">{{ $t('home_page.Engagement.TitleFour') }}</h4>
                        <p>{{ $t('home_page.Engagement.BodyFour') }}</p>
                    </div>
                    <div class="col-md-6 box mb-4">
                      <img src="brochure.gif" height="70">

                        <h4 class="heading">{{ $t('home_page.Engagement.TitleFive') }}</h4>
                        <p>{{ $t('home_page.Engagement.BodyFive') }}</p>
                    </div>
                    <div class="col-md-6 box">
                      <img src="advertising.gif" height="70">

                        <h4 class="heading">{{ $t('home_page.Engagement.TitleSix') }}</h4>
                        <p>{{ $t('home_page.Engagement.BodySix') }}</p>
                    </div>
                </div>
            </div>
            <div class="col-lg-6 phoneimage box">
              <img src="customerengagement.png" width="580">
            </div>
        </div>
    </div>
</div>
    

</template>

<script>
/* eslint-disable vue/multi-word-component-names */
export default {
  name: 'Engagement',
  props: {
   content: String
  }
}
/* eslint-enable vue/multi-word-component-names */
</script>

<style scoped>
  .title {
    font-weight: 300;
    color:#3c4349;
  }
  .phoneimage {
    margin-top: 10vh;
  }
  .container-fluid {
    padding-top:80px;
    padding-bottom:80px;
    font-family: Metrophobic;
  }

  .first {
    margin-top:8%;
  }
  .heading {
    color:#009C77;
    font-weight:600;
  }


</style>
