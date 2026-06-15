import ruFlag from '@/assets/flags/ru.svg'
import trFlag from '@/assets/flags/tr.svg'
import uzFlag from '@/assets/flags/uz.svg'

export const LANGUAGES = [
  { code: 'ru', label: 'RU', flag: ruFlag },
  { code: 'tr', label: 'TR', flag: trFlag },
  { code: 'uz', label: 'UZ', flag: uzFlag },
] as const

export type LanguageCode = (typeof LANGUAGES)[number]['code']
