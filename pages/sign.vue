<template>
    <div class="flex flex-col pt-40 bg-blue-200">
        <!-- Hero Image at Top -->
        <div class="" style="height:40vh;">
            <div 
                class="bg-cover bg-center h-full border-b-2 border-t-2 border-blue-400"
                style='background-image: url("../sign.jpg");'
                >
                <div class="flex flex-col justify-center items-center h-full bg-black opacity-60">
                    <h2
                        class="text-white text-4xl md:text-5xl lg:text-6xl 2xl:text-7xl tracking-wider md:tracking-widest uppercase"
                        >Sign In or Sign Up!
                    </h2>
                    <h3
                        class="text-white text-2xl md:text-3xl lg:text-4xl 2xl:text-5xl tracking-wide"
                        >Create an account in just a few steps.
                    </h3>
                </div>
            </div>
        </div>  

        <div class="shadow-lg rounded-lg border-2 border-blue-300 m-10 flex items-center justify-center px-6 bg-blue-100 md:max-w-md lg:max-w-full md:mx-auto md:w-1/2 xl:w-1/3 lg:px-16 xl:px-12">
            <!-- Form to LogIn/Create Account -->
            <div class="w-full h-100">
                <h1 class="mt-12 text-2xl font-semibold tracking-tighter text-gray-700">
                    Log in to your account
                </h1>
                <form class="mt-6" action="#" method="POST">
                    <div>
                        <label class="block text-sm font-medium leading-relaxed tracking-tighter text-gray-700"
                            >Email Address
                        </label>
                        <input type="email" name="" id="" placeholder="Your Email "
                            class="hover:shadow-md w-full px-4 py-2 mt-2 text-base text-blue-700 bg-gray-100 border-transparent rounded-lg focus:border-gray-500 focus:bg-white focus:ring-2  outline-none"
                            autofocus autocomplete required>
                    </div>
                    <div class="mt-4">
                        <label class="block text-sm font-medium leading-relaxed tracking-tighter text-gray-700">Password</label>
                        <input type="password" name="" id="" placeholder="Your Password" minlength="6"
                            class="hover:shadow-md w-full px-4 py-2 text-base text-blue-700 bg-gray-100 border-transparent rounded-lg focus:border-gray-500 focus:bg-white focus:ring-2 outline-none"
                            required>
                    </div>
                    <div class="mt-2 text-right">
                        <a href="#"
                            class="text-sm font-semibold leading-relaxed text-gray-700 hover:text-blue-400 focus:text-blue-700">Forgot
                            Password?</a>
                    </div>
                    <button type="submit" class="block w-full px-4 py-3 mt-6 font-semibold text-gray-700 focus:text-blue-100 hover:text-white transition duration-500 ease-in-out transform rounded-lg bg-gradient-to-r from-blue-300 hover:from-blue-400 to-blue-200 hover:to-blue-300 focus:shadow-outline focus:outline-none"
                        >Log In
                    </button>
                </form>
                <hr class="w-full my-6 border-gray-300">
                <div class="flex justify-enter w-2/3">
                    <button type="button"
                        class="transition duration-500 ease-in-out transform inline-flex w-full px-4 py-3 font-semibold text-gray-700 focus:text-blue-100 hover:text-white transition duration-500 ease-in-out transform rounded-lg bg-gradient-to-r from-blue-200 hover:from-blue-300 to-blue-300 hover:to-blue-400 focus:shadow-outline focus:outline-none">
                        <div class="flex items-center justify-center">
                            
                            <span class="ml-4">
                                <fa-icon class="mr-2 border-gray-700 hover:border-white" :icon="['fab','google']" />
                                Log in with
                                Google
                            </span>
                        </div>
                    </button>
                    <button type="button"
                        class="inline-flex px-4 py-3 ml-8 font-semibold text-blue-700 border border-gray-300 rounded-lg bg-blue-1300 hover:bg-blue-700 focus:bg-gray-100 hover:text-blue-500">
                        <div class="flex items-center justify-center">
                                
                        </div>
                    </button>
                </div>
                <p class="mt-8 text-center">Need an account? <a href="#"
                        class="uppercase font-semibold text-blue-400 hover:text-blue-500">Sign Up</a></p>
            </div>
            <!-- Info about Lessons/Practice -->
            <div class="">

            </div>
        </div>

        
        
    </div>
</template>