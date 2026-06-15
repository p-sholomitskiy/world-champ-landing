<script setup lang="ts">
withDefaults(
  defineProps<{
    as?: string
    buttonText?: string
  }>(),
  {
    as: 'div',
    buttonText: 'Play now',
  },
)

const emit = defineEmits<{
  click: []
}>()
</script>

<template>
  <component :is="as" class="cta-block">
    <p class="cta-block__title">
      <slot />
    </p>
    <button type="button" class="cta-block__button" @click="emit('click')">
      {{ buttonText }}
    </button>
  </component>
</template>

<style scoped>
.cta-block {
  display: flex;
  align-items: center;
  gap: 24px;
  width: 343px;
  max-width: 100%;
  height: 80px;
  padding: 24px;
  border: 1px solid transparent;
  border-radius: 12.83px;
  background-color: var(--Bg_Color, #1a1a1a);
  background-image:
    linear-gradient(var(--Bg_Color, #1a1a1a), var(--Bg_Color, #1a1a1a)),
    linear-gradient(180deg, #fa9b0d 0%, rgba(250, 155, 13, 0) 100%);
  background-origin: border-box;
  background-clip: padding-box, border-box;
  box-shadow: 0 3.21px 17.4px 0 #2f02009e;
}

.cta-block__title {
  flex: 1;
  margin: 0;
  font-family: 'Gilroy-HeavyItalic', sans-serif;
  font-weight: 400;
  font-style: italic;
  font-size: 24px;
  line-height: 100%;
  letter-spacing: 0;
  text-align: center;
  text-transform: uppercase;
  background: linear-gradient(97.49deg, #f6ef59 2.88%, #ff6b00 100.54%);
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
  leading-trim: both;
  text-box-trim: cap;
  text-box-edge: cap alphabetic;
  white-space: pre-line;
}

.cta-block__button {
  display: flex;
  flex-shrink: 0;
  align-items: center;
  justify-content: center;
  width: 105.86px;
  height: 30.45px;
  padding: 11.23px 16.04px;
  border: none;
  border-radius: 6.42px;
  background: linear-gradient(97.49deg, #f6ef59 2.88%, #ff6b00 100.54%);
  color: #000;
  font-family: 'Gilroy-Bold', sans-serif;
  font-weight: 400;
  font-style: normal;
  font-size: 12px;
  line-height: 100%;
  letter-spacing: 0;
  text-align: center;
  text-transform: capitalize;
  cursor: pointer;
  leading-trim: both;
  text-box-trim: cap;
  text-box-edge: cap alphabetic;
}
</style>
