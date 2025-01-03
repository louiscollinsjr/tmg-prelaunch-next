'use client'
 
import { I18nProviderClient } from '../app/i18n/client'
 
export default function I18nProvider({
  locale,
  children,
}: {
  locale: string
  children: React.ReactNode
}) {
  return (
    <I18nProviderClient locale={locale}>{children}</I18nProviderClient>
  )
}
