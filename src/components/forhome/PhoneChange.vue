<template>
  <div class="container-fluid out">
    <h1 class="title mb-5">Messaging Capabilities</h1>
    <div class="container-fluid inside">
      <div class="row justify-content-center">
        <div class="col-3">
          <img class="image-content " :src="phoneImage" height="630">
        </div>
        <div class="col-7 ms-3">
          <div class="row content">
            <div class="col-3" :class="{'active': activeImage === 'text'}" @click="updateImage('text')">
              <img :src="activeImage === 'text' ? 'commentgreen.png' : 'comment.png'" height="75">
              <h4 class="heading mt-4">{{ $t('home_page.PhoneChange.One') }}</h4>
            </div>
            <div class="col-3" :class="{'active': activeImage === 'quickReply'}" @click="updateImage('quickReply')">
              <img :src="activeImage === 'quickReply' ? 'replygreen.png' : 'reply.png'" height="75">
              <h4 class="heading mt-4">{{ $t('home_page.PhoneChange.Two') }}</h4>
            </div>
            <div class="col-3" :class="{'active': activeImage === 'image'}" @click="updateImage('image')">
              <img :src="activeImage === 'image' ? 'imagegreen.png' : 'image.png'" height="75">
              <h4 class="heading mt-4">{{ $t('home_page.PhoneChange.Three') }}</h4>
            </div>
            <div class="col-3" :class="{'active': activeImage === 'document'}" @click="updateImage('document')">
              <img :src="activeImage === 'document' ? 'documentgreen.png' : 'document.png'" height="75">
              <h4 class="heading mt-4">{{ $t('home_page.PhoneChange.Four') }}</h4>
            </div>
            <div class="w-100 my-3"></div>
            <div class="col-3" :class="{'active': activeImage === 'video'}" @click="updateImage('video')">
              <img :src="activeImage === 'video' ? 'videogreen.png' : 'video.png'" height="75">
              <h4 class="heading mt-4">{{ $t('home_page.PhoneChange.Five') }}</h4>
            </div>
            <div class="col-3" :class="{'active': activeImage === 'list'}" @click="updateImage('list')">
              <img :src="activeImage === 'list' ? 'listgreen.png' : 'list.png'" height="75">
              <h4 class="heading mt-4">{{ $t('home_page.PhoneChange.Six') }}</h4>
            </div>
            <div class="col-3" :class="{'active': activeImage === 'call'}" @click="updateImage('call')">
              <img :src="activeImage === 'call' ? 'callgreen.png' : 'call.png'" height="75">
              <h4 class="heading mt-4">{{ $t('home_page.PhoneChange.Seven') }}</h4>
            </div>
            <div class="col-3" :class="{'active': activeImage === 'catalog'}" @click="updateImage('catalog')">
              <img :src="activeImage === 'catalog' ? 'cataloggreen.png' : 'catalog.png'" height="75">
              <h4 class="heading mt-4">{{ $t('home_page.PhoneChange.Eight') }}</h4>
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
  name: 'PhoneChange',
  props: {
   content: String
  },
  data() {
    return {
      phoneImage: 'doc_mockup.png', // Default image
      activeImage: '', // Tracks which image is currently active
      imageKeys: ['text', 'quickReply', 'image', 'document', 'video', 'list', 'call', 'catalog'], // List of image types
      currentIndex: 0 // Index to track the current image
    };
  },
  methods: {
  updateImage(type) {
    const imageMap = {
      text: 'doc_mockup.png',
      quickReply: 'reply_mockup.png',
      image: 'image_mockup.png',
      document: 'doc_mockup.png',
      video: 'video_mockup.png',
      list: 'list_mockup.png',
      call: 'CTA_mockup.png',
      catalog: 'catalog_mockup.png'
    };
    this.phoneImage = imageMap[type] || 'doc_mockup.png';
    this.activeImage = type; // Set the active image type
    this.resetImageSwitch(5000); // Reset the interval on click
  },
  switchImage() {
    this.currentIndex = (this.currentIndex + 1) % this.imageKeys.length; // Update index
    const nextImage = this.imageKeys[this.currentIndex];
    this.updateImage(nextImage); // Switch to the next image
  },
  resetImageSwitch(time) {
    if (this.imageInterval) {
      clearInterval(this.imageInterval); // Clear existing interval
    }
    this.imageInterval = setInterval(this.switchImage, time || 3000); // Restart interval
  }
    },
    mounted() {
      this.updateImage('text'); // Initialize with a default image
      this.imageInterval = setInterval(this.switchImage, 3000); // Switch image every 1 seconds
    },
    beforeUnmount() {
      clearInterval(this.imageInterval); // Clear the interval when the component is destroyed
    }
}
/* eslint-enable vue/multi-word-component-names */
</script>



<style scoped>
.content {
  margin-top: 14%;
}
.title {
  font-weight: 300;
  color: #3c4349;
}
.out {
  background-color: #ffffff;
  height: 100vh;
  font-family:montserrat
}
.inside {
  background-color: #eaeef4;
  font-family: montserrat;
  height: 540px;
}
.heading {
  color: rgb(66, 66, 66);
  font-size: 20px;
}
.image-content {
  margin-top: -3em;
}

</style>

