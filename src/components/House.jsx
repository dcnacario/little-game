import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { RigidBody } from "@react-three/rapier";

export function House(props) {
  const { nodes, materials } = useGLTF("/models/house/house.glb");
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
        <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Houses_SecondAge_1_Level2_1.geometry}
            material={materials.Main}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Houses_SecondAge_1_Level2_2.geometry}
            material={materials.Walls}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Houses_SecondAge_1_Level2_3.geometry}
            material={materials.Stone}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Houses_SecondAge_1_Level2_4.geometry}
            material={materials.Wood}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Houses_SecondAge_1_Level2_5.geometry}
            material={materials.Wood_Light}
          />
        </RigidBody>
      </group>
    </group>
  );
}

useGLTF.preload("/models/house/house.glb");
