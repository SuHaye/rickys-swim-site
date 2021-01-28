<template>
    <!-- Holds Everything -->
    <div class="bg-blue-200 pt-28">

      <!--    Carousel    -->
      <div class="carousel relative shadow-2xl">
        <div class="carousel-inner relative overflow-hidden w-full">


          <!--Slide 1-->
          <input class="carousel-open" type="radio" id="carousel-1" name="carousel" aria-hidden="true" hidden="" checked="checked">
          <div class="carousel-item absolute opacity-0" style="height:90vh;">
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
          <div class="carousel-item absolute opacity-0" style="height:90vh;">
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
          <div class="carousel-item absolute opacity-0" style="height:90vh;">
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

      <!-- First Container -->
      <div class="bg-blue-100 mt-20 py-10 p-5 lg:px-10 md:rounded-xl shadow-lg md:mx-4 lg:mx-5 border-2 border-blue-200">
        <!-- First Section -->
        <section class="container mx-auto">
          <!-- Flex -->
          <div class="flex flex-col">

            <!-- Vision Section -->
            <div class="bg-white flex flex-col text-center items-center p-5 rounded-2xl shadow-lg border-2 border-blue-200">
              <div class="rounded-full bg-blue-400 p-3 px-4 flex shadow-lg border-2 border-blue-500">
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
                <div class="rounded-full bg-white p-4 flex shadow-lg w-min mb-6 border-2 border-blue-300">
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
                  <div class="mt-8 mb-5 2xl:mt-16">
                    <a
                      href="https://www.cdc.gov/coronavirus/2019-ncov/index.html"
                      class=" py-1 px-2 text-xl font-semibold tracking-wide text-gray-700 hover:text-black border-2 border-transparent rounded-2xl focus:border-blue-500 focus:text-black focus:bg-blue-200"
                      >Covid-19 Information
                    </a>
                  </div>
                </div>
              </div>
              <!-- Right Side -->
              <div class="lg:my-auto">
                <div class="flex flex-col bg-blue-300 rounded-2xl shadow-lg border-2 border-blue-200">
                  <img
                    alt="..."
                    src="../static/swimnews.jpg"
                    class="m-5 lg:m-2 mb-5 rounded-xl shadow-lg border-2 border-blue-200"
                  />
                  <div class="mb-5 lg:mt-2">
                    <NuxtLink
                      to="/"
                      class="m-2 md:m-5 lg:mx-3 py-1 px-2 rounded-2xl text-3xl md:text-4xl lg:text-2xl xl:text-3xl 2xl:text-4xl text-white font-bold tracking-widest hover:text-gray-200 focus:text-gray-300 border-2 border-transparent focus:border-white focus:bg-blue-400"
                      >Swimming Events
                    </NuxtLink>
                  </div>
                  <hr class="mx-5 mb-5 w-5/6 md:w-5/6 lg:w-5/6 2xl:w-5/6">
                  <p
                    class="px-4 lg:pr-5 lg:pl-1 w-5/6 md:w-11/12 lg:w-11/12 2xl:w-11/12 mx-2 lg:mx-5 mb-8 text-xl tracking-wide text-gray-100"
                    >Check out the latest news and important updates from the organization, tips for training, and any upcoming events.
                  </p>
                </div>
              </div>
            </div>
          <!-- Flex -->
          </div>
        <!-- First Section -->
        </section>
        <hr class="h-1 bg-blue-200 my-20 lg:hidden">
        <!-- Second Section -->
        <section class="mt-20 lg:mt-0">
          <!-- Flex -->
          <div class="flex flex-col lg:flex-row lg:p-10 xl:p-20 bg-blue-300 rounded-2xl shadow-xl border-2 border-b-0 border-blue-200 ">
            <div class="lg:w-4/5 xl:w-full p-4 my-auto lg:mr-10 xl:mr-20">
              <h2
                class="text-white text-2xl md:text-3xl lg:text-2xl xl:text-3xl 2xl:text-4xl lg:tracking-wide 2xl:tracking-widest font-bold tracking-widest text-center"
                >Abuse Prevention Program
              </h2>
              <hr class="mt-5 lg:mb-5">
              <p
                class="text-white font-light text-xl p-5 pb-0 md:pb-2 lg:p-2"
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
            <!-- Images -->
            <div class="lg:w-4/5 2xl:w-5/6 lg:px-5">
              <div 
                class="bg-cover bg-center h-80 w-full lg:h-56 border-2 border-b-0 border-blue-200 lg:rounded-t-lg shadow-lg flex flex-col bg-black opacity-80"
                style='background-image: url("../educate.jpg");'
                >
                  <div class="m-auto flex flex-col items-center pt-4 lg:pt-2">
                    <h2
                      class="text-gray-900 text-bold tracking-widest text-4xl md:text-5xl lg:text-3xl uppercase"
                      >Recognize
                    </h2>
                    <p
                      class="text-center text-black text-black tracking-wider lg:tracking-normal text-lg md:text-2xl lg:text-base 2xl:text-lg"
                      >Learn about risks and red flag behaviors.
                    </p>
                  </div>
                  <span class="border-t-2 border-blue-200">
                    <NuxtLink
                        to=""
                        class="text-2xl lg:text-xl tracking-widest font-bold justify-center flex text-white py-4 lg:py-2 opacity-70 bg-blue-300 hover:bg-blue-400 hover:text-black hover:shadow-2xl"
                        >Get Educated!
                    </NuxtLink>
                  </span>
              </div>
              
              <div 
                class="bg-cover bg-center h-80 w-full lg:h-56 border-2 border-blue-200 shadow-lg flex flex-col bg-black opacity-80"
                style='background-image: url("../action.jpg");'
                >
                  <div class="m-auto flex flex-col items-center pt-4 lg:pt-2">
                    <h2
                      class="text-gray-900 text-bold tracking-widest text-4xl md:text-5xl lg:text-3xl uppercase"
                      >Respond
                    </h2>
                    <p
                      class="text-center text-black text-black tracking-wider lg:tracking-normal text-lg md:text-2xl lg:text-base 2xl:text-lg"
                      >Know how to respond to an incident.
                    </p>
                  </div>
                  <span class="border-t-2 border-blue-200">
                    <NuxtLink
                        to=""
                        class="text-2xl lg:text-xl tracking-widest font-bold justify-center flex text-white py-4 lg:py-2 opacity-70 bg-blue-300 hover:bg-blue-400 hover:text-black hover:shadow-2xl"
                        >Take Action and Report!
                    </NuxtLink>
                  </span>
              </div>
              
              <div 
                class="bg-cover bg-center h-80 w-full lg:h-56 border-2 border-blue-200 rounded-b-lg shadow-lg flex flex-col bg-black opacity-80"
                style='background-image: url("../recover.jpg");'
                >
                  <div class="m-auto flex flex-col items-center pt-4 lg:pt-2">
                    <h2
                      class="text-gray-900 text-bold tracking-widest text-4xl md:text-5xl lg:text-3xl uppercase"
                      >Recover
                    </h2>
                    <p
                      class="text-center text-black text-black tracking-wider lg:tracking-normal text-lg md:text-2xl lg:text-base 2xl:text-lg"
                      >Empower survivors with resources.
                    </p>
                  </div>
                  <span class="border-t-2 border-blue-200">
                    <NuxtLink
                        to=""
                        class="text-2xl lg:text-xl tracking-widest font-bold justify-center flex text-white py-4 lg:py-2 opacity-70 bg-blue-300 hover:bg-blue-400 hover:text-black hover:shadow-2xl"
                        >Assit With Recovery!
                    </NuxtLink>
                  </span>
              </div>
            </div>
          <!-- Flex -->
          </div>
        </section>
      <!-- First Container -->
      </div>

      
      <!-- Second Container -->
      <div class="bg-blue-300 mt-20 lg:mx-0 border-t-2 border-blue-100">
        <!-- Third Section -->
        <section class="container mx-auto">
          <!-- Flex -->
          <div class="flex flex-col">
            <!-- Contact Us Container -->
            <div class="flex flex-col text-center items-center my-10 lg:mt-20">
              <h2
                class="text-3xl md:text-4xl lg:text-5xl text-white font-extrabold tracking-widest"
                >Contact Us
              </h2>
              <hr class="my-5 w-11/12 md:w-3/5 lg:w-2/5 xl:w-1/3 2xl:w-1/4">
              <p
                class="whitespace-pre-line w-11/12 text-xl lg:text-2xl text-white"
                >If you would like to contact one of us,
                please leave your full name, email, along 
                with a description of the situation and we
                will get back to you as soon as possible. 
                Have a good day.
              </p>
            </div>

            <!-- Form for sending messages to staff -->
            <div class="w-full mx-auto px-5 md:px-10 relative md:my-5">
              <div class="flex flex-wrap justify-center">
                <div class="w-full lg:w-3/4 xl:w-3/5 2xl:w-2/5 px-0">
                  <div
                    class="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blue-100 border-2 border-blue-200"
                  >
                    <!-- Text above the inputs -->
                    <div class="flex-auto p-5 lg:p-10">
                      <h4 class="text-2xl font-semibold text-gray-700">Want to ask us a question?</h4>
                      <p class="leading-relaxed mt-1 mb-4 text-gray-600">
                        Complete this form and we will get back to you soon.
                      </p>
                      <!-- Area for name -->
                      <div class="relative w-full mb-3 mt-8">
                        <label
                          class="block uppercase text-gray-700 text-xs font-bold mb-2"
                          for="full-name"
                          >Full Name</label
                        ><input
                          type="text"
                          class="px-3 py-3 placeholder-gray-400 text-gray-700 bg-gray-100 rounded text-sm shadow focus:outline-none focus:shadow-outline w-full"
                          placeholder="Full Name"
                          style="transition: all 0.15s ease 0s;"
                        />
                      </div>
                      <!-- Area for email -->
                      <div class="relative w-full mb-3">
                        <label
                          class="block uppercase text-gray-700 text-xs font-bold mb-2"
                          for="email"
                          >Email</label
                        ><input
                          type="email"
                          class="px-3 py-3 placeholder-gray-400 text-gray-700 bg-gray-100 rounded text-sm shadow focus:outline-none focus:shadow-outline w-full"
                          placeholder="Email"
                          style="transition: all 0.15s ease 0s;"
                        />
                      </div>
                      <!-- Area for the message -->
                      <div class="relative w-full mb-3">
                        <label
                          class="block uppercase text-gray-700 text-xs font-bold mb-2"
                          for="message"
                          >Message</label
                        ><textarea
                          rows="4"
                          cols="80"
                          class="px-3 py-3 placeholder-gray-400 text-gray-700 bg-gray-100 rounded text-sm shadow focus:outline-none focus:shadow-outline w-full"
                          placeholder="Type a message..."
                        ></textarea>
                      </div>
                      <!-- Button to send message -->
                      <div class="text-center mt-6">
                        <button
                          class="transition duration-500 ease-in-out transform rounded-lg bg-gradient-to-r from-blue-300 hover:from-blue-400 to-blue-200 hover:to-blue-30 focus:ring-blue-200 focus:text-blue-100 text-gray-600 active:bg-gray-700 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
                          type="button"
                          style="transition: all 0.15s ease 0s;"
                        >
                          Send Message
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            <!-- Form for sending messages to staff -->
            </div>
          <!-- Flex -->
          </div>
          <!-- Flex 2 -->
          <div class="flex flex-col">
            
          </div>
        </section>
      <!-- Second Container -->
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