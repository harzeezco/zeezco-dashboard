import Image from 'next/image';

function Transactions() {
  return (
    <div className='bg-bgSoft p-[15px] rounded-[10px]'>
      <h1 className='font-light text-2xl mb-[20px] text-gray-300'>
        Latest Transactions
      </h1>
      <table className='w-full'>
        <thead>
          <tr className='flex items-center justify-between gap-[10px] mb-5'>
            <td>Name</td>
            <td className='ml-12'>Status</td>
            <td>Date</td>
            <td>Amount</td>
          </tr>
        </thead>
        <tbody className='grid gap-5'>
          <tr className='flex items-center justify-between gap-[10px]'>
            <td className='flex items-center gap-x-5'>
              <Image
                className='rounded-full'
                src='/noavatar.png'
                alt=''
                width={40}
                height={40}
              />
              John Doe
            </td>
            <td>
              <span className='rounded-[5px] p-[5px] text-sm bg-yellow-800'>
                Pending
              </span>
            </td>
            <td>14.02.2024</td>
            <td>$3.200</td>
          </tr>
          <tr className='flex items-center justify-between gap-[10px]'>
            <td className='flex items-center gap-x-5'>
              <Image
                className='rounded-full'
                src='/noavatar.png'
                alt=''
                width={40}
                height={40}
              />
              John Doe
            </td>
            <td>
              <span className='bg-dark-800 rounded-[5px] p-[5px] text-sm'>
                success
              </span>
            </td>
            <td>14.02.2024</td>
            <td>$3.200</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Transactions;
