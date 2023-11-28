"use client";

import Link from "next/link";
import { UserButton } from "@clerk/nextjs";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Poppins } from "next/font/google";
import { Sparkles } from "lucide-react";

import { ModeToggle } from "./mode-toggle";
import { MobileSidebar } from "./mobile-sidebar";

const font = Poppins({ weight: "600", subsets: ["latin"] });
interface NavbarProps {
  isPro: boolean;
}

export const Navbar=()=> {

   
    return(
        <div className="fixed w-full z-50 flex justify-between items-center py-2 px-4 h-16 border-b border-primary/10 bg-secondary h-16">
             <div className="flex items-center">

             <MobileSidebar isPro={false} />
        <Link href="/">
          <h1 className={cn("hidden md:block text-xl md:text-3xl font-bold text-primary", font.className)}>
            Next .Ai By Kawthar Klayshe
          </h1>
        </Link>
             </div>
             <div className="flex items-center gap-x-3">
        {/* {!isPro && ( */}
          
        {/* )}
*/}
        <ModeToggle /> 
        <UserButton afterSignOutUrl="/" />
      </div>
        </div>



    )
}