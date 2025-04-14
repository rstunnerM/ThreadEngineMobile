<template>
  <nav class="fixed bottom-0 inset-x-0 bg-white dark:bg-zinc-800 border-t border-gray-200 dark:border-zinc-700 flex justify-around py-2 z-50">
    <button v-for="item in tabs" :key="item.label" @click="$emit('navigate', item.route)" class="flex flex-col items-center text-xs text-gray-600 dark:text-gray-300">
      <item.icon class="w-5 h-5" />
      <span>{{ item.label }}</span>
    </button>
  </nav>
</template>

<script setup>
import { Home, Settings, MessageSquare } from 'lucide-vue-next'

const tabs = [
  { label: 'Canvas', route: 'canvas', icon: Home },
  { label: 'Log', route: 'log', icon: MessageSquare },
  { label: 'Settings', route: 'settings', icon: Settings }
]
</script>
