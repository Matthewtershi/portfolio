import React from 'react'
import { useGLTF } from '@react-three/drei'

const Sky = () => {
    const sky = useGLTF("/3d_assets/3d/sky.glb");
    return (
        <mesh>
            <primitive object={sky.scene} />
        </mesh>
    )
}

export default Sky