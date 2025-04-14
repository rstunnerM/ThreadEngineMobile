<template>
  <div class="min-h-screen bg-zinc-900 text-white relative">
    <div class="flex justify-between items-center px-4 py-2 border-b border-zinc-800">
      <div class="font-semibold text-lg">ThreadEngine</div>
      <div class="flex items-center gap-3">
        <input type="file" accept=".json" @change="handleFile" class="hidden" ref="fileInput" />
        <button @click="startListening" class="w-8 h-8 flex items-center justify-center rounded-full bg-zinc-700">🎙️</button>
        <button @click="loadLayout" class="text-xs bg-blue-600 px-3 py-1 rounded">Load</button>
        <button @click="saveCurrentLayout" class="text-xs bg-green-600 px-3 py-1 rounded">Save</button>
        <button @click="triggerFilePicker" class="text-xs bg-yellow-600 px-3 py-1 rounded">📂 File</button>
        <button @click="askGptNow" class="text-xs bg-purple-600 px-3 py-1 rounded">GPT</button>
      </div>
    </div>

    <div class="p-4 pb-24">
      <GestureCanvas>
        <ComponentRenderer :layout="layout" @update="updateBlock" />
      </GestureCanvas>
    </div>

    <AiLogToggle />

    <button @click="startListening"
            class="fixed bottom-24 right-4 w-14 h-14 rounded-full bg-blue-600 shadow-lg flex items-center justify-center text-2xl">
      🎤
    </button>

    <BottomNav @navigate="navigate" />
  </div>
</template>

<script setup>
import GestureCanvas from './GestureCanvas.vue'
import ComponentRenderer from './ComponentRenderer.vue'
import AiLogToggle from '../ui/AiLogToggle.vue'
import BottomNav from '../ui/BottomNav.vue'
import { ref } from 'vue'
import { parseGptToLayout, saveLayout } from '../../utils/layoutTools'
import { askGpt } from '../../api/openai'

const layout = ref([])
const fileInput = ref(null)

async function loadLayout() {
  const res = await fetch('/schemas/layout-example.json')
  layout.value = await res.json()
}

function updateBlock({ index, value }) {
  layout.value[index].props.value = value
}

function saveCurrentLayout() {
  saveLayout(layout.value)
}

function triggerFilePicker() {
  fileInput.value.click()
}

function handleFile(event) {
  const reader = new FileReader()
  reader.onload = (e) => {
    try {
      const content = JSON.parse(e.target.result)
      layout.value = Array.isArray(content) ? content : []
    } catch (err) {
      alert('Invalid JSON file')
    }
  }
  reader.readAsText(event.target.files[0])
}

async function askGptNow() {
  const prompt = "Create a UI with a Start button, a slider for brightness, and a toggle for sound"
  layout.value = await askGpt(prompt)
}

function startListening() {
  console.log('🎙️ Voice input triggered')
}

function navigate(view) {
  console.log('🔀 Navigate to', view)
}
</script>
