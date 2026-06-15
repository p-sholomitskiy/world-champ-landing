import type { LanguageCode } from '@/constants/languages'

export const LANDING_TEXTS = {
  ru: {
    claimBonus: 'Заберите прямо сейчас',
    bonus: '30€\nфрибетами',
    grab: 'Забрать',
  },
  tr: {
    claimBonus: 'Hemen şimdi alın',
    bonus: '30€\nFreebet',
    grab: 'Al',
  },
  uz: {
    claimBonus: 'Hoziroq',
    bonus: '30€\nFreebet',
    grab: "Olish",
  },
} satisfies Record<
  LanguageCode,
  {
    claimBonus: string
    bonus: string
    grab: string
  }
>
