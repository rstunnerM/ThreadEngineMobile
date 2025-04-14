<template>
  <div class="space-y-4">
    <component
      v-for="(block, index) in layout"
      :key="index"
      :is="getComponent(block.type)"
      v-bind="block.props"
      @input="updateValue(index, $event)"
    />
  </div>
</template>

<script setup>
import { ref, defineAsyncComponent } from 'vue'

const props = defineProps({ layout: Array })
const emits = defineEmits(['update'])

const getComponent = (type) => ({
  button: defineAsyncComponent(() => import('./blocks/UiButton.vue')),
  slider: defineAsyncComponent(() => import('./blocks/UiSlider.vue')),
  toggle: defineAsyncComponent(() => import('./blocks/UiToggle.vue'))
}[type] || 'div')

const updateValue = (index, value) => {
  emits('update', { index, value })
}
</script>
