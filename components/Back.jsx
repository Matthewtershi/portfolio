"use client" 

import { useState, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import Loader from "./ui/Loader";
import Plane from '../models/Plane';
import Bird from '../models/Bird';
import Sky from '../models/Sky';
import IslandModel from '../models/Island';
import { Stars } from "./StarsCanvas";

const Home = () => {
  const [currentStage, setCurrentStage] = useState(1);
  const [isRotating, setIsRotating] = useState(false);
  // const [isPlayingMusic, setIsPlayingMusic] = useState(false);
  
  // State to check if the component is mounted
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    // Set isClient to true when the component is mounted in the browser
    setIsClient(true);
  }, []);

  const adjustBiplaneForScreenSize = () => {
    if (isClient) {
      let screenScale, screenPosition;
      if (window.innerWidth < 768) {
        screenScale = [1.5, 1.5, 1.5];
        screenPosition = [0, -1.5, 0];
      } else {
        screenScale = [3, 3, 3];
        screenPosition = [0, -4, -4];
      }
      return [screenScale, screenPosition];
    } else {
      return [[1, 1, 1], [0, 0, 0]];
    }
  };

  const adjustIslandForScreenSize = () => {
    if (isClient) {
      let screenScale, screenPosition;
      if (window.innerWidth < 768) {
        screenScale = [0.9, 0.9, 0.9];
        screenPosition = [0, -6.5, -43.4];
      } else {
        screenScale = [1, 1, 1];
        screenPosition = [0, -6.5, -43.4];
      }
      return [screenScale, screenPosition];
    } else {
      return [[1, 1, 1], [0, 0, 0]];
    }
  };

  const [biplaneScale, biplanePosition] = adjustBiplaneForScreenSize();
  const [islandScale, islandPosition] = adjustIslandForScreenSize();

  return (
    <section className="w-full h-screen relative">

      <Canvas
        className={`w-full h-screen bg-transparent ${
          isRotating ? "cursor-grabbing" : "cursor-grab"
        }`}
        camera={{ near: 0.1, far: 1000 }}
      >
        <Suspense fallback={<Loader />}>
          <directionalLight position={[1, 2, 1]} intensity={2} />
          <ambientLight intensity={0.4} />
          <pointLight position={[10, 5, 10]} intensity={2} />
          <spotLight
            position={[0, 50, 10]}
            angle={0.15}
            penumbra={1}
            intensity={2}
          />
          <hemisphereLight
            skyColor="#b1e1ff"
            groundColor="#000000"
            intensity={0.5}
          />
          {/* <Bird /> */}
          <IslandModel
            isRotating={true}
            setIsRotating={setIsRotating}
            setCurrentStage={setCurrentStage}
            position={islandPosition}
            rotation={[0.1, 4.7077, 0]}
            scale={islandScale}
          />
          <Plane
            isRotating={isRotating}
            position={biplanePosition}
            rotation={[0, 20.1, 0]}
            scale={biplaneScale}
          />
        </Suspense>
      </Canvas>

    </section>
  );
};

export default Home;
