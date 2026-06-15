<script setup lang="ts">
withDefaults(
  defineProps<{
    as?: string
  }>(),
  {
    as: 'div',
  },
)
</script>

<template>
  <component :is="as" class="claim-the-bonus">
    <span class="claim-the-bonus__text">
      <slot />
    </span>
  </component>
</template>

<style scoped>
.claim-the-bonus {
  --bonus-border-width: 2.1px;
  --bonus-glass-opacity: 0.90;
  --bonus-glass-blur: 100px;

  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  overflow: hidden;

  width: 343px;
  height: 35px;
  padding: 0 24px;

  border: none;
  border-radius: 24px;

  background: transparent;
  color: #fff;
}

.claim-the-bonus::before {
  content: '';
  position: absolute;
  inset: 0;
  z-index: 0;
  border-radius: inherit;
  background: linear-gradient(135deg, rgba(248, 251, 255, 0.04) 0%, rgba(255, 255, 255, 0) 100%);
  opacity: var(--bonus-glass-opacity);
  backdrop-filter: blur(var(--bonus-glass-blur));
  -webkit-backdrop-filter: blur(var(--bonus-glass-blur));
  box-shadow:
    188.4px 94.2px 376.81px 0 rgba(0, 0, 0, 0.08),
    0 0 188.4px 0 rgba(255, 195, 0, 0.32) inset,
    0 3.92px 66.08px 0 rgba(0, 0, 0, 0.7);
  pointer-events: none;
}

.claim-the-bonus::after {
  content: '';
  position: absolute;
  inset: 0;
  z-index: 1;
  padding: var(--bonus-border-width);
  border-radius: inherit;
  background: linear-gradient(180deg, #fa9b0d, rgba(250, 155, 13, 0));
  mask:
    linear-gradient(#000 0 0) content-box,
    linear-gradient(#000 0 0);
  mask-composite: exclude;
  -webkit-mask:
    linear-gradient(#000 0 0) content-box,
    linear-gradient(#000 0 0);
  -webkit-mask-composite: xor;
  pointer-events: none;
}

.claim-the-bonus__text {
  position: relative;
  z-index: 2;
  font-family: 'Gilroy-Medium', sans-serif;
  font-weight: 400;
  font-style: normal;
  font-size: 22px;
  line-height: 100%;
  letter-spacing: 0;
  text-align: center;
  color: rgba(255, 244, 214, 0.86);
  text-shadow: 0 0 18px rgba(255, 195, 0, 0.28);
  leading-trim: both;
  text-box-trim: cap;
  text-box-edge: cap alphabetic;
}
</style>
