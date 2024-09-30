<template>
  <NavBar/>
  <MCASH/>
  <World/>
  <Success/>
  <Footer/>
</template>

<script>
import NavBar from './NavBar.vue';
import Footer from './Footer.vue';
import MCASH from './forpartners/MCASH.vue';
import World from './forpartners/World.vue';
import Success from './forpartners/Success.vue';



/* eslint-disable vue/multi-word-component-names */
export default {
  name: 'PartnersPage',
  data() {
    return {
      content: {}
    }},
  components:{
    NavBar,
    Footer,
    MCASH,
    World,
    Success

  },
  mounted() {
    console.log('partner')
  }
}
/* eslint-enable vue/multi-word-component-names */
</script>

<style scoped>

</style>
