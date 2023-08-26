<template>
    <div class="w-full py-1 flex justify-between items-center text-gray-500 dark:text-white font-semibold text-2xl overflow-x-auto overflow-y-hidden">
        <div>=</div>
        <div>{{ store.result }}</div>
    </div>
</template>

<script setup lang="ts">

import {useStore} from "../stores/calculator-store"

const store = useStore()

</script>