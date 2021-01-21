<template>

    <footer class="relative bg-gray-300 pt-0 xl:pt-8 pb-6">
      <div
        class="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20"
        style="height: 80px; transform: translateZ(0px);"
      >
      </div>



      <div class="container mx-auto px-4">
        <div class="flex flex-wrap">
          <!-- Content on Left Side -->
          <div class="w-full lg:w-6/12 px-4">
            <h4 class="lg:text-4xl font-semibold text-3xl">Let's keep in touch!</h4>
            <h5 class="text-lg mt-0 mb-2 text-gray-700">
              Find us on any of these platforms, we respond quickly.
            </h5>



            <!-- Social Media Icons (Need to adjust to tailwind css)-->
            <div class="mt-6">
              <button
                class="bg-white text-blue-400 shadow-md font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2 p-3 hover:shadow-xl"
                type="button"
              >
                <i class="flex fab fa-twitter"></i></button>

              <button
                class="bg-white text-blue-600 shadow-md font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2 p-3 hover:shadow-xl"
                type="button"
              >
                <i class="flex fab fa-facebook-square"></i></button>

                <button
                class="bg-white text-red-600 shadow-md font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2 p-3 hover:shadow-xl"
                type="button"
              >
                <i class="flex fab fa-google"></i></button>

                <button
                class="bg-white text-gray-900 shadow-md font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2 p-3 hover:shadow-xl"
                type="button"
              >
                <i class="flex fab fa-github"></i></button>

                <button
                class="bg-white text-blue-600 shadow-md font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2 p-3 hover:shadow-xl"
                type="button"
              >
                <i class="flex fab fa-facebook-square"></i></button>

                <button
                class="bg-white text-blue-600 shadow-md font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2 p-3 hover:shadow-xl"
                type="button"
              >
                <i class="flex fab fa-facebook-square"></i></button>
            </div>
          </div>




          <!-- Content on Right side -->
          <div class="w-full lg:w-6/12 px-3">

            <!-- First set of Links -->
            <div class="flex flex-wrap items-top mb-6 mt-20 lg:mt-0">
              <div class="w-1/2 lg:w-4/12 px-4 ml-auto">
                <span
                  class="block uppercase text-gray-600 text-sm font-semibold mb-4 lg:mb-3 "
                  >Useful Links</span
                >
                <ul class="list-unstyled">
                    <li>
                    <a
                      class="text-gray-600 hover:text-black hover:font-black font-semibold block pb-2 text-sm"
                      href="https://www.creative-tim.com/presentation"
                      >Home</a
                    >
                  </li>
                  <li>
                    <a
                      class="text-gray-600 hover:text-black hover:font-black font-semibold block pb-2 text-sm"
                      href="https://www.creative-tim.com/presentation"
                      >Public Notices</a
                    >
                  </li>
                  <li>
                    <a
                      class="text-gray-600 hover:text-black hover:font-black font-semibold block pb-2 text-sm"
                      href="https://blog.creative-tim.com"
                      >Meetings</a
                    >
                  </li>
                  <li>
                    <a
                      class="text-gray-600 hover:text-black hover:font-black font-semibold block pb-2 text-sm"
                      href="https://www.github.com/creativetimofficial"
                      >Getting Help</a
                    >
                  </li>
                  <li>
                    <a
                      class="text-gray-600 hover:text-black hover:font-black font-semibold block pb-2 text-sm"
                      href="https://www.creative-tim.com/bootstrap-themes/free"
                      >Employee Portal</a
                    >
                  </li>
                </ul>
              </div>

              <!-- Second set of Links -->
              <div class="w-1/2 lg:w-4/12 px-4">
                <span
                  class="block uppercase text-gray-600 text-sm font-semibold mb-4 lg:mb-3"
                  >Resources</span
                >
                <ul class="list-unstyled">
                  <li>
                    <a
                      class="text-gray-600 hover:text-black hover:font-black font-semibold block pb-2 text-sm"
                      href="https://github.com/creativetimofficial/argon-design-system/blob/master/LICENSE.md"
                      >About Us</a
                    >
                  </li>
                  <li>
                    <a
                      class="text-gray-600 hover:text-black hover:font-black font-semibold block pb-2 text-sm"
                      href="https://creative-tim.com/contact-us"
                      >Contact Us</a
                    >
                  </li>
                  <li>
                    <a
                      class="text-gray-600 hover:text-black hover:font-black font-semibold block pb-2 text-sm"
                      href="https://creative-tim.com/terms"
                      >Terms &amp; Conditions</a
                    >
                  </li>
                  <li>
                    <a
                      class="text-gray-600 hover:text-black hover:font-black font-semibold block pb-2 text-sm"
                      href="https://creative-tim.com/privacy"
                      >Privacy Policy</a
                    >
                  </li>
                  <li>
                    <a
                      class="text-gray-600 hover:text-black hover:font-black font-semibold block pb-2 text-sm"
                      href="https://creative-tim.com/contact-us"
                      >MIT License</a
                    >
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <!-- Copyright at bottom of Footer -->
        <hr class="my-6 border-gray-400" />
        <div
          class="flex flex-wrap items-center md:justify-between justify-center"
        >
          <div class="w-full md:w-4/12 px-4 mx-auto text-center">
            <div class="text-sm text-gray-600 font-semibold py-1">
              Copyright © 2021 Insert Text by
              <a
                href="https://www.creative-tim.com"
                class="text-gray-600 hover:text-gray-900"
                >Creator</a
              >.
            </div>
          </div>
        </div>
      </div>
    </footer>
</template>