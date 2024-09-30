<template>
  <NavBar/>
  <formtalk/>
  <Footer/>
</template>

<script>
import NavBar from './NavBar.vue';
import Footer from './Footer.vue';
import formtalk from './fortalk/formtalk.vue'


/* eslint-disable vue/multi-word-component-names */
export default {
  name: 'BlogPage',
  components:{
    NavBar,
    Footer,
    formtalk

  },
  mounted() {
    console.log('partner')
  }
}
/* eslint-enable vue/multi-word-component-names */
</script>

<style scoped>

</style>
