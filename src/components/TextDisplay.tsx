import React,  { useRef } from 'react';
import {  Text } from "@react-three/drei";
import * as THREE from "three";

export interface TextDisplayProps {
    position: [number, number, number];
    url?: string;
    copy: string;
    description: string;
}

export const TextDisplay = (props: TextDisplayProps) => {
    const txRef = useRef<THREE.Mesh | null>(null);
    const materialRef = useRef<THREE.MeshStandardMaterial | null>(null);
    const fontSize = 1.25;
    const descriptionPosition = new THREE.Vector3(props.position[0], props.position[1] - 1.5, props.position[2]);
    const descriptionFontSize = 0.75;

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
        <group>
            <Text
                    position={props.position}
                    ref={txRef}
                    textAlign='center'
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
            <Text
                    position={descriptionPosition}
                    fontSize={descriptionFontSize}
                    textAlign='center'
                    anchorX="center"
                    anchorY="middle" >
                <meshStandardMaterial
                    color={'royalblue'}
                    side={THREE.DoubleSide} />
                { props.description }
            </Text>
        </group>

    )
}
