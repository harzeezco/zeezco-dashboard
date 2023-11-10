'use client'

import mergeClasses from '@/lib/utils';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

function MenuLink({ item }) {
  const pathName = usePathname();

  return (
    <li>
      <Link href={item.path}>
        <span
          className={mergeClasses(
            'p-[15px] flex items-center gap-[10px] hover:bg-gray-200',
            pathName === item.path ? 'bg-gray-200' : ''
          )}
        >
          {item.icon}
          {item.title}
        </span>
      </Link>
    </li>
  );
}

export default MenuLink;
