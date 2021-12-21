<script setup>
import { ref } from 'vue';
import { useStore } from 'vuex'



//Init Store
const store = useStore()

const hover = ref(null)
const animateExplore = 'hover:visible'

//Set nav view

  store.state.selectedView.home = true
  store.state.selectedView.destination = false
  store.state.selectedView.crew = false
  store.state.selectedView.technology = false
</script>

<template>
<div 
    class="bg-homeMobile md:bg-homeTablet lg:bg-homeDesktop h-screen bg-no-repeat bg-cover
    aspect-auto"
    >
    <div class="grid place-items-center h-screen lg:flex lg:justify-around lg:place-items-end lg:pb-36 lg:mb-10 pt-20 ">
        <div class="text-center text-white md:w-1/2 lg:w-1/4 lg:text-left">
            <h1 class="text-lg lg:tracking-widest text-gray-300">SO, YOU WANT TO TRAVEL TO <span class="block text-7xl md:text-9xl lg:text-9xl tracking-widest text-gray-50">SPACE</span></h1>
            <p class="mt-10 font-extralight md:font-normal md:text-sm md:leading-6 px-5 lg:px-0 lg:w-96 lg:text-base text-gray-300">
                Let's face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we'll give you a truly out of this world experience!
            </p>
        </div>
        <div class="">
            <button class="relative bg-white w-52 h-52 lg:w-62 lg:h-62 rounded-full flex items-center justify-center text-4xl font-light shadow-lg shadow-gray-800 lg:text-2xl lg:font-normal lg:tracking-wider">
                EXPLORE
                <div class="hidden scale-125 absolute bg-white bg-opacity-20 w-80 h-80 rounded-full"></div>
            </button>
            
        </div>
    </div>
</div>
</template>