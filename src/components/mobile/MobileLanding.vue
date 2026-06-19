<script setup lang="ts">
import { computed, ref } from 'vue'
import background from '@/assets/mobile/background.svg'
import MobileHeader from '@/components/mobile/MobileHeader.vue'
import CtaBlock from '@/components/shared/CtaBlock.vue'
import type { LanguageCode } from '@/constants/languages'
import { LANDING_TEXTS } from '@/constants/texts'

const language = ref<LanguageCode>('ru')
const texts = computed(() => LANDING_TEXTS[language.value])
</script>

<template>
  <section class="landing">
    <img class="landing__background" :src="background" alt="" aria-hidden="true" />
    <MobileHeader v-model="language" />
    <div class="landing__cta">
      <CtaBlock :button-text="texts.grab" :title-font-size-in-px="texts.bonusFontSizeMobile">{{ texts.bonus }}</CtaBlock>
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
  object-position: center top;
}

.landing__cta {
  position: absolute;
  bottom: 70px;
  left: 50%;
  z-index: 10;
  width: 343px;
  max-width: calc(100% - 40px);
  transform: translateX(-50%);
}

.landing__content {
  position: relative;
  z-index: 1;
  min-height: 100dvh;
}
</style>
