"use client"

import { SmartphoneIcon } from 'lucide-react'
import { Button } from './ui/button'
import { toast } from 'sonner'

interface PhoneItemProps {
  phone: string
}


const PhoneItem = ({ phone }: PhoneItemProps) => {

  const handleCopyPhoneClick = (phone: string) => {
    navigator.clipboard.writeText(phone)
    toast.success('Phone copied successfully!')
  }

  return (
    <div className="flex justify-between">
      {/* direita */}
      <div className="flex items-center gap-2">
        <SmartphoneIcon />
        <p className='text-sm'>{phone}</p>
      </div>

      {/* esquerda */}
      <Button
        variant='outline'
        size='sm'
        onClick={() => handleCopyPhoneClick(phone)}
      >
        Copiar
      </Button>
    </div>
  )
}

export default PhoneItem