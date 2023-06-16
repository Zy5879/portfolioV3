import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Macbook from "../three/Macbook";

export default function Projects3() {
  return (
    <Canvas
      className="touch-none"
      camera={{ fov: 60, near: 0.1, far: 2000, position: [-3, 1.5, 4] }}
    >
      <color args={["#28282B"]} attach="background" />
      <Macbook
        iframe={"https://nimble-semifreddo-193ec7.netlify.app/"}
        y={-1.2}
        rx={-0.256}
      />
    </Canvas>
  );
}
