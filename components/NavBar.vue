<template>

<!-- Container Holds All Content -->
    <nav class="absolute z-50 w-full bg-transparent flex flex-wrap items-center justify-between navbar-expand-lg">
        <!-- Container Holds All of the Content -->
        <div class="container mx-auto flex flex-wrap items-center justify-between">

            <!-- Content on Left Side and Mobile Dropdown Button -->
            <div class="w-full relative flex justify-between lg:w-auto lg:block lg:justify-start">
                <NuxtLink 
                class="text-white text-xl lg:text-2xl font-bold leading-relaxed inline-block m-3 p-2" 
                to="/"
                >RickySwimSite
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
            class="lg:flex lg:flex-grow items-center"
            >
                <!-- List of Links -->
                <ul class="flex flex-col lg:flex-row list-none ml-auto">
                    <li class="nav-item">
                        <NuxtLink 
                        class="flex items-center mx-3 my-2 px-2 lg:py-2 text-lg font-bold text-white hover:text-gray-300" 
                        to="/contact"
                        >CONTACT
                        <i class="" />
                        </NuxtLink>
                    </li>
                    <li class="nav-item">
                        <NuxtLink 
                        class="flex items-center mx-3 my-2 px-2 lg:py-2 text-lg font-bold text-white hover:text-gray-300" 
                        to="#patrick2"
                        >ABOUT US
                        <i class="" />
                        </NuxtLink>
                    </li>
                    <li class="nav-item">
                        <NuxtLink 
                        class="flex items-center mx-3 my-2 px-2 lg:py-2 text-lg font-bold text-white hover:text-gray-300" 
                        to="#patrick3"
                        >FACEBOOK
                        <i class="" />
                        </NuxtLink>
                    </li>
                    <li class="nav-item">
                        <NuxtLink 
                        class="flex items-center mx-3 my-2 pb-3 px-2 lg:py-2 text-lg font-bold text-white hover:text-gray-300" 
                        to="#patrick3"
                        >TWITTER
                        <i class="" />
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