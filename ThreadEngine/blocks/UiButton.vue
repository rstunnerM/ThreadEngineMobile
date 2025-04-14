<template>
  <button @click="$emit('input', true)" class="bg-blue-500 text-white rounded px-4 py-2">
    {{ label }}
  </button>
</template>

<script setup>
defineProps({ label: String })
</script>
