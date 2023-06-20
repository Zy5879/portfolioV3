import { Sparkles, OrbitControls, Center } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import AvatarModel from "../three/Avatar";
import { HtmlText } from "../three/Html";
import ThreeD from "../three/ThreeD";
import { Html } from "@react-three/drei";
import Navbar from "./Navbar";
import { Perf } from "r3f-perf";

const Section = (props) => {
  const { children } = props;

  return (
    <section
      className={`w-screen p-8 max-w-screen-2xl mx-auto flex flex-col items-start justify-center`}
    >
      {children}
    </section>
  );
};

export default function WelcomeSection() {
  return (
    <>
      <Canvas>
        {/* <Perf /> */}
        <OrbitControls enableZoom={false} />
        <color args={["#000000"]} attach="background" />
        <directionalLight position={[1, 2, 3]} intensity={2.0} />
        <Sparkles count={2000} size={1.5} scale={20} />
        <AvatarModel scale={2} position-y={-2} />
        {/* <Html as="div" fullscreen>
          <Navbar />
        </Html> */}
      </Canvas>
    </>
  );
}
