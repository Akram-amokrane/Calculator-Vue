<script setup lang="ts">
    import Header from "./header-item.vue"
    import EquationDisplay from "./equation-display.vue"
    import ResultDisplay from "./result-display.vue"
    import NumButton from "./num-button.vue"
    import historyItem from "./history-item.vue"

    const btns = {
        top: ["AC","(",")"],
        right:["x","-","+","="],
        num:[["7","8","9"],["4","5","6"],["1","2","3"],[".","0","00"]]
    }
</script>
<template>
    <div class="relative w-1/5 h-3/4">
    <div class="w-full h-full relative bg-white dark:bg-slate-900 rounded-3xl pt-4 drop-shadow-xl overflow-hidden">
        <div class="w-full h-2/5">
            <Header></Header>
        <div class="w-full mt-16 px-6">
            <EquationDisplay/>
            <ResultDisplay/>
        </div>
        </div>
        <div class="w-full h-3/5 p-4 pb-8 flex justify-between mt-5 gap-3 bg-gradient-to-br from-transparent to-cyan-400 dark:to-cyan-900 rounded-t-2xl">
            <div class="w-4/5 flex flex-col justify-start gap-2 items-center">
                <div class="w-full flex justify-between bg-cyan-100 dark:bg-sky-950 rounded-full">
                    <NumButton v-for="t in btns.top" :key="t"  :ope="t">{{ t }}</NumButton>
                </div>
                <div class="w-full h-full flex flex-col justify-between">
                    <div v-for="(r,i) in btns.num" :key="i" class="w-full flex justify-between">
                        <NumButton v-for="n in r" :key="n" :ope="n" >{{ n }}</NumButton>
                    </div>
                </div>
            </div>
            <div class="w-auto h-full flex flex-col justify-between gap-3   bg-cyan-100 dark:bg-sky-950 rounded-full">
                <div class="w-full flex flex-col h-1/5">
                    <NumButton ope="/">/</NumButton>
                </div>
                <div class="w-full h-4/5 flex flex-col  justify-between" v-for="(r,i) in btns.right" :key="i">
                    <NumButton v-for="o in r" :key="o" :ope="o==='x'?'*':o" >{{ o }}</NumButton>
                </div>
            </div>
        </div>
    </div>
    
    <historyItem></historyItem>
</div>
</template>