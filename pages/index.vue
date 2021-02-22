<template>
    <div class="relative">

        <!-- Vision Section -->
        <section class="bg-gradient-to-b from-blue-300 to-blue-500">
            <div class="flex flex-row h-100vh pt-20 container mx-auto xl:pr-10 2xl:pr-20">
                <div class="flex flex-col container mx-auto text-white px-5 lg:px-0">
                    <!-- Vision -->
                    <div class="text-center my-auto xl:pb-10">
                        <div class="bg-blue-300 shadow-lg mx-auto rounded-full p-3 px-4 w-min mb-5">
                            <fa-icon class="text-5xl xl:text-6xl" :icon="['fas','award']" />
                        </div>
                        <h2
                            class="uppercase font-bold text-5xl xl:text-6xl tracking-wide 
                            border-b-2 border-white mx-10 pb-2.5 mb-5 w-96 mx-auto"
                            >Our Vision
                        </h2>
                        <p
                            class="subtext font-medium text-2xl xl:text-3xl tracking-wide px-5 whitespace-pre-line"
                            >To inspire and enable our 
                            members to achieve excellence in 
                            the sport of swimming. We also 
                            want to help our swimmers 
                            implement what they learn at 
                            practice into daily life.
                        </p>
                    </div>
                    <!-- Prioritize -->
                    <div class="py-10 my-auto px-4">
                        <h2
                            class="uppercase font-bold text-5xl xl:text-6xl tracking-wide text-center border-b-2 
                            border-white pb-2.5 mb-5 w-96 mx-auto"
                            >We Prioritize
                        </h2>
                        <ul class="subtext font-medium text-2xl xl:text-3xl tracking-wide whitespace-pre-line flex flex-col items-center">
                            <span class="flex flex-row my-2.5">
                                <!-- Check Icon -->
                                <fa-icon class="text-white mr-2" :icon="['fas','check']" />
                                <!-- Text -->
                                <li
                                    class="whitespace-pre-line"
                                    >Competitice succes at 
                                    the international level.
                                </li>
                            </span>
                            <span class="flex flex-row my-2.5">
                                <!-- Check Icon -->
                                <fa-icon class="text-white mr-2" :icon="['fas','check']" />
                                <!-- Text -->
                                <li
                                    class="whitespace-pre-line"
                                    >Resources to support 
                                    athelees and parents.
                                </li>
                            </span>
                            <span class="flex flex-row my-2.5">
                                <!-- Check Icon -->
                                <fa-icon class="text-white mr-2" :icon="['fas','check']" />
                                <!-- Text -->
                                <li
                                    class="whitespace-pre-line"
                                    >Public engagement with 
                                    swimming.
                                </li>
                            </span>
                        </ul>
                    </div>
                </div>
                <!-- Image after lg screen -->
                <div class="hidden lg:flex my-20 px-20">
                    <img 
                        src="vision.jpg" 
                        alt="" 
                        class="shadow-xl rounded-xl"
                    >
                </div>
            </div>
        </section>

        <!-- COVID Info Section  -->
        <section class="bg-gradient-to-b from-blue-500 to-blue-400">
            <div class="container mx-auto h-100vh text-white pt-24 md:pt-20 pb-10">
                <div class="flex flex-col">
                    <img 
                        src="covid.jpg" 
                        alt="" 
                        class="w-5/6 md:w-4/5 lg:w-3/5 xl:w-1/2 2xl:w-2/5 mx-auto rounded-xl shadow-xl"
                    >
                    <h2
                        class="mt-16 md:mt-12 uppercase font-bold text-4xl md:text-5xl xl:text-6xl tracking-wide 
                        md:tracking-wider border-b-2 border-white mx-10 pb-5 mb-5 mx-auto"
                        >Swimming Through A Crisis
                    </h2>
                    <div class="subtext px-4 mx-auto">
                        <p
                            class="font-medium text-xl md:text-2xl xl:text-3xl tracking-wide px-5 py-5 xl:py-4 whitespace-pre-line"
                            >Help your swimmers through this pandemic 
                            with various resources for members and 
                            guidelines to open up your facilities. Learn 
                            about federal and state programs for small 
                            business support, and stay connected to 
                            the sport with webinars and podcasts.
                        </p>
                        <p
                            class="font-medium text-xl md:text-2xl xl:text-3xl tracking-wide px-5 py-5 xl:py-4 whitespace-pre-line"
                            >We continue to stress the importance of 
                            preventing the spread of infection and 
                            ask for you to follow the information 
                            being circulated by healthcare officials.
                        </p>
                    </div>
                    <div class="text-center mt-10 md:mt-6 xl:mt-5">
                        <a
                            href="https://www.cdc.gov/coronavirus/2019-ncov/index.html"
                            class="subtext text-2xl md:text-3xl font-semibold tracking-wide 
                            uppercase hover:text-gray-300 hover:underline"
                            >Covid-19 Information
                        </a>
                    </div>
                </div>
            </div>
        </section>

        <!-- News/Events -->
        <section class="bg-gradient-to-b from-blue-400 to-blue-500">
            <div class="h-100vh flex flex-col lg:flex-row lg:items-center container mx-auto py-20">
                <!-- Left/Top Side -->
                <div class="mx-auto rounded-xl shadow-xl mb-10 lg:mb-0 h-full">
                    <img 
                        src="swimnews.jpg" 
                        alt=""
                        class="h-60 rounded-xl shadow-xl"
                    >
                </div>
                <!-- Right/Bottom Side -->
                <div class="text-white text-center lg:pr-8 xl:pr-16 2xl:pr-40">
                    <h2
                        class="w-96 uppercase font-bold text-5xl lg:text-6xl tracking-wide
                        border-b-2 border-white mx-10 pb-5 mb-5 mx-auto"
                        >Team Updates
                    </h2>
                    <p
                        class="subtext font-medium text-2xl xl:text-3xl tracking-wide mx-16 whitespace-pre-line my-10"
                        >Check out the latest news and 
                        important updates from the 
                        organization, tips for training, 
                        and any upcoming events.
                    </p>
                    <p
                        class="subtext font-medium text-2xl xl:text-3xl tracking-wide mx-16 whitespace-pre-line my-10"
                        >To automatically get updated 
                        on the latest news and 
                        updates, register and join our 
                        swim club by clicking <NuxtLink to="/sign" class="font-semibold hover:text-gray-300 hover:underline">here.</NuxtLink>
                    </p>
                    <NuxtLink
                        to=""
                        class="subtext text-3xl font-semibold 
                        tracking-wide uppercase hover:text-gray-300 hover:underline"
                        >
                        <fa-icon class="" :icon="['fab','twitter']" />
                        Stay Updated
                    </NuxtLink>
                </div>
                

            </div>
        </section>
    </div>
</template>


<script>
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (process.client) {
  gsap.registerPlugin(ScrollTrigger);
}


export default {

}
</script>


<style scoped>
    
    h2 {
        font-family: 'Dekko', cursive;
    }

    .subtext {
        font-family: 'Chilanka', cursive;
    }

</style>