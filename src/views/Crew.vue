<script setup>
import { ref } from 'vue';
import { useStore } from 'vuex';

const crewMember = {
    commander: {
        rank: 'Commander',
        image: require('../assets/assets/crew/image-douglas-hurley.webp'),
        name: 'Douglas Hurley',
        profile: 'Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.',
        alt: 'Douglas Hurley'
    }
}
</script>

<template>
    <div class="bg-crewMobile md:bg-crewTablet lg:bg-crewDesktop h-screen bg-no-repeat bg-cover
        aspect-auto">
        <div class="grid gird-cols-1">
            <div class="relative grid h-screen pt-12 lg:pt-10 text-gray-100 ">
                <div>
                    <div class="relative lg:h-full lg:pt-40 mx-7">
                        <h1 class="pt-5 lg:absolute lg:top-24 lg:left-5 tracking-widest text-center md:text-left md:ml-10 lg:text-2xl xl:text-3xl uppercase"><span class="text-gray-600 font-bold mr-3">02</span> meet your crew</h1>

                        <div class="pt-10" v-for="(profile, index) in crewMember" :key="index">
                            <div class="h-1/2 border-b border-gray-600">
                                <img class="w-56 mx-auto object-bottom" :src="profile.image" alt="">
                            </div>
                            <div class="text-white h-1/2">
                                <div>Nav</div>
                            </div>
                            <div class="space-y-5 pt-5">
                                <h2 class="text-gray-500 text-xl text-center uppercase tracking-wider">{{ profile.rank }}</h2>
                                <p class="text-gray-50 text-3xl text-center uppercase tracking-widest ">{{ profile.name }}</p>
                                <p class="text-gray-200 text-opacity-80 text-center">{{ profile.profile }}</p>
                            </div>
                        </div>
                    </div>        
                </div>
            </div>
        </div>
    </div>
</template>