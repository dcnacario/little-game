import {
  Box,
  ContactShadows,
  Environment,
  OrbitControls,
} from "@react-three/drei";
import { CuboidCollider, RigidBody } from "@react-three/rapier";
import { Tree } from "./Tree";
import { Rock } from "./Rock";
import { House } from "./House";
import { CharacterController } from "./CharacterController";
import { FenceCenter } from "./FenceCenter";
import { FenceCorner } from "./FenceCorner";
import { Mountain } from "./Mountain";
import { Bridge } from "./Bridge";
import WaterObject from "./WaterObject";
import { Bamboo } from "./Bamboo";
import { Shrub } from "./Shrub";
import { Fountain } from "./Fountain";
import { Dog } from "./Dog";
import { Flowers } from "./Flowers";
import { Flowers2 } from "./Flowers2";
import { Crystal_Big } from "./Crystal_Big";
import { useState } from "react";

export const Experience = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => setIsOpen(!isOpen);
  return (
    <>
      <OrbitControls />
      <Environment preset="forest" />
      <directionalLight
        castShadow
        position={[4, 8, 4]}
        shadow-mapSize={[1024, 1024]}
        intensity={0.3}
        color={"#ebebeb"}
      >
        +{" "}
        <orthographicCamera attach="shadow-camera" args={[-10, 10, 10, -10]} />+{" "}
      </directionalLight>
      <ContactShadows
        frames={1}
        scale={80}
        opacity={0.5}
        far={50}
        blur={0.8}
        color={"#ebebeb"}
      />

      <Tree scale={(1, 1, 1)} position={[-2.5, 0, -7]} />
      <Tree scale={(1, 1, 1)} position={[-2.5, 0, -3]} />
      <House scale={(5, 5, 5)} position={[-6, 0.5, -4]} />

      <Rock scale={[6, 6, 6]} position={[-2.6, 0.5, 1]} rotation={[0, 11, 0]} />
      <Rock scale={[6, 6, 6]} position={[-2.6, 0.5, 0]} rotation={[0, 10, 0]} />
      <Rock scale={[6, 6, 6]} position={[-2.6, 0.5, -1]} rotation={[0, 9, 0]} />
      <Rock scale={[6, 6, 6]} position={[-2.6, 0.5, -2]} rotation={[0, 8, 0]} />
      <Rock
        scale={[6, 6, 6]}
        position={[-2.6, 0.5, 1.5]}
        rotation={[0, 8, 0]}
      />
      <Rock scale={[6, 6, 6]} position={[-2.6, 0.5, 6]} rotation={[0, 8, 0]} />
      <Rock scale={[6, 6, 6]} position={[-2.6, 0.5, 7]} rotation={[0, 9, 0]} />
      <Rock scale={[6, 6, 6]} position={[-2.6, 0.5, 8]} rotation={[0, 7, 0]} />
      <Rock
        scale={[6, 6, 6]}
        position={[-2.6, 0.5, 8.5]}
        rotation={[0, 7, 0]}
      />

      <Rock scale={[6, 6, 6]} position={[2.5, 0.5, 1]} rotation={[0, 11, 0]} />
      <Rock scale={[6, 6, 6]} position={[2.5, 0.5, 0]} rotation={[0, 10, 0]} />
      <Rock scale={[6, 6, 6]} position={[2.5, 0.5, -1]} rotation={[0, 9, 0]} />
      <Rock scale={[6, 6, 6]} position={[-2.6, 0.5, -2]} rotation={[0, 8, 0]} />
      <Rock scale={[6, 6, 6]} position={[2.5, 0.5, 1.5]} rotation={[0, 8, 0]} />
      <Rock scale={[6, 6, 6]} position={[2.5, 0.5, 6]} rotation={[0, 8, 0]} />
      <Rock scale={[6, 6, 6]} position={[-2.6, 0.5, 6]} rotation={[0, 8, 0]} />
      <Rock scale={[6, 6, 6]} position={[-2.6, 0.5, 7]} rotation={[0, 9, 0]} />
      <Rock scale={[6, 6, 6]} position={[-2.6, 0.5, 8]} rotation={[0, 7, 0]} />
      <Rock
        scale={[6, 6, 6]}
        position={[-2.6, 0.5, 8.5]}
        rotation={[0, 7, 0]}
      />
      <Rock
        scale={[6, 6, 6]}
        position={[2.5, 0.5, -2.5]}
        rotation={[0, 11, 0]}
      />
      <Rock scale={[6, 6, 6]} position={[2.5, 0.5, -3]} rotation={[0, 10, 0]} />
      <Rock scale={[6, 6, 6]} position={[2.5, 0.5, -4]} rotation={[0, 9, 0]} />
      <Rock scale={[6, 6, 6]} position={[2.5, 0.5, -5]} rotation={[0, 8, 0]} />
      <Rock scale={[6, 6, 6]} position={[2.5, 0.5, -6]} rotation={[0, 6, 0]} />
      <Rock scale={[6, 6, 6]} position={[2.5, 0.5, -7]} rotation={[0, 4, 0]} />
      <Rock scale={[6, 6, 6]} position={[2.5, 0.5, -8]} rotation={[0, 2, 0]} />
      <Rock scale={[6, 6, 6]} position={[2.5, 0.5, -9]} rotation={[0, 1, 0]} />
      <Rock scale={[6, 6, 6]} position={[2.5, 0.5, -10]} rotation={[0, 7, 0]} />

      <Rock scale={[6, 6, 6]} position={[2.5, 0.5, 7]} rotation={[0, 9, 0]} />
      <Rock scale={[6, 6, 6]} position={[2.5, 0.5, 8]} rotation={[0, 7, 0]} />
      <Rock scale={[6, 6, 6]} position={[2.5, 0.5, 8.5]} rotation={[0, 7, 0]} />

      {/* BAMBOO */}

      <Bamboo scale={[1, 1, 1]} position={[3, 0.5, 1]} rotation={[0, 1, 0]} />
      <Bamboo scale={[1, 1, 1]} position={[3, 0.5, 0]} rotation={[0, 2, 0]} />
      <Bamboo scale={[1, 1, 1]} position={[3, 0.5, -1]} rotation={[0, 3, 0]} />
      <Bamboo scale={[1, 1, 1]} position={[3, 0.5, -2]} rotation={[0, 4, 0]} />
      <Bamboo scale={[1, 1, 1]} position={[3, 0.5, -3]} rotation={[0, 5, 0]} />
      <Bamboo scale={[1, 1, 1]} position={[3, 0.5, -4]} rotation={[0, 5, 0]} />
      <Bamboo scale={[1, 1, 1]} position={[3, 0.5, -5]} rotation={[0, 7, 0]} />
      <Bamboo scale={[1, 1, 1]} position={[3, 0.5, -6]} rotation={[0, 8, 0]} />
      <Bamboo scale={[1, 1, 1]} position={[3, 0.5, -7]} rotation={[0, 6, 0]} />
      <Bamboo scale={[1, 1, 1]} position={[3, 0.5, -8]} rotation={[0, 6, 0]} />
      <Bamboo scale={[1, 1, 1]} position={[3, 0.5, -9]} rotation={[0, 6, 0]} />
      <Bamboo scale={[1, 1, 1]} position={[3, 0.5, -10]} rotation={[0, 6, 0]} />
      {/* ------------------------------------------- */}

      {/* SHRUB */}

      <Shrub scale={[0.3, 0.3, 0.3]} position={[-9, 0.2, -3]} />
      <Shrub scale={[0.3, 0.3, 0.3]} position={[-9, 0.2, -2]} />
      <Shrub scale={[0.3, 0.3, 0.3]} position={[-9, 0.2, -4]} />
      <Shrub scale={[0.3, 0.3, 0.3]} position={[-9, 0.2, -5]} />
      <Shrub scale={[0.3, 0.3, 0.3]} position={[-9, 0.2, -6]} />
      <Shrub scale={[0.3, 0.3, 0.3]} position={[-9, 0.2, -7]} />
      <Shrub scale={[0.3, 0.3, 0.3]} position={[-9, 0.2, -8]} />
      <Shrub scale={[0.3, 0.3, 0.3]} position={[-9, 0.2, -9]} />

      {/* Near Fountain */}

      <Shrub scale={[0.5, 0.5, 0.5]} position={[9.5, 0.2, -10]} />
      <Shrub scale={[0.5, 0.5, 0.5]} position={[9, 0.2, -10]} />
      <Shrub scale={[0.5, 0.5, 0.5]} position={[8.5, 0.2, -10]} />
      <Shrub scale={[0.5, 0.5, 0.5]} position={[8, 0.2, -10]} />
      <Shrub scale={[0.5, 0.5, 0.5]} position={[7.5, 0.2, -10]} />
      <Shrub scale={[0.5, 0.5, 0.5]} position={[7, 0.2, -10]} />
      <Shrub scale={[0.5, 0.5, 0.5]} position={[6.5, 0.2, -10]} />
      <Shrub scale={[0.5, 0.5, 0.5]} position={[6, 0.2, -10]} />
      <Shrub scale={[0.5, 0.5, 0.5]} position={[5.5, 0.2, -10]} />
      <Shrub scale={[0.5, 0.5, 0.5]} position={[5, 0.2, -10]} />
      <Shrub scale={[0.5, 0.5, 0.5]} position={[4.5, 0.2, -10]} />

      {/* ------------------------------------- */}

      {/* Fountain */}
      <Fountain scale={[1.5, 1.5, 1.5]} position={[6.5, 1.5, -8]} />

      {/* ----------------------------------------- */}

      {/* Tree near Fountain */}

      <Tree scale={[1, 1, 1]} position={[4.3, 0.5, -8]} rotation={[0, 1, 0]} />
      <Tree scale={[1, 1, 2]} position={[8.8, 0.5, -8]} rotation={[0, 2, 0]} />

      {/* --------------------------------------------- */}

      {/* Dog */}

      <Dog
        scale={[0.5, 0.5, 0.5]}
        position={[9, 0.5, -6]}
        rotation={[0, 6, 0]}
      />

      {/* ------------------------------------------------ */}

      {/* Flowers */}

      {/* Near House */}

      <Flowers scale={[0.5, 0.5, 0.5]} position={[-4, 0.5, -2]} />
      <Flowers scale={[0.5, 0.5, 0.5]} position={[-4, 0.5, -1]} />
      <Flowers scale={[0.5, 0.5, 0.5]} position={[-4, 0.5, 0]} />
      <Flowers scale={[0.5, 0.5, 0.5]} position={[-4, 0.5, 1]} />
      <Flowers scale={[0.5, 0.5, 0.5]} position={[4, 0.5, 9]} />
      <Flowers scale={[0.5, 0.5, 0.5]} position={[5, 0.5, 9]} />
      <Flowers scale={[0.5, 0.5, 0.5]} position={[6, 0.5, 9]} />
      <Flowers scale={[0.5, 0.5, 0.5]} position={[7, 0.5, 9]} />
      <Flowers scale={[0.5, 0.5, 0.5]} position={[8, 0.5, 9]} />
      <Flowers scale={[0.5, 0.5, 0.5]} position={[9, 0.5, 9]} />

      {/* Right Side */}

      <Flowers2 scale={[0.5, 0.5, 0.5]} position={[-9, 0.5, 9]} />
      <Flowers2 scale={[0.5, 0.5, 0.5]} position={[-9, 0.5, 8]} />
      <Flowers2 scale={[0.5, 0.5, 0.5]} position={[-9, 0.5, 7]} />
      <Flowers2 scale={[0.5, 0.5, 0.5]} position={[-9, 0.5, 6]} />
      <Flowers2 scale={[0.5, 0.5, 0.5]} position={[-8, 0.5, 9]} />
      <Flowers2 scale={[0.5, 0.5, 0.5]} position={[-7, 0.5, 9]} />
      <Flowers2 scale={[0.5, 0.5, 0.5]} position={[-6, 0.5, 9]} />
      <Flowers2 scale={[0.5, 0.5, 0.5]} position={[-5, 0.5, 9]} />
      <Flowers2 scale={[0.5, 0.5, 0.5]} position={[-4, 0.5, 9]} />

      {/* ------------------------------------------------- */}

      {/* CRYSTAL */}

      <Crystal_Big scale={[1.5, 1.5, 1.5]} position={[9, 0.5, 7.5]} />

      {/* ---------------------------------- */}

      {/* Bubble */}

      {/* <Bubble /> */}
      {/* ------------------------------ */}

      {/* Fence */}

      <FenceCenter
        position={[10, 1.2, 8.6]}
        scale={[0.6, 0.6, 0.6]}
        rotation={[0, 11, 0]}
      />
      <FenceCenter
        position={[10, 1.2, 7.6]}
        scale={[0.6, 0.6, 0.6]}
        rotation={[0, 11, 0]}
      />
      <FenceCenter
        position={[10, 1.2, 6.6]}
        scale={[0.6, 0.6, 0.6]}
        rotation={[0, 11, 0]}
      />
      <FenceCenter
        position={[10, 1.2, 5.6]}
        scale={[0.6, 0.6, 0.6]}
        rotation={[0, 11, 0]}
      />
      <FenceCenter
        position={[10, 1.2, 4.6]}
        scale={[0.6, 0.6, 0.6]}
        rotation={[0, 11, 0]}
      />
      <FenceCenter
        position={[10, 1.2, 3.6]}
        scale={[0.6, 0.6, 0.6]}
        rotation={[0, 11, 0]}
      />
      <FenceCenter
        position={[10, 1.2, 2.6]}
        scale={[0.6, 0.6, 0.6]}
        rotation={[0, 11, 0]}
      />
      <FenceCenter
        position={[10, 1.2, 1.6]}
        scale={[0.6, 0.6, 0.6]}
        rotation={[0, 11, 0]}
      />
      <FenceCenter
        position={[10, 1.2, 0.6]}
        scale={[0.6, 0.6, 0.6]}
        rotation={[0, 11, 0]}
      />
      <FenceCenter
        position={[10, 1.2, -0.6]}
        scale={[0.6, 0.6, 0.6]}
        rotation={[0, 11, 0]}
      />
      <FenceCenter
        position={[10, 1.2, -1.6]}
        scale={[0.6, 0.6, 0.6]}
        rotation={[0, 11, 0]}
      />
      <FenceCenter
        position={[10, 1.2, -2.6]}
        scale={[0.6, 0.6, 0.6]}
        rotation={[0, 11, 0]}
      />
      <FenceCenter
        position={[10, 1.2, -3.6]}
        scale={[0.6, 0.6, 0.6]}
        rotation={[0, 11, 0]}
      />
      <FenceCenter
        position={[10, 1.2, -4.6]}
        scale={[0.6, 0.6, 0.6]}
        rotation={[0, 11, 0]}
      />
      <FenceCenter
        position={[10, 1.2, -5.6]}
        scale={[0.6, 0.6, 0.6]}
        rotation={[0, 11, 0]}
      />
      <FenceCenter
        position={[10, 1.2, -6.6]}
        scale={[0.6, 0.6, 0.6]}
        rotation={[0, 11, 0]}
      />
      <FenceCenter
        position={[10, 1.2, -7.6]}
        scale={[0.6, 0.6, 0.6]}
        rotation={[0, 11, 0]}
      />
      <FenceCenter
        position={[10, 1.2, -8.6]}
        scale={[0.6, 0.6, 0.6]}
        rotation={[0, 11, 0]}
      />
      <FenceCenter
        position={[10, 1.2, -9.6]}
        scale={[0.6, 0.6, 0.6]}
        rotation={[0, 11, 0]}
      />

      <FenceCorner
        position={[10, 1.2, 9.8]}
        scale={[0.6, 0.6, 0.6]}
        rotation={[0, 4.7, 0]}
      />

      <FenceCenter position={[9, 1.2, 9.8]} scale={[0.6, 0.6, 0.6]} />
      <FenceCenter position={[8, 1.2, 9.8]} scale={[0.6, 0.6, 0.6]} />
      <FenceCenter position={[7, 1.2, 9.8]} scale={[0.6, 0.6, 0.6]} />
      <FenceCenter position={[6, 1.2, 9.8]} scale={[0.6, 0.6, 0.6]} />
      <FenceCenter position={[5, 1.2, 9.8]} scale={[0.6, 0.6, 0.6]} />
      <FenceCenter position={[4, 1.2, 9.8]} scale={[0.6, 0.6, 0.6]} />
      <FenceCenter position={[3, 1.2, 9.8]} scale={[0.6, 0.6, 0.6]} />
      <FenceCenter position={[2, 1.2, 9.8]} scale={[0.6, 0.6, 0.6]} />
      <FenceCenter position={[1, 1.2, 9.8]} scale={[0.6, 0.6, 0.6]} />
      <FenceCenter position={[0, 1.2, 9.8]} scale={[0.6, 0.6, 0.6]} />
      <FenceCenter position={[-1, 1.2, 9.8]} scale={[0.6, 0.6, 0.6]} />
      <FenceCenter position={[-2, 1.2, 9.8]} scale={[0.6, 0.6, 0.6]} />
      <FenceCenter position={[-3, 1.2, 9.8]} scale={[0.6, 0.6, 0.6]} />
      <FenceCenter position={[-4, 1.2, 9.8]} scale={[0.6, 0.6, 0.6]} />
      <FenceCenter position={[-5, 1.2, 9.8]} scale={[0.6, 0.6, 0.6]} />
      <FenceCenter position={[-6, 1.2, 9.8]} scale={[0.6, 0.6, 0.6]} />
      <FenceCenter position={[-7, 1.2, 9.8]} scale={[0.6, 0.6, 0.6]} />
      <FenceCenter position={[-8, 1.2, 9.8]} scale={[0.6, 0.6, 0.6]} />
      <FenceCenter position={[-9, 1.2, 9.8]} scale={[0.6, 0.6, 0.6]} />

      <FenceCorner
        position={[-10, 1.2, 9.8]}
        scale={[0.6, 0.6, 0.6]}
        rotation={[0, 15.7, 0]}
      />

      <FenceCenter
        position={[-10, 1.2, 8.6]}
        scale={[0.6, 0.6, 0.6]}
        rotation={[0, 11, 0]}
      />

      <FenceCenter
        position={[-10, 1.2, 7.6]}
        scale={[0.6, 0.6, 0.6]}
        rotation={[0, 11, 0]}
      />
      <FenceCenter
        position={[-10, 1.2, 6.6]}
        scale={[0.6, 0.6, 0.6]}
        rotation={[0, 11, 0]}
      />
      <FenceCenter
        position={[-10, 1.2, 5.6]}
        scale={[0.6, 0.6, 0.6]}
        rotation={[0, 11, 0]}
      />
      <FenceCenter
        position={[-10, 1.2, 4.6]}
        scale={[0.6, 0.6, 0.6]}
        rotation={[0, 11, 0]}
      />
      <FenceCenter
        position={[-10, 1.2, 3.6]}
        scale={[0.6, 0.6, 0.6]}
        rotation={[0, 11, 0]}
      />
      <FenceCenter
        position={[-10, 1.2, 2.6]}
        scale={[0.6, 0.6, 0.6]}
        rotation={[0, 11, 0]}
      />
      <FenceCenter
        position={[-10, 1.2, 1.6]}
        scale={[0.6, 0.6, 0.6]}
        rotation={[0, 11, 0]}
      />
      <FenceCenter
        position={[-10, 1.2, 0.6]}
        scale={[0.6, 0.6, 0.6]}
        rotation={[0, 11, 0]}
      />
      <FenceCenter
        position={[-10, 1.2, -0.6]}
        scale={[0.6, 0.6, 0.6]}
        rotation={[0, 11, 0]}
      />
      <FenceCenter
        position={[-10, 1.2, -1.6]}
        scale={[0.6, 0.6, 0.6]}
        rotation={[0, 11, 0]}
      />
      <FenceCenter
        position={[-10, 1.2, -2.6]}
        scale={[0.6, 0.6, 0.6]}
        rotation={[0, 11, 0]}
      />
      <FenceCenter
        position={[-10, 1.2, -3.6]}
        scale={[0.6, 0.6, 0.6]}
        rotation={[0, 11, 0]}
      />
      <FenceCenter
        position={[-10, 1.2, -4.6]}
        scale={[0.6, 0.6, 0.6]}
        rotation={[0, 11, 0]}
      />
      <FenceCenter
        position={[-10, 1.2, -5.6]}
        scale={[0.6, 0.6, 0.6]}
        rotation={[0, 11, 0]}
      />
      <FenceCenter
        position={[-10, 1.2, -6.6]}
        scale={[0.6, 0.6, 0.6]}
        rotation={[0, 11, 0]}
      />
      <FenceCenter
        position={[-10, 1.2, -7.6]}
        scale={[0.6, 0.6, 0.6]}
        rotation={[0, 11, 0]}
      />
      <FenceCenter
        position={[-10, 1.2, -8.6]}
        scale={[0.6, 0.6, 0.6]}
        rotation={[0, 11, 0]}
      />
      <FenceCenter
        position={[-10, 1.2, -9.6]}
        scale={[0.6, 0.6, 0.6]}
        rotation={[0, 11, 0]}
      />

      <Mountain scale={[12, 12, 12]} position={[0, 4, -18]} />

      <Bridge scale={[1, 1, 1.2]} position={[0, 0, 4]} />

      <RigidBody type="fixed" colliders={false}>
        <Box scale={[20, 1, 20]} receiveShadow>
          <meshStandardMaterial color="#48ab61" />
        </Box>
        <CuboidCollider position-y={1} args={[10, 0.3, 10]} />
      </RigidBody>

      {/* <RigidBody type="fixed" colliders={"cuboid"}>
        <Box scale={[4.5, 1, 20]} receiveShadow>
          <meshStandardMaterial color="skyblue" />
        </Box>
      </RigidBody> */}

      <RigidBody type="fixed" colliders={"cuboid"}>
        <WaterObject scale={[1, 1, 1]} position={[0, 0, 0]} />
      </RigidBody>
      <CharacterController />
    </>
  );
};
