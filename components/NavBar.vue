<template>

    <!-- Main Nav Container -->
    <nav class="z-50 h-auto w-full bg-blue-300 flex flex-wrap items-center justify-between navbar-expand-lg fixed shadow-lg hover:shadow-xl">
        <!-- Container Holds All of the Content -->
        <div class="container mx-auto flex flex-wrap items-center justify-between pb-5 pt-2"
        v-bind:class="{'bg-transparent': !showMenu, 'bg-blue-300': showMenu}">

            <!-- Content on Left Side and Mobile Dropdown Button -->
            <div class="w-full relative flex justify-between lg:w-auto lg:block lg:justify-start">
                <NuxtLink 
                class="text-white text-2xl lg:text-2xl font-bold leading-relaxed inline-block m-3 p-2" 
                to="/"
                >Maverics Swim Team
                </NuxtLink>
                <button 
                class="mr-10 w-1/6 bg-white text-white cursor-pointer text-xl leading-none border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none" 
                type="button" 
                v-on:click="toggleNavbar()"
                >
                <i class=""></i>
                </button>
            <!-- Content on Left Side and Mobile Dropdown Button -->
            </div>

            <!-- Content on Right Side of Screen -->
            <div 
            v-bind:class="{'hidden': !showMenu, 'flex': showMenu}" 
            class="lg:flex lg:flex-grow items-center flex-col"
            >
                <ul class="flex flex-col-reverse lg:flex-row list-none ml-auto tracking-widest">
                  <span class="flex flex-row">
                  <li>
                    <NuxtLink
                      to="/"
                      class="flex items-center mx-3 my-2 px-2 lg:py-2 text-lg lg:text-base font-bold text-white hover:text-gray-300 lg:border-2 border-transparent lg:rounded-2xl lg:px-10 hover:border-gray-300 lg:hover:shadow-lg focus:border-blue-500 focus:text-white focus:shadow-2xl"
                      >Sign In
                      <i class="" />
                    </NuxtLink>
                  </li>
                  <li>
                    <NuxtLink
                      to="/"
                      class="flex items-center mx-3 my-2 px-2 lg:py-2 text-lg lg:text-base font-bold text-white hover:text-gray-300 lg:bg-blue-400 lg:rounded-2xl lg:px-10 lg:hover:shadow-lg lg:border-2 border-transparent hover:border-gray-300 focus:border-blue-500 focus:text-white focus:shadow-2xl"
                      >Sign Up
                      <i class="" />
                    </NuxtLink>
                  </li>
                  </span>
                  <!-- Social Media Links -->
                  <div class="flex flex-row">
                    <li>
                      <NuxtLink
                        to="/"
                        class="flex items-center mx-3 my-2 px-2 lg:py-2 text-white lg:hover:text-white hover:text-gray-300 lg:bg-blue-500 lg:rounded-3xl lg:hover:shadow-lg lg:border-2 border-transparent hover:border-white focus:border-gray-200"
                        >
                        <fa-icon :icon="['fab','facebook']" />
                      </NuxtLink>
                    </li>

                    <li>
                      <NuxtLink
                        to="/"
                        class="flex items-center mx-3 my-2 px-2  lg:py-2 text-white lg:hover:text-white hover:text-gray-300 lg:bg-blue-400 lg:rounded-3xl lg:hover:shadow-lg lg:border-2 border-transparent hover:border-white focus:border-gray-200"
                        >
                        <fa-icon :icon="['fab','twitter']" />
                      </NuxtLink>
                    </li>

                    <li>
                      <NuxtLink
                        to="/"
                        class="flex items-center mx-3 my-2 px-2 lg:py-2 text-white lg:hover:text-white hover:text-gray-300 lg:bg-green-500 lg:rounded-3xl lg:hover:shadow-lg lg:border-2 border-transparent hover:border-white focus:border-gray-200"
                        >
                        <fa-icon :icon="['fab','google']" />
                      </NuxtLink>
                    </li>
                    
                    <li>
                      <NuxtLink
                        to="/"
                        class="flex items-center mx-3 my-2 px-2 lg:py-2 text-white lg:hover:text-white hover:text-gray-300 lg:bg-indigo-300 lg:rounded-3xl lg:hover:shadow-lg lg:border-2 border-transparent hover:border-white focus:border-gray-200"
                        >
                        <fa-icon :icon="['fab','instagram']" />
                      </NuxtLink>
                    </li>
                  </div>

                  

                  
                </ul>    
                <!-- List of Links -->
                <ul class="flex flex-col lg:flex-row list-none tracking-widest lg:ml-auto">
                    <li class="">
                        <NuxtLink 
                        class="flex items-center mx-6 my-2 px-2 lg:py-2 text-lg font-bold text-white hover:text-gray-300" 
                        to="/contact"
                        >CONTACT
                        
                        </NuxtLink>
                    </li>
                    <li class="">
                        <NuxtLink 
                        class="flex items-center mx-6 my-2 px-2 lg:py-2 text-lg font-bold text-white hover:text-gray-300" 
                        to="/about"
                        >ABOUT US
                        
                        </NuxtLink>
                    </li>
                    <li class="">
                        <NuxtLink 
                        class="flex items-center mx-6 my-2 px-2 lg:py-2 text-lg font-bold text-white hover:text-gray-300" 
                        to="#patrick3"
                        >EVENTS
                        
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