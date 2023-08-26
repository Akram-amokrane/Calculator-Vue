<template>
    <div class="w-full h-auto relative flex justify-center items-center">
    <themeToggle></themeToggle>
    <div class="absolute right-2 p-2 rounded-full cursor-pointer" @click.prevent="history.toggleHistory">
        <ClockIcon class="w-6 h-6 text-slate-600 dark:text-slate-300"/>
    </div>
    </div>
</template>

<script setup lang="ts">
import themeToggle from './theme-toggle.vue';
import {ClockIcon} from "@heroicons/vue/24/outline"
import {useHistoryStore} from "../stores/history-store"

const history = useHistoryStore()

</script>
