<template>

    <!-- Main Nav Container -->
    <nav class="z-40 h-auto w-full bg-blue-400 flex flex-wrap items-center justify-between navbar-expand-lg fixed">
        <!-- Container Holds All of the Content -->
        <div class="xl:px-20 px-5 mx-0 z-50 w-full flex flex-wrap items-center pt-2 rounded-b-xl bg-blue-400 shadow-md hover:shadow-lg"
        v-bind:class="{'bg-transparent': !showMenu, 'bg-gray-700': showMenu}">

            <!-- Content on Left Side and Mobile Dropdown Button -->
            <div class="w-full relative flex justify-between lg:w-auto lg:block lg:justify-start">
                <NuxtLink 
                class="text-white text-3xl xl:text-4xl font-bold leading-relaxed inline-block m-3 p-2" 
                to="/"
                >Maverics Swimming <span class="hidden sm:inline-block">Academy</span> 
                </NuxtLink>
                <button 
                class="mr-10 text-white hover:text-yellow-400 cursor-pointer text-xl leading-none border border-solid border-transparent 
                rounded bg-transparent block lg:hidden outline-none focus:outline-none" 
                v-on:click="toggleNavbar()"
                >
                <fa-icon class="text-4xl" :icon="['fas','bars']" />
                </button>
            <!-- Content on Left Side and Mobile Dropdown Button -->
            </div>
            <!-- Content on Right Side of Screen -->
            <div 
            v-bind:class="{'hidden': !showMenu, 'flex': showMenu}" 
            class="lg:flex lg:flex-grow flex-col 2xl:text-xl mx-5 w-full lg:w-1/3 2xl:w-1/2 items-end pb-5"
            >
                <!-- List of Links -->
                <ul class="flex flex-col lg:flex-row-reverse tracking-widest items-end w-full">
                    <li class="">
                        <NuxtLink 
                        class="flex items-center lg:mx-6 lg:mr-1 lg:ml-1 my-2 px-5 lg:px-1 lg:py-2 text-md font-bold text-white hover:text-gray-300" 
                        to="/contact"
                        >CONTACT
                        </NuxtLink>
                    </li>
                    <li class="">
                        <NuxtLink 
                        class="flex items-center lg:mx-6 lg:mr-1 lg:ml-1 my-2 px-5 lg:px-1 lg:py-2 text-md font-bold text-white hover:text-gray-300" 
                        to="/events"
                        >EVENTS
                        </NuxtLink>
                    </li>
                    <li class="">
                        <NuxtLink 
                        class="flex items-center lg:mx-6 lg:mr-1 lg:ml-1 my-2 px-5 lg:px-1 lg:py-2 text-md font-bold text-white hover:text-gray-300" 
                        to="/about"
                        >ABOUT US
                        </NuxtLink>
                    </li>
                    <li class="">
                        <NuxtLink 
                        class="flex items-center lg:mx-6 lg:mr-1 lg:ml-1 my-2 px-5 lg:px-1 lg:py-2 text-md font-bold text-white hover:text-gray-300" 
                        to="/safe"
                        >SAFE SPORT
                        </NuxtLink>
                    </li>
                </ul>

                

                <ul class="lg:hidden flex flex-col lg:flex-row-reverse tracking-widest items-end w-full">
                    <hr class="my-5 w-2/5">
                    <li class="">
                        <NuxtLink 
                        class="flex items-center lg:mx-6 lg:mr-1 lg:ml-1 my-2 px-5 lg:px-1 lg:py-2 text-md font-bold text-white hover:text-gray-300" 
                        to="/practice"
                        >SIGN IN
                        </NuxtLink>
                    </li>
                    <li class="">
                        <NuxtLink 
                        class="flex items-center lg:mx-6 lg:mr-1 lg:ml-1 my-2 px-5 lg:px-1 lg:py-2 text-md font-bold text-white hover:text-gray-300" 
                        to="/practice"
                        >SIGN UP
                        </NuxtLink>
                    </li>
                </ul>

                <ul class="lg:hidden flex flex-row text-3xl lg:text-lg">
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
                        class="flex items-center mr-5 lg:ml-1 my-2 px-2 lg:py-2 text-white lg:hover:text-white hover:text-gray-300 lg:bg-indigo-300 lg:rounded-3xl lg:hover:shadow-lg lg:border-2 border-transparent hover:border-white focus:border-gray-200"
                        >
                        <fa-icon :icon="['fab','instagram']" />
                      </NuxtLink>
                    </li>
                </ul>

                

            <!-- Content on Right Side of Screen -->
            </div>
        <!-- Container Holds All of the Content -->     
        </div>

        <!-- Login Section of Header -->
        <div class="px-40 bg-white w-full shadow-md hover:shadow-lg hidden lg:block rounded-b-lg">
            <ul class="flex flex-row tracking-widest">
                <span class="flex flex-col lg:flex-row">
                <hr class="w-11/12 lg:hidden my-2">
                  <li class="flex items-center">
                    <NuxtLink
                      to="/sign"
                      class="hover:text-gray-200 flex items-center m-2 px-8 py-1 text-lg lg:text-base 
                      font-bold text-white hover:text-gray-300 bg-blue-400 rounded-lg hover:shadow-lg 
                      focus:text-white focus:shadow-2xl"
                      >Sign In
                      <i class="" />
                    </NuxtLink>
                  </li>
                  <li class="flex items-center">
                    <NuxtLink
                      to="/sign"
                      class="hover:text-gray-200 flex items-center m-2 px-8 py-1 text-lg lg:text-base 
                      font-bold text-white hover:text-gray-300 bg-blue-400 rounded-lg hover:shadow-lg 
                      focus:text-white focus:shadow-2xl"
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
                            class="flex items-center mx-3 lg:mx-1 my-2 px-2 lg:py-2 text-white hover:text-gray-200 lg:bg-blue-600 lg:rounded-3xl lg:hover:shadow-lg focus:border-gray-200"
                            >
                            <fa-icon :icon="['fab','facebook']" />
                        </NuxtLink>
                    </li>

                    <li>
                        <NuxtLink
                            to="/"
                            class="flex items-center mx-3 lg:mx-1 my-2 px-2  lg:py-2 text-white hover:text-gray-200 lg:bg-blue-500 lg:rounded-3xl lg:hover:shadow-lg focus:border-gray-200"
                            >
                            <fa-icon :icon="['fab','twitter']" />
                        </NuxtLink>
                    </li>

                    
                    <li>
                        <NuxtLink
                            to="/"
                            class="flex items-center mr-5 lg:ml-1 my-2 px-2 lg:py-2 text-white hover:text-gray-200 lg:bg-indigo-300 lg:rounded-3xl lg:hover:shadow-lg focus:border-gray-200"
                            >
                            <fa-icon :icon="['fab','instagram']" />
                        </NuxtLink>
                    </li>
                </div>
            </ul>
        </div>
    <!-- Main Nav Container -->
    </nav>
</template>

<script>

export default {
  name: "navbar",
  
  data() {
    return {
      showMenu: false
    }
  },
  
  methods: {
    toggleNavbar: function(){
      this.showMenu = !this.showMenu;
    }
    
  },

  watch: {
    '$route' () {
      this.showMenu = false
    }
  }
}
</script>