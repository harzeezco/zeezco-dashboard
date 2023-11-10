import Navbar from '@/components/layout/navbar';
import Button from '@/components/ui/button';
import Sidebar from '@/components/ui/dashboard/sidebar';
import React from 'react';

function Layout({ children }) {
  return (
    <div className='grid grid-cols-[240px_1fr] text-white'>
      <div className=' bg-bgSoft p-5'>
        <Sidebar />
      </div>
      <div className='p-5'>
        <Navbar />
        {children}
      </div>
    </div>
  );
}

export default Layout;
