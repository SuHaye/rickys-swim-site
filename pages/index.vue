<template>
    <!-- Holds Everything -->
    <div class="bg-blue-200">

      <!--    Carousel    -->
      <div class="carousel relative shadow-2xl opacity-90">
        <div class="carousel-inner relative overflow-hidden w-full pt-36 lg:pt-48">


          <!--Slide 1-->
          <input class="carousel-open" type="radio" id="carousel-1" name="carousel" aria-hidden="true" hidden="" checked="checked">
          <div class="carousel-item absolute opacity-0" style="height:75vh;">
            <div 
              class="block h-full w-full bg-cover bg-center text-white text-5xl text-center"
              style='background-image: url("../slide-one.jpg");'
              >Title 1
            </div>
          </div>
          <label for="carousel-3" class="prev control-1 w-10 h-10 ml-2 md:ml-10 absolute cursor-pointer hidden text-3xl font-bold text-black hover:text-white rounded-full bg-white hover:bg-blue-500 leading-tight text-center z-10 inset-y-0 left-0 my-auto">‹</label>
          <label for="carousel-2" class="next control-1 w-10 h-10 mr-2 md:mr-10 absolute cursor-pointer hidden text-3xl font-bold text-black hover:text-white rounded-full bg-white hover:bg-blue-500 leading-tight text-center z-10 inset-y-0 right-0 my-auto">›</label>
          

          <!--Slide 2-->
          <input class="carousel-open" type="radio" id="carousel-2" name="carousel" aria-hidden="true" hidden="">
          <div class="carousel-item absolute opacity-0" style="height:75vh;">
            <div 
              class="block h-full w-full bg-cover bg-center text-white text-5xl text-center"
              style='background-image: url("../slide-two.jpg");'
              >Title 2
            </div>
          </div>
          <label for="carousel-1" class="prev control-2 w-10 h-10 ml-2 md:ml-10 absolute cursor-pointer hidden text-3xl font-bold text-black hover:text-white rounded-full bg-white hover:bg-blue-500 leading-tight text-center z-10 inset-y-0 left-0 my-auto">‹</label>
          <label for="carousel-3" class="next control-2 w-10 h-10 mr-2 md:mr-10 absolute cursor-pointer hidden text-3xl font-bold text-black hover:text-white rounded-full bg-white hover:bg-blue-500 leading-tight text-center z-10 inset-y-0 right-0 my-auto">›</label> 
          
          
          <!--Slide 3-->
          <input class="carousel-open" type="radio" id="carousel-3" name="carousel" aria-hidden="true" hidden="">
          <div class="carousel-item absolute opacity-0" style="height:75vh;">
            <div 
              class="block h-full w-full bg-cover bg-center text-white text-5xl text-center"
              style='background-image: url("../slide-three.jpg");'
              >Title 3
            </div>
          </div>
          <label for="carousel-2" class="prev control-3 w-10 h-10 ml-2 md:ml-10 absolute cursor-pointer hidden text-3xl font-bold text-black hover:text-white rounded-full bg-white hover:bg-blue-500 leading-tight text-center z-10 inset-y-0 left-0 my-auto">‹</label>
          <label for="carousel-1" class="next control-3 w-10 h-10 mr-2 md:mr-10 absolute cursor-pointer hidden text-3xl font-bold text-black hover:text-white rounded-full bg-white hover:bg-blue-500 leading-tight text-center z-10 inset-y-0 right-0 my-auto">›</label>

          <!-- Add additional indicators for each slide-->
          <ol class="carousel-indicators">
            <li class="inline-block mr-3 mt-40">
              <label for="carousel-1" class="carousel-bullet cursor-pointer block text-4xl text-white hover:text-blue-600">•</label>
            </li>
            <li class="inline-block mr-3">
              <label for="carousel-2" class="carousel-bullet cursor-pointer block text-4xl text-white hover:text-blue-600">•</label>
            </li>
            <li class="inline-block mr-3">
              <label for="carousel-3" class="carousel-bullet cursor-pointer block text-4xl text-white hover:text-blue-600">•</label>
            </li>
          </ol>
        </div>
      <!-- Carousel -->
      </div>

      <!-- All content under carousel -->
      <div class="container mx-auto bg-blue-100 lg:mt-20 mt-24 p-10">
        <!-- First Section -->
        <section class="container mx-auto">
          <!-- Flex -->
          <div class="flex flex-col">

            <!-- Vision Section -->
            <div class="bg-gray-100 flex flex-col text-center items-center p-5 px-5 rounded-2xl shadow-lg">
              <div class="rounded-full bg-blue-400 p-3 px-4 flex shadow-lg">
                <fa-icon class="text-2xl text-white" :icon="['fas','award']" />
              </div>
              <h6 class="my-5 text-2xl text-gray-700 font-bold uppercase tracking-widest"
                >Our Vision
              </h6>
              <hr class="w-11/12 lg:w-2/3 xl:w-5/6 2xl:w-5/6">
              <p 
                class="mt-5 w-11/12 lg:w-2/3 xl:w-5/6 2xl:w-5/6 text-xl tracking-wide text-gray-600 p-0"
                > To inspire and enable our members to achieve excellence in the sport of swimming. We also want to help our swimmers implement what they learn at practice into daily life.
              </p>
            </div>
            <!-- Swimming Through a Crisis/ Swim News -->
            <div class="flex flex-col lg:flex-row mt-20 lg:p-10 xl:p-20">
              <!-- Left Side -->
              <div class="flex flex-col mb-20 lg:mb-0">
                <div class="rounded-full bg-white p-4 flex shadow-lg w-min mb-6">
                  <fa-icon class="text-2xl text-blue-400 " :icon="['fas','clinic-medical']" />
                </div>
                <h3
                  class="text-2xl lg:text-3xl xl:text-4xl text-gray-700 font-bold tracking-widest mb-5"
                  >Swimming Through A Crisis
                </h3>
                <hr class="w-11/12 lg:w-3/4 xl:w-5/6 my-2">
                <div class="w-11/12 lg:w-3/4 xl:w-5/6 2xl:w-5/6">
                  <p
                    class="text-xl tracking-wide text-gray-600 mt-5"
                    >Help your swimmers through this pandemic with various resources for members 
                    and guidelines to open up your facilities. Learn about federal and state programs 
                    for small business support, and stay connected to the sport with wevinars and podcasts.
                  </p>
                  <p
                    class="text-xl tracking-wide text-gray-600 my-5"
                    >We continue to stress the importance of preventing the spread of infection and ask for you to follow the information being circulated by healthcare officials.
                  </p>
                  <div class="mt-10 mb-5 2xl:mt-16">
                    <a
                      href="https://www.cdc.gov/coronavirus/2019-ncov/index.html"
                      class=" py-1 px-2 text-xl tracking-wide text-gray-700 hover:text-black border-2 border-transparent rounded-2xl hover:border-white hover:shadow-lg focus:border-blue-500 focus:text-black focus:bg-blue-200"
                      >Covid-19 Information
                    </a>
                  </div>
                </div>
              </div>
              <!-- Right Side -->
              <div class="lg:my-auto">
                <div class="flex flex-col bg-blue-300 rounded-2xl shadow-lg">
                  <img
                    alt="..."
                    src="../static/swimnews.jpg"
                    class="m-5 lg:m-2 mb-5 rounded-xl shadow-lg"
                  />
                  <div class="mb-5 lg:mt-2">
                    <NuxtLink
                      to="/"
                      class="m-5 lg:mx-3 py-1 px-2 rounded-2xl text-2xl lg:text-3xl text-white font-bold tracking-wider hover:text-gray-200 focus:text-gray-300 border-2 border-transparent focus:border-white focus:bg-blue-400"
                      >Swimming News
                    </NuxtLink>
                  </div>
                  <hr class="mx-5 mb-5 w-5/6 md:w-3/4 lg:w-5/6 xl:w-5/6 2xl:w-5/6">
                  <p
                    class="px-5 lg:pr-5 lg:pl-1 w-5/6 md:w-3/4 lg:w-11/12 xl:w-5/6 2xl:w-5/6 mx-5 mb-5 text-xl tracking-wide text-gray-100"
                    >Check out the latest news and important updates from the organization, tips for training, and any upcoming events.
                  </p>
                </div>
              </div>
            </div>
          <!-- Flex -->
          </div>
        <!-- First Section -->
        </section>


      <!-- All content under carousel -->
      </div>
    <!-- Holds Everything -->
    </div>


</template>

<style>
			.carousel-open:checked + .carousel-item {
				position: static;
				opacity: 100;
			}
			.carousel-item {
				-webkit-transition: opacity 0.6s ease-out;
				transition: opacity 0.6s ease-out;
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