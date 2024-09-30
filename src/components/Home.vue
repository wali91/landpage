<template>
  <div>
    <NavBar />
    <Jumbotron/>
    <Solutions/>
    <Statistics />
    <JoinUs/>
    <Points/>
    <Engagement />
    <PhoneChange />
    <Clients />

    <Footer/>
  </div>
</template>

<script>
import NavBar from './NavBar.vue';
import Jumbotron from './forhome/Jumbotron.vue';
import Solutions from './forhome/Solutions.vue';
import Statistics from './forhome/Statistics.vue';
import JoinUs from './forhome/JoinUs.vue';
import Points from './forhome/Points.vue';
import Engagement from './forhome/Engagement.vue';
import PhoneChange from './forhome/PhoneChange.vue';
import Clients from './forhome/Clients.vue';
import Footer from './Footer.vue';


export default {
  /* eslint-disable vue/multi-word-component-names */
  name: 'Home',
  components: {
    NavBar,
    Jumbotron,
    Solutions,
    Statistics,
    JoinUs,
    Points,
    Engagement,
    PhoneChange,
    Clients,
    Footer
  }
};
</script>

<style>
/* Add any necessary styling here */
</style>
