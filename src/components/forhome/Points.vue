<template>
<div class="container-fluid">
  <div class="container">
        <div class="row">
            <!-- Big Column on the Left -->
            <div class="col-lg-6 box mt-5 pt-5">
              <img src="engagingfeature.png" width="500">
            </div>
            <!-- Small Columns on the Right -->
            <div class="col-lg-5">
                <div class="row">
                    <div class="col-md-12 box first  mb-4">
                        <h3 class="heading">{{ $t("home_page.Points.TitleOne") }}</h3>
                        <p>{{ $t("home_page.Points.BodyOne") }}</p>
                    </div>
                    <div class="col-md-12 box mb-4">
                        <h3 class="heading">{{ $t("home_page.Points.TitleTwo") }}</h3>
                        <p>{{ $t("home_page.Points.BodyTwo") }}</p>
                    </div>
                    <div class="col-md-12 box mb-4">
                        <h3 class="heading">{{ $t("home_page.Points.TitleThree") }}</h3>
                        <p>{{ $t("home_page.Points.BodyThree") }}</p>
                    </div>
                    <div class="col-md-12 box">
                        <h3 class="heading">{{ $t("home_page.Points.TitleFour") }}</h3>
                        <p>{{ $t("home_page.Points.BodyFour") }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
    

</template>

<script>
/* eslint-disable vue/multi-word-component-names */
export default {
  name: 'Points',
  props: {
   content: String
  }
}
/* eslint-enable vue/multi-word-component-names */
</script>

<style scoped>
  .container-fluid {
    padding-top:80px;
    padding-bottom:80px;
    font-family: Metrophobic;
  }
  .first {
    margin-top:17%;
  }
  .heading {
    color:#009C77;
    font-weight:600;
  }
  .container {
    border-radius: 60px;
  }

</style>
