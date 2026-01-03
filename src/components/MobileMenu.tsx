"use client";

import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";

import { Menu } from "lucide-react";

export function MobileMenu() {
  return (
    <div className="md:hidden">
      <Sheet>
        {/* Botão hamburger */}
        <SheetTrigger asChild>
          <button
            className="p-2 rounded-md border"
            aria-label="Abrir menu"
          >
            <Menu className="h-6 w-6" />
          </button>
        </SheetTrigger>

        {/* MODAL */}
        <SheetContent
          side="top"
          className="
            inset-2
            mx-auto
            mb-60
            rounded-4xl
            shadow-2xl
            flex
            flex-col
            items-center
            justify-center
            text-center
            gap-6
            transition-all duration-300 ease-out
          "
        >

          <nav className="flex flex-col gap-6 text-lg font-medium">
            <SheetClose asChild>
              <a href="#">Ínicio</a>
            </SheetClose>

            <SheetClose asChild>
              <a href="#menu">Cardápio</a>
            </SheetClose>

            <SheetClose asChild>
              <a href="#about">Sobre</a>
            </SheetClose>

            <SheetClose asChild>
              <a href="#contact">Contato</a>
            </SheetClose>
          </nav>
        </SheetContent>
      </Sheet>
    </div>
  );
}
