import React, { useEffect, useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import { useCharacterState } from "../character";

export function Character(props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF(
    "/models/character/character.gltf"
  );
  const { actions } = useAnimations(animations, group);

  const characterState = useCharacterState((state) => state.characterState);

  useEffect(() => {
    actions[characterState].reset().fadeIn(0.2).play();
    return () => {
      actions[characterState].fadeOut(0.2);
    };
  }, [characterState]);

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group name="CharacterArmature">
          <skinnedMesh
            name="Character"
            geometry={nodes.Character.geometry}
            material={materials.Atlas}
            skeleton={nodes.Character.skeleton}
            castShadow
          />
          <primitive object={nodes.Root} />
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/models/character/character.gltf");
