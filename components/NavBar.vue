<template>

    <!-- Main Nav Container -->
    <nav class="z-50 h-auto w-full xl:px-10 bg-blue-400 flex flex-wrap items-center justify-between navbar-expand-lg fixed shadow-lg hover:shadow-xl">
        <!-- Container Holds All of the Content -->
        <div class="container mx-auto flex flex-wrap items-center pb-6 lg:pb-0 pt-2 rounded-b-xl"
        v-bind:class="{'bg-transparent': !showMenu, 'bg-blue-400': showMenu}">

            <!-- Content on Left Side and Mobile Dropdown Button -->
            <div class="w-full relative flex justify-between lg:w-auto lg:block lg:justify-start">
                <NuxtLink 
                class="text-white text-3xl lg:text-4xl font-bold leading-relaxed inline-block m-3 p-2" 
                to="/"
                >Maverics <span class="hidden sm:inline-block">Swim Team</span> 
                </NuxtLink>
                <button 
                class="mr-10 text-white hover:text-gray-200 cursor-pointer text-xl leading-none border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none" 
                type="button" 
                v-on:click="toggleNavbar()"
                >
                <fa-icon class="text-4xl" :icon="['fas','bars']" />
                </button>
            <!-- Content on Left Side and Mobile Dropdown Button -->
            </div>

            <!-- Content on Right Side of Screen -->
            <div 
            v-bind:class="{'hidden': !showMenu, 'flex': showMenu}" 
            class="lg:flex lg:flex-grow flex-col 2xl:text-xl mx-5"
            >
              
                <ul class="flex flex-col-reverse lg:flex-row list-none ml-auto tracking-widest uppercase lg:normalcase">
                  <span class="flex flex-col lg:flex-row">
                    <hr class="w-11/12 lg:hidden my-2">
                  <li class="flex items-center">
                    <NuxtLink
                      to="/sign"
                      class=" lg:hover:text-gray-200 flex items-center mx-3 lg:mx-0 my-2 px-2 lg:p-0 text-lg lg:text-base font-bold text-white hover:text-gray-300 lg:border-2 border-transparent lg:rounded-2xl lg:px-5 hover:border-white lg:hover:shadow-lg  focus:text-white focus:shadow-2xl"
                      >Sign In
                      <i class="" />
                    </NuxtLink>
                  </li>
                  <li class="flex items-center">
                    <NuxtLink
                      to="/sign"
                      class=" lg:hover:text-gray-200 flex items-center mx-3 lg:mx-2 my-2 px-2 lg:p-0 lg:mt-2 text-lg lg:text-base font-bold text-white hover:text-gray-300 lg:bg-blue-400 lg:rounded-2xl lg:px-5 lg:hover:shadow-lg lg:border-2 border-transparent hover:border-white  focus:text-white focus:shadow-2xl"
                      >Sign Up
                      <i class="" />
                    </NuxtLink>
                  </li>
                  </span>
                  <!-- Social Media Links -->
                  <div class="flex flex-row text-3xl lg:text-lg">
                    <li>
                      <NuxtLink
                        to="/"
                        class="flex items-center mx-3 lg:mx-1 my-2 px-2 lg:py-2 text-white lg:hover:text-white hover:text-gray-300 lg:bg-blue-600 lg:rounded-3xl lg:hover:shadow-lg lg:border-2 border-transparent hover:border-white focus:border-gray-200"
                        >
                        <fa-icon :icon="['fab','facebook']" />
                      </NuxtLink>
                    </li>

                    <li>
                      <NuxtLink
                        to="/"
                        class="flex items-center mx-3 lg:mx-1 my-2 px-2  lg:py-2 text-white lg:hover:text-white hover:text-gray-300 lg:bg-blue-500 lg:rounded-3xl lg:hover:shadow-lg lg:border-2 border-transparent hover:border-white focus:border-gray-200"
                        >
                        <fa-icon :icon="['fab','twitter']" />
                      </NuxtLink>
                    </li>

                    <li>
                      <NuxtLink
                        to="/"
                        class="flex items-center mx-3 lg:mx-1 my-2 px-2 lg:py-2 text-white lg:hover:text-white hover:text-gray-300 lg:bg-green-500 lg:rounded-3xl lg:hover:shadow-lg lg:border-2 border-transparent hover:border-white focus:border-gray-200"
                        >
                        <fa-icon :icon="['fab','google']" />
                      </NuxtLink>
                    </li>
                    
                    <li>
                      <NuxtLink
                        to="/"
                        class="flex items-center mr-5 lg:ml-1 my-2 px-2 lg:py-2 text-white lg:hover:text-white hover:text-gray-300 lg:bg-indigo-300 lg:rounded-3xl lg:hover:shadow-lg lg:border-2 border-transparent hover:border-white focus:border-gray-200"
                        >
                        <fa-icon :icon="['fab','instagram']" />
                      </NuxtLink>
                    </li>
                  </div>
                </ul>    
                <hr class="w-11/12 lg:hidden my-2">

                <!-- List of Links -->
                <ul class="flex flex-col lg:flex-row tracking-widest lg:ml-auto">
                    <li class="">
                        <NuxtLink 
                        class="flex items-center lg:mx-6 lg:mr-2 lg:ml-1 my-2 px-5 lg:px-1 lg:py-2 text-md font-bold text-white hover:text-gray-300" 
                        to="/contact"
                        >CONTACT
                        </NuxtLink> 
                    </li>
                    <li class="">
                        <NuxtLink 
                        class="flex items-center lg:mx-6 lg:mr-2 lg:ml-1 my-2 px-5 lg:px-1 lg:py-2 text-md font-bold text-white hover:text-gray-300" 
                        to="/about"
                        >EVENTS
                        </NuxtLink>
                    </li>
                    <li class="">
                        <NuxtLink 
                        class="flex items-center lg:mx-6 lg:mr-2 lg:ml-1 my-2 px-5 lg:px-1 lg:py-2 text-md font-bold text-white hover:text-gray-300" 
                        to="/about"
                        >ABOUT US
                        </NuxtLink>
                    </li>
                    <li class="">
                        <NuxtLink 
                        class="flex items-center lg:mx-6 lg:mr-2 lg:ml-1 my-2 px-5 lg:px-1 lg:py-2 text-md font-bold text-white hover:text-gray-300" 
                        to="#patrick3"
                        >SAFE SPORT
                        </NuxtLink>
                    </li>
                </ul>

            <!-- Content on Right Side of Screen -->
            </div>
        <!-- Container Holds All of the Content -->     
        </div>
    <!-- Main Nav Container -->
    </nav>
</template>

<script>

export default {
  name: "blue-navbar",
  data() {
    return {
      showMenu: false
    }
  },
  
  methods: {
    toggleNavbar: function(){
      this.showMenu = !this.showMenu;
    },
    
  }
}
</script>