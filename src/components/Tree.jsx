import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { RigidBody } from "@react-three/rapier";

export function Tree(props) {
  const { nodes, materials } = useGLTF("/models/tree/tree.gltf");
  return (
    <group {...props} dispose={null}>
      <RigidBody type="fixed" colliders={"trimesh"}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Tree_1.geometry}
          material={materials.Atlas}
        />
      </RigidBody>
    </group>
  );
}

useGLTF.preload("/models/tree/tree.gltf");
