import React,  { Suspense, useRef } from 'react';
import { Canvas, useFrame } from "@react-three/fiber";
import { Stats, OrbitControls } from "@react-three/drei";
import * as THREE from "three";

import logo from './logo.svg';
import './App.css';

const Cube = () => {
  const cube = useRef<THREE.Mesh | null>(null);

  useFrame(() => {
    cube.current!.rotation.y += 0.001;
  });

  return (
    <mesh ref={cube} position={[3,0,0]} >
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color="#0391BA" />
    </mesh>
  );
};


const Scene = () => {
  return (
    <>
      <gridHelper />
      <axesHelper />
      <pointLight intensity={1000.0} position={[-5, -8, -5]} />
      <pointLight intensity={1000.0} position={[5, 8, 5]} />
      <Cube />
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
              gl.setClearColor("#252934");
            }}
          >
            <Stats />
            <OrbitControls />
            <Suspense fallback={null}>
              <Scene />
            </Suspense>
          </Canvas>
        </div>

        <img src={logo} className="App-logo" alt="logo" />


      </header>
    </div>
  );
}

export default App;
