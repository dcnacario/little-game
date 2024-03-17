import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { RigidBody } from "@react-three/rapier";

export function Bridge(props) {
  const { nodes, materials } = useGLTF("/models/bridge/bridge.glb");
  return (
    <group {...props} dispose={null}>
      <RigidBody type="fixed" colliders={"trimesh"}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Bridge_Small.geometry}
          material={materials.Wood}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
      </RigidBody>
    </group>
  );
}

useGLTF.preload("/models/bridge/bridge.glb");
