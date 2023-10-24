import React,  { Suspense } from 'react';
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment } from "@react-three/drei";
import './App.css';
import { PortfolioItems } from './components/PortfolioItems';
import { useScreenSize } from './hooks/useScreenSize';

const minOffset = 0.0
const maxOffset = 30.0

const Scene = (props: {offset: number}) => {
  return (
    <>
      <Environment files="/field_2k.hdr" background={true} />
      <PortfolioItems offset={props.offset} />
    </>
  );
};

function App() {
  const screenSize = useScreenSize();

  const [offset, setOffset] = React.useState(minOffset);

  const onWheel = (e: React.WheelEvent) => {
    const newOffset = offset + (e.deltaY * 0.01);
    const cappedOffset = Math.max(Math.min(maxOffset, newOffset), minOffset);
    setOffset(cappedOffset);
  }

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
              position: [2, 2, 7],
            }}
            onCreated={({ gl }) => {
              gl.setClearColor("white");
            }}
            onWheel={onWheel}
          >
            <OrbitControls
              enableZoom={false}
              autoRotate={true}
              autoRotateSpeed={0.1}
              enableDamping={true} />
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
