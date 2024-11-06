// components/IslandModel.js
import React, { useRef } from 'react';
import { useLoader } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

const IslandModel = () => {
  const gltf = useLoader(GLTFLoader, '../data/3d_assets/3d/island.glb');
  return <primitive object={gltf.scene} />;
};

export default IslandModel;
