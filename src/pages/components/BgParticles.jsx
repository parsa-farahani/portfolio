import { useCallback, useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadAll } from "@tsparticles/all";


const BgParticles = (props) => {
   // props
   const { options } = props;

   // states
   const [init, setInit] = useState(false);


   // particles setup
   useEffect(() => {
      initParticlesEngine(async (engine) => {
         await loadAll(engine);
      }).then(() => {
         setInit(true);
      })
   }, [])

   const particlesLoaded = useCallback((container) => {
      console.log(container);
   }, [])





   if (init) {
      return (
         <Particles
            id="tsparticles"
            particlesLoaded={particlesLoaded}
            options={options}
            style={{
               width: '200px',
               height: '200px',
               overflow: 'hidden',
            }}
         />
      )
   }

   return null;
}
 
export default BgParticles;