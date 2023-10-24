import React,  { useRef } from 'react';
import {  Text } from "@react-three/drei";
import * as THREE from "three";

export interface TextDisplayProps {
    position: [number, number, number];
    url?: string;
    title?: boolean;
    copy: string;
}

export const TextDisplay = (props: TextDisplayProps) => {
    const txRef = useRef<THREE.Mesh | null>(null);
    const materialRef = useRef<THREE.MeshStandardMaterial | null>(null);
    const fontSize = props.title ? 1.25 : 0.75;

    const handleTextClick = () => {
        if (props.url) {
            window.open(props.url, '_blank');
        }
    }

    const handlePointerOver = () => {
        if (props.url) {
            materialRef.current!.color.set('blue');
        }
    }

    const handlePointerOut = () => {
        if (props.url) {
            materialRef.current!.color.set('royalblue');
        }
    }

    return(
      <Text
                position={props.position}
                ref={txRef}
                onClick={handleTextClick}
                onPointerOver={handlePointerOver}
                onPointerOut={handlePointerOut}
                fontSize={fontSize}
                anchorX="center"
                anchorY="middle" >
            <meshStandardMaterial
                ref={materialRef}
                color={'royalblue'}
                side={THREE.DoubleSide} />
            { props.copy }
      </Text>
    )
}