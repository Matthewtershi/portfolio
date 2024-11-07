// components/IslandModel.js
import { useGLTF } from '@react-three/drei';
import React, { useRef } from 'react';
import { a } from "@react-spring/three";
// import { useLoader } from '@react-three/fiber';
// import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

const IslandModel = ({
    isRotating,
    setIsRotating,
    setCurrentStage,
    currentFocusPoint,
    ...props
  }) => {
  // const gltf = useLoader(GLTFLoader, '../data/3d_assets/3d/island.glb');
  // return <primitive object={gltf.scene} />;
  const { nodes, materials } = useGLTF("/3d_assets/3d/island.glb");
  const islandRef = useRef(null);
  return (
    <a.group ref={islandRef} {...props}>
      <mesh
        geometry={nodes.polySurface944_tree_body_0.geometry}
        material={materials.PaletteMaterial001}
      />
      <mesh
        geometry={nodes.polySurface945_tree1_0.geometry}
        material={materials.PaletteMaterial001}
      />
      <mesh
        geometry={nodes.polySurface946_tree2_0.geometry}
        material={materials.PaletteMaterial001}
      />
      <mesh
        geometry={nodes.polySurface947_tree1_0.geometry}
        material={materials.PaletteMaterial001}
      />
      <mesh
        geometry={nodes.polySurface948_tree_body_0.geometry}
        material={materials.PaletteMaterial001}
      />
      <mesh
        geometry={nodes.polySurface949_tree_body_0.geometry}
        material={materials.PaletteMaterial001}
      />
      <mesh
        geometry={nodes.pCube11_rocks1_0.geometry}
        material={materials.PaletteMaterial001}
      />
    </a.group>
  )
};

export default IslandModel;
