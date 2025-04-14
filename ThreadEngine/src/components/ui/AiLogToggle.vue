<template>
  <div>
    <button @click="visible = !visible" class="fixed bottom-20 right-4 bg-black text-white rounded-full w-12 h-12 text-xl shadow-lg">💬</button>
    <div v-if="visible" class="fixed bottom-0 inset-x-0 bg-white dark:bg-zinc-900 h-1/2 z-40 border-t border-gray-300 p-4 overflow-y-auto">
      <h3 class="text-lg font-bold mb-2">🧠 AI Log</h3>
      <div v-for="(entry, index) in logs" :key="index" class="text-sm mb-1">{{ entry }}</div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
const visible = ref(false)
const logs = ref([
  'Hello ThreadEngine',
  'Create button in top-right',
  'Switch to dark mode',
  'Add voice canvas'
])
</script>
