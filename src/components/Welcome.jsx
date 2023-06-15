import { Sparkles, OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import AvatarModel from "../three/Avatar";
import { HtmlText } from "../three/Html";
import ThreeD from "../three/ThreeD";

export default function WelcomeSection() {
  return (
    <Canvas>
      <OrbitControls enableZoom={false} />
      <color args={["#000000"]} attach="background" />
      <directionalLight position={[1, 2, 3]} intensity={2.0} />
      <Sparkles count={2000} size={1.5} scale={20} />
      <AvatarModel />
      <ThreeD size={0.5}>Zaire McAllister</ThreeD>
      <ThreeD size={0.5} position-y={-1}>
        Frontend Developer
      </ThreeD>
    </Canvas>
  );
}

// const Section = (props) => {
//   const { children } = props;

//   return (
//     <section
//       className={`h-screen w-screen p-8 max-w-screen-2xl mx-auto flex flex-col items-start justify-center`}
//     >
//       {children}
//     </section>
//   );
// };
