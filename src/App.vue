<script setup lang="ts">
import DesktopLanding from '@/components/desktop/DesktopLanding.vue'
import MobileLanding from '@/components/mobile/MobileLanding.vue'
import { useBreakpoint } from '@/composables/useBreakpoint'

const { isMobile } = useBreakpoint()
</script>

<template>
  <MobileLanding v-if="isMobile" />
  <DesktopLanding v-else />
</template>
