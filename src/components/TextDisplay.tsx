import React,  { useRef } from 'react';
import {  Text } from "@react-three/drei";
import * as THREE from "three";

export const TextDisplay = () => {
    const txRef = useRef<THREE.Mesh | null>(null);
    const materialRef = useRef<THREE.MeshStandardMaterial | null>(null);

    const handleTextClick = () => {
      window.open('https://exquisitecanvas.xyz', '_blank');
    }

    const handlePointerOver = () => {
      materialRef.current!.color.set('green');
    }

    const handlePointerOut = () => {
      materialRef.current!.color.set('royalblue');
    }

    return(
      <Text
          position={[0, 0, 0]}
          ref={txRef}
          onClick={handleTextClick}
          onPointerOver={handlePointerOver}
          onPointerOut={handlePointerOut}
          anchorX="center"
          anchorY="middle">
          <meshStandardMaterial ref={materialRef} color={'royalblue'} side={THREE.DoubleSide}/>
        hello world!
      </Text>
    )
}
