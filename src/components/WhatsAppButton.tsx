import { MessageCircle } from 'lucide-react'
import { useLanguage } from '../i18n'

const WHATSAPP_NUMBER = '11977912705'

export function WhatsAppButton() {
  const { t } = useLanguage()

  return (
    <a
      href={`https://wa.me/${WHATSAPP_NUMBER}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-400 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 group"
      aria-label={t.whatsapp.ariaLabel}
    >
      <MessageCircle size={28} />
      <span className="absolute right-16 top-1/2 -translate-y-1/2 bg-gray-900 text-white text-sm px-3 py-1 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
        {t.whatsapp.tooltip}
      </span>
    </a>
  )
}

