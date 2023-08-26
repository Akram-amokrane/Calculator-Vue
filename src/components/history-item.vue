<template>
    <div class="absolute left-full w-5/6 h-[90%] top-6 bg-white dark:bg-slate-900 rounded-r-2xl p-4 transition-all origin-left" :class="history.show?'scale-x-100':'scale-x-0'">
        <div class="w-full h-full flex flex-col border-t-2  dark:border-slate-950">
            <div  class="w-full h-auto border-b-2 py-2 dark:border-slate-950 hover:bg-slate-100 dark:hover:bg-slate-800 cursor-pointer" v-for="h in history.history" @click.prevent="store.setOpe(h)" :key="h.equation">
                <div class="w-full text-right text-slate-500 dark:text-slate-400"> {{ h.equation }}</div>
                <div class="w-full flex justify-between items-center text-lg font-semibold text-slate-700 dark:text-white"> 
                    <div>=</div>
                    <div>{{ h.result }}</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
    import {useHistoryStore} from "../stores/history-store"
    import {useStore} from "../stores/calculator-store"

    const history = useHistoryStore()
    const store = useStore()

    

</script>
