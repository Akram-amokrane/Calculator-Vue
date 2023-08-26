<template>
    <div class="w-full py-1 text-right text-gray-500 dark:text-gray-400 overflow-x-auto overflow-y-hidden">
        {{ store.equation }}
    </div>
</template>

<script setup lang="ts">
import {useStore} from "../stores/calculator-store"

const store  = useStore()

</script>