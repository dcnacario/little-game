import { CapsuleCollider, RigidBody } from "@react-three/rapier";
import { Character } from "./Character";
import { useKeyboardControls } from "@react-three/drei";
import { useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";
import { Controls } from "../App";
import * as THREE from "three";
import { useCharacterState } from "../character";

const MOVEMENT_SPEED = 0.1;
const MAX_VEL = 3;
const WALK_VEL = 0.5;

export const CharacterController = () => {
  const { characterState, setCharacterState } = useCharacterState((state) => ({
    character: state.characterState,
    setCharacterState: state.setCharacterState,
  }));
  const forwardPressed = useKeyboardControls(
    (state) => state[Controls.forward]
  );
  const backwardPressed = useKeyboardControls((state) => state[Controls.back]);
  const leftPressed = useKeyboardControls((state) => state[Controls.left]);
  const rightPressed = useKeyboardControls((state) => state[Controls.right]);

  const rigidbody = useRef();

  useFrame((state) => {
    const impulse = { x: 0, y: 0, z: 0 };

    const linvel = rigidbody.current.linvel();
    let changeRotation = false;

    if (leftPressed && linvel.x > -MAX_VEL) {
      impulse.x -= MOVEMENT_SPEED;
      changeRotation = true;
    }
    if (rightPressed && linvel.x < MAX_VEL) {
      impulse.x += MOVEMENT_SPEED;
      changeRotation = true;
    }
    if (forwardPressed && linvel.z > -MAX_VEL) {
      impulse.z -= MOVEMENT_SPEED;
      changeRotation = true;
    }
    if (backwardPressed && linvel.z < MAX_VEL) {
      impulse.z += MOVEMENT_SPEED;
      changeRotation = true;
    }

    rigidbody.current.applyImpulse(impulse, true);

    if (Math.abs(linvel.x) > WALK_VEL || Math.abs(linvel.z) > WALK_VEL) {
      if (characterState !== "Walk") {
        setCharacterState("Walk");
      }
    } else {
      if (characterState !== "Idle") {
        setCharacterState("Idle");
      }
    }
    if (changeRotation) {
      const angle = Math.atan2(linvel.x, linvel.z);
      character.current.rotation.y = angle;
    }

    const characterWorldPosition = character.current.getWorldPosition(
      new THREE.Vector3()
    );
    state.camera.position.x = characterWorldPosition.x;
    state.camera.position.z = characterWorldPosition.z + 12;
    state.camera.position.y = characterWorldPosition.y + 8;

    const targetLookAt = new THREE.Vector3(
      characterWorldPosition.x,
      0,
      characterWorldPosition.z
    );

    state.camera.lookAt(targetLookAt);
  });

  const character = useRef();

  return (
    <group>
      <RigidBody
        ref={rigidbody}
        colliders={false}
        scale={[0.5, 0.5, 0.5]}
        enabledRotations={[false, false, false]}
        position={[-6.5, 0, -1.5]}
      >
        <CapsuleCollider args={[1, 0.5]} position={[0, 1, 0]} />
        <group ref={character}>
          <Character />
        </group>
      </RigidBody>
    </group>
  );
};
