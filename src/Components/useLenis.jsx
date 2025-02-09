import React from "react";
import { ReactLenis } from "@studio-freight/react-lenis";

const useLenis = ({ children }) => {
  return (
    <ReactLenis options={{ duration: 10 }} root>
      {children}
    </ReactLenis>
  );
};

export default useLenis;