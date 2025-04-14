<template>
  <div ref="canvas" class="w-full h-[500px] bg-zinc-100 dark:bg-zinc-800 touch-none overflow-hidden relative">
    <div class="absolute" :style="{ transform: transform }">
      <slot />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const scale = ref(1)
const translateX = ref(0)
const translateY = ref(0)
const transform = computed(() => \`translate(\${translateX.value}px, \${translateY.value}px) scale(\${scale.value})\`)

const canvas = ref(null)

onMounted(() => {
  let lastTouchDist = 0
  canvas.value.addEventListener('touchmove', (e) => {
    if (e.touches.length === 2) {
      const [a, b] = e.touches
      const dist = Math.hypot(a.pageX - b.pageX, a.pageY - b.pageY)
      if (lastTouchDist) {
        scale.value *= dist / lastTouchDist
      }
      lastTouchDist = dist
    }
    if (e.touches.length === 1) {
      translateX.value += e.touches[0].movementX || 0
      translateY.value += e.touches[0].movementY || 0
    }
  }, { passive: true })
})
</script>
