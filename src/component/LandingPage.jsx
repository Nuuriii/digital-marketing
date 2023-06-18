import React from "react";
import Description from "./black/Description";
import Grid from "./black/Grid";
import Why from "./white/Why";
import Footer from "./white/Footer";

export default function LandingPage() {
   return (
      <>
         <div className='grid gap-16 px-24 pt-10 pb-32 bg-black'>
            <Description />
            <Grid />
         </div>
         <div className='px-24'>
            <Why />
            <Footer />
         </div>
      </>
   );
}
