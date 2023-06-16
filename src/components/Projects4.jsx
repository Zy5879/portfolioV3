import { Canvas } from "@react-three/fiber";
import Macbook from "../three/Macbook";

export default function Projects4() {
  return (
    <Canvas
      className="touch-none"
      camera={{ fov: 60, near: 0.1, far: 2000, position: [-3, 1.5, 4] }}
    >
      <color args={["#28282B"]} attach="background" />
      <Macbook
        iframe={"https://client-side-blue-vellum.onrender.com/"}
        y={-1.2}
        rx={-0.256}
      />
    </Canvas>
  );
}
