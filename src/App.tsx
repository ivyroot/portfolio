import React,  { Suspense, useRef, useEffect } from 'react';
import { Canvas, useThree, useFrame } from "@react-three/fiber";
import { Stats, OrbitControls, Html } from "@react-three/drei";
import * as THREE from "three";

import logo from './logo.svg';
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

function BoxWithHtmlTexture() {
  const meshRef = useRef<THREE.Mesh | null>(null);
  const materialRef = useRef<THREE.MeshStandardMaterial | null>(null);

  const { gl } = useThree()

  useEffect(() => {
    const canvas = document.createElement('canvas')
    canvas.width = 1024
    canvas.height = 512
    const ctx = canvas.getContext('2d')
    if (ctx === null) return
    ctx.fillStyle = 'royalblue'
    ctx.fillRect(0, 0, canvas.width, canvas.height)
    ctx.font = '48px Arial'
    ctx.fillStyle = 'white'
    ctx.fillText('Exquisite Canvas', 50, 128)

    const texture = new THREE.CanvasTexture(canvas)
    if (materialRef.current) {
      materialRef.current.map = texture
      materialRef.current.needsUpdate = true
    }
  }, [gl])

  const handleBoxClick = () => {
    window.open('https://exquisitecanvas.xyz', '_blank');
  }

  const handlePointerOver = () => {
    meshRef.current!.scale.set(1.1, 1.1, 1.1);
  }

  const handlePointerOut = () => {
    meshRef.current!.scale.set(1.0, 1.0, 1.0);
  }

  return (
    <mesh
        ref={meshRef}
        onClick={handleBoxClick}
        onPointerOver={handlePointerOver}
        onPointerOut={handlePointerOut} >
      <boxGeometry args={[4, 2, 1]} />
      <meshStandardMaterial attach="material-0"  side={THREE.DoubleSide}/>
      <meshStandardMaterial attach="material-1"  side={THREE.DoubleSide}/>
      <meshStandardMaterial attach="material-2" side={THREE.DoubleSide}/>
      <meshStandardMaterial attach="material-3"  side={THREE.DoubleSide}/>
      <meshStandardMaterial attach="material-4" ref={materialRef} side={THREE.DoubleSide}/>
      <meshStandardMaterial attach="material-5" side={THREE.DoubleSide}/>
    </mesh>
  )
}


const Cube = () => {
  const cube = useRef<THREE.Mesh | null>(null);

  useFrame(() => {
    cube.current!.rotation.y += 0.001;
  });

  return (
    <mesh ref={cube} position={[0,0,0]} >
      <Html>
          <div style={{ color: 'white', background: 'rgba(0,0,0,0.5)', padding: '5px' }}>
            Exquisite Canvas
          </div>
        </Html>
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
      <BoxWithHtmlTexture />
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
