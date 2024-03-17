/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.16 ./public/models/crystal/Crystal_Big.gltf 
*/

import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { RigidBody } from "@react-three/rapier";

export function Crystal_Big(props) {
  const { nodes, materials } = useGLTF("/models/crystal/Crystal_Big.gltf");
  return (
    <group {...props} dispose={null}>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Crystal_Big.geometry}
          material={materials.Atlas}
          scale={0.261}
        />
      </RigidBody>
    </group>
  );
}

useGLTF.preload("/models/crystal/Crystal_Big.gltf");