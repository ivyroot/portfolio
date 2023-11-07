import React,  { useRef } from 'react';
import {  Text } from "@react-three/drei";
import * as THREE from "three";

export interface TextDisplayProps {
    position: [number, number, number];
    rotation: [number, number, number];
    url?: string;
    copy: string;
    description: string;
    maxWidth?: number;
}

export const TextDisplay = (props: TextDisplayProps) => {
    const txRef = useRef<THREE.Mesh | null>(null);
    const materialRef = useRef<THREE.MeshStandardMaterial | null>(null);
    const isMobile = props.maxWidth && props.maxWidth < 500;
    const fontSize = isMobile ? 0.5 : 1.0;
    const descriptionOffset = isMobile ? 0.95 : 1.5;
    const descriptionPosition = new THREE.Vector3(props.position[0], props.position[1] - descriptionOffset, props.position[2]);
    const descriptionFontSize = isMobile ? 0.3 : 0.5;
    const fontColor = '#ffffff'
    const fontColorHover = '#fdf50d'
    const maxWidth = isMobile ? 4 : Infinity;

    const lightPos = new THREE.Vector3(props.position[0], props.position[1], props.position[2] + 5.2);

    const handleTextClick = () => {
        if (props.url) {
            window.open(props.url, '_blank');
        }
    }

    const handlePointerOver = () => {
        if (props.url) {
            materialRef.current!.color.set(fontColorHover);
            materialRef.current!.metalness = 1.0;
        }
    }

    const handlePointerOut = () => {
        if (props.url) {
            materialRef.current!.color.set(fontColor);
            materialRef.current!.metalness = 0.0;
        }
    }

    return(
        <group rotation={props.rotation}>
            <pointLight intensity={10000.0} position={lightPos} />
            <Text
                    position={props.position}
                    maxWidth={maxWidth}
                    ref={txRef}
                    textAlign='center'
                    strokeColor={'#000000'}
                    strokeWidth={'1%'}
                    strokeOpacity={0.85}
                    onClick={handleTextClick}
                    onPointerOver={handlePointerOver}
                    onPointerOut={handlePointerOut}
                    fontSize={fontSize}
                    anchorX="center"
                    anchorY="middle" >
                <meshStandardMaterial
                    ref={materialRef}
                    color={fontColor}
                    metalness={0.0}
                    roughness={0.1}
                    side={THREE.DoubleSide} />
                { props.copy }
            </Text>
            <Text
                    position={descriptionPosition}
                    maxWidth={maxWidth}
                    strokeColor={'#000000'}
                    strokeWidth={'1%'}
                    strokeOpacity={0.85}
                    lineHeight={1.25}
                    fontSize={descriptionFontSize}
                    textAlign='center'
                    anchorX="center"
                    anchorY="middle" >
                <meshStandardMaterial
                    color={fontColor}
                    side={THREE.DoubleSide} />
                { props.description }
            </Text>
        </group>

    )
}
