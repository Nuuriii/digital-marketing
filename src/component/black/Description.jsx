import React from "react";
// import LogoIcon from "/img/logoo.svg";
import Discussion from "/img/icon.svg";

function Description() {
   return (
      <>
         <div className='flex items-center text-white'>
            <div className='flex flex-col justify-between w-1/2'>
               {/* <div className='flex items-center gap-3'>
                  <img className='w-10 h-10 ' src={LogoIcon} alt='icon' />
                  <h2>S1 DIGITAL MARKETING</h2>
               </div> */}
               <div className='flex flex-col gap-y-5'>
                  <h1 className='text-5xl'>
                     A <span className='text-indigo-400'>marketing agency</span>{" "}
                     for the{" "}
                     <span className='text-violet-600'>modern world.</span>
                  </h1>
                  <p className='text-lg'>
                     A straight-talking bunch of best Digital Marketing Based in
                     Manila and Cebu, who love what they do and care about who
                     they do it for. If you’re ready for a refreshingly
                     different take on the tired old client-agency relationship,
                     we’d love to help.
                  </p>
               </div>
            </div>
            <div className='1/2'>
               <img src={Discussion} alt='' />
            </div>
         </div>
      </>
   );
}

export default Description;
