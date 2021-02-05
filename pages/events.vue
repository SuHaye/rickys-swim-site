<template>
    <div class="">

        <div class="flex flex-col pt-40 bg-blue-200">
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


        <div class="bg-blue-200">
            <div class="container px-10 mx-auto py-20 xl:w-2/3">
                <h2
                    class="text-gray-700 font-bold tracking-widest text-4xl 
                    mb-3"
                    >Our Programs
                </h2>
                <h3
                    class="text-gray-700 font-semibold tracking-widest text-2xl
                    mb-10"
                    >Your Child's Potential Awaits
                </h3>
                <p
                    class="text-xl tracking-wide text-gray-600 text-xl
                    mt-5"
                    >Swimming offers many health and safety benefits and we offer a wife variety of swimming programs for all ages. 
                    That includes infant swim lessons, toddler swim lessons, and programs for children between 4 months and 12 
                    years old. Maverics Swimming programs have low student-to-teacher ratio so that everyone feels safe while still learning.
                </p>
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
              style='background-image: url("../slide-one.jpg");'
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
              style='background-image: url("../slide-two.jpg");'
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