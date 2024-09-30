<template>
  <div class="new-color mb-0" style="background-color:	 #eaeef4;">
    <div class="row firstrow justify-content-center ">
    <div class="col-7 mt-5">
      <H3 class="Create">{{$t('home_page.Solutions.Create.Title')}}</H3> 
    </div>
    <div class="row firstrow justify-content-center ">
      <div class="row justify-content-center">
        <div class="col-6">
          <h5 class="Experience">{{ $t('home_page.Solutions.Create.Experience') }}</h5>

        </div>
      </div>
    </div>
  </div>
  </div>
  <div class="container-fluid text-center mx-auto mt-0 pt-5">
  <div class="col-12 mb-5">
    <H1 style="font-weight: 300;">{{$t('home_page.Solutions.Provide.Title')}}</H1>
  </div>
    <div class="row justify-content-center mb-4">
      <div class="col-3 custom-left-border d-flex justify-content-center align-items-center pb-4">
        <div class="card one" style="width: 28rem; border-radius: 30px;">
          <div class="card-body">
            <H3 class="title">{{$t('home_page.Solutions.Provide.Utility')}}</H3>
            <h3 class="Solution mt-3">{{$t('home_page.Solutions.Provide.HeadingOne')}}</h3>
            <p class="card-text">{{$t('home_page.Solutions.Provide.BodyOne')}}</p>
          </div>
        </div>
      </div>
      <div class="col-3 d-flex custom-left-border justify-content-center align-items-center pb-4">
        <div class="card two" style="width: 28rem; border-radius: 30px;">
          <div class="card-body">
            <H3 class="title">{{$t('home_page.Solutions.Provide.Marketing')}}</H3>
            <h2 class="Solution mt-3">{{$t('home_page.Solutions.Provide.HeadingTwo')}}</h2>
            <p class="card-text">{{$t('home_page.Solutions.Provide.BodyTwo')}}</p>
          </div>
        </div>
      </div>
      <div class="col-3 d-flex justify-content-center align-items-center pb-4">
        <div class="card two" style="width: 28rem; border-radius: 30px;">
          <div class="card-body">
            <H3 class="title">{{$t('home_page.Solutions.Provide.Authentication')}}</H3>
            <h2 class="Solution mt-3">{{$t('home_page.Solutions.Provide.HeadingThree')}}</h2>
            <p class="card-text">{{$t('home_page.Solutions.Provide.BodyThree')}}</p>
          </div>
        </div>
      </div>
    </div>
    <div class="row firstrow justify-content-center">
      <div class="col-8 ">
        <h4 style="color: #6e7982;">{{$t('home_page.Solutions.Presence.Quote')}}</h4>
        <div class="buttons pt-4">
          <a class="btn expert" @click="toFormpage" role="button">{{$t('home_page.Solutions.Presence.Expert')}}</a>
          <a class="btn register ms-3" href="#" role="button">{{$t('home_page.Solutions.Presence.Register')}}</a>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
export default {
  /* eslint-disable vue/multi-word-component-names */
  name: 'Solutions',
  data() {
    return {
      language: ''
    }
  },
  methods: {
    toFormpage() {
      this.$router.push(`/${this.language}/formspage`);
    }
  }

}
/* eslint-enable vue/multi-word-component-names */
</script>

<style scoped>
.new-color {
  height:30vh;
  font-family:montserrat;
}
.title {
  font-size: 23px;
  font-weight:bold;
  color: #3c4349;
  margin-top: 3vh;
}

.marketing {
  margin-top: 10vh;
}

.btn {
  border-radius: 60px;
  width: 260px;
  height: 70px;
  justify-content: center;
  align-items:center;
  color:white;
  font-weight:700;
  font-size:23px;
  line-height: 2.4; /* Adjust line-height to ensure text is vertically centered */
}
.register {
  background-color: #00ae8e;
}
.expert {
  background-color: #6e7982;
}
.buttons {
  justify-content: space-between;
}
.container-fluid {
  margin-top: 5%;
  font-family: 'montserrat', 'Times New Roman', Times, serif; /* Apply Metrophobic font */

}

.firstrow {
  padding-bottom:10vh
}

.custom-left-border {
  border-top: none;
  border-left: none;
  border-bottom: none;
}

.card {
  height: 40vh;
}

.card-body {
  color: #6e7982;
  font-size: 16px;
  font-family: 'montserrat', 'Times New Roman', Times, serif; /* Apply Metrophobic font */
}
.card-text {
  margin-top: 5vh;
}
.Experience {
  color:rgb(106, 106, 106);
}
.Create {
  font-weight: 1000;
  color:#00ae8e;
}

.Experience {
  margin-top: 3%;
}
.Solution {
  color:#00ae8e ;
  font-weight: 500;
  font-size: 30px;
}
</style>
