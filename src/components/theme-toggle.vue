<template>
    <div class="w-20 h-7 bg-sky-300 dark:bg-sky-100 text-gray-500 dark:text-gray-200 flex justify-center items-center relative rounded-full transition-all">
        <input type="checkbox" id="isdark" class="peer hidden" v-model="isdark" >
        <label for="isdark" class="absolute flex justify-center items-center -translate-x-5 w-11 h-8  bg-sky-200 dark:bg-blue-950 rounded-full peer-checked:translate-x-5 transition-all cursor-pointer">
            <SunIcon class="w-7 h-7 " :class="{hidden:isdark}"/>
            <MoonIcon class="w-6 h-6" :class="{hidden:!isdark}"/>
        </label>
        <label for="isdark" class="absolute flex justify-center dark:text-gray-500 items-center translate-x-5 w-9 h-8  rounded-full peer-checked:-translate-x-4 transition-all">
            <SunIcon class="w-6 h-6" :class="{hidden:!isdark}"/>
            <MoonIcon class="w-5 h-5" :class="{hidden:isdark}"/>
        </label>
    </div>
</template>

<script setup lang="ts">
    import { SunIcon, MoonIcon} from '@heroicons/vue/24/outline'
    import {  onMounted, ref, watch } from 'vue';

    const isdark = ref(false)

    watch(isdark,async (n,_)=>{
        document.documentElement.className = n?"dark":"light"
    })

    onMounted(()=>{
        console.log(isdark)
    })
</script>
