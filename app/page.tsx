import { SearchIcon } from "lucide-react";
import Header from "./_components/Header";
import { Button } from "./_components/ui/button";
import { Input } from "./_components/ui/input";
import Image from "next/image";

export default function Home() {
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
      </div>
    </div>
  );
}
