import React from "react";
import CloudImage from "/img/Cloud.svg";
import GoalImage from "/img/Goal.svg";
import WriteImage from "/img/Write.svg";
import StatistikImage from "/img/Statistik.svg";

function Grid() {
   return (
      <>
         <div className='grid grid-cols-4 gap-5 text-white'>
            <div className='bg-indigo-500 rounded-3xl p-7'>
               <div className='flex items-center justify-between'>
                  <h2 className='text-3xl font-semibold'>POWER OF IDEAS</h2>
                  <img src={CloudImage} alt='' />
               </div>
               <div>
                  <p>
                     Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                     sed do eiusmod tempor incididunt ut labore et dolore magna
                     aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                     ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </p>
               </div>
            </div>
            <div className='bg-indigo-500 rounded-3xl p-7'>
               <div className='flex items-center justify-between'>
                  <h2 className='text-3xl font-semibold'>STRATEGY</h2>
                  <img src={GoalImage} alt='' />
               </div>
               <div>
                  <p>
                     Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                     sed do eiusmod tempor incididunt ut labore et dolore magna
                     aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                     ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </p>
               </div>
            </div>
            <div className='bg-indigo-500 rounded-3xl p-7'>
               <div className='flex items-center justify-between'>
                  <h2 className='text-3xl font-semibold'>WE BELIEVE</h2>
                  <img src={StatistikImage} alt='' />
               </div>
               <div>
                  <p>
                     Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                     sed do eiusmod tempor incididunt ut labore et dolore magna
                     aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                     ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </p>
               </div>
            </div>
            <div className='bg-indigo-500 rounded-3xl p-7'>
               <div className='flex items-center justify-between'>
                  <h2 className='text-3xl font-semibold'>EXECUTE</h2>
                  <img src={WriteImage} alt='' />
               </div>
               <div>
                  <p>
                     Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                     sed do eiusmod tempor incididunt ut labore et dolore magna
                     aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                     ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </p>
               </div>
            </div>
         </div>
      </>
   );
}

export default Grid;
