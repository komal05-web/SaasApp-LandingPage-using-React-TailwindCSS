import React from 'react'

import { AlignRight, LogIn } from 'lucide-react';
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const Header = () => {
  const array = [
    "Benefits",
    "Integrations",
    "About",
    "Pricing",
    "Testimonials",
  ]
  return (
    <div>
      <header className=' flex justify-between items-center 2xl:px-[10rem] lg:px-[4rem] px-[1rem] 2xl:h-[6rem] lg:h-[5rem] h-[4rem]'>
        <h1 className='text-white font-semibold 2xl:text-4xl lg:text-3xl text-3xl'>Shore</h1>
        <ul className='lg:flex gap-6 items-center px-[3rem] py-3 bg-[#141618] rounded-full border hidden border-gray-700'>
          {array?.map((item, index) => (
            <li className='text-gray-300 font-medium text-lg hover:text-blue-500 transition duration-300'>
              <a href="#">
                {item}
              </a>
            </li>
          ))}
        </ul>
        <div>
          <button className='2xl:flex hidden items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-full transition duration-300'>
            Sign In <LogIn strokeWidth={4} />
          </button>
          <Sheet>
            <SheetTrigger asChild>
              <AlignRight className="text-gray-300 2xl:hidden block" size={40} />
            </SheetTrigger>
            <SheetContent className={"bg-[#141618] p-8"}>
              <SheetClose asChild>
                <button className="absolute right-4 top-4 text-gray-300 hover:text-white ">
                  
                </button>
              </SheetClose>

              <ul className='flex flex-col gap-8 mt-[3rem]'>
                {array?.map((item, index) => (
                  <li className='text-gray-300 font-medium text-lg hover:text-blue-400 transition duration-75'>{item}</li>
                ))}
              </ul>

              <div className='mt-20'>
                <button className='flex items-center bg-[#0BA5EC] text-white gap-1 2xl:text-[17px] lg:text-sm rounded-full py-2 px-4 transition duration-300' >
                   Sign In <LogIn strokeWidth={"4"} />
                </button>
              </div>
              
            </SheetContent>
          </Sheet>
        </div>
      </header>
    </div>
  )
}
export default Header;