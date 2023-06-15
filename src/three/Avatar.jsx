import { Center, useAnimations, useGLTF } from "@react-three/drei";
import { useEffect } from "react";

export default function AvatarModel(props) {
  const avatar = useGLTF("./avatar/avatar-animation-2.glb");
  const { actions } = useAnimations(avatar.animations, avatar.scene);

  useEffect(() => {
    actions.float.play();
  }, []);

  return (
    <>
      <group>
        <primitive {...props} object={avatar.scene} />
      </group>
    </>
  );
}
