import { Sparkles } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

export default function Projects() {
  return (
    <Canvas>
      <color args={["red"]} attach="background" />
      <Sparkles count={500} size={0.5} color="black" />
    </Canvas>
  );
}
