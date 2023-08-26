<template>
    <button @click.prevent="numTriger" class="w-10 h-10 flex justify-center items-center bg-cyan-100 dark:bg-sky-950 hover:bg-cyan-200 dark:hover:bg-sky-900 rounded-full transition-all">
        <div class="text-lg font-semibold text-center dark:text-white" ref="v">
            <slot ></slot>
        </div>
    </button>
</template>

<script setup lang="ts">
import { onMounted, ref, type VNodeRef } from 'vue';
import {useStore} from "../stores/calculator-store"
import { QuestionMarkCircleIcon } from '@heroicons/vue/24/outline';

const {ope} = defineProps(['ope'])
const store = useStore()


function numTriger(){
    switch (ope) {
        case '=':
            store.equal()
            break;
        case 'AC':
            store.reset()
            break;
        default:
            store.addOpe(ope)
            break;
    }
}


</script>