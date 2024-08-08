import { EyeIcon, FacebookIcon, Footprints, GithubIcon, InstagramIcon, LinkedinIcon, LucideLinkedin, SearchIcon, YoutubeIcon } from "lucide-react";
import Header from "./_components/Header";
import { Button } from "./_components/ui/button";
import { Input } from "./_components/ui/input";
import Image from "next/image";
import { Card, CardContent, CardTitle } from "./_components/ui/card";
import { Badge } from "./_components/ui/badge";
import { Avatar, AvatarFallback } from "./_components/ui/avatar";
import { AvatarImage } from "@radix-ui/react-avatar";
import { db } from "./_lib/prisma";
import BarbershopItem from "./_components/Barbershop-item";

export default async function Home() {

  // chamar banco de dados

  const barbershops = await db.barbershop.findMany({})
  const popularBarbershops = await db.barbershop.findMany({
    orderBy: {
      name: 'desc'
    }
  })

  return (
    <div className="">
      <Header />
      <div className="p-5">
        <h2 className="text-xl font-bold">Olá, Cláudio</h2>
        <p>Segunda-feira, 05 de Agosto</p>

        {/* search */}
        <div className="flex items-center gap-2 mt-6">
          <Input placeholder="Faça sua busca..." />
          <Button>
            <SearchIcon />
          </Button>
        </div>

        {/* busca rápida */}
        <div className="flex gap-3 mt-6 overflow-x-scroll [&::-webkit-scrollbar]:hidden">

          <Button className="gap-2" variant='secondary'>
            <Image src='/cabelo.svg' alt="cabelo" width={16} height={16} />
            <p>Cabelo</p>
          </Button>

          <Button className="gap-2" variant='secondary'>
            <Image src='/barba.svg' alt="barba" width={16} height={16} />
            <p>Barba</p>
          </Button>

          <Button className="gap-2" variant='secondary'>
            <Image src='/acabamento.svg' alt="acabamento" width={16} height={16} />
            <p>Acabamento</p>
          </Button>

          <Button className="gap-2" variant='secondary'>
            <EyeIcon size={16} />
            <p>Sobrançelhas</p>
          </Button>

          <Button className="gap-2" variant='secondary'>
            <Footprints size={16} />
            <p>Pézinho</p>
          </Button>

          <Button className="gap-2" variant='secondary'>
            <Image src='/acabamento.svg' alt="acabamento" width={16} height={16} />
            <p>Acabamento</p>
          </Button>
        </div>

        {/* banner */}
        <div className="relative w-full h-[160px] mt-6">
          <Image src='/banner_01.png' alt="Agende nos melhores com FSW Barber" className="object-cover  rounded-lg" fill />
        </div>

        {/* Agendamento */}
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

        {/* Recomendados */}
        <h2 className="pt-6 mb-3 uppercase text-xs text-gray-400 font-bold">
          Recomendados
        </h2>

        <div className="flex gap-2 overflow-auto [&::-webkit-scrollbar]:hidden">
          {barbershops.map((barbershop) =>
            <BarbershopItem key={barbershop.id} barbershop={barbershop} />
          )}
        </div>

        {/* Populares */}
        <h2 className="pt-6 mb-3 uppercase text-xs text-gray-400 font-bold">
          Populares
        </h2>

        <div className="flex gap-2 overflow-auto [&::-webkit-scrollbar]:hidden">
          {popularBarbershops.map((barbershop) =>
            <BarbershopItem key={barbershop.id} barbershop={barbershop} />
          )}
        </div>
      </div>

      {/* footer */}
      <footer>
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
      </footer>

    </div>
  );
}
