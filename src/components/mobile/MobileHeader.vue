<script setup lang="ts">
import casinoLogo from '@/assets/mobile/casino-logo.svg'
import ClaimTheBonus from '@/components/shared/ClaimTheBonus.vue'
import LanguageDropdown from '@/components/shared/LanguageDropdown.vue'
import type { LanguageCode } from '@/constants/languages'

const language = defineModel<LanguageCode>({ default: 'ru' })
</script>

<template>
  <header class="mobile-header">
    <div class="mobile-header__top">
      <img class="mobile-header__logo" :src="casinoLogo" alt="Casino" />
      <LanguageDropdown v-model="language" />
    </div>
    <ClaimTheBonus class="mobile-header__bonus">Claim the bonus</ClaimTheBonus>
  </header>
</template>

<style scoped>
.mobile-header {
  position: absolute;
  z-index: 10;
  top: 24.16px;
  left: 50%;
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 343px;
  max-width: calc(100% - 32px);
  height: 88px;
  transform: translateX(-50%);
}

.mobile-header__top {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  width: 100%;
}

.mobile-header__logo {
  width: 104px;
  height: 17px;
}

.mobile-header__bonus {
  width: 100%;
}
</style>
