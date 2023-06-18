import React from "react";
import Logo from "/img/logoo.svg";
import PeopleImage from "/img/People.svg";

function Footer() {
   return (
      <>
         <div className='grid grid-cols-2 bg-indigo-500'>
            <div className='p-5'>
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
                        className='rounded-lg'
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
                        className='rounded-lg'
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
                        className='rounded-md'
                        type='text'
                        name='address'
                        id='address'
                     />
                  </div>

                  <div className='flex flex-col'>
                     <label className='font-semibold text-white' htmlFor='name'>
                        FULL NAME*
                     </label>
                     <input
                        className='rounded-md'
                        type='text'
                        name='name'
                        id='name'
                     />
                  </div>

                  <button className='font-semibold text-white bg-indigo-900'>
                     GROW WITH US
                  </button>
               </form>
            </div>
            <div>
               <div>
                  <div>
                     <h2>We are S1 Digital</h2>
                     <h2>Creative Marketing Agency</h2>
                  </div>
                  <div>
                     <img src={Logo} alt='' />
                  </div>
               </div>
               <div>
                  <div>
                     <div>
                        <h2>Join Us!</h2>
                        <h2>Grow Your Business!</h2>
                     </div>
                     <div>
                        <h3>Contacts:</h3>
                        <div>
                           <img src='' alt='' />
                           <p>09969123467/09694960854</p>
                        </div>
                        <div>
                           <img src='' alt='' />
                           <p>admin@s1digitalmarketing.online</p>
                        </div>
                     </div>
                  </div>
                  <img src={PeopleImage} alt='' />
               </div>
               <div></div>
            </div>
         </div>
      </>
   );
}

export default Footer;
