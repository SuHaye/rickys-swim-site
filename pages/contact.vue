<template>
    <div class="flex flex-col pt-40 bg-blue-200">
        <!-- Hero Image at Top -->
        <div class="" style="height:40vh;">
            <div
                id="contact-image"
                class="bg-cover w-full bg-center h-full border-b-2 border-t-2 border-blue-400"
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
        <div class="shadow-lg rounded-lg border-2 border-blue-300 flex items-center justify-center py-20 px-6 bg-blue-100">
             <!-- Form for sending messages to staff -->
              <div class="flex flex-wrap justify-center">
                <div class="w-full md:w-2/3 lg:w-3/4 xl:w-4/5 2xl:w-5/6 px-0">
                  <div
                    class="relative flex flex-col min-w-0 break-words w-fullshadow-lg rounded-lg bg-blue-100 border-2 border-blue-300"
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
            <!-- Form for sending messages to staff -->
            </div>
            <!-- Info about Lessons/Practice -->
            <div class="">

            </div>
        </div>

        
        
    </div>
</template>