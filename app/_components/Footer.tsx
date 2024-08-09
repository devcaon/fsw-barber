import React from 'react'
import { Card, CardContent } from './ui/card'
import { FacebookIcon, InstagramIcon, LinkedinIcon, YoutubeIcon } from 'lucide-react'

const Footer = () => {
  return (
    <Card >
      <CardContent className="flex justify-between py-5 px-5  text-gray-400">
        <p className="text-sm">&copy; 2023 Copyright <span className="font-black">FSW Barber</span></p>
        <div className="flex items-center gap-2">
          <FacebookIcon size={18} />
          <InstagramIcon size={18} />
          <YoutubeIcon size={26} />
          <LinkedinIcon size={18} />
        </div>
      </CardContent>
    </Card>
  )
}

export default Footer