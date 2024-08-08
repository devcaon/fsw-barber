import React from 'react'
import { Card, CardContent } from './ui/card'
import { Badge } from './ui/badge'
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar'


// TODO: Recebe agenddamentos via props
const BookingItem = () => {
  return (
    <>
      <h2 className="pt-6 mb-3 uppercase text-xs text-gray-400 font-bold">Agendamentos</h2>

      <Card>
        <CardContent className="flex justify-between p-0">
          {/* esquerda */}
          <div className="flex flex-col gap-2 py-5 pl-5">
            <Badge className="w-fit">Confirmado</Badge>
            <h3 className="font-semibold">Corte de Cabelo</h3>

            <div className="flex items-center gap-2">
              <Avatar className="h-6 w-6">
                <AvatarImage src="https://utfs.io/f/c97a2dc9-cf62-468b-a851-bfd2bdde775f-16p.png" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <p className="text-sm">Vintage Barber</p>
            </div>
          </div>

          {/* direita */}
          <div className="flex flex-col items-center justify-center gap-1 border-l-2 border-solid px-8">
            <p className="text-sm">Agosto</p>
            <p className="text-2xl">05</p>
            <p className="text-sm">20:00</p>
          </div>
        </CardContent>
      </Card>
    </>
  )
}

export default BookingItem