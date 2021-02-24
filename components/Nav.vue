<template>
    

    <div class="z-50 bg-gradient-to-l from-blue-300 to-blue-500">
        <div 
            class="py-2"
            v-bind:class="{'bg-transparent': !showMenu, 'bg-gradient-to-l from-blue-300 to-blue-500': showMenu}"
            >
            <div class="text-white flex flex-col">
                <div class="flex">
                    <!-- Logo -->
                    <div 
                        class="lg:absolute lg:left-10 xl:left-20 top-0 py-5 mx-auto"
                        >
                        <NuxtLink
                            to="/"
                            id="logo"
                            class=" text-3xl sm:text-4xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-semibold tracking-widest"
                            >Mavs Swim Academy
                        </NuxtLink>
                        <h3
                            class="text-right -mt-2 mr-5 text-md headtext font-semibold"
                            >EST. <span class="subtext">2021</span>
                        </h3>
                    </div>
                    <!-- Mobile Button -->
                    <button
                        class="lg:hidden outline-none focus:outline-none mx-auto"
                        v-on:click="toggleNavbar()"
                        ><fa-icon class="text-5xl" :icon="['fas','bars']" />
                    </button>
                </div>

                <!-- All content -->
                <div 
                    class="w-full lg:flex lg:flex-grow flex-col"
                    v-bind:class="{'hidden': !showMenu, 'flex': showMenu}">

                    <!-- Top Section -->
                    <div class="flex flex-col lg:flex-row justify-end pl-10 lg:px-10 xl:px-20">

                        <div class="flex mb-5 lg:mb-2">
                        <!-- Sign In / Sign Up -->
                        <NuxtLink
                            class="hidden lg:block my-auto headtext font-semibold text-xl uppercase bg-gradient-to-l from-blue-200 to-white 
                            px-5 xl:px-10 2xl:px-14 py-1 rounded-3xl hover:text-blue-600 hover:underline hover:shadow-xl shadow-md tracking-wider
                             xl:tracking-widest text-blue-500"
                            to="/sign"
                            >Online Portal
                        </NuxtLink>
                        <!-- Social Media Links -->
                            <NuxtLink
                                to="/"
                                class="text-4xl mr-3 lg:mx-3 hover:text-gray-300 w-max"
                                ><fa-icon :icon="['fab','instagram']" />
                            </NuxtLink>
                            <NuxtLink
                                to="/"
                                class="text-4xl mx-3 hover:text-gray-300 w-max"
                                ><fa-icon :icon="['fab','facebook']" />
                            </NuxtLink>
                            <NuxtLink
                                to="/"
                                class="text-4xl mx-3 hover:text-gray-300 w-max"
                                ><fa-icon :icon="['fab','twitter']" />
                            </NuxtLink>
                        </div>
                    </div>
                    <!-- Bottom Section -->
                    <div class="pl-10 lg:px-10 xl:px-20 pb-2 lg:pb-0 w-full">
                        <div class="text-2xl lg:text-lg xl:text-xl 2xl:text-2xl font-semibold subtext tracking-widest uppercase lg:justify-end
                         flex flex-col lg:flex-row">
                            <NuxtLink
                                class="hover:text-gray-300 hover:underline pt-1 w-max lg:mx-2.5 my-1 lg:my-0"
                                to="/"
                                >Home
                            </NuxtLink>
                            <span class="spacer hidden lg:inline-block lg:mx-2.5">|</span>
                            <NuxtLink
                                class="hover:text-gray-300 hover:underline pt-1 w-max lg:mx-2.5 my-1 lg:my-0"
                                to="/contact"
                                >Events
                            </NuxtLink>
                            <span class="spacer hidden lg:inline-block lg:mx-2.5">|</span>
                            <NuxtLink
                                class="hover:text-gray-300 hover:underline pt-1 w-max lg:mx-2.5 my-1 lg:my-0"
                                to="/events"
                                >Contact
                            </NuxtLink>
                            <span class="spacer hidden lg:inline-block lg:mx-2.5">|</span>
                            <NuxtLink
                                class="hover:text-gray-300 hover:underline pt-1 w-max lg:mx-2.5 my-1 lg:my-0"
                                to="/about"
                                >About <span class="lg:hidden">Us</span>
                            </NuxtLink>
                            <span class="spacer hidden lg:inline-block lg:mx-2.5">|</span>
                            <NuxtLink
                                class="hover:text-gray-300 hover:underline pt-1 w-max lg:mx-2.5 my-1 lg:my-0"
                                to="/safe"
                                >Safe <span class="lg:hidden">Sport</span>
                            </NuxtLink>
                            <NuxtLink
                                class="lg:hidden hover:text-gray-300 hover:underline w-max my-1"
                                to="/safe"
                                >Online Portal
                            </NuxtLink>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>

</template>

<script>
export default {
    
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
    },

}
</script>