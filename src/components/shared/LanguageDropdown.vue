<script setup lang="ts">
import { computed, onMounted, onUnmounted, ref } from 'vue'
import { LANGUAGES, type LanguageCode } from '@/constants/languages'

const props = withDefaults(
  defineProps<{
    modelValue?: LanguageCode
  }>(),
  {
    modelValue: 'ru',
  },
)

const emit = defineEmits<{
  'update:modelValue': [code: LanguageCode]
}>()

const isOpen = ref(false)
const rootRef = ref<HTMLElement | null>(null)

const selectedLanguage = computed(
  () => LANGUAGES.find((language) => language.code === props.modelValue) ?? LANGUAGES[0],
)

const availableLanguages = computed(() =>
  LANGUAGES.filter((language) => language.code !== props.modelValue),
)

function toggle() {
  isOpen.value = !isOpen.value
}

function select(code: LanguageCode) {
  emit('update:modelValue', code)
  isOpen.value = false
}

function onDocumentClick(event: MouseEvent) {
  if (!rootRef.value?.contains(event.target as Node)) {
    isOpen.value = false
  }
}

onMounted(() => document.addEventListener('click', onDocumentClick))
onUnmounted(() => document.removeEventListener('click', onDocumentClick))
</script>

<template>
  <div ref="rootRef" class="language-dropdown">
    <button
      type="button"
      class="language-dropdown__trigger"
      :aria-expanded="isOpen"
      aria-haspopup="listbox"
      @click.stop="toggle"
    >
      <img
        class="language-dropdown__flag"
        :src="selectedLanguage.flag"
        :alt="selectedLanguage.label"
      />
      <span class="language-dropdown__label">{{ selectedLanguage.label }}</span>
      <svg
        class="language-dropdown__arrow"
        :class="{ 'language-dropdown__arrow--open': isOpen }"
        width="6.4"
        height="3.84"
        viewBox="0 0 6.4 3.84"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path
          d="M0.6 0.16L3.2 3.2L5.8 0.16"
          stroke="currentColor"
          stroke-width="1.2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </button>

    <ul v-if="isOpen" class="language-dropdown__menu" role="listbox">
      <li
        v-for="language in availableLanguages"
        :key="language.code"
        role="option"
        aria-selected="false"
      >
        <button
          type="button"
          class="language-dropdown__option"
          @click="select(language.code)"
        >
          <img class="language-dropdown__flag" :src="language.flag" :alt="language.label" />
          <span class="language-dropdown__label">{{ language.label }}</span>
        </button>
      </li>
    </ul>
  </div>
</template>

<style scoped>
.language-dropdown {
  position: relative;
}

.language-dropdown__trigger,
.language-dropdown__option {
  display: flex;
  align-items: center;
  gap: 10px;
  width: 80px;
  height: 37px;
  padding: 9px 8px;
  border: none;
  border-radius: 10px;
  color: #fff;
  cursor: pointer;
  transition: background-color 0.2s ease;
}

.language-dropdown__trigger {
  justify-content: center;
  background: #262b3b;
}

.language-dropdown__trigger:hover {
  background: #424557;
}

.language-dropdown__trigger[aria-expanded='true'] {
  background: #25f56c;
}

.language-dropdown__menu {
  position: absolute;
  top: calc(100% + 6px);
  right: 0;
  z-index: 20;
  display: flex;
  flex-direction: column;
  gap: 6px;
  width: 100px;
  height: auto;
  margin: 0;
  padding: 12px;
  border-radius: 15px;
  background: #171925;
  list-style: none;
}

.language-dropdown__option {
  width: 100%;
  background: #262b3b;
}

.language-dropdown__option:hover {
  background: #424557;
}

.language-dropdown__flag {
  flex-shrink: 0;
  width: 16px;
  height: 16px;
  border-radius: 16px;
  object-fit: cover;
}

.language-dropdown__label {
  flex: 1;
  font-family: Inter, system-ui, sans-serif;
  font-weight: 500;
  font-size: 14px;
  line-height: 18px;
  text-align: center;
  text-transform: uppercase;
}

.language-dropdown__arrow {
  flex-shrink: 0;
  opacity: 0.5;
  transform: rotate(180deg);
  transition: transform 0.2s ease;
}

.language-dropdown__arrow--open {
  transform: rotate(0deg);
}
</style>
