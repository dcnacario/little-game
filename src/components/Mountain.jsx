import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { RigidBody } from "@react-three/rapier";

export function Mountain(props) {
  const { nodes, materials } = useGLTF("/models/mountain/mountain.glb");
  return (
    <group {...props} dispose={null}>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.volcano.geometry}
          material={materials.None}
        />
      </RigidBody>
    </group>
  );
}

useGLTF.preload("/models/mountain/mountain.glb");
