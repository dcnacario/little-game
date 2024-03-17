import { useBox, usePlane, useRapierCollider } from "@react-three/fiber";

const Barrier = () => {
  // Adjust width, height, and depth based on your barrier requirements
  const [width, height, depth] = [2, 1, 1];

  const mesh = useBox(width, height, depth); // Or usePlane for a flat barrier
  const collider = useRapierCollider(mesh, { type: "fixed" }); // Set type to 'fixed' for a static barrier

  return (
    <mesh ref={mesh} {...collider}>
      {/* Adjust geometry and material as needed */}
      {mesh && // Conditional rendering for potential errors
        (mesh.type === "BoxBufferGeometry" ? (
          <boxBufferGeometry attach="geometry" args={[width, height, depth]} />
        ) : (
          <planeBufferGeometry attach="geometry" args={[width, height]} />
        ))}
      <meshBasicMaterial attach="material" color="gray" />{" "}
      {/* Or your desired material */}
    </mesh>
  );
};

export default Barrier;
