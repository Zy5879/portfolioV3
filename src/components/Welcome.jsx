import { Sparkles, OrbitControls, Loader } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import AvatarModel from "../three/Avatar";
import { Suspense } from "react";

export default function WelcomeSection() {
  return (
    <>
      <Loader />
      <Canvas>
        <OrbitControls enableZoom={false} />
        <color args={["#000000"]} attach="background" />
        <directionalLight position={[1, 2, 3]} intensity={2.0} />
        <Sparkles count={2000} size={1.5} scale={20} />
        <Suspense fallback={null}>
          <AvatarModel scale={2} position-y={-2} />
        </Suspense>
      </Canvas>
    </>
  );
}
