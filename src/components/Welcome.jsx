import { Sparkles, OrbitControls, Loader } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import AvatarModel from "../three/Avatar";
import { Perf } from "r3f-perf";
import { Suspense } from "react";

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
      <Loader />
      <Canvas>
        {/* <Perf /> */}
        <OrbitControls enableZoom={false} />
        <color args={["#000000"]} attach="background" />
        <directionalLight position={[1, 2, 3]} intensity={2.0} />
        <Sparkles count={2000} size={1.5} scale={20} />
        <Suspense fallback={null}>
          <AvatarModel scale={2} position-y={-2} />
        </Suspense>
        {/* <Html as="div" fullscreen>
          <Navbar />
        </Html> */}
      </Canvas>
    </>
  );
}
