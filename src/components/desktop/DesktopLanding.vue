<script setup lang="ts">
import { computed, ref } from 'vue'
import background from '@/assets/desktop/background.svg'
import casinoLogo from '@/assets/desktop/casino-logo.svg'
import CtaBlock from '@/components/shared/CtaBlock.vue'
import LanguageDropdown from '@/components/shared/LanguageDropdown.vue'
import type { LanguageCode } from '@/constants/languages'
import { LANDING_TEXTS } from '@/constants/texts'
import ClaimTheBonus from '../shared/ClaimTheBonus.vue'

const language = ref<LanguageCode>('ru')
const texts = computed(() => LANDING_TEXTS[language.value])
</script>

<template>
  <section class="landing">
    <img class="landing__background" :src="background" alt="" aria-hidden="true" />
    <header class="landing__header">
      <img class="landing__logo" :src="casinoLogo" alt="Casino" />
      <LanguageDropdown v-model="language" />
    </header>
    <div class="landing__claim-the-bonus">
      <ClaimTheBonus>{{ texts.claimBonus }}</ClaimTheBonus>
    </div>
    <div class="landing__cta">
      <CtaBlock :button-text="texts.grab" :title-font-size-in-px="texts.bonusFontSizeDesktop">{{ texts.bonus }}</CtaBlock>
    </div>
    <div class="landing__content" />
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
  min-height: 100dvh;
}

.landing__logo {
  position: absolute;
  top: 48px;
  left: 50%;
  width: 288px;
  height: 48px;
  transform: translateX(-50%);
}

.landing__header {
  position: absolute;
  z-index: 10;
  inset: 0 0 auto;
  min-height: 85px;
  pointer-events: none;
}

.landing__header :deep(.language-dropdown) {
  position: absolute;
  top: 48px;
  right: 137px;
  pointer-events: auto;
}

.landing__cta {
  position: absolute;
  bottom: 74px;
  left: 50%;
  z-index: 10;
  width: 517px;
  height: 126px;
  transform: translateX(-50%);
}

.landing__cta :deep(.cta-block__title) {
  font-size: 32px;
}

.landing__cta :deep(.cta-block) {
  width: 517px;
  height: 126px;
  max-width: 100%;
}

.landing__cta :deep(.cta-block__button) {
  width: 167px;
  height: 38px;
  padding: 14px 20px;
  border-radius: 8px;
  gap: 20px;
}

.landing__claim-the-bonus {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  bottom: 190px;
  z-index: 11;
}
</style>
