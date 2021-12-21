<script setup>
import { ref } from 'vue';
import { useStore } from 'vuex';

const store = useStore()

const home = ref(store.state.selectedView.home)
const destination = ref(store.state.selectedView.destination)
const crew = ref(store.state.selectedView.crew)
const technology = ref(store.state.selectedView.technology)

const getViews = Object.keys(store.state.selectedView)

const selectedView = (selected) => {
    getViews.forEach(function(view){
        if(view == selected) {
            store.state.selectedView[selected] = true
        } 
        if(view !== selected) {
            store.state.selectedView[view] = false
        }
    })
    toggleMenu()
}

const open = ref(false)

const toggleMenu = () => {
    open.value = !open.value
}

</script>

<template>
    <div class="absolute text-white w-full z-10">
        <div class="relative flex ml-10 md:ml-20 md:mt-10 h-20 items-center justify-between">
            <div class="">
                <img src="../assets/assets/shared/logo.svg" alt="">
            </div>
            <div class="invisible xl:visible absolute border border-gray-200 left-28 border-opacity-30 w-2/5 z-10 ">
            </div>
            <div class="invisible md:visible absolute  md:relative md:inset-0 right-0 top-0 bg-gray-600 bg-opacity-30 h-screen md:h-auto w-3/4 md:w-7/12 bg-clip-padding" style="backdrop-filter: blur(30px);">
                <div class="grid grid-cols-1 pl-1.5 pt-14 md:pt-0 md:flex md:justify-around mx-5 xl:mx-10 xl:px-10 uppercase tracking-widest md:text-base text-sm font-light md:font-normal ">
                    <router-link class="py-4" :class="store.state.selectedView.home ? 'border-b-2 border-opacity-100' : ''" :to="{ name: 'home' }"><span class="font-bold hidden lg:inline-block">00</span> Home</router-link>

                    <router-link class="py-4" :class="store.state.selectedView.destination ? 'border-b-2 border-opacity-100' : ''" :to="{ name: 'destination' }"><span class="font-bold hidden lg:inline-block">01</span> Destination</router-link>

                    <router-link class="py-4" :class="store.state.selectedView.crew ? 'border-b-2 border-opacity-100' : ''" :to="{ name: 'crew' }"><span class="font-bold hidden lg:inline-block">02</span> Crew</router-link>

                    <router-link class="py-4" :class="store.state.selectedView.technology ? 'border-b-2 border-opacity-100' : ''" :to="{ name: 'technology' }"><span class="font-bold hidden lg:inline-block">03</span> Technology</router-link>
                </div>
            </div>
            <div @click="toggleMenu" class="md:hidden flex w-full justify-end pr-10">
                <img class="h-5" src="../assets/assets/shared/icon-hamburger.svg" alt="">
            </div>  
            <div v-if="open" class="md:hidden absolute  md:relative md:inset-0 right-0 top-0 bg-gray-600 bg-opacity-20 h-screen md:h-auto w-3/4 md:w-7/12 bg-clip-padding z-10" style="backdrop-filter: blur(30px);">
                <div @click="toggleMenu" class="flex md:hidden w-full justify-end pr-10 mt-6">
                    <img class="h-5" src="../assets/assets/shared/icon-close.svg" alt="">
                </div>
                <div class="grid grid-cols-1 pl-1.5 pt-14 md:pt-0 md:flex md:justify-around ml-5 xl:mx-10 xl:px-10 uppercase tracking-widest md:text-base text-sm font-light md:font-normal">
                    <router-link @click="selectedView('home')" class="my-4 p-2  md:py-8 border-opacity-50" :class="store.state.selectedView.home ? 'border-r-4 border-opacity-100' : ''" :to="{ name: 'home' }"><span class="font-bold md:invisible lg:visible">00</span> Home</router-link>

                    <router-link @click="selectedView('destination')" class="my-4 p-2 md:py-8" :class="store.state.selectedView.destination ? 'border-r-4' : ''" :to="{ name: 'destination' }"><span class="font-bold md:invisible lg:visible">01</span> Destination</router-link>

                    <router-link @click="selectedView('crew')" class="my-4 p-2 md:py-8" :class="store.state.selectedView.crew ? 'border-r-4 ' : ''" :to="{ name: 'crew' }"><span class="font-bold md:invisible lg:visible">02</span> Crew</router-link>

                    <router-link @click="selectedView('technology')" class="my-4 p-2 md:py-8" :class="store.state.selectedView.technology ? 'border-r-4' : ''" :to="{ name: 'technology' }"><span class="font-bold md:invisible lg:visible">03</span> Technology</router-link>
                </div>
            </div>
        </div>
    </div>
</template>
