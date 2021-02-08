<template>
    <div class="pt-40 bg-blue-300">

        <!-- Hero Image at Top -->
        <div class="" style="height:40vh;">
            <div 
                class="bg-cover bg-cover bg-center h-full"
                style='background-image: url("../safe.jpg");'
                >
                <div class="flex flex-col justify-center items-center h-full bg-black opacity-50">
                    <h2
                        class="text-white text-4xl md:text-5xl lg:text-6xl 2xl:text-7xl tracking-wider md:tracking-widest uppercase"
                        >Safe Sport!
                    </h2>
                </div>
            </div>
        </div>

        <!-- Title and Information -->
        <div class="flex flex-col lg:flex-row mx-auto container text-center items-center
                    px-10 py-20">
            <div class="lg:w-full mb-10">
                <h2
                    class="text-white font-bold tracking-widest text-4xl xl:text-5xl
                    mb-3"
                    >Abust Prevention Program
                </h2>
                <p
                    class="whitespace-pre-line text-white text-lg md:text-xl xl:text-2xl
                    mt-5"
                    >Maverics Swim Acedamy is committed to 
                    providing a healthy and positive environment free 
                    from abust for all its members. Our Safe Sport 
                    program consists of a multi-layered approach to 
                    keep kids safe. This includes required policies 
                    and best practice guidelines, training and 
                    education, monitoring, supervision and mandatory 
                    reporting mandatory screening which includes 
                    criminal background checks and employment 
                    screening. Recovery is also very important to us, 
                    which is why we want to empower survivors with 
                    resources to aid with healing.
                </p>
            </div>

            <div class=" mx-auto items-center flex flex-col">
                <img
                    class="w-2/3 sm:w-1/2 rounded-xl"
                    src="safe-lifeguard.jpg" 
                    alt=""
                >
                <NuxtLink
                  to="report"
                  class="text-gray-100 hover:text-gray-200 text-xl font-bold mx-auto"
                  >Report An Abuse
                  <fa-icon class="text-5xl pt-3" :icon="['fas','hand-point-left']" />
                </NuxtLink>
              </div>


        </div>

    </div>
</template>