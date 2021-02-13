<template>
  <div
    id="mainCarousel"
    class="pt-28 h-screen"
  >
    <div
      class="flex justify-between h-full pb-28"
    >
      <a
        @mouseover="stopRotation()"
        @mouseleave="startRotation()"
        @click="prev"
        role="button" 
        class=""
        animation="fade"
        font-scale="3"
      >
      <fa-icon class="text-8xl pt-3 text-blue-500 h-full" :icon="['fas','chevron-left']" />
      </a>

      
      <div v-for="number in [currentNumber]" :key="number">
        
      </div>

      <a
        @mouseover="stopRotation()"
        @mouseleave="startRotation()"
        @click="next"
        role="button"
        class=""
        animation="fade"
        font-scale="3"
      >
      <fa-icon class="text-8xl pt-3 text-blue-500 h-full" :icon="['fas','chevron-right']" />
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "carousel",
  data() {
    return {
      currentNumber: 0,
      timer: null
    };
  },
  created() {},
  mounted: function() {
    this.load();
    this.startRotation();
  },

  methods: {
    
    load: function() {
      window.onload = function() {
        mainCarousel.classList.add("backSlide");
      };
    },
    startRotation: function() {
      this.timer = setInterval(this.next, 7000);
    },

    stopRotation: function() {
      clearTimeout(this.timer);
      this.timer = null;
    },

    next: async function() {
      let mainCarousel = document.getElementById("mainCarousel");
      this.currentNumber += 1;
      console.log(this.currentNumber);

      if (this.currentNumber == 0) {
        mainCarousel.classList.add("backSlide");
      }

      if (this.currentNumber == 1) {
        await mainCarousel.classList.remove("backSlide");
        await mainCarousel.classList.add("backSlide1");
      }
      if (this.currentNumber == 2) {
        mainCarousel.classList.remove("backSlide1");
        mainCarousel.classList.add("backSlide2");
      }
      if (this.currentNumber == 3) {
        mainCarousel.classList.remove("backSlide2");
        mainCarousel.classList.add("backSlide3");
      }
      if (this.currentNumber > 3) {
        this.currentNumber = 0;
        mainCarousel.classList.remove("backSlide3");
        mainCarousel.classList.add("backSlide");
      }
    },

    prev: function() {
      let mainCarousel = document.getElementById("mainCarousel");
      this.currentNumber -= 1;

      if (this.currentNumber == 0) {
        mainCarousel.classList.remove("backSlide1");
        mainCarousel.classList.add("backSlide");
      }

      if (this.currentNumber == 1) {
        mainCarousel.classList.remove("backSlide2");
        mainCarousel.classList.add("backSlide1");
      }
      if (this.currentNumber == 2) {
        mainCarousel.classList.remove("backSlide3");
        mainCarousel.classList.add("backSlide2");
      }
      if (this.currentNumber < 0) {
        this.currentNumber = 3;
        mainCarousel.classList.remove("backSlide");
        mainCarousel.classList.add("backSlide3");
      }
    }
  },

  
};
</script>

<style scoped>
.backSlide {
  background-image: url("../static/slide-one.jpg");
  animation: opacBack1 1s ease-in-out;
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
}
.backSlide1 {
  background-image: url("../static/slide-two.jpg");
  animation: opacBack2 1s ease-in-out;
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  
}
.backSlide2 {
  background-image: url("../static/slide-three.jpg");
  animation: opacBack3 1s ease-in-out;
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  
}
.backSlide3 {
  background-image: url("../static/events1.jpg");
  animation: opacBack4 1s ease-in-out;
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  
}

@keyframes opacBack1 {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
@keyframes opacBack2 {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
@keyframes opacBack3 {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
@keyframes opacBack4 {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

@keyframes pulse {
  to {
    box-shadow: 0 0 0 18px rgba(0, 0, 0, 0.01);
  }
}
</style>