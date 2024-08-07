import React from 'react'
import { Card, CardContent } from './ui/card'
import Image from 'next/image'
import { Button } from './ui/button'
import { MenuIcon } from 'lucide-react'

const Header = () => {
  return (
    <Card>
      <CardContent className='p-5 flex items-center justify-between'>
        <Image src='/logo.png' alt='FSW Barber' width={130} height={22} />
        <Button size="icon" variant="outline">
          <MenuIcon />
        </Button>
      </CardContent>
    </Card>
  )
}

export default Header