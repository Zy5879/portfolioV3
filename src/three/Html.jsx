import { Html } from "@react-three/drei";

export const HtmlText = (props) => {
  const { children } = props;

  return <Html className="text-white">{children}</Html>;
};
