import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { RigidBody } from "@react-three/rapier";

export function Fountain(props) {
  const { nodes, materials } = useGLTF("/models/fountain/Fountain.glb");
  return (
    <group {...props} dispose={null}>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.fountain.geometry}
          material={materials.None}
        />
      </RigidBody>
    </group>
  );
}

useGLTF.preload("/models/fountain/Fountain.glb");
