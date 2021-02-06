<template>
    <div class="flex flex-col pt-40 bg-blue-300">
        <!-- Hero Image at Top -->
        <div class="" style="height:40vh;">
            <div 
                class="bg-cover bg-fixed bg-center h-full"
                style='background-image: url("../about.jpg");'
                >
                <div class="flex flex-col justify-center items-center h-full bg-black opacity-50">
                    <h2
                        class="text-white text-4xl md:text-5xl lg:text-6xl 2xl:text-7xl tracking-wider md:tracking-widest uppercase"
                        >Learn About Us!
                    </h2>
                </div>
            </div>
        </div>
        <!-- Intro of the company -->
        <section>
            <!-- Intro of the company -->
            <div class="py-24 bg-gradient-to-b from-blue-300 to-blue-200">
              <h2
                class="text-center text-4xl tracking-widest lg:tracking-wider xl:traciking-widest uppercase text-white font-bold"
                >Our Story
              </h2>
              <p
                class="text-center text-lg leading-relaxed m-4 text-white w-3/4 mx-auto"
                >Maveric's Swim Acedamy was born when Ricky Sanchez realized the demand for quality swim instruction
                after teaching swim lessons at a local swim club for the past few summers. He became determined to
                help children achieve excellences in the sport of swimming. Maveric's Swim Acedamy inspires and enables
                our members to excell in more than just swimming. 
              </p>
              <img 
                src="../static/about2.jpg" 
                alt=""
                class="h-96 mt-16 w-5/6 lg:w-1/2 mx-auto rounded-2xl shadow-xl"
              >
            </div>
        </section>

        <div class=" rounded-lg bg-blue-200 flex items-center justify-center px-6 bg-gradient-to-b from-blue-200 to-blue-300">
            <!-- Members of the Team -->
            <section class="my-20">
              <div class="container mx-auto p-10">
                <div class=" flex flex-wrap justify-center text-center mb-24">
                  <div class="w-full lg:w-7/12 px-4">
                    <h2 
                      class="text-4xl font-semibold tracking-widest lg:tracking-wider xl:traciking-widest uppercase text-white"
                      >Here are <span class="block sm:inline-block">our heroes</span>
                    </h2>
                    <p class="lg:whitespace-normal text-lg leading-relaxed m-4 text-white">
                      Our vision is to inspire and enable 
                      our members to achieve excellence 
                      in the sport of swimming and in life. 
                    </p>
                  </div>
                </div>
                <div class="flex flex-wrap text-white">
                  <div class="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12">
                    <div class="px-6">
                      <img
                        alt="..."
                        src="ricky.jpg"
                        class="rounded-full h-96 w-96 md:h-64 md:w-64 lg:h-52 lg:w-52 xl:h-64 xl:w-64 2xl:w-72 2xl:h-72 mx-auto"
                        style=""
                      />
                      <div class="pt-6 text-center">
                        <h5 class="text-xl font-bold">Ricky Sanchez</h5>
                        <p class="mt-1 text-sm text-gray-100 uppercase font-semibold">
                          Founder <span class="block">& Head Couch</span>
                        </p>
                        <div class="mt-6">
                          <button
                            class="bg-blue-400 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                            type="button"
                          >
                            <i class="fab fa-twitter"></i></button
                          ><button
                            class="bg-blue-600 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                            type="button"
                          >
                            <i class="fab fa-facebook-f"></i></button
                          ><button
                            class="bg-pink-500 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                            type="button"
                          >
                            <i class="fab fa-dribbble"></i>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12">
                    <div class="px-6">
                      <img
                        alt="..."
                        src="patrick.jpg"
                        class="rounded-full h-96 w-96 md:h-64 md:w-64 lg:h-52 lg:w-52 xl:h-64 xl:w-64 2xl:w-72 2xl:h-72 mx-auto"
                        style=""
                      />
                      <div class="pt-6 text-center">
                        <h5 class="text-xl font-bold">Patrick Suchy</h5>
                        <p class="mt-1 text-sm text-gray-100 uppercase font-semibold">
                          Web Developer <span class="block">& UI/UX Designer</span>
                        </p>
                        <div class="mt-6">
                          <button
                            class="bg-blue-400 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                            type="button"
                          >
                            <i class="fab fa-twitter"></i></button
                          ><button
                            class="bg-blue-600 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                            type="button"
                          >
                            <i class="fab fa-facebook-f"></i></button
                          ><button
                            class="bg-pink-500 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                            type="button"
                          >
                            <i class="fab fa-dribbble"></i>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12">
                    <div class="px-6">
                      <img
                        alt="..."
                        src="piotr.jpg"
                        class="rounded-full h-96 w-96 md:h-64 md:w-64 lg:h-52 lg:w-52 xl:h-64 xl:w-64 2xl:w-72 2xl:h-72 mx-auto"
                        style=""
                      />
                      <div class="pt-6 text-center">
                        <h5 class="text-xl font-bold">Piotr Senkow</h5>
                        <p class="mt-1 text-sm text-gray-100 uppercase font-semibold">
                          Software Engineer <span class="block">& Web Developer</span>
                        </p>
                        <div class="mt-6">
                          <button
                            class="bg-blue-400 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                            type="button"
                          >
                            <i class="fab fa-twitter"></i></button
                          ><button
                            class="bg-blue-600 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                            type="button"
                          >
                            <i class="fab fa-facebook-f"></i></button
                          ><button
                            class="bg-pink-500 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                            type="button"
                          >
                            <i class="fab fa-dribbble"></i>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12">
                    <div class="px-6">
                      <img
                        alt="..."
                        src="samit.jpg"
                        class="rounded-full h-96 w-96 md:h-64 md:w-64 lg:h-52 lg:w-52 xl:h-64 xl:w-64 2xl:w-72 2xl:h-72 mx-auto"
                        style=""
                      />
                      <div class="pt-6 text-center">
                        <h5 class="text-xl font-bold">Samit Minhas</h5>
                        <p class="mt-1 text-sm text-gray-100 uppercase font-semibold">
                          Patent Lawyer <span class="block">& Finance Advisor</span>
                        </p>
                        <div class="mt-6">
                          
                          <button
                            class="bg-blue-400 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                            type="button"
                          >
                            <i class="fab fa-twitter"></i></button
                          ><button
                            class="bg-blue-600 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                            type="button"
                          >
                            <i class="fab fa-facebook-f"></i></button
                          ><button
                            class="bg-pink-500 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                            type="button"
                          >
                            <i class="fab fa-dribbble"></i>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </section>
        </div>

        
        
    </div>
</template>