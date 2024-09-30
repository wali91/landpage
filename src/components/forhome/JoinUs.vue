<template>
  <div class="container-fluid">
    <div id="carouselExampleInterval" class="carousel slide" data-bs-ride="carousel">
      <div class="carousel-indicators">
        <button type="button" data-bs-target="#carouselExampleInterval" data-bs-slide-to="0" class="indicator active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#carouselExampleInterval" data-bs-slide-to="1" class="indicator" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#carouselExampleInterval" data-bs-slide-to="2" class="indicator" aria-label="Slide 3"></button>
        <button type="button" data-bs-target="#carouselExampleInterval" data-bs-slide-to="3" class="indicator" aria-label="Slide 4"></button>

      </div>
      <div class="carousel-inner">
        <div class="carousel-item active" data-bs-interval="3000">
          <div class="row justify-content-center">
            <div class="col-3">
              <img src="existence.svg" class="d-block w-100" alt="..." height="420">
            </div>
            <div class="col-5" >
              <h3><strong>{{ $t('home_page?.JoinUs.TitleOne') }}</strong></h3>
              <h2>{{ $t('home_page?.JoinUs.HeadingOne') }}</h2>
              <p>
                {{ $t('home_page?.JoinUs.BodyOne') }}              </p>
            </div>
          </div>
        </div>
        <div class="carousel-item" data-bs-interval="3000">
          <div class="row justify-content-center">
            <div class="col-3">
              <img src="recognition.svg" class="d-block w-100" alt="..." height="420">
            </div>
            <div class="col-5">
              <h3><strong>{{ $t('home_page?.JoinUs.TitleTwo') }}</strong></h3>
              <h2>{{ $t('home_page?.JoinUs.HeadingTwo') }}</h2>
              <p>
                {{ $t('home_page?.JoinUs.BodyTwo') }}              </p>
            </div>
          </div>
        </div>
        <div class="carousel-item" data-bs-interval="3000">
          <div class="row justify-content-center">
            <div class="col-3">
              <img src="communication.svg" class="d-block w-100" alt="..." height="420">
            </div>
            <div class="col-5">
              <h3><strong>{{ $t('home_page?.JoinUs.TitleThree') }}</strong></h3>
              <h2>{{ $t('home_page?.JoinUs.HeadingThree') }}</h2>
              <p>
                {{ $t('home_page?.JoinUs.BodyThree') }}              </p>
            </div>
          </div>
        </div>
        <div class="carousel-item" data-bs-interval="3000">
          <div class="row justify-content-center">
            <div class="col-3">
              <img src="interaction.svg" class="d-block w-100" alt="..." height="420">
            </div>
            <div class="col-5">
              <h3><strong>{{ $t('home_page?.JoinUs.TitleFour') }}</strong></h3>
              <h2>{{ $t('home_page?.JoinUs.HeadingFour') }}</h2>
              <p>
                {{ $t('home_page?.JoinUs.BodyFour') }}              </p>
            </div>
          </div>
        </div>
      </div>
      <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
  </div>
</template>

<script>
/* eslint-disable vue/multi-word-component-names */
export default {
  name: 'JoinUs',
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
/* eslint-enable vue/multi-word-component-names */
}
</script>

<style scoped>
.container-fluid {
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: montserrat;
}
.row {
  margin-top: 6vh;
  margin-bottom: 3vh;
}
h3 {
  color:#00ae8e;
}
.carousel-indicators .indicator {
  background-color: black; /* Set the indicator color */
  border: none; /* Remove any border */
}

.carousel-indicators .indicator.active {
  background-color: black; /* Set the active indicator color */
}

p {
  text-align: left;
  margin-top: 2vh;
}
.carousel {
  position: relative;
  overflow: hidden;
  width: 90%;
  height: 60vh;
}

.carousel-item {
  position: relative;
}

.col-5 {
  text-align: left;
  margin-top: 10vh;
}
.carousel-control-prev-icon,
.carousel-control-next-icon {
  color: black;
  width: 80px; /* Adjust the icon width */
  height: 80px; /* Adjust the icon height */
}

.carousel-control-prev,
.carousel-control-next {
  filter: invert(1); /* Optional: Invert colors for visibility */
}
</style>
