"use client";

import React from 'react'
import { Suspense } from 'react'
import Loader from "./ui/Loader";
import { Canvas } from '@react-three/fiber'
import Island from '../models/Island';
import IslandModel from '../models/kms';

const Back = () => {
  return (
    <section className="w-full h-screen relative">
        <Canvas 
          className="w-full h-screen bg-transparent" 
          camera = {{ near: 0.1, far: 1000 }}
        >
          <Suspense fallback = {<Loader />}>
            <directionalLight />
            <ambientLight />
            <pointLight />
            <spotLight />
            <hemisphereLight />

            {/* <Island /> */}
            {/* <IslandModel /> */}
          </Suspense>
        </Canvas>
    </section>
  )
}

export default Back