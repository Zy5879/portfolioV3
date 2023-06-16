import {
  useGLTF,
  Environment,
  Float,
  PresentationControls,
  ContactShadows,
  Html,
} from "@react-three/drei";
import { useMemo } from "react";

export default function Macbook(props) {
  const { scene } = useGLTF(
    "https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/macbook/model.gltf"
  );
  const copiedScene = useMemo(() => scene.clone(), [scene]);
  return (
    <>
      <Environment preset="city" />
      <PresentationControls
        rotation={[0.13, 0.1, 0]}
        polar={[-0.4, 0.2]}
        azimuth={[-1, 0.75]}
        config={{ mass: 2, tenstion: 400 }}
      >
        <Float rotationIntensity={0.4}>
          <rectAreaLight
            width={2.5}
            height={1.65}
            intensity={65}
            color={props.color}
            rotation={[0.1, Math.PI, 0]}
            position={[0, 0.55, -1.15]}
          />
          <primitive
            object={copiedScene}
            scale={1}
            // position-y={props.positiony}
            // rotation-x={props.rotationx}
            // {...props}
            position-y={props.y}
            rotation-x={props.rx}
            // position-y={-1.2}
            // rotation-x={-0.256}
          >
            <Html
              transform
              wrapperClass="htmlScreen"
              distanceFactor={1.17}
              position={[0, 1.56, -1.4]}
              rotation-x={-0.256}
            >
              <iframe src={props.iframe} />
            </Html>
          </primitive>
          ;
        </Float>
      </PresentationControls>

      <ContactShadows position-y={-1.4} opacity={0.4} scale={5} blur={2.4} />
    </>
  );
}
