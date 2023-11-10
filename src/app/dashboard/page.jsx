import Card from '@/components/ui/dashboard/card';
import Chart from '@/components/ui/dashboard/chart';
import RightBar from '@/components/ui/dashboard/rightbar';
import Transactions from '@/components/ui/dashboard/transactions';
import React from 'react';

function Dashboard() {
  return (
    <div className='flex gap-[20px] mt-[20px]'>
      <div className='flex-[3.5] grid gap-[20px]'>
        <div className='flex gap-[15px] justify-between'>
          <Card />
          <Card />
          <Card />
        </div>
        <Transactions />
        <Chart />
      </div>
      <div className='flex-1'>
        <RightBar />
      </div>
    </div>
  );
}

export default Dashboard;
