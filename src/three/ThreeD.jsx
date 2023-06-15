import { Text3D } from "@react-three/drei";

export default function ThreeD(props) {
  const { children } = props;
  return (
    <Text3D font="./fonts/Roboto Bk_Bold.json" {...props}>
      {children}
      <meshStandardMaterial />
    </Text3D>
  );
}
