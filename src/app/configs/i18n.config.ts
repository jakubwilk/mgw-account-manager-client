import i18next, { InitOptions } from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'

export const resources = {
  pl: {},
}

const i18nConfig: InitOptions = {
  lng: 'pl',
  fallbackLng: 'pl',
  ns: ['global', 'login', 'session', 'navigation'],
  defaultNS: 'global',
  resources,
}

i18next.use(initReactI18next).use(LanguageDetector).init(i18nConfig)

export default i18next
