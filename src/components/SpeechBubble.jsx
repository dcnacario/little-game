// SpeechBubble.js
import React from "react";
import { Text } from "@react-three/drei";

function SpeechBubble({ position, isVisible }) {
  return isVisible ? (
    <mesh position={position}>
      <mesh position={[0, 0, -1 - 1 / 2]}>
        <meshStandardMaterial attach="material" color={"white"} />
        <boxGeometry args={[4, 3, 0]} />
      </mesh>
      <Text position={[0, 0, -1.3]} fontSize={0.3} color={"black"}>
        Press E for a SURPRISE!
      </Text>
    </mesh>
  ) : (
    <></>
  );
}

export default SpeechBubble;
