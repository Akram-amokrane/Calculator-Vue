import { ref } from 'vue'
import { defineStore } from 'pinia'


export const useHistoryStore = defineStore('HistoryStore', () => {
  const show = ref(false)
  const history = ref<{ equation: string, result: number }[]>(getHistory())


  function toggleHistory() {
    show.value = !show.value
    console.log(history.value)
  }

  function addHistory(operation: { equation: string, result: number }) {
    if (operation.equation && operation.result && operation.equation != operation.result.toString()) {
      history.value?.push(operation)
      saveHistory()
    }
  }

  function saveHistory() {
    localStorage.setItem("history", JSON.stringify(history.value))
  }

  function getHistory(): { equation: string, result: number }[] {
    return JSON.parse(localStorage.getItem("history") || "[]")
  }

  return { show, history, toggleHistory, addHistory }
})
