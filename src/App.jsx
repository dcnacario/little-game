import { Canvas } from "@react-three/fiber";
import { Experience } from "./components/Experience";
import { Suspense, useMemo } from "react";
import { Physics } from "@react-three/rapier";
import { KeyboardControls } from "@react-three/drei";

export const Controls = {
  forward: "forward",
  back: "back",
  left: "left",
  right: "right",
  use: "use",
};

function App() {
  const map = useMemo(
    () => [
      { name: Controls.forward, keys: ["ArrowUp", "KeyW"] },
      { name: Controls.back, keys: ["ArrowDown", "KeyS"] },
      { name: Controls.left, keys: ["ArrowLeft", "KeyA"] },
      { name: Controls.right, keys: ["ArrowRight", "KeyD"] },
      { name: Controls.use, keys: ["KeyE"] },
    ],
    []
  );
  return (
    <KeyboardControls map={map}>
      <Canvas shadows camera={{ position: [4, 18, 14], fov: 40 }}>
        <color attach={"background"} args={["#f2f2f2"]} />
        <Suspense>
          <Physics>
            <Experience />
          </Physics>
        </Suspense>
      </Canvas>
    </KeyboardControls>
  );
}

export default App;
