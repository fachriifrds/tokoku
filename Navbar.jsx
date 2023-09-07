// import React from 'react'
// import { BiSolidRectangle } from 'react-icons/bi'


// const Navbar = () => {
//     const image = "../public/images/float2.jpg"
//   return (
//     <>
//     <nav>
//         <div className='flex justify-between'>
//             <h1>Tokoku</h1>
//             <input type="search"  />
//             <div className='flex'>
//             <BiSolidRectangle size="30px"/>
//             <BiSolidRectangle size="30px"/>
//             <BiSolidRectangle size="30px"/>
//                 </div>
//                 <img src={image} className='w-[40px]'/>
//         </div>
//     </nav>
//     </>
//   )
// }

// export default Navbar

import {
    Navbar,
    Typography,
    IconButton,
    Button,
    Input,
  } from "@material-tailwind/react";
  import { BellIcon, Cog6ToothIcon } from "@heroicons/react/24/solid";
   
  export function Navigation() {
    return (
      <Navbar
        variant="gradient"
        color="White"
        className="mx-auto max-w-screen-xl mt-2  bg-white px-4 py-3"
      >
        
        <div className="flex flex-wrap items-center justify-between gap-y-4 text-black">
          <Typography
            as="a"
            href="#"
            variant="h6"
            className="mr-4 ml-2 cursor-pointer py-1.5"
          >
            Tokoku
          </Typography>
          <div className="relative flex w-full gap-2 md:w-max">
            <Input
              type="search"
              color="black"
              label="Type here..."
              className="pr-20"
              containerProps={{
                className: "min-w-[288px]",
              }}
            />
            <Button
              size="sm"
              color="black"
              className="!absolute right-1 top-1 rounded"
            >
              Search
            </Button>
          </div>
          <div className="ml-auto flex gap-1 md:mr-4">
          <IconButton className="rounded bg-[#333333] hover:shadow-[#333333]/20 focus:shadow-[#333333]/20 active:shadow-[#333333]/10">
        <i className="fab fa-facebook text-lg" />
      </IconButton>
            <IconButton className="rounded bg-[#333333] hover:shadow-[#333333]/20 focus:shadow-[#333333]/20 active:shadow-[#333333]/10">
        <i className="fab fa-instagram text-lg" />
      </IconButton>
            <IconButton className="rounded bg-[#333333] hover:shadow-[#333333]/20 focus:shadow-[#333333]/20 active:shadow-[#333333]/10">
        <i className="fab fa-twitter text-lg" />
      </IconButton>
          
          </div>
          
        </div>
      </Navbar>
    );
  }