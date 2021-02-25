<template>
    <div class="">
        
        <!-- Hero Image -->
        <section class="">
            <div class="hero bg-cover bg-center shadow-2xl relative">
                <!-- Background Opacity -->
                <div 
                    class="bg-black opacity-60 w-full h-full absolute"
                    >
                </div>
                <div class="text-white absolute h-full w-full">
                    <div class="flex flex-col mx-auto lg:mx-20 h-full">
                        <div class="my-auto text-center lg:text-left mx-auto lg:mx-10 xl:mx-28 2xl:mx-64">
                            <h2
                                class="text-5xl md:text-6xl xl:text-7xl uppercase font-semibold lg:whitespace-pre-line"
                                >Swim With 
                                Excellence
                            </h2>
                            <p
                                class="subtext text-2xl md:text-4xl mb-10 font-semibold lg:tracking-wider lg:whitespace-pre-line lg:mt-5"
                                >Learn what sets us 
                                apart from average.
                            </p>
                            <p
                                class="subtext text-xl md:text-2xl whitespace-pre-line tracking-wide font-semibold"
                                >Register to stay updated and 
                                allow us to help stay organized.
                            </p>
                            <div class="mt-10 subtext lg:w-max">
                                <NuxtLink
                                    to="/sign"
                                    class="text-2xl md:text-3xl lg:text-2xl xl:text-3xl uppercase font-semibold bg-gradient-to-l 
                                    from-blue-600 to-blue-400 px-20 pt-4 pb-2 rounded-3xl lg:px-28 xl:px-24
                                    hover:text-gray-300 hover:underline hover:shadow-xl"
                                    >Register
                                </NuxtLink>
                            </div>
                        </div>
                    </div>
                            

                </div>
            </div>
        </section>

        <!-- Vision Section -->
        <section class="bg-gradient-to-l from-blue-300 to-blue-500">
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
        <section class="bg-gray-200">
            <div class="container mx-auto h-100vh text-black pt-24 md:pt-20 pb-20">
                <div class="flex flex-col">
                    <img 
                        src="covid.jpg" 
                        alt="" 
                        class="w-5/6 md:w-4/5 lg:w-3/5 xl:w-1/2 2xl:w-2/5 mx-auto rounded-xl shadow-xl"
                    >
                    <h2
                        class="mt-16 md:mt-12 font-semibold text-4xl md:text-5xl xl:text-6xl tracking-wide 
                        md:tracking-wider border-b-2 border-black mx-10 pb-5 mb-5 mx-auto"
                        >Swimming Through A Crisis
                    </h2>
                    <div class="subtext px-4 mx-auto">
                        <p
                            class="font-medium text-gray-800 text-xl md:text-2xl xl:text-3xl tracking-wide 
                            px-5 py-5 xl:py-4 whitespace-pre-line"
                            >Help your swimmers through this pandemic 
                            with various resources for members and 
                            guidelines to open up your facilities. Learn 
                            about federal and state programs for small 
                            business support, and stay connected.
                        </p>
                        <p
                            class="font-medium text-gray-800 text-xl md:text-2xl xl:text-3xl tracking-wide 
                            px-5 py-5 xl:py-4 whitespace-pre-line"
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
                            uppercase text-gray-700 hover:text-black hover:underline"
                            >Covid-19 Information
                        </a>
                    </div>
                </div>
            </div>
        </section>


        <section class="bg-gradient-to-r from-blue-300 to-blue-500 relative">
            <div class="flex flex-col lg:flex-row container mx-auto px-20 py-20">
                <!-- Contact -->
                <div class="flex flex-col">
                    <!-- Image -->
                    <div class="">
                        <img 
                            src="patrick.jpg" 
                            alt=""
                            class="shadow-xl rounded-xl h-96 mx-auto"
                        >
                    </div>
                    <!-- Contact Info -->
                    <div class="text-white">
                        <div class="flex flex-col items-center">
                            <div class="mt-5 mb-2 lg:mt-3 text-center lg:text-left">
                                <h2
                                    class="text-4xl font-semibold tracking-wide"
                                    >Ricky Shancez
                                </h2>
                                <h3
                                    class="text-2xl tracking-wider"
                                    >Founder & Head Coach
                                </h3>
                            </div>
                            <div class="text-center lg:text-left">
                                <NuxtLink
                                    to="/"
                                    class="text-xl tracking-widest font-semibold hover:text-gray-300 hover:underline flex mb-1"
                                    ><fa-icon class="text-2xl mr-2" :icon="['fas','envelope-open']" />example123@gmail.com
                                </NuxtLink>
                                <h3
                                    class="text-xl tracking-widest font-semibold"
                                    >(708)-123-4321
                                </h3>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- Description of Company -->
                <div class="lg:ml-20 text-white mt-20 lg:my-0">
                    <h2
                        class="text-4xl lg:text-5xl font-semibold mb-10">We strive for excellence.
                    </h2>
                    <h3
                        class="text-2xl lg:text-3xl tracking-widest font-semibold mb-3">Your child's potential awaits.
                    </h3>
                    <p
                        class="text-lg lg:text-xl tracking-wide mb-5"
                        >We are committed to providing a healthy and positive 
                        environment free from abuse for all its members. Our Safe 
                        Sport program, a comprehensive abuse prevention program, 
                        consists of a multi-layered approach to keep kids safe. These 
                        measures are informed by experts in the field of child safety 
                        and are among the strongest safeguards found in youth-
                        serving organizations.
                    </p>
                    <p
                        class="text-lg lg:text-xl tracking-wide"
                        >Swimming offers a variety of health and safety benefits and 
                        we offer a wife variety of swimming programs for all ages. 
                        That includes infant swim lessons, toddler swim lessons, and 
                        programs for children between 4 months and 12 years old. 
                        Maverics Swimming programs have low student-to-teacher 
                        ratio so that everyone feels safe while still learning.
                    </p>
                    <h3
                        class="font-semibold tracking-widest text-2xl lg:text-3xl my-5 whitespace-pre-line"
                        >Location: 1234 W Harlem St. 
                        Chicago, IL 60459
                    </h3>
                </div>
            </div>
        </section>

        
        <!-- CTA / Register Section -->
        <section class="bg-gray-200">
            <div class="h-100vh py-20 xl:py-32">
                <div 
                    class="rounded-2xl shadow subtext p-5 py-20 border-2 border-gray-300 whitespace-pre-line
                    w-max mx-auto px-8 sm:px-10 md:px-20 lg:px-28"
                    >
                    <div class="flex flex-col items-center">
                        <h2
                            class="font-semibold text-5xl lg:text-6xl tracking-wider mb-5"
                            >Get Connected, 
                            Its Easy.<fa-icon class="text-4xl lg:text-5xl ml-14" :icon="['fas','arrow-down']" />
                        </h2>
                        <h3
                            class="font-semibold text-2xl lg:text-3xl tracking-wider"
                            >Stay updated and register an 
                            account with us, for free!
                        </h3>
                        <p
                            class="text-2xl lg:text-3xl text-gray-800 tracking-wider my-10"
                            >Creating an account is fast 
                            and simple. Our online portal 
                            allows you to stay organized 
                            and get live updates. You 
                            gain the ability to link your 
                            email and get all news sent 
                            straight to you.
                        </p>
                        <div class="whitespace-normal pt-5">
                            <NuxtLink
                                class="text-2xl lg:text-3xl text-white uppercase font-bold bg-gradient-to-l from-blue-600 to-blue-400 
                                pt-4 pb-2 px-20 rounded-3xl hover:text-gray-300 hover:underline shadow-md hover:shadow-xl"
                                to="/sign"
                                >Sign Up Today
                            </NuxtLink>
                            <h3
                                class="text-lg lg:text-xl mt-5 ml-2 text-gray-800"
                                >It takes less than a minute to sign up.
                            </h3>
                        </div>
                    </div>
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

    .hero {
        background-image: url("/hero.jpg");
        height: 90vh;
    }

</style>