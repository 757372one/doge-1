import React, { useRef } from "react";
import MoonMap from '../../assets/textures/moonmap4k.jpg';
import CloudsMap from '../../assets/textures/dogecloud.png';
import { TextureLoader } from "three";
import { useLoader, useFrame } from "@react-three/fiber";
import { Stars } from '@react-three/drei';


export function Moon(props){

    const [moonMap,  cloudMap] = useLoader(TextureLoader, [MoonMap, CloudsMap]);
    
    const moonRef = useRef();
    const cloudsRef = useRef();
    const starRef = useRef();


    useFrame(({ clock }) => {
        const elapsedTime = clock.getElapsedTime();
    
        moonRef.current.rotation.y = elapsedTime / 10;
        cloudsRef.current.rotation.y = elapsedTime / -2;
        starRef.current.rotation.z = elapsedTime / -20;

      });

    return (
    <>
        <ambientLight intensity={0.3} />
        <pointLight color="#f6f3ea" position={[30, 10, 40]} intensity={5} />
        <Stars ref={starRef} radius={300} depth={60} count={15000} factor={7} saturation={0} fade={true} />
            <mesh ref={cloudsRef} position={[0, 10, 0]} >
                <sphereGeometry args={[23.25, 32, 32]} />
                <meshPhongMaterial
                map={cloudMap}
                opacity={1}
                depthWrite={true}
                transparent={true}
                />
            </mesh>
        <mesh ref={moonRef} position={[0, 10, 0]}>
            <sphereGeometry args={[22, 64, 64]} />
            <meshStandardMaterial map={moonMap}  metalness={0.98} roughnes={0.25} />
        </mesh>
    </>
    );
}