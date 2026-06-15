<script setup lang="ts">
import DesktopLanding from '@/components/desktop/DesktopLanding.vue'
import MobileLanding from '@/components/mobile/MobileLanding.vue'
import { useBreakpoint } from '@/composables/useBreakpoint'

const { isMobile } = useBreakpoint()
</script>

<template>
  <!-- TODO: delete this span with CSS after final release -->
  <span class="version">v 1.0</span>
  <MobileLanding v-if="isMobile" />
  <DesktopLanding v-else />
</template>

<style scoped>
.version {
  position: absolute;
  color: #ffffff;
  left: 0px;
  top: 0px;
  z-index: 99999;
}
</style>
