import './App.scss';
import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
// import { Html } from '@react-three/drei';
import { Header } from './components/section/header';
import { Landing } from './components/section/landing';
import { Token } from './components/section/token';
import { Team } from './components/section/team';
import { OHM } from './components/section/OHM';
import { Footer } from './components/section/footer';
import { Moon } from './components/universe/moon';
import { Universe } from './components/universe/universe';
import { Roadmap } from './components/section/roadmap';

// const Loading = () => {
//   return(
//         <Html center>
//           <div className='loader'>
//             <h3>Loading</h3>
//             <div className="planet"></div>
//           </div>
//       </Html>
//   );
// };


function App() {
  return (
    <div className="screen">
      <div className='main'>
          <Header />
          <Landing />
          <Token />
          <Roadmap />
          <Team />
          <Footer />
      </div>
      <div className='canvas darkBg'>
      <Canvas colorManagement camera={{position:[0,30,50], fov: 70}} >
            <Suspense fallback={null}>
                <Universe />
                <Moon />
            </Suspense>
          </Canvas>
      </div>
    </div>
  );
}

export default App;
