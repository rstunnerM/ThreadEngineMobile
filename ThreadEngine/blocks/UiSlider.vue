<template>
  <div>
    <label class="text-sm">{{ label }}</label>
    <input type="range" :min="min" :max="max" v-model="value" @input="$emit('input', value)" />
  </div>
</template>

<script setup>
import { ref } from 'vue'
const props = defineProps({ label: String, min: Number, max: Number, value: Number })
const value = ref(props.value || 0)
</script>
