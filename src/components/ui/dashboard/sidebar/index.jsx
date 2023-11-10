import { MENU_ITEMS } from '@/lib/data';
import MenuLink from './menu-link';
import Image from 'next/image';
import { MdLogout } from 'react-icons/md';

function Sidebar() {
  return (
    <div className='sticky top-10'>
      <div className='flex items-center gap-5 mb-5'>
        <Image
          src='/noavatar.png'
          alt='profile avatar'
          width={50}
          height={50}
          className='rounded-full object-cover'
        />
        <div className='grid gap-5'>
          <span className='font-medium'>John Doe</span>
          <span className='text-xs text-textSoft'>Administration</span>
        </div>
      </div>
      <div>
        {MENU_ITEMS.map((item) => (
          <div key={item.title} className='mt-5'>
            <span className='text-textSoft text-[13px] font-bold my-[10px]'>
              {item.title}
            </span>
            <ul className='mt-5'>
              {item.list.map((list) => (
                <MenuLink key={list.title} item={list} />
              ))}
            </ul>
          </div>
        ))}
      </div>
      <button className='p-[20px] flex items-center gap-[10px] my-[5px] rounded-[10px] n] bg-none border-none w-full hover:bg-gray-200'>
        Log out
        <MdLogout />
      </button>
    </div>
  );
}

export default Sidebar;
