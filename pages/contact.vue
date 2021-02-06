<template>
    <!-- Holds Everything -->
    <div class="flex flex-col pt-40 bg-blue-300">
        <!-- Hero Image at Top -->
        <div class="" style="height:40vh;">
            <div
                id="contact-image"
                class="bg-cover w-full bg-center h-full"
                style='background-image: url("../contact.jpg");'
                >
                <div class="flex flex-col justify-center items-center h-full bg-black opacity-50">
                    <h2
                        class="text-white text-4xl md:text-5xl lg:text-6xl 2xl:text-7xl tracking-wider md:tracking-wider uppercase"
                        >Reach Out To Us!
                    </h2>
                </div>
            </div>
        </div>  
        <!-- Holds Everything Under Hero Image -->
        <div class="flex items-center justify-center py-20 px-6 bg-gradient-to-b from-blue-300 to-blue-200">
            <!-- Form for sending messages to staff -->
            <div class="w-full md:w-2/3 lg:w-3/4 xl:w-4/5 2xl:w-5/6 mx-auto px-5 md:px-10 relative md:my-5">
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
                          class="hover:text-white transition duration-500 ease-in-out transform rounded-lg bg-gradient-to-r from-blue-300 hover:from-blue-400 to-blue-200 hover:to-blue-30 focus:ring-blue-200 focus:text-blue-100 text-gray-600 active:bg-gray-700 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
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
        </div>

      <!-- CEO Contact Information -->
      <div class="bg-gradient-to-b from-blue-200 to-blue-300">
        <div class="w-full md:w-11/12 lg:w-3/4 xl:w-2/3 my-20 md:mx-auto ">
          <div class="flex flex-col lg:flex-row">
            <!-- Image -->
            <div class="flex flex-col lg:flex-row mx-auto">
              <img
                  alt="..."
                  src="ricky.jpg"
                  class="shadow-lg rounded-full h-96 w-96 lg:h-64 lg:w-64 2xl:w-72 2xl:h-72 mx-auto lg:ml-0"
                  style=""
                />
              <!-- Contact Information -->
              <div class="lg:ml-10 text-center lg:text-left flex flex-col my-auto">
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
      </div>


    <!-- Holds Everything -->
    </div>
</template>