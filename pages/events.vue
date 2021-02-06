<template>
    <div class="">

        <div class="flex flex-col pt-40 bg-blue-300">
            <!-- Hero Image at Top -->
            <div class="" style="height:40vh;">
                <div 
                    class="bg-cover bg-center h-full"
                    style='background-image: url("../events.jpg");'
                    >
                    <div class="flex flex-col justify-center items-center h-full bg-black opacity-50">
                        <h2
                            class="text-white text-4xl md:text-5xl lg:text-6xl 2xl:text-7xl tracking-wider md:tracking-widest uppercase"
                            >Swimming Lessons!
                        </h2>
                    </div>
                </div>
            </div> 
        </div>


        <div class="bg-gradient-to-b from-blue-300 to-blue-200">
            <div class="container px-10 mx-auto py-20 xl:w-2/3">
                <h2
                    class="text-white font-bold tracking-widest text-4xl 
                    mb-3"
                    >Our Programs
                </h2>
                <h3
                    class="text-white font-semibold tracking-widest text-2xl
                    mb-10"
                    >Your Child's Potential Awaits
                </h3>
                <hr class="pb-5">
                <p
                    class="text-xl tracking-wide text-white text-xl
                    mt-5"
                    >Swimming offers many health and safety benefits and we offer a wife variety of swimming programs for all ages. 
                    That includes infant swim lessons, toddler swim lessons, and programs for children between 4 months and 12 
                    years old. Maverics Swimming programs have low student-to-teacher ratio so that everyone feels safe while still learning.
                </p>
            </div>
        </div>

        <div class="bg-gradient-to-b from-blue-200 to-blue-300">
            <div class="h-96 py-96">

            </div>
        </div>


        <!--    Carousel    -->
      <div class="carousel relative shadow-2xl">
        <div class="carousel-inner relative overflow-hidden w-full">


          <!--Slide 1-->
          <input class="carousel-open" type="radio" id="carousel-1" name="carousel" aria-hidden="true" hidden="" checked="checked">
          <div class="carousel-item absolute opacity-0" style="height:60vh;">
            <div 
              class="block h-full w-full bg-cover bg-center text-white text-5xl text-center"
              style='background-image: url("../sign.jpg");'
              >
            </div>
          </div>
          <label for="carousel-3" class="prev control-1 w-10 h-10 ml-2 md:ml-10 absolute cursor-pointer hidden text-3xl font-bold text-black hover:text-white rounded-full bg-white hover:bg-blue-500 leading-tight text-center z-10 inset-y-0 left-0 my-auto">‹</label>
          <label for="carousel-2" class="next control-1 w-10 h-10 mr-2 md:mr-10 absolute cursor-pointer hidden text-3xl font-bold text-black hover:text-white rounded-full bg-white hover:bg-blue-500 leading-tight text-center z-10 inset-y-0 right-0 my-auto">›</label>
          

          <!--Slide 2-->
          <input class="carousel-open" type="radio" id="carousel-2" name="carousel" aria-hidden="true" hidden="">
          <div class="carousel-item absolute opacity-0" style="height:60vh;">
            <div 
              class="block h-full w-full bg-cover bg-center text-white text-5xl text-center"
              style='background-image: url("../swimnews.jpg");'
              >
            </div>
          </div>
          <label for="carousel-1" class="prev control-2 w-10 h-10 ml-2 md:ml-10 absolute cursor-pointer hidden text-3xl font-bold text-black hover:text-white rounded-full bg-white hover:bg-blue-500 leading-tight text-center z-10 inset-y-0 left-0 my-auto">‹</label>
          <label for="carousel-3" class="next control-2 w-10 h-10 mr-2 md:mr-10 absolute cursor-pointer hidden text-3xl font-bold text-black hover:text-white rounded-full bg-white hover:bg-blue-500 leading-tight text-center z-10 inset-y-0 right-0 my-auto">›</label> 
          
          
          <!--Slide 3-->
          <input class="carousel-open" type="radio" id="carousel-3" name="carousel" aria-hidden="true" hidden="">
          <div class="carousel-item absolute opacity-0" style="height:60vh;">
            <div 
              class="block h-full w-full bg-cover bg-center text-white text-5xl text-center"
              style='background-image: url("../slide-three.jpg");'
              >
            </div>
          </div>
          <label for="carousel-2" class="prev control-3 w-10 h-10 ml-2 md:ml-10 absolute cursor-pointer hidden text-3xl font-bold text-black hover:text-white rounded-full bg-white hover:bg-blue-500 leading-tight text-center z-10 inset-y-0 left-0 my-auto">‹</label>
          <label for="carousel-1" class="next control-3 w-10 h-10 mr-2 md:mr-10 absolute cursor-pointer hidden text-3xl font-bold text-black hover:text-white rounded-full bg-white hover:bg-blue-500 leading-tight text-center z-10 inset-y-0 right-0 my-auto">›</label>

        
        </div>
      <!-- Carousel -->
      </div>


      <!-- Second Section -->
        <section class="mt-0">
          <!-- Flex -->
          <div class="flex flex-col lg:p-10 xl:p-20 bg-gradient-to-b from-blue-300 to-blue-200 shadow-xl py-20">
            <div class="lg:w-4/5 xl:w-full p-4 my-auto mx-auto">
              <h2
                class="text-white text-2xl md:text-4xl lg:text-5xl lg:tracking-wide 2xl:tracking-widest font-bold tracking-widest text-center pt-10"
                >Abuse Prevention Program
              </h2>
              <hr class="mt-5 lg:mb-5 w-full sm:w-5/6 lg:w-full mx-auto">
              <p
                class="text-white font-light text-xl p-5 sm:px-10 text-center pb-0 md:pb-2 lg:p-2"
                >We are committed to providing a healthy and positive environment free from abuse for all its members.  
                Our Safe Sport program, a comprehensive abuse prevention program, consists of a multi-layered approach
                to keep kids safe, including: required policies and best practice guidelines; mandatory screening, including 
                criminal background checks and employment screening; training and education; monitoring, supervision and 
                mandatory reporting. These measures are informed by experts in the field of child safety and are among the 
                strongest safeguards found in youth-serving organizations.
              </p>
              <div class="flex justify-center">
                <NuxtLink
                  to="report"
                  class="text-gray-100 hover:text-gray-200 text-xl font-bold"
                  >Report An Abuse
                  <fa-icon class="text-5xl pt-3" :icon="['fas','hand-point-left']" />
                </NuxtLink>
              </div>
            </div>
            
          <!-- Flex -->
          </div>
        </section>

        <section class="bg-gradient-to-b from-blue-200 to-blue-200">
             <!-- CEO Contact Information -->
            <div class="w-full md:w-11/12 lg:w-3/4 xl:w-2/3 py-20 md:mx-auto">
                <div class="flex flex-col lg:flex-row">
                <!-- Image -->
                <div class="flex flex-col lg:flex-row-reverse mx-auto">
                    <img
                        alt="..."
                        src="ricky.jpg"
                        class="shadow-lg rounded-full h-96 w-96 lg:h-64 lg:w-64 2xl:w-72 2xl:h-72 mx-auto lg:ml-0"
                        style=""
                    />
                    <!-- Contact Information -->
                    <div class="lg:mr-10 text-center lg:text-left flex flex-col my-auto">
                    <!-- Name/Title -->
                    <div class="lg:flex">
                        <div class="mt-10 lg:mt-16">
                        <h2
                            class="text-3xl lg:text-xl font-bold text-gray-700"
                            >Ricky Sanchez
                        </h2>
                        <h3
                            class="text-xl lg:text-base text-gray-500 uppercase font-semibold"
                            >Founder & Head Coach
                        </h3>
                        </div>
                        <!-- Number/Email -->
                        <div class="mt-4 lg:mt-16 lg:ml-5 lg:pl-5 lg:border-l-2 lg:border-gray-500">
                        <h4
                            class="text-base text-gray-500 font-semibold"
                            >708-111-1234
                        </h4>
                        <NuxtLink
                            to="/contact"
                            class="text-base text-gray-500 hover:text-gray-700 font-semibold"
                            >exampleemail@yahoo.com
                        </NuxtLink>
                        </div>
                    </div>
                    <!-- Contact Button -->
                    <div class="text-center  mt-6">
                        <button
                        class="hover:text-white transition duration-500 ease-in-out transform rounded-lg bg-gradient-to-b from-blue-300 hover:from-blue-400 to-blue-200 hover:to-blue-300 focus:ring-blue-200 focus:text-blue-100 text-gray-600 active:bg-gray-700 text-sm font-bold uppercase px-10 py-3 rounded shadow-md hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                        style="transition: all 0.15s ease 0s;"
                        >Contact
                        </button>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        </section>


    </div>
</template> 

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