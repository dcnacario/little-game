import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { RigidBody } from "@react-three/rapier";

export function Bamboo(props) {
  const { nodes, materials } = useGLTF("/models/bamboo/Bamboo.gltf");
  return (
    <group {...props} dispose={null}>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Bamboo.geometry}
          material={materials.Atlas}
        />
      </RigidBody>
    </group>
  );
}

useGLTF.preload("/models/bamboo/Bamboo.gltf");
