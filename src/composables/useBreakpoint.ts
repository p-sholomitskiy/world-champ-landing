import { onMounted, onUnmounted, ref } from 'vue'
import { MOBILE_MEDIA_QUERY } from '@/constants/breakpoints'

export function useBreakpoint() {
  const isMobile = ref(
    typeof window !== 'undefined'
      ? window.matchMedia(MOBILE_MEDIA_QUERY).matches
      : false,
  )

  let mediaQuery: MediaQueryList | null = null

  const update = (event: MediaQueryListEvent) => {
    isMobile.value = event.matches
  }

  onMounted(() => {
    mediaQuery = window.matchMedia(MOBILE_MEDIA_QUERY)
    isMobile.value = mediaQuery.matches
    mediaQuery.addEventListener('change', update)
  })

  onUnmounted(() => {
    mediaQuery?.removeEventListener('change', update)
  })

  return { isMobile }
}
