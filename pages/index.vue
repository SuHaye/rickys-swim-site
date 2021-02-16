<template>
    <!-- Holds Everything -->
    <div class="bg-blue-200">

      <Carousel />

      <!-- Holds everything under Carousel -->
      <div class="">
        <!-- Our Vision Section -->
        <section>
          <div class="text-center text-white px-10 pt-20 pb-10 items-center flex flex-col bg-gradient-to-b from-blue-300 to-blue-200">
            <div class="bg-blue-200 rounded-full p-3 px-4 w-min mb-5">
              <fa-icon class="text-5xl" :icon="['fas','award']" />
            </div>
            <h2
              class="text-4xl sm:text-5xl font-semibold tracking-widest"
              >Our Vision
            </h2>
            <hr class="w-full sm:w-5/6 md:w-3/4 lg:w-2/3 xl:w-1/2 2xl:w-2/5 mx-auto my-5">
            <p
              class="whitespace-pre-line px-2 text-2xl sm:text-3xl"
              >To inspire and enable our members 
              to achieve excellence in the sport of 
              swimming. We also want to help 
              our swimmers implement what they 
              learn at practice into daily life.
            </p>
          </div>
        </section>

        <!-- COVID Information Section -->
        <section>
          <div class="bg-gradient-to-b from-blue-200 to-blue-300 px-10 p-20 flex flex-col lg:flex-row">
             <!-- Left Side -->
             <div class="lg:w-11/12 xl:w-1/2">
                <div class="flex flex-col items-center">
                  <div class="rounded-full bg-white p-3 shadow-lg w-min">
                    <fa-icon class="text-2xl text-blue-300" :icon="['fas','clinic-medical']" />
                  </div>
                  <h3
                    class="mt-5 text-center text-white font-bold tracking-widest text-2xl sm:text-3xl md:text-4xl lg:text-3xl 2xl:text-4xl"
                    >Swimming Through A Crisis
                  </h3>
                </div>
                <hr class="my-10 w-full sm:w-11/12 md:w-3/4 lg:w-11/12 xl:w-5/6 my-2 mx-auto">
                <div class="text-white text-center lg:text-justify text-xl sm:text-2xl 2xl:text-3xl items-center flex flex-col">
                  <p
                    class="whitespace-pre-line"
                    >Help your swimmers through this pandemic 
                    with various resources for members and 
                    guidelines to open up your facilities. Learn 
                    about federal and state programs for small 
                    business support, and stay connected to the 
                    sport with webinars and podcasts.
                  </p>
                  <p
                    class="whitespace-pre-line my-5"
                    >We continue to stress the importance of 
                    preventing the spread of infection and ask 
                    for you to follow the information being 
                    circulated by healthcare officials.
                  </p>
                  <div class="">
                    <a
                      href="https://www.cdc.gov/coronavirus/2019-ncov/index.html"
                      class="text-2xl font-semibold text-left tracking-wide text-gray-100 hover:text-gray-400"
                      >Covid-19 Information
                    </a>
                  </div>
                </div>
             </div>
              <!-- Right Side -->
              <div class="lg:w-2/3 xl:w-1/2 lg:my-auto my-20">
                <div class="text-white">
                  <img
                    alt=""
                    src="swimnews.jpg"
                    class="h-60 rounded-xl shadow-lg mb-2 mx-auto"
                  />
                  <div class="px-5">
                    <div class="text-center mt-5 lg:mt-5">
                      <NuxtLink
                        to="/"
                        class="text-3xl sm:text-4xl lg:text-4xl xl:text-4xl hover:text-gray-400 tracking-wider"
                        >Swimming Events
                      </NuxtLink>
                    </div>
                    <hr class="my-10 lg:my-5 w-full sm:w-11/12 lg:w-11/12 xl:w-5/6 2xl:w-2/3 mx-auto">
                    <p
                      class="whitespace-pre-line text-xl sm:text-2xl lg:text-lg xl:text-2xl text-center"
                      >Check out the latest news and important 
                      updates from the organization, tips for 
                      training, and any upcoming events.
                    </p>
                  </div>
                </div>
              </div>
            </div>
        </section>
      </div>
    <!-- Holds Everything -->
    </div>


</template>

<script>
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (process.client) {
  gsap.registerPlugin(ScrollTrigger);
}


export default {

}
</script>


<style>
			.carousel-open:checked + .carousel-item {
				position: static;
				opacity: 100;
			}
			.carousel-item {
				-webkit-transition: opacity 0.6s ease-out;
				transition: opacity 1.0s ease-out;
			}
			#carousel-1:checked ~ .control-1,
			#carousel-2:checked ~ .control-2,
			#carousel-3:checked ~ .control-3 {
				display: block;
			}
			.carousel-indicators {
				list-style: none;
				margin: 0;
				padding: 0;
				position: absolute;
				bottom: 2%;
				left: 0;
				right: 0;
				text-align: center;
				z-index: 10;
			}
			#carousel-1:checked ~ .control-1 ~ .carousel-indicators li:nth-child(1) .carousel-bullet,
			#carousel-2:checked ~ .control-2 ~ .carousel-indicators li:nth-child(2) .carousel-bullet,
			#carousel-3:checked ~ .control-3 ~ .carousel-indicators li:nth-child(3) .carousel-bullet {
				color: #2b6cb0;  /*Set to match the Tailwind colour you want the active one to be */
			}
		</style>