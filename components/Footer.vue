    <template>
        <footer class="text-gray-600 bg-gradient-to-b from-blue-300 to-blue-500 pt-10">
            <div class="container mx-auto px-5 lg:pb-10">
                <!-- Flex -->
                <div class="flex flex-col lg:flex-row">
                    <!-- Left Side/Top -->
                    <div class="">
                            <div class="hidden lg:block mx-16">
                                <h2 class="headtext uppercase text-white text-4xl xl:text-5xl font-semibold tracking-wider"
                                >Let's keep in touch!
                                </h2>
                                <p 
                                    class="subtext text-white text-xl xl:text-2xl mt-2 mb-5 tracking-wider font-semibold whitespace-pre-line"
                                    >Find us on any of these platforms 
                                    or feel free to contact us.
                                </p>
                            </div>
                            <div class="justify-evenly flex text-gray-100">
                                <NuxtLink
                                    to="/"
                                    class="hover:text-gray-300"
                                    >
                                    <fa-icon class="text-6xl md:text-7xl lg:text-5xl xl:text-6xl" :icon="['fab','instagram']" />
                                </NuxtLink>
                                <NuxtLink
                                    to="/"
                                    class="hover:text-gray-300"
                                    >
                                    <fa-icon class="text-6xl md:text-7xl lg:text-5xl xl:text-6xl" :icon="['fab','facebook']" />
                                </NuxtLink>
                                <NuxtLink
                                    to="/"
                                    class="hover:text-gray-300"
                                    >
                                    <fa-icon class="text-6xl md:text-7xl lg:text-5xl xl:text-6xl" :icon="['fab','twitter']" />
                                </NuxtLink>
                            </div>
                    </div>
                    <!-- Right Side/Bottom -->
                    <div class="pt-10 lg:pt-0 lg:mx-auto text-xl lg:text-lg 2xl:text-xl lg:flex lg:w-1/2 lg:flex lg:justify-evenly md:text-2xl">
                        <div class="text-center mb-5">
                            <h2
                                class="hidden lg:block text-white font-bold tracking-widest headtext uppercase
                                border-b-2 border-white pb-1.5 mb-3 text-2xl xl:text-3xl"
                                >Useful Links
                            </h2>
                            <div class="lg:text-xl xl:text-2xl subtext font-semibold tracking-wide lg:tracking-widest text-white 
                            lg:flex-col flex justify-evenly">
                                <NuxtLink
                                    to="/"
                                    class="hover:text-gray-300"
                                    >Home 
                                </NuxtLink>
                                <span class="lg:hidden">|</span>
                                <NuxtLink
                                    to="/"
                                    class="hover:text-gray-300"
                                    >Contact
                                </NuxtLink>
                                <span class="lg:hidden">|</span>
                                <NuxtLink
                                    to="/"
                                    class="hover:text-gray-300"
                                    >Events
                                </NuxtLink>
                                <span class="lg:hidden">|</span>
                                <NuxtLink
                                    to="/"
                                    class="hidden lg:inline-block hover:text-gray-300"
                                    >About Us
                                </NuxtLink>
                                <NuxtLink
                                    to="/"
                                    class="lg:hidden hover:text-gray-300"
                                    >Locations
                                </NuxtLink>
                                <span class="lg:hidden text-gray-200">|</span>
                                <NuxtLink
                                    to="/"
                                    class="lg:hidden hover:text-gray-300"
                                    >Safe Sport
                                </NuxtLink>
                            </div>
                        </div>
                        <div class="hidden lg:flex lg:flex-col text-center mt-10 lg:mt-0 subtext text-xl xl:text-2xl font-semibold tracking-widest">
                            <h2
                                class="text-white font-bold tracking-widest headtext uppercase text-2xl xl:text-3xl
                                border-b-2 border-white pb-1.5 mb-3"
                            >Other Resources
                            </h2>
                            <NuxtLink
                                to=""
                                class="hover:text-gray-300 text-white"
                                >Register Here
                            </NuxtLink>
                            <NuxtLink
                                to="/"
                                class="hover:text-gray-300 text-white"
                                >Pool Locations 
                            </NuxtLink>
                            <NuxtLink
                                to="/"
                                class="hover:text-gray-300 text-white"
                                >Terms & Conditions
                            </NuxtLink>
                            <NuxtLink
                                to="/"
                                class="hover:text-gray-300 text-white"
                                >Safe Sport
                            </NuxtLink>
                        </div>
                    </div>
                <!-- Flex -->
                </div>
            </div>
            <!-- Copyright Info. -->
            <div class="items-center justify-center py-6 bg-blue-500">
                <div class="flex flex-wrap items-center justify-center mx-auto">
                    <p class="mr-5 text-sm text-center text-gray-200">© Mavs Swimming Acadamy — 2021
                    </p>
                    <a
                        href="#"
                        class="justify-center mr-5 text-sm text-center text-gray-300 hover:text-white hover:underline"
                        > All Rights Reserves
                    </a>
                </div>
            </div>
        </footer>
    </template>
