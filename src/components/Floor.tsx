import React,  { useRef } from 'react';
import * as THREE from "three";

export interface FloorProps {
    depth: number;
    color: string;
}

export const Floor = (props: FloorProps) => {
    const floor = useRef<THREE.Mesh | null>(null);
    const depth = -1 * props.depth;
    return (
      <mesh ref={floor} rotation={[-Math.PI / 2, 0, 0]} position={[0, depth, 0]}>
        <planeGeometry args={[1000, 1000]} />
        <meshStandardMaterial metalness={0.0} roughness={0.5} color={props.color} />
     </mesh>
    );
  };