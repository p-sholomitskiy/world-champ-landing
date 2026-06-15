<script setup lang="ts">
import { ref } from 'vue'
import background from '@/assets/desktop/background.svg'
import casinoLogo from '@/assets/desktop/casino-logo.svg'
import LanguageDropdown from '@/components/shared/LanguageDropdown.vue'
import type { LanguageCode } from '@/constants/languages'

const language = ref<LanguageCode>('ru')
</script>

<template>
  <section class="landing">
    <img class="landing__background" :src="background" alt="" aria-hidden="true" />
    <div class="landing__header">
      <LanguageDropdown v-model="language" />
    </div>
    <div class="landing__content">
      <img class="landing__logo" :src="casinoLogo" alt="Casino" />
    </div>
  </section>
</template>

<style scoped>
.landing {
  position: relative;
  min-height: 100dvh;
  overflow: hidden;
}

.landing__background {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
}

.landing__content {
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100dvh;
  padding: 40px;
}

.landing__logo {
  width: min(100%, 420px);
  height: auto;
}

.landing__header {
  position: absolute;
  z-index: 10;
  top: 20px;
  left: 20px;
}
</style>
