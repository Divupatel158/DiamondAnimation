import React from "react";
import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls, useGLTF } from "@react-three/drei";
import "./style.css";
const App = () => {
  const isMobile = /Android|iPhone|iPad/i.test(navigator.userAgent);

  return (
    <div className="mainbody">
      <Canvas camera={{ fov: 1, position: [0, 30, 220] }} >
        <OrbitControls autoRotate autoRotateSpeed={isMobile?50:3} />
        <Environment 
          files={["https://dl.polyhaven.org/file/ph-assets/HDRIs/hdr/1k/studio_small_09_1k.hdr"]}
          background={false}
        />
        <Model />
      </Canvas>
    </div>
  );
};
function Model() {
  const { scene } = useGLTF('/diamond.glb');
  return <primitive object={scene} />;
}
export default App; 