import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { LucideIcon } from 'lucide-react'

interface TransparentButtonProps {
  href: string
  icon: LucideIcon
  label: string
  external?: boolean
}

export function TransparentButton({ 
  href, 
  icon: Icon, 
  label,
  external 
}: TransparentButtonProps) {
  const ButtonWrapper = external ? motion.a : motion(Link)
  const buttonProps = external ? { 
    href,
    target: "_blank",
    rel: "noopener noreferrer"
  } : { href }

  return (
    <Button
      asChild
      size="lg"
      className="group relative border-4 shadow-md shadow-sage-300 rounded-3xl border-lime-500 overflow-hidden bg-transparent hover:bg-lime-500 text-forest-900"
    >
      <ButtonWrapper
        {...buttonProps}
        whileHover={{ scale: 1.1, rotate: 5 }}
        whileTap={{ scale: 0.95, rotate: -5 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <motion.span
          className="absolute inset-0 bg-sage-300"
          initial={{ x: "100%" }}
          whileHover={{ x: 0 }}
          transition={{ type: "tween", ease: "easeInOut" }}
        />
        <span className="relative z-10 flex items-center">
          <motion.div
            className="flex items-center"
            whileHover={{ scale: 1.2 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Icon className="w-5 h-5 mr-2" />
          </motion.div>
          <span>{label}</span>
        </span>
      </ButtonWrapper>
    </Button>
  )
} 