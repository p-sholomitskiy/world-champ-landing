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
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 12px;

  width: 343px;
  height: 35px;
  padding: 0 24px;

  border: 2.1px solid transparent;
  border-radius: 24px;

  background:
    linear-gradient(135deg, rgba(255, 255, 255, 0.02), rgba(255, 255, 255, 0)) padding-box,
    linear-gradient(180deg, #fa9b0d, rgba(250, 155, 13, 0)) border-box;

  backdrop-filter: blur(100px);
  -webkit-backdrop-filter: blur(100px);

  box-shadow:
    0 0 120px rgba(255, 195, 0, 0.25) inset,
    0 4px 40px rgba(0, 0, 0, 0.5),
    0 0 60px rgba(255, 195, 0, 0.15);

  color: #fff;
}



.claim-the-bonus__text {
  font-family: 'Gilroy-Medium', sans-serif;
  font-weight: 400;
  font-size: 22px;
  line-height: 100%;
  letter-spacing: 0;
  text-align: center;
  leading-trim: both;
  text-box-trim: cap;
  text-box-edge: cap alphabetic;
}
</style>
