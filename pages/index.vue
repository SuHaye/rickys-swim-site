<template>
    <div
      class="relative flex content-center items-center justify-center"
      style="min-height: 100vh;"
      >

      <!-- Section for the background Image and Overlay -->
      <div 
        class="absolute w-full h-full bg-cover bg-center bg-fixed"
        style='background-image: url("https://images.unsplash.com/photo-1530549387789-4c1017266635?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80");'
        >
        <!-- Overlay -->
        <span id="blackOverlay" class="absolute bg-black w-full h-full opacity-50"></span>
      </div> 

      <!--Content on top of background Image  -->
      <div class="relative container mx-auto">
        <div class="flex justify-center text-center w-full">
          <!-- Top Text -->
          <div class="text-cener ml-8 lg:ml-28 md:ml-20">
            <h1
              class="text-white font-semibold text-5xl"
              >RickySwimSite
            </h1>
            <hr class="my-5">
            <h2 
              class="text-white text-2xl mt-5 mb-10"
              >Our vision is to achieve excellence
            </h2>
            <!-- Link -->
            <NuxtLink
              class="text-white uppercase text-xl font-bold border-2 border-solid border-white rounded-lg px-2 py-1 hover:text-gray-200 hover:bg-blue-500 hover:opacity-80"
              to="/contact"
              >Contact Us
            </NuxtLink>
          </div>
        </div>
      </div>

      <!-- Content Underneath Hero Image -->
      <section>
        <div class="relative container mx-auto bg-white -mt-20 rounded-lg shadow-lg">

          <!-- Container for both sides of information -->
          <div class="bg-white">

            <!-- Information on Left Side -->
            <div class="container">


              

            <!-- Information on Left Side -->
            </div>



            <!-- Information on Right Side -->
            <div class="container">

            <!-- Information on Right Side -->
            </div>



          <!-- Container for both sides of information -->
          </div>

       <!-- Content Underneath Hero Image -->
        </div>
      </section>

      
   <!-- Main Div and Main  -->
    </div>
 
</template>

<script>
export default {}
</script>
