import { MdSupervisedUserCircle } from 'react-icons/md';

function Card() {
  return (
    <div className='bg-bgSoft p-[15px] py-[20px] flex rounded-[10px] gap-[10px] cursor-pointer w-full hover:bg-gray-200'>
      <MdSupervisedUserCircle size={24} />
      <div className='grid gap-[15px]'>
        <span className=''>Total Users</span>
        <span className='text-2xl font-medium'>10.273</span>
        <span className='text-[12px] font-medium'>
          <span className='text-green-500'>12%</span> more than previous week
        </span>
      </div>
    </div>
  );
}

export default Card;
