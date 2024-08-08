import { SearchIcon } from "lucide-react";
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

        {/* banner */}
        <div className="relative w-full h-[160px] mt-6">
          <Image src='/banner_01.png' alt="Agende nos melhores com FSW Barber" className="object-cover  rounded-lg" fill />
        </div>

        <h2 className="pt-6 mb-3 uppercase text-xs text-gray-400 font-bold">Agendamentos</h2>

        {/* Agendamento */}
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

      </div>
    </div>
  );
}
