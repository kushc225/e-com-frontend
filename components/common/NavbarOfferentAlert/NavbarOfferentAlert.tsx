import { GetServerSideProps } from 'next';
import i18next from '@/lib/i18N';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@radix-ui/react-dropdown-menu'
import { Label } from '@radix-ui/react-label'
import React from 'react'

const NavbarOfferentAlert = () => {
  return (
    <nav className="bg-black text-center flex justify-center items-center h-[50px] gap-10 overflow-hidden">
       
    <div>
    <Label className="text-white">Summer Sale For All Swim Suits And Free Express Delivery </Label>
     <Label className="text-white">- OFF 50%!</Label>
     <Label className="text-white ml-5 underline cursor-pointer">ShopNow</Label>
    </div>



     <div>
       <DropdownMenu>
         <DropdownMenuTrigger className="text-white">English</DropdownMenuTrigger>
         <DropdownMenuContent className="text-white">
           <DropdownMenuItem className="text-black" >English</DropdownMenuItem>
           <DropdownMenuItem className="text-black">Hindi</DropdownMenuItem>
           <DropdownMenuItem className="text-black">Spanish</DropdownMenuItem>
         </DropdownMenuContent>
       </DropdownMenu>


     </div>
   </nav>
  )
}

export default NavbarOfferentAlert