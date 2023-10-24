import React,  { Suspense, useRef } from 'react';
import { Canvas } from "@react-three/fiber";
import { Stats, OrbitControls } from "@react-three/drei";
import * as THREE from "three";
import { TextDisplay } from './components/TextDisplay';

import './App.css';
interface CirclePointsProps {
  radius: number;
  numPoints: number;
}

const Floor = () => {
  const floor = useRef<THREE.Mesh | null>(null);
  return (
    <mesh ref={floor} rotation={[-Math.PI / 2, 0, 0]} position={[0, -10, 0]}>
      <planeGeometry args={[1000, 1000]} />
      <meshStandardMaterial metalness={0.0} roughness={0.5} color={'#FFFFFF'} />
   </mesh>
  );
};

function generateCirclePoints(radius: number, numPoints: number): THREE.Vector3[] {
  const points: THREE.Vector3[] = [];
  const angleStep = 2 * Math.PI / numPoints; // Angle between each point in radians

  for (let i = 0; i < numPoints; i++) {
      const theta = i * angleStep;
      const x = radius * Math.cos(theta);
      const z = radius * Math.sin(theta);

      points.push(new THREE.Vector3(x, 0, z));
  }

  return points;
}

const CirclePoints: React.FC<CirclePointsProps> = ({ radius, numPoints }) => {
  const points = generateCirclePoints(radius, numPoints);
  return (
    <group>
      {points.map((point, i) => (
        <mesh key={i} position={point}>
          <cylinderGeometry args={[0.92, 0.92, 30]} />
          <meshStandardMaterial metalness={0.9} roughness={0.1}  color="#333399" />
        </mesh>
      ))}
    </group>
  );
}

const Scene = () => {
  return (
    <>
      <pointLight intensity={1000.0} position={[-5, -8, -5]} />
      <pointLight intensity={1000.0} position={[5, 8, 5]} />
      <TextDisplay
        position={[0,0,0]}
        url={'https://www.exquisitecanvas.xyz'}
        copy={'Exquisite Canvas'} />
      <CirclePoints radius={10} numPoints={9} />
      <Floor />
    </>
  );
};

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div
          style={{
            height: "100vh",
            width: "100vw",
          }}
        >
          <Canvas
            camera={{
              near: 0.1,
              far: 1000,
              zoom: 1,
            }}
            onCreated={({ gl }) => {
              gl.setClearColor("#BBCCFF");
            }}
          >
            <Stats />
            <OrbitControls />
            <Suspense fallback={null}>
              <Scene />
            </Suspense>
          </Canvas>
        </div>

      </header>
    </div>
  );
}

export default App;
