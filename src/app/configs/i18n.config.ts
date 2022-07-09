import i18next, { InitOptions } from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'

import pages from '@locales/pages.json'
import auth from '@locales/auth.json'

export const resources = {
  pl: {
    pages,
    auth,
  },
}

const i18nConfig: InitOptions = {
  lng: 'pl',
  fallbackLng: 'pl',
  ns: ['pages', 'auth'],
  defaultNS: 'global',
  resources,
}

i18next.use(initReactI18next).use(LanguageDetector).init(i18nConfig)

export default i18next
