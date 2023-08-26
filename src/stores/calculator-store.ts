import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

import { evaluate, compile, parse } from "mathjs"
import { useHistoryStore } from "./history-store"

export const useStore = defineStore('calculatorStore', () => {
  const equation = ref("")
  const result = ref(0)
  const history = useHistoryStore()

  function equal() {
    result.value = evaluate(equation.value)
    history.addHistory({ equation: equation.value, result: result.value })
    equation.value = result.value.toString()
  }

  function addOpe(ope: string) {
    equation.value += ope
  }

  function reset() {
    equation.value = ""
    result.value = 0
  }

  function setOpe(ope: { equation: string, result: number }) {
    equation.value = ope.equation
    result.value = ope.result
  }

  return { equation, result, equal, addOpe, reset, setOpe }
})
