'use client';

import { usePathname } from 'next/navigation';
import React from 'react';
import {
  MdNotifications,
  MdOutlineChat,
  MdPublic,
  MdSearch,
} from 'react-icons/md';

function Navbar() {
  const pathName = usePathname();
  return (
    <div className='flex items-center justify-between bg-bgSoft p-[20px] rounded-[10px]'>
      <div className='font-bold capitalize text-textSoft'>
        {pathName.split('/').pop()}
      </div>
      <div className='flex items-center gap-[20px]'>
        <div className='flex items-center gap-[10px] rounded-[10px] bg-gray-200 p-[10px]'>
          <MdSearch />
          <input
            type='text'
            placeholder='Search'
            className='text-white bg-transparent border-none outline-none'
          />
        </div>
        <div className='flex items-center gap-[10px]'>
          <MdOutlineChat size={20} />
          <MdNotifications size={20} />
          <MdPublic size={20} />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
