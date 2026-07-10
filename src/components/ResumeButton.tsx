import { Download } from 'lucide-react'

type ResumeButtonProps = {
  label: string
  variant?: 'primary' | 'secondary'
  className?: string
}

export function ResumeButton({ label, variant = 'primary', className = '' }: ResumeButtonProps) {
  const styles = variant === 'primary'
    ? 'bg-white/10 border border-white/15 text-white hover:bg-white/15'
    : 'text-gray-300 hover:text-white'

  return (
    <a
      href={`${import.meta.env.BASE_URL}docs/curriculo-wellington-siqueira-porto.pdf`}
      download="curriculo-wellington-siqueira-porto.pdf"
      className={`inline-flex items-center justify-center gap-2 rounded-xl px-6 py-3 text-sm font-bold transition-colors ${styles} ${className}`}
      aria-label={label}
    >
      <Download className="h-4 w-4" aria-hidden="true" />
      {label}
    </a>
  )
}
