import { Button } from '@/app/_components/ui/button'
import { db } from '@/app/_lib/prisma'
import { ChevronLeftIcon, MapPinIcon, MenuIcon, StarIcon } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import React from 'react'
import ServiceItem from '../../_components/Service-item';

interface BarbershopPageProps {
  params: {
    id: string
  }
}

const BarberShopPage = async ({ params }: any) => {
  // buscar barbearia no banco de dados com base no id passado em params

  const barbershop = await db.barbershop.findUnique({
    where: {
      id: params.id
    },
    include: {
      services: true
    }
  })

  if (!barbershop) return notFound()

  console.log(barbershop.services)

  return (
    <div>
      {/* IMAGEM */}
      <div className="relative w-full h-[250px]">
        <Image src={barbershop?.imageUrl} fill className='object-cover' alt={barbershop?.name} />

        {/* button left */}
        <Button size='icon' variant='secondary' className='absolute top-2 left-4' asChild>
          <Link href='/'>
            <ChevronLeftIcon />
          </Link>
        </Button>

        {/* menu */}
        <Button size='icon' variant='secondary' className='absolute right-4 top-2'>
          <MenuIcon />
        </Button>
      </div>

      {/* Título */}
      <div className="p-5 border-b border-solid">
        <h1 className='text-xl font-bold mb-3'>{barbershop?.name} </h1>
        <div className="mb-2 flex items-center gap-2 ">
          <MapPinIcon className='text-primary' size={18} />
          <p className='text-sm'>{barbershop?.address}</p>
        </div>
        <div className="flex items-center gap-2 ">
          <StarIcon className='text-yellow-400 fill-yellow-400' size={18} />
          <p className='text-sm'>5.0 (886 avaliações)</p>
        </div>
      </div>

      {/* Descrição */}
      <div className='p-5 border-b border-solid space-y-3'>
        <h2 className='text-xs font-bold uppercase text-gray-400'>Sobre nós</h2>
        <p className='text-sm text-justify'>{barbershop?.description}</p>
      </div>

      {/* SERVIÇOS */}
      <div className="p-5 border-b border-solid space-y-3">
        <h2 className='text-xs font-bold uppercase text-gray-400'>Serviços</h2>
        {barbershop.services.map(service => (
          <ServiceItem key={service.id} service={service} />
        ))}
      </div>
    </div>

  )
}

export default BarberShopPage