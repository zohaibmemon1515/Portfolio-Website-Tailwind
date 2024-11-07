"use client";
import Link from "next/link";
import Image from "next/image";
import { TiThMenu } from "react-icons/ti";
import { Sheet, SheetContent, SheetTrigger } from "@/app/components/ui/sheet";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const clickHandle = () => {
    setIsOpen(!isOpen);
  }

  return (
    <nav className="bg-[#170550] h-[85px] px-4 md:px-6 flex items-center justify-center shadow-2xl shadow-black box-border">
      <div className="w-full max-w-5xl flex items-center justify-between lg:ml-9">
        <div className="flex-shrink-0">
          <Image
            src="/assests/img/Logo.png"
            alt="Logo"
            height={80}
            width={200}
            className="h-full object-contain"
          />
        </div>

        
        <ul className="hidden lg:flex lg:gap-8 text-[#FFFFFF] font-semibold lg:text-base items-center">
          <li>
            <Link href="/" className="transition-all duration-300 ease-in transform hover:scale-105 hover:text-[#F86F03]">
              Home
            </Link>
          </li>
          <li>
            <Link href="/components/AboutMe" className="transition-all duration-300 ease-in transform hover:scale-105 hover:text-[#F86F03]">
              About Me
            </Link>
          </li>
          <li>
            <Link href="/components/Services" className="transition-all duration-300 ease-in transform hover:scale-105 hover:text-[#F86F03]">
              Services
            </Link>
          </li>
          <li>
            <Link href="/components/Skills" className="transition-all duration-300 ease-in transform hover:scale-105 hover:text-[#F86F03]">
              Skills
            </Link>
          </li>
          <li>
            <Link href="/components/Projects" className="transition-all duration-300 ease-in transform hover:scale-105 hover:text-[#F86F03]">
              Portfolio
            </Link>
          </li>
          <li>
            <Link href="/components/Contact" className="transition-all duration-300 ease-in transform hover:scale-105 hover:text-[#F86F03]">
              Contact
            </Link>
          </li>
        </ul>

      
        <div className="hidden lg:block flex-shrink-0">
          <Link href="https://api.whatsapp.com/send?phone=923193852479">
            <button className="text-[#31065A] bg-[#FFFFFF] rounded-full px-8 py-2 font-bold transition-all duration-300 ease-in hover:bg-[#F86F03] hover:text-white">
              Hire me
            </button>
          </Link>
        </div>

     
        <div className="lg:hidden md:mr-6 mr-3">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger onClick={clickHandle}>
              <TiThMenu className="text-[#FFFFFF]" size={30} />
            </SheetTrigger>
            <SheetContent side="right" className="p-4 bg-[#170550] text-[#FFFFFF] font-extrabold">
              <ul className="flex flex-col gap-4 text-[#FFFFFF] font-medium text-lg mt-16 items-center justify-center">
                <li>
                  <Link href="/" onClick={() => setIsOpen(false)} className="transition-all duration-300 ease-in transform hover:scale-105 hover:text-[#F86F03]">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/components/AboutMe" onClick={() => setIsOpen(false)} className="transition-all duration-300 ease-in transform hover:scale-105 hover:text-[#F86F03]">
                    About Me
                  </Link>
                </li>
                <li>
                  <Link href="/components/Services" onClick={() => setIsOpen(false)} className="transition-all duration-300 ease-in transform hover:scale-105 hover:text-[#F86F03]">
                    Services
                  </Link>
                </li>
                <li>
                  <Link href="/components/Skills" onClick={() => setIsOpen(false)} className="transition-all duration-300 ease-in transform hover:scale-105 hover:text-[#F86F03]">
                    Skills
                  </Link>
                </li>
                <li>
                  <Link href="/components/Projects" onClick={() => setIsOpen(false)} className="transition-all duration-300 ease-in transform hover:scale-105 hover:text-[#F86F03]">
                    Portfolio
                  </Link>
                </li>
                <li>
                  <Link href="/components/Contact" onClick={() => setIsOpen(false)} className="transition-all duration-300 ease-in transform hover:scale-105 hover:text-[#F86F03]">
                    Contact
                  </Link>
                </li>
              </ul>

              <div className="items-center justify-center flex mt-10">
                <Link href="https://api.whatsapp.com/send?phone=923193852479">
                  <button className="bg-[#FFFFFF] text-[#31065A] font-semibold rounded-full px-6 py-1 text-lg transition-all duration-300 ease-in hover:bg-[#F86F03] hover:text-white">
                    Hire me
                  </button>
                </Link>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}
