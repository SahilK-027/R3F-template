import { OrbitControls, Shadow } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

export default function App() {
  return (
    <>
      <Canvas>
        <color attach="background" args={['#fff']} />
        <OrbitControls />
        <mesh>
          <boxGeometry args={[1, 1, 1]} />
          <meshNormalMaterial color="mediumpurple" />
        </mesh>
      </Canvas>
    </>
  )
}