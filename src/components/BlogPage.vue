<template>
  <NavBar/>
  <blog/>
  <why/>
  <Footer/>
</template>

<script>
import NavBar from './NavBar.vue';
import Footer from './Footer.vue';
import blog from './forblog/blog.vue';
import why from './forblog/why.vue';


/* eslint-disable vue/multi-word-component-names */
export default {
  name: 'BlogPage',
  components:{
    NavBar,
    Footer,
    blog,
    why

  },
  mounted() {
    console.log('partner')
  }
}
/* eslint-enable vue/multi-word-component-names */
</script>

<style scoped>

</style>
