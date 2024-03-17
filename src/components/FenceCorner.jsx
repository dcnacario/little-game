import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { RigidBody } from "@react-three/rapier";

export function FenceCorner(props) {
  const { nodes, materials } = useGLTF("/models/fence/fence_corner.gltf");
  return (
    <group {...props} dispose={null}>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Fence_Corner.geometry}
          material={materials.Atlas}
        />
      </RigidBody>
    </group>
  );
}

useGLTF.preload("/models/fence/fence_corner.gltf");
