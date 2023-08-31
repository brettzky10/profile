import Link from "next/link"
import Image from "next/image"
import { cn } from "@/lib/utils"
import { Poppins } from "next/font/google";
import { Button } from "./ui/button";

const font = Poppins({ weight: '600', subsets: ['latin'] });

const Navbar = () => {
  return (
    <nav className="p-4 bg-gray-200 flex items-center justify-between shadow-xl z-20">
      <Link href="/" className="flex items-center">
        <div className="relative h-8 w-8 mr-4">
          <Image fill alt="Logo" src="/logo.png" />
        </div>
        <h1 className={cn("text-2xl font-bold text-slate-900", font.className)}>
          Brett Linseman
        </h1>
      </Link>
      <div className="flex items-center gap-x-2">
        <Link href={"/contact"}>
          <Button variant="contact" className="text-white">
            Contact
          </Button>
        </Link>
      </div>
    </nav>
  )
}

export default Navbar