<template>
  <div class="flex items-center gap-2">
    <label>{{ label }}</label>
    <input type="checkbox" v-model="checked" @change="$emit('input', checked)" />
  </div>
</template>

<script setup>
import { ref } from 'vue'
const props = defineProps({ label: String, value: Boolean })
const checked = ref(props.value || false)
</script>
