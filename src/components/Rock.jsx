import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { RigidBody } from "@react-three/rapier";

export function Rock(props) {
  const { nodes, materials } = useGLTF("/models/rock/rock.glb");
  return (
    <group {...props} dispose={null}>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Rock_3.geometry}
          material={materials.Stone_Dark}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
      </RigidBody>
    </group>
  );
}

useGLTF.preload("/models/rock/rock.glb");
