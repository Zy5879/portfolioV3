import { Html } from "@react-three/drei";

export const HtmlText = (props) => {
  const { children } = props;

  return (
    <Html {...props} className="text-white">
      <div className="w-full">{children}</div>
    </Html>
  );
};
