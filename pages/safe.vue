<template>
    <div class="pt-40 bg-gradient-to-b from-blue-200 to-blue-300">

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
                    >Abuse Prevention Program
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
                    class="w-2/3 sm:w-1/2 lg:w-2/3 rounded-xl"
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

        <!-- Interactive Images -->
        <div class="md:w-5/6 lg:w-4/5 2xl:w-5/6 lg:px-5 mx-auto pb-20 px-10">
              <div 
                class="bg-cover bg-center h-80 w-full lg:h-56 border-2 border-b-0 border-blue-200 rounded-t-lg shadow-lg flex flex-col bg-black opacity-80"
                style='background-image: url("../educate.jpg");'
                >
                  <div class="m-auto flex flex-col items-center pt-4 lg:pt-2">
                    <h2
                      class="text-gray-900 text-bold tracking-widest text-4xl md:text-5xl lg:text-5xl uppercase"
                      >Recognize
                    </h2>
                    <p
                      class="text-center text-black text-black tracking-wider lg:tracking-normal text-lg md:text-2xl 3xlext-base 23xl:text-lg"
                      >Learn about risks and red flag behaviors.
                    </p>
                  </div>
                  <span class="border-t-2 border-blue-200">
                    <NuxtLink
                        to=""
                        class="text-2xl lg:text-3xl tracking-widest font-bold justify-center flex text-white py-4 lg:py-2 opacity-70 bg-blue-300 hover:bg-blue-400 hover:text-black hover:shadow-2xl"
                        >Get Educated!
                    </NuxtLink>
                  </span>
              </div>
              
              <div 
                class="bg-cover bg-center h-80 w-full lg:h-56 border-2 border-blue-200 shadow-lg flex flex-col bg-black opacity-80"
                style='background-image: url("../action.jpg");'
                >
                  <div class="m-auto flex flex-col items-center pt-4 lg:pt-2">
                    <h2
                      class="text-gray-900 text-bold tracking-widest text-4xl md:text-5xl lg:text-5xl uppercase"
                      >Respond
                    </h2>
                    <p
                      class="text-center text-black text-black tracking-wider lg:tracking-normal text-lg md:text-2xl lg:tex3xlse 2xl:tex3xllg"
                      >Know how to respond to an incident.
                    </p>
                  </div>
                  <span class="border-t-2 border-blue-200">
                    <NuxtLink
                        to=""
                        class="text-2xl lg:text-3xl tracking-widest font-bold justify-center flex text-white py-4 lg:py-2 opacity-70 bg-blue-300 hover:bg-blue-400 hover:text-black hover:shadow-2xl"
                        >Take Action and Report!
                    </NuxtLink>
                  </span>
              </div>
              
              <div 
                class="bg-cover bg-center h-80 w-full lg:h-56 border-2 border-blue-200 rounded-b-lg shadow-lg flex flex-col bg-black opacity-80"
                style='background-image: url("../recover.jpg");'
                >
                  <div class="m-auto flex flex-col items-center pt-4 lg:pt-2">
                    <h2
                      class="text-gray-900 text-bold tracking-widest text-4xl md:text-5xl lg:text-5xl uppercase"
                      >Recover
                    </h2>
                    <p
                      class="text-center text-black text-black tracking-wider lg:tracking-normal text-lg md:text-2xl lg:text-3xl 2xl:text-3xl"
                      >Empower survivors with resources.
                    </p>
                  </div>
                  <span class="border-t-2 border-blue-200">
                    <NuxtLink
                        to=""
                        class="text-2xl lg:text-3xl tracking-widest font-bold justify-center flex text-white py-4 lg:py-2 opacity-70 bg-blue-300 hover:bg-blue-400 hover:text-black hover:shadow-2xl"
                        >Assit With Recovery!
                    </NuxtLink>
                  </span>
              </div>
        </div>

        <!-- Report of Occurence Instructions & Form -->
        <div class="flex flex-col-reverse lg:flex-row mx-auto px-10">
            <div class="lg:w-1/2 mx-auto text-center">
                <h2
                    class="whitespace-pre-line text-center text-white font-bold tracking-widest text-3xl md:text-4xl xl:text-5xl
                            pb-3"
                    >Report of Occurence 
                    Instructions & Form
                </h2>
                <p
                    class="md:text-lg xl:text-xl text-gray-100 whitespace-pre-line my-5"
                    >Below is the Online Report of Occurence form. The 
                    Report of Occurence shall be submitted by the coach, 
                    official or someone affiliated with the club/facility any 
                    time there is an accident or injury during any Maverics 
                    Swimmin Acedamy activites. The parent or injured part 
                    should NOT submit the form. The online form does 
                    require that certain sections, indicated by an asterisk, 
                    be completed before it can be submitted. If you have 
                    any questions, please contact the head coach, Ricky 
                    Sanchez at 708-999-9999 or <NuxtLink to="contact" class="text-gray-200 underline hover:text-gray-400">examplemeial@gmail.com</NuxtLink>.
                </p>
                <div class="">
                    <h3
                        class="text-white md:text-lg xl:text-xl"
                        >Click the link below to begin the process:
                    </h3>
                    <NuxtLink
                        to="occurenceform"
                        class="text-gray-200 underline hover:text-gray-400 md:text-lg xl:text-xl"
                        >Online Report of Occurence Form
                    </NuxtLink>
                </div>
                <p
                    class="text-gray-100 whitespace-pre-line my-5 lg:mb-20 md:text-lg xl:text-xl"
                    >Upon submission of the completed Report of 
                    Occurence, you will receive an automated email 
                    indicating that Maverics Swimming Acedamy has 
                    received the form. In the body of the email is a detailed 
                    account of the information that was reported. This email 
                    can be printed or saved to a file for record keeping. 
                    <span
                        class="inline-block italic text-gray-100 font-black"
                        >Please forward a copy of this emailed report to
                    </span> 
                    the Operational Risk Chairs for your LSC.
                </p>
            </div>
        </div>
    </div>
</template>