"use client" 

import { useState, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
// import sakura from "../assets/sakura.mp3";
import Loader from "./ui/Loader";
// import { soundoff, soundon } from "../assets/icons";
// import { Bird, Island, Plane, Sky } from "../models";
import Plane from '../models/Plane';
import Bird from '../models/Bird';
import Sky from '../models/Sky';
import IslandModel from '../models/Island';

const Home = () => {
  // const audioRef = new Audio(sakura);
  // audioRef.volume = 0.4;
  // audioRef.loop = true;

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
      return [[1, 1, 1], [0, 0, 0]]; // Default scale and position before window is available
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
      return [[1, 1, 1], [0, 0, 0]]; // Default scale and position before window is available
    }
  };

  const [biplaneScale, biplanePosition] = adjustBiplaneForScreenSize();
  const [islandScale, islandPosition] = adjustIslandForScreenSize();

  return (
    <section className="w-full h-screen relative border-2 border-red-500">

      <Canvas
        className={`w-full h-screen bg-transparent ${
          isRotating ? "cursor-grabbing" : "cursor-grab"
        }`}
        camera={{ near: 0.1, far: 1000 }}
      >
        <Suspense fallback={<Loader />}>
          <directionalLight position={[1, 2, 1]} intensity={2} />
          <ambientLight intensity={0.5} />
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
            intensity={1}
          />

          <Sky />
          <Bird />
          <IslandModel
            isRotating={isRotating}
            setIsRotating={setIsRotating}
            setCurrentStage={setCurrentStage}
            position={islandPosition}
            rotation={[0.1, 4.7077, 0]}
            scale={islandScale}
          />
          <Plane />
          {/* <Plane
            isRotating={isRotating}
            position={biplanePosition}
            rotation={[0, 20.1, 0]}
            scale={biplaneScale}
          /> */}
        </Suspense>
      </Canvas>

      {/* <div className="absolute bottom-2 left-2">
        <img
          src={!isPlayingMusic ? soundoff : soundon}
          alt="jukebox"
          onClick={() => setIsPlayingMusic(!isPlayingMusic)}
          className="w-10 h-10 cursor-pointer object-contain"
        />
      </div> */}
    </section>
  );
};

export default Home;
