import type { LanguageCode } from '@/constants/languages'

export const LANDING_TEXTS = {
  ru: {
    claimBonus: 'Заберите прямо сейчас',
    bonus: 'Up to 150 EUR\n+ 90 Freebet',
    bonusFontSizeMobile: 24,
    bonusFontSizeDesktop: 32,
    grab: 'Забрать',
  },
  tr: {
    claimBonus: 'Hemen şimdi alın',
    bonus: '150 EUR’ya kadar\n+ 90 Freebet',
    bonusFontSizeMobile: 18,
    bonusFontSizeDesktop: 28,
    grab: 'Al',
  },
  uz: {
    claimBonus: 'Hoziroq oling',
    bonus: '150 EUR gacha\n+ 90 Freebet',
    bonusFontSizeMobile: 22,
    bonusFontSizeDesktop: 28,
    grab: "Olish",
  },
} satisfies Record<
  LanguageCode,
  {
    claimBonus: string
    bonus: string
    bonusFontSizeMobile: number,
    bonusFontSizeDesktop: number,
    grab: string
  }
>
