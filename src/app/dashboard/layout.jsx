import Navbar from '@/components/layout/navbar';
import Button from '@/components/ui/button';
import Sidebar from '@/components/ui/dashboard/sidebar';
import React from 'react';

function Layout({ children }) {
  return (
    <div className='flex text-white'>
      <div className='flex-1 bg-bgSoft p-5'>
        <Sidebar />
      </div>
      <div className='flex-[4] p-5'>
        <Navbar />
        {children}
      </div>
    </div>
  );
}

export default Layout;
