<template>
  <NavBar/>
  <Ecosystem
  />
  <CreatePage
  />
  <Footer/>
</template>

<script>
import NavBar from './NavBar.vue';
import Footer from './Footer.vue';
import Ecosystem from './forsolutions/Ecosystem.vue';
import CreatePage from './forsolutions/CreatePage.vue';

/* eslint-disable vue/multi-word-component-names */
export default {
  name: 'SolutionPage',
  data() {
    return {
      content: {}
    }
  },
  components:{
    NavBar,
    Footer,
    Ecosystem,
    CreatePage,
  },
  mounted() {
    console.log('partner')
  }
}
/* eslint-enable vue/multi-word-component-names */
</script>

<style scoped>

</style>
