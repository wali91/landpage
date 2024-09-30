<template>
<div class="container mt-5 pt-3 mb-5">
  <h2 class="heading">Why we invented <span style="color:#96FF69; font-weight:600;">Wabiz</span></h2>
  <div class="row">
    <div class="col-5">
      <img src=work.svg height="300">
    </div>
    <div class="col-7">
      <p class="reason">
        "We created Wabiz to empower smaller businesses by providing them with an accessible and efficient way to leverage the WhatsApp API. Recognizing the need for a solution that caters to businesses with varying sizes and resources, we designed Wabiz with a self-service model that allows companies to integrate WhatsApp API seamlessly into their operations. This approach eliminates the complexity and high costs often associated with traditional service models, enabling smaller businesses to easily manage their communications and engage with their customers effectively. By offering a self-service platform, Wabiz ensures that businesses of all sizes can benefit from advanced communication tools without the barriers of extensive technical requirements or significant financial investment."
      </p>
      <h3 style="color:white;">~Bu Sari <span style="font-size:13px;">Director of Damcorp</span></h3>
    </div>
  </div>
</div>

</template>

<script>
export default {
 /* eslint-disable vue/multi-word-component-names */
  name: 'why',
  
};
</script>

<style scoped>
.container {
  border-radius:50px;
  background-color:#009C77;
  height:53vh;
  font-family: metrophobic;
}
.heading {
  color:white;
}
.reason {
  color:white;
  text-align: left;
  margin-right: 3%;
  margin-top: 3%;
}

</style>
