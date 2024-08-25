import { OrbitControls } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { useRef } from "react";

function RotatingCube() {
  const meshRef = useRef();

  // Rotate the cube on every frame
  useFrame(() => {
    meshRef.current.rotation.x += 0.01;
    meshRef.current.rotation.y += 0.01;
  });

  return (
    <mesh ref={meshRef}>
      <boxGeometry args={[1.25, 1.25, 1.25]} />
      <meshNormalMaterial />
    </mesh>
  );
}

export default function App() {
  return (
    <>
      <Canvas>
        <color attach="background" args={["#121316"]} />
        <OrbitControls />
        <RotatingCube />
      </Canvas>
    </>
  );
}
