import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { RigidBody } from "@react-three/rapier";

export function Shrub(props) {
  const { nodes, materials } = useGLTF("/models/shrub/Shrub.glb");
  return (
    <group {...props} dispose={null}>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Shrub_mesh.geometry}
          material={materials.Shrub_mat}
        />
      </RigidBody>
    </group>
  );
}

useGLTF.preload("/models/shrub/Shrub.glb");
