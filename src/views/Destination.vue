<script setup>
import { ref, onMounted } from 'vue';
import { useStore } from 'vuex';

onMounted(() => {
  setActiveView('moon')
})

const store = useStore()
  store.state.selectedView.home = false
  store.state.selectedView.destination = true
  store.state.selectedView.crew = false
  store.state.selectedView.technology = false

const planetaryObjects = 
  {
    moon: {
    object: 'moon',
    image: require('../assets/assets/destination/image-moon.webp'),
    description: "See our planet as you've never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you're there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.",
    avgDistance: '384,400 KM',
    estTravelTime: '3 DAYS',
    imageAlt: 'Moon Image'
    },
    mars: {
    object: 'mars',
    image: require('../assets/assets/destination/image-mars.webp'),
    description: "Do't forget to pack your hiking boots. You'll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It's two and a half times the size of Everest!",
    avgDistance: '225 MIL KM',
    estTravelTime: '9 months',
    imageAlt: 'Mars Image'
    },
    europa: {
    object: 'europa',
    image: require('../assets/assets/destination/image-europa.webp'),
    description: "The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover's dream. With an icy surface, it's perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.",
    avgDistance: '628 MIL KM',
    estTravelTime: '3 YEARS',
    imageAlt: 'Europa Image'
    },
    titan: {
    object: 'titan',
    image: require('../assets/assets/destination/image-titan.webp'),
    description: "The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.",
    avgDistance: '1.6 BIL KM',
    estTravelTime: '7 YEARS',
    imageAlt: 'Moon Image'
    },
  }

  const selectedObject = ref('moon')

const getViews = Object.keys(store.state.planetaryObjects)

const setActiveView = (selected) => {
  getViews.forEach(function(view){
    if(selected == view) {
      store.state.planetaryObjects[selected] = true
      selectedObject.value = selected
      // console.log(`${view}: ${store.state.planetaryObjects[selected]}`)
    }
    if(selected !== view) {
      store.state.planetaryObjects[view] = false
      // console.log(`${view}: ${store.state.planetaryObjects[view]}`)
    }
  })
  

}

</script>


<template>
  <div class="bg-destinationMobile md:bg-destinationTablet lg:bg-destinationDesktop h-screen bg-no-repeat bg-cover
    aspect-auto">
    <div class="grid place-items-center h-screen pt-16 lg:pt-10 text-gray-100 ">*-9+63
      <div class="relative lg:h-full lg:pt-40 ">
        <h1 class="lg:absolute lg:top-24 lg:left-5 tracking-widest text-center my-3 md:text-left md:ml-10 lg:text-2xl xl:text-3xl "><span class="text-gray-600 font-bold mr-3">01</span> PICK YOUR DESTINATION</h1>
        <div v-for="(item, index) in planetaryObjects" :key="index">
          <div v-if="selectedObject == item.object" class="space-y-10 text-center lg:grid grid-cols-2 place-items-center lg:mt-10" >
            <div class="">
              <img class="h-48 md:h-56 mx-auto lg:h-80 xl:h-full" :src="item.image" :alt="item.imageAlt">            
            </div>
            <div class="lg:text-left">
              <div class="flex justify-around px-10 w-96 mx-auto mb-10 lg:mx-0 lg:px-0 ">
                <button :class="store.state.planetaryObjects[link] ? 'border-b-4 border-opacity-100 pb-2' : 'text-gray-500 pb-2'" class="uppercase" @click="setActiveView(link)" v-for="(link, index) in getViews" :key="index">
                  {{ link }}
                </button>
              </div>
    
              <div class="px-5 mx-auto md:w-3/4 lg:w-full xl:w-3/5 xl:mx-0">
                <h2 class="text-7xl uppercase tracking-wider mb-7 lg:text-9xl">
                  {{item.object}}
                </h2>
                <p class="text-gray-400 mb-7 lg:text-lg">
                  {{ item.description }}
                </p>
                <div class="bg-gray-500 border border-gray-700"></div>
    
              </div>
              
              <div class="space-y-5 tracking-widest md:flex md:justify-around md:space-y-0 md:px-10 lg:mt-5 lg:px-5 lg:justify-start ">
                <div>
                  <p class="text-gray-400 text-sm">AVG. DISTANCE</p>
                  <p class="text-2xl">{{ item.avgDistance }}</p>
                </div>
                
                <div class="lg:ml-14 xl:ml-20">
                  <p class="text-gray-400 text-sm">EST. TRAVEL TIME</p>
                  <p class="text-2xl">{{ item.estTravelTime }}</p>
                </div>
              </div>
            </div>
        </div>

        </div>

      </div>
    </div>
  </div>
</template>
