import React,  { Suspense, useRef } from 'react';
import { Canvas, useThree } from "@react-three/fiber";
import { Stats, OrbitControls } from "@react-three/drei";
import * as THREE from "three";
import { TextDisplay } from './components/TextDisplay';
import { CircularColumns } from './components/Columns';

import './App.css';



interface SceneProps {
  offset: number;
}

const Scene = (props: SceneProps) => {
  const { camera } = useThree();
  camera.position.y = props.offset;

  return (
    <>
      <pointLight intensity={1000.0} position={[0,0,7.2]} />
      <pointLight intensity={1000.0} position={[5, 8, 5]} />
      <CircularColumns radius={10} numColumns={9} thickness={0.8} height={80} />
      <TextDisplay
        position={[0,0,0]}
        url={'https://www.exquisitecanvas.xyz'}
        copy={'Exquisite Canvas'}
        description={'Draw your own pixel art.'}
      />
      <TextDisplay
        position={[0,-5,0]}
        url={'https://www.tokenparade.xyz'}
        copy={'Token Parade'}
        description={"Parade the art from any wallet's NFTs."}
      />
      <TextDisplay
        position={[0,-10,0]}
        url={'https://www.saffene.com'}
        copy={'Saffene Phone Stand'}
        description={"Robust minimal phone stand."}
      />
      <TextDisplay
        position={[0,-15,0]}
        url={'https://thenextweb.com/news/privacy-isnt-an-issue-with-burn-note-because-all-messages-will-self-destruct'}
        copy={'Burn Note'}
        description={"Ephemeral messaging app (inactive)."}
      />
      <TextDisplay
        position={[0,-20,0]}
        url={'https://appadvice.com/app/shuffler-photo-browser/980966633'}
        copy={'Shuffler'}
        description={"View your camera roll in random order (inactive)."}
      />
    </>
  );
};

function App() {
  const [offset, setOffset] = React.useState(0);
  const startingTarget = new THREE.Vector3(0, 0, 0);
  const [cameraTarget, setCameraTarget] = React.useState(startingTarget);

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
              position: [0, 0, 7],
            }}
            onCreated={({ gl }) => {
              gl.setClearColor("#BBCCFF");
            }}
            onWheel={(e) => {
              const newOffset = offset + (e.deltaY * -0.01);
              const cappedOffset = Math.max(Math.min(0, newOffset), -30);
              setOffset(cappedOffset);
              const newTarget = new THREE.Vector3(0, cappedOffset, 0);
              setCameraTarget(newTarget);
            }}
          >
            <OrbitControls enableZoom={false} target={cameraTarget} />
            <Suspense fallback={null}>
              <Scene offset={offset} />
            </Suspense>
          </Canvas>
        </div>

      </header>
    </div>
  );
}

export default App;
