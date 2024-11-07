import React, { useState, useRef, Suspense } from 'react'
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial, Prelod } from "@react-three/drei";
import * as random from 'maath/random/dist/maath-random.esm'

const Stars = () => {
  return (
    <div>StarsCanvas</div>
  )
}

const StarsCanvas = () => {
    return (
        <div classNAme="w-full h-full absolute inset-0 x-[-1]">
            <Canvas camera={{position: [0,0,1]}}>
                <Suspense fallback={null}>
                    <Stars />
                </Suspense>
            </Canvas>
        </div>
    )
}

export default StarsCanvas