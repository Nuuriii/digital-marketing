import React from "react";
import Logo from "/img/logoo.svg";
import PeopleImage from "/img/People.svg";
import Facebook from "/img/Facebook.svg";
import Instagram from "/img/Instagram.svg";
import Mail from "/img/mail.svg";
import Phone from "/img/Phone.svg";
import Twitter from "/img/Twitter.svg";

function Footer() {
   return (
      <>
         <div className='grid items-center grid-cols-2 px-5 mb-10 bg-indigo-500 py-9 gap-9'>
            <div className=''>
               <form className='flex flex-col gap-y-3' action=''>
                  <div className='flex flex-col'>
                     <label
                        className='font-semibold text-white'
                        htmlFor='email'
                     >
                        EMAIL*
                     </label>
                     <input
                        md
                        className='p-2 rounded-lg'
                        type='email'
                        name='email'
                        id='email'
                     />
                  </div>

                  <div className='flex flex-col'>
                     <label className='font-semibold text-white' htmlFor='text'>
                        COMPANY NAME*
                     </label>
                     <input
                        md
                        className='p-2 rounded-lg'
                        type='email'
                        name='text'
                        id='text'
                     />
                  </div>

                  <div className='flex flex-col'>
                     <label
                        className='font-semibold text-white'
                        htmlFor='address'
                     >
                        COMPANY ADDRESS*
                     </label>
                     <input
                        className='p-2 rounded-md'
                        type='text'
                        p25
                        name='address'
                        id='address'
                     />
                  </div>

                  <div className='flex flex-col'>
                     <label className='font-semibold text-white' htmlFor='name'>
                        FULL NAME*
                     </label>
                     <input
                        className='p-2 rounded-md'
                        type='text'
                        p25
                        name='name'
                        id='name'
                     />
                  </div>

                  <button className='p-2 font-semibold text-white bg-indigo-900 rounded-md'>
                     GROW WITH US
                  </button>
               </form>
            </div>
            <div>
               <div className='flex items-center gap-5'>
                  <div>
                     <h2 className='text-4xl font-semibold text-white'>
                        We are S1 Digital
                     </h2>
                     <h2 className='text-4xl font-semibold text-indigo-950'>
                        Creative Marketing Agency
                     </h2>
                  </div>
                  <div>
                     <img src={Logo} alt='' />
                  </div>
               </div>
               <div className='grid grid-cols-2 mt-4'>
                  <div className='grid grid-rows-2'>
                     <div className='text-2xl text-white'>
                        <h2>Join Us!</h2>
                        <h2 className='font-semibold'>Grow Your Business!</h2>
                     </div>
                     <div className='text-white'>
                        <h3 className='font-semibold '>Contacts:</h3>
                        <div className='flex gap-1'>
                           <img src={Phone} alt='' />
                           <p>09969123467/09694960854</p>
                        </div>
                        <div className='flex gap-1'>
                           <img src={Mail} alt='' />
                           <p>admin@s1digitalmarketing.online</p>
                        </div>
                     </div>
                  </div>
                  <img src={PeopleImage} alt='' />
               </div>
               <div className='flex justify-center '>
                  <img src={Facebook} alt='' />
                  <img src={Instagram} alt='' />
                  <img src={Twitter} alt='' />
                  <img src={Mail} alt='' />
               </div>
            </div>
         </div>
      </>
   );
}

export default Footer;
