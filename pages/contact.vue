<template>
    <!-- Form for sending messages to staff -->
            <div class="w-full mx-auto px-5 md:px-10 relative md:my-5">
              <div class="flex flex-wrap justify-center">
                <div class="w-full lg:w-3/4 xl:w-3/5 2xl:w-2/5 px-0 mt-64">
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
</template>