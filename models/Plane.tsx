import React, { useEffect, useRef } from 'react'
import { useAnimations, useGLTF } from '@react-three/drei';


interface PlaneProps {
    isRotating: boolean;
    [key: string]: any; // allows other props to be passed as well
}

const Plane: React.FC<PlaneProps> = ({ isRotating, ...props }) => {
    
    const ref = useRef();
    const { scene, animations } = useGLTF("/3d_assets/3d/plane.glb");
    const { actions } = useAnimations(animations, ref);

    // useEffect(() => {
    //     if (actions && actions['Take 001']) {
    //         if (isRotating) {
    //             actions['Take 001'].play();
    //         } else {
    //             actions['Take 001'].stop();
    //         }
    //     }
    // })

    return (
        <mesh {...props}>
            <primitive object={scene}/>
        </mesh>
    )
}

export default Plane
