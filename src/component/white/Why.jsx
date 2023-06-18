import React from "react";
import Research from "/img/Research.svg";
import Execution from "/img/Execution.svg";
import Strategy from "/img/Strategy.svg";
import We from "/img/We.svg";

function Why() {
   return (
      <>
         <div className='grid grid-cols-2 gap-20 my-10'>
            <div className='flex flex-col'>
               <h2 className='text-6xl font-semibold text-indigo-700'>
                  WHY CHOOSE US?
               </h2>
               <p className='my-3 text-lg'>
                  S1 Digital Marketing Academy offers a uniquely engaging
                  learning experience that breaks down the barriers to achieving
                  marketing automation success, by providing customers with
                  unlimited access to live and interactive courses for
                  onboarding, product training and best practices. Our training
                  resources are designed to make you a modern marketing
                  maverick, skilled and ready to build your brand, drive demand,
                  and expand customer relationships
               </p>
               <img className='' src={We} alt='' />
            </div>
            <div className='flex flex-col justify-center p-5 bg-gray-200 gap-y-5 rounded-3xl'>
               <div className='flex items-center gap-5'>
                  <div>
                     <img className='w-32 h-32' src={Research} alt='' />
                  </div>
                  <div>
                     <h2 className='py-1 text-3xl font-bold text-indigo-700'>
                        RESEARCH AND INSIGHT
                     </h2>
                     <p className='text-lg'>
                        Good research and insights go beyond channels and should
                        always be the starting point for new campaigns.
                     </p>
                  </div>
               </div>
               <div className='flex items-center gap-5'>
                  <div>
                     <img className='w-32 h-32' src={Strategy} alt='' />
                  </div>
                  <div>
                     <h2 className='py-1 text-3xl font-bold text-indigo-700'>
                        STRATEGY ALIGMENT
                     </h2>
                     <p className='text-lg'>
                        Our strategic approach ensures that our work is aligned
                        with your wider business and marketing goals.
                     </p>
                  </div>
               </div>
               <div className='flex items-center gap-5'>
                  <div>
                     <img className='w-32 h-32' src={Execution} alt='' />
                  </div>
                  <div>
                     <h2 className='py-1 text-3xl font-bold text-indigo-700'>
                        EXECUTION
                     </h2>
                     <p className='text-lg'>
                        We are full-service agency that can complement your
                        internal resources with any digital marketing service.{" "}
                     </p>
                  </div>
               </div>
            </div>
         </div>
      </>
   );
}

export default Why;
